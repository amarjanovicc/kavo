'use client';

import { SplitText } from '@/components/motion/SplitText';
import { useI18n } from '@/components/providers/LocaleProvider';
import { Button } from '@/components/ui/Button';

export function NotFoundView() {
  const { t } = useI18n();
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-ink px-4 text-center text-paper">
      <SplitText text="404" className="display text-[clamp(8rem,32vw,24rem)] leading-[0.8] text-brand" bouncy />
      <h1 className="display mt-6 text-big">{t.notFound.title}</h1>
      <p className="mt-4 max-w-md text-paper/60">{t.notFound.text}</p>
      <div className="mt-10">
        <Button href="/">{t.backHome}</Button>
      </div>
    </section>
  );
}
