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
          message: 'Feedback ID is required',
        },
        { status: 400 }
      );
    }

    const updatedFeedback = await prisma.$transaction(async (tx) => {
      const feedback = await tx.feedback.update({
        where: { id: +id },
        data: {
          title,
          content,
          imageUrl
        },
      });

      return feedback;
    });

    return NextResponse.json(
      { updatedFeedback },
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
    const feedback = await prisma.feedback.findUnique({
      where: {
        id: +id
      }
    })
    return NextResponse.json(
    {
      data: feedback,
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
    await prisma.feedback.delete({
      where: {
        id: +id
      }
    })
    return NextResponse.json(
      {
        message: 'Xóa Feedback thành công',
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