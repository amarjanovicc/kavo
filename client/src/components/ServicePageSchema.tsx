'use client';

import Script from 'next/script';
import { generateBreadcrumbSchema } from '@/lib/schema';

interface ServicePageSchemaProps {
  name: string;
  description: string;
  slug: string;
  image: string;
  breadcrumbs: Array<{name: string, url: string}>;
}

export default function ServicePageSchema({
  name,
  description,
  slug,
  image,
  breadcrumbs
}: ServicePageSchemaProps) {
  // WebPage umjesto Service – stranica opisuje područje rada, ne nudi uslugu na prodaju
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `https://kavo.studio/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'Kavo Studio'
    },
    image
  };

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <Script
        id={`${slug}-page-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema)
        }}
      />
      <Script
        id={`${slug}-breadcrumb-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
}
