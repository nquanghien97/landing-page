/*
  Warnings:

  - Added the required column `slug` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Handbook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `feedback` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `handbook` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `slug` VARCHAR(191) NOT NULL;
