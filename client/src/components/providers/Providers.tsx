'use client';

import { MotionConfig } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import type { ReactNode } from 'react';
import { IntroProvider } from './IntroProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1, autoRaf: true }}>
      <MotionConfig reducedMotion="user">
        <IntroProvider>{children}</IntroProvider>
      </MotionConfig>
    </ReactLenis>
  );
}
