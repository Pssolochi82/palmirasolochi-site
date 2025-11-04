// src/components/Projects/CtaBand/CtaBand.tsx
'use strict';

import React from 'react';
import './CtaBand.scss';
import Button from '../../common/Button/Button';

export type CtaAlign = 'left' | 'center';
export type CtaTone = 'surface' | 'accent';

export interface CtaBandProps {
  title: string;
  text?: string;
  primary?: { label: string; href: string; ariaLabel?: string; target?: '_blank' | '_self' };
  secondary?: { label: string; href: string; ariaLabel?: string; target?: '_blank' | '_self' };
  align?: CtaAlign;
  tone?: CtaTone;
  compact?: boolean;
  ariaLabel?: string;
}

const CtaBand: React.FC<CtaBandProps> = ({
  title,
  text,
  primary,
  secondary,
  align = 'center',
  tone = 'surface',
  compact = false,
  ariaLabel = 'Chamada para ação',
}) => {
  const cls = ['cta', `cta--${align}`, `cta--${tone}`, compact ? 'cta--compact' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <section className={cls} aria-label={ariaLabel}>
      <div className='cta__inner'>
        <header className='cta__header'>
          <h2 className='cta__title'>{title}</h2>
          {text && <p className='cta__text'>{text}</p>}
        </header>

        {(primary || secondary) && (
          <div className='cta__actions' role='group' aria-label='Ações'>
            {primary && (
              <Button
                href={primary.href}
                variant='primary'
                size='lg'
                aria-label={primary.ariaLabel || primary.label}
                target={primary.target}>
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button
                href={secondary.href}
                variant='secondary'
                size='lg'
                aria-Label={secondary.ariaLabel || secondary.label}
                target={secondary.target}>
                {secondary.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CtaBand;
