
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Zap, Smartphone, Search, Calendar, RefreshCw, Headphones, Clock, Shield, Users, CheckCircle } from 'lucide-react'

export default function TrustSection() {
  const { t } = useTranslation()

  const trustChips = [
    { icon: Zap, text: t('trust.fast_turnaround') },
    { icon: Smartphone, text: t('trust.mobile_first') },
    { icon: Search, text: t('trust.seo_ready') },
    { icon: Calendar, text: t('trust.booking_focused') },
    { icon: RefreshCw, text: t('trust.easy_updates') },
    { icon: Headphones, text: t('trust.launch_support') },
  ]

  const perks = [
    { icon: Clock, text: t('trust.perks.demo_first') },
    { icon: Shield, text: t('trust.perks.no_upfront') },
    { icon: CheckCircle, text: t('trust.perks.subscription_model') },
    { icon: Users, text: t('trust.perks.global_clients') },
  ]

  return (
    <section className="section-padding">
      <div className="container-main">
        {/* Phone mockups image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <img
            src="https://customer-assets.emergentagent.com/job_mirai-design/artifacts/0i38wcxw_phones.png"
            alt="Mobile-optimized website designs"
            className="max-w-xs md:max-w-md w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto px-2">
            {t('trust.headline')}
          </p>
        </motion.div>

        {/* Trust Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {trustChips.map((chip, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-bg-elevated border border-border-subtle rounded-full"
            >
              <chip.icon className="w-4 h-4 text-accent-primary" />
              <span className="text-sm font-medium">{chip.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Perks Row (replacing tools) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {perks.map((perk, i) => (
            <div
              key={i}
              className="text-center"
            >
              <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mx-auto mb-3">
                <perk.icon className="w-6 h-6 text-accent-primary" />
              </div>
              <span className="text-sm font-medium text-text-secondary">{perk.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
