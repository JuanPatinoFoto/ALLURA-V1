// src/sanity/schemaTypes/objects/seoObject.ts
import { defineType, defineField } from 'sanity'

export const seoObject = defineType({
  name: 'seoObject',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta título',
      type: 'object',
      options: { collapsible: false },
      fields: [
        {
          name: 'es',
          title: 'Meta título — Español',
          type: 'string',
          description: 'Ideal: 50–60 caracteres',
          validation: (Rule) =>
            Rule.required().max(60).warning('Recomendado: máximo 60 caracteres para SEO óptimo'),
        },
        {
          name: 'en',
          title: 'Meta title — English',
          type: 'string',
          description: 'Ideal: 50–60 characters',
          validation: (Rule) =>
            Rule.required().max(60).warning('Recommended: maximum 60 characters for optimal SEO'),
        },
      ],
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta descripción',
      type: 'object',
      options: { collapsible: false },
      fields: [
        {
          name: 'es',
          title: 'Meta descripción — Español',
          type: 'text',
          rows: 3,
          description: 'Ideal: 140–160 caracteres',
          validation: (Rule) =>
            Rule.required().max(160).warning('Recomendado: máximo 160 caracteres para SEO óptimo'),
        },
        {
          name: 'en',
          title: 'Meta description — English',
          type: 'text',
          rows: 3,
          description: 'Ideal: 140–160 characters',
          validation: (Rule) =>
            Rule.required().max(160).warning('Recommended: maximum 160 characters for optimal SEO'),
        },
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagen Open Graph',
      type: 'image',
      description: 'Imagen para redes sociales. Tamaño recomendado: 1200×630px',
      options: { hotspot: true },
    }),
    defineField({
      name: 'noIndex',
      title: '⚠️ No indexar en Google',
      type: 'boolean',
      description: 'PRECAUCIÓN: Activa esto solo si NO quieres que esta página aparezca en Google.',
      initialValue: false,
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'URL canónica (avanzado)',
      type: 'url',
      description: 'Solo completar si esta página tiene contenido duplicado.',
    }),
    defineField({
      name: 'structuredData',
      title: 'JSON-LD estructurado (avanzado)',
      type: 'text',
      rows: 6,
      description: '⚠️ Solo para administradores técnicos. JSON-LD inválido puede afectar el SEO.',
    }),
  ],
  preview: {
    select: { title: 'metaTitle.es', subtitle: 'metaDescription.es' },
    prepare({ title, subtitle }) {
      return {
        title: title || '⚠️ Sin meta título',
        subtitle: subtitle || '⚠️ Sin meta descripción',
      }
    },
  },
})
