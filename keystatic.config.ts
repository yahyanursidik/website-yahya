import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'development' ? {
    kind: 'local',
  } : {
    kind: 'github',
    repo: 'yahyanursidik/website-yahya',
  },
  singletons: {
    quoteBeranda: singleton({
      label: 'Kutipan Beranda',
      path: 'src/content/quote-beranda/data',
      format: { data: 'json' },
      schema: {
        quote: fields.text({ label: 'Teks Kutipan', multiline: true }),
        linkText: fields.text({ label: 'Teks Link', defaultValue: 'Baca Profil Selengkapnya' }),
        linkUrl: fields.url({ label: 'URL Link' }),
      },
    }),
  },
  collections: {
    jadwal: collection({
      label: 'Jadwal Kelas / Seminar',
      slugField: 'title',
      path: 'src/content/jadwal/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Kelas / Seminar' } }),
        description: fields.text({ label: 'Deskripsi Singkat', multiline: true }),
        type: fields.select({
          label: 'Jenis',
          options: [
            { label: 'Pelatihan', value: 'Pelatihan' },
            { label: 'Program', value: 'Program' },
            { label: 'Webinar', value: 'Webinar' },
          ],
          defaultValue: 'Pelatihan',
        }),
        format: fields.text({ label: 'Format (Contoh: Online, LMS Daring, Offline)' }),
        status: fields.text({ label: 'Status / Keterangan Waktu (Contoh: Kuota Terbatas, Segera Hadir)' }),
        link: fields.url({ label: 'Link Pendaftaran' }),
      },
    }),
    buku: collection({
      label: 'Karya Pilihan (Buku/Ebook)',
      slugField: 'title',
      path: 'src/content/buku/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Buku' } }),
        description: fields.text({ label: 'Deskripsi Singkat', multiline: true }),
        coverUrl: fields.url({ label: 'URL Gambar Cover' }),
        link: fields.url({ label: 'Link Detail/Beli (Opsional)' }),
      },
    }),
  },
});
