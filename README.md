# Notas del Observador

Blog personal estático construido con Astro, TypeScript, Tailwind CSS, Markdown/MDX y Astro Content Collections. No usa backend, base de datos ni CMS obligatorio. Está preparado para publicarse gratis en Cloudflare Pages desde GitHub.

## Requisitos

- Node.js 20 o superior.
- npm.
- Repositorio GitHub conectado a Cloudflare Pages.

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Astro mostrará la URL local, normalmente `http://localhost:4321`.

## Crear un nuevo post

Crea un archivo `.md` o `.mdx` en `src/content/blog/`.

También puedes copiar la plantilla:

```text
src/content/blog/plantilla-ejemplo-post.md
```

Esa plantilla explica cómo escribir texto, imágenes, enlaces, citas, listas, tablas y código. Está marcada como `draft: true`, por lo que no se publica.

Ejemplo:

```md
---
title: "Título del post"
description: "Descripción breve para SEO y tarjetas."
pubDate: "2026-05-11"
updatedDate: "2026-05-12"
author: "Héctor Ruiz"
tags: ["tecnología", "ia", "reflexión"]
category: "Tecnología"
cover: "/images/posts/nombre-imagen.webp"
draft: false
featured: false
---

Contenido del artículo.
```

Campos obligatorios: `title`, `description`, `pubDate`, `author`, `tags`, `draft`.

Campos opcionales: `updatedDate`, `category`, `cover`, `featured`.

## Marcar un post como borrador

Usa:

```yaml
draft: true
```

Los borradores no aparecen en producción ni en RSS.

## Agregar imagen de portada

Guarda la imagen en `public/images/posts/`, idealmente en WebP.

Luego referencia la ruta:

```yaml
cover: "/images/posts/mi-imagen.webp"
```

## Agregar tags

Edita el arreglo `tags` del frontmatter:

```yaml
tags: ["software", "ia", "reflexión"]
```

Las páginas `/tags` y `/tags/[tag]` se generan automáticamente.

## Build

```bash
npm run build
```

El sitio estático queda en `dist/`.

## Búsqueda con Pagefind

La página `/buscar` está preparada para Pagefind. Para generar el índice:

```bash
npm run build:search
```

Ese comando ejecuta el build y luego crea `dist/pagefind/`.

## Despliegue en Cloudflare Pages

1. Sube el proyecto a GitHub.
2. En Cloudflare Pages, crea un proyecto conectado al repositorio.
3. Configura:
   - Build command: `npm run build`
   - Output directory: `dist`
4. No hay variables obligatorias para el sitio base.
5. Cada push a GitHub despliega automáticamente.

Para publicar un post:

1. Crea archivo `.md` o `.mdx` en `src/content/blog/`.
2. Agrega frontmatter válido.
3. Escribe el contenido.
4. Guarda.
5. Haz commit.
6. Haz push a GitHub.
7. Cloudflare Pages despliega el sitio.

## Comentarios con Giscus

El componente `CommentSection` ya existe. Para activarlo, configura `src/config/site.ts`:

```ts
giscus: {
  repo: "usuario/repositorio",
  repoId: "ID",
  category: "General",
  categoryId: "ID",
  mapping: "pathname"
}
```

Si esos valores están vacíos, el sitio no carga Giscus.

## Analytics opcional

No se incluye Google Analytics. Para Cloudflare Web Analytics o Plausible, edita `src/config/site.ts`:

```ts
analytics: {
  cloudflareToken: "token",
  plausibleDomain: "tudominio.cl"
}
```

Los scripts se cargan con `defer` y no bloquean el render inicial.

## Cambiar nombre, descripción, autor y URL

Edita `src/config/site.ts`:

```ts
export const siteConfig = {
  name: "Notas del Observador",
  title: "Notas del Observador",
  description: "Reflexiones sobre tecnología, inteligencia artificial, software y el mundo moderno.",
  url: "https://tudominio.cl",
  author: "Héctor Ruiz",
  locale: "es-CL"
};
```

Actualiza también `public/robots.txt` para que el sitemap apunte al dominio final.

## SEO incluido

- Titles y meta descriptions dinámicos.
- Canonical URL.
- Open Graph.
- Twitter Card.
- Favicon.
- Sitemap automático.
- `robots.txt`.
- RSS en `/rss.xml`.
- HTML semántico.
- URLs limpias.

## Estructura principal

```text
src/
  components/
  config/site.ts
  content/blog/
  layouts/
  pages/
  styles/global.css
  utils/
public/
  favicon.svg
  robots.txt
  images/posts/
```
