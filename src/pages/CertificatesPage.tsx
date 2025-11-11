// src/pages/CertificatesPage.tsx
'use strict';

import React from 'react';
import './CertificatesPage.scss';
import PdfViewer from '../components/common/PdfViewer/PdfViewer';

const CertificatesPage: React.FC = () => {
  return (
    <main className='certificatesPage' id='main-content'>
      <header className='certificatesPage__header'>
        <h1 className='certificatesPage__title'>Certificados</h1>
        <p className='certificatesPage__subtitle'>
          Visualização em modo leitura. Se o embed falhar, usa o link de fallback no fim do viewer.
        </p>
      </header>

      <div className='certificatesPage__viewer'>
        <PdfViewer
          src='/certificados.pdf'
          title='Certificados de Deolindo Baptista'
          showHeading={false}
        />
      </div>
    </main>
  );
};

export default CertificatesPage;
