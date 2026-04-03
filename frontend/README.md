# Mirai Design Website

Premium website for Mirai Design - a web design and development agency.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: react-i18next (6 languages: EN, PL, DE, FR, ZH, JA)
- **Routing**: React Router DOM

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Cloudflare Pages Deployment

### Settings

| Setting | Value |
|---------|-------|
| Root directory | `frontend` |
| Build command | `npm install && npm run build` |
| Output directory | `dist` |

### Environment Variables

No environment variables required for static deployment.

### SPA Routing

The `public/_redirects` file is included to handle SPA routing:
```
/* /index.html 200
```

## Project Structure

```
frontend/
├── public/
│   ├── _redirects          # SPA routing for Cloudflare
│   └── favicon.svg         # Favicon
├── src/
│   ├── components/
│   │   ├── home/           # Home page sections
│   │   ├── Header.jsx      # Navigation header
│   │   └── Footer.jsx      # Footer
│   ├── pages/              # Route pages
│   ├── locales/            # i18n translation files
│   ├── i18n.js             # i18n configuration
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

## Design System

### Colors
- Background: `#0a0a0b` (page), `#141416` (card), `#1a1a1d` (elevated)
- Text: `#ffffff` (primary), `#a1a1a6` (secondary), `#6b6b70` (muted)
- Accent: `#0066ff` (primary), `#0052cc` (hover)

### Typography
- Font: Inter (Google Fonts)
- Display: 2.5–4.5rem, weight 800
- Headings: Various sizes with weights 600-700
- Body: 1–1.125rem, weight 400

## Languages

- English (en)
- Polish (pl)
- German (de)
- French (fr)
- Chinese Simplified (zh)
- Japanese (ja)

## Pages

- `/` - Home
- `/work` - Portfolio
- `/packages` - Pricing
- `/process` - How it works
- `/about` - About us
- `/contact` - Contact form
- `/privacy` - Privacy policy
- `/terms` - Terms of service
