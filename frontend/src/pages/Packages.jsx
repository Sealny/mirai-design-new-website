import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Clock, RefreshCw, ChevronDown, FileText, Sparkles, Server } from 'lucide-react'

// Animation variants for consistent, flicker-free animations
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Detect if user is in UK based on timezone
const isUKUser = () => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return timezone === 'Europe/London' || timezone === 'Europe/Guernsey' || 
           timezone === 'Europe/Isle_of_Man' || timezone === 'Europe/Jersey'
  } catch {
    return false
  }
}

export default function Packages() {
  const { t, i18n } = useTranslation()
  const [isUK, setIsUK] = useState(false)
  
  useEffect(() => {
    setIsUK(isUKUser())
  }, [])
  
  const [currency, setCurrency] = useState(() => {
    // If UK user, always show GBP
    if (isUKUser()) return 'GBP'
    // Default currency based on language
    const langDefaults = { pl: 'PLN', en: 'EUR', de: 'EUR', fr: 'EUR', zh: 'CNY', ja: 'JPY' }
    return langDefaults[i18n.language] || 'EUR'
  })
  
  const [openAddon, setOpenAddon] = useState(null)
  const [openTerm, setOpenTerm] = useState(null)

  // UK users only see GBP, others see all currencies including GBP
  const currencies = isUK ? ['GBP'] : ['PLN', 'EUR', 'GBP', 'CNY', 'JPY']
  const currencySymbols = { PLN: 'PLN', EUR: '€', CNY: '¥', JPY: '¥', GBP: '£' }

  const getPrice = (plan, field) => {
    const key = `price_${currency.toLowerCase()}`
    return t(`pricing.plans.${plan}.${field || key}`)
  }

  const formatPrice = (value, showSymbol = true) => {
    if (!showSymbol) return value
    const symbol = currencySymbols[currency]
    if (currency === 'PLN') return `${value} PLN`
    return `${symbol}${value}`
  }

  const plans = [
    {
      key: 'start',
      popular: false,
    },
    {
      key: 'standard',
      popular: true,
    },
    {
      key: 'pro',
      popular: false,
    },
  ]

  const addons = t('pricing.addons.items', { returnObjects: true }) || []
  const setupItems = t('pricing.included.setup', { returnObjects: true }) || []
  const monthlyItems = t('pricing.included.monthly', { returnObjects: true }) || []
  const excludedItems = t('pricing.excluded.items', { returnObjects: true }) || []
  const processSteps = t('pricing.process.steps', { returnObjects: true }) || []
  const checklistItems = t('pricing.checklist.items', { returnObjects: true }) || []
  const minorUpdateItems = t('pricing.terms.minor_updates.items', { returnObjects: true }) || []

  return (
    <div className="pt-24 pb-20">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('pricing.headline')}
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {t('pricing.subheadline')}
          </p>

          {/* Currency Switcher - Hidden for UK users */}
          {!isUK && (
            <div className="inline-flex bg-bg-elevated rounded-full p-1 border border-border-subtle">
              {currencies.map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currency === curr ? 'bg-accent-primary text-white' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          )}
          
          {/* UK users see GBP indicator */}
          {isUK && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-elevated rounded-full border border-border-subtle text-text-secondary">
              <span>Prices in</span>
              <span className="font-semibold text-text-primary">GBP (£)</span>
            </div>
          )}
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{ willChange: 'transform, opacity' }}
              className={`relative card-base p-6 ${plan.popular ? 'border-accent-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-primary text-white text-xs font-medium rounded-full">
                  {t('pricing.recommended')}
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold mb-1">{t(`pricing.plans.${plan.key}.name`)}</h3>
                <p className="text-text-secondary text-sm">{t(`pricing.plans.${plan.key}.type`)}</p>
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">
                    {formatPrice(t(`pricing.plans.${plan.key}.price_${currency.toLowerCase()}`))}
                  </span>
                  <span className="text-text-muted text-sm">{t('pricing.per_month')}</span>
                </div>
                <p className="text-sm text-text-muted mt-1">
                  {t('pricing.setup_fee')}: {formatPrice(t(`pricing.plans.${plan.key}.setup_${currency.toLowerCase()}`))}
                </p>
                {/* Pro plan breakdown note */}
                {plan.key === 'pro' && (
                  <p className="text-xs text-accent-primary mt-2">
                    {t(`pricing.plans.${plan.key}.includes_note`)}
                  </p>
                )}
              </div>

              {/* Key details */}
              <div className="flex flex-col gap-2 mb-5 text-sm">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Clock className="w-4 h-4 text-accent-primary" />
                  <span>{t(`pricing.plans.${plan.key}.term`)} {t('pricing.months')}</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <RefreshCw className="w-4 h-4 text-accent-primary" />
                  <span>{t(`pricing.plans.${plan.key}.updates`)} {t('pricing.minutes_month')}</span>
                </div>
              </div>

              <a
                href="https://calendly.com/mateusz-wieckowski-okm6/30-minute-meeting-with-mirai-design"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 text-center font-medium rounded-full transition-colors ${
                  plan.popular
                    ? 'bg-accent-primary text-white hover:bg-accent-hover'
                    : 'bg-bg-elevated border border-border-subtle hover:bg-bg-page'
                }`}
              >
                {t('pricing.get_started')}
              </a>
            </motion.div>
          ))}
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">{t('pricing.included.headline')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Setup */}
            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="font-semibold">Setup (one-time)</h3>
              </div>
              <ul className="space-y-3">
                {setupItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Monthly */}
            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="font-semibold">Monthly</h3>
              </div>
              <ul className="space-y-3">
                {monthlyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* What's NOT Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="card-base p-6 border-border-medium">
            <h3 className="font-semibold mb-4">{t('pricing.excluded.headline')}</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {excludedItems.map((item, i) => (
                <p key={i} className="text-sm text-text-muted">• {item}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Extra Edits & Hourly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-base p-6">
              <h3 className="font-semibold mb-2">{t('pricing.extra_edits.headline')}</h3>
              <p className="text-sm text-text-secondary mb-3">{t('pricing.extra_edits.description')}</p>
              <p className="text-lg font-bold text-accent-primary">{t(`pricing.extra_edits.price_${currency.toLowerCase()}`)}</p>
              <p className="text-xs text-text-muted mt-2">{t('pricing.extra_edits.note')}</p>
            </div>
            {/* Reduced prominence for hourly */}
            <div className="card-base p-6 opacity-80">
              <h3 className="font-medium text-sm mb-2">{t('pricing.hourly.headline')}</h3>
              <p className="text-xs text-text-muted mb-3">{t('pricing.hourly.description')}</p>
              <p className="text-base font-semibold text-text-secondary">{t(`pricing.hourly.price_${currency.toLowerCase()}`)}</p>
            </div>
          </div>
        </motion.div>

        {/* Add-ons Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">{t('pricing.addons.headline')}</h2>
          
          <div className="space-y-2">
            {addons.map((addon, i) => (
              <div key={i} className="card-base overflow-hidden">
                <button
                  onClick={() => setOpenAddon(openAddon === i ? null : i)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium">{addon.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-accent-primary font-semibold">
                      {formatPrice(addon[`price_${currency.toLowerCase()}`])}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${openAddon === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openAddon === i && addon.description && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ willChange: 'height, opacity' }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm text-text-secondary">{addon.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How it works + Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-base p-6">
              <h3 className="font-semibold mb-4">{t('pricing.process.headline')}</h3>
              <ol className="space-y-3">
                {processSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="w-6 h-6 bg-accent-light text-accent-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card-base p-6">
              <h3 className="font-semibold mb-4">{t('pricing.checklist.headline')}</h3>
              <ul className="space-y-3">
                {checklistItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <FileText className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Terms Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">{t('pricing.terms.headline')}</h2>
          
          <div className="space-y-2">
            {['structure_approved', 'minor_updates', 'cancellation', 'third_party', 'third_party_costs', 'template_based', 'invoicing', 'no_guarantees'].map((termKey, i) => (
              <div key={termKey} className="card-base overflow-hidden">
                <button
                  onClick={() => setOpenTerm(openTerm === i ? null : i)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium">{t(`pricing.terms.${termKey}.title`)}</span>
                  <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${openTerm === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openTerm === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ willChange: 'height, opacity' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-sm text-text-secondary">
                        {termKey === 'minor_updates' ? (
                          <ul className="space-y-2">
                            {minorUpdateItems.map((item, j) => (
                              <li key={j}>• {item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{t(`pricing.terms.${termKey}.description`)}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Setup note */}
          <p className="text-center text-sm text-text-muted mt-6">
            {t('pricing.terms.setup_note')}
          </p>

          {/* Currency Note */}
          <p className="text-center text-sm text-text-muted mt-4">
            {t('pricing.currency_note')}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
