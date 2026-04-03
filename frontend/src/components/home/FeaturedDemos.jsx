import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight, ArrowRight } from 'lucide-react'
import { liveProjects } from '../../content/demos'

export default function FeaturedDemos() {
  const { t } = useTranslation()

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
            {t('demos.headline')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {liveProjects.map((demo, i) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="group card-base card-hover overflow-hidden"
            >
              {/* Demo Preview */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-page/60 via-bg-page/10 to-transparent" />
                
                {/* Hover overlay with link */}
                <a 
                  href={demo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/20 transition-colors flex items-center justify-center"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                </a>
              </div>

              {/* Demo Info */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {t(demo.tagsKey, { returnObjects: true })?.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-accent-light text-accent-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mb-1">{demo.name}</h3>
                
                {/* Location */}
                <div className="flex items-center gap-1 text-text-muted text-sm mb-4">
                  <MapPin className="w-3 h-3" />
                  <span>{demo.location}</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={demo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-bg-elevated border border-border-subtle rounded-full text-sm font-medium hover:bg-bg-page transition-colors text-center"
                  >
                    {t('demos.view_demo')}
                  </a>
                  <a
                    href="https://calendly.com/mateusz-wieckowski-okm6/30-minute-meeting-with-mirai-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-accent-primary text-white rounded-full text-sm font-medium hover:bg-accent-hover transition-colors text-center"
                  >
                    {t('demos.request_similar')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mt-12"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-accent-primary hover:gap-3 transition-all"
          >
            <span>{t('demos.view_all')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
