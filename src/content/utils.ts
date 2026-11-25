import type { CollectionEntry } from 'astro:content';

export function shortId(entry: CollectionEntry<'articles'>): string {
  const prefix = `${entry.data.category}/`;
  return entry.id.startsWith(prefix) ? entry.id.slice(prefix.length) : entry.id;
}
