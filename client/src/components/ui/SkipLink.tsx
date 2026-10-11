'use client';

import { useI18n } from '@/components/providers/LocaleProvider';

export function SkipLink() {
  const { t } = useI18n();
  return (
    <a
      href="#main"
      className="sr-only z-[200] rounded-full bg-brand px-5 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {t.skipLink}
    </a>
  );
}
