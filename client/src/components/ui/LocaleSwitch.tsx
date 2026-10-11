'use client';

import { motion } from 'framer-motion';
import { useId } from 'react';
import { Magnetic } from '@/components/motion/Magnetic';
import { useI18n } from '@/components/providers/LocaleProvider';
import { localeNames, locales } from '@/content/dictionary';
import { cn } from '@/lib/cn';

/** HR | EN prekidač – žuta pilula klizi na aktivni jezik */
export function LocaleSwitch({ className }: { className?: string }) {
  const { locale, switchLocale, t } = useI18n();
  const pillId = useId();

  return (
    <Magnetic strength={0.25} className={className}>
      <div role="group" aria-label={t.nav.language} className="flex rounded-full border border-paper/15 p-1">
        {locales.map((l) => {
          const active = l === locale;
          return (
            <button
              key={l}
              type="button"
              lang={l}
              aria-label={localeNames[l]}
              aria-pressed={active}
              onClick={() => switchLocale(l)}
              className={cn(
                'eyebrow relative flex h-9 min-w-9 items-center justify-center rounded-full px-2.5 transition-colors duration-300',
                active ? 'text-ink' : 'text-paper/55 hover:text-brand'
              )}
            >
              {active && (
                <motion.span
                  layoutId={pillId}
                  className="absolute inset-0 rounded-full bg-brand"
                  transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                />
              )}
              <span className="relative">{l.toUpperCase()}</span>
            </button>
          );
        })}
      </div>
    </Magnetic>
  );
}
