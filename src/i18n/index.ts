import { arabic } from './ar';

export const languages = ['id', 'en', 'ar'] as const;
export type Language = (typeof languages)[number];
export const isLanguage = (value: unknown): value is Language =>
  languages.includes(value as Language);

export const hasArabicTranslation = (english: string, override?: string) =>
  Boolean(override || arabic[english]);

export function translate(indonesian: string, english: string, language: Language, arabicOverride?: string) {
  if (language === 'ar') return arabicOverride || arabic[english] || indonesian;
  return language === 'en' ? english : indonesian;
}

export const metadata: Record<Language, { title: string; description: string }> = {
  id: {
    title: 'Yahya Nursidik — Karya, Aplikasi, dan Catatan Pendidikan',
    description: 'Arsip e-book, sistem dan aplikasi pendidikan, tulisan, serta kegiatan Yahya Nursidik.',
  },
  en: {
    title: 'Yahya Nursidik — Works, Apps, and Education Notes',
    description: 'E-books, educational systems and applications, writing, and programs by Yahya Nursidik.',
  },
  ar: {
    title: 'يحيى نورصديق — أعمال وتطبيقات وتأمّلات تربوية',
    description: 'كتب إلكترونية وأنظمة وتطبيقات تعليمية وكتابات وبرامج من أعمال يحيى نورصديق.',
  },
};

export function portfolioCount(count: number, total: number, language: Language) {
  const format = new Intl.NumberFormat(language, language === 'ar' ? { numberingSystem: 'arab' } : undefined);
  const shown = format.format(count);
  const all = format.format(total);
  if (language === 'ar') return `عرض ${shown} من أصل ${all} من الأعمال`;
  if (language === 'en') return `${shown} of ${all} works shown`;
  return `${shown} dari ${all} karya ditampilkan`;
}
