'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Magnetic } from '@/components/motion/Magnetic';
import { Marquee } from '@/components/motion/Marquee';
import { SplitText } from '@/components/motion/SplitText';
import { useI18n } from '@/components/providers/LocaleProvider';
import { ArrowUpRight, Sparkle } from '@/components/ui/icons';
import { ease } from '@/lib/motion';

export function ContactCta({ id = 'contact' }: { id?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-25, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section ref={ref} id={id} className="relative overflow-hidden bg-brand py-28 text-ink md:py-40">
      <Marquee baseVelocity={-1.5} className="mb-16 border-y border-ink/15 py-3 md:mb-24">
        {['Pozdrav', 'Hello', 'Ciao', 'Hola', 'Bok'].map((w) => (
          <span key={w} className="eyebrow flex items-center gap-6 px-6 text-sm">
            {w} <Sparkle className="size-3" />
          </span>
        ))}
      </Marquee>

      <div className="shell grid items-center gap-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="eyebrow mb-8 text-ink/60">{t.cta.eyebrow}</p>
          <h2 className="display text-giant">
            <SplitText text={t.cta.heading[0]} className="block" bouncy />
            <span className="block">
              <SplitText text={t.cta.heading[1]} delay={0.1} bouncy />{' '}
              <span className="relative inline-block">
                <SplitText text={t.cta.heading[2]} className="relative z-10" delay={0.2} bouncy />
                <motion.span
                  aria-hidden
                  className="absolute -bottom-[0.06em] -left-[5%] h-[0.28em] w-[110%] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: ease.out, delay: 0.7 }}
                >
                  <Image src="/underline/contact.png" alt="" fill sizes="50vw" className="object-fill" />
                </motion.span>
              </span>
            </span>
          </h2>
        </div>

        <motion.div style={{ rotate, scale }} className="flex justify-center md:col-span-4 md:justify-end">
          <Magnetic strength={0.45}>
            <Link
              href="/contact"
              className="group relative flex size-44 items-center justify-center overflow-hidden rounded-full bg-ink text-paper md:size-56"
              data-cursor={t.sayHi}
            >
              <span
                aria-hidden
                className="absolute inset-0 scale-0 rounded-full bg-paper transition-transform duration-700 ease-expo group-hover:scale-100"
              />
              <span className="relative flex flex-col items-center gap-2 transition-colors duration-500 group-hover:text-ink">
                <ArrowUpRight className="size-8 transition-transform duration-500 ease-expo group-hover:rotate-45" />
                <span className="display text-2xl md:text-3xl">{t.sayHi}</span>
              </span>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
