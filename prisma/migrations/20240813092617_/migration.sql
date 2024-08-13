/*
  Warnings:

  - You are about to drop the column `bank` on the `staff` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `staff` DROP COLUMN `bank`,
    ADD COLUMN `bankName` VARCHAR(191) NULL,
    ADD COLUMN `bankNumber` VARCHAR(191) NULL,
    MODIFY `imageUrl` LONGTEXT NULL;
