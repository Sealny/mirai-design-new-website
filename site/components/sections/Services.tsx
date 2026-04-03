'use client'

import { useI18n } from '@/lib/i18n/context'
import { motion } from 'framer-motion'

export default function Services() {
  const { t } = useI18n()

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">{t.services.label}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 whitespace-pre-line">{t.services.headline}</h2>
          <p className="mt-4 text-lg text-gray-600">{t.services.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.cells.map((cell, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{cell.headline}</h3>
              <p className="text-gray-600 leading-relaxed">{cell.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
