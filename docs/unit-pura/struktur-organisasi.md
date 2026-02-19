---
sidebar_position: 6
title: Struktur Organisasi
---

# Manajemen Struktur Organisasi

Menu ini digunakan untuk menampilkan susunan pengurus Banjar Pura Agung Kertajaya.

## Tampilan Publik
Di website, struktur organisasi dibagi menjadi dua bagian:
1.  **Bagan Visual (Gambar):** Gambar skema struktur yang bisa di-*zoom*.
2.  **Daftar Nama (Teks):** Daftar nama pengurus yang disusun berdasarkan jabatan.

![Tampilan Struktur Organisasi di Website](/img/pura/organization-public.png)

---

## 1. Mengelola Bagan Visual (Gambar)
Bagian ini khusus untuk menampilkan **gambar skema** struktur organisasi.

![Formulir Upload Gambar Struktur](/img/pura/organization-image-form.png)

1.  Masuk ke menu **Struktur Organisasi**.
2.  Di bagian bawah, Anda akan melihat area pratinjau gambar bagan.
3.  Klik tombol **Ganti Gambar** (berwarna oranye) di pojok kanan bawah area gambar.
4.  Pilih file gambar struktur terbaru dari komputer Anda.
5.  Otomatis tersimpan.

---

## 2. Mengelola Daftar Nama
Sistem akan otomatis menyusun posisi pengurus berdasarkan data yang Anda input.

### Konsep Penting: Level & Urutan
Agar tampilan di website rapi, pahami logika berikut:

* **LEVEL JABATAN (Posisi Atas-Bawah):**
    Menentukan seberapa tinggi posisi jabatan tersebut.
    * **Level 1:** Posisi Tertinggi (Contoh: Pelindung).
    * **Level 2:** Di bawah Level 1 (Contoh: Penasehat, Ketua).
    * **Level 3:** Di bawah Level 2 (Contoh: Sekretaris, Bendahara).
    * *Semakin KECIL angkanya, semakin di ATAS posisinya.*

* **NAMA JABATAN (Pengelompokan):**
    Sistem akan **menggabungkan** orang-orang yang memiliki **Nama Jabatan yang SAMA PERSIS** dalam satu kotak/baris yang sama.
    * *Contoh:* Jika Anda punya 5 orang "Penasehat", pastikan kelimanya ditulis "Penasehat" (Jangan ada yang "Penasehat 1", "Anggota Penasehat", dll, kecuali memang ingin dipisah).

### Daftar Anggota
Di halaman admin, Anda bisa melihat tabel seluruh pengurus yang sudah terdaftar.

![Daftar Anggota Organisasi](/img/pura/organization-list.png)

---

## 3. Menambah Anggota Baru
Untuk menambahkan pengurus ke dalam struktur:

1.  Klik tombol **+ Tambah Anggota** di pojok kanan atas tabel.
2.  Isi formulir dengan teliti:

![Formulir Tambah Anggota](/img/pura/organization-form.png)

* **Nama Lengkap:** Tuliskan nama lengkap beserta gelar.
* **Jabatan:** Tulis nama jabatan.
        :::warning PENTING
        Jika ingin menggabungkan orang ini dengan pengurus lain (misal: sesama Penasehat), **tulisan Jabatannya HARUS SAMA PERSIS** (huruf besar/kecil berpengaruh).
        :::
* **Level Jabatan:** Masukkan angka level (Lihat panduan konsep di atas).
* **Urutan Tampilan:**
    * Jika dalam satu jabatan ada banyak orang (misal: 5 Penasehat), siapa yang muncul pertama?
    * Isi **1** untuk orang pertama, **2** untuk orang kedua, dst.
* **Status Aktif:** Pastikan switch berwarna hijau agar tampil di website.

3.  Klik **Simpan Data**.

---

## 4. Mengedit & Menghapus
Jika ada pergantian pengurus atau kesalahan penulisan jabatan:

![Menu Edit Hapus Organisasi](/img/pura/organization-popup.png)

Klik tombol titik tiga (`...`) di kolom paling kanan:
* **Edit:** Untuk merevisi nama, jabatan, atau mengubah urutan level.
* **Hapus:** Menghapus nama pengurus dari daftar.

:::tip Tips Kerapian
Sebelum menginput data banyak, disarankan untuk merancang strukturnya dulu:
* Siapa saja yang masuk **Level 1**?
* Siapa saja yang masuk **Level 2**?
* Apa nama jabatan seragam yang akan dipakai? (Misal: Sepakat pakai "Seksi Perlengkapan" bukan "Seksi Logistik").
:::