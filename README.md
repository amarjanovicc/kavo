# Kavo Studio

Web stranica studija [kavo.studio](https://kavo.studio) – web design, web development, graphic design i branding.

Napravljena u Next.js 15 (App Router), React 19, Tailwind CSS 4, Framer Motion i Lenis (smooth scroll), a hostana je na Vercelu.

## Struktura projekta

```text
kavo/
└── client/                     # Next.js app (Root Directory na Vercelu)
    ├── public/                 # slike, ilustracije, logo, robots.txt
    └── src/
        ├── app/                # pages, metadata, sitemap, RSS, OG slika
        │   ├── [service]/      # jedna ruta za sve usluge (branding, web-dizajn...)
        │   ├── contact/        # kontakt stranica
        │   ├── privacy-policy/ # pravila privatnosti
        │   └── api/contact/    # SMTP endpoint (trenutno se ne koristi, vidi niže)
        ├── content/            # sav tekstualni sadržaj: usluge, projekti, tim, linkovi
        ├── components/
        │   ├── sections/       # sekcije početne stranice (Hero, Services, Projects...)
        │   ├── layout/         # Navbar, MobileMenu, Footer
        │   ├── motion/         # zajedničke animacije (SplitText, Reveal, Marquee...)
        │   ├── ui/             # Button, Cursor, Preloader, CookieConsent...
        │   ├── service/        # predložak stranice usluge
        │   ├── contact/        # kontakt forma
        │   └── providers/      # Lenis, MotionConfig, intro stanje
        └── lib/                # motion tokeni, schema.org, helperi
```

### Sadržaj

Tekstovi se ne mijenjaju u komponentama nego u `src/content/`:

- **Nova usluga:** dodaj objekt u `content/services.ts` – stranica, navigacija, footer, sitemap i RSS se generiraju automatski.
- **Novi projekt:** dodaj objekt u `content/projects.ts` (s `width`/`height` slike). Grid sam raspoređuje projekte u dva stupca; `wide: true` stavlja projekt preko cijele širine.

### Dizajn i animacije

- **Design tokens** (boje, fontovi, fluid typography, easing) su u `app/globals.css` pod `@theme`. Klase: `text-mega`, `text-giant`, `text-huge`, `text-big`, `text-lead`, `display`, `eyebrow`, `shell`.
- **Fontovi** se učitavaju preko `next/font`: Bricolage Grotesque (naslovi), Geist (tekst), Geist Mono (labele).
- **Animacije** koriste zajedničke krivulje i trajanja iz `lib/motion.ts` i komponente iz `components/motion/`. Poštuje se `prefers-reduced-motion`.
- **Custom cursor:** element s atributom `data-cursor="Tekst"` pretvara kursor u žutu oznaku s tim tekstom.

## Development

Potreban je Node.js 20 ili noviji.

```bash
cd client
npm install
npm run dev                  # http://localhost:3000
```

Ostale skripte:

| Naredba         | Opis                                  |
| --------------- | ------------------------------------- |
| `npm run build` | production build                      |
| `npm run start` | pokreće production build              |
| `npm run lint`  | ESLint provjera                       |

## Environment variables

Contact forma šalje poruke preko **Formspree** servisa (endpoint je u `components/contact/ContactView.tsx`), pa za nju environment variables nisu potrebne.

Varijable ispod treba samo `/api/contact` route (SMTP preko nodemailera) koji trenutno ništa ne poziva. Ako se forma prebaci na njega, kopiraj `client/.env.example` u `client/.env.local` i popuni ga.

| Varijabla              | Primjer               | Opis                                        |
| ---------------------- | --------------------- | ------------------------------------------- |
| `EMAIL_HOST`           | `smtp.zoho.eu`        | SMTP server                                 |
| `EMAIL_PORT`           | `465`                 | SMTP port                                   |
| `EMAIL_SECURE`         | `true`                | `true` za port 465, `false` za 587          |
| `EMAIL_USER`           | `info@kavo.studio`    | SMTP korisnik, ujedno i pošiljatelj         |
| `EMAIL_PASS`           |                       | SMTP lozinka (app password)                 |
| `EMAIL_TO`             | `info@kavo.studio`    | adresa na koju stižu upiti                  |
| `NEXT_PUBLIC_SITE_URL` | `https://kavo.studio` | nije obavezno, koristi se u RSS feedu       |

Lokalno se upisuju u `client/.env.local` (ne commitati), a na Vercelu u **Settings → Environment Variables**.

## Deploy (Vercel)

Svaki push na `master` automatski pokreće deploy.

Postavke projekta na Vercelu:

- **Root Directory:** `client` – obavezno, jer app nije u rootu repozitorija
- **Framework Preset:** Next.js
- **Build / Output / Install Command:** default, bez overridea
- **Environment Variables:** nisu potrebne dok forma koristi Formspree

### Napomene

- Vercel blokira deploy ako je verzija Next.js-a ranjiva („Vulnerable version of Next.js detected”). Rješenje je upgrade na najnoviji patch iste verzije:

  ```bash
  npm install next@15.5 react@19.1 react-dom@19.1 eslint-config-next@15.5
  ```

- U `dependencies` ne dodavati CLI alate (npr. `vercel`) – instaliraju se pri svakom buildu i mogu ga srušiti.
