import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { AnimationProvider } from '@/context/AnimationContext';
import { organizationSchema } from '@/lib/schema';
import Script from 'next/script';
import Analytics from '@/components/Analytics';
import { metadata } from './metadata';
export { metadata };

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFBD00',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr">
      <body className="bg-[#080D10] text-white scroll-smooth w-full min-h-screen">
        <AnimationProvider>
          <Navbar />
          <main className="w-full">{children}</main>
          <Footer />
        </AnimationProvider>

        <Analytics />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}