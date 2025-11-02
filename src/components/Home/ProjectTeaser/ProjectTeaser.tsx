// src/components/Home/ProjectTeaser/ProjectTeaser.tsx
'use strict';

import React from 'react';
import './ProjectTeaser.scss';
import Button from '../../common/Button/Button';

export interface ProjectTeaserProps {
  /** Imagem do lado esquerdo (16:9) */
  imageSrc: string;
  imageAlt: string;

  /** Conteúdo do painel à direita */
  title?: string;
  text?: string;

  /** CTA principal */
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * ProjectTeaser (Hero-style)
 * - Desktop: grid em 2 colunas (imagem | painel).
 * - Mobile: empilhado (imagem em cima).
 * - Tipografia do título com itálico para aproximar o mock.
 */
const ProjectTeaser: React.FC<ProjectTeaserProps> = ({
  imageSrc,
  imageAlt,
  title = 'Os meus projectos',
  text = 'QA Profissional · Programadora em formação (COBOL, Mainframe, Backend Java)',
  ctaLabel = 'Visite os meus projectos',
  ctaHref = '/projects',
}) => {
  return (
    <section className='projTeaser' aria-labelledby='proj-teaser-title'>
      <div className='projTeaser__grid'>
        {/* Imagem à esquerda */}
        <div className='projTeaser__media' aria-hidden='true'>
          <img className='projTeaser__img' src={imageSrc} alt={imageAlt} />
        </div>

        {/* Painel à direita */}
        <article className='projTeaser__panel'>
          <h2 id='proj-teaser-title' className='projTeaser__title'>
            {title}
          </h2>
          {text && <p className='projTeaser__text'>{text}</p>}
          <div className='projTeaser__actions'>
            <Button href={ctaHref} variant='primary' size='md'>
              {ctaLabel}
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProjectTeaser;
