# Website Yahya Nursidik

Website Astro dengan Keystatic sebagai pengelola konten. Dalam pengembangan lokal, Keystatic menulis langsung ke filesystem. Pada production, Keystatic memakai GitHub dan menyimpan perubahan ke repository `yahyanursidik/website-yahya`.

## Menjalankan website

```bash
npm install
npm run dev
```

- Website: `http://localhost:4321`
- Keystatic: `http://localhost:4321/keystatic`

## Autentikasi Keystatic melalui GitHub

Salin `.env.example` menjadi `.env`, kemudian isi:

```env
KEYSTATIC_GITHUB_CLIENT_ID=
KEYSTATIC_GITHUB_CLIENT_SECRET=
KEYSTATIC_SECRET=
PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=yahyanursidik-keystatic
```

`KEYSTATIC_SECRET` harus berupa nilai acak yang panjang. Jangan commit file `.env` atau menaruh secret di `netlify.toml`.

Untuk menguji login GitHub pada server lokal, tambahkan sementara:

```env
KEYSTATIC_STORAGE=github
```

Callback URL yang harus terdaftar pada GitHub App:

```text
http://127.0.0.1:4321/api/keystatic/github/oauth/callback
https://yahyanursidik.my.id/api/keystatic/github/oauth/callback
```

GitHub App juga harus terpasang dan diberi akses ke repository `yahyanursidik/website-yahya`.

## Environment variable di Netlify

Tambahkan empat variable berikut melalui **Site configuration → Environment variables**:

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`
- `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

Setelah variable tersimpan, jalankan deploy ulang. Panel dapat diakses melalui `https://yahyanursidik.my.id/keystatic` dan perubahan konten akan dibuat sebagai commit di GitHub.

## Pemeriksaan

```bash
npm run astro -- check
npm run build
npm test
```

## Pilihan bahasa halaman utama

Halaman utama mendukung Indonesia (ID), Inggris (EN), dan Arab (العربية).
Pilihan disimpan di browser. Tautan `/?lang=ar` membuka versi Arab secara
langsung dan mengutamakan bahasa di URL daripada preferensi tersimpan.
Pergantian bahasa mempertahankan bagian halaman yang sedang dibuka.

- Kamus Arab: `src/i18n/ar.ts`, menggunakan teks Inggris yang sudah ada sebagai kunci.
- Utilitas bahasa, metadata, dan format angka: `src/i18n/index.ts`.
- Bahasa Arab memakai arah kanan-ke-kiri (RTL), font Noto Sans Arabic, dan penyesuaian navigasi serta aksesibilitas.
- Di Keystatic, buku dan jadwal memiliki kolom terjemahan Arab opsional. Terjemahan yang diisi pengelola diutamakan; jadwal bawaan memakai kamus. Konten baru tanpa terjemahan tetap memakai teks aslinya.
- Terjemahan antarmuka mengikuti mekanisme JavaScript yang sudah digunakan website. Sampul buku dan tangkapan layar tetap berupa gambar asli; label serta teks alternatifnya diterjemahkan. Ini bukan terjemahan isi berkas PDF atau website eksternal.
- Modul terpisah `/hijaiyah` belum menggunakan sistem bahasa halaman utama ini.

`npm test` memeriksa kelengkapan kamus untuk teks antarmuka, katalog,
portofolio, jadwal, serta format penghitung karya.
