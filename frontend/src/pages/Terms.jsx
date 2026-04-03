
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Terms() {
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
            {t('terms_page.headline')}
          </h1>
          <p className="text-text-muted mb-12">
            {t('terms_page.last_updated')}
          </p>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-text-secondary">
              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">1. Services</h2>
                <p className="leading-relaxed">
                  Mirai Design provides web design and development services. Our services include 
                  custom website design, development, hosting assistance, and ongoing maintenance 
                  as agreed upon in individual project proposals.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">2. Demo-First Approach</h2>
                <p className="leading-relaxed">
                  We provide working demos before any payment is required. If you decide not to proceed 
                  after viewing the demo, you are under no obligation to pay. Once you approve the demo 
                  and request to proceed, standard payment terms apply.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">3. Ownership</h2>
                <p className="leading-relaxed">
                  Upon full payment, you own all rights to the website code, design, and content. 
                  You are free to modify, transfer, or host the website as you see fit. 
                  We retain the right to display the work in our portfolio unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">4. Payment Terms</h2>
                <p className="leading-relaxed">
                  Payment terms are specified in individual project proposals. Generally, we require 
                  50% upfront after demo approval and 50% upon project completion. 
                  All prices are exclusive of VAT unless stated otherwise.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">5. Revisions</h2>
                <p className="leading-relaxed">
                  Each package includes a specified number of revision rounds as outlined in the proposal. 
                  Additional revisions beyond the included rounds may incur extra charges.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">6. Timeline</h2>
                <p className="leading-relaxed">
                  Estimated timelines are provided in project proposals. Actual delivery times depend on 
                  prompt feedback and content provision from the client. Delays in receiving materials 
                  may extend the project timeline.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">7. Maintenance</h2>
                <p className="leading-relaxed">
                  Optional monthly maintenance packages are available. These cover regular updates, 
                  security patches, and minor content changes. Details are specified in maintenance agreements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">8. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  Mirai Design is not liable for any indirect, incidental, or consequential damages 
                  arising from the use of our services. Our total liability shall not exceed the 
                  amount paid for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">9. Contact</h2>
                <p className="leading-relaxed">
                  For questions about these terms, please contact us at hello@miraisolutions.org.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}