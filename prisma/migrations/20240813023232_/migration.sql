/*
  Warnings:

  - You are about to alter the column `cardNumber` on the `staff` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `phoneNumber` on the `staff` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `staff` MODIFY `cardNumber` INTEGER NOT NULL,
    MODIFY `phoneNumber` INTEGER NOT NULL;
