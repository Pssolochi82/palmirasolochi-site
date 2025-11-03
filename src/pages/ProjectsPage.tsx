// src/pages/ProjectsPage.tsx
import React from 'react';

// Components
import HeroProjects from '../components/Projects/HeroProjects/HeroProjects';

// Import image.
import hero3 from '../assets/hero-3.webp';

const ProjectsPage: React.FC = () => {
  return (
    <section aria-labelledby='ProjectsPage-title' className='pagesGeneral'>
      <HeroProjects
        title='Portfólio de Projetos'
        subtitle='UI, Frontend e Prototipagem'
        text='Seleção de trabalhos com foco em acessibilidade, performance e detalhe visual.'
        imageSrc={hero3}
        imageAlt='Preview de projetos'
        ctaPrimary={{ label: 'Ver todos', href: 'https://github.com/Pssolochi82?tab=repositories' }}
        ctaSecondary={{ label: 'GitHub', href: 'https://github.com/Pssolochi82', target: '_blank' }}
      />
      ;
    </section>
  );
};

export default ProjectsPage;
