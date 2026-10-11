'use client';

import { motion, type Variants } from 'framer-motion';
import { Fragment } from 'react';
import { bounce, ease, stagger as defaultStagger } from '@/lib/motion';
import { cn } from '@/lib/cn';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';

type Props = {
  text: string;
  as?: Tag;
  className?: string;
  /** Dodatne klase za pojedine riječi (npr. naglasak bojom) */
  wordClassName?: (word: string, index: number) => string | undefined;
  delay?: number;
  stagger?: number;
  /** undefined → animira se kad uđe u viewport; boolean → upravlja se izvana */
  play?: boolean;
  /** Svako slovo poskoči na hover */
  bouncy?: boolean;
  once?: boolean;
};

const word: Variants = {
  hidden: { y: '115%', rotate: 7 },
  show: { y: '0%', rotate: 0, transition: { duration: 1.1, ease: ease.out } },
};

/**
 * Razbija tekst na riječi koje „izranjaju” ispod maske.
 * Pristupačnost: puni tekst je u aria-label, razlomljeni dijelovi su aria-hidden.
 */
export function SplitText({
  text,
  as = 'span',
  className,
  wordClassName,
  delay = 0,
  stagger = defaultStagger,
  play,
  bouncy = false,
  once = true,
}: Props) {
  const Component = motion[as] as typeof motion.span;
  const words = text.split(' ');
  const controlled = play !== undefined;

  return (
    <Component
      className={className}
      aria-label={text}
      initial="hidden"
      animate={controlled ? (play ? 'show' : 'hidden') : undefined}
      whileInView={controlled ? undefined : 'show'}
      viewport={{ once, amount: 0.35 }}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <span aria-hidden className="inline-block overflow-hidden whitespace-nowrap pb-[0.1em] -mb-[0.1em] align-bottom">
            <motion.span variants={word} className={cn('inline-block origin-bottom-left', wordClassName?.(w, i))}>
              {bouncy
                ? Array.from(w).map((char, j) => (
                    <motion.span
                      key={j}
                      className="inline-block"
                      whileHover={{ y: '-0.16em', rotate: j % 2 ? 7 : -7, color: '#FFBD00' }}
                      transition={bounce}
                    >
                      {char}
                    </motion.span>
                  ))
                : w}
            </motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </Component>
  );
}
