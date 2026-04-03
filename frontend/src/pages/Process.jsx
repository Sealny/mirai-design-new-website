
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link2, Code, MessageSquare, Rocket, Check, FileText, Image, Palette, Globe, Server, Shield } from 'lucide-react'

export default function Process() {
  const { t } = useTranslation()

  const steps = [
    { icon: Link2, number: '01', title: t('process.step1.title'), description: t('process.step1.description') },
    { icon: Code, number: '02', title: t('process.step2.title'), description: t('process.step2.description') },
    { icon: MessageSquare, number: '03', title: t('process.step3.title'), description: t('process.step3.description') },
    { icon: Rocket, number: '04', title: t('process.step4.title'), description: t('process.step4.description') },
  ]

  const clientInputs = [
    { icon: FileText, text: 'Text content and copy' },
    { icon: Image, text: 'Photos and images' },
    { icon: Palette, text: 'Logo and brand colors' },
    { icon: Globe, text: 'Current site or inspiration links' },
  ]

  const launchChecklist = [
    { icon: Server, text: 'Domain connected' },
    { icon: Globe, text: 'SSL certificate active' },
    { icon: Check, text: 'All pages tested' },
    { icon: Shield, text: 'Security configured' },
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
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('process_page.headline')}
          </h1>
          <p className="text-xl text-text-secondary">
            {t('process_page.subheadline')}
          </p>
        </motion.div>

        {/* Demo-first Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto text-center bg-bg-card rounded-2xl border border-border-subtle p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">{t('process_page.approach_headline')}</h2>
            <p className="text-lg text-text-secondary">{t('process_page.approach_desc')}</p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="card-base p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <span className="text-3xl font-bold text-border-medium">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Checklists */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="card-base p-8"
          >
            <h3 className="text-xl font-semibold mb-6">{t('process_page.client_inputs')}</h3>
            <ul className="space-y-4">
              {clientInputs.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-bg-elevated rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-text-secondary" />
                  </div>
                  <span className="text-text-secondary">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="card-base p-8"
          >
            <h3 className="text-xl font-semibold mb-6">{t('process_page.launch_checklist')}</h3>
            <ul className="space-y-4">
              {launchChecklist.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-text-secondary">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}