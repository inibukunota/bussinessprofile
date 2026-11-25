# [Business Name] — Professional Services Website

Astro site for three services: Translation/Editing/Writing, Financial
Protection, and Pusaka Management Planning. Static-first, hosted on
Cloudflare Pages.

## What's built so far

- Homepage (`/`) — single-viewport service selector
- Service pages (`/services/translation-editing-writing`,
  `/services/financial-protection`, and `/services/pusaka-management`)
- Article system — Content Collections under `src/content/articles/`,
  with category listing and individual article routes
- `/consultation` and `/enquiry` — booking and enquiry flows
- Shared SEO metadata, canonical URLs, Open Graph/Twitter metadata
- Static `robots.txt`, XML sitemap and custom 404 page
- Cloudflare security/cache headers
- CI build validation via GitHub Actions

## Before going live

Business and contact details are centralised in **`src/config/site.ts`**.
Update that file rather than duplicating values across components.

The canonical production URL is supplied through:

```text
PUBLIC_SITE_URL=https://your-production-domain.example
```

See `.env.example` for the expected variable.

You will also need to:
1. Confirm the Google Calendar Appointment Schedule URL in `site.ts`.
2. Confirm the Google Apps Script enquiry endpoint and its production CORS/origin behaviour.
3. Replace remaining placeholder copy (anything in `[brackets]`) throughout
   the service pages, FAQs and content metadata.
4. Add real articles for the financial-protection and pusaka categories when
   those sections are ready.
5. Configure `PUBLIC_SITE_URL` in the production deployment environment.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The build output is the `dist/` directory.

## Dependencies

- **Astro 7.2.4**
- No UI framework or server adapter
- Static output by default
- Content collections use Astro's current Content Layer API

Cloudflare Pages serves the generated `dist/` directory directly. An
Astro Cloudflare adapter is not required unless SSR features are introduced.

## Cloudflare Pages

Use:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Production branch: `main`
- Preview deployments: enabled for branches/PRs

The repository may only be connected to one Cloudflare account for Git-based
Pages deployment. If Cloudflare reports that the repository is already used
by a Pages project in another account, manage the existing Pages project or
disconnect/reconnect the repository there rather than creating a duplicate.
