'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n/context'
import { PRICING_TIERS, formatPrice, detectPricingCurrency, type PricingCurrency } from '@/content/site'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const { t } = useI18n()
  const [currency, setCurrency] = useState<PricingCurrency>('EUR')

  useEffect(() => {
    setCurrency(detectPricingCurrency())
  }, [])

  return (
    <section id="pricing" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">{t.pricing.label}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{t.pricing.headline}</h2>
          <p className="mt-4 text-lg text-white/60">{t.pricing.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.pricing.plans.map((plan, index) => {
            const tier = PRICING_TIERS[index]
            const price = formatPrice(tier.prices[currency])
            const isRecommended = tier.recommended

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  isRecommended 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                    {t.pricing.recommended}
                  </div>
                )}
                <h3 className={`text-2xl font-bold ${isRecommended ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                <p className={`mt-2 text-sm ${isRecommended ? 'text-black/60' : 'text-white/60'}`}>{plan.description}</p>
                <div className="mt-6 mb-8">
                  <span className={`text-4xl font-bold ${isRecommended ? 'text-black' : 'text-white'}`}>{price}</span>
                  <span className={`text-sm ${isRecommended ? 'text-black/60' : 'text-white/60'}`}>/{t.pricing.perMonth}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 ${isRecommended ? 'text-black' : 'text-white'}`} />
                      <span className={`text-sm ${isRecommended ? 'text-black/80' : 'text-white/80'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-medium transition-all ${
                    isRecommended
                      ? 'bg-black text-white hover:bg-black/80'
                      : 'bg-white text-black hover:bg-white/90'
                  }`}
                >
                  {t.pricing.cta}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
