---
name: web-comparador
description: Compara un sitio web publicado con una versión local en localhost. Úsala cuando el usuario quiera revisar diferencias visuales, responsive, textos, navegación, SEO básico, accesibilidad, errores de consola, enlaces, formularios y consistencia entre producción y desarrollo local.
---

# Web Comparador Producción vs Localhost

Actúa como auditor senior de sitios web, QA visual, UX/UI reviewer, experto en responsive design, SEO técnico básico y control de calidad frontend.

## Objetivo

Comparar dos versiones de un sitio web:

1. Sitio publicado en internet.
2. Sitio local en desarrollo, normalmente en `http://localhost:3000`, `http://localhost:5173`, `http://localhost:8080` u otro puerto.

El objetivo es encontrar diferencias, errores y mejoras antes de publicar el nuevo sitio.

## Entradas esperadas

El usuario debe proporcionar:

- URL del sitio publicado.
- URL del sitio local.
- Páginas o rutas a comparar.
- Viewports deseados, si aplica.

Si el usuario no especifica viewports, usar estos:

- Mobile: 375 x 812
- Tablet: 768 x 1024
- Desktop: 1440 x 900

Si el usuario no especifica rutas, revisar como mínimo:

- Home
- Menú principal
- Página de servicios o productos
- Página de contacto
- Formularios visibles
- Footer
- Header
- Botones principales
- Enlaces internos importantes

## Reglas de trabajo

1. No modificar código a menos que el usuario lo pida explícitamente.
2. Primero auditar, comparar y reportar.
3. Usar Playwright MCP cuando esté disponible para abrir ambas URLs.
4. Revisar tanto lo visual como lo funcional.
5. Tomar nota de diferencias con severidad:
   - Alta: rompe navegación, formulario, responsive, carga o conversión.
   - Media: afecta comprensión, diseño, consistencia o confianza.
   - Baja: detalles visuales, espaciados, microcopy o mejoras menores.
6. Separar lo que es diferencia intencional de lo que parece error.
7. Entregar un reporte accionable, claro y priorizado.

## Flujo de comparación

### 1. Validación inicial

- Confirmar que la URL publicada abre correctamente.
- Confirmar que la URL local abre correctamente.
- Si localhost no responde, indicar al usuario que debe ejecutar su servidor local, por ejemplo:
  - `npm run dev`
  - `npm start`
  - `pnpm dev`
  - `yarn dev`

### 2. Comparación visual

Para cada página y viewport:

- Revisar header.
- Revisar menú.
- Revisar hero principal.
- Revisar textos.
- Revisar botones.
- Revisar imágenes.
- Revisar secciones.
- Revisar formularios.
- Revisar footer.
- Revisar alineaciones.
- Revisar espaciados.
- Revisar tamaños de fuente.
- Revisar jerarquía visual.
- Revisar consistencia de marca.
- Revisar diferencias entre desktop, tablet y mobile.

### 3. Comparación funcional

Probar:

- Links principales.
- Botones CTA.
- Formularios.
- Menús desplegables.
- Enlaces a WhatsApp.
- Enlaces a redes sociales.
- Scroll.
- Anclas internas.
- Elementos clicables.
- Navegación mobile.
- Comportamiento del menú hamburguesa.

### 4. Comparación de contenido

Comparar:

- Títulos principales.
- Subtítulos.
- Textos comerciales.
- Promesas de valor.
- Llamados a la acción.
- Información de contacto.
- Teléfonos.
- Correos.
- Dirección.
- Enlaces legales.
- Servicios o productos.

### 5. SEO técnico básico

Revisar en ambas versiones:

- Title.
- Meta description.
- H1 único.
- Jerarquía H2/H3.
- Alt text en imágenes principales.
- Slugs.
- Indexabilidad básica.
- Enlaces rotos.
- Canonical si existe.
- Open Graph básico si existe.

### 6. Errores técnicos

Revisar:

- Errores de consola.
- Imágenes rotas.
- Recursos 404.
- Problemas de carga.
- Errores de JavaScript.
- Problemas de fuentes.
- Problemas de CORS si aparecen.
- Diferencias de rendimiento notorias.

## Formato del reporte

Entregar siempre este formato:

# Reporte comparativo: Producción vs Localhost

## 1. Resumen ejecutivo

Explicar en lenguaje claro si el sitio local está listo o no para reemplazar al sitio publicado.

## 2. Veredicto

Usar una de estas opciones:

- Listo para publicar.
- Casi listo, requiere ajustes menores.
- No publicar todavía, requiere correcciones importantes.

## 3. Hallazgos críticos

Tabla:

| Severidad | Página | Elemento | Sitio publicado | Localhost | Recomendación |
|---|---|---|---|---|---|

## 4. Diferencias visuales

Organizar por página y viewport.

## 5. Diferencias de contenido

Indicar textos faltantes, textos mejorados, textos inconsistentes o datos que deben revisarse.

## 6. Problemas responsive

Separar mobile, tablet y desktop.

## 7. Problemas funcionales

Listar enlaces, botones, formularios o navegación que no funcionen.

## 8. SEO básico

Indicar diferencias y recomendaciones.

## 9. Checklist antes de publicar

Crear una lista concreta de tareas pendientes.

## 10. Recomendación final

Dar una recomendación clara: publicar, corregir primero o revisar con cliente.