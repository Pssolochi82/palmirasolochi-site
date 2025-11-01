// src/pages/HomePage.tsx
import React from 'react';
import '../pages/styles/Pages.scss';

// Components
import Hero from '../components/Home/Hero/Hero';
import IntroBanner from '../components/Home/IntroBanner/IntroBanner';
import DomainSkills from '../components/Home/DomainSkills/DomainSkills';
import DomainTech from '../components/Home/DomainTech/DomainTech';

// Import image.
import hero1 from '../../src/assets/hero-1.webp';
import skillsImg from '../../src/assets/DomainTech.webp';

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
      <DomainSkills imageSrc={skillsImg} imageAlt='Profissional a trabalhar com portátil' />
      <DomainTech
        items={[
          {
            id: 'frontend',
            title: 'Frontend UI',
            description: 'React, Vite e TypeScript com SCSS BEM e acessibilidade.',
            skills: [
              { id: 'ts', label: 'TypeScript' },
              { id: 'react', label: 'React' },
              { id: 'scss', label: 'SCSS (BEM)' },
              { id: 'vite', label: 'Vite' },
            ],
          },
          {
            id: 'designsys',
            title: 'Design Systems',
            description: 'Tokens, semântica, componentes e documentação viva.',
            skills: [
              { id: 'tokens', label: 'Design Tokens' },
              { id: 'a11y', label: 'A11y' },
              { id: 'bem', label: 'BEM' },
              { id: 'figma', label: 'Figma-ready' },
            ],
          },
          {
            id: 'perf',
            title: 'Performance & QA',
            description: 'Lighthouse, web vitals e code review pragmático.',
            skills: [
              { id: 'lighthouse', label: 'Lighthouse' },
              { id: 'webvitals', label: 'Web Vitals' },
              { id: 'testing', label: 'Testing' },
            ],
          },
        ]}
      />
    </section>
  );
};

export default HomePage;
