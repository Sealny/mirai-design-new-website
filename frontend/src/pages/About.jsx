
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Eye, Zap, Shield, Sparkles, Gauge, Workflow } from 'lucide-react'
import { assets } from '../content/assets'

export default function About() {
  const { t } = useTranslation()

  const values = [
    { icon: Eye, title: t('about_page.clarity'), description: t('about_page.clarity_desc') },
    { icon: Zap, title: t('about_page.speed'), description: t('about_page.speed_desc') },
    { icon: Shield, title: t('about_page.reliability'), description: t('about_page.reliability_desc') },
  ]

  const differentiators = [
    { icon: Sparkles, title: t('about_page.demo_first'), description: t('about_page.demo_first_desc') },
    { icon: Gauge, title: t('about_page.performance'), description: t('about_page.performance_desc') },
    { icon: Workflow, title: t('about_page.systems'), description: t('about_page.systems_desc') },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-20"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about_page.headline')}
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {t('about_page.intro')}
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-12 text-center">
            {t('about_page.values_headline')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ willChange: 'transform, opacity' }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supporting Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={assets.about.workspace.image}
                alt={assets.about.workspace.alt}
                loading="lazy"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={assets.about.collaboration.image}
                alt={assets.about.collaboration.alt}
                loading="lazy"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* What makes us different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <h2 className="text-2xl font-bold mb-12 text-center">
            {t('about_page.different_headline')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-accent-light rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-accent-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
