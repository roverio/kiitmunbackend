/*
  Warnings:

  - Added the required column `year` to the `SingleDelegate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SingleDelegate" ADD COLUMN     "year" INTEGER NOT NULL;
