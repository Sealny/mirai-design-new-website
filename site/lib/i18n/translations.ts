/**
 * translations.ts
 * Single source of truth for all UI strings in 6 languages.
 * Sourced from: frontend/src/locales/{en,pl,de,fr,zh,ja}.json
 *
 * Structural/non-translatable data lives in content/site.ts.
 */

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
    /** Static label above the typewriter field */
    label: string
    /** Rotating slogans, typed character-by-character */
    slogans: string[]
    /** CTA button inside the lock panel */
    cta: string
    /** Pricing bar line — use {price} as placeholder for the formatted price */
    startingAt: string
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

  proof: {
    label: string
  }

  services: {
    label: string
    headline: string
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

  footer: {
    links: Array<{ label: string; href: string }>
    legal: string
  }
}

// ─── English ──────────────────────────────────────────────────────────────────

const en: Translation = {
  lang: 'en',
  langLabel: 'EN',
  dir: 'ltr',

  nav: {
    work: 'Work',
    services: 'Services',
    about: 'About',
    getStarted: 'Get started',
  },

  hero: {
    label: 'Your website should',
    slogans: [
      'earn its keep',
      'make you look serious',
      'be there by Monday',
      'not cost you a fortune',
      'never lock you in',
      'be made by MiraiDesign.',
    ],
    cta: 'Get started',
    startingAt: 'Starting at {price} / month · Cancel anytime',
  },

  proof: {
    label: 'Trusted by',
  },

  services: {
    label: 'What you get',
    headline: 'A website that earns\nits subscription.',
    cells: [
      {
        headline: 'Delivered in days, not months.',
        body: 'Most agencies take 8–12 weeks. We ship your first version in 5–7 days so you can start converting sooner.',
      },
      {
        headline: 'Subscription. Not a project.',
        body: 'One flat monthly fee covers hosting, edits, support, and continuous improvement. No surprise invoices.',
      },
      {
        headline: 'Built to convert.',
        body: 'Every layout decision — hierarchy, whitespace, CTA placement — is made with your conversion rate in mind.',
      },
      {
        headline: 'Mobile-first by default.',
        body: 'Over 60% of B2B buyers research on mobile. Your site is built for that reality from day one.',
      },
      {
        headline: 'SEO foundation included.',
        body: 'Core Web Vitals, semantic HTML, meta structure, and sitemap — baked in, not bolted on.',
      },
      {
        headline: 'Ongoing edits. Always.',
        body: 'Need to update a service page? Change pricing? Add a case study? It\'s included. Just ask.',
      },
    ],
  },

  process: {
    label: 'How it works',
    headline: 'Simple by design.',
    steps: [
      {
        number: '01',
        title: 'Quick call',
        body: '10–15 minutes to understand your business, your audience, and what you want your website to do for you.',
      },
      {
        number: '02',
        title: 'We build',
        body: 'Demo in 24–48 hours with your brand applied. You see it before we launch it — and can request changes.',
      },
      {
        number: '03',
        title: 'We launch',
        body: 'We go live, then keep improving. Monthly edits, performance monitoring, and ongoing support — included.',
      },
    ],
  },

  portfolio: {
    label: 'Selected work',
    headline: 'Proof in the pixels.',
    viewDemo: 'View live demo',
    nextProject: 'Next project',
    yourBusiness: 'Your business here',
    descSalon: 'Clear services and booking flow',
    descAuto: 'Mobile-first portfolio showcase',
    comingSoon: 'Coming soon',
  },

  about: {
    label: 'About the studio',
    facts: [
      { label: 'Based in', value: 'Tallinn, Estonia' },
      { label: 'Clients', value: 'EU & Global' },
      { label: 'Model', value: 'WaaS subscription' },
      { label: 'Founded', value: '2023' },
    ],
    bio: [
      'Mirai Design builds fast, conversion-focused websites for B2B companies that have outgrown their current site — or never had one worth showing.',
      'Every project is planned, designed, and shipped by one person. No handoffs, no diluted vision. You work directly with the person building your site.',
      'The subscription model exists because good websites are never finished. Markets shift, offers evolve, and conversion rates can always improve. We stay engaged long after launch.',
    ],
  },

  cta: {
    headline: 'Ready to outpace\nyour competitors?',
    button: 'Start a project',
  },

  pricing: {
    label: 'Pricing',
    headline: 'Simple, transparent pricing.',
    sub: 'One flat fee. Everything included. Cancel anytime.',
    perMonth: 'mo',
    recommended: 'Recommended',
    cta: 'Get started',
    plans: [
      {
        name: 'Start',
        description: 'For businesses ready to launch a professional web presence.',
        features: ['Up to 5 pages', 'Monthly edits', 'Hosting & SSL included', 'Basic SEO setup', 'Email support'],
      },
      {
        name: 'Standard',
        description: 'Everything you need to convert visitors into clients.',
        features: ['Unlimited pages', 'Weekly edits', 'Hosting & SSL included', 'Full SEO setup', 'Performance monitoring', 'Priority email support'],
      },
      {
        name: 'Pro',
        description: 'Full-service partnership for ambitious growth.',
        features: ['Unlimited pages', 'Unlimited edits', 'Hosting & SSL included', 'Full SEO + Analytics', 'Monthly strategy call', 'CRO consulting', '48h priority support'],
      },
    ],
  },

  footer: {
    links: [
      { label: 'Work', href: '#work' },
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: 'MiraiWorks OÜ · miraidesign.studio · © 2026',
  },
}

// ─── Polish ───────────────────────────────────────────────────────────────────

const pl: Translation = {
  lang: 'pl',
  langLabel: 'PL',
  dir: 'ltr',

  nav: {
    work: 'Portfolio',
    services: 'Usługi',
    about: 'O nas',
    getStarted: 'Zacznij teraz',
  },

  hero: {
    label: 'Twoja strona powinna',
    slogans: [
      'zarabiać na siebie',
      'budować zaufanie klientów',
      'być gotowa na poniedziałek',
      'nie kosztować fortuny',
      'dać Ci pełną wolność',
      'be made by MiraiDesign.',
    ],
    cta: 'Zacznij teraz',
    startingAt: 'Od {price} miesięcznie · Anuluj kiedy chcesz',
  },

  proof: {
    label: 'Zaufali nam',
  },

  services: {
    label: 'Co otrzymujesz',
    headline: 'Strona, która zarabia\nna abonament.',
    cells: [
      {
        headline: 'Gotowe w dni, nie miesiące.',
        body: 'Demo w 24–48 godzin. Pełna strona gotowa w 5–7 dni. Zacznij konwertować klientów wcześniej.',
      },
      {
        headline: 'Subskrypcja, nie projekt.',
        body: 'Jeden miesięczny abonament obejmuje hosting, edycje i wsparcie. Zero niespodzianek na fakturze.',
      },
      {
        headline: 'Zbudowana do konwersji.',
        body: 'Każda decyzja layoutu — hierarchia, whitespace, CTA — służy Twojemu współczynnikowi konwersji.',
      },
      {
        headline: 'Mobile-first od podstaw.',
        body: 'Ponad 60% klientów B2B szuka dostawców na telefonie. Twoja strona jest na to gotowa.',
      },
      {
        headline: 'SEO w fundamencie.',
        body: 'Core Web Vitals, semantyczny HTML, struktura meta i sitemap — wbudowane, nie doklejone.',
      },
      {
        headline: 'Bieżące edycje. Zawsze.',
        body: 'Zmiana cennika? Nowe usługi? Aktualizacja zdjęć? Wystarczy poprosić — jest w abonamencie.',
      },
    ],
  },

  process: {
    label: 'Jak to działa',
    headline: 'Proste z założenia.',
    steps: [
      {
        number: '01',
        title: 'Krótka rozmowa',
        body: '10–15 minut, żeby zrozumieć Twój biznes, klientów i to, co Twoja strona ma dla Ciebie robić.',
      },
      {
        number: '02',
        title: 'Budujemy',
        body: 'Demo w 24–48 godzin z Twoim brandingiem. Widzisz je zanim cokolwiek trafi do sieci.',
      },
      {
        number: '03',
        title: 'Uruchamiamy',
        body: 'Stawiamy stronę i ciągle ją ulepszamy. Miesięczne edycje, monitoring i wsparcie — w cenie.',
      },
    ],
  },

  portfolio: {
    label: 'Wybrane realizacje',
    headline: 'Dowód w pikselach.',
    viewDemo: 'Zobacz demo na żywo',
    nextProject: 'Następny projekt',
    yourBusiness: 'Twój biznes tutaj',
    descSalon: 'Czytelna oferta i rezerwacje',
    descAuto: 'Mobile-first strona usługowa',
    comingSoon: 'Wkrótce',
  },

  about: {
    label: 'O studio',
    facts: [
      { label: 'Siedziba', value: 'Tallinn, Estonia' },
      { label: 'Klienci', value: 'UE i cały świat' },
      { label: 'Model', value: 'Subskrypcja WaaS' },
      { label: 'Założone', value: '2023' },
    ],
    bio: [
      'Mirai Design tworzy szybkie, nastawione na konwersję strony dla firm B2B, które przerosły swój obecny serwis — albo nigdy nie miały nic wartego pokazania.',
      'Każdy projekt jest planowany, projektowany i dostarczany przez jedną osobę. Żadnych przekazań, żadnej rozmytej wizji. Pracujesz bezpośrednio z osobą, która buduje Twoją stronę.',
      'Model subskrypcji istnieje, bo dobre strony nigdy nie są skończone. Rynki się zmieniają, oferty ewoluują, a współczynniki konwersji zawsze można poprawić.',
    ],
  },

  cta: {
    headline: 'Gotowy wyprzedzić\nkonkurencję?',
    button: 'Rozpocznij projekt',
  },

  pricing: {
    label: 'Cennik',
    headline: 'Prosta, przejrzysta cena.',
    sub: 'Jeden stały abonament. Wszystko w cenie. Anuluj kiedy chcesz.',
    perMonth: 'mies.',
    recommended: 'Polecany',
    cta: 'Zacznij teraz',
    plans: [
      {
        name: 'Start',
        description: 'Dla firm gotowych na profesjonalną obecność w sieci.',
        features: ['Do 5 podstron', 'Miesięczne edycje', 'Hosting i SSL w cenie', 'Podstawowe SEO', 'Wsparcie email'],
      },
      {
        name: 'Standard',
        description: 'Wszystko, czego potrzebujesz, aby konwertować odwiedzających.',
        features: ['Nieograniczone strony', 'Tygodniowe edycje', 'Hosting i SSL w cenie', 'Pełne SEO', 'Monitoring wydajności', 'Priorytetowy email'],
      },
      {
        name: 'Pro',
        description: 'Pełna obsługa dla ambitnego wzrostu.',
        features: ['Nieograniczone strony', 'Nieograniczone edycje', 'Hosting i SSL w cenie', 'SEO + Analityka', 'Miesięczna rozmowa strategiczna', 'Doradztwo CRO', 'Wsparcie priorytetowe 48h'],
      },
    ],
  },

  footer: {
    links: [
      { label: 'Portfolio', href: '#work' },
      { label: 'Usługi', href: '#services' },
      { label: 'O nas', href: '#about' },
      { label: 'Kontakt', href: '#contact' },
    ],
    legal: 'MiraiWorks OÜ · miraidesign.studio · © 2026',
  },
}

// ─── German ───────────────────────────────────────────────────────────────────

const de: Translation = {
  lang: 'de',
  langLabel: 'DE',
  dir: 'ltr',

  nav: {
    work: 'Arbeiten',
    services: 'Leistungen',
    about: 'Über uns',
    getStarted: 'Loslegen',
  },

  hero: {
    label: 'Ihre Website sollte',
    slogans: [
      'sich selbst bezahlt machen',
      'seriös wirken',
      'bis Montag fertig sein',
      'kein Vermögen kosten',
      'Sie nicht einzusperren',
      'be made by MiraiDesign.',
    ],
    cta: 'Loslegen',
    startingAt: 'Ab {price} / Monat · Jederzeit kündbar',
  },

  proof: {
    label: 'Vertraut von',
  },

  services: {
    label: 'Was Sie bekommen',
    headline: 'Eine Website, die ihr\nAbo verdient.',
    cells: [
      {
        headline: 'Fertig in Tagen, nicht Monaten.',
        body: 'Die meisten Agenturen brauchen 8–12 Wochen. Wir liefern Ihre erste Version in 5–7 Tagen.',
      },
      {
        headline: 'Abo. Kein Projekt.',
        body: 'Eine monatliche Pauschale deckt Hosting, Änderungen, Support und kontinuierliche Verbesserung ab.',
      },
      {
        headline: 'Gebaut für Conversions.',
        body: 'Jede Layout-Entscheidung — Hierarchie, Whitespace, CTA-Platzierung — dient Ihrer Conversion-Rate.',
      },
      {
        headline: 'Mobile-first als Standard.',
        body: 'Über 60% der B2B-Käufer recherchieren mobil. Ihre Website ist von Tag eins dafür gebaut.',
      },
      {
        headline: 'SEO-Fundament inklusive.',
        body: 'Core Web Vitals, semantisches HTML, Meta-Struktur und Sitemap — eingebaut, nicht nachgerüstet.',
      },
      {
        headline: 'Laufende Änderungen. Immer.',
        body: 'Preise aktualisieren? Neue Leistungen? Fallstudie hinzufügen? Ist inklusive. Einfach fragen.',
      },
    ],
  },

  process: {
    label: 'So funktioniert es',
    headline: 'Einfach von Anfang an.',
    steps: [
      {
        number: '01',
        title: 'Kurzes Gespräch',
        body: '10–15 Minuten, um Ihr Unternehmen, Ihre Zielgruppe und Ihre Website-Ziele zu verstehen.',
      },
      {
        number: '02',
        title: 'Wir bauen',
        body: 'Demo in 24–48 Stunden mit Ihrem Branding. Sie sehen es bevor wir launchen — und können Änderungen anfragen.',
      },
      {
        number: '03',
        title: 'Wir launchen',
        body: 'Wir gehen live und verbessern kontinuierlich. Monatliche Änderungen, Performance-Monitoring, Support — inklusive.',
      },
    ],
  },

  portfolio: {
    label: 'Ausgewählte Arbeiten',
    headline: 'Beweis in Pixeln.',
    viewDemo: 'Live-Demo ansehen',
    nextProject: 'Nächstes Projekt',
    yourBusiness: 'Ihr Unternehmen hier',
    descSalon: 'Klare Leistungen und Buchungen',
    descAuto: 'Mobile-first Service-Seite',
    comingSoon: 'Demnächst',
  },

  about: {
    label: 'Über das Studio',
    facts: [
      { label: 'Standort', value: 'Tallinn, Estland' },
      { label: 'Kunden', value: 'EU & Weltweit' },
      { label: 'Modell', value: 'WaaS-Abonnement' },
      { label: 'Gegründet', value: '2023' },
    ],
    bio: [
      'Mirai Design entwickelt schnelle, konversionsorientierte Websites für B2B-Unternehmen, die über ihre aktuelle Website hinausgewachsen sind — oder nie eine hatten, die es wert war gezeigt zu werden.',
      'Jedes Projekt wird von einer Person geplant, gestaltet und umgesetzt. Keine Übergaben, keine verwässerte Vision. Sie arbeiten direkt mit der Person, die Ihre Website baut.',
      'Das Abonnementmodell existiert, weil gute Websites nie fertig sind. Märkte verschieben sich, Angebote entwickeln sich, und Konversionsraten können immer verbessert werden.',
    ],
  },

  cta: {
    headline: 'Bereit, Ihre\nMitbewerber zu überholen?',
    button: 'Projekt starten',
  },

  pricing: {
    label: 'Preise',
    headline: 'Einfache, transparente Preise.',
    sub: 'Eine Pauschale. Alles inklusive. Jederzeit kündbar.',
    perMonth: 'Mo.',
    recommended: 'Empfohlen',
    cta: 'Loslegen',
    plans: [
      {
        name: 'Start',
        description: 'Für Unternehmen, die bereit für einen professionellen Webauftritt sind.',
        features: ['Bis zu 5 Seiten', 'Monatliche Änderungen', 'Hosting & SSL inklusive', 'Basis-SEO-Setup', 'E-Mail-Support'],
      },
      {
        name: 'Standard',
        description: 'Alles, was Sie brauchen, um Besucher in Kunden zu konvertieren.',
        features: ['Unbegrenzte Seiten', 'Wöchentliche Änderungen', 'Hosting & SSL inklusive', 'Vollständiges SEO-Setup', 'Performance-Monitoring', 'Priorisierter E-Mail-Support'],
      },
      {
        name: 'Pro',
        description: 'Vollservice-Partnerschaft für ambitioniertes Wachstum.',
        features: ['Unbegrenzte Seiten', 'Unbegrenzte Änderungen', 'Hosting & SSL inklusive', 'SEO + Analytics', 'Monatliches Strategiegespräch', 'CRO-Beratung', '48h Priorisierter Support'],
      },
    ],
  },

  footer: {
    links: [
      { label: 'Arbeiten', href: '#work' },
      { label: 'Leistungen', href: '#services' },
      { label: 'Über uns', href: '#about' },
      { label: 'Kontakt', href: '#contact' },
    ],
    legal: 'MiraiWorks OÜ · miraidesign.studio · © 2026',
  },
}

// ─── French ───────────────────────────────────────────────────────────────────

const fr: Translation = {
  lang: 'fr',
  langLabel: 'FR',
  dir: 'ltr',

  nav: {
    work: 'Réalisations',
    services: 'Services',
    about: 'À propos',
    getStarted: 'Commencer',
  },

  hero: {
    label: 'Votre site web devrait',
    slogans: [
      'se rentabiliser',
      'vous rendre crédible',
      'être prête lundi',
      'ne pas coûter une fortune',
      'ne jamais vous bloquer',
      'be made by MiraiDesign.',
    ],
    cta: 'Commencer',
    startingAt: 'Dès {price} / mois · Résiliez à tout moment',
  },

  proof: {
    label: 'Ils nous font confiance',
  },

  services: {
    label: 'Ce que vous obtenez',
    headline: 'Un site qui mérite\nson abonnement.',
    cells: [
      {
        headline: 'Livré en jours, pas en mois.',
        body: 'La plupart des agences prennent 8–12 semaines. Nous livrons votre première version en 5–7 jours.',
      },
      {
        headline: 'Abonnement. Pas un projet.',
        body: 'Un forfait mensuel couvre l\'hébergement, les modifications, le support et l\'amélioration continue.',
      },
      {
        headline: 'Conçu pour convertir.',
        body: 'Chaque décision de mise en page — hiérarchie, espacement, CTA — est faite pour votre taux de conversion.',
      },
      {
        headline: 'Mobile-first par défaut.',
        body: 'Plus de 60% des acheteurs B2B recherchent sur mobile. Votre site est conçu pour cette réalité.',
      },
      {
        headline: 'Fondation SEO incluse.',
        body: 'Core Web Vitals, HTML sémantique, structure meta et sitemap — intégrés dès le départ.',
      },
      {
        headline: 'Modifications continues. Toujours.',
        body: 'Mettre à jour une page? Changer les tarifs? Ajouter une étude de cas? C\'est inclus. Demandez simplement.',
      },
    ],
  },

  process: {
    label: 'Comment ça marche',
    headline: 'Simple par nature.',
    steps: [
      {
        number: '01',
        title: 'Appel rapide',
        body: '10–15 minutes pour comprendre votre entreprise, votre audience et ce que vous voulez que votre site fasse.',
      },
      {
        number: '02',
        title: 'Nous construisons',
        body: 'Démo en 24–48 heures avec votre branding. Vous la voyez avant le lancement — et pouvez demander des modifications.',
      },
      {
        number: '03',
        title: 'Nous lançons',
        body: 'Nous mettons en ligne, puis continuons à améliorer. Modifications mensuelles, monitoring, support — inclus.',
      },
    ],
  },

  portfolio: {
    label: 'Réalisations sélectionnées',
    headline: 'La preuve par les pixels.',
    viewDemo: 'Voir la démo en direct',
    nextProject: 'Prochain projet',
    yourBusiness: 'Votre entreprise ici',
    descSalon: 'Services clairs et réservations',
    descAuto: 'Site mobile-first services',
    comingSoon: 'Bientôt',
  },

  about: {
    label: 'À propos du studio',
    facts: [
      { label: 'Basé à', value: 'Tallinn, Estonie' },
      { label: 'Clients', value: 'UE & Mondial' },
      { label: 'Modèle', value: 'Abonnement WaaS' },
      { label: 'Fondé en', value: '2023' },
    ],
    bio: [
      'Mirai Design crée des sites web rapides et orientés conversion pour les entreprises B2B qui ont dépassé leur site actuel — ou qui n\'en ont jamais eu un digne d\'être montré.',
      'Chaque projet est planifié, conçu et livré par une seule personne. Pas de passation, pas de vision diluée. Vous travaillez directement avec la personne qui construit votre site.',
      'Le modèle d\'abonnement existe parce que les bons sites ne sont jamais terminés. Les marchés évoluent, les offres changent, et les taux de conversion peuvent toujours s\'améliorer.',
    ],
  },

  cta: {
    headline: 'Prêt à distancer\nvos concurrents?',
    button: 'Démarrer un projet',
  },

  pricing: {
    label: 'Tarifs',
    headline: 'Des tarifs simples et transparents.',
    sub: 'Un forfait fixe. Tout inclus. Résiliez à tout moment.',
    perMonth: 'mois',
    recommended: 'Recommandé',
    cta: 'Commencer',
    plans: [
      {
        name: 'Start',
        description: 'Pour les entreprises prêtes à lancer une présence web professionnelle.',
        features: ['Jusqu\'à 5 pages', 'Modifications mensuelles', 'Hébergement & SSL inclus', 'SEO de base', 'Support email'],
      },
      {
        name: 'Standard',
        description: 'Tout ce qu\'il faut pour convertir vos visiteurs en clients.',
        features: ['Pages illimitées', 'Modifications hebdomadaires', 'Hébergement & SSL inclus', 'SEO complet', 'Monitoring des performances', 'Email prioritaire'],
      },
      {
        name: 'Pro',
        description: 'Partenariat complet pour une croissance ambitieuse.',
        features: ['Pages illimitées', 'Modifications illimitées', 'Hébergement & SSL inclus', 'SEO + Analytics', 'Appel stratégique mensuel', 'Conseil en CRO', 'Support prioritaire 48h'],
      },
    ],
  },

  footer: {
    links: [
      { label: 'Réalisations', href: '#work' },
      { label: 'Services', href: '#services' },
      { label: 'À propos', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: 'MiraiWorks OÜ · miraidesign.studio · © 2026',
  },
}

// ─── Chinese (Simplified) ─────────────────────────────────────────────────────

const zh: Translation = {
  lang: 'zh',
  langLabel: 'ZH',
  dir: 'ltr',

  nav: {
    work: '作品',
    services: '服务',
    about: '关于',
    getStarted: '立即开始',
  },

  hero: {
    label: '您的网站应该',
    slogans: [
      '为您赚钱',
      '让您看起来专业',
      '周一上线',
      '不让您花一大笔钱',
      '永不锁定您',
      'be made by MiraiDesign.',
    ],
    cta: '立即开始',
    startingAt: '每月{price}起 · 随时取消',
  },

  proof: {
    label: '客户信任',
  },

  services: {
    label: '您将获得',
    headline: '一个值得\n订阅费用的网站。',
    cells: [
      {
        headline: '天内交付，而非数月。',
        body: '大多数机构需要8–12周。我们在5–7天内交付第一个版本，让您更早开始转化客户。',
      },
      {
        headline: '订阅制，不是项目制。',
        body: '一个固定月费涵盖托管、编辑、支持和持续改进。没有意外账单。',
      },
      {
        headline: '为转化而生。',
        body: '每个布局决策——层次结构、留白、CTA位置——都以您的转化率为核心。',
      },
      {
        headline: '默认移动优先。',
        body: '超过60%的B2B买家在手机上研究供应商。您的网站从第一天起就为此构建。',
      },
      {
        headline: 'SEO基础已包含。',
        body: 'Core Web Vitals、语义HTML、元结构和站点地图——内置，不是后期添加。',
      },
      {
        headline: '持续编辑。始终如此。',
        body: '需要更新服务页面？更改价格？添加案例研究？已包含在内。直接提出即可。',
      },
    ],
  },

  process: {
    label: '如何运作',
    headline: '设计简洁。',
    steps: [
      {
        number: '01',
        title: '简短通话',
        body: '10–15分钟了解您的业务、受众以及您希望网站为您做什么。',
      },
      {
        number: '02',
        title: '我们构建',
        body: '24–48小时内提供应用了您品牌的演示。您在上线前查看——并可以请求更改。',
      },
      {
        number: '03',
        title: '我们上线',
        body: '我们上线后持续改进。月度编辑、性能监控和持续支持——全部包含。',
      },
    ],
  },

  portfolio: {
    label: '精选作品',
    headline: '像素中的证明。',
    viewDemo: '查看实时演示',
    nextProject: '下一个项目',
    yourBusiness: '您的业务在这里',
    descSalon: '清晰的服务和预约流程',
    descAuto: '移动优先展示',
    comingSoon: '即将推出',
  },

  about: {
    label: '关于工作室',
    facts: [
      { label: '总部', value: '爱沙尼亚塔林' },
      { label: '客户', value: '欧盟及全球' },
      { label: '模式', value: 'WaaS订阅' },
      { label: '成立', value: '2023年' },
    ],
    bio: [
      'Mirai Design为那些已经超越现有网站——或者从未拥有一个值得展示的网站——的B2B企业打造快速、注重转化的网站。',
      '每个项目都由一个人规划、设计和交付。没有交接，没有稀释的愿景。您直接与构建网站的人合作。',
      '订阅模式的存在是因为好的网站永远不会完成。市场在变化，产品在演进，转化率也总有改善空间。我们在上线后长期保持参与。',
    ],
  },

  cta: {
    headline: '准备好超越\n您的竞争对手了吗？',
    button: '启动项目',
  },

  pricing: {
    label: '价格',
    headline: '简单透明的定价。',
    sub: '固定月费。全部包含。随时取消。',
    perMonth: '月',
    recommended: '推荐',
    cta: '立即开始',
    plans: [
      {
        name: 'Start',
        description: '适合准备建立专业网站形象的企业。',
        features: ['最多5个页面', '每月编辑', '托管与SSL已包含', '基础SEO', '邮件支持'],
      },
      {
        name: 'Standard',
        description: '将访客转化为客户所需的一切。',
        features: ['无限页面', '每周编辑', '托管与SSL已包含', '完整SEO', '性能监控', '优先邮件支持'],
      },
      {
        name: 'Pro',
        description: '全方位服务合作，助力雄心勃勃的增长。',
        features: ['无限页面', '无限编辑', '托管与SSL已包含', 'SEO + 数据分析', '每月战略通话', 'CRO咨询', '48小时优先支持'],
      },
    ],
  },

  footer: {
    links: [
      { label: '作品', href: '#work' },
      { label: '服务', href: '#services' },
      { label: '关于', href: '#about' },
      { label: '联系', href: '#contact' },
    ],
    legal: 'MiraiWorks OÜ · miraidesign.studio · © 2026',
  },
}

// ─── Japanese ─────────────────────────────────────────────────────────────────

const ja: Translation = {
  lang: 'ja',
  langLabel: 'JA',
  dir: 'ltr',

  nav: {
    work: '実績',
    services: 'サービス',
    about: '会社概要',
    getStarted: '始める',
  },

  hero: {
    label: 'あなたのウェブサイトは',
    slogans: [
      '元をとるべき',
      'プロらしく見せるべき',
      '月曜日に間に合うべき',
      '大金がかからないべき',
      '縛り付けないべき',
      'be made by MiraiDesign.',
    ],
    cta: '始める',
    startingAt: '月額{price}から · いつでもキャンセル可',
  },

  proof: {
    label: '信頼いただいています',
  },

  services: {
    label: '提供内容',
    headline: 'サブスクを\n正当化するサイト。',
    cells: [
      {
        headline: '数ヶ月ではなく、数日で納品。',
        body: 'ほとんどの代理店は8〜12週かかります。私たちは5〜7日で最初のバージョンを納品します。',
      },
      {
        headline: 'プロジェクトではなく、サブスク。',
        body: '月額固定料金でホスティング、編集、サポート、継続改善をカバー。予期しない請求なし。',
      },
      {
        headline: 'コンバージョンのために作られた。',
        body: 'すべてのレイアウト決定——階層、余白、CTA配置——はコンバージョン率を念頭に置いています。',
      },
      {
        headline: 'デフォルトでモバイルファースト。',
        body: 'B2B購買担当者の60%以上がモバイルで調査します。あなたのサイトはその現実に対応しています。',
      },
      {
        headline: 'SEO基盤が含まれています。',
        body: 'Core Web Vitals、セマンティックHTML、メタ構造、サイトマップ——後付けではなく、最初から組み込み。',
      },
      {
        headline: '継続的な編集。常に。',
        body: 'サービスページを更新したい？価格を変更したい？ケーススタディを追加したい？含まれています。',
      },
    ],
  },

  process: {
    label: '仕組み',
    headline: 'シンプルに設計。',
    steps: [
      {
        number: '01',
        title: '簡単な通話',
        body: '10〜15分でビジネス、ターゲット、ウェブサイトに求めることを理解します。',
      },
      {
        number: '02',
        title: '私たちが作ります',
        body: '24〜48時間以内にブランドを適用したデモ。ローンチ前に確認でき、変更もリクエストできます。',
      },
      {
        number: '03',
        title: 'ローンチします',
        body: 'ライブになった後も継続改善。月次編集、パフォーマンス監視、継続サポート——すべて含まれています。',
      },
    ],
  },

  portfolio: {
    label: '厳選した実績',
    headline: 'ピクセルに宿る証拠。',
    viewDemo: 'ライブデモを見る',
    nextProject: '次のプロジェクト',
    yourBusiness: 'あなたのビジネスをここに',
    descSalon: '明確なサービスと予約フロー',
    descAuto: 'モバイルファーストの実績',
    comingSoon: '近日公開',
  },

  about: {
    label: 'スタジオについて',
    facts: [
      { label: '拠点', value: 'エストニア・タリン' },
      { label: 'クライアント', value: 'EU・グローバル' },
      { label: 'モデル', value: 'WaaSサブスクリプション' },
      { label: '設立', value: '2023年' },
    ],
    bio: [
      'Mirai Designは、現在のサイトを超えた、または見せる価値のあるサイトを持ったことのないB2B企業のために、高速でコンバージョンに特化したウェブサイトを構築します。',
      'すべてのプロジェクトは一人の人間が計画、設計、納品します。引き継ぎなし、薄められたビジョンなし。あなたはサイトを構築している本人と直接働きます。',
      'サブスクリプションモデルが存在するのは、優れたウェブサイトが決して完成しないからです。市場は変化し、提供物は進化し、コンバージョン率は常に改善できます。',
    ],
  },

  cta: {
    headline: '競合を\n追い抜く準備は？',
    button: 'プロジェクトを始める',
  },

  pricing: {
    label: '料金',
    headline: 'シンプルで透明な料金体系。',
    sub: '月額固定。全て込み。いつでもキャンセル可。',
    perMonth: '月',
    recommended: 'おすすめ',
    cta: '始める',
    plans: [
      {
        name: 'Start',
        description: 'プロフェッショナルなウェブプレゼンスを構築したい企業のために。',
        features: ['最大5ページ', '月次編集', 'ホスティング・SSL込み', '基本SEO設定', 'メールサポート'],
      },
      {
        name: 'Standard',
        description: '訪問者を顧客に変えるために必要なすべてが揃っています。',
        features: ['無制限ページ', '週次編集', 'ホスティング・SSL込み', '完全SEO設定', 'パフォーマンス監視', '優先メールサポート'],
      },
      {
        name: 'Pro',
        description: '野心的な成長のためのフルサービスパートナーシップ。',
        features: ['無制限ページ', '無制限編集', 'ホスティング・SSL込み', 'SEO + 分析', '月次戦略ミーティング', 'CROコンサルティング', '48時間優先サポート'],
      },
    ],
  },

  footer: {
    links: [
      { label: '実績', href: '#work' },
      { label: 'サービス', href: '#services' },
      { label: '会社概要', href: '#about' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
    legal: 'MiraiWorks OÜ · miraidesign.studio · © 2026',
  },
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const translations: Record<Lang, Translation> = { en, pl, de, fr, zh, ja }

export const AVAILABLE_LANGS: { code: Lang; label: string; full: string }[] = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'pl', label: 'PL', full: 'Polski' },
  { code: 'de', label: 'DE', full: 'Deutsch' },
  { code: 'fr', label: 'FR', full: 'Français' },
  { code: 'zh', label: 'ZH', full: '中文' },
  { code: 'ja', label: 'JA', full: '日本語' },
]

/**
 * Detect language from browser navigator.language.
 * Falls back to 'en'.
 */
export function detectLang(): Lang {
  if (typeof navigator === 'undefined') return 'en'
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('pl')) return 'pl'
  if (nav.startsWith('de')) return 'de'
  if (nav.startsWith('fr')) return 'fr'
  if (nav.startsWith('zh')) return 'zh'
  if (nav.startsWith('ja')) return 'ja'
  return 'en'
}
