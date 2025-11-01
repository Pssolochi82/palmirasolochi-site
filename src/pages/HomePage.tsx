// src/pages/HomePage.tsx
import React from 'react';
import '../pages/styles/Pages.scss';

// Components
import Hero from '../components/Home/Hero/Hero';
import IntroBanner from '../components/Home/IntroBanner/IntroBanner';

//  Import image.
import hero1 from '../../src/assets/hero-1.webp';
// -----------------------------------------------------------------

const HomePage: React.FC = () => {
  return (
    <section aria-labelledby='home-title' className='pagesGeneral'>
      <Hero
        title='Palmira Solochi'
        subtitle='Portfolio & Experiência'
        text='QA Profissional · Programadora em formação (COBOL, Mainframe, Backend Java). Construo interfaces elegantes e funcionais com foco em detalhe, acessibilidade e performance.'
        imageSrc={hero1}
        imageAlt='Fotografia de destaque'
      />
      <IntroBanner
        text='Transição de carreira do Direito para a Tecnologia, unindo análise rigorosa, clareza de comunicação e foco na qualidade. Formação concluída em Quality Assurance (QA) com experiência em testes manuais e automatizados (Selenium, Cypress, Cucumber, BDD). Atualmente a aprofundar COBOL, Mainframe, Java e Segurança.'
        align='center'
      />
    </section>
  );
};

export default HomePage;
