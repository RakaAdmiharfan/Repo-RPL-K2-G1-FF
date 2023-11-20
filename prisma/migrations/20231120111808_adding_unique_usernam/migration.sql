-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "capacity" (
    "staffID" INTEGER NOT NULL,
    "dailyCapacity" INTEGER NOT NULL,

    CONSTRAINT "capacity_pkey" PRIMARY KEY ("staffID")
);

-- CreateTable
CREATE TABLE "packageInfo" (
    "packageID" INTEGER NOT NULL,
    "namaPelanggan" TEXT NOT NULL,
    "alamatPengiriman" TEXT NOT NULL,
    "noTelp" TEXT NOT NULL,
    "jenisBunga" TEXT NOT NULL,
    "catatanPelanggan" TEXT NOT NULL,
    "tanggalPengiriman" TIMESTAMP(3) NOT NULL,
    "statusPengiriman" TEXT NOT NULL,
    "hasUpdateStatus" BOOLEAN NOT NULL,
    "report" TEXT NOT NULL,
    "proof" TEXT NOT NULL,
    "staffPengiriman" INTEGER NOT NULL,

    CONSTRAINT "packageInfo_pkey" PRIMARY KEY ("packageID")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
