// import prisma from "@/lib/db";
import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: number } }) {
  const { id } = params;
  const { title, content, imageUrl } = await req.json();
  try {
    if (!id) {
      return NextResponse.json(
        {
          message: 'Handbook ID is required',
        },
        { status: 400 }
      );
    }

    const updatedHandbook = await prisma.$transaction(async (tx) => {
      const handbook = await tx.handbook.update({
        where: { id: +id },
        data: {
          title,
          content,
          imageUrl
        },
      });

      return handbook;
    });

    return NextResponse.json(
      { updatedHandbook },
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
    const handbook = await prisma.handbook.findUnique({
      where: {
        id: +id
      }
    })
    return NextResponse.json(
    {
      data: handbook,
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
    await prisma.handbook.delete({
      where: {
        id: +id
      }
    })
    return NextResponse.json(
      {
        message: 'Xóa Cẩm nang thành công',
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