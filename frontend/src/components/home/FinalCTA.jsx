import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone } from 'lucide-react'

export default function FinalCTA() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    links: '',
    goal: '',
    contact: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    // TODO: Implement actual form submission (e.g., API call, email service)
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData)
  }

  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            {t('final_cta.headline')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('final_cta.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded-xl focus:border-accent-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('final_cta.business')}</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded-xl focus:border-accent-primary focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('final_cta.links')}</label>
              <input
                type="text"
                name="links"
                value={formData.links}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded-xl focus:border-accent-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('final_cta.goal')}</label>
              <textarea
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded-xl focus:border-accent-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('final_cta.contact')}</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded-xl focus:border-accent-primary focus:outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              {t('final_cta.submit')}
            </button>
          </form>

          {/* Alternative contact methods */}
          <div className="mt-8 pt-8 border-t border-border-subtle">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/48536725470"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-bg-elevated border border-border-subtle rounded-full hover:bg-bg-page transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>{t('final_cta.whatsapp')}</span>
              </a>
              <a
                href="mailto:hello@miraisolutions.org"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-bg-elevated border border-border-subtle rounded-full hover:bg-bg-page transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-accent-primary" />
                <span>{t('final_cta.email')}</span>
              </a>
              <a
                href="https://calendly.com/mateusz-wieckowski-okm6/30-minute-meeting-with-mirai-design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-bg-elevated border border-border-subtle rounded-full hover:bg-bg-page transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-violet-400" />
                <span>{t('final_cta.book_call')}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}