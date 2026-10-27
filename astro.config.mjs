import { defineConfig } from 'astro/config';

// User site (caiosantosss.github.io) is served from the domain root, so no `base` is needed.
export default defineConfig({
  site: 'https://caiosantosss.github.io',
  trailingSlash: 'ignore',
});
