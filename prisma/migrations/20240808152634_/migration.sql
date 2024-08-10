/*
  Warnings:

  - You are about to drop the `hanbook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `hanbook`;

-- CreateTable
CREATE TABLE `Handbook` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `imageUrl` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
