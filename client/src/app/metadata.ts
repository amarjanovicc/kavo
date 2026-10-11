import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://kavo.studio'),
  title: 'Kavo | Osobni projekt – dizajn i web development',
  description: 'Kavo je osobni, nekomercijalni projekt i portfolio iz Hrvatske – grafički dizajn, branding i web development.',
  keywords: ['portfolio', 'osobni projekt', 'grafički dizajn', 'web development', 'web dizajn', 'branding', 'vizualni identitet'],
  applicationName: 'Kavo Studio',
  authors: [{ name: 'Kavo Studio', url: 'https://kavo.studio' }],
  generator: 'Next.js',
  creator: 'Kavo tim',
  publisher: 'Kavo Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    title: 'Kavo | Osobni projekt – dizajn i web development',
    description: 'Kavo je osobni, nekomercijalni projekt i portfolio – grafički dizajn, branding i web development.',
    url: 'https://kavo.studio',
    siteName: 'Kavo',
    locale: 'hr_HR',
    images: [
      {
        url: 'https://kavo.studio/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kavo – osobni projekt',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavo | Osobni projekt – dizajn i web development',
    description: 'Kavo je osobni, nekomercijalni projekt i portfolio – grafički dizajn, branding i web development.',
    creator: '@kavostudio',
    images: [{ url: 'https://kavo.studio/twitter-image.jpg', alt: 'Kavo Studio – osobni projekt' }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://kavo.studio',
    languages: {
      'hr-HR': 'https://kavo.studio',
      'en-US': 'https://kavo.studio/en',
    },
    types: {
      'application/rss+xml': 'https://kavo.studio/feed.xml', // If you have a feed
    }
  },
  category: 'design, technology, portfolio',
  verification: {
    google: 'google-site-verification=svztvY5pDFwaqjDFnWd-8jOxxv40rvkJBvR0mUbT0Ko',
    other: {
      'msvalidate.01': 'YOUR-ACTUAL-BING-CODE',
      'google-analytics': 'G-SE67JEGG2P',
    },
  },
  icons: {
    icon: '/favicon.ico',           // standardni favicon
    shortcut: '/favicon.ico',       // shortcut icon
    apple: '/apple-touch-icon.png'  // ako imaš Apple ikonu
  }
};