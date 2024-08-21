// import prisma from "@/lib/db";
import { removeVietnameseTones } from "@/utils/removeVietnameseTones";
import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";
import { deleteFile, uploadFile } from "@/utils/fileUpload";
import { File } from 'formdata-node';

export async function PUT(req: Request, { params }: { params: { param: number } }) {
  const { param } = params;
  let filenames: string[] = [];
  try {
    if (!param) {
      return NextResponse.json(
        {
          message: 'Handbook ID is required',
        },
        { status: 400 }
      );
    }

    const handbookOld = await prisma.handbook.findUnique({
      where: { id: +param },
    });

    const formData = await req.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const files = Array.from(formData.values()).filter((value): value is File => value instanceof File);
    const slug = removeVietnameseTones(title);

    if (files.length === 0) {
      const updatedHandbook = await prisma.$transaction(async (tx) => {
        const handbook = await tx.handbook.update({
          where: { id: +param },
          data: {
            title,
            content,
            slug
          },
        });

        return handbook;
      });
      return NextResponse.json(
        { updatedHandbook },
        { status: 200 }
      );
    }
    await deleteFile(handbookOld?.imageUrl || '', "handbooks");
    filenames = await uploadFile(files, "handbooks")
    const updatedHandbook = await prisma.$transaction(async (tx) => {
      const handbook = await tx.handbook.update({
        where: { id: +param },
        data: {
          title,
          content,
          imageUrl: filenames[0],
          slug
        },
      });
      return handbook;
    })
    return NextResponse.json(
      { updatedHandbook },
      { status: 200 }
    );

  } catch (err) {
    if (filenames.length > 0) {
      await deleteFile(filenames[0], "handbooks");
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
    const handbook = await prisma.handbook.findUnique({
      where: {
        id: +param
      }
    })
    await prisma.handbook.delete({
      where: {
        id: +param
      }
    })
    await deleteFile(handbook?.imageUrl || "", "handbooks")
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