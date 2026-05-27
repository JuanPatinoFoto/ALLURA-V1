// src/sanity/schemaTypes/documents/galleryItem.ts
import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Ítem de galería',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'object', fields: [{ name: 'es', title: 'Español', type: 'string' }, { name: 'en', title: 'English', type: 'string' }] }),
    defineField({ name: 'image', title: 'Imagen', type: 'image', description: "Imagen principal de la galería. Mínimo 800×600px. Formato JPG o WebP recomendado.", options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt text', type: 'object', fields: [{ name: 'es', type: 'string', title: 'Español' }, { name: 'en', type: 'string', title: 'English' }] }] }),
    defineField({ name: 'category', title: 'Categoría', type: 'string', description: "Categoría para filtrar en la galería pública. Ej: Sonrisas, Antes y después.", options: { list: [{ title: 'Clínica', value: 'clinic' }, { title: 'Equipo', value: 'team' }, { title: 'Resultados', value: 'results' }, { title: 'Medellín', value: 'medellin' }, { title: 'Eventos', value: 'events' }] } }),
    defineField({ name: 'service', title: 'Servicio relacionado', type: 'reference', description: "Servicio relacionado con esta imagen (opcional).", to: [{ type: 'service' }] }),
    defineField({ name: 'isFeatured', title: 'Destacado', type: 'boolean', description: "Las imágenes destacadas aparecen primero en la galería.", initialValue: false }),
    defineField({ name: 'publishedAt', title: 'Fecha', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'title.es', subtitle: 'category', media: 'image' },
    prepare({ title, subtitle, media }) {
      return { title: title || 'Sin título', subtitle: subtitle || '', media }
    },
  },
})
