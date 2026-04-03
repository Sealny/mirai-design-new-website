/**
 * site.ts — Structural / non-translatable data.
 *
 * All UI strings live in lib/i18n/translations.ts.
 * This file holds layout config, hrefs, colours, and proper-noun data
 * that does not change with language.
 */

// ─── Brand ────────────────────────────────────────────────────────────────────

export const LOGO = 'MiraiDesign.'

// ─── Navigation hrefs ─────────────────────────────────────────────────────────

export const NAV_HREFS = {
  work: '#work',
  services: '#services',
  about: '#about',
  contact: '#contact',
} as const

// ─── Social Proof — client names (proper nouns, language-invariant) ───────────

export const PROOF_CLIENTS = [
  'Attyka Tech',
  'Lumière Studio',
  'VoltEV',
  'Nordic SaaS',
  'Warwick Legal',
  'Meridian Group',
] as const

// ─── Bento grid layout config (maps 1-to-1 with translation.services.cells[]) ─

export const BENTO_CONFIG = [
  { wide: true,  tall: false, accent: false }, // 0 — speed
  { wide: false, tall: true,  accent: false }, // 1 — subscription
  { wide: false, tall: false, accent: true  }, // 2 — conversion (accent bg)
  { wide: false, tall: false, accent: false }, // 3 — mobile
  { wide: false, tall: false, accent: false }, // 4 — seo
  { wide: true,  tall: false, accent: false }, // 5 — edits
] as const

// ─── Portfolio projects ───────────────────────────────────────────────────────

export type PortfolioProject = {
  /** Display client name — proper noun, language-invariant */
  client: string
  /** External URL; null = coming-soon slot */
  url: string | null
  /** Path to static screenshot in /public/portfolio/ */
  screenshot: string | null
  /** Background colour fallback if screenshot not available */
  placeholderBg: string
  /** true = real client site; false = demo / placeholder */
  isReal: boolean
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    client: 'Attyka Tech',
    url: 'https://uslugiobliczeniowe.pl',
    screenshot: '/portfolio/attyka.png',
    placeholderBg: '#EEF2FF',
    isReal: true,
  },
  {
    client: 'Lumière Hair Salon',
    url: 'https://demo-website-hairsalon.pages.dev/',
    screenshot: '/portfolio/hairsalon.png',
    placeholderBg: '#FFF8F0',
    isReal: true,
  },
  {
    client: 'VoltEV Auto Repair',
    url: 'https://demo-website-car-garage.pages.dev/',
    screenshot: '/portfolio/voltev.png',
    placeholderBg: '#F0FFF6',
    isReal: true,
  },
  {
    client: 'Nexus SaaS',
    url: 'https://demo-website-saas1.pages.dev/',
    screenshot: '/portfolio/saas.png',
    placeholderBg: '#F0F7FF',
    isReal: true,
  },
]

// ─── Pricing ──────────────────────────────────────────────────────────────────

export type PricingCurrency = 'EUR' | 'GBP' | 'PLN' | 'CNY' | 'JPY'

export type PricingPrice = {
  /** Numeric string, e.g. "29" or "4,400" */
  amount: string
  /** Currency symbol */
  symbol: string
  /** True if symbol goes before the amount (€29), false if after (129 zł) */
  prefix: boolean
}

export type PricingTier = {
  id: 'start' | 'standard' | 'pro'
  recommended: boolean
  prices: Record<PricingCurrency, PricingPrice>
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'start',
    recommended: false,
    prices: {
      EUR: { amount: '29',   symbol: '€',  prefix: true  },
      GBP: { amount: '25',   symbol: '£',  prefix: true  },
      PLN: { amount: '129',  symbol: 'zł', prefix: false },
      CNY: { amount: '209',  symbol: '¥',  prefix: true  },
      JPY: { amount: '4,400',symbol: '¥',  prefix: true  },
    },
  },
  {
    id: 'standard',
    recommended: true,
    prices: {
      EUR: { amount: '49',    symbol: '€',  prefix: true  },
      GBP: { amount: '42',    symbol: '£',  prefix: true  },
      PLN: { amount: '209',   symbol: 'zł', prefix: false },
      CNY: { amount: '349',   symbol: '¥',  prefix: true  },
      JPY: { amount: '7,400', symbol: '¥',  prefix: true  },
    },
  },
  {
    id: 'pro',
    recommended: false,
    prices: {
      EUR: { amount: '128',    symbol: '€',  prefix: true  },
      GBP: { amount: '109',    symbol: '£',  prefix: true  },
      PLN: { amount: '549',    symbol: 'zł', prefix: false },
      CNY: { amount: '909',    symbol: '¥',  prefix: true  },
      JPY: { amount: '19,500', symbol: '¥',  prefix: true  },
    },
  },
]

export function formatPrice(price: PricingPrice): string {
  return price.prefix ? `${price.symbol}${price.amount}` : `${price.amount} ${price.symbol}`
}

export function detectPricingCurrency(): PricingCurrency {
  if (typeof navigator === 'undefined') return 'EUR'
  const nav = navigator.language.toLowerCase()
  if (nav === 'en-gb') return 'GBP'
  if (nav.startsWith('pl')) return 'PLN'
  if (nav.startsWith('zh')) return 'CNY'
  if (nav.startsWith('ja')) return 'JPY'
  return 'EUR'
}

// ─── Footer ───────────────────────────────────────────────────────────────────

/** Legal line — company name + domain, language-invariant */
export const FOOTER_LEGAL = 'MiraiWorks OÜ · miraidesign.studio · © 2026'
