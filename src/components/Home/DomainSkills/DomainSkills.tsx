// src/components/Home/DomainSkills/DomainSkills.tsx
'use strict';

import React from 'react';
import './DomainSkills.scss';

export interface DomainSkillsProps {
  imageSrc: string;
  imageAlt: string;
}

const DomainSkills: React.FC<DomainSkillsProps> = ({ imageSrc, imageAlt }) => {
  return (
    <section className='domainSkills' aria-labelledby='domain-skills-title'>
      <div className='domainSkills__grid'>
        {/* Painel de texto (esquerda) */}
        <article className='domainSkills__panel'>
          <div className='domainSkills__tag'>Domínios &amp; Competências</div>

          <h2 id='domain-skills-title' className='domainSkills__title'>
            Mainframe &amp; Backend
          </h2>
          <p className='domainSkills__list'>COBOL · JCL · TSO/ISPF · Zowe · SQL · DB2</p>

          <h3 className='domainSkills__title domainSkills__title--mid'>QA &amp; Automatização</h3>
          <p className='domainSkills__list--mid'>
            Selenium · Cypress · Cucumber · Gherkin · BDD · Jira · Xray · OWASP ZAP · Postman
          </p>

          <h3 className='domainSkills__title'>Web &amp; Linguagens</h3>
          <p className='domainSkills__list'>
            Java · ASP.NET Core MVC · JavaScript · Git · GitHub · VS Code
          </p>
        </article>

        {/* Imagem (direita) */}
        <div className='domainSkills__media'>
          <img className='domainSkills__img' src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default DomainSkills;
