'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useId, useState, type FormEvent, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { RollText } from '@/components/motion/RollText';
import { SplitText } from '@/components/motion/SplitText';
import { useIntro } from '@/components/providers/IntroProvider';
import { ArrowUpRight } from '@/components/ui/icons';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { trackEvent } from '@/lib/analytics';
import { bounce, ease } from '@/lib/motion';
import { cn } from '@/lib/cn';

const FORM_ENDPOINT = 'https://formspree.io/f/mzzjvlbn';
const sources = ['Preporuka', 'Google', 'Društvene mreže', 'Drugo'];
const empty = { name: '', email: '', projectDetails: '', foundBy: '', helpWith: [] as string[] };

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactView() {
  const { introDone } = useIntro();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>('idle');

  const toggleInterest = (title: string) =>
    setForm((f) => ({
      ...f,
      helpWith: f.helpWith.includes(title) ? f.helpWith.filter((t) => t !== title) : [...f.helpWith, title],
    }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      setStatus('sent');
      setForm(empty);
      trackEvent('submit', 'contact', 'contact-form');
    } catch {
      setStatus('error');
    }
  };

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: introDone ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1, ease: ease.out, delay },
  });

  return (
    <section className="relative min-h-svh overflow-hidden bg-ink pb-24 pt-36 text-paper md:pt-44">
      <div aria-hidden className="pointer-events-none absolute -right-[20vw] -top-[20vw] size-[80vw] rounded-full bg-[radial-gradient(circle,rgb(255_189_0/0.14)_0%,transparent_60%)]" />

      <div className="shell relative grid gap-16 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <motion.p {...fade(0)} className="eyebrow mb-8 flex items-center gap-2.5 text-paper/60">
            <span className="size-2 animate-pulse-dot rounded-full bg-brand" /> Kontakt
          </motion.p>
          <SplitText
            as="h1"
            text="Razgovarajmo."
            className="display text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.04em]"
            play={introDone}
            delay={0.1}
            bouncy
          />
          <motion.p {...fade(0.4)} className="mt-8 max-w-md text-lead text-paper/70">
            Imate pitanje, komentar ili samo želite porazgovarati o dizajnu i webu? Javite se! Kavo je osobni projekt, pa ovdje
            ne nudimo plaćene usluge ni ponude – samo razgovor.
          </motion.p>

          <motion.div {...fade(0.55)} className="mt-12 space-y-6">
            <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-3 text-big font-medium" data-cursor="Pošalji">
              <RollText text={site.email} />
              <ArrowUpRight className="size-[0.7em] text-brand transition-transform duration-500 ease-expo group-hover:rotate-45" />
            </a>
            <div className="flex gap-6">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex text-paper/70 hover:text-brand">
                  <RollText text={s.label} />
                </a>
              ))}
            </div>
            <p className="max-w-md rounded-2xl border border-paper/10 p-5 text-sm text-paper/50">{site.disclaimer}</p>
          </motion.div>
        </div>

        <motion.div {...fade(0.3)} className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[2rem] border border-paper/10 bg-ink-2 p-6 md:p-10">
            <AnimatePresence mode="wait" initial={false}>
              {status === 'sent' ? (
                <Success key="sent" onReset={() => setStatus('idle')} />
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: ease.out }}
                  className="space-y-10"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      label="Ime *"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <Field
                      label="Email *"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <fieldset>
                    <legend className="eyebrow mb-4 text-paper/50">Što vas zanima? (više odgovora)</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {services.map((s) => {
                        const on = form.helpWith.includes(s.title);
                        return (
                          <motion.button
                            key={s.slug}
                            type="button"
                            aria-pressed={on}
                            onClick={() => toggleInterest(s.title)}
                            whileTap={{ scale: 0.96 }}
                            transition={bounce}
                            className={cn(
                              'relative flex items-start gap-3 rounded-2xl border p-4 text-left transition-colors duration-300',
                              on ? 'border-brand bg-brand text-ink' : 'border-paper/15 hover:border-paper/40'
                            )}
                          >
                            <Check on={on} />
                            <span>
                              <span className="block font-semibold">{s.title}</span>
                              <span className={cn('mt-1 block text-xs', on ? 'text-ink/70' : 'text-paper/50')}>{s.short}</span>
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="eyebrow mb-4 text-paper/50">Kako ste saznali za nas?</legend>
                    <div className="flex flex-wrap gap-2">
                      {sources.map((src) => {
                        const on = form.foundBy === src;
                        return (
                          <motion.button
                            key={src}
                            type="button"
                            aria-pressed={on}
                            onClick={() => setForm({ ...form, foundBy: on ? '' : src })}
                            whileTap={{ scale: 0.92 }}
                            transition={bounce}
                            className={cn(
                              'rounded-full border px-5 py-2.5 text-sm transition-colors duration-300',
                              on ? 'border-brand bg-brand text-ink' : 'border-paper/15 hover:border-paper/40'
                            )}
                          >
                            {src}
                          </motion.button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <Field
                    textarea
                    label="Vaša poruka"
                    name="message"
                    rows={5}
                    value={form.projectDetails}
                    onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
                  />

                  <label className="flex cursor-pointer items-start gap-3 text-sm text-paper/60">
                    <input type="checkbox" required className="mt-0.5 size-4 shrink-0 accent-[var(--color-brand)]" />
                    <span>
                      Slanjem obrasca pristajete na naša{' '}
                      <Link href="/privacy-policy" className="text-brand underline underline-offset-4">
                        pravila privatnosti
                      </Link>
                      . Podaci se koriste isključivo za odgovor na vašu poruku.
                    </span>
                  </label>

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        role="alert"
                        className="rounded-2xl bg-red-500/15 p-4 text-sm text-red-300"
                      >
                        Došlo je do greške. Pokušajte ponovo ili pišite na {site.email}.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={bounce}
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-brand px-8 py-5 font-semibold text-ink disabled:opacity-70"
                  >
                    <span aria-hidden className="absolute inset-0 translate-y-full bg-paper transition-transform duration-700 ease-expo group-hover:translate-y-0" />
                    {status === 'sending' ? (
                      <>
                        <motion.span
                          className="relative size-5 rounded-full border-2 border-ink border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        />
                        <span className="relative">Šalje se…</span>
                      </>
                    ) : (
                      <>
                        <RollText text="Pošalji poruku" className="relative" />
                        <ArrowUpRight className="relative size-5 transition-transform duration-500 ease-expo group-hover:rotate-45" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type FieldProps = { label: string; textarea?: boolean } & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

function Field({ label, textarea, className, ...props }: FieldProps) {
  const id = useId();
  const classes = cn(
    'peer w-full resize-none rounded-2xl border border-paper/15 bg-transparent px-5 pb-3 pt-7 text-paper outline-none transition-colors duration-300 focus:border-brand',
    className
  );
  return (
    <div className="relative">
      {textarea ? <textarea id={id} placeholder=" " className={classes} {...props} /> : <input id={id} placeholder=" " className={classes} {...props} />}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-5 top-[1.15rem] text-paper/50 transition-all duration-300 ease-expo peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

function Check({ on }: { on: boolean }) {
  return (
    <span className={cn('mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors', on ? 'border-ink bg-ink' : 'border-paper/30')}>
      <svg viewBox="0 0 16 16" className="size-3" aria-hidden>
        <motion.path
          d="M3 8.5 6.5 12 13 4.5"
          fill="none"
          stroke="#FFBD00"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{ pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }}
          transition={{ duration: 0.35, ease: ease.out }}
        />
      </svg>
    </span>
  );
}

function Success({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={bounce}
      className="flex flex-col items-center py-16 text-center"
      role="status"
    >
      <motion.svg viewBox="0 0 80 80" className="size-28" aria-hidden>
        <motion.circle
          cx="40"
          cy="40"
          r="36"
          fill="#FFBD00"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          style={{ originX: '50%', originY: '50%' }}
        />
        <motion.path
          d="M24 41 35 52 57 29"
          fill="none"
          stroke="#080D10"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: ease.out }}
        />
      </motion.svg>
      <h2 className="display mt-8 text-huge">Hvala!</h2>
      <p className="mt-4 max-w-sm text-paper/70">Vaša poruka je poslana. Javit ćemo se čim stignemo.</p>
      <button type="button" onClick={onReset} className="group mt-10 inline-flex rounded-full border border-paper/20 px-6 py-3 text-sm hover:border-brand hover:text-brand">
        <RollText text="Pošalji novu poruku" />
      </button>
    </motion.div>
  );
}
