// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type user = {
  id: number;
  username: string;
  password: string;
  name: string;
  tanggallahir: string;
  noTelp: string;
  alamat: string;
  role: string;
};

export type capacity = {
  id: number;
  dailyCapacity: number;
};

export type PackageInfo = {
  packageId: string;
  namaPelanggan: string;
  alamatPengirim: string;
  noTelp: string;
  jenisBunga: string;
  catatanPelanggan: string;
  tanggalPengiriman: string;
  statusPengiriman: string;
  hasUpdateStatus: boolean;
  report: string;
  proofOfDelivery: string;
  stafPengirim: number;
};
