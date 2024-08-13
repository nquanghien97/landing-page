/*
  Warnings:

  - You are about to drop the column `phongNumber` on the `staff` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `staff` DROP COLUMN `phongNumber`,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL;
