import { removeVietnameseTones } from "@/utils/removeVietnameseTones";
import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, content, imageUrl } = await req.json();
  const slug = removeVietnameseTones(title)
  try {
    const newHanbook = await prisma.handbook.create({
      data: {
        title, content, imageUrl, slug
      }
    })
    return NextResponse.json({ newHanbook }, { status: 200 })
  } catch (err) {
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
    const handbooks = await prisma.handbook.findMany({
      skip,
      take
    })
    const total = await prisma.handbook.count()
    return NextResponse.json(
    {
      data: handbooks,
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