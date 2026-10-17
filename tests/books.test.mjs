import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const home = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const catalog = home.split('const childrenBooks = [')[1].split('const educationBooks = [')[0];
const books = runInNewContext(`const childrenBooks = [${catalog}; childrenBooks`);

test('the two new family books appear first, in the supplied order', () => {
  assert.deepEqual(Array.from(books.slice(0, 2), book => book.title), [
    'Ayo, Cari Tahu Bersama!',
    'Membaca Bersama, Mendekatkan Hati',
  ]);
  assert.equal(books[2].title, 'Menjadi Orang Tua yang Bertumbuh Dengan Design Thinking');
  assert.equal(books[0].coverUrl, '/images/books/ayo-cari-tahu-bersama.png');
  assert.equal(books[1].coverUrl, '/images/books/membaca-bersama-mendekatkan-hati.png');
  for (const book of books.slice(0, 2)) {
    assert.ok(book.titleEn && book.description && book.descriptionEn);
    assert.equal(book.downloadUrl, '', 'Do not publish a PDF link before it is available');
    assert.ok(existsSync(new URL(`../public${book.coverUrl}`, import.meta.url)), 'The supplied cover must be shipped with the book');
  }
});

test('the mobile book carousel is user-controlled and keyboard accessible', () => {
  const carousel = readFileSync(new URL('../src/components/book-carousel.ts', import.meta.url), 'utf8');
  assert.match(home, /data-book-track role="region" aria-labelledby="family-books-title"/);
  assert.match(home, /data-book-previous aria-controls="family-books-track"/);
  assert.match(home, /data-book-next aria-controls="family-books-track"/);
  assert.match(home, /scroll-snap-type: x mandatory/);
  assert.match(carousel, /prefers-reduced-motion/);
  assert.match(carousel, /event\.key === 'Home'/);
  assert.match(carousel, /event\.key === 'End'/);
  assert.doesNotMatch(carousel, /setInterval|setTimeout/, 'Books must not advance automatically while being read');
});

test('book covers retain localized alternative text and an initially hidden fallback', () => {
  assert.match(home, /<img[^>]+data-cover-title-id=\{item\.title\}[^>]+data-cover-title-en=\{item\.titleEn\}[^>]+data-book-cover/);
  assert.match(home, /data-book-cover-fallback hidden/);
});

test('missing covers use a fallback while loaded and lazy covers remain visible', () => {
  const handler = home.split('    document.querySelectorAll<HTMLImageElement>')[1].split('    const filterButtons')[0];
  assert.ok(handler);
  const { outputText } = ts.transpileModule(`document.querySelectorAll<HTMLImageElement>${handler}`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  });
  class Element {
    hidden = true;
    hasAttribute(name) { return name === 'data-book-cover-fallback'; }
  }
  const image = (complete, naturalWidth) => ({
    complete, naturalWidth, hidden: false, nextElementSibling: new Element(), events: {},
    addEventListener(name, callback) { this.events[name] = callback; },
  });
  const missing = image(true, 0);
  const loaded = image(true, 1055);
  const pending = image(false, 0);
  const document = { querySelectorAll: () => [missing, loaded, pending] };
  runInNewContext(outputText, { document, HTMLElement: Element });
  assert.equal(missing.hidden, true);
  assert.equal(missing.nextElementSibling.hidden, false);
  assert.equal(loaded.hidden, false);
  assert.equal(loaded.nextElementSibling.hidden, true);
  assert.equal(pending.hidden, false);
  pending.events.error();
  assert.equal(pending.hidden, true);
  assert.equal(pending.nextElementSibling.hidden, false);
});
