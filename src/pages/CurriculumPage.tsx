// src/pages/CurriculumPage.tsx
'use strict';

import React from 'react';
import './styles/CurriculumPage.scss';
import PdfViewer from '../components/common/PdfViewer/PdfViewer';

const CurriculumPage: React.FC = () => {
  return (
    <main className='curriculumPage' id='main-content'>
      <header className='curriculumPage__header'>
        <h1 className='curriculumPage__title'>Curriculum</h1>
        <p className='curriculumPage__subtitle'>
          Visualização do documento em modo leitura. Se o embed estiver bloqueado, usa o link de
          fallback abaixo.
        </p>
      </header>

      <div className='curriculumPage__viewer'>
        <PdfViewer src='/cv.pdf' title='Curriculum de Deolindo Baptista' showHeading={false} />
      </div>
    </main>
  );
};

export default CurriculumPage;
