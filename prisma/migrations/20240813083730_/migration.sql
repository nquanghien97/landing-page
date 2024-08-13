/*
  Warnings:

  - You are about to drop the column `cardNumber` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `staff` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `staff` DROP COLUMN `cardNumber`,
    DROP COLUMN `phoneNumber`,
    DROP COLUMN `role`,
    ADD COLUMN `bank` VARCHAR(191) NULL,
    ADD COLUMN `identifier` VARCHAR(191) NULL,
    ADD COLUMN `type` ENUM('IDENTIFIER', 'BANK') NOT NULL DEFAULT 'IDENTIFIER';
