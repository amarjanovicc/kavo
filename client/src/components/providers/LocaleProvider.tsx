'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { teamByLocale, valuesByLocale } from '@/content/about';
import { dictionary, localeNames, type Locale } from '@/content/dictionary';
import { privacyByLocale } from '@/content/privacy';
import { projectsByLocale } from '@/content/projects';
import { servicesByLocale } from '@/content/services';
import { ease } from '@/lib/motion';
import { useScrollLock } from './useScrollLock';

const STORAGE_KEY = 'locale';
/** Trajanje ulaska zavjese – jezik se mijenja tek kad je stranica potpuno pokrivena */
const COVER_MS = 650;
const HOLD_MS = 250;

type LocaleState = { locale: Locale; switchLocale: (locale: Locale) => void };

const LocaleContext = createContext<LocaleState>({ locale: 'hr', switchLocale: () => {} });

/**
 * Jezik se bira prekidačem i pamti u pregledniku – URL-ovi ostaju isti.
 * Server uvijek renderira hrvatski (to vidi i Google), engleski se primijeni nakon hidracije.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('hr');
  // Par se pamti pri kliku – `locale` se promijeni dok je zavjesa još gore
  const [pending, setPending] = useState<{ from: Locale; to: Locale } | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'hr' || stored === 'en') setLocale(stored);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const switchLocale = useCallback(
    (next: Locale) => {
      if (next === locale || pending) return;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setLocale(next);
      setPending({ from: locale, to: next });
    },
    [locale, pending]
  );

  // Zavjesa prekrije stranicu → zamjena teksta → zavjesa ode
  useEffect(() => {
    if (!pending) return;
    const swap = setTimeout(() => setLocale(pending.to), COVER_MS);
    const done = setTimeout(() => setPending(null), COVER_MS + HOLD_MS);
    return () => {
      clearTimeout(swap);
      clearTimeout(done);
    };
  }, [pending]);

  useScrollLock(!!pending);

  return (
    <LocaleContext.Provider value={{ locale, switchLocale }}>
      {children}
      <AnimatePresence>
        {pending && <Curtain key="locale-curtain" {...pending} />}
      </AnimatePresence>
    </LocaleContext.Provider>
  );
}

function Curtain({ from, to }: { from: Locale; to: Locale }) {
  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[105] flex flex-col justify-end bg-brand text-ink"
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: COVER_MS / 1000, ease: ease.inOut }}
    >
      <div className="shell pb-10 md:pb-14">
        <p className="eyebrow mb-4 text-ink/60">
          {from.toUpperCase()} → {to.toUpperCase()}
        </p>
        <span className="display block overflow-hidden pb-[0.08em] text-[clamp(4rem,17vw,16rem)] leading-[0.86] tracking-[-0.04em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotate: 6 }}
            animate={{ y: '0%', rotate: 0 }}
            transition={{ duration: 0.8, ease: ease.out, delay: 0.25 }}
          >
            {localeNames[to]}
          </motion.span>
        </span>
      </div>
    </motion.div>
  );
}

/** Prijevodi sučelja (`t`) i sadržaj na aktivnom jeziku */
export function useI18n() {
  const { locale, switchLocale } = useContext(LocaleContext);
  return {
    locale,
    switchLocale,
    t: dictionary[locale],
    services: servicesByLocale[locale],
    projects: projectsByLocale[locale],
    values: valuesByLocale[locale],
    team: teamByLocale[locale],
    privacy: privacyByLocale[locale],
  };
}
