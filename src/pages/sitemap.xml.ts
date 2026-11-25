import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { services } from '../config/site';
import { shortId } from '../content/utils';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('Sitemap unavailable until PUBLIC_SITE_URL is configured.\n', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
  const articles = await getCollection('articles');
  const paths = [
    '/', '/about', '/consultation', '/enquiry', '/articles',
    ...Object.values(services).map((service) => '/services/' + service.slug),
    ...Object.values(services).map((service) => '/articles/' + service.articleCategory),
    ...articles.map((article) => '/articles/' + article.data.category + '/' + shortId(article)),
  ];
  const urls = [...new Set(paths)].map((path) => '  <url><loc>' + new URL(path, site).href + '</loc></url>').join('\n');
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
