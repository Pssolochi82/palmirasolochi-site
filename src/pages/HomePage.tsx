// src/pages/HomePage.tsx
import React from 'react';
import Hero from '../components/Home/Hero/Hero';

//  Import image.
import hero1 from '../../src/assets/hero-1.webp';
// -----------------------------------------------------------------

const HomePage: React.FC = () => {
  return (
    <section aria-labelledby='home-title'>
      <Hero
        title='Palmira Solochi'
        subtitle='Portfolio & Experiência'
        text='QA Profissional · Programadora em formação (COBOL, Mainframe, Backend Java). Construo interfaces elegantes e funcionais com foco em detalhe, acessibilidade e performance.'
        imageSrc={hero1}
        imageAlt='Fotografia de destaque'
      />
    </section>
  );
};

export default HomePage;
