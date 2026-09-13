import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    wasmModuleTranslations: {
      enabled: false,
    },
  }),
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
