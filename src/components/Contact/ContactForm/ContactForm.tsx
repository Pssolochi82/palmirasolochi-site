// src/components/Contact/ContactForm/ContactForm.tsx
'use strict';

// src/components/Contact/ContactForm/ContactForm.tsx

import React, { useState } from 'react';
import './ContactForm.scss';
import Button from '../../common/Button/Button';
import type { ContactFormValues } from '../../../types/contact';
import { sendContact } from '../../../services/contact';

interface Props {
  className?: string;
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '', // honeypot
};

const ContactForm: React.FC<Props> = ({ className = '' }) => {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [sending, setSending] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const rootCls = ['contactForm', className].filter(Boolean).join(' ');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (sending) return;

    if (!values.name || !values.email || !values.message) {
      setError('Por favor preencha Nome, Email e Mensagem.');
      return;
    }

    try {
      setError('');
      setSending(true);
      await sendContact({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      });
      setSent(true);
      setValues(initialValues);
      window.setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
      setError('Ocorreu um erro ao enviar. Tenta novamente.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form className={rootCls} onSubmit={handleSubmit} noValidate aria-live='polite'>
      {/* Honeypot anti-spam */}
      <div className='contactForm__honeypot' aria-hidden='true'>
        <label htmlFor='company'>Empresa</label>
        <input
          id='company'
          name='company'
          type='text'
          autoComplete='off'
          tabIndex={-1}
          value={values.company}
          onChange={handleChange}
        />
      </div>

      <div className='contactForm__row'>
        <label className='contactForm__label' htmlFor='name'>
          Nome
        </label>
        <input
          className='contactForm__input'
          id='name'
          name='name'
          type='text'
          autoComplete='name'
          placeholder='O seu nome'
          value={values.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className='contactForm__row'>
        <label className='contactForm__label' htmlFor='email'>
          Email
        </label>
        <input
          className='contactForm__input'
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          placeholder='nome@exemplo.com'
          value={values.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='contactForm__row'>
        <label className='contactForm__label' htmlFor='subject'>
          Assunto
        </label>
        <input
          className='contactForm__input'
          id='subject'
          name='subject'
          type='text'
          placeholder='Assunto'
          value={values.subject}
          onChange={handleChange}
        />
      </div>

      <div className='contactForm__row'>
        <label className='contactForm__label' htmlFor='message'>
          Mensagem
        </label>
        <textarea
          className='contactForm__textarea'
          id='message'
          name='message'
          placeholder='Escreva a sua mensagem...'
          rows={6}
          value={values.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className='contactForm__actions'>
        <Button
          type='submit'
          disabled={sending}
          aria-Label={sending ? 'A enviar…' : 'Enviar mensagem'}>
          {sending ? 'A enviar…' : 'Enviar'}
        </Button>

        {sent && (
          <span className='contactForm__feedback' role='status'>
            Obrigado! A sua mensagem foi enviada.
          </span>
        )}

        {error && (
          <span className='contactForm__error' role='alert'>
            {error}
          </span>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
