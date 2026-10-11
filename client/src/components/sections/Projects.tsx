'use client';

import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { useScrollLock } from '@/components/providers/useScrollLock';
import { SplitText } from '@/components/motion/SplitText';
import { projects, type Project } from '@/content/projects';
import { ease } from '@/lib/motion';
import { useMediaQuery } from '@/lib/useMediaQuery';

type Block = { kind: 'wide'; project: Project } | { kind: 'cols'; cols: [Project[], Project[]] };

/** Dijeli projekte u dva stupca podjednake visine (prema omjeru slika); `wide` projekti idu preko cijele širine */
function buildLayout(list: Project[]): Block[] {
  const blocks: Block[] = [];
  let batch: Project[] = [];
  const flush = () => {
    if (!batch.length) return;
    const cols: [Project[], Project[]] = [[], []];
    const heights = [0, 0];
    for (const p of batch) {
      const k = heights[0] <= heights[1] ? 0 : 1;
      cols[k].push(p);
      heights[k] += p.height / p.width;
    }
    blocks.push({ kind: 'cols', cols });
    batch = [];
  };
  for (const p of list) {
    if (p.wide) {
      flush();
      blocks.push({ kind: 'wide', project: p });
    } else batch.push(p);
  }
  flush();
  return blocks;
}

const blocks = buildLayout(projects);
const indexOf = (p: Project) => projects.indexOf(p) + 1;

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="portfolio" className="relative bg-ink pb-32 pt-12 text-paper md:pb-44">
      <div className="shell">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-24">
          <div>
            <p className="eyebrow mb-8 text-paper/50">
              <span className="text-brand">(05)</span> Portfolio
            </p>
            <h2 className="display text-giant">
              <SplitText text="Odabrani" className="block" bouncy />
              <span className="flex items-start gap-4">
                <SplitText text="radovi" className="text-outline" delay={0.1} bouncy />
                <Reveal delay={0.5} className="eyebrow mt-[0.6em] rounded-full border border-paper/20 px-3 py-2 text-paper/60">
                  {projects.length}
                </Reveal>
              </span>
            </h2>
          </div>
          <Reveal className="max-w-sm text-paper/60">
            Izbor projekata na kojima smo radili – od brandinga i ambalaže do web stranica i aplikacija. Klikni na rad za veći prikaz.
          </Reveal>
        </div>

        <div className="space-y-4 md:space-y-6">
          {blocks.map((block, i) =>
            block.kind === 'wide' ? (
              <ProjectCard key={block.project.id} project={block.project} index={indexOf(block.project)} onOpen={setOpen} />
            ) : (
              <Columns key={i} cols={block.cols} onOpen={setOpen} />
            )
          )}
        </div>
      </div>

      <ProjectModal project={open} onClose={close} />
    </section>
  );
}

function Columns({ cols, onOpen }: { cols: [Project[], Project[]]; onOpen: (p: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useMediaQuery('(min-width: 768px)');
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], desktop ? [90, -90] : [0, 0]);

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-2 md:gap-6">
      <div className="space-y-4 md:space-y-6">
        {cols[0].map((p) => (
          <ProjectCard key={p.id} project={p} index={indexOf(p)} onOpen={onOpen} />
        ))}
      </div>
      <motion.div style={{ y }} className="space-y-4 md:space-y-6 md:pt-24">
        {cols[1].map((p) => (
          <ProjectCard key={p.id} project={p} index={indexOf(p)} onOpen={onOpen} />
        ))}
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 18 });

  const onMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  // whileInView je na vanjskom elementu: Chrome ne prijavljuje presjek za element čiji je vlastiti clip-path 100%
  return (
    <motion.article initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
      <motion.button
        type="button"
        onClick={() => {
          reset();
          onOpen(project);
        }}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="group block w-full text-left"
        data-cursor="Pogledaj"
        aria-label={`Otvori projekt ${project.title}`}
      >
        <motion.div
          variants={{
            hidden: { clipPath: 'inset(100% 0% 0% 0% round 2rem)', y: 60 },
            show: { clipPath: 'inset(0% 0% 0% 0% round 2rem)', y: 0 },
          }}
          transition={{ duration: 1.2, ease: ease.out }}
          className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]"
          style={{ aspectRatio: `${project.width} / ${project.height}`, backgroundColor: project.color }}
        >
          <motion.div layoutId={`project-${project.id}`} className="absolute inset-0">
            <Image
              src={project.image}
              alt={`${project.title} – ${project.description}`}
              fill
              sizes={project.wide ? '(max-width: 768px) 100vw, 90vw' : '(max-width: 768px) 100vw, 45vw'}
              className="object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.06]"
            />
          </motion.div>
          <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4 md:p-6">
            {project.tags.map((t, i) => (
              <span
                key={t}
                className="translate-y-[-150%] rounded-full bg-ink/85 px-3 py-1.5 text-xs text-paper opacity-0 transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: ease.out, delay: 0.3 }}
          className="mt-4 flex items-baseline justify-between gap-4 px-1"
        >
          <h3 className="display text-2xl transition-colors duration-300 group-hover:text-brand md:text-3xl">{project.title}</h3>
          <span className="eyebrow text-paper/40">({String(index).padStart(2, '0')})</span>
        </motion.div>
      </motion.button>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useScrollLock(!!project);

  useEffect(() => {
    if (!project) return;
    // Fokus se vraća na karticu koja je otvorila modal
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      // Tab ostaje unutar modala
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      opener?.focus({ preventScroll: true });
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={dialogRef}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          data-lenis-prevent
        >
          <motion.div
            className="absolute inset-0 bg-ink/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="relative grid max-h-full w-full max-w-6xl gap-6 overflow-y-auto md:grid-cols-[1fr_20rem] md:items-end">
            <div
              className="relative mx-auto overflow-hidden rounded-[2rem]"
              style={{
                width: `min(100%, calc(75svh * ${project.width / project.height}))`,
                aspectRatio: `${project.width} / ${project.height}`,
                backgroundColor: project.color,
              }}
            >
              <motion.div layoutId={`project-${project.id}`} className="absolute inset-0" transition={{ duration: 0.8, ease: ease.out }}>
                <Image src={project.image} alt={project.title} fill sizes="80vw" className="object-contain" priority />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: ease.out, delay: 0.2 }}
              className="text-paper"
            >
              <h3 className="display text-huge">{project.title}</h3>
              <p className="mt-4 text-paper/70">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li key={t} className="rounded-full border border-paper/20 px-3 py-1.5 text-xs text-paper/80">
                    {t}
                  </li>
                ))}
              </ul>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="mt-8 rounded-full bg-brand px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-105"
              >
                Zatvori
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
