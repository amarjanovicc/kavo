import type { Locale } from './dictionary';

export const values = [
  {
    title: 'Brend koji se pamti',
    description: 'Tražimo jednu jasnu ideju i gradimo cijeli identitet oko nje – da te ljudi prepoznaju već nakon jednog pogleda.',
    image: '/cards/prodaja.png',
  },
  {
    title: 'Web kojem se vjeruje',
    description: 'Jasna struktura, čitljiv tekst i stranica koja se brzo otvara. Posjetitelj odmah zna gdje je i što može napraviti.',
    image: '/cards/web.png',
  },
  {
    title: 'Dizajn s razlogom',
    description: 'Svaki element na ekranu ima posao. Ako ne pomaže da se nešto shvati ili klikne, izbacujemo ga.',
    image: '/GrafickiDizajn/GrafickiDizajn2.png',
  },
  {
    title: 'Iz ljubavi prema dizajnu',
    description: 'Kavo nije tvrtka – ovo radimo jer volimo. Zato smijemo isprobavati, griješiti i učiti na svakom projektu.',
    image: '/development/development5.png',
  },
];

export const team = [
  {
    label: 'Tko smo',
    text: 'Troje ljudi, jedan portfolio. Kavo nije registrirana tvrtka i ne prodaje usluge – ovdje dizajniramo i razvijamo web jer to volimo raditi.',
    name: 'Adam',
    role: 'Web developer',
    image: '/avatars/Adam.png',
  },
  {
    label: 'Što želimo',
    text: 'Učiti na pravim projektima, isprobavati nove stvari i pokazati što znamo kroz ono što napravimo.',
    name: 'Nina',
    role: 'Dizajnerica',
    image: '/avatars/Nina.png',
  },
  {
    label: 'Kako radimo',
    text: 'Ne krećemo od gotovih predložaka. Prvo tražimo ono što ideju čini drugačijom, a onda to pretvaramo u dizajn i kod.',
    name: 'Nino',
    role: 'Marketing',
    image: '/avatars/Nino.png',
  },
];

const valuesEn = [
  {
    title: 'A brand people remember',
    description: 'We look for one clear idea and build the whole identity around it – so people recognise you at a glance.',
  },
  {
    title: 'A website people trust',
    description: 'Clear structure, readable text and pages that load fast. Visitors know right away where they are and what to do next.',
  },
  {
    title: 'Design with a reason',
    description: "Every element on screen has a job. If it doesn't help someone understand or click, it goes.",
  },
  {
    title: 'Made for the love of it',
    description: "Kavo isn't a company – we do this because we love it. That's why we can experiment, make mistakes and learn on every project.",
  },
];

const teamEn = [
  {
    label: 'Who we are',
    text: "Three people, one portfolio. Kavo isn't a registered company and doesn't sell services – we design and build for the web because we love doing it.",
    role: 'Web developer',
  },
  {
    label: 'What we want',
    text: 'To learn on real projects, try new things and show what we can do through what we make.',
    role: 'Designer',
  },
  {
    label: 'How we work',
    text: "We don't start from templates. First we find what makes an idea different, then we turn it into design and code.",
    role: 'Marketing',
  },
];

export const valuesByLocale: Record<Locale, typeof values> = {
  hr: values,
  en: values.map((v, i) => ({ ...v, ...valuesEn[i] })),
};

export const teamByLocale: Record<Locale, typeof team> = {
  hr: team,
  en: team.map((m, i) => ({ ...m, ...teamEn[i] })),
};
