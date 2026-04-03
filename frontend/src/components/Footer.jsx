import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative z-10">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                Mirai Design.
              </span>
            </Link>
            <p className="text-text-secondary max-w-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold mb-4">{t('footer.pages')}</h4>
            <ul className="space-y-3">
              <li><Link to="/work" className="text-text-secondary hover:text-text-primary transition-colors">{t('nav.work')}</Link></li>
              <li><Link to="/packages" className="text-text-secondary hover:text-text-primary transition-colors">{t('nav.packages')}</Link></li>
              <li><Link to="/process" className="text-text-secondary hover:text-text-primary transition-colors">{t('nav.process')}</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-text-primary transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-text-secondary hover:text-text-primary transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="text-text-secondary hover:text-text-primary transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle">
          <p className="text-text-muted text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
