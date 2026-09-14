import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://renovopinturas.com.br',
  trailingSlash: 'always',
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
    inlineStylesheets: 'never',
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
