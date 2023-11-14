/*
  Warnings:

  - The primary key for the `game_tables` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tableId` on the `game_tables` table. All the data in the column will be lost.
  - The required column `table_id` was added to the `game_tables` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `game_tables` DROP PRIMARY KEY,
    DROP COLUMN `tableId`,
    ADD COLUMN `table_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`table_id`);
