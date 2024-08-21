// import prisma from "@/lib/db";
import { deleteFile, uploadFile } from "@/utils/fileUpload";
import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";
import { removeVietnameseTones } from "@/utils/removeVietnameseTones";
import { File } from 'formdata-node';

export async function PUT(req: Request, { params }: { params: { param: number } }) {
  const { param } = params;
  let filenames: string[] = [];
  try {
    if (!param) {
      return NextResponse.json(
        {
          message: 'Product param is required',
        },
        { status: 400 }
      );
    }
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;
    const details = formData.get('details') as string;
    const files = Array.from(formData.values()).filter((value): value is File => value instanceof File);

    const slug = removeVietnameseTones(name);
    if (files.length === 0) {
      const updatedProduct = await prisma.$transaction(async (tx) => {
        const product = await tx.product.update({
          where: { id: +param },
          data: {
            name,
            price: +price,
            description,
            details,
            slug
          },
        });
        return product;
      });

      return NextResponse.json(
        { updatedProduct },
        { status: 200 }
      );
    }
    const listImages = await prisma.productImage.findMany({
      where: {
        productId: +param
      }
    })
    await Promise.all(listImages.map((filename) => deleteFile(filename.imageUrl.split('/').pop()?.toString() || '', "products")));
    await prisma.productImage.deleteMany({
      where: {
        productId: +param
      }
    })
    filenames = await uploadFile(files, "products");
    const updatedProduct = await prisma.$transaction(async (tx) => {
      const product = await tx.product.update({
        where: { id: +param },
        data: {
          name,
          price: +price,
          description,
          details,
          slug,
          images: {
            create: filenames.map(filename => ({
              imageUrl: `/images/products/${filename}`
            }))
          }
        },
      });
      return product;
    });

    return NextResponse.json(
      { updatedProduct },
      { status: 200 }
    );
  } catch (err) {
    if (filenames.length > 0) {
      await Promise.all(filenames.map((filename) => deleteFile(filename, "products")));
    }
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}

export async function GET(req: Request, { params }: { params: { param: number | string } }) {
  const { param } = params
  try {
    if (!isNaN(Number(param))) {
      const products = await prisma.product.findUnique({
        include: {
          images: true
        },
        where: {
          id: +param
        }
      })
      return NextResponse.json(
        {
          data: products,
        },
        { status: 200 }
      )
    } else {
      const products = await prisma.product.findUnique({
        include: {
          images: true
        },
        where: {
          slug: param.toString()
        }
      })
      return NextResponse.json(
        {
          data: products,
        },
        { status: 200 }
      )
    }
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}

export async function DELETE(req: Request, { params }: { params: { param: number } }) {
  const { param } = params
  try {
    await prisma.productImage.deleteMany({
      where: {
        productId: +param
      }
    })
    await prisma.product.delete({
      where: {
        id: +param
      }
    })
    const listImages = await prisma.productImage.findMany({
      where: {
        productId: +param
      }
    })
    await Promise.all(listImages.map((filename) => deleteFile(filename.imageUrl.split('/').pop()?.toString() || '', "products")));

    return NextResponse.json(
      {
        message: 'Xóa sản phẩm thành công',
      },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}