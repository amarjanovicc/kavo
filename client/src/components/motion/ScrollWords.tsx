'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { cn } from '@/lib/cn';

export type ScrollWord = {
  text: string;
  /** Ručno crtani naglasak ispod/oko riječi koji se iscrta kad riječ „zasvijetli” */
  decoration?: { src: string; kind: 'underline' | 'circle' };
};

/** Riječi se jedna po jedna „pale” kako korisnik scrolla */
export function ScrollWords({ words, className }: { words: ScrollWord[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] });

  return (
    <p ref={ref} className={cn('flex flex-wrap', className)}>
      <span className="sr-only">{words.map((w) => w.text).join(' ')}</span>
      {words.map((w, i) => {
        const start = i / words.length;
        return <Word key={i} word={w} progress={scrollYProgress} range={[start, start + 1 / words.length]} />;
      })}
    </p>
  );
}

function Word({ word, progress, range }: { word: ScrollWord; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, ['0.3em', '0em']);
  const draw = useTransform(progress, [range[1], Math.min(range[1] + 0.1, 1)], [0, 1]);

  return (
    <span className="relative mr-[0.24em] inline-block" aria-hidden>
      <motion.span style={{ opacity, y }} className="relative z-10 inline-block">
        {word.text}
      </motion.span>
      {word.decoration && (
        <motion.span
          style={{ scaleX: word.decoration.kind === 'underline' ? draw : undefined, scale: word.decoration.kind === 'circle' ? draw : undefined }}
          className={cn(
            'pointer-events-none absolute',
            word.decoration.kind === 'underline'
              ? '-bottom-[0.12em] left-0 h-[0.32em] w-full origin-left'
              : '-inset-x-[14%] -inset-y-[18%] origin-center'
          )}
        >
          <Image src={word.decoration.src} alt="" fill sizes="40vw" className="object-fill" />
        </motion.span>
      )}
    </span>
  );
}
