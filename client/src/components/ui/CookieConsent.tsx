'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { Suspense, useEffect, useState } from 'react';
import { useI18n } from '@/components/providers/LocaleProvider';
import { bounce } from '@/lib/motion';

const GA_ID = 'G-SE67JEGG2P';
const STORAGE_KEY = 'analytics-consent';

type Consent = 'granted' | 'denied' | null;

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.origin + url,
      page_path: url,
      send_to: GA_ID,
    });
  }, [pathname, searchParams]);

  return null;
}

/** Banner za privolu + Google Analytics (učitava se samo uz privolu) */
export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (stored === 'true') return setConsent('granted');
    if (stored === 'false') return setConsent('denied');
    const t = setTimeout(() => setShowBanner(true), 2600);
    return () => clearTimeout(t);
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, String(granted));
    } catch {}
    setConsent(granted ? 'granted' : 'denied');
    setShowBanner(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            role="dialog"
            aria-label={t.cookies.label}
            initial={{ y: 120, opacity: 0, rotate: -3 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 120, opacity: 0 }}
            transition={bounce}
            className="fixed inset-x-4 bottom-4 z-[85] rounded-[1.75rem] border border-paper/10 bg-ink-2/95 p-6 text-paper shadow-2xl backdrop-blur-xl sm:left-6 sm:right-auto sm:max-w-sm"
          >
            <p className="display text-2xl">{t.cookies.title}</p>
            <p className="mt-2 text-sm text-paper/70">
              {t.cookies.text}{' '}
              <Link href="/privacy-policy" className="text-brand underline underline-offset-4">
                {t.privacyLink}
              </Link>
            </p>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => choose(true)}
                className="flex-1 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                {t.cookies.accept}
              </button>
              <button
                type="button"
                onClick={() => choose(false)}
                className="flex-1 rounded-full border border-paper/20 px-4 py-2.5 text-sm transition-colors hover:border-paper/50"
              >
                {t.cookies.decline}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {consent === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}
          </Script>
          <Suspense fallback={null}>
            <PageViewTracker />
          </Suspense>
        </>
      )}
    </>
  );
}
