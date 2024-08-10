import prisma from "@/lib/db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({
      success: false,
      message: "Missing email or password"
    }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Incorrect email or password"
      }, { status: 400 });
    }

    const passwordValidated = await bcrypt.compare(password, user.password);
    if (!passwordValidated) {
      return NextResponse.json({
        success: false,
        message: "Incorrect email or password"
      }, { status: 400 });
    }

    const accessToken = jwt.sign({ userId: user.id }, process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET || '');

    return NextResponse.json({
      success: true,
      message: "Login successfully",
      accessToken
    }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: "Server error, please try again.",
      error: err.message,
    }, { status: 500 });
  }
}
