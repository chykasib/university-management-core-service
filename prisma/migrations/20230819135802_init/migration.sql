/*
  Warnings:

  - You are about to drop the column `endMoth` on the `academic_semesters` table. All the data in the column will be lost.
  - Added the required column `endMonth` to the `academic_semesters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "academic_semesters" DROP COLUMN "endMoth",
ADD COLUMN     "endMonth" TEXT NOT NULL;
