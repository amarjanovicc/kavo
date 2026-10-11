'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RollText } from '@/components/motion/RollText';
import { useScrollLock } from '@/components/providers/useScrollLock';
import { AnchorLink } from '@/components/ui/AnchorLink';
import { Button } from '@/components/ui/Button';
import { navLinks } from '@/content/site';
import { services } from '@/content/services';
import { bounce, ease } from '@/lib/motion';
import { cn } from '@/lib/cn';
import { useMediaQuery } from '@/lib/useMediaQuery';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 240 && !menuOpen && !servicesOpen);
  });

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useScrollLock(menuOpen);

  // Izbornik je samo za mobitel – zatvori ga ako prozor postane širok (rotacija tableta, resize)
  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setMenuOpen(false);
      setServicesOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[80] pt-3 sm:pt-4"
        animate={{ y: hidden ? '-140%' : '0%' }}
        transition={{ duration: 0.7, ease: ease.out }}
      >
        <div className="shell">
          <nav
            aria-label="Glavna navigacija"
            className={cn(
              'flex items-center justify-between rounded-full border border-paper/10 bg-ink/90 py-2 pl-3 pr-2 backdrop-blur-xl transition-shadow duration-500',
              (scrolled || menuOpen) && 'shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]'
            )}
          >
            <Link href="/" className="group flex items-center gap-2.5" aria-label="Kavo Studio – početna">
              <motion.span whileHover={{ rotate: -14, scale: 1.12 }} transition={bounce} className="relative size-9 shrink-0">
                <Image src="/logo/kavo-logo.png" alt="" fill sizes="36px" priority />
              </motion.span>
              <span className="display hidden text-[1.35rem] leading-none text-paper xs:block">
                kavo<span className="text-brand">.</span>studio
              </span>
            </Link>

            <ul className="hidden items-center md:flex" onMouseLeave={() => setHovered(null)}>
              {navLinks.map((link) => {
                const withServices = 'hasServices' in link && link.hasServices;
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => {
                      setHovered(link.href);
                      if (withServices) setServicesOpen(true);
                    }}
                    onMouseLeave={() => withServices && setServicesOpen(false)}
                    onFocus={() => withServices && setServicesOpen(true)}
                    onBlur={(e) => {
                      if (withServices && !e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
                    }}
                  >
                    <AnchorLink
                      href={link.href}
                      className="group relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
                    >
                      {hovered === link.href && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-paper/10"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        />
                      )}
                      <RollText text={link.label} className="relative" />
                      {withServices && (
                        <motion.svg
                          viewBox="0 0 10 6"
                          className="relative size-2.5"
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden
                        >
                          <path d="m1 1 4 4 4-4" />
                        </motion.svg>
                      )}
                    </AnchorLink>

                    {withServices && (
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3"
                            initial={{ opacity: 0, y: 12, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.35, ease: ease.out }}
                          >
                            <div className="grid grid-cols-2 gap-2 rounded-[1.75rem] border border-paper/10 bg-ink-2 p-2 shadow-2xl">
                              {services.map((s, i) => (
                                <motion.div
                                  key={s.slug}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.04 * i, duration: 0.4, ease: ease.out }}
                                >
                                  <Link
                                    href={`/${s.slug}`}
                                    className={cn(
                                      'group flex h-full flex-col gap-2 rounded-[1.25rem] p-4 transition-colors duration-300 hover:bg-brand hover:text-ink',
                                      pathname === `/${s.slug}` ? 'bg-paper/10' : ''
                                    )}
                                  >
                                    <span className="eyebrow text-brand transition-colors group-hover:text-ink">{s.number}</span>
                                    <span className="display text-2xl leading-none">{s.title}</span>
                                    <span className="text-xs leading-snug text-paper/60 transition-colors group-hover:text-ink/70">{s.short}</span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <Button href="/contact" variant="brand">
                  Kontakt
                </Button>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
                className="relative flex size-11 items-center justify-center rounded-full bg-brand text-ink md:hidden"
              >
                <motion.span
                  className="absolute h-0.5 w-5 rounded-full bg-current"
                  animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                  transition={bounce}
                />
                <motion.span
                  className="absolute h-0.5 w-5 rounded-full bg-current"
                  animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                  transition={bounce}
                />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
