'use client'

import { useI18n } from '@/lib/i18n/context'
import { PORTFOLIO_PROJECTS } from '@/content/site'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const { t } = useI18n()

  return (
    <section id="work" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">{t.portfolio.label}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{t.portfolio.headline}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.a
              key={project.client}
              href={project.url || '#'}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              {project.screenshot ? (
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.screenshot})` }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: project.placeholderBg }}>
                  <span className="text-neutral-400">{project.client}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{project.client}</h3>
                <p className="text-white/60 text-sm">{t.portfolio.viewDemo} →</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
