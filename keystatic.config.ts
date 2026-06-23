import { config, fields, collection, singleton } from '@keystatic/core';

const useGitHubStorage =
  process.env.NODE_ENV === 'production' ||
  process.env.KEYSTATIC_STORAGE === 'github';

export default config({
  storage: useGitHubStorage
    ? {
        kind: 'github',
        repo: 'yahyanursidik/website-yahya',
      }
    : {
        kind: 'local',
      },
  ui: {
    brand: {
      name: 'Yahya Nursidik — Pengelola Konten',
    },
  },
  singletons: {
    parentGuide: singleton({
      label: 'Hijaiyah Play - Panduan Orang Tua',
      path: 'src/content/hijaiyah/parent-guide',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Judul', defaultValue: 'Panduan Orang Tua & Pendidik' }),
        content: fields.text({ 
          label: 'Isi Panduan', 
          multiline: true,
          defaultValue: 'Aplikasi ini dirancang sebagai alat bantu belajar dan murojaah huruf Hijaiyah dasar. Penting untuk dicatat bahwa aplikasi ini TIDAK menggantikan posisi talaqqi (belajar tatap muka) dengan guru atau orang tua yang cakap dalam membaca Al-Quran.'
        }),
      },
    }),
  },
  collections: {
    kutipan: collection({
      label: 'Kutipan (Quotes)',
      slugField: 'author',
      path: 'src/content/kutipan/*',
      format: { data: 'json' },
      schema: {
        author: fields.slug({ name: { label: 'Sumber / Tokoh (Gunakan nama tanpa spasi untuk ID)', description: 'Contoh: yahya-nursidik' } }),
        authorName: fields.text({ label: 'Nama Penulis Tampil', defaultValue: 'Yahya Nursidik' }),
        quote: fields.text({ label: 'Teks Kutipan', multiline: true }),
        linkText: fields.text({ label: 'Teks Link (Opsional)', defaultValue: 'Baca Profil Selengkapnya' }),
        linkUrl: fields.url({ label: 'URL Link (Opsional)' }),
      },
    }),
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
    hijaiyahLetters: collection({
      label: 'Hijaiyah Play - Huruf',
      slugField: 'slug',
      path: 'src/content/hijaiyah-letters/*',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Slug Huruf (e.g. alif)' } }),
        order: fields.integer({ label: 'Urutan (1-28)' }),
        arabicLetter: fields.text({ label: 'Huruf Arab' }),
        nameArabic: fields.text({ label: 'Nama (Arab)' }),
        nameLatin: fields.text({ label: 'Nama (Latin)' }),
        audioPath: fields.text({ label: 'Path Audio (e.g. /audio/alif.mp3)' }),
        shortReadingGuide: fields.text({ label: 'Panduan Baca Singkat', multiline: true }),
        makhrajSimple: fields.text({ label: 'Makhraj Sederhana', multiline: true }),
        commonMistake: fields.text({ label: 'Kesalahan Umum', multiline: true }),
        similarLetters: fields.array(fields.text({ label: 'Huruf Mirip' }), {
          label: 'Huruf Mirip (Array Teks)',
          itemLabel: props => props.value
        }),
        levelGroup: fields.integer({ label: 'Grup Level (1, 2, dll)' }),
        isPublished: fields.checkbox({ label: 'Published', defaultValue: true }),
      },
    }),
    hijaiyahLevels: collection({
      label: 'Hijaiyah Play - Level',
      slugField: 'slug',
      path: 'src/content/hijaiyah-levels/*',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Slug Level (e.g. level-1)' } }),
        levelNumber: fields.integer({ label: 'Nomor Level' }),
        title: fields.text({ label: 'Judul Level' }),
        description: fields.text({ label: 'Deskripsi Singkat' }),
        letters: fields.array(fields.text({ label: 'Huruf yang dipelajari' }), {
          label: 'Daftar Huruf (Array Slug)',
          itemLabel: props => props.value
        }),
      },
    }),
  },
});
