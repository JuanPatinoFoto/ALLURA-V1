// src/sanity/schemaTypes/singletons/trackingScripts.ts
import { defineType, defineField } from 'sanity'
import { EarthGlobeIcon } from '@sanity/icons'

export const trackingScripts = defineType({
  name: 'trackingScripts',
  title: 'Scripts y analítica',
  type: 'document',
  icon: EarthGlobeIcon,
  groups: [
    { name: 'analytics', title: '📊 Analytics', default: true },
    { name: 'ads', title: '📣 Publicidad' },
    { name: 'heatmaps', title: '🔥 Mapas de calor' },
    { name: 'custom', title: '⚠️ Scripts custom (Admin)' },
    { name: 'cookies', title: '🍪 Cookies' },
  ],
  fields: [
    defineField({ name: 'googleAnalyticsId', title: 'Google Analytics 4 — Measurement ID', type: 'string', group: 'analytics', description: 'Formato: G-XXXXXXXXXX', validation: (Rule) => Rule.custom((val: string | undefined) => { if (!val) return true; if (/^G-[A-Z0-9]+$/.test(val)) return true; return 'Formato incorrecto. Debe ser G-XXXXXXXXXX' }) }),
    defineField({ name: 'gtmContainerId', title: 'Google Tag Manager — Container ID', type: 'string', group: 'analytics', description: 'Formato: GTM-XXXXXXX', validation: (Rule) => Rule.custom((val: string | undefined) => { if (!val) return true; if (/^GTM-[A-Z0-9]+$/.test(val)) return true; return 'Formato incorrecto. Debe ser GTM-XXXXXXX' }) }),
    defineField({ name: 'googleSearchConsoleVerification', title: 'Google Search Console — Meta de verificación', type: 'string', group: 'analytics', description: 'Solo el código de verificación, sin etiquetas HTML.' }),
    defineField({ name: 'metaPixelId', title: 'Meta (Facebook) Pixel ID', type: 'string', group: 'ads', validation: (Rule) => Rule.custom((val: string | undefined) => { if (!val) return true; if (/^\d+$/.test(val)) return true; return 'El Pixel ID de Meta solo contiene números' }) }),
    defineField({ name: 'googleAdsId', title: 'Google Ads — Conversion ID', type: 'string', group: 'ads', description: 'Formato: AW-XXXXXXXXXX' }),
    defineField({ name: 'tiktokPixelId', title: 'TikTok Pixel ID', type: 'string', group: 'ads' }),
    defineField({ name: 'hotjarId', title: 'Hotjar — Site ID', type: 'string', group: 'heatmaps' }),
    defineField({ name: 'clarityId', title: 'Microsoft Clarity — Project ID', type: 'string', group: 'heatmaps' }),
    defineField({ name: 'customHeadScripts', title: '⚠️ Scripts adicionales — <head>', type: 'text', group: 'custom', rows: 8, description: 'PRECAUCIÓN: Scripts incorrectos pueden romper el sitio o causar problemas de seguridad. Solo para administradores técnicos.' }),
    defineField({ name: 'customBodyStartScripts', title: '⚠️ Scripts adicionales — inicio de <body>', type: 'text', group: 'custom', rows: 8, description: 'PRECAUCIÓN: Solo para administradores técnicos.' }),
    defineField({ name: 'customBodyEndScripts', title: '⚠️ Scripts adicionales — final de <body>', type: 'text', group: 'custom', rows: 8, description: 'PRECAUCIÓN: Solo para administradores técnicos.' }),
    defineField({ name: 'cookieConsentEnabled', title: 'Activar aviso de cookies', type: 'boolean', group: 'cookies', initialValue: false }),
    defineField({ name: 'cookieConsentText', title: 'Texto del aviso de cookies', type: 'object', group: 'cookies', hidden: ({ document }) => !document?.cookieConsentEnabled, fields: [{ name: 'es', title: 'Español', type: 'text', rows: 3, initialValue: 'Usamos cookies para mejorar tu experiencia.' }, { name: 'en', title: 'English', type: 'text', rows: 3, initialValue: 'We use cookies to improve your experience.' }] }),
    defineField({ name: 'cookieConsentButtonLabel', title: 'Texto del botón "Aceptar"', type: 'object', group: 'cookies', hidden: ({ document }) => !document?.cookieConsentEnabled, fields: [{ name: 'es', title: 'Español', type: 'string', initialValue: 'Aceptar' }, { name: 'en', title: 'English', type: 'string', initialValue: 'Accept' }] }),
    defineField({ name: 'environment', title: 'Entorno activo', type: 'string', description: 'En "development" no se cargan scripts de analytics.', options: { list: [{ title: 'Producción', value: 'production' }, { title: 'Staging', value: 'staging' }, { title: 'Desarrollo (scripts desactivados)', value: 'development' }], layout: 'radio' }, initialValue: 'production' }),
  ],
  preview: {
    prepare() {
      return { title: 'Scripts y analítica', subtitle: 'Google Analytics, GTM, Meta Pixel...' }
    },
  },
})
