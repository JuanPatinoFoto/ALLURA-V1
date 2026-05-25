// src/sanity/schemaTypes/documents/blogPost.ts
import { defineType, defineField } from 'sanity'
import { EditIcon } from '@sanity/icons'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Entrada de blog',
  type: 'document',
  icon: EditIcon,
  groups: [
    { name: 'content', title: '📝 Contenido', default: true },
    { name: 'meta', title: '🗂 Metadatos' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'object', group: 'content', fields: [{ name: 'es', title: 'Español', type: 'string', validation: (Rule) => Rule.required() }, { name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.required() }] }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title.es', maxLength: 96 }, validation: (Rule) => Rule.required(), group: 'meta' }),
    defineField({ name: 'author', title: 'Autor', type: 'reference', to: [{ type: 'teamMember' }], validation: (Rule) => Rule.required(), group: 'meta' }),
    defineField({ name: 'categories', title: 'Categorías', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }], validation: (Rule) => Rule.required().min(1), group: 'meta' }),
    defineField({ name: 'publishedAt', title: 'Fecha de publicación', type: 'datetime', validation: (Rule) => Rule.required(), group: 'meta' }),
    defineField({ name: 'status', title: 'Estado', type: 'string', options: { list: [{ title: 'Borrador', value: 'draft' }, { title: 'En revisión', value: 'review' }, { title: 'Publicado', value: 'published' }], layout: 'radio' }, initialValue: 'draft', group: 'meta' }),
    defineField({ name: 'featuredImage', title: 'Imagen destacada', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required(), group: 'content', fields: [{ name: 'alt', title: 'Alt text', type: 'object', fields: [{ name: 'es', type: 'string', title: 'Español', validation: (Rule) => Rule.required() }, { name: 'en', type: 'string', title: 'English', validation: (Rule) => Rule.required() }] }] }),
    defineField({ name: 'excerpt', title: 'Extracto', type: 'object', group: 'content', fields: [{ name: 'es', title: 'Español', type: 'text', rows: 3, validation: (Rule) => Rule.required().max(200) }, { name: 'en', title: 'English', type: 'text', rows: 3, validation: (Rule) => Rule.required().max(200) }] }),
    defineField({ name: 'body', title: 'Contenido', type: 'localePortableText', validation: (Rule) => Rule.required(), group: 'content' }),
    defineField({ name: 'relatedPosts', title: 'Posts relacionados', type: 'array', of: [{ type: 'reference', to: [{ type: 'blogPost' }] }], validation: (Rule) => Rule.max(3), group: 'meta' }),
    defineField({ name: 'relatedServices', title: 'Servicios relacionados', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }] }], validation: (Rule) => Rule.max(2), group: 'meta' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoObject', validation: (Rule) => Rule.required(), group: 'seo' }),
  ],
  preview: {
    select: { title: 'title.es', subtitle: 'status', media: 'featuredImage' },
    prepare({ title, subtitle, media }) {
      const statusIcon = subtitle === 'published' ? '🟢' : subtitle === 'review' ? '🟡' : '⚪'
      return { title: title || 'Sin título', subtitle: `${statusIcon} ${subtitle || 'draft'}`, media }
    },
  },
})
