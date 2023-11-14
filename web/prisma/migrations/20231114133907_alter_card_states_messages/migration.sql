-- AlterTable
ALTER TABLE `card_states` ADD COLUMN `table_id` VARCHAR(191) NOT NULL DEFAULT 'dev';

-- AlterTable
ALTER TABLE `messages` ADD COLUMN `table_id` VARCHAR(191) NOT NULL DEFAULT 'dev';
