'use client'

import { useLang } from '@/lib/i18n/context'
import MotionReveal from '@/components/motion/MotionReveal'

export default function HowItWorks() {
  const { t } = useLang()

  return (
    <section
      className="section"
      id="process"
      aria-labelledby="process-heading"
      style={{ background: 'var(--accent-tint)' }}
    >
      <div className="container">
        {/* Header */}
        <div className="process__header section-header">
          <MotionReveal>
            <span className="text-label">{t.process.label}</span>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <h2
              id="process-heading"
              className="text-h1"
              style={{ marginTop: '0.75rem' }}
            >
              {t.process.headline}
            </h2>
          </MotionReveal>
        </div>

        {/* Steps — left-to-right reveal */}
        <ol className="process__steps" role="list">
          {t.process.steps.map((step, i) => (
            <MotionReveal
              key={step.number}
              as="li"
              delay={i * 0.14}
              className="process__step"
              role="listitem"
            >
              {/* Large decorative number */}
              <div className="process__number-deco" aria-hidden="true">
                {step.number}
              </div>

              {/* Step index badge */}
              <div className="process__step-label">
                <span className="process__step-dot" aria-hidden="true" />
                <span className="process__step-index">
                  Step {step.number}
                </span>
              </div>

              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-body">{step.body}</p>
            </MotionReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
