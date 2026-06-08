-- Agregar todos los tipos de sección que usa el SECTION_REGISTRY actual
ALTER TABLE sections DROP CONSTRAINT IF EXISTS sections_type_check;
ALTER TABLE sections ADD CONSTRAINT sections_type_check CHECK (type IN (
  'hero',
  'benefits',
  'services_grid',
  'about_teaser',
  'medellin',
  'team_preview',
  'team_grid',
  'process',
  'cta',
  'text_image',
  'testimonials',
  'gallery',
  'faq',
  'contact_form',
  'metrics',
  'logos',
  'team',
  'map',
  'page_header',
  'cards_grid',
  'social_links',
  'custom_form',
  'custom',
  'service_detail'
));
