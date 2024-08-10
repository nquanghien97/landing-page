// import prisma from "@/lib/db";
import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: number } }) {
  const { id } = params;
  const { name, images, price, description, details } = await req.json();

  try {
    if (!id) {
      return NextResponse.json(
        {
          message: 'Product ID is required',
        },
        { status: 400 }
      );
    }

    const updatedProduct = await prisma.$transaction(async (tx) => {
      const product = await tx.product.update({
        where: { id: +id },
        data: {
          name,
          price,
          description,
          details,
        },
      });

      await tx.productImage.deleteMany({
        where: { productId: +id },
      });

      if (images && images.length > 0) {
        await Promise.all(
          images.map((image: string) =>
            tx.productImage.create({
              data: {
                productId: +id,
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

export async function GET(req: Request, { params }: { params: { id: number } }) {
  const { id } = params
  try {
    const products = await prisma.product.findUnique({
      include: {
        images: true
      },
      where: {
        id: +id
      }
    })
    return NextResponse.json(
    {
      data: products,
    },
    { status: 200 }
  )
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}

export async function DELETE(req: Request, { params }: { params: { id: number } }) {
  const { id } = params
  try {
    await prisma.productImage.deleteMany({
      where: {
        productId: +id
      }
    })
    await prisma.product.delete({
      where: {
        id: +id
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