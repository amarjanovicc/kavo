'use client';

import Script from 'next/script';
import { generateBreadcrumbSchema, localBusinessSchema } from '@/lib/schema';

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
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://kavo.studio/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Kavo Studio'
    },
    image,
    areaServed: {
      '@type': 'Country',
      name: 'Hrvatska'
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <Script
        id={`${slug}-service-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <Script
        id={`${slug}-breadcrumb-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
    </>
  );
}

// Example usage in graficki-dizajn/page.tsx:
//
// import ServicePageSchema from '@/components/ServicePageSchema';
//
// export default function GrafickiDizajnPage() {
//   return (
//     <>
//       <main>
//         {/* Your existing page content */}
//       </main>
//       <ServicePageSchema
//         name="Grafički dizajn"
//         description="Profesionalni grafički dizajn za sve vaše potrebe, od vizualnog identiteta do marketinških materijala."
//         slug="graficki-dizajn"
//         image="https://kavo.studio/GrafickiDizajn/GrafickiDizajn1.png"
//         breadcrumbs={[
//           { name: 'Početna', url: 'https://kavo.studio' },
//           { name: 'Usluge', url: 'https://kavo.studio/#services' },
//           { name: 'Grafički dizajn', url: 'https://kavo.studio/graficki-dizajn' }
//         ]}
//       />
//     </>
//   );
// }