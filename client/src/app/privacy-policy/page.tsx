import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { SplitText } from '@/components/motion/SplitText';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Pravila privatnosti',
  description: 'Kako Kavo Studio prikuplja, koristi i štiti osobne podatke.',
  alternates: { canonical: '/privacy-policy' },
};

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-4 space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
        {item}
      </li>
    ))}
  </ul>
);

const sections: { title: string; content: ReactNode }[] = [
  {
    title: 'Općenito',
    content: (
      <>
        <p>
          Ova stranica (u daljnjem tekstu: „Stranica”) je <strong className="text-paper">osobni, nekomercijalni projekt</strong> (u
          daljnjem tekstu: „mi”, „nas”). Kavo nije registrirana tvrtka ni obrt, ne prodaje proizvode niti usluge i ne izdaje
          ponude ni račune. Stranica služi isključivo kao osobni portfolio.
        </p>
        <p className="mt-4">
          Poštujemo vašu privatnost i obvezujemo se zaštititi vaše osobne podatke. Ova pravila objašnjavaju kako prikupljamo,
          koristimo i štitimo vaše informacije kada koristite Stranicu.
        </p>
      </>
    ),
  },
  {
    title: 'Prikupljanje podataka',
    content: (
      <>
        <h3 className="font-semibold text-paper">Osobni podaci</h3>
        <List items={['Ime i prezime', 'Email adresa', 'Sadržaj poruke koju nam dobrovoljno pošaljete']} />
        <h3 className="mt-8 font-semibold text-paper">Automatski prikupljeni podaci</h3>
        <List items={['IP adresa', 'Informacije o pregledniku', 'Informacije o uređaju', 'Podaci o korištenju stranice']} />
      </>
    ),
  },
  {
    title: 'Kolačići (cookies)',
    content: (
      <>
        <p>
          Stranica koristi kolačiće za poboljšanje korisničkog iskustva. Kolačići su male tekstualne datoteke koje se pohranjuju
          na vašem uređaju.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ['Potrebni', 'Omogućavaju osnovne funkcionalnosti stranice i ne mogu se onemogućiti.'],
            ['Analitički', 'Pomažu nam razumjeti kako korisnici koriste stranicu (Google Analytics) – samo uz vašu privolu.'],
            ['Funkcionalni', 'Omogućavaju poboljšane funkcionalnosti i personalizaciju.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-paper/5 p-5">
              <h3 className="font-semibold text-brand">{title}</h3>
              <p className="mt-2 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Korištenje podataka',
    content: (
      <>
        <p>Vaše podatke koristimo u sljedeće svrhe:</p>
        <List items={['Odgovaranje na vaše poruke', 'Poboljšanje naše web stranice', 'Analiza korištenja stranice', 'Ispunjavanje pravnih obveza']} />
      </>
    ),
  },
  {
    title: 'Dijeljenje podataka',
    content: (
      <>
        <p>Ne prodajemo, ne mijenjamo niti ne ustupamo vaše osobne podatke trećim stranama, osim u sljedećim slučajevima:</p>
        <List
          items={[
            'Kada date svoj pristanak',
            'Pružateljima tehničkih usluga potrebnih za rad stranice (npr. hosting, email servisi)',
            'Kada to zahtijeva zakon',
            'Za zaštitu naših prava i sigurnosti',
          ]}
        />
      </>
    ),
  },
  {
    title: 'Vaša prava (GDPR)',
    content: (
      <>
        <p>Prema Općoj uredbi o zaštiti podataka (GDPR) imate sljedeća prava:</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            ['Pravo pristupa', 'Možete zatražiti kopiju svojih podataka'],
            ['Pravo ispravka', 'Možete zatražiti ispravak netočnih podataka'],
            ['Pravo brisanja', 'Možete zatražiti brisanje svojih podataka'],
            ['Pravo prenosivosti', 'Možete zatražiti prijenos podataka'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-paper/5 p-5">
              <h3 className="font-semibold text-brand">{title}</h3>
              <p className="mt-2 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Sigurnost podataka',
    content: (
      <>
        <p>Koristimo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših podataka:</p>
        <List
          items={[
            'SSL enkripcija za sve komunikacije',
            'Sigurni serveri s redovitim ažuriranjima',
            'Pristup podacima imaju samo autori projekta',
            'Redovito sigurnosno kopiranje podataka',
          ]}
        />
      </>
    ),
  },
  {
    title: 'Kontakt',
    content: (
      <p>
        Za sva pitanja vezana uz privatnost podataka pišite nam na{' '}
        <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-4">
          {site.email}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-ink pb-32 pt-40 text-paper md:pt-48">
      <div className="shell max-w-5xl">
        <p className="eyebrow mb-8 text-paper/50">Pravno</p>
        <SplitText as="h1" text="Pravila privatnosti" className="display text-giant" bouncy />
        <Reveal className="mt-8 max-w-2xl text-lead text-paper/70">
          Vaša privatnost nam je važna. Ovdje su sve informacije o tome kako upravljamo vašim podacima.
        </Reveal>

        <ol className="mt-20 divide-y divide-paper/10 border-y border-paper/10">
          {sections.map((s, i) => (
            <Reveal as="li" key={s.title} className="grid gap-6 py-12 md:grid-cols-12" amount={0.15}>
              <div className="md:col-span-4">
                <span className="eyebrow text-brand">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="display mt-3 text-big">{s.title}</h2>
              </div>
              <div className="leading-relaxed text-paper/70 md:col-span-8">{s.content}</div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 rounded-[1.75rem] bg-brand/10 p-8 text-paper/80">
          <p className="font-semibold text-brand">Zadnja izmjena</p>
          <p className="mt-2">
            Ova pravila privatnosti zadnji put su ažurirana 11. listopada 2026. Zadržavamo pravo izmjene u bilo koje vrijeme.
          </p>
        </Reveal>

        <div className="mt-16">
          <Button href="/" variant="outline-light">
            Povratak na početnu
          </Button>
        </div>
      </div>
    </section>
  );
}
