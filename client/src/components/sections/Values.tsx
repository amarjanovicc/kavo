'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { SplitText } from '@/components/motion/SplitText';
import { values } from '@/content/about';
import { bounce, ease } from '@/lib/motion';
import { useLiteMotion } from '@/lib/useMediaQuery';

/** Sticky kartice koje se slažu jedna na drugu dok se scrolla */
export function Values() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section id="values" className="relative bg-brand pt-32 text-ink md:pt-44">
      <div className="shell mb-10 md:mb-0">
        <p className="eyebrow mb-8 text-ink/60">
          <span className="text-ink">(02)</span> Vrijednosti
        </p>
        <h2 className="display text-giant">
          <SplitText text="U čemu smo" className="block" bouncy />
          <span className="relative inline-block">
            <SplitText text="stvarno dobri" className="relative z-10 block" delay={0.15} bouncy />
            <motion.span
              aria-hidden
              className="absolute -bottom-[0.05em] left-0 h-[0.2em] w-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: ease.out, delay: 0.6 }}
            >
              <Image src="/underline/cards.png" alt="" fill sizes="60vw" className="object-fill" />
            </motion.span>
          </span>
        </h2>
      </div>

      <div ref={ref} className="relative">
        {values.map((v, i) => (
          <Card
            key={v.title}
            index={i}
            value={v}
            progress={scrollYProgress}
            range={[i / values.length, 1]}
            targetDim={(values.length - 1 - i) * 0.1}
          />
        ))}
      </div>
    </section>
  );
}

function Card({
  index,
  value,
  progress,
  range,
  targetDim,
}: {
  index: number;
  value: (typeof values)[number];
  progress: MotionValue<number>;
  range: [number, number];
  targetDim: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const lite = useLiteMotion();
  const imageScale = useTransform(scrollYProgress, [0, 1], [lite ? 1 : 1.6, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [lite ? 0 : index % 2 ? 18 : -18, 0]);
  // Kartice iza se zatamne umjesto da se skaliraju – skaliranje kartice sa slikom
  // tjera preglednik da je crta ispočetka u svakom frameu (izmjereno: ~40% sporih frameova)
  const dim = useTransform(progress, range, [0, targetDim]);

  return (
    <div ref={ref} className="sticky top-0 flex h-svh items-center justify-center px-4">
      <motion.article
        // Bez nagiba: rotirana kartica s overflow-hidden + animiranom slikom crta se ispočetka u svakom frameu
        style={{ top: `calc(${index * 22}px - 4vh)` }}
        whileHover={{ y: -8 }}
        transition={bounce}
        className="relative grid min-h-[62svh] w-full max-w-6xl origin-top overflow-hidden rounded-[2rem] bg-paper shadow-[0_40px_80px_-30px_rgba(8,13,16,0.45)] md:grid-cols-2 md:rounded-[3rem]"
      >
        <div className="flex flex-col justify-between gap-10 p-8 md:p-14">
          <span className="eyebrow text-ink/50">
            0{index + 1} <span className="text-ink/25">/ 0{values.length}</span>
          </span>
          <div>
            <h3 className="display text-huge">{value.title}</h3>
            <p className="mt-6 max-w-md text-lead text-ink/70">{value.description}</p>
          </div>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden bg-ink/[0.04] p-10">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(255_189_0/0.55)_0%,transparent_60%)]" />
          <motion.div style={{ scale: imageScale, rotate: imageRotate }} className="relative aspect-square w-full max-w-sm">
            <Image src={value.image} alt="" fill sizes="(max-width: 768px) 80vw, 30vw" className="animate-float object-contain" />
          </motion.div>
        </div>
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: dim }} />
      </motion.article>
    </div>
  );
}
