
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { liveProjects, comingSoonProjects } from '../content/demos'

export default function Work() {
  const { t } = useTranslation()

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
            {t('work.headline')}
          </h1>
          <p className="text-xl text-text-secondary">
            {t('work.subheadline')}
          </p>
        </motion.div>

        {/* Live Projects - Primary Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {liveProjects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="group block bg-bg-card rounded-xl border border-border-subtle hover:border-border-medium transition-colors"
            >
              {/* Preview Frame */}
              <div className="p-3">
                <div className="rounded-lg overflow-hidden border border-border-subtle">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-bg-elevated border-b border-border-subtle">
                    <div className="w-2 h-2 rounded-full bg-border-medium" />
                    <div className="w-2 h-2 rounded-full bg-border-medium" />
                    <div className="w-2 h-2 rounded-full bg-border-medium" />
                  </div>
                  {/* Screenshot */}
                  <div className="aspect-[16/10] relative bg-bg-elevated">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4 pt-1">
                <h3 className="text-base font-semibold mb-1">{project.name}</h3>
                <p className="text-sm text-text-muted mb-3">{t(project.descKey)}</p>
                <span className="inline-flex items-center gap-1 text-sm text-text-secondary group-hover:text-accent-primary transition-colors">
                  {t('work.view_demo')}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Coming Soon - Secondary Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {comingSoonProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="bg-bg-card/50 rounded-xl border border-border-subtle"
            >
              {/* Placeholder Frame */}
              <div className="p-3">
                <div className="rounded-lg overflow-hidden border border-border-subtle">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-bg-elevated/50 border-b border-border-subtle">
                    <div className="w-2 h-2 rounded-full bg-border-subtle" />
                    <div className="w-2 h-2 rounded-full bg-border-subtle" />
                    <div className="w-2 h-2 rounded-full bg-border-subtle" />
                  </div>
                  {/* Empty Surface */}
                  <div className="aspect-[16/10] bg-bg-elevated/30 flex items-center justify-center">
                    <span className="text-xs text-text-muted/60 tracking-wide uppercase">{t('work.coming_soon')}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4 pt-1 opacity-60">
                <h3 className="text-base font-semibold mb-1">{project.name}</h3>
                <p className="text-sm text-text-muted">{t(project.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
