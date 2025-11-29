// src/utils/routePaths.ts
'use strict';

export type Lang = 'pt' | 'en';

export interface RouteMap {
  home: { pt: string; en: string };
  about: { pt: string; en: string };
  projects: { pt: string; en: string };
  projectDetail: { pt: string; en: string };
  contact: { pt: string; en: string };
  curriculum: { pt: string; en: string };
  certificates: { pt: string; en: string };
}

export type RouteKey = keyof RouteMap;

export const routes: RouteMap = {
  home: { pt: '/pt', en: '/en' },
  about: { pt: '/pt/sobre', en: '/en/about' },
  projects: { pt: '/pt/projetos', en: '/en/projects' },
  projectDetail: { pt: '/pt/projetos', en: '/en/projects' },
  contact: { pt: '/pt/contacto', en: '/en/contact' },
  curriculum: { pt: '/pt/curriculo', en: '/en/resume' },
  certificates: { pt: '/pt/certificados', en: '/en/certificates' },
};

export function buildPath(key: RouteKey, lang: Lang, slug?: string): string {
  const base = routes[key][lang];
  return slug ? `${base}/${slug}` : base;
}

/**
 * getRouteInfoFromPath
 * Recebe o pathname completo e devolve a chave lógica de rota
 * e, quando existe, o slug (exemplo projetos detail)
 */
export function getRouteInfoFromPath(pathname: string): {
  key: RouteKey;
  slug?: string;
} {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { key: 'home' };
  }

  const [langSegment, ...rest] = segments;

  if (!['pt', 'en'].includes(langSegment)) {
    return { key: 'home' };
  }

  if (rest.length === 0) {
    return { key: 'home' };
  }

  const first = rest[0];

  if (first === 'sobre' || first === 'about') {
    return { key: 'about' };
  }

  if (first === 'projetos' || first === 'projects') {
    if (rest.length > 1) {
      return { key: 'projectDetail', slug: rest[1] };
    }
    return { key: 'projects' };
  }

  if (first === 'contacto' || first === 'contact') {
    return { key: 'contact' };
  }

  if (first === 'curriculo' || first === 'resume') {
    return { key: 'curriculum' };
  }

  if (first === 'certificados' || first === 'certificates') {
    return { key: 'certificates' };
  }

  return { key: 'home' };
}
