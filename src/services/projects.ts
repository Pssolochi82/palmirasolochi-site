// src/services/projects.ts
'use strict';

import type { Project } from '../types/project';

/** Prefix respecting Vite base (útil se o site não estiver no root) */
function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}

/** Resolve para public/projectsImages/<fileName> */
function resolvePublicProjectImage(fileName?: string): string | undefined {
  if (!fileName) return undefined;
  return withBase(`projectsImages/${fileName}`);
}

/** Remove BOM, comentários e poda espaços */
function preprocessJson(s: string): string {
  let out = s.replace(/^\uFEFF/, '');
  out = out.replace(/\/\*[\s\S]*?\*\//g, '');
  out = out.replace(/(^|\s)\/\/.*$/gm, '');
  return out.trim();
}

/** Normaliza array bruto vindo do JSON */
function normalizeRaw(input: unknown): Project[] {
  if (typeof input === 'string') {
    try {
      const clean = preprocessJson(input);
      const parsed = JSON.parse(clean);
      return Array.isArray(parsed) ? (parsed as Project[]) : [];
    } catch (e) {
      console.error('[projects] parse error:', e);
      return [];
    }
  }
  return Array.isArray(input) ? (input as Project[]) : [];
}

/** Enriquecimento: completa imageSrc. Details é responsabilidade da Page (depende do idioma). */
function hydrate(items: Project[]): Project[] {
  return items.map((p) => {
    const imageFile = (p.media as unknown as { imageFile?: string })?.imageFile;

    const imageSrc = p.media?.imageSrc
      ? withBase(p.media.imageSrc.replace(/^\//, ''))
      : resolvePublicProjectImage(imageFile);

    return {
      ...p,
      media: { ...p.media, imageSrc },
      links: { ...p.links },
    };
  });
}

/** Cache */
let _cache: Project[] | null = null;

/** Carrega de public/data/projects.json como TEXT para permitir preprocess */
async function fetchAll(): Promise<Project[]> {
  try {
    const res = await fetch(withBase('data/projects.json'), { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rawText = await res.text();
    const base = normalizeRaw(rawText);
    const out = hydrate(base);
    console.debug('[projects] hydrated length:', out.length);
    // @ts-expect-error debug window hook
    if (typeof window !== 'undefined') window.__PROJECTS__ = out;
    return out;
  } catch (e) {
    console.error('[projects] fetch/load failed:', e);
    return [];
  }
}

/** API síncrona com lazy load em memória após primeiro fetch */
export async function listProjects(): Promise<Project[]> {
  if (_cache) return [..._cache];
  _cache = await fetchAll();
  return [..._cache];
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  if (!_cache) _cache = await fetchAll();
  return _cache.find((p) => p.slug === slug);
}
