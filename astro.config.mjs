import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    keystatic()
  ],
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});
