import { removeVietnameseTones } from "@/utils/removeVietnameseTones";
import prisma from "../../../lib/db";
import { NextResponse } from "next/server";
import { deleteFile, uploadFile } from "@/utils/fileUpload";
import { File } from 'formdata-node';

export async function POST(req: Request) {
  let filenames: string[] = [];
  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const files = Array.from(formData.values()).filter((value): value is File => value instanceof File);
    const slug = removeVietnameseTones(title);

    if (files.length === 0) {
      return NextResponse.json({ message: "Không file nào được chọn" }, { status: 400 });
    }

    filenames = await uploadFile(files, "feedbacks");
    const newFeedback = await prisma.feedback.create({
      data: {
        title,
        content,
        slug,
        imageUrl: `/images/feedbacks/${filenames[0]}`
      }
    })
    return NextResponse.json({ newFeedback }, { status: 200 })
  } catch (err) {
    if (filenames.length > 0) {
      await Promise.all(filenames.map((filename) => deleteFile(filename, "feedbacks")));
    }
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message}, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') ?? '1', 10);
  const pageSize = parseInt(url.searchParams.get('pageSize') ?? '10', 10);

  const skip = (page - 1) * pageSize;
  const take = pageSize;
  try {
    const feedbacks = await prisma.feedback.findMany({
      skip,
      take
    })
    const total = await prisma.feedback.count()
    return NextResponse.json(
    {
      data: feedbacks,
      paging: {
        page,
        pageSize,
        total
      }
    },
    { status: 200 }
  )
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong"
    }, { status: 500 })
  }
}