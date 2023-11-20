/*
  Warnings:

  - Changed the type of `role` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('MANAGER', 'STAFF');

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "tanggalLahir" DROP NOT NULL,
ALTER COLUMN "alamat" DROP NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Roles" NOT NULL;
