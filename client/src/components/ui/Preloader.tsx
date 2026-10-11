'use client';

import { AnimatePresence, animate, motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useIntro } from '@/components/providers/IntroProvider';
import { useI18n } from '@/components/providers/LocaleProvider';
import { useScrollLock } from '@/components/providers/useScrollLock';
import { ease } from '@/lib/motion';

const WORD = 'kavo studio';

/** Uvodna animacija – samo pri prvom posjetu u sesiji */
export function Preloader() {
  const { finishIntro } = useIntro();
  const { t } = useI18n();
  const [show, setShow] = useState(true);
  const progress = useMotionValue(0);
  const counter = useTransform(progress, (v) => String(Math.round(v)).padStart(3, '0'));
  const bar = useTransform(progress, [0, 100], [0, 1]);

  useEffect(() => {
    const seen = document.documentElement.classList.contains('intro-seen');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduce) {
      setShow(false);
      finishIntro();
      return;
    }
    const controls = animate(progress, 100, { duration: 1.7, ease: [0.65, 0, 0.35, 1] });
    const timer = setTimeout(() => {
      setShow(false);
      finishIntro();
    }, 2050);
    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, [finishIntro, progress]);

  useScrollLock(show);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-preloader
          aria-hidden
          className="fixed inset-0 z-[110] flex flex-col bg-ink text-paper"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 1.1, ease: ease.inOut }}
        >
          <div className="flex flex-1 items-center justify-center gap-[0.25em] px-6 text-[clamp(2.75rem,9vw,8rem)]">
            <motion.div
              initial={{ scale: 0, rotate: -120 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}
              className="relative size-[0.9em] shrink-0"
            >
              <Image src="/logo/kavo-logo.png" alt="" fill sizes="128px" priority />
            </motion.div>
            <span className="display flex overflow-hidden pb-[0.08em] leading-none text-brand">
              {Array.from(WORD).map((c, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: ease.out, delay: 0.35 + i * 0.04 }}
                >
                  {c === ' ' ? ' ' : c}
                </motion.span>
              ))}
            </span>
          </div>

          <div className="shell flex items-end justify-between pb-8">
            <motion.p
              className="eyebrow text-paper/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t.preloader}
            </motion.p>
            <motion.span className="display text-[clamp(3rem,8vw,7rem)] leading-none tabular-nums">{counter}</motion.span>
          </div>
          <motion.div className="h-1 origin-left bg-brand" style={{ scaleX: bar }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
