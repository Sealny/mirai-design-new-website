'use client'

import { useI18n } from '@/lib/i18n/context'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            {t.footer.links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">{t.footer.legal}</p>
        </div>
      </div>
    </footer>
  )
}
