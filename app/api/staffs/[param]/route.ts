import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { param: number } }) {
  const { param } = params;
  const { name, bankName, identifier, type, bankNumber } = await req.json();

  try {
    if (!param) {
      return NextResponse.json(
        {
          message: 'Staff param is required',
        },
        { status: 400 }
      );
    }

    const updatedProduct = await prisma.$transaction(async (tx) => {
      const staff = await tx.staff.update({
        where: { id: +param },
        data: {
          name,
          identifier: identifier ?? null,
          bankName: bankName ?? null,
          bankNumber: bankNumber ?? null,
          type
        },
      });

      return staff;
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

export async function DELETE(req: Request, { params }: { params: { param: number } }) {
  const { param } = params
  try {
    await prisma.staff.deleteMany({
      where: {
        id: +param
      }
    })
    return NextResponse.json(
      {
        message: 'Staff deleted successfully',
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

export async function GET(req: Request, { params }: { params: { param: number | string } }) {
  const { param } = params
  try {
    const staff = await prisma.staff.findUnique({
      where: {
        id: +param
      }
    })
    return NextResponse.json(
      {
        data: staff,
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