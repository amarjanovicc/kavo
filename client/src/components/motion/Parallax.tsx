'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { useLiteMotion } from '@/lib/useMediaQuery';

/** Sadržaj se pomiče sporije/brže od scrolla – osjećaj dubine */
export function Parallax({
  children,
  speed = 60,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const s = useLiteMotion() ? 0 : speed;
  const y = useTransform(scrollYProgress, [0, 1], [s, -s]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
