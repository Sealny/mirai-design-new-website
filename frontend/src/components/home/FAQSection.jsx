import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)

  // Define FAQ keys - only render items that have valid translations
  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']
  
  // Filter to only include FAQs with valid question and answer translations
  // This prevents raw keys like "faq.q8" from ever appearing
  const faqs = faqKeys
    .map(key => ({
      q: t(`faq.${key}`),
      a: t(`faq.a${key.slice(1)}`),
      key,
    }))
    .filter(faq => {
      // Check if translation exists (not returning the key itself)
      const isValidQuestion = faq.q && !faq.q.startsWith('faq.')
      const isValidAnswer = faq.a && !faq.a.startsWith('faq.')
      return isValidQuestion && isValidAnswer
    })

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
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('faq.headline')}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="border-b border-border-subtle"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium pr-8">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ willChange: 'height, opacity' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
