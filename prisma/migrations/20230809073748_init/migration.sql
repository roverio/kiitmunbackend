/*
  Warnings:

  - You are about to drop the column `accomodation` on the `DoubleDelegate` table. All the data in the column will be lost.
  - You are about to drop the column `accomodation_type` on the `DoubleDelegate` table. All the data in the column will be lost.
  - You are about to drop the column `accomodation` on the `SingleDelegate` table. All the data in the column will be lost.
  - You are about to drop the column `accomodation_type` on the `SingleDelegate` table. All the data in the column will be lost.
  - Added the required column `accommodation` to the `DoubleDelegate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accommodation` to the `SingleDelegate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DoubleDelegate" DROP COLUMN "accomodation",
DROP COLUMN "accomodation_type",
ADD COLUMN     "accommodation" TEXT NOT NULL,
ADD COLUMN     "accommodation_type" TEXT;

-- AlterTable
ALTER TABLE "SingleDelegate" DROP COLUMN "accomodation",
DROP COLUMN "accomodation_type",
ADD COLUMN     "accommodation" TEXT NOT NULL,
ADD COLUMN     "accommodation_type" TEXT;
