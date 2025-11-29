// src/i18n/index.ts
'use strict';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all namespaces
import pt_common from './locales/pt/common.json';
import pt_home from './locales/pt/home.json';

import en_common from './locales/en/common.json';
import en_home from './locales/en/home.json';

// Extend namespaces as needed
export const defaultNS = 'common';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    defaultNS,
    ns: ['common', 'home'],
    resources: {
      pt: {
        common: pt_common,
        home: pt_home,
      },
      en: {
        common: en_common,
        home: en_home,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'navigator'],
    },
  });

export default i18n;
