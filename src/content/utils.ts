import type { CollectionEntry } from 'astro:content';

// Articles live on disk under content/articles/<category>/<file>.md, so
// with the Content Layer glob() loader, Astro's generated entry `id` is
// "<category>/<file-slug>" (this replaces the old `slug` field from the
// legacy collection API, removed in Astro 6). Every route/link wants just
// the file part (the category is already in the URL segment before it),
// so this strips that folder prefix in one place.
export function shortId(entry: CollectionEntry<'articles'>): string {
  const prefix = `${entry.data.category}/`;
  return entry.id.startsWith(prefix) ? entry.id.slice(prefix.length) : entry.id;
}
