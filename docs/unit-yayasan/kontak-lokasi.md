---
sidebar_position: 11
title: Kontak & Lokasi
---

# Manajemen Kontak & Lokasi

Menu **Kontak & Lokasi** berfungsi untuk mengatur informasi alamat, nomor telepon, dan peta digital yang tampil di halaman khusus "Kontak" maupun di *footer* website.

Informasi yang akurat di sini sangat vital untuk memudahkan umat atau tamu menemukan lokasi Yayasan.

## Tampilan Publik
Pada halaman website, data ini akan ditampilkan dalam bagian **"Kunjungi Kami"** yang terbagi menjadi dua panel:

1.  **Panel Informasi (Kiri):** Menampilkan kartu detail yang rapi mencakup:
    * 📍 Alamat Lengkap
    * 📞 Telepon / WhatsApp
    * ✉️ Email
    * 🕒 Jam Operasional
2.  **Panel Peta (Kanan):** Menampilkan peta Google Maps interaktif yang dilengkapi dengan tombol **Petunjuk Arah** (Google Maps) untuk navigasi langsung.

![Tampilan Halaman Kontak di Website](/img/yayasan/contact-public.png)

---

## 1. Melihat Data Kontak
Saat membuka menu ini, Anda akan melihat ringkasan informasi kontak yang saat ini sedang tayang.

![Tampilan Informasi Kontak di Admin](/img/yayasan/contact-list.png)

Di halaman ini, Anda bisa melihat preview data yang aktif, mulai dari alamat hingga peta lokasi.

---

## 2. Mengubah Informasi (Edit)
Untuk memperbarui data (misalnya perubahan nomor admin atau jam buka), klik tombol **Edit (Ikon Pensil)** di pojok kanan atas kotak informasi.

Anda akan diarahkan ke formulir berikut:

![Formulir Edit Kontak](/img/yayasan/contact-form.png)

### A. Detail Informasi (Kiri)
Isilah kolom-kolom berikut dengan data terbaru:
* **Alamat Lengkap:** Tuliskan nama jalan, RT/RW, Kelurahan, Kecamatan, dan Kode Pos.
* **Telepon / WA:** Masukkan nomor kontak sekretariat (Format: `08...`).
* **Email:** Alamat email resmi untuk korespondensi.
* **Jam Operasional:** Informasi waktu pelayanan (Contoh: `Senin - Minggu: 07:00 - 20:00`).

### B. Peta Lokasi (Kanan) - ⚠️ PENTING
Bagian ini mengatur peta yang muncul di panel kanan website.

**Kolom: Google Maps Embed URL (src)**
Kolom ini berisi *link khusus* agar peta bisa muncul. **JANGAN DIUBAH** jika lokasi yayasan tidak pindah.

Jika Anda harus memperbarui peta (misal pin lokasi geser), ikuti langkah ini:
1.  Buka [Google Maps](https://www.google.com/maps) di browser komputer.
2.  Cari lokasi "Pura Agung Kertajaya".
3.  Klik tombol **Bagikan (Share)** -> Pilih tab **Sematkan Peta (Embed a map)**.
4.  Salin kode HTML yang diberikan (biasanya diawali `<iframe src="...`).
5.  Ambil **HANYA** link di dalam tanda kutip setelah `src=`.
    * *Contoh:* `https://www.google.com/maps/embed?pb=...!2id`
6.  Paste link tersebut ke kolom ini.

Klik **Simpan Perubahan** untuk memperbarui data di website.