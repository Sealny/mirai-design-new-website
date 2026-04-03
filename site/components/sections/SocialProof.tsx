'use client'

import { useLang } from '@/lib/i18n/context'
import { PROOF_CLIENTS } from '@/content/site'

export default function SocialProof() {
  const { t } = useLang()

  return (
    <div className="proof" aria-label="Clients">
      <div className="container">
        <div className="proof__inner">
          <span className="text-label proof__label">{t.proof.label}</span>
          <ul className="proof__clients" role="list">
            {PROOF_CLIENTS.map((name) => (
              <li key={name} className="proof__client">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
