import type { Locale } from './dictionary';

/** `**tekst**` → istaknuto, `{email}` → mailto link */
export type PrivacyBlock =
  | { p: string }
  | { h: string }
  | { list: string[] }
  | { cards: [string, string][]; cols: 2 | 3 };

type Privacy = {
  eyebrow: string;
  title: string;
  lead: string;
  updatedTitle: string;
  updated: string;
  sections: { title: string; blocks: PrivacyBlock[] }[];
};

const hr: Privacy = {
  eyebrow: 'Pravno',
  title: 'Pravila privatnosti',
  lead: 'Vaša privatnost nam je važna. Ovdje su sve informacije o tome kako upravljamo vašim podacima.',
  updatedTitle: 'Zadnja izmjena',
  updated: 'Ova pravila privatnosti zadnji put su ažurirana 11. listopada 2026. Zadržavamo pravo izmjene u bilo koje vrijeme.',
  sections: [
    {
      title: 'Općenito',
      blocks: [
        {
          p: 'Ova stranica (u daljnjem tekstu: „Stranica”) je **osobni, nekomercijalni projekt** njezinih autora (u daljnjem tekstu: „mi”, „nas”). Kavo nije registrirana tvrtka ni obrt, ne prodaje proizvode niti usluge i ne izdaje ponude ni račune. Stranica služi isključivo kao osobni portfolio.',
        },
        {
          p: 'Poštujemo vašu privatnost i obvezujemo se zaštititi vaše osobne podatke. Ova pravila objašnjavaju kako prikupljamo, koristimo i štitimo vaše informacije kada koristite Stranicu.',
        },
      ],
    },
    {
      title: 'Prikupljanje podataka',
      blocks: [
        { h: 'Osobni podaci' },
        { list: ['Ime i prezime', 'Email adresa', 'Sadržaj poruke koju nam dobrovoljno pošaljete'] },
        { h: 'Automatski prikupljeni podaci' },
        { list: ['IP adresa', 'Informacije o pregledniku', 'Informacije o uređaju', 'Podaci o korištenju stranice'] },
      ],
    },
    {
      title: 'Kolačići (cookies)',
      blocks: [
        {
          p: 'Stranica koristi kolačiće za poboljšanje korisničkog iskustva. Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju.',
        },
        {
          cols: 3,
          cards: [
            ['Potrebni', 'Omogućavaju osnovne funkcionalnosti stranice i ne mogu se onemogućiti.'],
            ['Analitički', 'Pomažu nam razumjeti kako korisnici koriste stranicu (Google Analytics) – samo uz vašu privolu.'],
            ['Funkcionalni', 'Omogućavaju poboljšane funkcionalnosti i personalizaciju.'],
          ],
        },
      ],
    },
    {
      title: 'Korištenje podataka',
      blocks: [
        { p: 'Vaše podatke koristimo u sljedeće svrhe:' },
        { list: ['Odgovaranje na vaše poruke', 'Poboljšanje naše web stranice', 'Analiza korištenja stranice', 'Ispunjavanje pravnih obveza'] },
      ],
    },
    {
      title: 'Dijeljenje podataka',
      blocks: [
        { p: 'Ne prodajemo, ne mijenjamo niti ne ustupamo vaše osobne podatke trećim stranama, osim u sljedećim slučajevima:' },
        {
          list: [
            'Kada date svoj pristanak',
            'Pružateljima tehničkih usluga potrebnih za rad stranice (npr. hosting, email servisi)',
            'Kada to zahtijeva zakon',
            'Za zaštitu naših prava i sigurnosti',
          ],
        },
      ],
    },
    {
      title: 'Vaša prava (GDPR)',
      blocks: [
        { p: 'Prema Općoj uredbi o zaštiti podataka (GDPR) imate sljedeća prava:' },
        {
          cols: 2,
          cards: [
            ['Pravo pristupa', 'Možete zatražiti kopiju svojih podataka'],
            ['Pravo ispravka', 'Možete zatražiti ispravak netočnih podataka'],
            ['Pravo brisanja', 'Možete zatražiti brisanje svojih podataka'],
            ['Pravo prenosivosti', 'Možete zatražiti prijenos podataka'],
          ],
        },
      ],
    },
    {
      title: 'Sigurnost podataka',
      blocks: [
        { p: 'Koristimo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših podataka:' },
        {
          list: [
            'SSL enkripcija za sve komunikacije',
            'Sigurni serveri s redovitim ažuriranjima',
            'Pristup podacima imaju samo autori projekta',
            'Redovito sigurnosno kopiranje podataka',
          ],
        },
      ],
    },
    {
      title: 'Kontakt',
      blocks: [{ p: 'Za sva pitanja vezana uz privatnost podataka pišite nam na {email}.' }],
    },
  ],
};

