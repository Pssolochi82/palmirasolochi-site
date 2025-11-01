// src/components/Home/DomainTech/DomainTech.tsx
'use strict';

import React from 'react';
import './DomainTech.scss';

export type SkillChip = {
  id: string;
  label: string;
};

export type DomainItem = {
  id: string;
  title: string;
  description?: string;
  /** Optional inline SVG icon (ReactNode) */
  icon?: React.ReactNode;
  skills?: SkillChip[];
};

export interface DomainTechProps {
  title?: string;
  items: DomainItem[];
}

const DefaultIcon: React.FC = () => (
  <svg className='domainTech__iconSvg' viewBox='0 0 24 24' aria-hidden='true'>
    <path fill='currentColor' d='M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z' />
  </svg>
);

const DomainTech: React.FC<DomainTechProps> = ({ title = 'Domains & Skills', items }) => {
  return (
    <section className='domainTech' aria-labelledby='domain-tech-title'>
      <div className='domainTech__header'>
        <h2 id='domain-tech-title' className='domainTech__title'>
          {title}
        </h2>
      </div>

      <div className='domainTech__grid' role='list'>
        {items.map((item) => (
          <article key={item.id} role='listitem' className='domainTech__card'>
            <div className='domainTech__head'>
              <div className='domainTech__icon' aria-hidden='true'>
                {item.icon ?? <DefaultIcon />}
              </div>
              <h3 className='domainTech__cardTitle'>{item.title}</h3>
            </div>

            {item.description && <p className='domainTech__desc'>{item.description}</p>}

            {!!item.skills?.length && (
              <ul className='domainTech__chips' aria-label={`Competências em ${item.title}`}>
                {item.skills.map((s) => (
                  <li key={s.id} className='domainTech__chip' title={s.label}>
                    {s.label}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default DomainTech;
