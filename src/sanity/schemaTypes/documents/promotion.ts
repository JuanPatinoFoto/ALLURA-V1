import { defineType, defineField } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const promotion = defineType({
  name: 'promotion',
  title: 'Promoción',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre interno (no visible al paciente)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        { name: 'es', title: 'Español', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.required() },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'object',
      description: 'Texto secundario del banner. Aparece debajo del título principal (opcional).',
      fields: [
        { name: 'es', title: 'Español', type: 'text', rows: 2, validation: (Rule) => Rule.max(120) },
        { name: 'en', title: 'English', type: 'text', rows: 2, validation: (Rule) => Rule.max(120) },
      ],
    }),
    defineField({ name: 'cta', title: 'CTA', type: 'ctaObject' }),
    defineField({
      name: 'bgColor',
      title: 'Color de fondo',
      type: 'string',
      description: 'Color de fondo del banner de promoción.',
      options: {
        list: [
          { title: 'Azul oscuro (Navy)', value: 'navy' },
          { title: 'Azul claro (Blue)', value: 'blue' },
          { title: 'Dorado (Gold)', value: 'gold' },
        ],
        layout: 'radio',
      },
      initialValue: 'navy',
    }),
    defineField({ name: 'startDate', title: 'Fecha de inicio', type: 'datetime', description: 'Fecha desde la que se muestra el banner (opcional).' }),
    defineField({ name: 'endDate', title: 'Fecha de fin', type: 'datetime', description: 'Fecha límite del banner (opcional). Dejar vacío para que no expire.' }),
    defineField({
      name: 'isActive',
      title: '🔴 Activo',
      type: 'boolean',
      initialValue: false,
      description: 'Solo puede haber una promoción activa a la vez. Desactiva la anterior antes de activar esta.',
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Menor número = mayor prioridad',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'name', active: 'isActive' },
    prepare({ title, active }) {
      return {
        title: `${active ? '🟢 ACTIVO' : '⚫'} ${title || 'Sin nombre'}`,
        subtitle: active ? 'Visible en el sitio' : 'Inactiva',
      }
    },
  },
})
