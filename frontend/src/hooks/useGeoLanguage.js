import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const COUNTRY_LANGUAGE_MAP = {
  PL: 'pl',
  DE: 'de',
  AT: 'de',
  CH: 'de',
  FR: 'fr',
  CN: 'zh',
  TW: 'zh',
  HK: 'zh',
  JP: 'ja',
}

const STORAGE_KEY = 'mirai_lang_set'

export default function useGeoLanguage() {
  const { i18n } = useTranslation()

  useEffect(() => {
    // Skip if language was already set by user or geo-detection
    if (localStorage.getItem(STORAGE_KEY)) return

    const detectLanguage = async () => {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 3000)
        const res = await fetch('https://ipapi.co/json/', { signal: controller.signal })
        clearTimeout(timeoutId)
        if (!res.ok) throw new Error('API failed')
        
        const data = await res.json()
        const countryCode = data.country_code
        const detectedLang = COUNTRY_LANGUAGE_MAP[countryCode] || 'en'
        
        i18n.changeLanguage(detectedLang)
        localStorage.setItem(STORAGE_KEY, 'geo')
      } catch {
        // Fallback to English on error
        localStorage.setItem(STORAGE_KEY, 'fallback')
      }
    }

    detectLanguage()
  }, [i18n])
}
