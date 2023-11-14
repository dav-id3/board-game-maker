/*
  Warnings:

  - You are about to drop the `tables` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `tables`;

-- CreateTable
CREATE TABLE `game_tables` (
    `tableId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`tableId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
