'use client'

import { useLang } from '@/lib/i18n/context'
import { NAV_HREFS } from '@/content/site'
import MotionReveal from '@/components/motion/MotionReveal'

export default function CtaBlock() {
  const { t } = useLang()

  return (
    <section
      className="cta-block"
      id="contact"
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <MotionReveal>
          <h2
            id="cta-heading"
            className="cta-block__headline"
          >
            {t.cta.headline}
          </h2>
        </MotionReveal>
        <MotionReveal delay={0.14}>
          <a
            href={`mailto:hello@miraidesign.studio`}
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.9375rem 2.25rem' }}
          >
            {t.cta.button}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 7h9M7.5 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </MotionReveal>
      </div>
    </section>
  )
}
