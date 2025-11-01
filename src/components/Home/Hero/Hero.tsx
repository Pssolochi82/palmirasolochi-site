// src/components/Home/Hero/Hero.tsx
'use strict';

import React from 'react';
import './Hero.scss';
import Button from '../../common/Button/Button';

export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroProps {
  title: string;
  subtitle?: string;
  text?: string;
  ctaPrimary?: HeroCTA;
  ctaSecondary?: HeroCTA;
  imageSrc: string;
  imageAlt: string;
  /** Inverte os lados no desktop: imagem à direita, card à esquerda (usar na AboutPage) */
  inverse?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle = '',
  text = '',
  ctaPrimary = { label: 'Ver Projetos', href: '/projects' },
  ctaSecondary = { label: 'Sobre Mim', href: '/about' },
  imageSrc,
  imageAlt,
  inverse = false,
}) => {
  return (
    <section className={`hero ${inverse ? 'hero--inverse' : ''}`} aria-labelledby='home-hero-title'>
      {/* Palco base — controla o espaço total (mobile: fluxo normal; desktop: referência p/ absolute) */}
      <div className='hero__stage' aria-hidden='true'>
        {/* Media com aspect-ratio 16/9 */}
        <div className='hero__media'>
          <img className='hero__img' src={imageSrc} alt={imageAlt} />
        </div>
      </div>

      {/* Cartão sobreposto (absolute no desktop; empilhado no mobile) */}
      <div className='hero__card' role='group' aria-label='Destaque inicial'>
        <h1 id='home-hero-title' className='hero__title'>
          {title}
        </h1>
        {subtitle && <p className='hero__subtitle'>{subtitle}</p>}
        {text && <p className='hero__text'>{text}</p>}
        <div className='hero__actions'>
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

export default Hero;
