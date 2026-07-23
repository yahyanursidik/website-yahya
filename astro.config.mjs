import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://yahyanursidik.my.id',
  integrations: [
    react(),
    keystatic()
  ],
  output: 'server',
  adapter: netlify(),
});
