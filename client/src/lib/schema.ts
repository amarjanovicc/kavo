import { projects } from '@/content/projects';
import { site } from '@/content/site';

// Kavo je osobni, nekomercijalni projekt – bez pravne osobe, cijena, adrese i radnog vremena.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.png`,
  email: site.email,
  description:
    'Osobni projekt i portfolio – grafički dizajn, branding i web development. Nije registrirana tvrtka i ne nudi komercijalne usluge.',
  sameAs: site.socials.map((s) => s.href),
  knowsAbout: ['Grafički dizajn', 'Branding', 'Web development', 'Web dizajn'],
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: projects.map((p, i) => ({
    '@type': 'CreativeWork',
    position: i + 1,
    name: p.title,
    description: p.description,
    image: `${site.url}${p.image}`,
    keywords: p.tags,
    creator: { '@type': 'Organization', name: site.name },
  })),
};

/** JSON-LD kao string spreman za <script type="application/ld+json"> */
export const jsonLd = (data: object) => JSON.stringify(data).replace(/</g, '\\u003c');
