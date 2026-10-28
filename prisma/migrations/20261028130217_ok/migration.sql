/*
  Warnings:

  - You are about to drop the column `userId` on the `DailyTodo` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Goal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DailyTodo" DROP CONSTRAINT "DailyTodo_userId_fkey";

-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_userId_fkey";

-- AlterTable
ALTER TABLE "DailyTodo" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "userId";
