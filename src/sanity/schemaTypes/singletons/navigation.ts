// src/sanity/schemaTypes/singletons/navigation.ts
import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navegación',
  type: 'document',
  icon: LinkIcon,
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'mainMenu', title: '🗂 Menú principal', default: true },
    { name: 'footer', title: '📋 Footer' },
    { name: 'ctas', title: '🔘 Botones globales' },
    { name: 'legal', title: '⚖️ Links legales' },
  ],
  fields: [
    defineField({
      name: 'mainMenu',
      title: 'Menú principal',
      type: 'array',
      group: 'mainMenu',
      of: [{ type: 'navItem' }],
      validation: (Rule) => Rule.required().min(3).error('El menú principal necesita al menos 3 ítems'),
    }),
    defineField({
      name: 'footerMenuPrimary',
      title: 'Footer — Navegación general',
      type: 'array',
      group: 'footer',
      of: [{ type: 'navItem' }],
    }),
    defineField({
      name: 'footerMenuServices',
      title: 'Footer — Servicios',
      type: 'array',
      group: 'footer',
      of: [{ type: 'navItem' }],
    }),
    defineField({
      name: 'footerBrandDescription',
      title: 'Descripción de marca en footer',
      type: 'object',
      group: 'footer',
      fields: [
        { name: 'es', title: 'Español', type: 'text', rows: 3, validation: (Rule) => Rule.max(250) },
        { name: 'en', title: 'English', type: 'text', rows: 3, validation: (Rule) => Rule.max(250) },
      ],
    }),
    defineField({
      name: 'footerWhatsappHeading',
      title: 'Footer — Título banner WhatsApp',
      type: 'object',
      group: 'footer',
      fields: [
        { name: 'es', title: 'Español', type: 'string', validation: (Rule) => Rule.max(60) },
        { name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.max(60) },
      ],
    }),
    defineField({
      name: 'footerWhatsappSub',
      title: 'Footer — Subtítulo banner WhatsApp',
      type: 'object',
      group: 'footer',
      fields: [
        { name: 'es', title: 'Español', type: 'string', validation: (Rule) => Rule.max(120) },
        { name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.max(120) },
      ],
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Texto de copyright',
      type: 'object',
      group: 'footer',
      description: 'El año {year} se reemplaza automáticamente.',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: '© {year} Allura Healthcare. Todos los derechos reservados.' },
        { name: 'en', title: 'English', type: 'string', initialValue: '© {year} Allura Healthcare. All rights reserved.' },
      ],
    }),
    defineField({ name: 'ctaBookConsultation', title: 'CTA — "Reserva tu consulta" (header)', type: 'ctaObject', group: 'ctas' }),
    defineField({ name: 'ctaPayHere', title: 'CTA — "Paga aquí" (header)', type: 'ctaObject', group: 'ctas' }),
    defineField({ name: 'ctaWhatsapp', title: 'CTA — WhatsApp global', type: 'ctaObject', group: 'ctas' }),
    defineField({
      name: 'legalLinks',
      title: 'Links legales del footer',
      type: 'array',
      group: 'legal',
      of: [{ type: 'navItem' }],
      validation: (Rule) => Rule.required().min(1).error('Debe haber al menos 1 link legal'),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Navegación', subtitle: 'Menú principal y footer' }
    },
  },
})
