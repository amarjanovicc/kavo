'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);
  return matches;
}

/** Touch uređaji / uski ekrani: teži scroll efekti se gase (slabiji GPU na mobitelima) */
export const LITE_MOTION_QUERY = '(pointer: coarse), (max-width: 767px)';
export const useLiteMotion = () => useMediaQuery(LITE_MOTION_QUERY);
