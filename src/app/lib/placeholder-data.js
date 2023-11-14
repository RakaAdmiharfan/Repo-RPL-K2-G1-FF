// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    name: "User One",
    tanggallahir: "1990-01-15",
    noTelp: "123-456-7890",
    alamat: "123 Main St, City, Country",
    role: "user",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    name: "User Two",
    tanggallahir: "1985-05-20",
    noTelp: "987-654-3210",
    alamat: "456 Elm St, Town, Country",
    role: "admin",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "555-555-5555",
    alamat: "789 Maple St, Village, Country",
    role: "user",
  },
  {
    id: 4,
    username: "user4",
    password: "password4",
    name: "User Four",
    tanggallahir: "1992-03-30",
    noTelp: "111-222-3333",
    alamat: "321 Oak St, Hamlet, Country",
    role: "user",
  },
  {
    id: 5,
    username: "user5",
    password: "password5",
    name: "User Five",
    tanggallahir: "1987-07-05",
    noTelp: "444-555-6666",
    alamat: "654 Pine St, City, Country",
    role: "user",
  },
];

const capacity = [
  {
    id: 1,
    dailyCapacity: 100,
  },
  {
    id: 2,
    dailyCapacity: 200,
  },
  {
    id: 3,
    dailyCapacity: 300,
  },
  {
    id: 4,
    dailyCapacity: 400,
  },
  {
    id: 5,
    dailyCapacity: 500,
  },
];

const packageInfos = [
  {
    packageId: "abc123",
    namaPelanggan: "Customer A",
    alamatPengirim: "123 Oak St, City, Country",
    noTelp: "555-123-4567",
    jenisBunga: "Roses",
    catatanPelanggan: "Fragile items inside",
    tanggalPengiriman: "2023-11-10",
    statusPengiriman: "shipped",
    hasUpdateStatus: true,
    report: "Delivered on time",
    proofOfDelivery: "https://example.com/delivery-proof/abc123.jpg",
    stafPengirim: 1,
  },
  {
    packageId: "def456",
    namaPelanggan: "Customer B",
    alamatPengirim: "456 Pine St, City, Country",
    noTelp: "555-987-6543",
    jenisBunga: "Tulips",
    catatanPelanggan: "Handle with care",
    tanggalPengiriman: "2023-11-12",
    statusPengiriman: "processing",
    hasUpdateStatus: false,
    report: "",
    proofOfDelivery: "",
    stafPengirim: 2,
  },
  {
    packageId: "ghi789",
    namaPelanggan: "Customer C",
    alamatPengirim: "789 Elm St, City, Country",
    noTelp: "555-555-5555",
    jenisBunga: "Lilies",
    catatanPelanggan: "Handle with care",
    tanggalPengiriman: "2023-11-14",
    statusPengiriman: "processing",
    hasUpdateStatus: false,
    report: "",
    proofOfDelivery: "",
    stafPengirim: 3,
  },
  {
    packageId: "jkl012",
    namaPelanggan: "Customer D",
    alamatPengirim: "123 Oak St, City, Country",
    noTelp: "555-123-4567",
    jenisBunga: "Roses",
    catatanPelanggan: "Fragile items inside",
    tanggalPengiriman: "2023-11-16",
    statusPengiriman: "processing",
    hasUpdateStatus: false,
    report: "",
    proofOfDelivery: "",
    stafPengirim: 4,
  },
];

console.log(users);
console.log(capacities);
console.log(packageInfos);
