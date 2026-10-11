'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Counter } from '@/components/motion/Counter';
import { Parallax } from '@/components/motion/Parallax';
import { Reveal } from '@/components/motion/Reveal';
import { SplitText } from '@/components/motion/SplitText';
import { team } from '@/content/about';
import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { bounce, ease } from '@/lib/motion';
import { cn } from '@/lib/cn';

const stats = [
  { value: team.length, label: 'kreativca u timu' },
  { value: projects.length, label: 'projekata u portfoliju' },
  { value: site.since, from: 2000, label: 'godina početka' },
];

export function About() {
  return (
    <section id="studio" className="relative overflow-hidden bg-paper py-32 text-ink md:py-44">
      <div className="shell">
        <p className="eyebrow mb-8 text-ink/50">
          <span className="text-ink">(03)</span> Studio
        </p>
        <h2 className="display text-giant">
          <span className="relative inline-block">
            <SplitText text="kavo" className="relative z-10" bouncy />
            <motion.span
              aria-hidden
              className="absolute left-0 top-[52%] z-0 h-[0.14em] w-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: ease.out, delay: 0.5 }}
            >
              <Image src="/underline/KavoStudio.png" alt="" fill sizes="40vw" className="object-fill" />
            </motion.span>
          </span>{' '}
          <SplitText text="studio" className="text-outline" delay={0.1} bouncy />
        </h2>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-ink/10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-paper p-8 md:p-10">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <Counter to={s.value} from={s.from} className="display block text-huge tabular-nums" />
                <span className="mt-3 block text-sm text-ink/60">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-32 space-y-32 md:space-y-44">
          {team.map((member, i) => (
            <article key={member.name} className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
              <div className={cn('md:col-span-6', i % 2 ? 'md:order-2 md:col-start-7' : '')}>
                <Parallax speed={50}>
                  <motion.div
                    whileHover={{ rotate: i % 2 ? 3 : -3, scale: 1.03 }}
                    transition={bounce}
                    className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-ink/[0.04]"
                    data-cursor={member.name}
                  >
                    <motion.div
                      aria-hidden
                      className="absolute inset-[18%] rounded-full bg-brand"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ type: 'spring', stiffness: 90, damping: 14 }}
                    />
                    <Image
                      src={member.image}
                      alt={`${member.name} – ${member.role}, član Kavo tima`}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="animate-float object-contain p-[8%]"
                      style={{ animationDelay: `${i * -1.5}s` }}
                    />
                  </motion.div>
                </Parallax>
              </div>
              <div className={cn('md:col-span-6', i % 2 ? 'md:order-1' : '')}>
                <Reveal className="eyebrow mb-6 flex items-center gap-3 text-ink/50">
                  <span className="h-px w-10 bg-ink/30" />
                  {member.label}
                </Reveal>
                <SplitText as="p" text={member.text} className="text-big font-medium" stagger={0.015} />
                <Reveal delay={0.2} className="mt-10 inline-flex items-center gap-3 rounded-full border border-ink/15 py-2 pl-2 pr-5">
                  <span className="display flex size-9 items-center justify-center rounded-full bg-ink text-sm text-brand">
                    {member.name[0]}
                  </span>
                  <span className="text-sm">
                    <strong className="font-semibold">{member.name}</strong> <span className="text-ink/50">— {member.role}</span>
                  </span>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
