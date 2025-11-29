// src/pages/CurriculumPage.tsx
'use strict';

import React from 'react';
import './styles/CurriculumPage.scss';
import PdfViewer from '../components/common/PdfViewer/PdfViewer';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Lang } from '../utils/routePaths';

const CurriculumPage: React.FC = () => {
  const { t } = useTranslation('curriculum');
  const { lang } = useParams<{ lang: Lang }>();
  const currentLang: Lang = lang === 'en' ? 'en' : 'pt';

  return (
    <main className='curriculumPage' id='main-content'>
      <header className='curriculumPage__header'>
        <h1 className='curriculumPage__title'>{t('title')}</h1>
        <p className='curriculumPage__subtitle'>{t('subtitle')}</p>
      </header>

      <div className='curriculumPage__viewer'>
        <PdfViewer src='/cv.pdf' title={t('pdfTitle')} showHeading={false} />
      </div>
    </main>
  );
};

export default CurriculumPage;
