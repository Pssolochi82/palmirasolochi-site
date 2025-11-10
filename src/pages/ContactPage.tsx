// src/pages/ContactPage.tsx
'use strict';

import React from 'react';
import './styles/ContactPage.scss';

import HeroContact from '../components/Contact/HeroContact/HeroContact';
import QuoteContact from '../components/Contact/QuoteContact/QuoteContact';
import ContactFormSection from '../components/Contact/ContactFormSection/ContactFormSection';
import { ContactMap } from '../components/Contact/ContactMap/ContactMap';

// Assets (usa uma imagem existente do teu /src/assets)
import hero4 from '../assets/hero-4.webp';

const ContactPage: React.FC = () => {
  return (
    <main>
      <div className='contactPage' role='main'>
        <HeroContact
          imageSrc={hero4}
          imageAlt='Palmira Solochi'
          title='Vamos conversar'
          text={
            <>
              <p>Vamos descobrir juntos todo um mundo tecnologico.</p>
              <p>Entre em contacto comigo para partilharmos ideias sobre tecnologia.</p>
            </>
          }
          ctaLabel='Vamos falar'
          onCtaClick={() => {
            const section = document.getElementById('contact-section');
            if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />

        <QuoteContact>
          Reconhecer suas falhas é um passo importante para o seu crescimento tanto profissional
          como espiritual. <br /> Elas podem ser usadas em seu benefício
        </QuoteContact>

        <ContactFormSection />
        <ContactMap />
      </div>
    </main>
  );
};

export default ContactPage;
