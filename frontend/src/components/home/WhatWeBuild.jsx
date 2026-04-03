
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FileText, Building2, Rocket } from 'lucide-react'
import { assets } from '../../content/assets'

export default function WhatWeBuild() {
  const { t } = useTranslation()

  const services = [
    {
      icon: FileText,
      title: t('what_we_build.one_page.title'),
      description: t('what_we_build.one_page.description'),
      image: assets.whatWeBuild.onePage.image,
      imageAlt: assets.whatWeBuild.onePage.alt,
    },
    {
      icon: Building2,
      title: t('what_we_build.business.title'),
      description: t('what_we_build.business.description'),
      image: assets.whatWeBuild.business.image,
      imageAlt: assets.whatWeBuild.business.alt,
    },
    {
      icon: Rocket,
      title: t('what_we_build.landing.title'),
      description: t('what_we_build.landing.description'),
      image: assets.whatWeBuild.landing.image,
      imageAlt: assets.whatWeBuild.landing.alt,
    },
  ]

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
            {t('what_we_build.headline')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="group card-base card-hover overflow-hidden"
            >
              {/* Real image thumbnail */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-bg-card/90 border border-border-subtle rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-accent-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
