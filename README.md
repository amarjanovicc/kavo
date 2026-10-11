# Kavo Studio

Web stranica studija [kavo.studio](https://kavo.studio) – web design, web development, graphic design i branding.

Napravljena u Next.js 15 (App Router), React 19 i Tailwind CSS 4, a hostana je na Vercelu.

## Struktura projekta

```text
kavo/
└── client/                 # Next.js app (Root Directory na Vercelu)
    ├── public/             # slike, logo, robots.txt
    └── src/
        ├── app/            # pages i API routes
        │   ├── api/contact/    # POST endpoint za contact formu (nodemailer)
        │   ├── feed.xml/       # RSS feed
        │   ├── sitemap.ts      # sitemap.xml
        │   └── <usluga>/       # branding, web-dizajn, web-development, graficki-dizajn...
        ├── components/     # sekcije stranice, Navbar, Footer, Hero
        ├── context/        # AnimationContext
        └── lib/            # analytics, schema.org podaci
```

## Development

Potreban je Node.js 20 ili noviji.

```bash
cd client
npm install
cp .env.example .env.local   # zatim upiši SMTP podatke
npm run dev                  # http://localhost:3000
```

Ostale skripte:

| Naredba         | Opis                                  |
| --------------- | ------------------------------------- |
| `npm run build` | production build                      |
| `npm run start` | pokreće production build              |
| `npm run lint`  | ESLint provjera                       |

## Environment variables

Contact forma (`/api/contact`) šalje mail preko SMTP-a (Zoho). Stranica radi i bez ovih varijabli, ali forma tada vraća grešku.

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
- **Environment Variables:** sve iz tablice iznad

### Napomene

- Vercel blokira deploy ako je verzija Next.js-a ranjiva („Vulnerable version of Next.js detected”). Rješenje je upgrade na najnoviji patch iste verzije:

  ```bash
  npm install next@15.5 react@19.1 react-dom@19.1 eslint-config-next@15.5
  ```

- U `dependencies` ne dodavati CLI alate (npr. `vercel`) – instaliraju se pri svakom buildu i mogu ga srušiti.
