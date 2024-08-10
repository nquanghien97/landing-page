/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Feedback` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Handbook` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Feedback_slug_key` ON `Feedback`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `Handbook_slug_key` ON `Handbook`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_slug_key` ON `Product`(`slug`);
