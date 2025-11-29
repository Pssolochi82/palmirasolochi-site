// src/App.tsx
'use strict';

import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';

import MainLayout from './components/layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import CurriculumPage from './pages/CurriculumPage';
import CertificatesPage from './pages/CertificatesPage';

import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

import i18n from './i18n/index';
import { Lang } from './utils/routePaths';

// Wrapper que sincroniza i18n com a língua da URL
function LangWrapper() {
  const { lang } = useParams<{ lang: Lang }>();

  useEffect(() => {
    if (lang && ['pt', 'en'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          {/* Home */}
          <Route path='' element={<HomePage />} />

          {/* About */}
          <Route path='sobre' element={<AboutPage />} />
          <Route path='about' element={<AboutPage />} />

          {/* Projects */}
          <Route path='projetos' element={<ProjectsPage />} />
          <Route path='projects' element={<ProjectsPage />} />

          {/* Project Detail */}
          <Route path='projetos/:slug' element={<ProjectDetailPage />} />
          <Route path='projects/:slug' element={<ProjectDetailPage />} />

          {/* Contact */}
          <Route path='contacto' element={<ContactPage />} />
          <Route path='contact' element={<ContactPage />} />

          {/* Curriculum */}
          <Route path='curriculo' element={<CurriculumPage />} />
          <Route path='resume' element={<CurriculumPage />} />

          {/* Certificates */}
          <Route path='certificados' element={<CertificatesPage />} />
          <Route path='certificates' element={<CertificatesPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

const App: React.FC = () => {
  return (
    <Routes>
      {/* Redireciona / para /pt */}
      <Route path='/' element={<Navigate to='/pt' replace />} />

      {/* Todas as rotas dentro do idioma */}
      <Route path='/:lang/*' element={<LangWrapper />} />

      {/* Wildcard → redireciona p/ pt */}
      <Route path='*' element={<Navigate to='/pt' replace />} />
    </Routes>
  );
};

export default App;
