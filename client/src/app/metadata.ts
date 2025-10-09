import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://kavo.studio'),
  title: 'Kavo | Kreativna agencija za dizajn i tehnologiju',
  description: 'Kavo je kreativna agencija iz Hrvatske specijalizirana za grafički dizajn, branding, web razvoj i digitalni marketing. Stvaramo jedinstvene vizualne identitete koji donose rezultate.',
  keywords: ['kreativna agencija', 'grafički dizajn', 'web razvoj', 'branding', 'digitalni marketing', 'vizualni identitet', 'hrvatska agencija', 'varaždin'],
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
    title: 'Kavo | Kreativna agencija za dizajn i tehnologiju',
    description: 'Kavo je kreativna agencija specijalizirana za grafički dizajn, branding, web razvoj i digitalni marketing. Pretvaramo ideje u uspješne brendove.',
    url: 'https://kavo.studio',
    siteName: 'Kavo',
    locale: 'hr_HR',
    images: [
      {
        url: 'https://kavo.studio/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kavo Kreativna Agencija',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavo | Kreativna agencija za dizajn i tehnologiju',
    description: 'Kavo je kreativna agencija specijalizirana za grafički dizajn, branding, web razvoj i digitalni marketing.',
    creator: '@kavostudio',
    images: [{ url: 'https://kavo.studio/twitter-image.jpg', alt: 'Kavo Studio - Kreativna agencija' }],
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
  category: 'design, technology, marketing',
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