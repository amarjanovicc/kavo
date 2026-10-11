'use client';

import { useLenis } from 'lenis/react';
import { useRef } from 'react';

/**
 * Dok se stranica scrolla, <html> dobiva klasu `is-scrolling` koja gasi pointer evente
 * na sadržaju. Bez toga elementi koji prolaze ispod mirnog miša okidaju hover efekte
 * (oznake kursora, pregled ilustracije) koji bljesnu pa nestanu – i troše frameove.
 */
export function ScrollState() {
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useLenis(() => {
    const root = document.documentElement;
    if (!root.classList.contains('is-scrolling')) root.classList.add('is-scrolling');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => root.classList.remove('is-scrolling'), 160);
  });

  return null;
}
