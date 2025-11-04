// src/components/Projects/Pagination/Pagination.tsx
'use strict';

import React from 'react';
import './Pagination.scss';

export interface PaginationProps {
  /** Página atual (1-based) */
  currentPage: number;
  /** Total de páginas (>= 1) */
  totalPages: number;
  /** Callback ao mudar de página */
  onPageChange: (page: number) => void;
  /** Quantos números mostrar em torno da página atual (ex.: 1 => ... 4 [5] 6 ...) */
  siblingCount?: number;
  /** Texto acessível opcional */
  ariaLabel?: string;
}

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max));

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  ariaLabel = 'Paginação de projetos',
}) => {
  if (totalPages <= 1) return null;

  const goTo = (p: number) => onPageChange(clamp(p, 1, totalPages));

  // Construir range com elipses
  const start = Math.max(2, currentPage - siblingCount);
  const end = Math.min(totalPages - 1, currentPage + siblingCount);

  const range: (number | '…')[] = [1];
  if (start > 2) range.push('…');
  for (let p = start; p <= end; p++) range.push(p);
  if (end < totalPages - 1) range.push('…');
  if (totalPages > 1) range.push(totalPages);

  return (
    <nav className='pag' role='navigation' aria-label={ariaLabel}>
      <ul className='pag__list'>
        <li className='pag__item'>
          <button
            type='button'
            className='pag__btn'
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label='Página anterior'>
            ‹
          </button>
        </li>

        {range.map((it, idx) =>
          it === '…' ? (
            <li key={`dots-${idx}`} className='pag__item' aria-hidden='true'>
              <span className='pag__dots'>…</span>
            </li>
          ) : (
            <li key={it} className='pag__item'>
              <button
                type='button'
                className={`pag__btn ${it === currentPage ? 'pag__btn--active' : ''}`}
                aria-current={it === currentPage ? 'page' : undefined}
                onClick={() => goTo(it)}>
                {it}
              </button>
            </li>
          )
        )}

        <li className='pag__item'>
          <button
            type='button'
            className='pag__btn'
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label='Próxima página'>
            ›
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
