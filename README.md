# [Business Name] — Professional Services Website

Astro site for three services: Translation/Editing/Writing, Financial
Protection, and Pusaka Management Planning. Static-first, hosted on
Cloudflare Pages.

## What's built so far

- Homepage (`/`) — single-viewport service selector
- Service pages (`/services/translation-editing-writing`,
  `/services/financial-protection`, and `/services/pusaka-management`) —
  full AIDA structure with service-specific copy
- Article system — Content Collections (`src/content/articles/`), one
  example article live under `translation/`, category listing pages
  (`/articles/[category]`) and individual article pages
  (`/articles/[category]/[slug]`) both generated dynamically
- `/consultation` and `/enquiry` — one shared tabbed CTA section
  (booking iframe + enquiry form), opened on the relevant tab

## Not built yet

- Real testimonials/client logos — intentionally omitted, nothing was
  invented in their place
- Articles for the financial-protection and pusaka categories (folders
  exist, currently empty)

## Before going live

Everything that needs a real value lives in **`src/config/site.ts`** —
business name, contact details, the Google Calendar booking URL, and the
Google Apps Script enquiry endpoint. Update that one file rather than
hunting through components.

You'll also need to:
1. Deploy the Google Apps Script Web App that writes enquiry submissions
   to a Sheet, and set its CORS handling to accept POSTs from your
   domain (`text/plain` content-type is used client-side specifically to
   avoid a CORS preflight, which Apps Script doesn't handle well).
2. Set up the Google Calendar Appointment Schedule and drop its URL into
   `site.ts`.
3. Replace placeholder copy (anything in `[brackets]`) throughout the
   service page and FAQ answers.

## Local development

```bash
npm install
npm run dev
```

## Dependencies

- **Astro 7.2.4**. Content collections use the current Loader API
  (`glob()` from `astro/loaders`), and the collection config lives at
  `src/content.config.ts` (top-level — Astro 6+ requires this location,
  not `src/content/config.ts`).
- No integrations or adapters are installed. The site is fully static
  (`output: "static"`, the default — no server islands, actions, or
  on-demand rendering are used), so Cloudflare Pages just serves the
  built `dist/` folder directly; no `@astrojs/cloudflare` adapter is
  needed unless SSR features get added later.

## Deploying to Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: Astro
