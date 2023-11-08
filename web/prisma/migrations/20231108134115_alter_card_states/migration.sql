/*
  Warnings:

  - You are about to drop the column `itemType` on the `card_states` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `card_states` DROP COLUMN `itemType`,
    ADD COLUMN `is_flipped` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `item_type` VARCHAR(191) NOT NULL DEFAULT 'card';
