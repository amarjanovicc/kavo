'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { AnchorLink } from '@/components/ui/AnchorLink';
import { navLinks, site } from '@/content/site';
import { services } from '@/content/services';
import { ease } from '@/lib/motion';

const ORIGIN = 'calc(100% - 3rem) 2.5rem';

const items = [...navLinks.map((l) => ({ label: l.label, href: l.href as string })), { label: 'Kontakt', href: '/contact' }];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  // Disclosure navigacija (ne modal): toggle gumb u headeru ostaje dostupan, fokus ide na prvi link
  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => ref.current?.querySelector('a')?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          id="mobile-menu"
          className="fixed inset-0 z-[75] flex flex-col overflow-y-auto bg-brand text-ink md:hidden"
          initial={{ clipPath: `circle(0% at ${ORIGIN})` }}
          animate={{ clipPath: `circle(150% at ${ORIGIN})` }}
          exit={{ clipPath: `circle(0% at ${ORIGIN})` }}
          transition={{ duration: 0.8, ease: ease.inOut }}
          data-lenis-prevent
        >
          <nav aria-label="Izbornik" className="shell flex flex-1 flex-col justify-center pb-10 pt-28">
            <ul className="space-y-1">
              {items.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%', rotate: 6 }}
                    animate={{ y: '0%', rotate: 0 }}
                    exit={{ y: '110%' }}
                    transition={{ duration: 0.8, ease: ease.out, delay: 0.25 + i * 0.07 }}
                    className="origin-bottom-left"
                  >
                    <AnchorLink href={item.href} onClick={onClose} className="group flex items-baseline gap-4">
                      <span className="eyebrow text-ink/50">0{i + 1}</span>
                      <span className="display text-[clamp(3rem,15vw,5.5rem)] leading-[0.95] transition-transform duration-500 ease-expo group-active:translate-x-3">
                        {item.label}
                      </span>
                    </AnchorLink>
                  </motion.div>
                </li>
              ))}
            </ul>

            <motion.ul
              className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-ink/15 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: ease.out }}
            >
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} onClick={onClose} className="flex items-baseline gap-2 text-base font-medium">
                    <span className="eyebrow text-[10px] text-ink/50">{s.number}</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </nav>

          <motion.div
            className="shell flex items-center justify-between border-t border-ink/15 py-6 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <div className="flex gap-4">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
