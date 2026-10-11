'use client';

import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, type PointerEvent } from 'react';
import { SplitText } from '@/components/motion/SplitText';
import { useIntro } from '@/components/providers/IntroProvider';
import { AnchorLink } from '@/components/ui/AnchorLink';
import { Button } from '@/components/ui/Button';
import { ArrowDown } from '@/components/ui/icons';
import { site } from '@/content/site';
import { ease } from '@/lib/motion';
import { cn } from '@/lib/cn';
import { useLiteMotion } from '@/lib/useMediaQuery';

const lines = [
  { text: 'Dizajniramo.', className: '' },
  { text: 'Kodiramo.', className: 'text-outline md:pl-[14vw]' },
  { text: 'Učimo.', className: 'md:text-right' },
];

export function Hero() {
  const { introDone } = useIntro();
  const ref = useRef<HTMLElement>(null);

  // Izlaz iz heroja vezan uz scroll
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Skaliranje golemog teksta pri scrollu je preskupo za mobilni GPU – tamo samo fade
  const lite = useLiteMotion();
  const scale = useTransform(scrollYProgress, [0, 1], [1, lite ? 1 : 0.86]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', lite ? '0%' : '18%']);

  // Žuti sjaj prati miš
  // Pozicija sjaja u pikselima (početno: desno gore)
  const mx = useMotionValue(1000);
  const my = useMotionValue(300);
  const gx = useSpring(mx, { stiffness: 60, damping: 20 });
  const gy = useSpring(my, { stiffness: 60, damping: 20 });
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 1, ease: ease.out, delay },
  });

  return (
    <section ref={ref} onPointerMove={onMove} className="relative flex min-h-svh flex-col overflow-hidden bg-ink text-paper">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 size-[90vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(255_189_0/0.28)_0%,rgb(255_189_0/0.08)_35%,transparent_65%)] will-change-transform"
        style={{ x: gx, y: gy }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--color-paper)_1px,transparent_1px),linear-gradient(90deg,var(--color-paper)_1px,transparent_1px)] [background-size:6rem_6rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <motion.div style={{ scale, opacity, y }} className="shell relative flex flex-1 flex-col justify-center pb-10 pt-32">
        <motion.div {...fade(0)} className="mb-8 flex items-center justify-between">
          <p className="eyebrow flex items-center gap-2.5 text-paper/70">
            <span className="size-2 animate-pulse-dot rounded-full bg-brand" />
            Osobni projekt
          </p>
          <p className="eyebrow hidden text-paper/40 sm:block">
            {site.location} — od {site.since}.
          </p>
        </motion.div>

        <h1 className="display text-[16.5vw] leading-[0.86] tracking-[-0.045em] md:text-mega">
          {lines.map((line, i) => (
            <SplitText
              key={line.text}
              text={line.text}
              className={cn('block', line.className)}
              play={introDone}
              delay={0.15 + i * 0.12}
              bouncy
            />
          ))}
        </h1>

        <div className="mt-12 grid items-end gap-10 md:grid-cols-12">
          <motion.p {...fade(0.7)} className="text-lead text-paper/70 md:col-span-5">
            Troje ljudi, jedan portfolio. Ovdje radimo branding, grafiku i web – i pokazujemo što smo usput naučili.
          </motion.p>
          <motion.div {...fade(0.85)} className="flex flex-wrap items-center gap-3 md:col-span-4">
            <Button href="/#portfolio" variant="brand" size="lg">
              Pogledaj radove
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Javi se
            </Button>
          </motion.div>
          <motion.div
            className="hidden justify-end md:col-span-3 md:flex"
            initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
            animate={introDone ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.9 }}
          >
            <RotatingBadge />
          </motion.div>
        </div>
      </motion.div>

      <motion.div {...fade(1.1)} className="relative flex justify-center pb-8">
        <AnchorLink href="/#about" className="eyebrow group flex flex-col items-center gap-3 text-paper/50 hover:text-brand">
          Scroll
          <span className="relative flex h-12 w-px overflow-hidden bg-paper/15">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-brand"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
          <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-1" />
        </AnchorLink>
      </motion.div>
    </section>
  );
}

function RotatingBadge() {
  const text = 'osobni projekt • kavo studio • dizajn & kod • ';
  return (
    <motion.div whileHover={{ scale: 1.12 }} transition={{ type: 'spring', stiffness: 300, damping: 12 }} className="relative size-36" data-cursor="Bok!">
      <svg viewBox="0 0 200 200" className="size-full animate-spin-slow" aria-hidden>
        <defs>
          <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-paper/80 font-mono text-[13px] uppercase">
          {/* textLength = opseg kružnice (2π·78) → tekst točno zatvara krug */}
          <textPath href="#badge-circle" textLength={488} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 m-auto size-14">
        <Image src="/logo/kavo-logo.png" alt="" fill sizes="56px" />
      </div>
    </motion.div>
  );
}
