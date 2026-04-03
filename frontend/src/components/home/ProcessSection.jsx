
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Phone, Monitor, FileCheck, Rocket } from 'lucide-react'
import { assets } from '../../content/assets'

export default function ProcessSection() {
  const { t } = useTranslation()

  const steps = [
    {
      icon: Phone,
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      image: assets.process.call.image,
      imageAlt: assets.process.call.alt,
    },
    {
      icon: Monitor,
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      image: assets.process.demo.image,
      imageAlt: assets.process.demo.alt,
    },
    {
      icon: FileCheck,
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      image: assets.process.materials.image,
      imageAlt: assets.process.materials.alt,
    },
    {
      icon: Rocket,
      number: '04',
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      image: assets.process.launch.image,
      imageAlt: assets.process.launch.alt,
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
          <p className="text-accent-primary text-sm font-medium mb-2">
            {t('process.subtitle')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('process.headline')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border-subtle" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ willChange: 'transform, opacity' }}
                className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                  i % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Text content */}
                <div className={`mb-6 md:mb-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'}`}>
                  <div className={`inline-flex items-center gap-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-14 h-14 bg-accent-light rounded-2xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-accent-primary" />
                    </div>
                    <span className="text-4xl font-bold text-border-medium">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>

                {/* Image visual */}
                <div className={`relative ${i % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}>
                  {/* Timeline dot */}
                  <div 
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent-primary rounded-full border-4 border-bg-page z-10" 
                    style={{ left: i % 2 === 0 ? '0' : 'auto', right: i % 2 === 0 ? 'auto' : '0', transform: `translateX(${i % 2 === 0 ? '-50%' : '50%'}) translateY(-50%)` }} 
                  />
                  
                  {/* Step visual with real image */}
                  <div className="bg-bg-card rounded-xl border border-border-subtle overflow-hidden">
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        loading="lazy"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card/40 to-transparent" />
                      
                      {/* Step number badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-bg-card/90 text-accent-primary text-sm font-bold rounded-full border border-border-subtle">
                          Step {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
