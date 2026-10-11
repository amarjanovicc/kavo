import type { Metadata } from 'next';
import { site } from '@/content/site';

const title = 'Kavo Studio | Osobni projekt – dizajn i web development';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s | Kavo Studio' },
  description: site.description,
  keywords: ['portfolio', 'osobni projekt', 'grafički dizajn', 'web development', 'web dizajn', 'branding', 'vizualni identitet'],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: 'Kavo tim',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'hr_HR',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': '/feed.xml' },
  },
  category: 'design',
  verification: {
    google: 'google-site-verification=svztvY5pDFwaqjDFnWd-8jOxxv40rvkJBvR0mUbT0Ko',
  },
};
