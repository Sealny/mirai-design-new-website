import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pl from './locales/pl.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';

const resources = {
  en: { translation: en },
  pl: { translation: pl },
  de: { translation: de },
  fr: { translation: fr },
  zh: { translation: zh },
  ja: { translation: ja },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;