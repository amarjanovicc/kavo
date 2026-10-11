'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { INTRO_KEY } from '@/lib/constants';

type IntroState = { introDone: boolean; finishIntro: () => void };

const IntroContext = createContext<IntroState>({ introDone: true, finishIntro: () => {} });

export function IntroProvider({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    // Preloader je već prikazan u ovoj sesiji → hero kreće odmah
    if (document.documentElement.classList.contains('intro-seen')) setIntroDone(true);
  }, []);

  const finishIntro = useCallback(() => {
    setIntroDone(true);
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {}
  }, []);

  return <IntroContext.Provider value={{ introDone, finishIntro }}>{children}</IntroContext.Provider>;
}

export const useIntro = () => useContext(IntroContext);
