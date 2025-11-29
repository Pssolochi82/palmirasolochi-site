// src/pages/CertificatesPage.tsx
'use strict';

import React from 'react';
import './styles/CertificatesPage.scss';
import PdfViewer from '../components/common/PdfViewer/PdfViewer';
import Button from '../components/common/Button/Button';
import { useSearchParams, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Lang, buildPath } from '../utils/routePaths';

type CertificateItem = {
  id: string;
  title: string;
  src: string;
};

type CertificatesIndex = {
  version: number;
  items: CertificateItem[];
};

function isValidIndex(data: unknown): data is CertificatesIndex {
  if (!data || typeof data !== 'object') return false;
  const d = data as CertificatesIndex;
  if (!Array.isArray(d.items)) return false;
  return d.items.every(
    (it) =>
      it &&
      typeof it === 'object' &&
      typeof (it as CertificateItem).id === 'string' &&
      typeof (it as CertificateItem).title === 'string' &&
      typeof (it as CertificateItem).src === 'string'
  );
}

const JSON_URL = '/certificates/index.json';

const CertificatesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = React.useState<CertificateItem[]>([]);
  const [current, setCurrent] = React.useState<CertificateItem | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>('');

  const { t } = useTranslation('certificates');
  const { lang } = useParams<{ lang: Lang }>();
  const currentLang: Lang = lang === 'en' ? 'en' : 'pt';

  React.useEffect(() => {
    let cancelled = false;

    async function load(): Promise<void> {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(JSON_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as unknown;

        if (!isValidIndex(data)) throw new Error('Invalid certificates index format');

        const list = data.items;
        if (cancelled) return;
        setItems(list);

        const q = searchParams.get('doc');
        const initial = list.find((i) => i.id === q) || list[0] || null;
        setCurrent(initial || null);
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : 'Unknown error';
        if (!cancelled) setError(msg);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const id = e.target.value;
    const next = items.find((i) => i.id === id) || null;
    setCurrent(next);
    if (next) setSearchParams({ doc: next.id });
  }

  return (
    <main className='certificatesPage' id='main-content'>
      <header className='certificatesPage__header'>
        <h1 className='certificatesPage__title'>{t('title')}</h1>
        <p className='certificatesPage__subtitle'>{t('subtitle')}</p>

        {!loading && !error && items.length > 0 && current && (
          <div className='certificatesPage__controls' role='group' aria-label={t('controlsAria')}>
            <select
              id='cert-select'
              className='certificatesPage__select'
              value={current.id}
              onChange={handleChange}>
              {items.map((cert) => (
                <option key={cert.id} value={cert.id}>
                  {cert.title}
                </option>
              ))}
            </select>
          </div>
        )}

        {loading && <p className='certificatesPage__status'>{t('loading')}</p>}

        {!loading && error && (
          <p className='certificatesPage__error'>{t('error', { message: error })}</p>
        )}

        {!loading && !error && items.length === 0 && (
          <p className='certificatesPage__status'>{t('none')}</p>
        )}

        {/* Botão voltar para /about multilíngua */}
        <Button
          className='certificatesPage__actions'
          href={buildPath('about', currentLang)}
          variant='secondary'
          size='md'
          aria-label={t('backToAboutAria')}>
          {t('backToAbout')}
        </Button>
      </header>

      {!loading && !error && current && (
        <div className='certificatesPage__viewer'>
          <PdfViewer
            src={current.src}
            title={t('viewerTitle', { title: current.title })}
            showHeading={false}
          />
        </div>
      )}
    </main>
  );
};

export default CertificatesPage;
