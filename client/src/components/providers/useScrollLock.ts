'use client';

import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

// Više komponenti može zaključati scroll (preloader, mobile izbornik, modal).
// Lenis se ponovno pokreće tek kad se otpusti zadnje zaključavanje.
const locks = new Set<symbol>();

export function useScrollLock(active: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis || !active) return;
    const id = Symbol('scroll-lock');
    locks.add(id);
    lenis.stop();
    return () => {
      locks.delete(id);
      if (locks.size === 0) lenis.start();
    };
  }, [active, lenis]);
}
