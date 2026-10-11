'use client';

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

/**
 * Custom cursor (samo za miš). Elementi s `data-cursor="Tekst"` pretvaraju ga u žutu oznaku.
 * Sistemski kursor ostaje vidljiv zbog pristupačnosti.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: PointerEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      setLabel(el?.closest('[data-cursor]')?.getAttribute('data-cursor') ?? null);
      setHovering(!!el?.closest(INTERACTIVE));
    };
    const hide = () => setVisible(false);

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      document.documentElement.removeEventListener('pointerleave', hide);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 96 : hovering ? 48 : 12;

  return (
    // Bez mix-blend-mode: blend na fiksnom sloju tjera preglednik da u svakom frameu ponovno slaže cijelu stranicu.
    // Žuta ispuna + tamni rub su vidljivi i na tamnoj i na žutoj podlozi.
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ x: sx, y: sy }}>
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_0_0_1.5px_#080D10]"
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          backgroundColor: label ? 'rgba(255,189,0,1)' : hovering ? 'rgba(255,189,0,0.3)' : 'rgba(255,189,0,1)',
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              className="eyebrow text-[10px] font-semibold text-ink"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
