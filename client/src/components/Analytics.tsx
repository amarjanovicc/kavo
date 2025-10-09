'use client';

import { useState, useEffect, Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_MEASUREMENT_ID = 'G-SE67JEGG2P';

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.origin + url,
      page_path: url,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('analytics-consent');
      if (stored === null) {
        const consent = window.confirm(
          'Za poboljšanje korisničkog iskustva koristimo kolačiće za analitiku. Dozvoljavate li korištenje kolačića?'
        );
        localStorage.setItem('analytics-consent', String(consent));
        setHasConsent(consent);
      } else {
        setHasConsent(stored === 'true');
      }
    } catch {
      setHasConsent(false);
    }
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>

      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}