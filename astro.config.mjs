import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://theisle-cheats.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/theisle-cheats/',
    '/cheats/lite/': '/products/theisle-cheats/lite/',
    '/cheats/pro/': '/products/theisle-cheats/pro/',
    '/cheats/elite/': '/products/theisle-cheats/elite/',
    '/cheats/compare/': '/blog/theisle-lite-vs-pro/',
    '/products/dota-2-cheats/': '/products/theisle-cheats/',
    '/products/dota-2-cheats/elite/': '/products/theisle-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/theisle-cheats/utilities/',
    '/contact/': '/support/',
    '/blog/theisle-aimbot-ranked-guide/': '/blog/theisle-bite-assist-official/',
    '/blog/theisle-aimbot-combat-guide/': '/blog/theisle-bite-assist-combat/',
    '/blog/theisle-skin-changer-guide/': '/blog/theisle-appearance-changer-guide/',
    '/blog/theisle-cheat-codes-guide/': '/blog/theisle-practice-before-official/',
    '/blog/how-to-use-theisle-cheat-codes/': '/blog/theisle-practice-safely/',
    '/blog/theisle-console-cheats-tips/': '/blog/theisle-practice-bite-assist-esp/',
    '/blog/theisle-console-commands-cheats/': '/blog/theisle-practice-vs-official/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
