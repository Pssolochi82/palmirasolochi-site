'use strict';

import React from 'react';
import './IntroBannerProjects.scss';

export type IntroAlign = 'left' | 'center';

export interface IntroBannerProjectsProps {
  text?: string | React.ReactNode;
  align?: IntroAlign;
  compact?: boolean;
}

const IntroBannerProjects: React.FC<IntroBannerProjectsProps> = ({
  text,
  align = 'left',
  compact = false,
}) => {
  const mods = [
    'introProj',
    align === 'center' ? 'introProj--center' : 'introProj--left',
    compact ? 'introProj--compact' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={mods} aria-labelledby='intro-projects-title'>
      <div className='introProj__inner'>
        {text && (
          <div
            className='introProj__text'
            id='intro-projects-title'
            dangerouslySetInnerHTML={{ __html: text as string }}
          />
        )}
      </div>
    </section>
  );
};

export default IntroBannerProjects;
