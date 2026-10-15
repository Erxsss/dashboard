/*
  Warnings:

  - Added the required column `userId` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DailyTodo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DailyTodo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "DailyTodo" ADD CONSTRAINT "DailyTodo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
