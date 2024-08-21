import { writeFile, unlink } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';
import { File } from 'formdata-node';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const files = Array.from(formData.values()).filter((value): value is File => value instanceof File);

    if (files.length === 0) {
      return NextResponse.json({ error: "Không có file nào được chọn!" }, { status: 400 });
    }

    const promises = files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = Date.now() + file.name.replaceAll(" ", "_");
      await writeFile(
        path.join(process.cwd(), "public/images", filename),
        buffer
      );
      return filename;
    });

    const filenames = await Promise.all(promises);
    return NextResponse.json({ message: "Success!", filenames }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ Message: "Failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { imageId, filename } = await req.json();

  try {
    // Xóa tệp ảnh khỏi hệ thống file
    const filePath = path.join(process.cwd(), "public/images/products", filename as string);
    await unlink(filePath);

    return NextResponse.json({ message: "Ảnh đã được xóa thành công!" }, { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 });
    }
  }
}
