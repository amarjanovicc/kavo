import { organizationSchema } from '@/lib/schema';

function esc(s: string) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kavo.studio';
  const pubDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(organizationSchema.name || 'Kavo Studio')}</title>
    <link>${baseUrl}</link>
    <description>${esc(organizationSchema.description || '')}</description>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <item>
      <title>Primjer</title>
      <link>${baseUrl}/primjer</link>
      <pubDate>${pubDate}</pubDate>
      <description>Primjer stavke</description>
    </item>
  </channel>
</rss>`;

  return new Response(rss, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}