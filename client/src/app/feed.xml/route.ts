import { services } from '@/content/services';
import { site } from '@/content/site';

function esc(s: string) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;
  const pubDate = new Date().toUTCString();

  const items = services
    .map(
      (s) => `    <item>
      <title>${esc(s.title)}</title>
      <link>${baseUrl}/${s.slug}</link>
      <guid>${baseUrl}/${s.slug}</guid>
      <description>${esc(s.intro)}</description>
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(site.name)}</title>
    <link>${baseUrl}</link>
    <description>${esc(site.description)}</description>
    <language>hr</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(rss, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
