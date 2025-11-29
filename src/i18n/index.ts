// src/i18n/index.ts
'use strict';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all namespaces pt
import pt_common from './locales/pt/common.json';
import pt_home from './locales/pt/home.json';
import pt_about from './locales/pt/about.json';
import pt_certificates from './locales/pt/certificates.json';
import pt_contact from './locales/pt/contact.json';
import pt_curriculum from './locales/pt/curriculum.json';

// Import all namespaces en
import en_common from './locales/en/common.json';
import en_home from './locales/en/home.json';
import en_about from './locales/en/about.json';
import en_certificates from './locales/en/certificates.json';
import en_contact from './locales/en/contact.json';
import en_curriculum from './locales/en/curriculum.json';

// Extend namespaces as needed
export const defaultNS = 'common';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    defaultNS,
    ns: ['common', 'home', 'about', 'certificates', 'contact', 'curriculum'],
    resources: {
      pt: {
        common: pt_common,
        home: pt_home,
        about: pt_about,
        certificates: pt_certificates,
        contact: pt_contact,
        curriculum: pt_curriculum,
      },
      en: {
        common: en_common,
        home: en_home,
        about: en_about,
        certificates: en_certificates,
        contact: en_contact,
        curriculum: en_curriculum,
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
