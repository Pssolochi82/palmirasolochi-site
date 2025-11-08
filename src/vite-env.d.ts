// src/custom.d.ts

// Declaração para módulos de imagem comuns
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

// 🎯 Isto é o que resolve o seu erro atual:
declare module '*.webp' {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;

  // Podes adicionar outras variáveis VITE_... aqui
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
