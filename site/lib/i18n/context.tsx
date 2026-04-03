'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import {
  translations,
  detectLang,
  AVAILABLE_LANGS,
  type Lang,
  type Translation,
} from './translations'

// ─── Context Type ─────────────────────────────────────────────────────────────

type LangContextType = {
  lang: Lang
  t: Translation
  setLang: (lang: Lang) => void
  availableLangs: typeof AVAILABLE_LANGS
}

// ─── Context ──────────────────────────────────────────────────────────────────

const LangContext = createContext<LangContextType>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
  availableLangs: AVAILABLE_LANGS,
})

// ─── Provider ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'mirai-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // On mount: read from localStorage, then fall back to browser detection
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
      if (stored && translations[stored]) {
        setLangState(stored)
        return
      }
    } catch {
      // localStorage not available (SSR, private mode)
    }
    setLangState(detectLang())
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // silently ignore
    }
  }, [])

  return (
    <LangContext.Provider
      value={{
        lang,
        t: translations[lang],
        setLang,
        availableLangs: AVAILABLE_LANGS,
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useLang(): LangContextType {
  return useContext(LangContext)
}
