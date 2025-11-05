// src/services/projects.ts
'use strict';

import { Project } from '../types/project';

/**
 * MOCK PROJECTS
 * - Mantém slugs estáveis para navegação.
 * - Podes trocar/expandir conforme precisares.
 */
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'sistema-gestao-testes',
    title: 'Sistema de Gestão de Testes',
    subtitle: 'QA Automation • Selenium • Cucumber (BDD)',
    excerpt: 'Framework de automação BDD com Selenium e Cucumber, com reports e integração CI.',
    tags: ['QA', 'Selenium', 'Cucumber', 'TypeScript'],
    category: 'qa',
    status: 'completed',
    links: { repo: 'https://github.com/', live: '#' },
    createdAt: '2024-09-10T12:00:00.000Z',
    updatedAt: '2025-01-15T09:15:00.000Z',
  },
  {
    id: '2',
    slug: 'app-agendamento',
    title: 'App de Agendamento',
    subtitle: 'Frontend React + Node API',
    excerpt: 'Gestão de reservas com API Node.js e UI React. Autenticação e RBAC.',
    tags: ['React', 'Node', 'TypeScript'],
    category: 'fullstack',
    status: 'completed',
    links: { repo: 'https://github.com/', live: '#' },
    createdAt: '2024-11-05T12:00:00.000Z',
  },
  {
    id: '3',
    slug: 'sistema-bancario-cobol',
    title: 'Sistema Bancário COBOL',
    subtitle: 'Mainframe / DB2',
    excerpt: 'Operações bancárias em COBOL, com integração DB2 e rotinas batch.',
    tags: ['COBOL', 'Mainframe', 'DB2'],
    category: 'mainframe',
    status: 'in-progress',
    links: { repo: 'https://github.com/' },
    createdAt: '2025-02-12T09:00:00.000Z',
  },
];

/** Lista todos (mock) */
export function listProjects(): Project[] {
  return [...MOCK_PROJECTS];
}

/** Obtém um projeto por slug (mock) */
export function getProjectBySlug(slug: string): Project | undefined {
  return MOCK_PROJECTS.find((p) => p.slug === slug);
}
