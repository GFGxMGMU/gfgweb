import { defineConfig } from 'astro/config';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://GFGxMGMU.github.io',
  base: '/gfgweb',
  integrations: [alpinejs()],
});