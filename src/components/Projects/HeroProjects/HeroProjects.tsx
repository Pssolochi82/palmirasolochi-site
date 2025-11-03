// src/components/Projects/HeroProjects/HeroProjects.tsx
'use strict';

import React from 'react';
import './HeroProjects.scss';
import Button from '../../common/Button/Button';

export interface ProjectsHeroCTA {
  label: string;
  href: string;
  target?: string;
}

export interface HeroProjectsProps {
  title: string;
  subtitle?: string;
  text?: string;
  imageSrc: string;
  imageAlt: string;
  ctaPrimary?: ProjectsHeroCTA;
  ctaSecondary?: ProjectsHeroCTA;
  /** optional: swap sides on desktop (image right, card left) */
  inverted?: boolean;
}

/**
 * HeroProjects
 * - Mobile: stacked (image 16:9 first, card after).
 * - ≥768px: absolute overlay — image LEFT, card RIGHT (or inverted via prop).
 */
const HeroProjects: React.FC<HeroProjectsProps> = ({
  title,
  subtitle = '',
  text = '',
  imageSrc,
  imageAlt,
  ctaPrimary = { label: 'Todos os Projetos', href: '/projects', target: '_blank' },
  ctaSecondary = { label: 'GitHub', href: 'https://github.com/', target: '_blank' },
  inverted = false,
}) => {
  const cls = ['projects-hero', inverted ? 'projects-hero--inverted' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <section className={cls} aria-labelledby='projects-hero-title'>
      {/* Stage (imagem 16/9; no desktop fica à esquerda em absolute) */}
      <div className='projects-hero__stage' aria-hidden='true'>
        <div className='projects-hero__media'>
          <img className='projects-hero__img' src={imageSrc} alt={imageAlt} />
        </div>
      </div>
      {/* Card (desktop à direita; mobile abaixo da imagem) */}
      <div className='projects-hero__card' role='group' aria-label='Destaque de projetos'>
        <h1 id='projects-hero-title' className='projects-hero__title'>
          {title}
        </h1>
        {subtitle && <p className='projects-hero__subtitle'>{subtitle}</p>}
        {text && <p className='projects-hero__text'>{text}</p>}

        {(ctaPrimary || ctaSecondary) && (
          <div className='projects-hero__actions'>
            {ctaPrimary && (
              <Button
                href={ctaPrimary.href}
                variant='primary'
                size='lg'
                target={ctaSecondary.target}>
                {ctaPrimary.label}
              </Button>
            )}
            {ctaSecondary && (
              <Button
                href={ctaSecondary.href}
                variant='secondary'
                size='lg'
                target={ctaSecondary.target}>
                {ctaSecondary.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroProjects;
