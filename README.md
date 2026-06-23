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
```
