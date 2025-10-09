import { Metadata } from 'next';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFBD00',
};

export const metadata: Metadata = {
  title: '404 - Stranica nije pronađena | Kavo Studio',
  description: 'Nažalost, tražena stranica ne postoji. Vratite se na početnu stranicu.',
  robots: {
    index: false,
    follow: false,
  },
};