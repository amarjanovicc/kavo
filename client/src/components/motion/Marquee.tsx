'use client';

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Beskonačna traka koja ubrzava i mijenja smjer ovisno o brzini scrolla.
 */
export function Marquee({
  children,
  baseVelocity = -2,
  className,
  copies = 4,
  'aria-hidden': ariaHidden,
}: {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
  copies?: number;
  'aria-hidden'?: boolean;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-100 / copies, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = direction.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    move += direction.current * move * f;
    baseX.set(baseX.get() + move);
  });

  return (
    <div className={cn('flex overflow-hidden whitespace-nowrap', className)} aria-hidden={ariaHidden}>
      <motion.div className="flex flex-nowrap whitespace-nowrap will-change-transform" style={{ x }}>
        {Array.from({ length: copies }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center" aria-hidden={i > 0 || undefined}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