const en: Privacy = {
  eyebrow: 'Legal',
  title: 'Privacy policy',
  lead: 'Your privacy matters to us. Here is everything about how we handle your data.',
  updatedTitle: 'Last updated',
  updated: 'This privacy policy was last updated on 11 October 2026. We reserve the right to change it at any time.',
  sections: [
    {
      title: 'General',
      blocks: [
        {
          p: 'This website (the “Website”) is a **personal, non-commercial project** of its authors (“we”, “us”). Kavo is not a registered company or sole proprietorship, does not sell products or services, and does not issue quotes or invoices. The Website serves solely as a personal portfolio.',
        },
        {
          p: 'We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use and protect your information when you use the Website.',
        },
      ],
    },
    {
      title: 'Data we collect',
      blocks: [
        { h: 'Personal data' },
        { list: ['First and last name', 'Email address', 'The content of any message you choose to send us'] },
        { h: 'Automatically collected data' },
        { list: ['IP address', 'Browser information', 'Device information', 'Website usage data'] },
      ],
    },
    {
      title: 'Cookies',
      blocks: [
        { p: 'The Website uses cookies to improve your experience. Cookies are small text files stored on your device.' },
        {
          cols: 3,
          cards: [
            ['Necessary', 'Enable the basic functions of the Website and cannot be switched off.'],
            ['Analytics', 'Help us understand how visitors use the Website (Google Analytics) – only with your consent.'],
            ['Functional', 'Enable enhanced functionality and personalisation.'],
          ],
        },
      ],
    },
    {
      title: 'How we use data',
      blocks: [
        { p: 'We use your data for the following purposes:' },
        { list: ['Replying to your messages', 'Improving our website', 'Analysing how the website is used', 'Meeting legal obligations'] },
      ],
    },
    {
      title: 'Sharing data',
      blocks: [
        { p: 'We do not sell, trade or transfer your personal data to third parties, except in the following cases:' },
        {
          list: [
            'When you give your consent',
            'To technical service providers needed to run the Website (e.g. hosting, email services)',
            'When required by law',
            'To protect our rights and safety',
          ],
        },
      ],
    },
    {
      title: 'Your rights (GDPR)',
      blocks: [
        { p: 'Under the General Data Protection Regulation (GDPR), you have the following rights:' },
        {
          cols: 2,
          cards: [
            ['Right of access', 'You can request a copy of your data'],
            ['Right to rectification', 'You can request that inaccurate data be corrected'],
            ['Right to erasure', 'You can request that your data be deleted'],
            ['Right to portability', 'You can request that your data be transferred'],
          ],
        },
      ],
    },
    {
      title: 'Data security',
      blocks: [
        { p: 'We use appropriate technical and organisational measures to protect your data:' },
        {
          list: [
            'SSL encryption for all communication',
            'Secure servers with regular updates',
            'Only the project’s authors have access to the data',
            'Regular data backups',
          ],
        },
      ],
    },
    {
      title: 'Contact',
      blocks: [{ p: 'For any questions about data privacy, write to us at {email}.' }],
    },
  ],
};

export const privacyByLocale: Record<Locale, Privacy> = { hr, en };
