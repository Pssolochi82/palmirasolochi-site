'use strict';

import React from 'react'; // Importar React é necessário para componentes React.FC

import './PhrasesBanner.scss';

// --- Ajuste os caminhos de importação conforme a sua estrutura de ficheiros ---
import PhrasesImg1 from '../../../assets/coragem.webp';
import PhrasesImg2 from '../../../assets/determinacao.webp';
import PhrasesImg3 from '../../../assets/humildade.webp';
import PhrasesImg4 from '../../../assets/resiliencia.webp';
import PhrasesImg5 from '../../../assets/responsabilidade.webp';
import PhrasesImg6 from '../../../assets/temor.webp';

// Matriz com os caminhos das imagens
const images = [PhrasesImg1, PhrasesImg2, PhrasesImg3, PhrasesImg4, PhrasesImg5, PhrasesImg6];

const PhrasesBanner: React.FC = () => {
  return (
    <div className='phrases-banner'>
      <div className='phrases-banner__gallery'>
        {/* Usar map() para iterar sobre a matriz de imagens e renderizar uma tag <img> para cada */}
        {images.map((imgSrc, index) => (
          <img
            key={index} // A chave única é essencial para listas React
            src={imgSrc}
            alt={`Imagem de Frase de Destaque ${index + 1}`}
            className='phrases-banner__img'
          />
        ))}
      </div>
    </div>
  );
};

export default PhrasesBanner;
