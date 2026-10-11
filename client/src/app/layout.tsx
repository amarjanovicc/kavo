import type { Viewport } from 'next';
import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { Providers } from '@/components/providers/Providers';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { Cursor } from '@/components/ui/Cursor';
import { Preloader } from '@/components/ui/Preloader';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { SkipLink } from '@/components/ui/SkipLink';
import { INTRO_KEY } from '@/lib/constants';
import { jsonLd, organizationSchema } from '@/lib/schema';
import './globals.css';

export { metadata } from './metadata';

const display = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz', 'wdth'],
  variable: '--font-bricolage',
  display: 'swap',
});
const sans = Geist({ subsets: ['latin', 'latin-ext'], variable: '--font-geist', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin', 'latin-ext'], variable: '--font-geist-mono', display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#080D10',
};

// Prije prvog painta: ako je preloader već viđen u sesiji, sakrij ga (bez bljeska)
const introScript = `try{if(sessionStorage.getItem('${INTRO_KEY}'))document.documentElement.classList.add('intro-seen')}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <Providers>
          <SkipLink />
          <Preloader />
          <ScrollProgress />
          <Cursor />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <CookieConsent />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema) }} />
      </body>
    </html>
  );
}
