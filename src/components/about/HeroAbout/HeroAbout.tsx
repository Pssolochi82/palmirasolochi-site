// src/components/about/HeroAbout/HeroAbout.tsx
'use strict';

import React from 'react';
import './HeroAbout.scss';
import Button from '../../common/Button/Button';

export interface AboutHeroCTA {
  label: string;
  href: string;
}

export interface HeroAboutProps {
  title: string;
  subtitle?: string;
  text?: string;
  ctaPrimary?: AboutHeroCTA;
  ctaSecondary?: AboutHeroCTA;
  imageSrc: string;
  imageAlt: string;
}

const HeroAbout: React.FC<HeroAboutProps> = ({
  title,
  subtitle = '',
  text = '',
  ctaPrimary = { label: 'Ver Projetos', href: '/projects' },
  ctaSecondary = { label: 'Contacto', href: '/contact' },
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className='about-hero' aria-labelledby='about-hero-title'>
      {/* Palco base (mobile empilhado; desktop serve de referência para absolute) */}
      <div className='about-hero__stage' aria-hidden='true'>
        <div className='about-hero__media'>
          <img className='about-hero__img' src={imageSrc} alt={imageAlt} />
        </div>
      </div>

      {/* Cartão (à esquerda no desktop; abaixo da imagem no mobile) */}
      <div className='about-hero__card' role='group' aria-label='Destaque sobre mim'>
        <h1 id='about-hero-title' className='about-hero__title'>
          {title}
        </h1>
        {subtitle && <p className='about-hero__subtitle'>{subtitle}</p>}
        {text && <p className='about-hero__text'>{text}</p>}

        <div className='about-hero__actions'>
          {ctaPrimary && (
            <Button href={ctaPrimary.href} variant='primary' size='lg'>
              {ctaPrimary.label}
            </Button>
          )}
          {ctaSecondary && (
            <Button href={ctaSecondary.href} variant='secondary' size='lg'>
              {ctaSecondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
