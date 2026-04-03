# miraidesign.studio

Agency site for Mirai Design — a solo WaaS studio building fast, conversion-focused
websites for European B2B clients.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + custom CSS (`app/globals.css`) |
| Animation | Framer Motion |
| i18n | Custom context (`lib/i18n/`) — 6 languages |
| Deploy | Cloudflare Pages via `@cloudflare/next-on-pages` |

---

## Local dev

```bash
cd site
npm install
npm run dev        # http://localhost:3000
```

---

## Content schema

All content lives in two files. Edit these to update the site — no component changes needed.

### `content/site.ts` — structural / non-translatable

| Export | Purpose |
|---|---|
| `LOGO` | Logotype string |
| `NAV_HREFS` | Anchor hrefs for nav links |
| `PROOF_CLIENTS` | Client names on the social proof strip |
| `BENTO_CONFIG` | Layout flags per bento cell (wide / tall / accent) |
| `PORTFOLIO_PROJECTS` | Project entries (client, domain, URL, colour) |
| `FOOTER_LEGAL` | Legal line in footer |

**Adding a portfolio project:**

```ts
// content/site.ts → PORTFOLIO_PROJECTS
{
  client: 'Company Name',
  domain: 'example.com',
  year: '2025',
  url: 'https://example.com',
  placeholderBg: '#F0F4FF',   // thumbnail background colour
  isReal: true,
}
```

### `lib/i18n/translations.ts` — all UI strings (6 languages)

Each language exports a `Translation` object with these top-level keys:

```
nav       — nav link labels + CTA button
hero      — lock-screen label, slogans[], CTA
proof     — "trusted by" label
services  — label, headline, cells[{ headline, body }]
process   — label, headline, steps[{ number, title, body }]
portfolio — label, headline, viewDemo, nextProject, yourBusiness, comingSoon
about     — label, facts[{ label, value }], bio[]
cta       — headline, button
footer    — links[{ label, href }], legal
```

**To update hero slogans (typewriter):**

```ts
// lib/i18n/translations.ts → en → hero.slogans
slogans: [
  'earn its keep',
  'make you look serious',
  'be there by Monday',
  // add / reorder freely
],
```

**To add a new language:**

1. Create a new `Translation` object in `translations.ts` following the same shape
2. Add it to the `translations` record: `export const translations = { en, pl, ..., xx }`
3. Add `{ code: 'xx', label: 'XX', full: 'Language Name' }` to `AVAILABLE_LANGS`
4. Add a `if (nav.startsWith('xx')) return 'xx'` line in `detectLang()`

---

## Language detection

On first visit the browser's `navigator.language` prefix is checked:

| Prefix | Language |
|---|---|
| `pl` | Polish |
| `de` | German |
| `fr` | French |
| `zh` | Chinese (Simplified) |
| `ja` | Japanese |
| everything else | English |

The selection persists in `localStorage` under key `mirai-lang`.
Users can change language via the navbar dropdown.

---

## Cloudflare Pages deploy

### Prerequisites

```bash
npm install -g wrangler
```

### Build

```bash
cd site
npm run pages:build    # runs @cloudflare/next-on-pages → .vercel/output/static
```

### First-time project creation

```bash
npx wrangler pages project create miraidesign-studio
```

### Deploy

```bash
npm run deploy
# or manually:
npx wrangler pages deploy .vercel/output/static --project-name miraidesign-studio
```

### Edge runtime note

When deploying to Cloudflare Pages, uncomment this line in `next.config.js`:

```js
experimental: { runtime: 'edge' },
```

---

## Project structure

```
site/
├── app/
│   ├── globals.css          # All custom CSS + brand tokens
│   ├── layout.tsx           # Root layout — wraps LanguageProvider
│   └── page.tsx             # Single-page composition (9 sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav + language switcher
│   │   └── Footer.tsx       # Minimal 2-row footer
│   ├── motion/
│   │   └── MotionReveal.tsx # Reusable scroll reveal (opacity + translateY)
│   └── sections/
│       ├── Hero.tsx         # Lock-screen hero with typewriter + live clock
│       ├── SocialProof.tsx  # Client name strip
│       ├── Services.tsx     # Asymmetric bento grid
│       ├── HowItWorks.tsx   # 3-step process
│       ├── Portfolio.tsx    # Asymmetric 60/40 work grid
│       ├── About.tsx        # 40/60 studio profile
│       └── CtaBlock.tsx     # Full-width CTA
├── content/
│   └── site.ts              # Structural / non-translatable data
├── lib/
│   └── i18n/
│       ├── translations.ts  # All 6 language strings (EN/PL/DE/FR/ZH/JA)
│       └── context.tsx      # LanguageProvider + useLang() hook
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Fonts

The site uses the system SF Pro stack — zero font loading overhead:

```css
--font-display: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body:    'SF Pro Text',    -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

Renders as SF Pro on macOS / iOS, Segoe UI on Windows, and system-ui elsewhere.

---

## Adding a real portfolio screenshot

1. Add the image to `public/work/` (e.g. `public/work/attyka.webp`)
2. In `content/site.ts`, add an `image` field to the project entry
3. In `components/sections/Portfolio.tsx`, render `<Image src={project.image} ... />`
   instead of the placeholder `<div>` inside `.portfolio__thumb`

---

*MiraiWorks OÜ · miraidesign.studio*
