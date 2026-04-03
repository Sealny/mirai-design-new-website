'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/lib/i18n/context'
import { NAV_HREFS, PRICING_TIERS, formatPrice, detectPricingCurrency, type PricingCurrency } from '@/content/site'

// ─── Flip Slogan ──────────────────────────────────────────────────────────────

function FlipSlogan({ slogans }: { slogans: string[] }) {
  const [idx, setIdx] = useState(0)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    setIdx(0)
    setTick(t => t + 1)
  }, [slogans])

  useEffect(() => {
    if (idx >= slogans.length - 1) return
    const t = setTimeout(() => {
      setIdx(i => i + 1)
      setTick(t => t + 1)
    }, 3600)
    return () => clearTimeout(t)
  }, [tick, slogans.length, idx])

  return (
    <span
      key={tick}
      className="hf-word"
      aria-live="polite"
      aria-label={slogans[idx]}
    >
      {slogans[idx]}
    </span>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const { t } = useLang()
  const [currency, setCurrency] = useState<PricingCurrency>('EUR')

  useEffect(() => {
    setCurrency(detectPricingCurrency())
  }, [])

  const startPrice = formatPrice(PRICING_TIERS[0].prices[currency])
  const pricingLine = t.hero.startingAt.replace('{price}', startPrice)

  return (
    <section id="hero" aria-label="Hero" className="hero-mac">

      {/* macOS title bar */}
      <div className="hero-mac__titlebar">
        <div className="mac-dots" aria-hidden="true">
          <span className="mac-dot mac-dot--close" />
          <span className="mac-dot mac-dot--minimize" />
          <span className="mac-dot mac-dot--expand" />
        </div>
        <span className="mac-title">miraidesign.studio</span>
      </div>

      {/* CSS grid background */}
      <div
        className="absolute -z-10 inset-0 opacity-80
          bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
          bg-[size:6rem_5rem]
          [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />

      {/* Radial soft vignette at bottom */}
      <div
        className="absolute left-1/2 bottom-0
          h-[500px] w-[700px] md:w-[1100px] lg:h-[750px] lg:w-[140%]
          -translate-x-1/2 rounded-[100%]
          bg-[radial-gradient(closest-side,#f8f8f8_82%,transparent)]"
        aria-hidden="true"
      />

      {/* ── Centre content ── */}
      <div className="hero-mac__body">

        {/* Label */}
        <p
          className="animate-fade-in opacity-0 hero-label"
          style={{ animationDelay: '0ms' }}
        >
          {t.hero.label}
        </p>

        {/* Fixed-height flip slogan stage */}
        <div
          className="animate-fade-in opacity-0 hf-stage font-display font-semibold tracking-tighter leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900"
          style={{ animationDelay: '150ms' }}
        >
          <FlipSlogan slogans={t.hero.slogans} />
        </div>

        {/* Pricing line */}
        <p
          className="animate-fade-in opacity-0 text-sm text-gray-400"
          style={{ animationDelay: '300ms' }}
        >
          {pricingLine}
        </p>

        {/* Get started pill */}
        <div
          className="animate-fade-in opacity-0"
          style={{ animationDelay: '400ms' }}
        >
          <a href={NAV_HREFS.contact} className="hero-cta-pill">
            {t.hero.cta}
          </a>
        </div>

      </div>
    </section>
  )
}
