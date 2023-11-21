/*
  Warnings:

  - Made the column `tanggalLahir` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "noTelp" TEXT,
ALTER COLUMN "tanggalLahir" SET NOT NULL;
