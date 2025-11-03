import React from 'react';

// Components
import HeroProjects from '../components/Projects/HeroProjects/HeroProjects';
import IntroBannerProjects from '../components/Projects/IntroBannerProjects/IntroBannerProjects';

// Image
import hero3 from '../assets/hero-3.webp';

const ProjectsPage: React.FC = () => {
  const introText = `
<p>Uma seleção de projetos de Desenvolvimento de Software que reflete a minha evolução como Programadora e Especialista em QA (Garantia de Qualidade), demonstrando o meu compromisso com a qualidade, aprendizagem contínua e inovação ao longo do meu percurso académico e profissional.</p>

<p>Cada projeto representa uma etapa crucial da minha jornada, desde as primeiras experiências em Testes de Software até ao Desenvolvimento de Aplicações robustas nas seguintes tecnologias e linguagens: <strong>COBOL, Mainframe, Java, C, C++, PHP, C#, ASP Net Core e Python</strong>.</p>

<p>Aqui encontrará um Portefólio de Projetos que inclui trabalhos académicos, projetos pessoais e exercícios técnicos que solidificam as minhas competências em:</p>

<ul>
  <li>Programação Backend</li>
  <li>Bases de Dados</li>
  <li>Automação de Testes</li>
  <li>Desenvolvimento Web</li>
</ul>

<p>“Cada linha de código é uma oportunidade para aprender, melhorar e criar algo que faça a diferença.”</p>
`;

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

      <IntroBannerProjects text={introText} align='center' />
    </section>
  );
};

export default ProjectsPage;
