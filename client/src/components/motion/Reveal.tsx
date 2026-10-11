'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { duration, ease } from '@/lib/motion';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'li' | 'p' | 'span' | 'article';
  amount?: number;
};

/** Fade + blur + pomak prema gore kad element uđe u viewport */
export function Reveal({ children, className, delay = 0, y = 40, as = 'div', amount = 0.25 }: Props) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: duration.base, ease: ease.out, delay }}
    >
      {children}
    </Component>
  );
}
