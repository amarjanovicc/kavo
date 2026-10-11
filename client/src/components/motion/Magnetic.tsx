'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, type ReactNode, type PointerEvent } from 'react';
import { soft } from '@/lib/motion';
import { cn } from '@/lib/cn';

/** Element se lagano „lijepi” za kursor dok je miš iznad njega */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, soft);
  const sy = useSpring(y, soft);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  );
}
