import { useState, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
]

export default function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navLinks = useMemo(() => [
    { path: '/', label: t('nav.home') },
    { path: '/work', label: t('nav.work') },
    { path: '/packages', label: t('nav.packages') },
    { path: '/process', label: t('nav.process') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ], [t])

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    localStorage.setItem('mirai_lang_set', 'manual')
    setIsLangMenuOpen(false)
  }

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  // Force solid background when mobile menu is open OR when scrolled
  const showSolidBg = isMobileMenuOpen || isScrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg ? 'bg-bg-page border-b border-border-subtle' : 'bg-transparent'
      }`}
    >
      <nav className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
              Mirai Design.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-text-primary ${
                  location.pathname === link.path
                    ? 'text-text-primary'
                    : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-40 bg-bg-card border border-border-subtle rounded-xl overflow-hidden shadow-xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-bg-elevated ${
                          i18n.language === lang.code
                            ? 'text-accent-primary bg-accent-light'
                            : 'text-text-secondary'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://calendly.com/mateusz-wieckowski-okm6/30-minute-meeting-with-mirai-design"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent-primary text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-colors"
            >
              {t('hero.cta_demo')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border-subtle bg-bg-page"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 text-base transition-colors ${
                      location.pathname === link.path
                        ? 'text-text-primary bg-bg-elevated rounded-lg'
                        : 'text-text-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="px-4 pt-4 border-t border-border-subtle">
                  <p className="text-xs text-text-muted mb-2">Language</p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code)
                          setIsMobileMenuOpen(false)
                        }}
                        className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                          i18n.language === lang.code
                            ? 'bg-accent-primary text-white'
                            : 'bg-bg-elevated text-text-secondary'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-4 pt-4">
                  <a
                    href="https://calendly.com/mateusz-wieckowski-okm6/30-minute-meeting-with-mirai-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-5 py-3 bg-accent-primary text-white text-center text-sm font-medium rounded-full"
                  >
                    {t('hero.cta_demo')}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}