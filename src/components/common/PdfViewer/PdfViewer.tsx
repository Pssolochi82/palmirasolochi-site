// src/components/common/PdfViewer/PdfViewer.tsx
'use strict';

import React from 'react';
import './PdfViewer.scss';

type PdfViewerProps = {
  /** Public path do PDF, por exemplo: "/cv.pdf" */
  src: string;
  /** Título usado em acessibilidade e como heading opcional */
  title: string;
  /** Altura preferida. Por omissão usa 80vh em desktop e 70vh em mobile via CSS */
  height?: number | string;
  /** Mostrar heading acima do viewer */
  showHeading?: boolean;
  /** Classe extra opcional */
  className?: string;
};

/**
 * PdfViewer
 * Renderiza um iframe para visualizar PDF hospedado em /public.
 * Inclui fallback com link caso o navegador bloqueie o embed.
 */
const PdfViewer: React.FC<PdfViewerProps> = ({
  src,
  title,
  height,
  showHeading = true,
  className = '',
}) => {
  const rootCls = ['pdfViewer', className].filter(Boolean).join(' ');
  const styleHeight = typeof height === 'number' ? `${height}px` : height || undefined;

  return (
    <section className={rootCls} aria-label={title}>
      {showHeading && <h1 className='pdfViewer__title'>{title}</h1>}

      <div
        className='pdfViewer__frameWrap'
        style={styleHeight ? { height: styleHeight } : undefined}>
        <iframe
          className='pdfViewer__iframe'
          src={src}
          title={title}
          loading='lazy'
          aria-label={`${title} PDF`}
        />
      </div>

      <p className='pdfViewer__fallback'>
        Não consegues ver o documento?{' '}
        <a className='pdfViewer__link' href={src} target='_blank' rel='noopener noreferrer'>
          Abre numa nova aba
        </a>
        .
      </p>
    </section>
  );
};

export default PdfViewer;
