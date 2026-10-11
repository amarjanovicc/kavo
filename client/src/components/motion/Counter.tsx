'use client';

import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ease } from '@/lib/motion';

/** Broj koji „odbroji” do vrijednosti kad uđe u viewport */
export function Counter({ to, from = 0, duration = 2, className }: { to: number; from?: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useMotionValue(from);
  const rounded = useTransform(value, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration, ease: ease.out });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  return (
    <motion.span ref={ref} className={className} aria-label={String(to)}>
      {rounded}
    </motion.span>
  );
}
