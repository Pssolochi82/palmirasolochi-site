// src/utils/routePaths.ts
'use strict';

export type Lang = 'pt' | 'en';

interface RouteMap {
  home: { pt: string; en: string };
  about: { pt: string; en: string };
  projects: { pt: string; en: string };
  projectDetail: { pt: string; en: string };
  contact: { pt: string; en: string };
  curriculum: { pt: string; en: string };
  certificates: { pt: string; en: string };
}

export const routes: RouteMap = {
  home: { pt: '/pt', en: '/en' },
  about: { pt: '/pt/sobre', en: '/en/about' },
  projects: { pt: '/pt/projetos', en: '/en/projects' },
  projectDetail: { pt: '/pt/projetos', en: '/en/projects' },
  contact: { pt: '/pt/contacto', en: '/en/contact' },
  curriculum: { pt: '/pt/curriculo', en: '/en/resume' },
  certificates: { pt: '/pt/certificados', en: '/en/certificates' },
};

export function buildPath(key: keyof RouteMap, lang: Lang, slug?: string): string {
  const base = routes[key][lang];
  return slug ? `${base}/${slug}` : base;
}
