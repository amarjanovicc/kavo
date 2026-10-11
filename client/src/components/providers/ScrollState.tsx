'use client';

import { useLenis } from 'lenis/react';
import { useRef } from 'react';
import { useLiteMotion } from '@/lib/useMediaQuery';

/**
 * Dok se stranica scrolla, <html> dobiva klasu `is-scrolling` koja gasi pointer evente
 * na sadržaju. Bez toga elementi koji prolaze ispod mirnog miša okidaju hover efekte
 * (oznake kursora, pregled ilustracije) koji bljesnu pa nestanu – i troše frameove.
 */
export function ScrollState() {
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  // Na dodir nema hovera – a mijenjanje klase restilizira cijeli sadržaj pri svakom scrollu
  const lite = useLiteMotion();

  useLenis(() => {
    if (lite) return;
    const root = document.documentElement;
    if (!root.classList.contains('is-scrolling')) root.classList.add('is-scrolling');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => root.classList.remove('is-scrolling'), 160);
  }, [lite]);

  return null;
}
