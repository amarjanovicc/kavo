import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...services.map((s) => ({
      url: `${site.url}/${s.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${site.url}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${site.url}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
