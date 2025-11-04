// src/components/Projects/ProjectCard/ProjectCard.tsx
'use strict';

import React from 'react';
import './ProjectCard.scss';
import Button from '../../common/Button/Button';

export interface ProjectLinks {
  live?: string;
  repo?: string;
  details?: string;
}

export interface ProjectCardProps {
  /** Project title (required) */
  title: string;
  /** Optional short line under the title */
  subtitle?: string;
  /** Short description, 2–3 lines recommended */
  excerpt?: string;
  /** 16:9 image */
  imageSrc?: string;
  imageAlt?: string;
  /** Tech tags */
  tags?: string[];
  /** Links: live/demo, repo, details */
  links?: ProjectLinks;
  /** Optional aria label override for the card region */
  ariaLabel?: string;
  /** Optional className extension */
  className?: string;
}

/**
 * ProjectCard
 * - Semantic article with figure and footer actions.
 * - Image fixed to 16:9, rounded, with soft shadow.
 * - Buttons are explicit actions; title can optionally link to details.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  excerpt,
  imageSrc,
  imageAlt = '',
  tags = [],
  links,
  ariaLabel,
  className = '',
}) => {
  const rootCls = ['projectCard', className].filter(Boolean).join(' ');

  const Title = () => {
    if (links?.details) {
      return (
        <h3 className='projectCard__title'>
          <a className='projectCard__titleLink' href={links.details}>
            {title}
          </a>
        </h3>
      );
    }
    return <h3 className='projectCard__title'>{title}</h3>;
  };

  return (
    <article className={rootCls} aria-label={ariaLabel || title}>
      {/* Media */}
      {imageSrc && (
        <figure className='projectCard__media'>
          <img className='projectCard__img' src={imageSrc} alt={imageAlt} />
        </figure>
      )}

      {/* Body */}
      <div className='projectCard__body'>
        <header className='projectCard__header'>
          <Title />
          {subtitle && <p className='projectCard__subtitle'>{subtitle}</p>}
        </header>

        {excerpt && <p className='projectCard__excerpt'>{excerpt}</p>}

        {tags.length > 0 && (
          <ul className='projectCard__tags' aria-label='Tecnologias utilizadas'>
            {tags.map((tag) => (
              <li key={tag} className='projectCard__tag'>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer actions */}
      {(links?.live || links?.repo || links?.details) && (
        <footer className='projectCard__footer' aria-label='Ações do projeto'>
          {links?.live && (
            <Button href={links.live} variant='primary' size='sm' aria-Label='Abrir demonstração'>
              Live
            </Button>
          )}
          {links?.repo && (
            <Button href={links.repo} variant='secondary' size='sm' aria-Label='Abrir repositório'>
              GitHub
            </Button>
          )}
          {links?.details && (
            <Button href={links.details} variant='ghost' size='sm' aria-Label='Ver detalhes'>
              Detalhes
            </Button>
          )}
        </footer>
      )}
    </article>
  );
};

export default ProjectCard;
