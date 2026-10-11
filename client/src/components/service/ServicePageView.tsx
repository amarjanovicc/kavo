'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Parallax } from '@/components/motion/Parallax';
import { Reveal } from '@/components/motion/Reveal';
import { SplitText } from '@/components/motion/SplitText';
import { useIntro } from '@/components/providers/IntroProvider';
import { ContactCta } from '@/components/sections/ContactCta';
import { AnchorLink, SCROLL_OFFSET } from '@/components/ui/AnchorLink';
import { ArrowUpRight, Sparkle } from '@/components/ui/icons';
import { services, type Service, type ServiceSection } from '@/content/services';
import { bounce, ease } from '@/lib/motion';
import { cn } from '@/lib/cn';

export function ServicePageView({ service }: { service: Service }) {
  const { introDone } = useIntro();
  const lenis = useLenis();
  const [active, setActive] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const numberY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const coverRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);

  const index = services.findIndex((s) => s.slug === service.slug);
  const next = services[(index + 1) % services.length];

  const goTo = (i: number) => {
    const el = document.getElementById(`dio-${i + 1}`);
    if (el && lenis) lenis.scrollTo(el, { offset: SCROLL_OFFSET - 30, duration: 1.2 });
  };

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-brand pb-20 pt-36 text-ink md:pb-28 md:pt-48">
        <motion.span
          aria-hidden
          style={{ y: numberY }}
          className="display text-outline pointer-events-none absolute -bottom-[0.18em] -right-[0.04em] select-none text-[45vw] leading-none text-ink/15"
        >
          {service.number}
        </motion.span>

        <div className="shell relative">
          <motion.nav
            aria-label="Breadcrumb"
            className="eyebrow mb-10 flex items-center gap-2 text-ink/60"
            initial={{ opacity: 0, y: 10 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <Link href="/" className="hover:text-ink">
              Početna
            </Link>
            <span>/</span>
            <AnchorLink href="/#services" className="hover:text-ink">
              Usluge
            </AnchorLink>
            <span>/</span>
            <span className="text-ink">{service.number}</span>
          </motion.nav>

          <div className="grid items-end gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <SplitText as="h1" text={service.title} className="display text-giant" play={introDone} delay={0.1} bouncy />
              <motion.p
                className="mt-10 max-w-2xl text-lead font-medium text-ink/80"
                initial={{ opacity: 0, y: 30 }}
                animate={introDone ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: ease.out, delay: 0.5 }}
              >
                {service.intro}
              </motion.p>
            </div>
            <motion.div
              className="md:col-span-4"
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={introDone ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', stiffness: 110, damping: 14, delay: 0.4 }}
            >
              <motion.div style={{ rotate: coverRotate }} className="relative mx-auto aspect-square w-full max-w-sm">
                <div aria-hidden className="absolute inset-[12%] rounded-full bg-paper/50 blur-2xl" />
                <Image src={service.cover} alt="" fill priority sizes="(max-width: 768px) 80vw, 30vw" className="animate-float object-contain" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink md:py-40">
        <div className="shell grid gap-16 md:grid-cols-12">
          <aside className="hidden md:col-span-4 md:block">
            <div className="sticky top-32">
              <p className="eyebrow mb-6 text-ink/50">Sadržaj</p>
              <ol className="space-y-1">
                {service.sections.map((s, i) => (
                  <li key={s.title}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      className={cn(
                        'relative flex w-full items-baseline gap-4 rounded-2xl px-4 py-3 text-left transition-colors duration-300',
                        active === i ? 'text-ink' : 'text-ink/45 hover:text-ink'
                      )}
                    >
                      {active === i && (
                        <motion.span
                          layoutId="service-toc"
                          className="absolute inset-0 rounded-2xl bg-brand"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="eyebrow relative">0{i + 1}</span>
                      <span className="relative text-lg font-medium">{s.title}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="space-y-32 md:col-span-8 md:space-y-48">
            {service.sections.map((s, i) => (
              <Block key={s.title} section={s} index={i} onActive={setActive} />
            ))}
          </div>
        </div>
      </section>

      <Link href={`/${next.slug}`} className="group block overflow-hidden bg-ink py-24 text-paper md:py-36" data-cursor="Dalje">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow mb-6 text-paper/50">Sljedeća usluga — {next.number}</p>
            <span className="display text-outline block text-giant transition-colors duration-500 group-hover:[color:var(--color-brand)]">
              {next.title}
            </span>
          </div>
          <span className="flex size-20 items-center justify-center rounded-full bg-brand text-ink transition-transform duration-700 ease-expo group-hover:rotate-45 group-hover:scale-110 md:size-28">
            <ArrowUpRight className="size-8" />
          </span>
        </div>
      </Link>

      <ContactCta />
    </>
  );
}

function Block({ section, index, onActive }: { section: ServiceSection; index: number; onActive: (index: number) => void }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <article ref={ref} id={`dio-${index + 1}`} className="scroll-mt-32">
      <div className="mb-8 flex items-center gap-4">
        <span className="display text-outline text-huge text-ink/30">0{index + 1}</span>
        <motion.span
          aria-hidden
          className="h-px flex-1 origin-left bg-ink/15"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: ease.out }}
        />
      </div>
      <SplitText as="h2" text={section.title} className="display text-huge" bouncy />
      <Reveal className="mt-8 max-w-2xl text-lead text-ink/75">{section.body}</Reveal>
      {section.list && (
        <ul className="mt-8 max-w-2xl space-y-3">
          {section.list.map((item, j) => (
            <Reveal as="li" key={item} delay={j * 0.08} className="flex items-start gap-4 rounded-2xl bg-ink/[0.04] p-4 text-lead">
              <Sparkle className="mt-1.5 size-4 shrink-0 text-brand-deep" />
              {item}
            </Reveal>
          ))}
        </ul>
      )}
      {section.outro && <Reveal className="mt-8 max-w-2xl text-lead font-medium">{section.outro}</Reveal>}
      {section.image && (
        <Parallax speed={40} className="mt-14">
          <motion.div
            whileHover={{ rotate: index % 2 ? 2 : -2, scale: 1.02 }}
            transition={bounce}
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-brand md:rounded-[2.5rem]"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.25, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: ease.out }}
            >
              <Image src={section.image} alt={`${section.title} – ilustracija`} fill sizes="(max-width: 768px) 90vw, 55vw" className="object-contain p-[8%]" />
            </motion.div>
          </motion.div>
        </Parallax>
      )}
    </article>
  );
}
