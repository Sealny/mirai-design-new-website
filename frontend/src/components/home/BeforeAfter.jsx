
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { assets } from '../../content/assets'

export default function BeforeAfter() {
  const { t } = useTranslation()
  const outcomes = t('before_after.outcomes', { returnObjects: true })

  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('before_after.headline')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="relative"
          >
            <div className="bg-bg-elevated rounded-2xl border border-border-subtle overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b border-border-subtle">
                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{t('before_after.before')}</h3>
                  <p className="text-sm text-text-muted">{t('before_after.before_desc')}</p>
                </div>
              </div>
              
              {/* Before visual */}
              <div className="aspect-[16/9] relative overflow-hidden">
                <video
                  src="https://customer-assets.emergentagent.com/job_mirai-design/artifacts/4okjf36b_videobefore.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-70 grayscale"
                />
                {/* Overlay to suggest "outdated" */}
                <div className="absolute inset-0 bg-red-500/5" />
                
                {/* Before label */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-red-500/20 text-red-300 text-xs font-medium rounded-full border border-red-500/30">
                    {t('before_after.before')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="relative"
          >
            <div className="bg-bg-elevated rounded-2xl border border-accent-primary/30 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b border-border-subtle">
                <div className="w-10 h-10 bg-accent-light rounded-xl flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{t('before_after.after')}</h3>
                  <p className="text-sm text-text-muted">{t('before_after.after_desc')}</p>
                </div>
              </div>
              
              {/* After visual */}
              <div className="aspect-[16/9] relative overflow-hidden">
                <video
                  src="https://customer-assets.emergentagent.com/job_mirai-design/artifacts/sjmnsppa_videoafter.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Subtle accent overlay */}
                <div className="absolute inset-0 bg-accent-primary/5" />
                
                {/* After label */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-accent-primary/20 text-accent-primary text-xs font-medium rounded-full border border-accent-primary/30">
                    {t('before_after.after')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="flex flex-wrap justify-center gap-4"
        >
          {outcomes.map((outcome, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-bg-elevated border border-border-subtle rounded-full"
            >
              <Check className="w-4 h-4 text-accent-primary" />
              <span className="text-sm">{outcome}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
