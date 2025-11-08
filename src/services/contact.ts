// src/services/contact.ts
'use strict';

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * sendContact
 * Envia o formulário de contacto ao backend Express via Resend.
 */
export async function sendContact(payload: ContactPayload): Promise<void> {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  if (!baseUrl) throw new Error('VITE_API_BASE_URL não definido');

  const res = await fetch(`${baseUrl}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Falha ao enviar o email.');
  }
}
