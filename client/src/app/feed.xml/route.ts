import { organizationSchema } from '@/lib/schema';

export async function GET() {
  const baseUrl = 'https://kavo.studio';
  const date = new Date();
  
  // Format date for RSS
  const pubDate = date.toUTCString();
  
  // Generate RSS feed
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kavo Studio | Kreativna agencija za dizajn i tehnologiju</title>
    <link>${baseUrl}</link>
    <description>${organizationSchema.description}</description>
    <language>hr</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>Grafički dizajn</title>
      <link>${baseUrl}/graficki-dizajn</link>
      <guid>${baseUrl}/graficki-dizajn</guid>
      <description>Profesionalni grafički dizajn za sve vaše potrebe, od vizualnog identiteta do marketinških materijala.</description>
      <pubDate>${pubDate}</pubDate>
    </item>
    
    <item>
      <title>Branding</title>
      <link>${baseUrl}/branding</link>
      <guid>${baseUrl}/branding</guid>
      <description>Strategija brendiranja i razvoj vizualnog identiteta za tvrtke i proizvode.</description>
      <pubDate>${pubDate}</pubDate>
    </item>
    
    <item>
      <title>Web razvoj</title>
      <link>${baseUrl}/web-razvoj</link>
      <guid>${baseUrl}/web-razvoj</guid>
      <description>Izrada modernih i responzivnih web stranica i aplikacija po mjeri.</description>
      <pubDate>${pubDate}</pubDate>
    </item>
    
  </channel>
</rss>`;
  
  // Return response with XML content type
  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400'
    }
  });
}