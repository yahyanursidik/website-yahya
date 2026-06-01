import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://yahyanursidik.my.id',
  integrations: [
    react(),
    tailwind(),
    keystatic()
  ],
  output: 'server',
  adapter: netlify(),
});
