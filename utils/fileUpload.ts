import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { File } from 'formdata-node';

export async function uploadFile(files: File[], folderPath: string) {

  const promises = files.map(async (file) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");
    await writeFile(
      path.join(process.cwd(), `images/${folderPath}`, filename),
      buffer
    );
    return filename;
  });

  const filenames = await Promise.all(promises);
  return filenames
}

export async function deleteFile(filename: string, folderPath: string) {
  // Xóa tệp ảnh khỏi hệ thống file
  const filePath = path.join(process.cwd(), filename);
  console.log({filePath})
  try {
    await unlink(filePath);
  } catch(err) {
    console.log(err)
  }
}