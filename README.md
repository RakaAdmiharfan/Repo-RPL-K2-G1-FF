# Selamat Datang di Aplikasi Flora Finder

## Apa Itu Flora Finder ?
Flora Finder adalah sebuah dashboard yang dirancang khusus untuk mengembangkan efisiensi dan transparansi dalam seluruh proses pengiriman bunga. Dengan tujuan tersebut, diharapkan setiap pengiriman berjalan dengan optimal, efisien, dan dapat terus terlacak secara akurat. Sistem ini disesuaikan untuk dua kelompok pengguna utama, yaitu manajer operasional yang memiliki kendali atas pengelolaan staf pengiriman, serta staf pengiriman yang bertugas untuk mengantarkan bunga kepada pelanggan. 

## Getting Started

Pertama-tama, run development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) dengan browser anda untuk melihat aplikasi Flora Finder.

## Daftar Use Case dan Penangggung Jawab

| Use Case | Deskripsi | NIM Penanggung Jawab | Nama Penanggung Jawab |
| --------- | ---------- | -------------------- | --------------------- |
| UC01 | Login | 18219xxx | Dwiki Hared |
| UC02 | Mengelola akun staf pengiriman | 18221094 | Raka Admiharfan Fatihah |
| UC03 | Meng-assign paket | 18221156 | Fredrick Runie Taslim |
| UC04 | Melihat daftar paket yang sedang dikirim | 18221170 | Amjad Adhie Prasetyo |
| UC05 | Melihat daftar paket yang belum dikirim | 18221170 | Amjad Adhie Prasetyo |
| UC06 | Melihat notifikasi perubahan status paket dan masalah | 18221060 | Auvarifqi Putra Diandra |
| UC07 | Melihat riwayat pengiriman | 18221094 | Raka Admiharfan Fatihah |
| UC08 | Menampilkan daftar paket yang harus diantar | 18221156 | Fredrick Runie Taslim |
| UC09 | Merubah status paket | 18221094 | Raka Admiharfan Fatihah |
| UC10 | Mengunggah foto pengiriman | 18221060 | Auvarifqi Putra Diandra |
| UC11 | Menerima laporan masalah | 18219xxx | Dwiki Hared |
| UC12 | Mengunggah laporan masalah | 18221170 | Amjad Adhie Prasetyo |

Disclaimer: Kami mengerjakan semua fungsionalitas secara bersama-sama

## Daftar Layar-Layar Aplikasi Flora Finder
### Layar Manajer Operasional
#### 1. Halaman Login 1
![Halaman Login 1](snippet-pages/1-manops-login.png)
#### 2. Halaman Login 2
![Halaman Login 2](snippet-pages/2-manops-login2.png)
#### 3. Halaman Login 3
![Halaman Login 3](snippet-pages/3-manops-login3.png)
#### 4. Halaman List Packages
![Halaman List Packages](snippet-pages/4-manops-list_packages.png)
#### 5. Halaman Delivered Packages
![Halaman Delivered Packages](snippet-pages/5-manops-delivered_packages_only.png)
#### 6. Halaman Check Laporan Packages
![Halaman Check Laporan Packages](snippet-pages/6-manops-check_laporan.png)
#### 7. Halaman Detail Package
![Halaman Detail Package](snippet-pages/7-manops-package_detail.png)
#### 8. Halaman Not Assigned Package
![Halaman Not Assigned Package](snippet-pages/8-manops-unassigned_packages.png)
#### 9. Halaman Assign Package to Staff
![Halaman Assign Package](snippet-pages/1-manops-login.png)
#### 10. Halaman Staff List
![Halaman Staff List](snippet-pages/10-manops-staff_list.png)
#### 11. Halaman Edit Staff
![Halaman Edit Staff](snippet-pages/12-manops-edit_staff.png)
#### 12. Halaman Create Staff
![Halaman Create Staff](snippet-pages/13-manops-create_staff.png)
#### 13. Halaman Notifikasi
![Halaman Notifikasi](snippet-pages/14-manops-notif.png)

### Layar Delivery Staff
#### 1. Halaman Login 1
![Halaman Login 1](snippet-pages/15-staff-login.png)
#### 2. Halaman Login 2
![Halaman Login 2](snippet-pages/16-staff-login2.png)
#### 3. Halaman Login 3
![Halaman Login 3](snippet-pages/17-staff-login3.png)
#### 4. Halaman List Packages
![Halaman List Packages](snippet-pages/18-staff-packageList1.png)
#### 5. Halaman List Packages (Scrolled)
![Halaman List Packages 2](snippet-pages/19-staff-packageList2.png)
#### 6. Halaman Change Package Status
![Halaman Change Package Status](snippet-pages/20-staff-change_status.png)
#### 7. Halaman Lapor Masalah
![Halaman Lapor Masalah](snippet-pages/21-staff-lapor_masalah.png)
#### 8. Halaman Upload Proof Package
![Halaman Upload Proof Package](snippet-pages/22-staff-upload_proof.png)

## Daftar Tabel Basis Data
### 1. Tabel ```user```
| user |
| --------- |
| ID: number |
| username: string |
| password: string |
| nama : string |
| tanggalLahir : date |
| noTelp : number |
| alamat : string |
| role : string |

### 2. Tabel ```packageInfo```
| packageInfo |
| --------- |
| packageID: number |
| namaPelanggan: string |
| alamatPengiriman: string |
| noTelp: number |
| jenisBunga: string |
| catatanPelanggan: string |
| tanggalPengiriman: date |
| stafPengiriman: number |
| statusPengiriman: string |
| hasUpdateStatus: boolean |
| report: string |
| proof: string |

### 3. Tabel ```capacity```
| capacity |
| --------- |
| staffID: number |
| dailyCapacity: number |





