import type { Locale } from './dictionary';

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
      'Logotip je samo početak. Branding je priča, vrijednosti i dojam koji ljudi ponesu sa sobom – i razlog zašto se vrate.',
    cover: '/branding/Branding1.png',
    sections: [
      {
        title: 'Prepoznatljivost i identitet',
        body: 'Jak brend izdvaja proizvod iz mase. Zato pazimo da priča i vizualni identitet govore isto, na svakom mjestu gdje ih netko vidi.',
        image: '/branding/Branding1.png',
      },
      {
        title: 'Strategija i fleksibilnost',
        body: 'Nekom brendu treba samo osvježenje, nekom sve od nule. Radimo oboje – od manjih dorada vizualnog identiteta do cijele strategije.',
        image: '/branding/Branding2.png',
      },
      {
        title: 'Što trebamo znati',
        body: 'Prije prve skice želimo znati:',
        list: [
          'Kakav dojam brend treba ostaviti',
          'Koju priču priča',
          'Kome se obraća i što želi postići',
        ],
        outro: 'Što više znamo na početku, to je rezultat uvjerljiviji.',
        image: '/branding/Branding3.png',
      },
      {
        title: 'Primjena',
        body: 'Uz gotov identitet dolaze i pravila korištenja – da brend ostane dosljedan i kad mi više nismo u priči.',
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
      'Grafički dizajn pretvara ideju u nešto što se vidi i pamti – letak, katalog, banner ili objavu. Lijep je tek kad je poruka jasna.',
    cover: '/GrafickiDizajn/GrafickiDizajn1.png',
    sections: [
      {
        title: 'Vizualna privlačnost',
        body: 'Dobra grafika uhvati pogled u prvoj sekundi. Zato je radimo čistu, suvremenu i prilagođenu ljudima kojima je namijenjena.',
        image: '/GrafickiDizajn/GrafickiDizajn1.png',
      },
      {
        title: 'Fleksibilnost i kreativnost',
        body: 'Letci, katalozi, banneri, objave za društvene mreže, majice, pakiranja – nekad treba brzo i jednostavno, a nekad nešto potpuno novo od nule.',
        image: '/GrafickiDizajn/GrafickiDizajn2.png',
      },
      {
        title: 'Što trebamo znati',
        body: 'Prije prve skice želimo znati:',
        list: [
          'Što postojeći vizualni identitet trenutno govori',
          'Što treba biti u prvom planu – brend, proizvod ili nešto treće',
          'Gdje će se dizajn koristiti – digital, print ili oboje',
        ],
        outro: 'Što je kontekst jasniji, to lakše pogodimo pravu poruku.',
        image: '/GrafickiDizajn/GrafickiDizajn3.png',
      },
      {
        title: 'Isporuka',
        body: 'Gotove dizajne pripremamo u svim potrebnim formatima, za ekran i za tisak – spremno za korištenje bez dodatnih prilagodbi.',
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
      'Posjetitelj odluči hoće li ostati u nekoliko sekundi. Web dizajn je način da te sekunde iskoristiš – jasnom pričom i dobrim prvim dojmom.',
    cover: '/WebDizajn/WebDizajn1.png',
    sections: [
      {
        title: 'Jednostavno i ugodno',
        body: 'Boje, tipografiju i slike biramo prema sadržaju. Ali prvo slažemo put kroz stranicu – posjetitelj uvijek treba znati gdje je i kamo dalje.',
        image: '/WebDizajn/WebDizajn1.png',
      },
      {
        title: 'Responsivnost',
        body: 'Većina ljudi stranicu prvi put otvori na mobitelu. Zato dizajniramo za svaki ekran – mobitel, tablet i računalo – a ne samo za onaj na kojem radimo.',
        image: '/WebDizajn/WebDizajn2.png',
      },
      {
        title: 'Za ljude i tražilice',
        body: 'Pregledna i brza stranica draga je i ljudima i Googleu. Jasna struktura i čist sadržaj pomažu da te ljudi uopće pronađu.',
        image: '/WebDizajn/WebDizajn3.png',
      },
      {
        title: 'Dizajn s razlogom',
        body: 'Svaka stranica ima zadatak – predstaviti ideju, projekt ili brend. Dizajn je uspio kad ga posjetitelj ni ne primijeti, nego samo nađe što traži.',
      },
    ],
  },
  {
    slug: 'web-development',
    number: '04',
    title: 'Web development',
    short: 'Frontend i backend rješenja, CMS i e-commerce.',
    intro:
      'Kad je dizajn gotov, prelazimo na kod. Od nacrta radimo stranicu koja jednako dobro radi na svakom uređaju i pregledniku.',
    cover: '/development/development1.png',
    sections: [
      {
        title: 'Brzina i sigurnost',
        body: 'Brza stranica znači zadovoljnog posjetitelja, a sigurna mirnog vlasnika. Pazimo na oboje od prvog retka koda.',
        image: '/development/development1.png',
      },
      {
        title: 'Fleksibilnost',
        body: 'Nekad je najbolje krenuti od provjerenog predloška, a nekad pisati sve od nule i imati kontrolu nad svakim detaljem. Biramo prema projektu.',
        image: '/development/development2.png',
      },
      {
        title: 'Testiranje',
        body: 'Prije objave provjeravamo stranicu na različitim uređajima i preglednicima, s posebnim fokusom na brzinu učitavanja i SEO.',
        image: '/development/development3.png',
      },
      {
        title: 'Pokretanje',
        body: 'Na kraju stranicu postavljamo na hosting, spajamo s domenom i pokazujemo kako samostalno mijenjati sadržaj.',
        image: '/development/development4.png',
      },
    ],
  },
];

type ServiceText = Pick<Service, 'title' | 'short' | 'intro'> & { sections: Omit<ServiceSection, 'image'>[] };

const en: Record<string, ServiceText> = {
  branding: {
    title: 'Branding',
    short: 'Identities, logos and visual strategy.',
    intro:
      'A logo is just the start. Branding is the story, the values and the impression people take with them – and the reason they come back.',
    sections: [
      {
        title: 'Recognition and identity',
        body: 'A strong brand stands out from the crowd. So we make sure the story and the visual identity say the same thing, everywhere people see them.',
      },
      {
        title: 'Strategy and flexibility',
        body: 'Some brands need a refresh, others need building from scratch. We do both – from small tweaks to a visual identity to a full strategy.',
      },
      {
        title: 'What we need to know',
        body: 'Before the first sketch, we want to know:',
        list: ['What impression the brand should leave', 'What story it tells', 'Who it speaks to and what it wants to achieve'],
        outro: 'The more we know up front, the more convincing the result.',
      },
      {
        title: 'Rollout',
        body: "A finished identity comes with usage guidelines, so the brand stays consistent long after we've stepped away.",
      },
    ],
  },
  'graficki-dizajn': {
    title: 'Graphic design',
    short: 'Print, promotional visuals and illustration.',
    intro:
      "Graphic design turns an idea into something people see and remember – a flyer, a catalogue, a banner or a post. It's only beautiful once the message is clear.",
    sections: [
      {
        title: 'Visual appeal',
        body: "Good graphics catch the eye in the first second. That's why we keep them clean, current and made for the people they're meant for.",
      },
      {
        title: 'Flexibility and creativity',
        body: 'Flyers, catalogues, banners, social posts, T-shirts, packaging – sometimes it needs to be quick and simple, sometimes something completely new from scratch.',
      },
      {
        title: 'What we need to know',
        body: 'Before the first sketch, we want to know:',
        list: [
          'What the current visual identity is saying',
          'What should come first – the brand, the product or something else',
          'Where the design will live – on screen, in print or both',
        ],
        outro: 'The clearer the context, the easier it is to land the right message.',
      },
      {
        title: 'Delivery',
        body: 'We prepare finished designs in every format you need, for screen and for print – ready to use without further tweaks.',
      },
    ],
  },
  'web-dizajn': {
    title: 'Web design',
    short: 'UX/UI design and prototypes built around users.',
    intro:
      'Visitors decide whether to stay within seconds. Web design is how you make those seconds count – with a clear story and a strong first impression.',
    sections: [
      {
        title: 'Simple and pleasant',
        body: 'We pick colours, type and imagery to suit the content. But first we map the path through the page – visitors should always know where they are and where to go next.',
      },
      {
        title: 'Responsive',
        body: "Most people first open a site on their phone. So we design for every screen – phone, tablet and desktop – not just the one we're working on.",
      },
      {
        title: 'For people and search engines',
        body: 'People and Google both like a clear, fast site. Good structure and clean content help people find you in the first place.',
      },
      {
        title: 'Design with a reason',
        body: "Every site has a job – to present an idea, a project or a brand. The design has worked when visitors don't notice it and simply find what they came for.",
      },
    ],
  },
  'web-development': {
    title: 'Web development',
    short: 'Frontend and backend, CMS and e-commerce.',
    intro:
      'Once the design is done, we move to code. We turn the mockup into a site that works just as well on every device and browser.',
    sections: [
      {
        title: 'Speed and security',
        body: 'A fast site means happy visitors; a secure one means a calm owner. We take care of both from the first line of code.',
      },
      {
        title: 'Flexibility',
        body: "Sometimes it's best to start from a proven template, sometimes to write everything from scratch and control every detail. We choose per project.",
      },
      {
        title: 'Testing',
        body: 'Before launch we check the site on different devices and browsers, with a special focus on load speed and SEO.',
      },
      {
        title: 'Launch',
        body: 'Finally, we put the site on hosting, connect the domain and show you how to update the content yourself.',
      },
    ],
  },
};

export const servicesByLocale: Record<Locale, Service[]> = {
  hr: services,
  en: services.map((s) => ({
    ...s,
    ...en[s.slug],
    sections: s.sections.map((section, i) => ({ ...section, ...en[s.slug].sections[i] })),
  })),
};

export const getService = (slug: string) => services.find((s) => s.slug === slug);
