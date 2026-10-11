'use client';

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, type PointerEvent } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { SplitText } from '@/components/motion/SplitText';
import { ArrowUpRight } from '@/components/ui/icons';
import { useI18n } from '@/components/providers/LocaleProvider';
import { ease } from '@/lib/motion';

/** Lista usluga – žuti fill odozdo na hover + pregled ilustracije koji prati kursor */
export function Services() {
  const { t, services } = useI18n();
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 22 });
  const sy = useSpring(y, { stiffness: 220, damping: 22 });

  const onMove = (e: PointerEvent<HTMLUListElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <section id="services" className="relative bg-ink py-32 text-paper md:py-44">
      <div className="shell">
        <div className="mb-16 grid items-end gap-8 md:mb-24 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow mb-8 text-paper/50">
              <span className="text-brand">(04)</span> {t.services.eyebrow}
            </p>
            <SplitText as="h2" text={t.services.heading} className="display text-giant text-brand" bouncy />
          </div>
          <Reveal className="text-lead text-paper/60 md:col-span-4">
            {t.services.lead}
          </Reveal>
        </div>

        <ul className="relative" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 0.06}>
              <Link
                href={`/${s.slug}`}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group relative flex items-center gap-4 overflow-hidden border-t border-paper/15 py-8 transition-colors duration-500 ease-expo hover:text-ink md:gap-10 md:py-10"
                data-cursor={t.services.cursor}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-brand transition-transform duration-700 ease-expo group-hover:scale-y-100"
                />
                <span className="eyebrow relative w-10 shrink-0 text-paper/40 transition-colors group-hover:text-ink/60 md:pl-6">
                  {s.number}
                </span>
                <span className="display relative flex-1 text-huge transition-transform duration-700 ease-expo group-hover:translate-x-4">
                  {s.title}
                </span>
                <span className="relative hidden max-w-xs text-sm text-paper/60 transition-colors group-hover:text-ink/70 lg:block">
                  {s.short}
                </span>
                <span className="relative mr-2 flex size-14 shrink-0 items-center justify-center rounded-full border border-paper/20 transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-brand md:mr-6 md:size-16">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </Reveal>
          ))}
          <li aria-hidden className="border-t border-paper/15" />

          {/* Pregled ilustracije uz kursor (samo desktop) */}
          <motion.li
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
            style={{ x: sx, y: sy }}
          >
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  key="preview"
                  initial={{ scale: 0, rotate: -12, opacity: 0 }}
                  animate={{ scale: 1, rotate: -6, opacity: 1 }}
                  exit={{ scale: 0, rotate: 12, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="relative -ml-32 -mt-32 size-64 overflow-hidden rounded-[2rem] bg-paper shadow-2xl"
                >
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                      key={active}
                      className="absolute inset-0"
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '-100%' }}
                      transition={{ duration: 0.6, ease: ease.out }}
                    >
                      <Image src={services[active].cover} alt="" fill sizes="256px" className="object-contain p-6" />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
