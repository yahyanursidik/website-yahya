import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const hijaiyahLetters = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "src/content/hijaiyah-letters" }),
});

const hijaiyahLevels = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "src/content/hijaiyah-levels" }),
});

const hijaiyah = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "src/content/hijaiyah" }),
});

const kutipan = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "src/content/kutipan" }),
});

const jadwal = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "src/content/jadwal" }),
});

const buku = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "src/content/buku" }),
});

export const collections = {
    hijaiyahLetters,
    hijaiyahLevels,
    hijaiyah,
    kutipan,
    jadwal,
    buku
};
