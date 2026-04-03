'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/lib/i18n/context'
import { NAV_HREFS, PRICING_TIERS, formatPrice, detectPricingCurrency, type PricingCurrency } from '@/content/site'

export default function Pricing() {
  const { t } = useLang()
  const [currency, setCurrency] = useState<PricingCurrency>('EUR')

  useEffect(() => {
    setCurrency(detectPricingCurrency())
  }, [])

  return (
    <section id="pricing" className="pricing" aria-label="Pricing">
      <div className="container">
        <div className="pricing__intro">
          <p className="pricing__label">{t.pricing.label}</p>
          <h2 className="pricing__headline">{t.pricing.headline}</h2>
          <p className="pricing__sub">{t.pricing.sub}</p>
        </div>

        <div className="pricing__grid">
          {PRICING_TIERS.map((tier, i) => {
            const plan = t.pricing.plans[i]
            const price = formatPrice(tier.prices[currency])

            return (
              <div
                key={tier.id}
                className={`pricing__card${tier.recommended ? ' pricing__card--recommended' : ''}`}
              >
                {tier.recommended && (
                  <span className="pricing__badge">{t.pricing.recommended}</span>
                )}

                <div>
                  <h3 className="pricing__name">{plan.name}</h3>
                  <div className="pricing__price-row">
                    <span className="pricing__amount">{price}</span>
                    <span className="pricing__period">/ {t.pricing.perMonth}</span>
                  </div>
                  <p className="pricing__desc">{plan.description}</p>
                </div>

                <ul className="pricing__features">
                  {plan.features.map((feature) => (
                    <li key={feature} className="pricing__feature">
                      <svg
                        className="pricing__feature-check"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href={NAV_HREFS.contact} className="pricing__cta">
                  {t.pricing.cta}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
