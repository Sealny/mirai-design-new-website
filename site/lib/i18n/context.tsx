'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { Lang, Translation, DEFAULT_LANG, AVAILABLE_LANGS } from '@/types/i18n'
import { translations } from '@/content/translations'

interface I18nContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
  availableLangs: typeof AVAILABLE_LANGS
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ 
  children, 
  initialLang = DEFAULT_LANG 
}: { 
  children: ReactNode
  initialLang?: Lang 
}) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    document.documentElement.lang = newLang
  }, [])

  const t = translations[lang] || translations[DEFAULT_LANG]

  return (
    <I18nContext.Provider value={{ lang, setLang, t, availableLangs: AVAILABLE_LANGS }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
