'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Link from 'next/link';
import { useRef } from 'react';
import { Magnetic } from '@/components/motion/Magnetic';
import { RollText } from '@/components/motion/RollText';
import { SplitText } from '@/components/motion/SplitText';
import { AnchorLink } from '@/components/ui/AnchorLink';
import { ArrowUpRight } from '@/components/ui/icons';
import { navLinks, site } from '@/content/site';
import { services } from '@/content/services';
import { bounce } from '@/lib/motion';

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], ['45%', '8%']);

  const heading = 'eyebrow mb-5 text-paper/40';
  const linkClass = 'group inline-flex text-paper/80 transition-colors hover:text-brand';

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink pt-28 text-paper">
      <div className="shell">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6 flex items-center gap-2 text-brand">
              <span className="size-2 animate-pulse-dot rounded-full bg-brand" /> Pitanje, ideja, komentar?
            </p>
            <SplitText as="h2" text="Javi se, rado ćemo popričati." className="display text-huge" />
            <a
              href={`mailto:${site.email}`}
              className="group mt-10 inline-flex items-center gap-4 text-big font-medium"
              data-cursor="Pošalji"
            >
              <span className="relative">
                <RollText text={site.email} />
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-brand transition-transform duration-700 ease-expo group-hover:origin-left group-hover:scale-x-100" />
              </span>
              <ArrowUpRight className="size-[0.8em] text-brand transition-transform duration-500 ease-expo group-hover:rotate-45" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-5">
            <div>
              <h3 className={heading}>Navigacija</h3>
              <ul className="space-y-3">
                {[...navLinks, { label: 'Kontakt', href: '/contact' }].map((l) => (
                  <li key={l.href}>
                    <AnchorLink href={l.href} className={linkClass}>
                      <RollText text={l.label} />
                    </AnchorLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={heading}>Što radimo</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`} className={linkClass}>
                      <RollText text={s.title} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={heading}>Mreže</h3>
              <ul className="space-y-3">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      <RollText text={s.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-paper/10 py-8 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1.5">
            <p>
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.name} · {site.location}
            </p>
            <p className="max-w-md">{site.disclaimer}</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="group inline-flex hover:text-brand">
              <RollText text="Pravila privatnosti" />
            </Link>
            <Magnetic>
              <button
                type="button"
                onClick={() => lenis?.scrollTo(0, { duration: 1.8 })}
                className="flex size-14 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-ink"
                aria-label="Na vrh stranice"
              >
                <ArrowUpRight className="size-5 -rotate-45" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden
        style={{ y }}
        className="display pointer-events-auto flex select-none justify-center whitespace-nowrap text-[38vw] leading-[0.72] text-brand"
      >
        {Array.from('kavo').map((c, i) => (
          <motion.span key={i} className="inline-block" whileHover={{ y: '-0.08em', rotate: i % 2 ? 4 : -4 }} transition={bounce}>
            {c}
          </motion.span>
        ))}
      </motion.div>
    </footer>
  );
}
