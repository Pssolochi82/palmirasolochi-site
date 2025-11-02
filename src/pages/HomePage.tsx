// src/pages/HomePage.tsx
import React from 'react';
import '../pages/styles/Pages.scss';

// Components
import Hero from '../components/Home/Hero/Hero';
import IntroBanner from '../components/Home/IntroBanner/IntroBanner';
import DomainSkills from '../components/Home/DomainSkills/DomainSkills';
import PhrasesBanner from '../components/Home/PhrasesBanner/PhrasesBanner';
import ProjectTeaser from '../components/Home/ProjectTeaser/ProjectTeaser';

// Import image.
import hero1 from '../../src/assets/hero-1.webp';
import skillsImg from '../../src/assets/DomainTech.webp';
import teaserImg from '../../src/assets/teaserImg.webp';

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
      <PhrasesBanner />
      <ProjectTeaser
        imageSrc={teaserImg}
        imageAlt='Pessoa a trabalhar ao portátil'
        title='Os meus projectos'
        text='Trabalhos académicos, projetos pessoais e exercícios técnicos que demonstram competências em backend, bases de dados, automação de testes e desenvolvimento web.
'
        ctaLabel='Visite os meus projectos'
        ctaHref='/projects'
      />
    </section>
  );
};

export default HomePage;
