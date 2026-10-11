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
        title: 'Što nam je važno razumjeti',
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
        title: 'Što nam je važno razumjeti',
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

export const getService = (slug: string) => services.find((s) => s.slug === slug);
