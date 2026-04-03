'use client'

import { useLang } from '@/lib/i18n/context'
import { BENTO_CONFIG } from '@/content/site'
import MotionReveal from '@/components/motion/MotionReveal'

// ─── Inline icons keyed by cell index ─────────────────────────────────────────

const ICONS: React.ReactNode[] = [
  // 0 — speed
  <svg key="speed" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 3v2M10 15v2M3 10H1M19 10h-2M5.05 5.05 3.64 3.64M16.36 16.36l-1.41-1.41M5.05 14.95l-1.41 1.41M16.36 3.64l-1.41 1.41" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4"/>
  </svg>,
  // 1 — subscription
  <svg key="sub" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M2 8h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>,
  // 2 — conversion
  <svg key="conv" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // 3 — mobile
  <svg key="mob" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="6" y="2" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M10 15.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  // 4 — seo
  <svg key="seo" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>,
  // 5 — edits
  <svg key="edit" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 17h14M13.5 3.5a1.5 1.5 0 012.12 2.12L7 14.25l-3 .75.75-3L13.5 3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Services() {
  const { t } = useLang()

  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="container">
        {/* Intro */}
        <div className="services__intro section-header">
          <MotionReveal>
            <span className="text-label">{t.services.label}</span>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <h2
              id="services-heading"
              className="text-h1"
              style={{ marginTop: '0.75rem', whiteSpace: 'pre-line' }}
            >
              {t.services.headline}
            </h2>
          </MotionReveal>

          {/* Decorative section number — sits outside the grid */}
          <span className="services__section-number" aria-hidden="true">02</span>
        </div>

        {/* Bento grid */}
        <div className="bento" role="list">
          {t.services.cells.map((cell, i) => {
            const cfg = BENTO_CONFIG[i] ?? { wide: false, tall: false, accent: false }
            const cls = [
              'bento__cell',
              cfg.wide   ? 'bento__cell--wide'   : '',
              cfg.tall   ? 'bento__cell--tall'   : '',
              cfg.accent ? 'bento__cell--accent' : '',
            ].filter(Boolean).join(' ')

            return (
              <MotionReveal
                key={i}
                as="div"
                delay={i * 0.08}
                className={cls}
                role="listitem"
              >
                <span
                  className="bento__icon"
                  style={{
                    color: cfg.accent ? 'rgba(255,255,255,0.7)' : 'var(--muted)',
                    marginBottom: '0.25rem',
                    display: 'block',
                  }}
                >
                  {ICONS[i]}
                </span>
                <h3 className="bento__headline">{cell.headline}</h3>
                <p className="bento__body">{cell.body}</p>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
