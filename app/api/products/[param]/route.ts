// import prisma from "@/lib/db";
import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { param: number } }) {
  const { param } = params;
  const { name, images, price, description, details } = await req.json();

  try {
    if (!param) {
      return NextResponse.json(
        {
          message: 'Product param is required',
        },
        { status: 400 }
      );
    }

    const updatedProduct = await prisma.$transaction(async (tx) => {
      const product = await tx.product.update({
        where: { id: +param },
        data: {
          name,
          price,
          description,
          details,
        },
      });

      await tx.productImage.deleteMany({
        where: { productId: +param },
      });

      if (images && images.length > 0) {
        await Promise.all(
          images.map((image: string) =>
            tx.productImage.create({
              data: {
                productId: +param,
                imageUrl: image,
              },
            })
          )
        );
      }

      return product;
    });

    return NextResponse.json(
      { updatedProduct },
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
    return NextResponse.json(
      {
        message: 'Product and associated images deleted successfully',
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