# Team Grid — Bloques dinámicos de información en el hover

**Fecha:** 2026-06-06
**Estado:** Aprobado, pendiente de implementación

## Contexto

La sección `team_grid` (Equipo editable) muestra un hover informativo por integrante con dos bloques fijos: "Formación" y "Enfoque" (cada uno una lista de strings: `formacion: string[]`, `enfoque: string[]`).

El usuario quiere poder agregar **bloques de información personalizados** al hover — no solo los dos fijos — cada uno con su propio título editable (ES/EN) y su propia lista de ítems, igual que hoy se agregan integrantes con el botón "+ Agregar".

## Diseño

### Estructura de datos

Reemplazar los campos fijos `formacion: string[]` y `enfoque: string[]` por un arreglo dinámico de bloques:

```ts
type I18n = { es: string; en: string }

interface HoverBlock {
  id: string
  title: I18n          // título editable, ej: "Formación", "Enfoque", "Idiomas"
  items: string[]      // lista de ítems de texto plano
}

interface TeamMember {
  id: string
  name: string
  role: I18n
  imageUrl: string
  hoverBlocks: HoverBlock[]   // reemplaza formacion + enfoque
  slug?: string
}
```

### Compatibilidad con datos existentes (sin migración de BD)

Los 6 integrantes seed ya tienen `formacion` y `enfoque` poblados en `section_registry.defaultSettings` y posiblemente en filas existentes de Supabase. No se hará migración de base de datos. En su lugar, se normaliza "on read":

Al leer un `TeamMember` que tenga `formacion`/`enfoque` (formato viejo) y **no** tenga `hoverBlocks`, se construye automáticamente:

```ts
hoverBlocks: [
  { id: 'auto-formacion', title: { es: 'Formación', en: 'Training' },    items: formacion ?? [] },
  { id: 'auto-enfoque',   title: { es: 'Enfoque',   en: 'Focus areas' }, items: enfoque ?? [] },
]
```

Esta normalización ocurre en un helper compartido (p.ej. `normalizeMember(member): TeamMember`) usado tanto por el formulario admin como por el render público. En cuanto el usuario guarda el integrante desde el admin, el registro queda persistido en el nuevo formato `hoverBlocks` (los campos viejos `formacion`/`enfoque` quedan ignorados pero no se borran del registro existente — simplemente dejan de usarse).

### Cambios en el formulario admin (`TeamGridForm.tsx`)

Reemplazar las dos secciones expandibles fijas "📚 Formación (hover)" y "🎯 Enfoque (hover)" por:

- Una lista de bloques (`hoverBlocks`), cada uno renderizado como sección expandible/colapsable (mismo patrón visual que hoy: botón de título + chevron).
- Dentro de cada bloque expandido:
  - Campo de texto para el **título del bloque** (i18n — respeta el selector de idioma ES/EN ya existente en el tab "Integrantes").
  - Lista de ítems editables con input + botón eliminar (igual al patrón actual de `formacion`/`enfoque`).
  - Botón **"+ Agregar ítem"** al final de la lista de ítems.
  - Botón para **eliminar el bloque completo** (ícono papelera junto al título del bloque).
- Botón **"+ Agregar bloque"** al final de la lista de bloques, que crea un bloque nuevo con título vacío (placeholder "Ej: Idiomas, Certificaciones...") e items vacíos.

Funciones nuevas en el componente (siguiendo el patrón de `addMember`/`removeMember`/`updList`/`addListItem`/`removeListItem`):
- `addHoverBlock(memberIdx)`
- `removeHoverBlock(memberIdx, blockIdx)`
- `updHoverBlockTitle(memberIdx, blockIdx, lang, value)`
- `updHoverBlockItem(memberIdx, blockIdx, itemIdx, value)`
- `addHoverBlockItem(memberIdx, blockIdx)`
- `removeHoverBlockItem(memberIdx, blockIdx, itemIdx)`

El estado `expandedSections` sigue funcionando con keys dinámicas tipo `block-${memberIdx}-${blockId}`.

### Cambios en el renderizado público (`TeamCard.tsx`)

Donde hoy se itera sobre `formacion` y `enfoque` por separado mostrando títulos fijos "Formación"/"Enfoque" (con su traducción), se itera sobre `hoverBlocks`, mostrando `block.title[locale]` como encabezado del bloque y `block.items` como lista debajo.

Se aplica `normalizeMember()` (importado de un módulo compartido, p.ej. `src/lib/team-member.ts`) antes de renderizar, para que tarjetas con datos en formato viejo (`formacion`/`enfoque`) sigan mostrándose correctamente sin pérdida de información.

### Actualización de `section-registry.ts`

Los 6 integrantes seed en `defaultSettings.members` se actualizan para usar `hoverBlocks` directamente (en lugar de `formacion`/`enfoque`), con dos bloques iniciales "Formación"/"Training" y "Enfoque"/"Focus areas" conteniendo los mismos datos que tienen hoy. Esto asegura que **integrantes nuevos** creados desde cero usen el formato nuevo desde el inicio.

## Fuera de alcance

- No se migran filas existentes en Supabase (la normalización on-read cubre ese caso).
- No se cambia el comportamiento visual del hover (estilos, animaciones) — solo la fuente de los datos que se muestran.
- No se agregan tipos de bloque distintos a "lista de texto" (sin íconos por ítem, sin rich text, etc.).
