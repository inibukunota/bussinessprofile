import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Migrated from the legacy `type: 'content'` collection API (removed in
// Astro 6) to the Content Layer `glob()` loader — and moved from
// src/content/config.ts to this top-level src/content.config.ts location,
// which Astro 6+ requires. Behaviour is equivalent — one collection, still
// organised on disk as content/articles/<category>/*.md, filtered by
// `category` at query time — but entries are now keyed by `id` instead of
// `slug` (see src/content/utils.ts for the helper that strips the
// category-folder prefix from that id).
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('[Business Name]'),
    category: z.enum(['translation', 'financial-protection', 'pusaka']),
    featuredImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
