import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePageView } from '@/components/service/ServicePageView';
import { getService, services } from '@/content/services';
import { site } from '@/content/site';
import { generateBreadcrumbSchema, jsonLd } from '@/lib/schema';

type Props = { params: Promise<{ service: string }> };

// Samo postojeće usluge – sve ostalo je 404
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).service);
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
    alternates: { canonical: `/${service.slug}` },
    openGraph: { title: `${service.title} | Kavo Studio`, description: service.intro, url: `/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).service);
  if (!service) notFound();

  const url = `${site.url}/${service.slug}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: service.title,
      description: service.intro,
      url,
      image: `${site.url}${service.cover}`,
      author: { '@type': 'Organization', name: site.name },
    },
    generateBreadcrumbSchema([
      { name: 'Početna', url: site.url },
      { name: 'Usluge', url: `${site.url}/#services` },
      { name: service.title, url },
    ]),
  ];

  return (
    <>
      <ServicePageView service={service} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
