export type ServiceSection = {
  title: string;
  body: string;
  list?: string[];
  outro?: string;
  image?: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  intro: string;
  cover: string;
  sections: ServiceSection[];
};

export const services: Service[] = [
  {
    slug: 'branding',
    number: '01',
    title: 'Branding',
    short: 'Identiteti, logotipi i vizualne strategije.',
    intro:
      'Branding je više od logotipa – to je osjećaj koji ostavljate na ljude. Priča, vrijednosti i dojam koji brend gradi. Dobro postavljen branding stvara povjerenje, prepoznatljivost i lojalnost.',
    cover: '/branding/Branding1.png',
    sections: [
      {
        title: 'Prepoznatljivost i identitet',
        body: 'Jak brend znači da se proizvod ili ideja ističe u masi. Pazimo da priča i vizualni identitet budu jasni, konzistentni i lako prepoznatljivi – to gradi povjerenje i lojalnost.',
        image: '/branding/Branding1.png',
      },
      {
        title: 'Strategija i fleksibilnost',
        body: 'Svaki brend ima svoju priču i ciljeve. Zato se u radu bavimo svime, od manjih dorada i osvježavanja vizualnog identiteta do kompletne strategije i izgradnje brenda od nule – ponekad kroz brzu nadogradnju, a ponekad kroz potpuno custom rješenje.',
        image: '/branding/Branding2.png',
      },
      {
        title: 'Što nam je važno razumjeti',
        body: 'Da bi brend stvarno predstavljao ono što jest, trebamo razumjeti:',
        list: [
          'Kakav osjećaj vizualni identitet treba ostaviti',
          'Koju priču brend prenosi',
          'Kome se obraća i koji su ciljevi',
        ],
        outro: 'Što više znamo, to je brend autentičniji i snažniji.',
        image: '/branding/Branding3.png',
      },
      {
        title: 'Implementacija',
        body: 'Kada je brend spreman, pokazujemo kako samostalno održavati njegovu dosljednost – da brend može rasti i nakon što je projekt gotov.',
        image: '/branding/Branding4.png',
      },
    ],
  },
  {
    slug: 'graficki-dizajn',
    number: '02',
    title: 'Grafički dizajn',
    short: 'Tiskani materijali, promotivni vizuali i ilustracije.',
    intro:
      'Grafički dizajn pretvara ideje u vizualnu priču. Daje oblik brendu kroz letke, bannere, kataloge, digitalne i print materijale. Dobar dizajn ne samo da izgleda lijepo – on jasno prenosi poruku.',
    cover: '/GrafickiDizajn/GrafickiDizajn1.png',
    sections: [
      {
        title: 'Vizualna privlačnost',
        body: 'Dobar dizajn odmah privlači pogled i ostavlja dojam. Pazimo da svaka grafika bude moderna, čista i prilagođena publici kojoj se obraća – više pažnje, bolja komunikacija.',
        image: '/GrafickiDizajn/GrafickiDizajn1.png',
      },
      {
        title: 'Fleksibilnost i kreativnost',
        body: 'Svaki projekt je drugačiji. Zato dizajniramo letke, kataloge, bannere, objave za društvene mreže, majice, pakiranja i još puno više – nekad jednostavna i brza rješenja, a nekad potpuno unikatne dizajne od nule.',
        image: '/GrafickiDizajn/GrafickiDizajn2.png',
      },
      {
        title: 'Što nam je važno razumjeti',
        body: 'Da bi dizajn bio što učinkovitiji, trebamo znati:',
        list: [
          'Što postojeći vizualni identitet trenutno komunicira',
          'Treba li dizajn naglasiti brend, proizvod ili neku treću vrijednost',
          'Gdje će se dizajn koristiti – digital, print ili oboje',
        ],
        outro: 'Što jasniji kontekst, to bolje pogađamo pravu poruku.',
        image: '/GrafickiDizajn/GrafickiDizajn3.png',
      },
      {
        title: 'Isporuka',
        body: 'Gotove dizajne pripremamo u svim formatima koji su potrebni, od digitalnih do printa – spremno za korištenje na svim kanalima bez dodatnih prilagodbi.',
        image: '/GrafickiDizajn/GrafickiDizajn4.png',
      },
    ],
  },
  {
    slug: 'web-dizajn',
    number: '03',
    title: 'Web dizajn',
    short: 'UX/UI dizajn i prototipovi optimizirani za korisnike.',
    intro:
      'Web dizajn nije samo lijep izgled – to je način da se ispriča priča i ostavi dobar prvi dojam kod posjetitelja.',
    cover: '/WebDizajn/WebDizajn1.png',
    sections: [
      {
        title: 'Jednostavno i ugodno',
        body: 'Cilj je da stranica bude jednostavna za korištenje i ugodna za pregledavanje. Biramo boje, tipografiju i vizualne elemente koji najbolje predstavljaju sadržaj, ali uvijek razmišljamo i o tome kako će se posjetitelji kretati kroz stranicu – sve treba biti jasno, logično i lako dostupno.',
        image: '/WebDizajn/WebDizajn1.png',
      },
      {
        title: 'Responsivnost',
        body: 'Većina ljudi danas pretražuje internet mobitelom, pa stranica mora izgledati odlično na svakom ekranu. Responsive dizajn se automatski prilagođava mobitelu, tabletu i računalu – najbolje iskustvo, bez obzira odakle posjetitelj dolazi.',
        image: '/WebDizajn/WebDizajn2.png',
      },
      {
        title: 'Za ljude i tražilice',
        body: 'Dobar dizajn nije samo za ljude – voli ga i Google. Pregledna, brza i jednostavna stranica pomaže i boljem rangiranju na tražilicama. Zato pazimo da bude lijepa, funkcionalna i optimizirana.',
        image: '/WebDizajn/WebDizajn3.png',
      },
      {
        title: 'Dizajn s razlogom',
        body: 'Na kraju, web dizajn za nas nije samo stvar vizualnog dojma. Svaki dizajn ima zadatak – predstaviti ideju, projekt ili brend na najbolji način. Želimo da radi, a ne samo lijepo izgleda.',
      },
    ],
  },
  {
    slug: 'web-development',
    number: '04',
    title: 'Web development',
    short: 'Frontend i backend rješenja, CMS i e-commerce.',
    intro:
      'Nakon dizajna prelazimo na kod. Pretvaramo vizual u stranicu koja savršeno radi na svim uređajima i preglednicima.',
    cover: '/development/development1.png',
    sections: [
      {
        title: 'Brzina i sigurnost',
        body: 'Brza stranica znači zadovoljnog posjetitelja, a sigurna stranica mirnog vlasnika. Pazimo da se stranica učitava u sekundi i da je zaštićena najboljim praksama.',
        image: '/development/development1.png',
      },
      {
        title: 'Fleksibilnost',
        body: 'Svaki projekt ima različite ciljeve, pa radimo na različite načine. Ponekad je najbolje krenuti od provjerenih predložaka, a ponekad stranicu razvijamo potpuno od nule kako bismo imali punu kontrolu nad svakim detaljem.',
        image: '/development/development2.png',
      },
      {
        title: 'Testiranje',
        body: 'Nakon programiranja detaljno testiramo radi li sve ispravno na različitim uređajima i preglednicima. Posebnu pažnju posvećujemo brzini učitavanja i SEO optimizaciji.',
        image: '/development/development3.png',
      },
      {
        title: 'Pokretanje',
        body: 'Kada je stranica spremna, slijedi postavljanje na hosting i povezivanje s domenom – i upute kako samostalno upravljati sadržajem.',
        image: '/development/development4.png',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
