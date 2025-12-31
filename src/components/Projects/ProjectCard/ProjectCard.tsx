// src/components/Projects/ProjectCard/ProjectCard.tsx
'use strict';

import React from 'react';
import './ProjectCard.scss';
import Button from '../../common/Button/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export interface ProjectLinks {
  live?: string;
  repo?: string;
  details?: string;
}

export interface ProjectCardProps {
  title: string;
  subtitle?: string;
  excerpt?: string;
  imageSrc?: string;
  imageAlt?: string;
  tags?: string[];
  links?: ProjectLinks;
  ariaLabel?: string;
  className?: string;
}

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
  const { t } = useTranslation('projects');
  const rootCls = ['projectCard', className].filter(Boolean).join(' ');

  const Title = () => {
    if (links?.details) {
      return (
        <h3 className='projectCard__title'>
          <Link className='projectCard__titleLink' to={links.details}>
            {title}
          </Link>
        </h3>
      );
    }
    return <h3 className='projectCard__title'>{title}</h3>;
  };

  return (
    <article className={rootCls} aria-label={ariaLabel || title}>
      {imageSrc && (
        <figure className='projectCard__media'>
          <img className='projectCard__img' src={imageSrc} alt={imageAlt} />
        </figure>
      )}

      <div className='projectCard__body'>
        <header className='projectCard__header'>
          <Title />
          {subtitle && <p className='projectCard__subtitle'>{subtitle}</p>}
        </header>

        {excerpt && <p className='projectCard__excerpt'>{excerpt}</p>}

        {tags.length > 0 && (
          <ul className='projectCard__tags' aria-label={t('card.tagsAria')}>
            {tags.map((tag) => (
              <li key={tag} className='projectCard__tag'>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {(links?.live || links?.repo || links?.details) && (
        <footer className='projectCard__footer' aria-label={t('card.actionsAria')}>
          {links?.live && (
            <Button
              href={links.live}
              variant='primary'
              size='sm'
              aria-label={t('card.liveAria')}
              target='_blank'
              rel='noopener noreferrer'>
              {t('card.liveLabel')}
            </Button>
          )}

          {links?.repo && (
            <Button
              href={links.repo}
              variant='secondary'
              size='sm'
              aria-label={t('card.repoAria')}
              target='_blank'
              rel='noopener noreferrer'>
              {t('card.repoLabel')}
            </Button>
          )}

          {links?.details && (
            <Button
              href={links.details}
              variant='ghost'
              size='sm'
              aria-label={t('card.detailsAria')}>
              {t('card.detailsLabel')}
            </Button>
          )}
        </footer>
      )}
    </article>
  );
};

export default ProjectCard;
