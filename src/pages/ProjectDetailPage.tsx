// src/pages/ProjectDetailPage.tsx
'use strict';

import React from 'react';
import './styles/ProjectDetailPage.scss';
import Button from '../components/common/Button/Button';
import type { Project } from '../types/project';
import { getProjectBySlug } from '../services/projects';
import { useParams } from 'react-router-dom';

/** Respeita o BASE_URL do Vite quando o site está num subpath */
function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}

/** Fallback 16:9 servido pela pasta public, sem import */
const FALLBACK_HERO = withBase('projectsImages/mock1.webp');

const formatDate = (iso?: string) => {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('pt-PT', { year: 'numeric', month: 'short', day: '2-digit' });
};

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = React.useState<Project | null>(null);
  const [notFound, setNotFound] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let alive = true;
    async function load(): Promise<void> {
      setLoading(true);
      setNotFound(false);
      try {
        if (!slug) {
          setNotFound(true);
          setProject(null);
          return;
        }
        const found = await getProjectBySlug(slug);
        if (!alive) return;
        if (found) {
          setProject(found);
          setNotFound(false);
        } else {
          setProject(null);
          setNotFound(true);
        }
      } finally {
        if (alive) setLoading(false);
      }
    }
    void load();
    return () => {
      alive = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <main className='projDetail' role='status' aria-live='polite'>
        <p>Carregando…</p>
      </main>
    );
  }

  if (notFound || !project) {
    return (
      <main className='projDetail' role='status' aria-live='polite'>
        <header className='projDetail__head'>
          <h1 className='projDetail__title'>Projeto não encontrado</h1>
          <p className='projDetail__excerpt'>Verifica o endereço ou volta à página de projetos.</p>
        </header>
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

  // Novo: descrição rica proveniente do JSON
  const descriptionHtml = (project as unknown as { descriptionHtml?: string })?.descriptionHtml;

  return (
    <main className='projDetail' aria-labelledby='projDetail-title'>
      {/* HERO 16:9 */}
      <header className='projDetail__hero' aria-label='Imagem do projeto'>
        <figure className='projDetail__media'>
          <img
            className='projDetail__img'
            src={media?.imageSrc || FALLBACK_HERO}
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
                <Button href={links.live} variant='primary' size='md' aria-label='Abrir demo'>
                  Live
                </Button>
              )}
              {links?.repo && (
                <Button
                  href={links.repo}
                  variant='secondary'
                  size='md'
                  aria-label='Abrir GitHub'
                  target='_blank'
                  rel='noopener noreferrer'>
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
        <h2 className='projDetail__h2'>Descrição</h2>

        {descriptionHtml ? (
          <div
            className='projDetail__rich'
            // Conteúdo controlado pelo próprio projeto. Evita inserir HTML de terceiros.
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        ) : (
          <p className='projDetail__p'>
            {description ||
              'Este projeto ainda não possui descrição detalhada. Em breve serão adicionadas notas técnicas, aprendizagens e próximos passos.'}
          </p>
        )}
      </article>
      <Button
        className='projDetail__action'
        href='/projects'
        variant='secondary'
        size='md'
        aria-label='Voltar à página Sobre'>
        Voltar
      </Button>
    </main>
  );
};

export default ProjectDetailPage;
