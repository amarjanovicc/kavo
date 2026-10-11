'use client';

import { Reveal } from '@/components/motion/Reveal';
import { ScrollWords } from '@/components/motion/ScrollWords';
import { useI18n } from '@/components/providers/LocaleProvider';
import { Button } from '@/components/ui/Button';

export function Statement() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative bg-paper pb-32 pt-44 text-ink md:pb-44 md:pt-56">
      <div className="shell">
        <Reveal className="eyebrow mb-10 flex items-center gap-3 text-ink/50">
          <span className="text-ink">(01)</span> {t.statement.eyebrow}
        </Reveal>
        <ScrollWords words={t.statement.words} className="display max-w-[16ch] text-giant" />
        <div className="mt-20 grid gap-8 md:grid-cols-12">
          <Reveal className="text-lead text-ink/70 md:col-span-5 md:col-start-7">
            {t.statement.lead}
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-7">
            <Button href="/#studio" variant="outline-dark">
              {t.statement.cta}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
