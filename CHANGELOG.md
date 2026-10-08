# Catatan Perubahan

Versi aplikasi mengikuti Semantic Versioning (`MAJOR.MINOR.PATCH`) dan dicatat
di `package.json`, `package-lock.json`, serta tag Git `vMAJOR.MINOR.PATCH`.
Gunakan PATCH untuk perbaikan, MINOR untuk penambahan fitur yang kompatibel,
dan MAJOR untuk perubahan yang tidak kompatibel. Selama versi `0.x`, aplikasi
masih dalam tahap pengembangan awal.

## [0.2.0] - 2026-10-08

### Ditambahkan
- **Doaku — Hafalku Doa** di kategori Aplikasi pembelajaran & eksperimen,
  dengan tautan, deskripsi bilingual, dan preview WebP.
- Tautan langsung menu hero ke Platform & sistem, Website & layanan digital,
  serta Aplikasi pembelajaran & eksperimen.

### Diperbaiki
- Tautan kategori membuka filter yang sesuai sebelum berpindah ke bagian tujuan,
  termasuk saat kategori sebelumnya tersembunyi atau hash URL tidak berubah.
- Akses kategori melalui URL ber-hash dan navigasi kembali/maju browser.
- Penomoran dan deskripsi menu hero disesuaikan menjadi enam jalur navigasi.

## [0.1.0] - 2026-10-08

### Ditambahkan
- Portofolio Website SDTQ Fajar Sunnah dengan tautan dan preview.
- Preview Website Sekolah Tarbiyah Sunnah Lab School.
- PahamHitung, website belajar matematika SD kelas 1–6.
- Hafalku, aplikasi pendamping hafalan Al-Qur'an dari Juz Amma.
- Empat preview proyek dalam format WebP.

### Diperbarui
- Kategori **Aplikasi pembelajaran & eksperimen** untuk PahamHitung dan Hafalku,
  termasuk dukungan aplikasi bertautan eksternal.
- Card portofolio dengan preview berukuran konsisten, jarak antarkartu,
  domain tujuan, serta seluruh area card yang dapat diklik.
- Tata letak dua kolom pada desktop dan satu kolom pada ponsel.
- Filter kategori yang membungkus baris di layar kecil dan tombol minimal 44 px.
- Penghitung portofolio menampilkan jumlah karya terlihat dibanding total.
- Indikator fokus keyboard, keterangan tab baru, teks alternatif bilingual,
  dan jarak gulir agar judul tidak tertutup header.

### Dihapus
- Card **Bermain Hijaiyah** dan **Permainan Edukasi** dari portofolio.
  Halaman aplikasi yang sudah ada tidak dihapus.

[0.1.0]: https://github.com/yahyanursidik/website-yahya/tree/v0.1.0
[0.2.0]: https://github.com/yahyanursidik/website-yahya/compare/v0.1.0...v0.2.0
