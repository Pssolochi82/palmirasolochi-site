// src/components/Home/IntroBanner/IntroBanner.tsx
'use strict';

import React from 'react';
import './IntroBanner.scss';
import Button from '../../common/Button/Button';

export type IntroAlign = 'left' | 'center';

export interface IntroCTA {
  label: string;
  href: string;
}

export interface IntroBannerProps {
  text?: string;
  align?: IntroAlign;
  compact?: boolean;
}

const IntroBanner: React.FC<IntroBannerProps> = ({ text, align = 'left', compact = false }) => {
  const mods = [
    'intro',
    align === 'center' ? 'intro--center' : 'intro--left',
    compact ? 'intro--compact' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={mods} aria-labelledby='intro-banner-title'>
      <div className='intro__inner'>{text && <p className='intro__text'>{text}</p>}</div>
    </section>
  );
};

export default IntroBanner;
