// src/components/about/IntroBannerAbout/IntroBannerAbout.tsx
'use strict';

import React from 'react';
import './IntroBannerAbout.scss';

export interface IntroBannerAboutProps {
  /** Uma ou duas linhas de citação */
  quotes: string[];
  /** Texto acessível opcional para descrever a citação */
  ariaLabel?: string;
}

const IntroBannerAbout: React.FC<IntroBannerAboutProps> = ({ quotes, ariaLabel = 'Citação' }) => {
  const safeQuotes = quotes.slice(0, 2); // garante no máx. 2 linhas como no mock

  return (
    <section className='aboutIntro' aria-label={ariaLabel}>
      <div className='aboutIntro__inner'>
        <blockquote className='aboutIntro__blockquote'>
          {safeQuotes.map((line, i) => (
            <p key={i} className='aboutIntro__line'>
              {line}
            </p>
          ))}
        </blockquote>
      </div>
    </section>
  );
};

export default IntroBannerAbout;
