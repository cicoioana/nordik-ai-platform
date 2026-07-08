import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './locales/en.json'
import roTranslations from './locales/ro.json'
import daTranslations from './locales/da.json'
import deTranslations from './locales/de.json'
import frTranslations from './locales/fr.json'
import esTranslations from './locales/es.json'
import itTranslations from './locales/it.json'
import nlTranslations from './locales/nl.json'
import noTranslations from './locales/no.json'
import svTranslations from './locales/sv.json'

const resources = {
  en: { translation: enTranslations },
  ro: { translation: roTranslations },
  da: { translation: daTranslations },
  de: { translation: deTranslations },
  fr: { translation: frTranslations },
  es: { translation: esTranslations },
  it: { translation: itTranslations },
  nl: { translation: nlTranslations },
  no: { translation: noTranslations },
  sv: { translation: svTranslations },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
