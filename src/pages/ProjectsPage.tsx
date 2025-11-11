// src/pages/ProjectsPage.tsx
'use strict';

import React from 'react';

// Components
import HeroProjects from '../components/Projects/HeroProjects/HeroProjects';
import IntroBannerProjects from '../components/Projects/IntroBannerProjects/IntroBannerProjects';
import FiltersBar, { SortOption } from '../components/Projects/FiltersBar/FiltersBar';
import ProjectsGrid, { ProjectGridItem } from '../components/Projects/ProjectsGrid/ProjectsGrid';
import Pagination from '../components/Projects/Pagination/Pagination';
import CtaBand from '../components/Projects/CtaBand/CtaBand';

// Services
import { listProjects } from '../services/projects';

// Hero intacto
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

<p>"Cada linha de código é uma oportunidade para aprender, melhorar e criar algo que faça a diferença."</p>
`;

  // estado
  const [q, setQ] = React.useState('');
  const [sort, setSort] = React.useState<SortOption>('newest');
  const [activeTags, setActiveTags] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 3;

  const [projects, setProjects] = React.useState<ProjectGridItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  // tags fixas por agora
  const tags = ['Python', 'PHP', 'C++', 'C#', 'QA', 'COBOL', 'Java'];

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  // carregar projetos de forma assíncrona
  React.useEffect(() => {
    let alive = true;
    async function load(): Promise<void> {
      setLoading(true);
      setError('');
      try {
        const src = await listProjects();
        if (!alive) return;
        const items: ProjectGridItem[] = src.map((p) => ({
          id: p.id,
          title: p.title,
          subtitle: p.subtitle,
          excerpt: p.excerpt,
          imageSrc: p.media?.imageSrc,
          imageAlt: p.media?.imageAlt || p.title,
          tags: p.tags,
          links: p.links,
        }));
        setProjects(items);
      } catch (e) {
        if (!alive) return;
        setError('Falha ao carregar projetos.');
      } finally {
        if (alive) setLoading(false);
      }
    }
    void load();
    return () => {
      alive = false;
    };
  }, []);

  // filtros
  const filtered = React.useMemo(() => {
    const query = q.toLowerCase();
    return projects.filter((p) => {
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.subtitle?.toLowerCase().includes(query) ||
        p.excerpt?.toLowerCase().includes(query);
      const matchTags = activeTags.length === 0 || activeTags.some((tag) => p.tags?.includes(tag));
      return matchQuery && matchTags;
    });
  }, [projects, q, activeTags]);

  // ordenar
  const sorted = React.useMemo(() => {
    const arr = [...filtered];
    if (sort === 'az') return arr.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'za') return arr.sort((a, b) => b.title.localeCompare(a.title));
    // newest e oldest usando id numérico como fallback
    return arr.sort((a, b) =>
      sort === 'newest' ? Number(b.id) - Number(a.id) : Number(a.id) - Number(b.id)
    );
  }, [filtered, sort]);

  // paginação
  const totalPages = Math.ceil(sorted.length / itemsPerPage) || 1;
  const startIndex = (page - 1) * itemsPerPage;
  const pageItems = sorted.slice(startIndex, startIndex + itemsPerPage);

  // reset página quando filtros mudam
  React.useEffect(() => {
    setPage(1);
  }, [q, sort, activeTags]);

  return (
    <main aria-labelledby='ProjectsPage-title' className='pagesGeneral'>
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

      <FiltersBar
        search={q}
        onSearch={setQ}
        sort={sort}
        onSort={setSort}
        tags={tags}
        activeTags={activeTags}
        onToggleTag={toggleTag}
      />

      {loading && <p role='status'>A carregar…</p>}
      {!loading && error && <p role='alert'>{error}</p>}
      {!loading && !error && (
        <ProjectsGrid items={pageItems} emptyText='Nenhum projeto encontrado.' />
      )}

      {!loading && !error && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      )}

      <CtaBand
        title='Tem um projeto em mente?'
        text='Fale comigo para desenharmos juntos a melhor solução, com qualidade, acessibilidade e foco no detalhe.'
        primary={{ label: 'Contactar', href: '/contact' }}
        secondary={{
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/palmirasolochi/',
          target: '_blank',
        }}
        align='center'
        tone='accent'
      />
    </main>
  );
};

export default ProjectsPage;
