'use client'

import { useLang } from '@/lib/i18n/context'
import MotionReveal from '@/components/motion/MotionReveal'

export default function About() {
  const { t } = useLang()

  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container">
        {/* Section label — sits slightly outside the grid, top */}
        <MotionReveal>
          <span className="text-label" id="about-heading">{t.about.label}</span>
        </MotionReveal>

        <div className="about__grid" style={{ marginTop: '2.5rem' }}>
          {/* Left col: key facts */}
          <MotionReveal delay={0.1}>
            <dl className="about__facts" aria-label="Studio facts">
              {t.about.facts.map((fact) => (
                <div key={fact.label} className="about__fact">
                  <dt className="about__fact-label">{fact.label}</dt>
                  <dd className="about__fact-value">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </MotionReveal>

          {/* Right col: bio paragraphs */}
          <MotionReveal delay={0.18}>
            <div className="about__bio">
              {t.about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
