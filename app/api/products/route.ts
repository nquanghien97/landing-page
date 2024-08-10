import prisma from "@/lib/db";
import { removeVietnameseTones } from "@/utils/removeVietnameseTones";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, images, price, description, details } = await req.json();
  const slug = removeVietnameseTones(name)
  try {
    const newProduct = await prisma.product.create({
      data: {
        name, price, description, details, slug
      }
    })
    const dataImage: {imageUrl: string, productId: number}[] = images.map((image: string) => ({
      imageUrl: image,
      productId: newProduct.id,
    }))
    if (images && images.length > 0) {
      await prisma.productImage.createMany({
        data: dataImage,
      });
    }
    return NextResponse.json({ newProduct }, { status: 200 })
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
    const products = await prisma.product.findMany({
      include: {
        images: true
      },
      skip,
      take
    })
    const total = await prisma.product.count()
    return NextResponse.json(
    {
      data: products,
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