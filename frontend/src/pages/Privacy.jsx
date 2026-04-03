
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Privacy() {
  const { t } = useTranslation()

  return (
    <div className="pt-24 pb-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('privacy_page.headline')}
          </h1>
          <p className="text-text-muted mb-12">
            {t('privacy_page.last_updated')}
          </p>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-text-secondary">
              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">1. Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect information you provide directly to us, such as when you fill out a contact form, 
                  request a demo, or communicate with us. This may include your name, email address, phone number, 
                  business name, and website URL.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">2. How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you about your projects, send you updates about our services, 
                  and respond to your inquiries.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">3. Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as necessary to provide our services or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">4. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">5. Cookies</h2>
                <p className="leading-relaxed">
                  Our website may use cookies to enhance your browsing experience. You can choose to disable 
                  cookies through your browser settings, though this may affect some website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">6. Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to access, correct, or delete your personal information. 
                  You may also object to or restrict certain processing of your data. 
                  Contact us to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">7. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at 
                  hello@miraisolutions.org.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}