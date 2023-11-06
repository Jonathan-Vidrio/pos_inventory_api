/*
  Warnings:

  - You are about to drop the column `salary` on the `Worker` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `salary` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Job` ADD COLUMN `salary` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Worker` DROP COLUMN `salary`;

-- CreateIndex
CREATE UNIQUE INDEX `Job_name_key` ON `Job`(`name`);
