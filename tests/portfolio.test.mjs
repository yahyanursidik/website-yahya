import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const home = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const data = home.match(/\{\s*label: 'Aplikasi dokumen - PDF ke EPUB',[\s\S]*?\n  \}/)?.[0];

test('ArabicReflow is listed with a screenshot, without a premature visit link', () => {
  assert.ok(data, 'ArabicReflow portfolio entry must exist');
  const entry = runInNewContext(`(${data})`);
  assert.equal(entry.link, '');
  assert.equal(entry.external, false);
  assert.equal(entry.portfolioGroup, 'experiment');
  assert.equal(entry.action, 'Segera hadir');
  assert.match(entry.copy, /Arab dan Latin/);
  assert.match(entry.copyEn, /Arabic and Latin/);
  assert.ok(existsSync(new URL(`../public${entry.imageUrl}`, import.meta.url)));
  assert.match(home, /\{item\.link \? \(/, 'Unpublished entries must not render an empty anchor');
});

test('the laboratory book uses the supplied replacement cover', () => {
  const cover = '/images/books/pengelolaan-pengembangan-laboratorium-virtual.jpg';
  assert.ok(home.includes(`coverUrl: '${cover}'`));
  assert.ok(existsSync(new URL(`../public${cover}`, import.meta.url)));
});

test('Tsufuk Indonesia is a linked platform covering events and learning progress', () => {
  const tsufuk = home.match(/\{\s*label: 'Website & sistem informasi - Lembaga beladiri',[\s\S]*?\n  \}/)?.[0];
  assert.ok(tsufuk, 'Tsufuk Indonesia portfolio entry must exist');
  const entry = runInNewContext(`(${tsufuk})`);
  assert.equal(entry.link, 'https://tsufuk.web.id/');
  assert.equal(entry.external, true);
  assert.equal(entry.portfolioGroup, 'platform');
  assert.match(entry.copy, /event organizer/);
  assert.match(entry.copy, /learning progress/);
  assert.match(entry.copy, /pengembangan dan uji coba/);
  assert.ok(existsSync(new URL(`../public${entry.imageUrl}`, import.meta.url)));
  assert.ok(entry.imageAlt);
  assert.ok(entry.imageAltEn);
});
