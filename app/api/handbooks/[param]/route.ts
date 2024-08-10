// import prisma from "@/lib/db";
import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { param: number } }) {
  const { param } = params;
  const { title, content, imageUrl } = await req.json();
  try {
    if (!param) {
      return NextResponse.json(
        {
          message: 'Handbook ID is required',
        },
        { status: 400 }
      );
    }

    const updatedHandbook = await prisma.$transaction(async (tx) => {
      const handbook = await tx.handbook.update({
        where: { id: +param },
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

export async function GET(req: Request, { params }: { params: { param: number | string } }) {
  const { param } = params
  try {
    if (!isNaN(Number(param))) {
      const handbook = await prisma.handbook.findUnique({
        where: {
          id: +param
        }
      })
      return NextResponse.json(
      {
        data: handbook,
      },
      { status: 200 }
    )
    } else {
      const handbook = await prisma.handbook.findUnique({
        where: {
          slug: param.toString()
        }
      })
      return NextResponse.json(
      {
        data: handbook,
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
    await prisma.handbook.delete({
      where: {
        id: +param
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