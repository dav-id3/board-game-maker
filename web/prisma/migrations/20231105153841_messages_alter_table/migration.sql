/*
  Warnings:

  - Made the column `x` on table `card_states` required. This step will fail if there are existing NULL values in that column.
  - Made the column `y` on table `card_states` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `text` on table `messages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `card_states` MODIFY `x` INTEGER NOT NULL,
    MODIFY `y` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `messages` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `text` VARCHAR(191) NOT NULL;
