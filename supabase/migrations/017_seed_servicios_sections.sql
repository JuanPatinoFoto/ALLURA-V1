-- supabase/migrations/017_seed_servicios_sections.sql
-- Seeds the Servicios page sections so they are editable from the admin panel.

DO $$
DECLARE
  p_id uuid;
BEGIN
  SELECT id INTO p_id
  FROM pages
  WHERE site_id = '00000000-0000-0000-0000-000000000001'
    AND slug = '/servicios';

  IF p_id IS NULL THEN
    RAISE EXCEPTION 'Servicios page not found. Run 008_seed_pages.sql first.';
  END IF;

  DELETE FROM sections WHERE page_id = p_id;

  INSERT INTO sections (page_id, type, sort_order, is_visible, settings) VALUES

  (p_id, 'page_header', 0, true, $j${"style":"dark-centered","eyebrow":{"es":"Especialidades","en":"Specialties"},"title":{"es":"Servicios de excelencia","en":"Excellence in services"},"subtitle":{"es":"Odontología premium y medicina facial estética para pacientes internacionales que buscan resultados reales.","en":"Premium dentistry and aesthetic facial medicine for international patients seeking real results."},"imageUrl":"","ctaLabel":{"es":"","en":""},"ctaUrl":"","breadcrumb":{"es":"","en":""}}$j$::jsonb),

  (p_id, 'services_grid', 1, true, $j${"eyebrow":{"es":"Nuestros servicios","en":"Our services"},"title":{"es":"Especialidades Allura","en":"Allura Specialties"},"subtitle":{"es":"","en":""}}$j$::jsonb),

  (p_id, 'cta', 2, true, $j${"eyebrow":{"es":"Da el primer paso","en":"Take the first step"},"title":{"es":"Transforma tu bienestar.","en":"Transform your wellbeing."},"subtitle":{"es":"","en":""},"buttonLabel":{"es":"Contactar ahora","en":"Contact us now"}}$j$::jsonb);

END $$;
