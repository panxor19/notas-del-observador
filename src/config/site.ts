export const siteConfig = {
  name: 'Notas del Observador',
  title: 'Notas del Observador',
  description:
    'Un espacio para observar el mundo moderno. Tecnología, inteligencia artificial, fenómenos digitales, ideas, experiencias y preguntas que aparecen cuando el ruido baja y alguien decide mirar con atención.',
  url: 'https://notasdelobservador.cl',
  author: 'El Observador',
  locale: 'es-CL',

  social: {
    github: '',
    linkedin: '',
    x: ''
  },

  giscus: {
    repo: '',
    repoId: '',
    category: '',
    categoryId: '',
    mapping: 'pathname'
  },

  analytics: {
    cloudflareToken: '',
    plausibleDomain: ''
  }
} as const;