export type Lang = 'en' | 'pl' | 'de' | 'fr' | 'zh' | 'ja'

export type Translation = {
  lang: Lang
  langLabel: string
  dir: 'ltr' | 'rtl'

  nav: {
    work: string
    services: string
    about: string
    getStarted: string
  }

  hero: {
    label: string
    slogans: string[]
    cta: string
    startingAt: string
  }

  proof: {
    label: string
  }

  services: {
    label: string
    headline: string
    sub: string
    cells: Array<{
      headline: string
      body: string
    }>
  }

  process: {
    label: string
    headline: string
    steps: Array<{
      number: string
      title: string
      body: string
    }>
  }

  portfolio: {
    label: string
    headline: string
    viewDemo: string
    nextProject: string
    yourBusiness: string
    descSalon: string
    descAuto: string
    comingSoon: string
  }

  about: {
    label: string
    facts: Array<{ label: string; value: string }>
    bio: string[]
  }

  cta: {
    headline: string
    button: string
  }

  pricing: {
    label: string
    headline: string
    sub: string
    perMonth: string
    recommended: string
    cta: string
    plans: Array<{
      name: string
      description: string
      features: string[]
    }>
  }

  footer: {
    links: Array<{ label: string; href: string }>
    legal: string
  }
}

export const AVAILABLE_LANGS: { code: Lang; label: string; full: string }[] = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'pl', label: 'PL', full: 'Polski' },
  { code: 'de', label: 'DE', full: 'Deutsch' },
  { code: 'fr', label: 'FR', full: 'Français' },
  { code: 'zh', label: 'ZH', full: '中文' },
  { code: 'ja', label: 'JA', full: '日本語' },
]

export const DEFAULT_LANG: Lang = 'en'
