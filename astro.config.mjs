import { defineConfig } from 'astro/config';

// Set PUBLIC_SITE_URL in the deployment environment when the production
// domain is ready. Keeping it unset prevents placeholder canonical/sitemap
// URLs from being published during development.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || undefined,
});
