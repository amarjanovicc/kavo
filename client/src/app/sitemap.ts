import { MetadataRoute } from 'next';

// Helper to get last modified date for static pages
// Use more specific dates for accurate crawling
const getLastModified = (route: string) => {
  const dates: Record<string, Date> = {
    '': new Date('2023-10-20'), // Homepage - updated recently
    '/graficki-dizajn': new Date('2023-10-15'),
    '/branding': new Date('2023-10-18'),
    '/web-razvoj': new Date('2023-10-12'),
    '/digitalni-marketing': new Date('2023-10-05'),
    '/o-nama': new Date('2023-09-28'),
    '/portfolio': new Date('2023-10-19'), // Updated often
    '/kontakt': new Date('2023-09-15'),
    '/privacy-policy': new Date('2023-08-10'),
    // Project pages
    '/projekti/laptop': new Date('2023-09-25'),
    '/projekti/lantern': new Date('2023-09-20'),
    '/projekti/brochure': new Date('2023-09-15'),
    '/projekti/packaging': new Date('2023-09-10'),
    '/projekti/product': new Date('2023-09-05'),
    '/projekti/website': new Date('2023-09-01'),
    '/projekti/app-game': new Date('2023-08-25'),
    '/projekti/phone': new Date('2023-08-20'),
    '/projekti/gogi': new Date('2023-08-15'),
    '/projekti/band': new Date('2023-08-10'),
  };

  return dates[route] || new Date();
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kavo.studio';
  
  // Core pages
  const routes = [
    '',
    '/graficki-dizajn',
    '/branding',
    '/web-razvoj',
    '/digitalni-marketing',
    '/o-nama',
    '/portfolio',
    '/kontakt',
    '/privacy-policy',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: getLastModified(route),
    changeFrequency: route === '' || route === '/portfolio' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : 
              ['/graficki-dizajn', '/branding', '/web-razvoj'].includes(route) ? 0.9 :
              ['/o-nama', '/portfolio', '/kontakt'].includes(route) ? 0.8 : 0.7,
  }));

  // Add project pages with proper dates
  const projectRoutes = [
    '/projekti/laptop',
    '/projekti/lantern',
    '/projekti/brochure',
    '/projekti/packaging',
    '/projekti/product',
    '/projekti/website',
    '/projekti/app-game',
    '/projekti/phone',
    '/projekti/gogi',
    '/projekti/band',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: getLastModified(route),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...routes,
    ...projectRoutes,
  ];
}

/* 
// Note: This is just an example for image usage in your components, not part of the sitemap
// Example correct image usage for your components:

import Image from 'next/image';

function YourComponent() {
  const isPriority = true;
  
  return (
    <Image 
      src="/path/to/image.jpg"
      alt="Descriptive alt text that includes keywords when relevant"
      width={800}
      height={600}
      loading={isPriority ? "eager" : "lazy"}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="rounded-lg object-cover"
    />
  );
}
*/