// src/pages/ProjectDetailPage.tsx
'use strict';

import React from 'react';
import './ProjectDetailPage.scss';
import Button from '../components/common/Button/Button';
import { Project } from '../types/project';
import { getProjectBySlug } from '../services/projects';
import { useParams } from 'react-router-dom';

// Fallback de imagem local (mantém 16:9)
import heroDetail from '../assets/mock1.webp';

const formatDate = (iso?: string) => {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('pt-PT', { year: 'numeric', month: 'short', day: '2-digit' });
};

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = React.useState<Project | null>(null);
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    // mock sync; no futuro, pode ser async (fetch)
    const found = slug ? getProjectBySlug(slug) : undefined;
    if (found) {
      setProject(found);
      setNotFound(false);
    } else {
      setProject(null);
      setNotFound(true);
    }
  }, [slug]);

  if (notFound) {
    return (
      <main className='projDetail' role='status' aria-live='polite'>
        <header className='projDetail__head'>
          <h1 className='projDetail__title'>Projeto não encontrado</h1>
          <p className='projDetail__excerpt'>Verifica o endereço ou volta à página de projetos.</p>
        </header>
      </main>
    );
  }

  if (!project) {
    return (
      <main className='projDetail' role='status' aria-live='polite'>
        <p>Carregando…</p>
      </main>
    );
  }

  const {
    title,
    subtitle,
    description,
    media,
    links,
    tags = [],
    createdAt,
    updatedAt,
    excerpt,
  } = project;

  return (
    <main className='projDetail' aria-labelledby='projDetail-title'>
      {/* HERO 16:9 */}
      <header className='projDetail__hero' aria-label='Imagem do projeto'>
        <figure className='projDetail__media'>
          <img
            className='projDetail__img'
            src={media?.imageSrc || heroDetail}
            alt={media?.imageAlt || title}
            loading='eager'
          />
        </figure>

        <div className='projDetail__head'>
          <h1 id='projDetail-title' className='projDetail__title'>
            {title}
          </h1>
          {subtitle && <p className='projDetail__subtitle'>{subtitle}</p>}
          {excerpt && <p className='projDetail__excerpt'>{excerpt}</p>}

          {(links?.live || links?.repo) && (
            <div className='projDetail__actions' role='group' aria-label='Ações do projeto'>
              {links?.live && (
                <Button href={links.live} variant='primary' size='md' aria-Label='Abrir demo'>
                  Live
                </Button>
              )}
              {links?.repo && (
                <Button href={links.repo} variant='secondary' size='md' aria-Label='Abrir GitHub'>
                  GitHub
                </Button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* META BAR */}
      <section className='projDetail__meta' aria-label='Metadados'>
        <ul className='projDetail__tags' aria-label='Tecnologias'>
          {tags.map((t) => (
            <li key={t} className='projDetail__tag'>
              {t}
            </li>
          ))}
        </ul>
        <div className='projDetail__dates'>
          {createdAt && (
            <span className='projDetail__date' title={createdAt}>
              Criado: {formatDate(createdAt)}
            </span>
          )}
          {updatedAt && (
            <span className='projDetail__date' title={updatedAt}>
              Atualizado: {formatDate(updatedAt)}
            </span>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <article className='projDetail__content' aria-label='Conteúdo do projeto'>
        {description ? (
          <>
            <h2 className='projDetail__h2'>Descrição</h2>
            <p className='projDetail__p'>{description}</p>
          </>
        ) : (
          <>
            <h2 className='projDetail__h2'>Descrição</h2>
            <p className='projDetail__p'>
              Este projeto ainda não possui descrição detalhada. Em breve serão adicionadas notas
              técnicas, aprendizagens e próximos passos.
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default ProjectDetailPage;
