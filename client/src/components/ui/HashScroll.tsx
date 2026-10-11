'use client';

import { useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { useIntro } from '@/components/providers/IntroProvider';
import { SCROLL_OFFSET } from './AnchorLink';

/** Dolazak na `/#sekcija` s druge stranice – scroll do sekcije kad intro završi */
export function HashScroll() {
  const lenis = useLenis();
  const { introDone } = useIntro();

  useEffect(() => {
    if (!lenis || !introDone || !window.location.hash) return;
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) return;
    const t = setTimeout(() => lenis.scrollTo(target, { offset: SCROLL_OFFSET, duration: 1.2 }), 150);
    return () => clearTimeout(t);
  }, [lenis, introDone]);

  return null;
}
