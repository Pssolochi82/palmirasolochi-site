// src/pages/AboutPage.tsx
'use strict';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import HeroAbout from '../components/about/HeroAbout/HeroAbout';
import IntroBannerAbout from '../components/about/IntroBannerAbout/IntroBannerAbout';
import ArticleAbout from '../components/about/ArticleAbout/ArticleAbout';

import { Lang, buildPath } from '../utils/routePaths';

// Import image.
import hero2 from '../../src/assets/hero-2.webp';

const AboutPage: React.FC = () => {
  const { t } = useTranslation('about');
  const { lang } = useParams<{ lang: Lang }>();
  const currentLang: Lang = lang === 'en' ? 'en' : 'pt';

  const aboutParagraphs = t('article.paragraphs', {
    returnObjects: true,
  }) as string[];

  const introQuotes = t('intro.quotes', {
    returnObjects: true,
  }) as string[];

  return (
    <main id='main' className='aboutPage' aria-labelledby='about-title'>
      {/* HERO invertido — imagem à direita, card à esquerda */}
      <HeroAbout
        inverted
        title={t('hero.title')}
        text={t('hero.text')}
        imageSrc={hero2}
        imageAlt={t('hero.imageAlt')}
        ctaPrimary={{
          label: t('hero.ctaPrimaryLabel'),
          href: buildPath('contact', currentLang),
        }}
        ctaSecondary={{
          label: t('hero.ctaSecondaryLabel'), // ← NOVO
          href: buildPath('certificates', currentLang), // ← NOVO
        }}
      />

      <IntroBannerAbout quotes={introQuotes} ariaLabel={t('intro.ariaLabel')} />

      <ArticleAbout
        title={t('article.title')}
        imageAlt={t('article.imageAlt')}
        paragraphs={aboutParagraphs}
      />
    </main>
  );
};

export default AboutPage;
