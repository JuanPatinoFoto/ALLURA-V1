-- supabase/migrations/013_seed_home_sections.sql
-- Seeds the 8 homepage sections so they are editable from the admin panel.
-- Uses DO block to get the page id dynamically and avoid hardcoding UUIDs.

DO $$
DECLARE
  home_page_id uuid;
BEGIN
  SELECT id INTO home_page_id
  FROM pages
  WHERE site_id = '00000000-0000-0000-0000-000000000001'
    AND slug = '/';

  IF home_page_id IS NULL THEN
    RAISE EXCEPTION 'Home page not found. Run 008_seed_pages.sql first.';
  END IF;

  -- Remove any existing sections for the home page to avoid duplicates
  DELETE FROM sections WHERE page_id = home_page_id;

  INSERT INTO sections (page_id, type, sort_order, is_visible, settings) VALUES

  (home_page_id, 'hero', 0, true, '{
    "eyebrow": {"es": "", "en": ""},
    "headline1": {"es": "Salud que inspira,", "en": "Health that inspires,"},
    "headline2": {"es": "viajes que transforman", "en": "journeys that transform"},
    "subtitle": {"es": "", "en": ""},
    "ctaPrimary": {"es": "Conoce nuestros servicios", "en": "Explore our services"},
    "ctaSecondary": {"es": "¿Cómo funciona?", "en": "How does it work?"},
    "imageUrl": ""
  }'::jsonb),

  (home_page_id, 'benefits', 1, true, '{
    "eyebrow": {"es": "Por qué elegirnos", "en": "Why choose us"},
    "title": {"es": "Una experiencia diseñada para ti", "en": "An experience designed for you"},
    "subtitle": {"es": "", "en": ""},
    "items": [
      {"icon": "🏆", "title": {"es": "Excelencia Profesional", "en": "Professional Excellence"}, "description": {"es": "", "en": ""}},
      {"icon": "🤝", "title": {"es": "Acompañamiento Personalizado", "en": "Personalized Support"}, "description": {"es": "", "en": ""}},
      {"icon": "🔬", "title": {"es": "Tecnología y Ética", "en": "Technology & Ethics"}, "description": {"es": "", "en": ""}}
    ]
  }'::jsonb),

  (home_page_id, 'services_grid', 2, true, '{
    "eyebrow": {"es": "Nuestros servicios", "en": "Our services"},
    "title": {"es": "Especialidades Allura", "en": "Allura Specialties"},
    "subtitle": {"es": "", "en": ""}
  }'::jsonb),

  (home_page_id, 'about_teaser', 3, true, '{
    "eyebrow": {"es": "Nuestra filosofía", "en": "Our philosophy"},
    "title": {"es": "", "en": ""},
    "subtitle": {"es": "", "en": ""},
    "body": {"es": "", "en": ""},
    "imageUrl": "",
    "ctaLabel": {"es": "Conoce nuestro equipo", "en": "Meet our team"}
  }'::jsonb),

  (home_page_id, 'medellin', 4, true, '{
    "eyebrow": {"es": "Por qué Medellín", "en": "Why Medellín"},
    "title": {"es": "", "en": ""},
    "subtitle": {"es": "", "en": ""},
    "items": [
      {"icon": "🏥", "title": {"es": "Excelencia médica", "en": "Medical excellence"}, "description": {"es": "", "en": ""}},
      {"icon": "🌤️", "title": {"es": "Recuperación más cómoda", "en": "More comfortable recovery"}, "description": {"es": "", "en": ""}},
      {"icon": "✈️", "title": {"es": "Conectividad y logística", "en": "Connectivity and logistics"}, "description": {"es": "", "en": ""}},
      {"icon": "🌿", "title": {"es": "Bienestar y experiencia", "en": "Wellness and experience"}, "description": {"es": "", "en": ""}}
    ]
  }'::jsonb),

  (home_page_id, 'team_preview', 5, true, '{
    "eyebrow": {"es": "Nuestro equipo", "en": "Our team"},
    "title": {"es": "Conoce nuestro equipo experto", "en": "Meet our expert team"},
    "subtitle": {"es": "", "en": ""}
  }'::jsonb),

  (home_page_id, 'process', 6, true, '{
    "eyebrow": {"es": "Cómo funciona", "en": "How it works"},
    "title": {"es": "Tu proceso con Allura", "en": "Your journey with Allura"},
    "steps": [
      {"number": "01", "title": {"es": "Cuéntanos tu objetivo", "en": "Share your goals"}, "description": {"es": "", "en": ""}},
      {"number": "02", "title": {"es": "Consulta virtual", "en": "Virtual consultation"}, "description": {"es": "", "en": ""}},
      {"number": "03", "title": {"es": "Plan personalizado", "en": "Personalized plan"}, "description": {"es": "", "en": ""}},
      {"number": "04", "title": {"es": "Tratamiento experto", "en": "Expert treatment"}, "description": {"es": "", "en": ""}}
    ]
  }'::jsonb),

  (home_page_id, 'cta', 7, true, '{
    "eyebrow": {"es": "Da el primer paso", "en": "Take the first step"},
    "title": {"es": "Transforma tu bienestar.", "en": "Transform your wellbeing."},
    "subtitle": {"es": "", "en": ""},
    "buttonLabel": {"es": "Contactar ahora", "en": "Contact us now"}
  }'::jsonb);

END $$;
