import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, Clock, MessageCircle, Mail, Phone } from 'lucide-react'
import { assets } from '../content/assets'

export default function Contact() {
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
    // TODO: Implement actual form submission (e.g., API call, email service)
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData)
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact_page.headline')}
          </h1>
          <p className="text-xl text-text-secondary">
            {t('contact_page.subheadline')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Supporting image */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <img
                src={assets.contact.support.image}
                alt={assets.contact.support.alt}
                loading="lazy"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="card-base p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Location</p>
                  <p className="font-medium">{t('contact_page.location')}</p>
                </div>
              </div>
            </div>

            <div className="card-base p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Response time</p>
                  <p className="font-medium">{t('contact_page.response_time')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/48536725470"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 bg-bg-card border border-border-subtle rounded-xl hover:bg-bg-elevated transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>{t('final_cta.whatsapp')}</span>
              </a>
              <a
                href="mailto:hello@miraisolutions.org"
                className="flex items-center gap-3 px-5 py-4 bg-bg-card border border-border-subtle rounded-xl hover:bg-bg-elevated transition-colors"
              >
                <Mail className="w-5 h-5 text-accent-primary" />
                <span>{t('final_cta.email')}</span>
              </a>
              <a
                href="https://calendly.com/mateusz-wieckowski-okm6/30-minute-meeting-with-mirai-design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 bg-bg-card border border-border-subtle rounded-xl hover:bg-bg-elevated transition-colors"
              >
                <Phone className="w-5 h-5 text-violet-400" />
                <span>{t('final_cta.book_call')}</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-base p-8 space-y-6">
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
                  rows={4}
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
