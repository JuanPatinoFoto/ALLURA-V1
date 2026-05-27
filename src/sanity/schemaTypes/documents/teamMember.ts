// src/sanity/schemaTypes/documents/teamMember.ts
import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Miembro del equipo',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({ name: 'name', title: 'Nombre completo', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'role', title: 'Cargo', type: 'object',
      description: 'Cargo que aparece debajo del nombre en la página del equipo. Ej: Directora Médica.',
      fields: [
        { name: 'es', title: 'Español', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.required() },
      ],
    }),
    defineField({
      name: 'department', title: 'Departamento', type: 'string',
      description: 'Área o especialidad del equipo al que pertenece.',
      options: { list: [{ title: 'Dental', value: 'dental' }, { title: 'Estética', value: 'aesthetic' }, { title: 'Medicina', value: 'medical' }, { title: 'Coordinación', value: 'coordination' }, { title: 'Gerencia', value: 'management' }] },
    }),
    defineField({ name: 'photo', title: 'Fotografía', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required(), fields: [{ name: 'alt', title: 'Texto alt', type: 'string', validation: (Rule) => Rule.required() }] }),
    defineField({ name: 'shortBio', title: 'Bio corta', type: 'object', fields: [{ name: 'es', title: 'Español', type: 'text', rows: 3, validation: (Rule) => Rule.required().max(200) }, { name: 'en', title: 'English', type: 'text', rows: 3, validation: (Rule) => Rule.required().max(200) }] }),
    defineField({ name: 'fullBio', title: 'Bio completa', type: 'localePortableText' }),
    defineField({ name: 'specialties', title: 'Especialidades', type: 'array', description: 'Especialidades médicas o áreas de expertise. Se muestran en el perfil del profesional.', of: [{ type: 'object', fields: [{ name: 'es', type: 'string', title: 'Español', validation: (Rule) => Rule.required() }, { name: 'en', type: 'string', title: 'English', validation: (Rule) => Rule.required() }], preview: { select: { title: 'es' } } }], validation: (Rule) => Rule.max(5) }),
    defineField({ name: 'credentials', title: 'Credenciales / títulos', type: 'array', description: 'Títulos, certificaciones y registros médicos.', of: [{ type: 'string' }], validation: (Rule) => Rule.max(8) }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url', description: 'URL del perfil de LinkedIn (opcional).' }),
    defineField({ name: 'order', title: 'Orden de aparición', type: 'number', description: 'Menor número = aparece primero.' }),
    defineField({ name: 'isActive', title: 'Activo en el sitio', type: 'boolean', initialValue: true, description: 'Desactivar oculta el miembro del sitio sin eliminarlo.' }),
    defineField({ name: 'isFeatured', title: 'Destacado en home', type: 'boolean', initialValue: false, description: 'Los miembros destacados aparecen primero en la página del equipo.' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role.es', media: 'photo' },
    prepare({ title, subtitle, media }) {
      return { title: title || 'Sin nombre', subtitle: subtitle || '', media }
    },
  },
})
