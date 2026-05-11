import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { siteConfig } from './src/config/site.ts';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: siteConfig.url,

  integrations: [
    mdx(),
    sitemap()
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  adapter: cloudflare()
});