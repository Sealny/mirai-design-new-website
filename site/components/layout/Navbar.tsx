'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/lib/i18n/context'
import { LOGO, NAV_HREFS } from '@/content/site'
import type { Lang } from '@/lib/i18n/translations'

export default function Navbar() {
  const { t, lang, setLang, availableLangs } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    if (!langOpen) return
    const close = () => setLangOpen(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [langOpen])

  const navLinks = [
    { label: t.nav.work,     href: NAV_HREFS.work     },
    { label: t.nav.services, href: NAV_HREFS.services  },
    { label: t.nav.about,    href: NAV_HREFS.about     },
  ]

  return (
    <header
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      role="banner"
    >
      <div className="container">
        <nav className="navbar__inner" aria-label="Main navigation">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" aria-label="Mirai Design — back to top">
            {LOGO}
          </a>

          {/* Nav links — hidden on mobile */}
          <ul className="navbar__links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: lang switcher + CTA */}
          <div className="navbar__right">
            {/* Language switcher */}
            <div
              className="lang-switcher"
              onClick={(e) => {
                e.stopPropagation()
                setLangOpen((o) => !o)
              }}
              role="button"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setLangOpen((o) => !o)
              }}
            >
              <span className="lang-switcher__current">{lang.toUpperCase()}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                style={{
                  transform: langOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              >
                <path
                  d="M2 3.5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {langOpen && (
                <ul
                  className="lang-switcher__dropdown"
                  role="listbox"
                  aria-label="Available languages"
                >
                  {availableLangs.map(({ code, label, full }) => (
                    <li
                      key={code}
                      role="option"
                      aria-selected={code === lang}
                      className={`lang-switcher__option${code === lang ? ' lang-switcher__option--active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setLang(code as Lang)
                        setLangOpen(false)
                      }}
                    >
                      <span className="lang-switcher__code">{label}</span>
                      <span className="lang-switcher__full">{full}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CTA */}
            <a href={NAV_HREFS.contact} className="navbar__cta">
              {t.nav.getStarted}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
