import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, imageUrl, identifier, bankName, bankNumber, type } = await req.json();
  try {
    const newStaff = await prisma.staff.create({
      data: {
        name,
        identifier: identifier ?? null,
        bankName: bankName ?? null,
        bankNumber: bankNumber ?? null,
        type,
        imageUrl
      }
    })
    return NextResponse.json({ newStaff }, { status: 200 })
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = url.searchParams.get('page');
  const pageSize = url.searchParams.get('pageSize');
  const search = url.searchParams.get('search') ?? '';

  // const skip = (page - 1) * pageSize;
  // const take = pageSize;
  try {
    const whereCondition = search
      ? {
          OR: [
            { identifier: search },
            { bankNumber: search }
          ]
        }
      : {};
    const staffs = await prisma.staff.findMany({
      where: whereCondition,
      skip: page && pageSize ? (parseInt(page, 10) - 1) * parseInt(pageSize, 10) : undefined,
      take: pageSize ? parseInt(pageSize, 10) : undefined,
      
    })
    const total = await prisma.staff.count({
      where: whereCondition
    })
    return NextResponse.json(
    {
      data: staffs,
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