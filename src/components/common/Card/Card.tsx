// src/components/common/Card/Card.tsx
'use strict';

import React from 'react';
import './Card.scss';

type CardVariant = 'surface' | 'outline' | 'flat';
type CardElevation = 'e0' | 'e1' | 'e2';
type CardPadding = 'sm' | 'md' | 'lg';
type MediaRatio = '16:9' | '4:3' | '1:1' | 'auto';

export interface CardProps {
  /** Optional title shown inside the card header/content */
  title?: string;
  /** Optional subtitle under the title */
  subtitle?: string;
  /** Main content of the card */
  children?: React.ReactNode;
  /** Optional footer (actions, meta, etc.) */
  footer?: React.ReactNode;

  /** Optional image media */
  mediaSrc?: string;
  mediaAlt?: string;
  mediaRatio?: MediaRatio;

  /** Visual options */
  variant?: CardVariant;
  elevation?: CardElevation;
  padding?: CardPadding;
  rounded?: boolean;

  /** Make the whole card clickable (anchor). */
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;

  /** Extra className for custom hooks */
  className?: string;

  /** Pass-through handlers (only applied when not using href) */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  role?: React.AriaRole;
  tabIndex?: number;
}

/**
 * Card (BEM)
 * - Polymorphic wrapper: <a> when `href` is provided, otherwise <article>.
 * - Keeps strict typing (no `any`) and uses CSS variables for spacing/elevation.
 * - Media block supports common aspect ratios via CSS.
 */
const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  footer,
  mediaSrc,
  mediaAlt = '',
  mediaRatio = 'auto',
  variant = 'surface',
  elevation = 'e0',
  padding = 'md',
  rounded = true,
  href,
  target,
  rel,
  className,
  onClick,
  role,
  tabIndex,
}) => {
  const cls = [
    'card',
    `card--${variant}`,
    `card--${elevation}`,
    `card--pad-${padding}`,
    rounded ? 'card--rounded' : '',
    href ? 'card--clickable' : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  const Media = () =>
    mediaSrc ? (
      <div
        className={`card__media ${
          mediaRatio !== 'auto' ? `card__media--r${mediaRatio.replace(':', '-')}` : ''
        }`}>
        {/* Decorative image when the card is fully described by title/content */}
        <img src={mediaSrc} alt={mediaAlt} className='card__img' />
      </div>
    ) : null;

  const Content = () => (
    <>
      <Media />
      <div className='card__content'>
        {title && <h3 className='card__title'>{title}</h3>}
        {subtitle && <p className='card__subtitle'>{subtitle}</p>}
        {children && <div className='card__body'>{children}</div>}
      </div>
      {footer && <div className='card__footer'>{footer}</div>}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls} aria-label={title} title={title}>
        <Content />
      </a>
    );
  }

  return (
    <article
      className={cls}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      aria-label={title}
      title={title}>
      <Content />
    </article>
  );
};

export default Card;
