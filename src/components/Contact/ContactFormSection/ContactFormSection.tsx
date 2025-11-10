// src/components/Contact/ContactFormSection/ContactFormSection.tsx
'use strict';

import React from 'react';
import { FiPhone, FiMail, FiGlobe, FiMapPin } from 'react-icons/fi';
import '../../common/Container/Container.scss';
import './ContactFormSection.scss';
import Container from '../../common/Container/Container';
import ContactForm from '../ContactForm/ContactForm';

const ContactFormSection: React.FC = () => {
  return (
    <section id='contact-section' className='contactSection' aria-labelledby='contact-title'>
      <Container>
        <div className='contactSection__grid'>
          <aside className='contactSection__info' aria-label='Nota informativa'>
            <h3 className='contactSection__info__subtitle'>Entre em Contato</h3>
            <h2 className='contactSection__info__title'>Fale Comigo</h2>
            <p className='contactSection__info__descs'>
              Estou aqui para ajudar a transformar as suas ideias em realidade. Preencha o
              formulário e darei uma resposta personalizada no prazo de 24 horas. <br />
              <strong> Vamos criar algo extraordinário juntos!</strong>
            </p>
            <div className='contactSection__info__grids'>
              <div className='contactSection__info__grids__item'>
                <FiMail className='contactSection__info__grids__item__icon' />
                <div>
                  <div className='contactSection__info__grids__item__label'>Número de Telefone</div>
                  <div className='contactSection__info__grids__item__value'>(+351) 934 462 328</div>
                </div>
              </div>
              <div className='contactSection__info__grids__item'>
                <FiMail className='contactSection__info__grids__item__icon' />
                <div>
                  <div className='contactSection__info__grids__item__label'>Endereço de E-mail</div>
                  <div className='contactSection__info__grids__item__value'>
                    contact@palmirasolochi.com
                  </div>
                </div>
              </div>
              <div className='contactSection__info__grids__item'>
                <FiGlobe className='contactSection__info__grids__item__icon' />
                <div>
                  <div className='contactSection__info__grids__item__label'>Sites</div>
                  <div className='contactSection__info__grids__item__value'>
                    www.palmirasolochi.com
                  </div>
                </div>
              </div>
              <div className='contactSection__info__grids__item'>
                <FiMapPin className='contactSection__info__grids__item__icon' />
                <div>
                  <div className='contactSection__info__grids__item__label'>Endereço</div>
                  <div className='contactSection__info__grids__item__value'>Porto, Portugal</div>
                </div>
              </div>
            </div>
          </aside>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default ContactFormSection;
