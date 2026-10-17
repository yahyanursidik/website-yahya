import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

// Exercise the same TypeScript modules Astro bundles, without another test dependency.
function loadModule(path, dependencies = {}) {
  const source = readFileSync(new URL(path, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const exports = {};
  runInNewContext(outputText, { exports, Intl, require: (id) => {
    assert.ok(id in dependencies, `Unexpected import: ${id}`);
    return dependencies[id];
  } });
  return exports;
}

const { arabic } = loadModule('../src/i18n/ar.ts');
const { isLanguage, translate, portfolioCount, metadata } = loadModule('../src/i18n/index.ts', { './ar': { arabic } });
const home = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../src/layouts/Layout.astro', import.meta.url), 'utf8');

test('accepts only supported language codes', () => {
  for (const language of ['id', 'en', 'ar']) assert.equal(isLanguage(language), true);
  for (const language of ['', null, undefined, 'AR', 'fr', '<script>']) assert.equal(isLanguage(language), false);
});

test('translations, CMS overrides, and safe fallbacks', () => {
  assert.equal(translate('Semua', 'All', 'id'), 'Semua');
  assert.equal(translate('Semua', 'All', 'en'), 'All');
  assert.equal(translate('Semua', 'All', 'ar'), 'الكل');
  assert.equal(translate('Baru', 'New CMS copy', 'ar'), 'Baru');
  assert.equal(translate('Baru', 'New CMS copy', 'ar', 'جديد'), 'جديد');
});

test('every literal UI string has an Arabic translation', () => {
  for (const match of (home + layout).matchAll(/data-i18n-en="([^"]+)"/g)) {
    if (match[1] === 'Yahya Nursidik') continue; // Explicit data-i18n-ar override.
    assert.ok(arabic[match[1]], `Missing Arabic UI copy: ${match[1]}`);
  }
});

test('all catalog, theme, project, action, and image-alt translations are covered', () => {
  const pattern = /\b(?:titleEn|descriptionEn|subtitleEn|copyEn|labelEn|actionEn|imageAltEn):\s*('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/g;
  for (const match of home.matchAll(pattern)) {
    const english = runInNewContext(match[1]);
    assert.ok(arabic[english], `Missing Arabic catalog copy: ${english}`);
  }
});

test('schedule translations are covered', () => {
  const schedule = home.split('const scheduleTranslations = {')[1].split('type ScheduleField')[0];
  for (const match of schedule.matchAll(/:\s*('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/g)) {
    const english = runInNewContext(match[1]);
    assert.ok(arabic[english], `Missing Arabic schedule copy: ${english}`);
  }
});

test('dynamic portfolio count uses the selected locale, including zero', () => {
  assert.equal(portfolioCount(4, 21, 'en'), '4 of 21 works shown');
  assert.equal(portfolioCount(0, 0, 'id'), '0 dari 0 karya ditampilkan');
  assert.equal(portfolioCount(4, 21, 'ar'), 'عرض ٤ من أصل ٢١ من الأعمال');
});

test('all language metadata is available', () => {
  for (const language of ['id', 'en', 'ar']) {
    assert.ok(metadata[language].title);
    assert.ok(metadata[language].description);
  }
});

test('classes and activities are accessible from desktop, mobile, and the hero', () => {
  const navigationLinks = layout.match(/<a[^>]+href="\/#kegiatan"[^>]+data-i18n-id="Kelas & kegiatan"/g) || [];
  assert.equal(navigationLinks.length, 2);
  assert.match(home, /class="button[^>]+href="#kegiatan"[^>]+data-i18n-id="Kelas & kegiatan"/);
  assert.match(home, /<section id="kegiatan" aria-labelledby="kegiatan-title"/);
  assert.match(home, /<h2 id="kegiatan-title"[^>]+>Kelas & kegiatan<\/h2>/);
});
