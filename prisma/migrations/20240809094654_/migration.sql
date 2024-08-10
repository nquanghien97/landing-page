/*
  Warnings:

  - You are about to drop the column `iframeUrl` on the `feedback` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailUrl` on the `feedback` table. All the data in the column will be lost.
  - Added the required column `content` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `feedback` DROP COLUMN `iframeUrl`,
    DROP COLUMN `thumbnailUrl`,
    ADD COLUMN `content` LONGTEXT NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `imageUrl` LONGTEXT NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
