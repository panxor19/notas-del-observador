---
title: "Plantilla de ejemplo para escribir un post"
description: "Ejemplo práctico de formato Markdown, imágenes, citas, listas, enlaces, tablas y código."
pubDate: "2026-05-11"
author: "Héctor Ruiz"
tags: ["plantilla", "markdown", "ayuda"]
category: "Guía"
cover: "/images/posts/ejemplo-portada.webp"
draft: true
featured: false
---

Este archivo es una plantilla. Está como borrador porque tiene `draft: true`, así que no aparecerá publicado.

Para crear un post real, copia este archivo, cambia el nombre y edita los datos de arriba.

## Datos del post

La parte entre líneas `---` se llama frontmatter. Sirve para título, fecha, autor, tags y SEO.

Campos importantes:

- `title`: título visible del post.
- `description`: resumen corto para SEO y tarjetas.
- `pubDate`: fecha de publicación en formato `AAAA-MM-DD`.
- `author`: autor del post.
- `tags`: temas del post.
- `category`: categoría principal.
- `cover`: imagen de portada.
- `draft`: si es `true`, no se publica; si es `false`, sí se publica.
- `featured`: si es `true`, aparece como destacado en la home.

## Texto normal

Escribe párrafos normales dejando una línea en blanco entre cada párrafo.

Este es otro párrafo. Markdown convierte esto automáticamente en HTML legible.

## Subtítulos

Usa `##` para subtítulos principales.

Usa `###` para subtítulos secundarios.

### Subtítulo secundario

Este texto pertenece a una sección más pequeña.

## Negrita, cursiva y enlaces

Puedes escribir **texto en negrita**.

También puedes escribir *texto en cursiva*.

Un enlace se escribe así: [Visitar Astro](https://astro.build).

## Listas

Lista simple:

- Primer punto.
- Segundo punto.
- Tercer punto.

Lista numerada:

1. Primer paso.
2. Segundo paso.
3. Tercer paso.

## Citas

Para destacar una frase, usa `>`:

> Una buena observación convierte una idea vaga en una pregunta útil.

## Imágenes dentro del post

Guarda tus imágenes en esta carpeta:

```text
public/images/posts/
```

Ejemplo:

```text
public/images/posts/mi-imagen.webp
```

Luego insértala así:

```md
![Descripción de la imagen](/images/posts/mi-imagen.webp)
```

Resultado:

![Ejemplo de imagen](/images/posts/mi-imagen.webp)

Recomendación: usa imágenes `.webp` porque pesan menos y cargan rápido.

## Imagen de portada

Para portada, agrega esto en el frontmatter:

```yaml
cover: "/images/posts/mi-portada.webp"
```

La imagen debe existir en:

```text
public/images/posts/mi-portada.webp
```

## Código

Código corto dentro de una frase:

Usa `draft: false` para publicar.

Bloque de código:

```ts
const mensaje = "Hola mundo";
console.log(mensaje);
```

## Tabla

| Campo | Para qué sirve |
| --- | --- |
| title | Título del post |
| description | Resumen SEO |
| tags | Temas del post |
| draft | Controla si se publica |

## Publicar

Cuando el post esté listo, cambia:

```yaml
draft: true
```

por:

```yaml
draft: false
```

Luego guarda, haz commit y push.
