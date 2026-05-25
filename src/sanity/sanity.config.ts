import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export const sanityConfig = defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: 'Allura Healthcare CMS',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            // ── CONFIGURACIÓN GLOBAL ──────────────────────────
            S.listItem()
              .title('⚙️ Configuración del sitio')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('🗂 Navegación')
              .id('navigation')
              .child(S.document().schemaType('navigation').documentId('navigation')),
            S.listItem()
              .title('📊 Scripts y analítica')
              .id('trackingScripts')
              .child(S.document().schemaType('trackingScripts').documentId('trackingScripts')),

            S.divider(),

            // ── PÁGINAS ──────────────────────────────────────
            S.listItem()
              .title('🏠 Página de inicio')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.documentTypeListItem('page').title('📄 Páginas'),

            S.divider(),

            // ── SERVICIOS ────────────────────────────────────
            S.documentTypeListItem('serviceCategory').title('📂 Categorías de servicio'),
            S.documentTypeListItem('service').title('🦷 Servicios'),

            S.divider(),

            // ── BLOG ─────────────────────────────────────────
            S.documentTypeListItem('blogPost').title('✍️ Blog / Noticias'),
            S.documentTypeListItem('category').title('🏷 Categorías de blog'),

            S.divider(),

            // ── SOCIAL PROOF ──────────────────────────────────
            S.documentTypeListItem('testimonial').title('⭐ Testimonios'),
            S.documentTypeListItem('caseStudy').title('📈 Casos de éxito'),
            S.documentTypeListItem('teamMember').title('👥 Equipo'),

            S.divider(),

            // ── MEDIA ─────────────────────────────────────────
            S.documentTypeListItem('galleryItem').title('🖼 Galería'),
            S.documentTypeListItem('video').title('▶️ Videos'),

            S.divider(),

            // ── CONTENIDO AUXILIAR ─────────────────────────────
            S.documentTypeListItem('faq').title('❓ Preguntas frecuentes'),
            S.documentTypeListItem('popup').title('💬 Popups'),
          ]),
    }),
    visionTool(),
  ],
})
