'use client'

import Image from 'next/image'
import { useLang } from '@/lib/i18n/context'
import { PORTFOLIO_PROJECTS } from '@/content/site'
import MotionReveal from '@/components/motion/MotionReveal'

function ArrowUpRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.5 9.5l7-7M3 2.5h6.5V9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Portfolio() {
  const { t } = useLang()

  return (
    <section className="section" id="work" aria-labelledby="portfolio-heading">
      <div className="container">
        {/* Header */}
        <div className="portfolio__header section-header">
          <MotionReveal>
            <span className="text-label">{t.portfolio.label}</span>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <h2
              id="portfolio-heading"
              className="text-h1"
              style={{ marginTop: '0.75rem' }}
            >
              {t.portfolio.headline}
            </h2>
          </MotionReveal>
        </div>

        {/* Grid */}
        <div className="portfolio__grid" role="list">
          {PORTFOLIO_PROJECTS.map((project, i) => (
            <MotionReveal key={i} delay={i * 0.1} role="listitem">
              <a
                href={project.url ?? '#'}
                target={project.url ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="portfolio__card"
                aria-label={project.client}
              >
                {/* Screenshot thumbnail */}
                <div className="portfolio__thumb" style={{ backgroundColor: project.placeholderBg }}>
                  {project.screenshot ? (
                    <Image
                      src={project.screenshot}
                      alt={`${project.client} website screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="portfolio__screenshot"
                      unoptimized
                    />
                  ) : (
                    <div className="portfolio__thumb-inner">
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--border)',
                        }}
                      >
                        {t.portfolio.comingSoon}
                      </span>
                    </div>
                  )}
                  {/* Hover overlay with client name + link label */}
                  <div className="portfolio__overlay" aria-hidden="true">
                    <div className="portfolio__overlay-inner">
                      <span className="portfolio__overlay-client">{project.client}</span>
                      <span className="portfolio__view-label">
                        {t.portfolio.viewDemo} <ArrowUpRight />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
