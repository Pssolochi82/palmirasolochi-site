// src/components/Home/ProjectTeaser/ProjectTeaser.tsx
'use strict';

import React from 'react';
import './ProjectTeaser.scss';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';

export interface TeaserItem {
  id: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
}

export interface ProjectTeaserProps {
  title?: string;
  items: TeaserItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const ProjectTeaser: React.FC<ProjectTeaserProps> = ({
  title = 'Projetos em Destaque',
  items,
  ctaLabel = 'Ver todos os projetos',
  ctaHref = '/projects',
}) => {
  return (
    <section className='projTeaser' aria-labelledby='proj-teaser-title'>
      <div className='projTeaser__header'>
        <h2 id='proj-teaser-title' className='projTeaser__title'>
          {title}
        </h2>
        <div className='projTeaser__actions'>
          <Button href={ctaHref} variant='ghost' size='md'>
            {ctaLabel}
          </Button>
        </div>
      </div>

      <div className='projTeaser__grid' role='list'>
        {items.map((it) => (
          <div key={it.id} role='listitem'>
            <Card
              title={it.title}
              subtitle={it.subtitle}
              mediaSrc={it.imageSrc}
              mediaAlt={it.imageAlt}
              mediaRatio='16:9'
              variant='surface'
              elevation='e1'
              padding='md'
              rounded
              href={it.href}
              className='projTeaser__card'
              footer={it.excerpt ? <p className='projTeaser__excerpt'>{it.excerpt}</p> : undefined}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTeaser;
