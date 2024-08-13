-- CreateTable
CREATE TABLE `Staff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phongNumber` VARCHAR(191) NOT NULL,
    `imageUrl` LONGTEXT NOT NULL,
    `cardNumber` VARCHAR(191) NOT NULL,
    `role` ENUM('MKT', 'SALES', 'OTHER') NOT NULL DEFAULT 'OTHER',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
