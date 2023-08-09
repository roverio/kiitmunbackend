/*
  Warnings:

  - Added the required column `d_year` to the `DoubleDelegate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `s_year` to the `DoubleDelegate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DoubleDelegate" ADD COLUMN     "d_year" INTEGER NOT NULL,
ADD COLUMN     "s_year" INTEGER NOT NULL;
