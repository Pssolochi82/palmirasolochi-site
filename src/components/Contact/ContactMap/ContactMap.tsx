// src/components/Contact/ContactMap/ContactMap.tsx
'use strict';

import React from 'react';
import './ContactMap.scss';

export const ContactMap: React.FC = () => {
  return (
    <div className='contact-map'>
      <iframe
        width='425'
        height='350'
        src='https://www.openstreetmap.org/export/embed.html?bbox=-8.655595779418947%2C41.11518721443815%2C-8.575258255004885%2C41.15655906844026&amp;layer=mapnik'
        style={{ border: '1px solid #111', borderRadius: '16px' }}
        loading='lazy'
        title='Contact Map'
      />
    </div>
  );
};
