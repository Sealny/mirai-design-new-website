'use client'

import { useLang } from '@/lib/i18n/context'
import { FOOTER_LEGAL } from '@/content/site'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <ul className="footer__links" role="list">
            {t.footer.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer__legal">{FOOTER_LEGAL}</p>
        </div>
      </div>
    </footer>
  )
}
