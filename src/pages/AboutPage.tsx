// src/pages/AboutPage.tsx
import React from 'react';
import HeroAbout from '../components/about/HeroAbout/HeroAbout';
import IntroBannerAbout from '../components/about/IntroBannerAbout/IntroBannerAbout';

// Import image.
import hero2 from '../../src/assets/hero-2.webp';

const AboutPage: React.FC = () => {
  return (
    <main id='main' className='aboutPage' aria-labelledby='about-title'>
      {/* HERO invertido — imagem à direita, card à esquerda */}
      <HeroAbout
        inverted
        title='Sou Palmira Solochi!'
        text='De Direito ao QA (Selenium, BDD) e Programação (COBOL, Java). Uma história de transição de carreira, fé e determinação, provando que nunca é tarde para recomeçar.'
        imageSrc={hero2}
        imageAlt='Retrato profissional'
        ctaPrimary={{ label: 'Vamos falar', href: '/contact' }}
        ctaSecondary={undefined}
      />

      <IntroBannerAbout
        quotes={[
          'Se é feito com atenção, não é por acaso.',
          'Trabalho com foco, clareza e a mesma energia.',
        ]}
      />
    </main>
  );
};

export default AboutPage;
