'use client';

import { Marquee } from '@/components/motion/Marquee';
import { useI18n } from '@/components/providers/LocaleProvider';
import { Sparkle } from '@/components/ui/icons';

function Row({ words, className }: { words: string[]; className?: string }) {
  return (
    <>
      {words.map((w) => (
        <span key={w} className={`display flex items-center gap-[0.4em] px-[0.4em] text-big ${className ?? ''}`}>
          {w}
          <Sparkle className="size-[0.55em] shrink-0" />
        </span>
      ))}
    </>
  );
}

/** Dvije prekrižene trake – prijelaz iz heroja u svijetli dio */
export function MarqueeBand() {
  const { t, services } = useI18n();
  const words = [...services.map((s) => s.title), t.marquee];

  return (
    <div className="relative z-10 -my-8 overflow-hidden py-14">
      <p className="sr-only">{words.join(', ')}</p>
      <Marquee aria-hidden baseVelocity={2} className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[3deg] bg-ink-3 py-4 text-paper/70">
        <Row words={words} />
      </Marquee>
      <Marquee aria-hidden baseVelocity={-2.5} className="relative -rotate-[2deg] bg-brand py-5 text-ink shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        <Row words={words} />
      </Marquee>
    </div>
  );
}
