-- =============================================================================
-- Allura Healthcare — Supabase Content Seed
-- Idempotent: safe to run multiple times
-- =============================================================================

-- Constants
-- SITE_ID: '00000000-0000-0000-0000-000000000001'

-- =============================================================================
-- 1. SITE SETTINGS
-- =============================================================================

INSERT INTO site_settings (site_id, key, value)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'site_name',              '"Allura Healthcare"'::jsonb),
  ('00000000-0000-0000-0000-000000000001', 'tagline_es',             '"Turismo médico de excelencia en Medellín. Odontología premium y medicina facial estética con la calidez de Colombia."'::jsonb),
  ('00000000-0000-0000-0000-000000000001', 'tagline_en',             '"Excellence in medical tourism in Medellín. Premium dentistry and aesthetic facial medicine with the warmth of Colombia."'::jsonb),
  ('00000000-0000-0000-0000-000000000001', 'whatsapp_number',        '"+17862087572"'::jsonb),
  ('00000000-0000-0000-0000-000000000001', 'whatsapp_message_es',    '"Hola, me interesa conocer más sobre los servicios de Allura Healthcare"'::jsonb),
  ('00000000-0000-0000-0000-000000000001', 'whatsapp_message_en',    '"Hi, I am interested in learning more about Allura Healthcare services"'::jsonb),
  ('00000000-0000-0000-0000-000000000001', 'contact_email',          '"contact@allurahealthcare.com"'::jsonb),
  ('00000000-0000-0000-0000-000000000001', 'address',                '"Medellín, Antioquia, Colombia"'::jsonb),
  ('00000000-0000-0000-0000-000000000001', 'social_instagram',       '"https://www.instagram.com/allurahealthcare"'::jsonb),
  ('00000000-0000-0000-0000-000000000001', 'logo_url',               '"/images/allura-logo.png"'::jsonb)
ON CONFLICT (site_id, key) DO UPDATE
  SET value = EXCLUDED.value;

-- =============================================================================
-- 2. SERVICE CATEGORIES
-- Fixed UUIDs so services can reference them reliably
-- =============================================================================

INSERT INTO service_categories (id, site_id, title_i18n, slug, description_i18n, sort_order)
VALUES
  (
    '10000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Full Mouth Reconstruction", "en": "Full Mouth Reconstruction"}'::jsonb,
    'full-mouth-reconstruction',
    '{"es": "Solución integral para recuperar función, estabilidad y una sonrisa que vuelva a sentirse segura.", "en": "Comprehensive solution to restore function, stability and a smile that feels secure again."}'::jsonb,
    1
  ),
  (
    '10000000-0000-0000-0000-000000000002',
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Smile Makeover", "en": "Smile Makeover"}'::jsonb,
    'smile-makeover',
    '{"es": "Tu sonrisa, rediseñada con precisión artística.", "en": "Your smile, redesigned with artistic precision."}'::jsonb,
    2
  ),
  (
    '10000000-0000-0000-0000-000000000003',
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Allura Aligners", "en": "Allura Aligners"}'::jsonb,
    'aligners',
    '{"es": "Ortodoncia sin brackets, con planificación digital y seguimiento remoto para pacientes internacionales.", "en": "Bracket-free orthodontics with digital planning and remote monitoring for international patients."}'::jsonb,
    3
  ),
  (
    '10000000-0000-0000-0000-000000000004',
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Facial Harmony", "en": "Facial Harmony"}'::jsonb,
    'facial-harmony',
    '{"es": "Medicina facial estética de precisión para realzar tus rasgos con naturalidad.", "en": "Precision facial aesthetic medicine to enhance your features naturally."}'::jsonb,
    4
  )
ON CONFLICT (site_id, slug) DO UPDATE
  SET title_i18n       = EXCLUDED.title_i18n,
      description_i18n = EXCLUDED.description_i18n;

-- =============================================================================
-- 3. SERVICES
-- =============================================================================

-- ── Full Mouth Reconstruction ──────────────────────────────────────────────

INSERT INTO services (id, site_id, category_id, title_i18n, slug, description_i18n, body_i18n, image_url, status, sort_order)
VALUES
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000001',
    '{"es": "Implantes Unitarios y Múltiples", "en": "Single and Multiple Implants"}'::jsonb,
    'implantes-unitarios-multiples',
    '{"es": "Recupera tu sonrisa con implantes de titanio de alta precisión, diseñados para integrarse de forma natural con tu estructura dental.", "en": "Restore your smile with high-precision titanium implants, designed to naturally integrate with your dental structure."}'::jsonb,
    '{"es": "Recupera tu sonrisa con implantes de titanio de alta precisión, diseñados para integrarse de forma natural con tu estructura dental.", "en": "Restore your smile with high-precision titanium implants, designed to naturally integrate with your dental structure."}'::jsonb,
    '/images/imagenes_web/Allura-Full-Mouth-Reconstruction.jpg',
    'published',
    1
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000001',
    '{"es": "Implantes All-on-X", "en": "All-on-X Implants"}'::jsonb,
    'implantes-all-on-x',
    '{"es": "Rehabilitación completa de arcada con 4 o 6 implantes estratégicos. Solución fija, estética y funcional para pacientes que han perdido todos o casi todos sus dientes.", "en": "Complete arch rehabilitation with 4 or 6 strategic implants. A fixed, aesthetic and functional solution for patients who have lost all or most of their teeth."}'::jsonb,
    '{"es": "Rehabilitación completa de arcada con 4 o 6 implantes estratégicos. Solución fija, estética y funcional para pacientes que han perdido todos o casi todos sus dientes.", "en": "Complete arch rehabilitation with 4 or 6 strategic implants. A fixed, aesthetic and functional solution for patients who have lost all or most of their teeth."}'::jsonb,
    '/images/imagenes_web/Allura-Full-Mouth-Reconstruction.jpg',
    'published',
    2
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000001',
    '{"es": "Rehabilitación Oral Completa", "en": "Full Oral Rehabilitation"}'::jsonb,
    'rehabilitacion-oral-completa',
    '{"es": "Plan integral que combina implantes, coronas, prótesis y tratamientos de tejidos blandos para restaurar la función masticatoria y la estética de toda la boca.", "en": "Comprehensive plan combining implants, crowns, prosthetics and soft tissue treatments to restore masticatory function and the aesthetics of the entire mouth."}'::jsonb,
    '{"es": "Plan integral que combina implantes, coronas, prótesis y tratamientos de tejidos blandos para restaurar la función masticatoria y la estética de toda la boca.", "en": "Comprehensive plan combining implants, crowns, prosthetics and soft tissue treatments to restore masticatory function and the aesthetics of the entire mouth."}'::jsonb,
    '/images/imagenes_web/Allura-Full-Mouth-Reconstruction.jpg',
    'published',
    3
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000001',
    '{"es": "Prótesis Fijas sobre Implantes", "en": "Fixed Prostheses on Implants"}'::jsonb,
    'protesis-fijas-implantes',
    '{"es": "Coronas y puentes permanentes atornillados sobre implantes. Máxima estabilidad, apariencia natural y sin necesidad de adhesivos.", "en": "Permanent crowns and bridges screwed onto implants. Maximum stability, natural appearance and no need for adhesives."}'::jsonb,
    '{"es": "Coronas y puentes permanentes atornillados sobre implantes. Máxima estabilidad, apariencia natural y sin necesidad de adhesivos.", "en": "Permanent crowns and bridges screwed onto implants. Maximum stability, natural appearance and no need for adhesives."}'::jsonb,
    '/images/imagenes_web/Allura-Full-Mouth-Reconstruction.jpg',
    'published',
    4
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000001',
    '{"es": "Reemplazo de Restauraciones Fallidas", "en": "Replacement of Failed Restorations"}'::jsonb,
    'reemplazo-restauraciones-fallidas',
    '{"es": "Diagnóstico y reemplazo de implantes, coronas o puentes que han fallado. Evaluamos la causa raíz y diseñamos una solución duradera.", "en": "Diagnosis and replacement of failed implants, crowns or bridges. We evaluate the root cause and design a lasting solution."}'::jsonb,
    '{"es": "Diagnóstico y reemplazo de implantes, coronas o puentes que han fallado. Evaluamos la causa raíz y diseñamos una solución duradera.", "en": "Diagnosis and replacement of failed implants, crowns or bridges. We evaluate the root cause and design a lasting solution."}'::jsonb,
    '/images/imagenes_web/Allura-Full-Mouth-Reconstruction.jpg',
    'published',
    5
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000001',
    '{"es": "Planificación Digital 3D", "en": "3D Digital Planning"}'::jsonb,
    'planificacion-digital-3d',
    '{"es": "Utilizamos tecnología de escáner intraoral y software de planificación 3D para diseñar tu tratamiento con precisión milimétrica antes de comenzar.", "en": "We use intraoral scanner technology and 3D planning software to design your treatment with millimeter precision before starting."}'::jsonb,
    '{"es": "Utilizamos tecnología de escáner intraoral y software de planificación 3D para diseñar tu tratamiento con precisión milimétrica antes de comenzar.", "en": "We use intraoral scanner technology and 3D planning software to design your treatment with millimeter precision before starting."}'::jsonb,
    '/images/imagenes_web/Allura-Full-Mouth-Reconstruction.jpg',
    'published',
    6
  )
ON CONFLICT (site_id, slug) DO UPDATE
  SET title_i18n       = EXCLUDED.title_i18n,
      description_i18n = EXCLUDED.description_i18n;

-- ── Smile Makeover ─────────────────────────────────────────────────────────

INSERT INTO services (id, site_id, category_id, title_i18n, slug, description_i18n, body_i18n, image_url, status, sort_order)
VALUES
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000002',
    '{"es": "Carillas en Porcelana", "en": "Porcelain Veneers"}'::jsonb,
    'carillas-porcelana',
    '{"es": "Láminas ultrafinas de porcelana que se adhieren a la superficie del diente para transformar forma, color y tamaño. Resultados naturales y duraderos.", "en": "Ultra-thin porcelain sheets that adhere to the tooth surface to transform shape, color and size. Natural and lasting results."}'::jsonb,
    '{"es": "Láminas ultrafinas de porcelana que se adhieren a la superficie del diente para transformar forma, color y tamaño. Resultados naturales y duraderos.", "en": "Ultra-thin porcelain sheets that adhere to the tooth surface to transform shape, color and size. Natural and lasting results."}'::jsonb,
    '/images/imagenes_web/Cosmetic_dentistry_allurahealthcare.jpg',
    'published',
    1
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000002',
    '{"es": "Diseño Digital de Sonrisa", "en": "Digital Smile Design"}'::jsonb,
    'diseno-digital-sonrisa',
    '{"es": "Tecnología de simulación que te permite ver cómo lucirá tu nueva sonrisa antes de comenzar cualquier procedimiento. Planificación colaborativa entre paciente y especialista.", "en": "Simulation technology that lets you see how your new smile will look before starting any procedure. Collaborative planning between patient and specialist."}'::jsonb,
    '{"es": "Tecnología de simulación que te permite ver cómo lucirá tu nueva sonrisa antes de comenzar cualquier procedimiento. Planificación colaborativa entre paciente y especialista.", "en": "Simulation technology that lets you see how your new smile will look before starting any procedure. Collaborative planning between patient and specialist."}'::jsonb,
    '/images/imagenes_web/Cosmetic_dentistry_allurahealthcare.jpg',
    'published',
    2
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000002',
    '{"es": "Coronas en Porcelana", "en": "Porcelain Crowns"}'::jsonb,
    'coronas-porcelana',
    '{"es": "Restauraciones que cubren el diente completo, ideales para dientes con daño estructural significativo. Estética superior con resistencia clínica.", "en": "Restorations that cover the entire tooth, ideal for teeth with significant structural damage. Superior aesthetics with clinical strength."}'::jsonb,
    '{"es": "Restauraciones que cubren el diente completo, ideales para dientes con daño estructural significativo. Estética superior con resistencia clínica.", "en": "Restorations that cover the entire tooth, ideal for teeth with significant structural damage. Superior aesthetics with clinical strength."}'::jsonb,
    '/images/imagenes_web/Cosmetic_dentistry_allurahealthcare.jpg',
    'published',
    3
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000002',
    '{"es": "Restauraciones Estéticas Avanzadas", "en": "Advanced Aesthetic Restorations"}'::jsonb,
    'restauraciones-esteticas-avanzadas',
    '{"es": "Uso de resinas de última generación y técnicas de estratificación para restauraciones invisibles que replican la apariencia natural del esmalte dental.", "en": "Use of next-generation resins and layering techniques for invisible restorations that replicate the natural appearance of tooth enamel."}'::jsonb,
    '{"es": "Uso de resinas de última generación y técnicas de estratificación para restauraciones invisibles que replican la apariencia natural del esmalte dental.", "en": "Use of next-generation resins and layering techniques for invisible restorations that replicate the natural appearance of tooth enamel."}'::jsonb,
    '/images/imagenes_web/Cosmetic_dentistry_allurahealthcare.jpg',
    'published',
    4
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000002',
    '{"es": "Blanqueamiento Dental Profesional", "en": "Professional Teeth Whitening"}'::jsonb,
    'blanqueamiento-dental-profesional',
    '{"es": "Aclaramiento controlado con tecnología LED y agentes de blanqueamiento de uso clínico. Resultados visibles desde la primera sesión.", "en": "Controlled lightening with LED technology and clinical-grade whitening agents. Visible results from the first session."}'::jsonb,
    '{"es": "Aclaramiento controlado con tecnología LED y agentes de blanqueamiento de uso clínico. Resultados visibles desde la primera sesión.", "en": "Controlled lightening with LED technology and clinical-grade whitening agents. Visible results from the first session."}'::jsonb,
    '/images/imagenes_web/Cosmetic_dentistry_allurahealthcare.jpg',
    'published',
    5
  )
ON CONFLICT (site_id, slug) DO UPDATE
  SET title_i18n       = EXCLUDED.title_i18n,
      description_i18n = EXCLUDED.description_i18n;

-- ── Aligners ───────────────────────────────────────────────────────────────

INSERT INTO services (id, site_id, category_id, title_i18n, slug, description_i18n, body_i18n, image_url, status, sort_order)
VALUES
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000003',
    '{"es": "Invisalign", "en": "Invisalign"}'::jsonb,
    'invisalign',
    '{"es": "Sistema de alineadores transparentes líder mundial. Planificación 3D personalizada con seguimiento digital remoto para pacientes internacionales.", "en": "World''s leading clear aligner system. Personalized 3D planning with remote digital monitoring for international patients."}'::jsonb,
    '{"es": "Sistema de alineadores transparentes líder mundial. Planificación 3D personalizada con seguimiento digital remoto para pacientes internacionales.", "en": "World''s leading clear aligner system. Personalized 3D planning with remote digital monitoring for international patients."}'::jsonb,
    '/images/imagenes_web/Invisalign_Allurahealthcare_.jpg',
    'published',
    1
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000003',
    '{"es": "Alineadores Transparentes", "en": "Clear Aligners"}'::jsonb,
    'alineadores-transparentes',
    '{"es": "Opciones de alineadores de alta calidad adaptadas a cada presupuesto y caso clínico. Misma tecnología de planificación digital con diferentes opciones de marca.", "en": "High-quality aligner options adapted to each budget and clinical case. Same digital planning technology with different brand options."}'::jsonb,
    '{"es": "Opciones de alineadores de alta calidad adaptadas a cada presupuesto y caso clínico. Misma tecnología de planificación digital con diferentes opciones de marca.", "en": "High-quality aligner options adapted to each budget and clinical case. Same digital planning technology with different brand options."}'::jsonb,
    '/images/imagenes_web/Invisalign_Allurahealthcare_.jpg',
    'published',
    2
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000003',
    '{"es": "Escaneo Digital 3D", "en": "3D Digital Scanning"}'::jsonb,
    'escaneo-digital-3d',
    '{"es": "Impresiones digitales precisas sin materiales incómodos. El escáner intraoral captura cada detalle de tu dentición para una planificación exacta.", "en": "Precise digital impressions without uncomfortable materials. The intraoral scanner captures every detail of your dentition for exact planning."}'::jsonb,
    '{"es": "Impresiones digitales precisas sin materiales incómodos. El escáner intraoral captura cada detalle de tu dentición para una planificación exacta.", "en": "Precise digital impressions without uncomfortable materials. The intraoral scanner captures every detail of your dentition for exact planning."}'::jsonb,
    '/images/imagenes_web/Invisalign_Allurahealthcare_.jpg',
    'published',
    3
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000003',
    '{"es": "Planificación Personalizada", "en": "Personalized Planning"}'::jsonb,
    'planificacion-personalizada',
    '{"es": "Diseño de tu recorrido de tratamiento paso a paso, con proyección de movimientos dentales y resultado final antes de comenzar.", "en": "Design of your treatment journey step by step, with projection of dental movements and final result before starting."}'::jsonb,
    '{"es": "Diseño de tu recorrido de tratamiento paso a paso, con proyección de movimientos dentales y resultado final antes de comenzar.", "en": "Design of your treatment journey step by step, with projection of dental movements and final result before starting."}'::jsonb,
    '/images/imagenes_web/Invisalign_Allurahealthcare_.jpg',
    'published',
    4
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000003',
    '{"es": "Seguimiento Remoto", "en": "Remote Monitoring"}'::jsonb,
    'seguimiento-remoto',
    '{"es": "Protocolo de control digital para pacientes internacionales: monitoreo del progreso vía app y videollamadas periódicas con tu ortodoncista.", "en": "Digital control protocol for international patients: progress monitoring via app and periodic video calls with your orthodontist."}'::jsonb,
    '{"es": "Protocolo de control digital para pacientes internacionales: monitoreo del progreso vía app y videollamadas periódicas con tu ortodoncista.", "en": "Digital control protocol for international patients: progress monitoring via app and periodic video calls with your orthodontist."}'::jsonb,
    '/images/imagenes_web/Invisalign_Allurahealthcare_.jpg',
    'published',
    5
  )
ON CONFLICT (site_id, slug) DO UPDATE
  SET title_i18n       = EXCLUDED.title_i18n,
      description_i18n = EXCLUDED.description_i18n;

-- ── Facial Harmony ─────────────────────────────────────────────────────────

INSERT INTO services (id, site_id, category_id, title_i18n, slug, description_i18n, body_i18n, image_url, status, sort_order)
VALUES
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000004',
    '{"es": "Evaluación Facial Estructural", "en": "Structural Facial Assessment"}'::jsonb,
    'evaluacion-facial-estructural',
    '{"es": "Análisis integral de proporciones, simetría y estructura facial para diseñar un plan de tratamiento personalizado que realce tus rasgos naturales.", "en": "Comprehensive analysis of facial proportions, symmetry and structure to design a personalized treatment plan that enhances your natural features."}'::jsonb,
    '{"es": "Análisis integral de proporciones, simetría y estructura facial para diseñar un plan de tratamiento personalizado que realce tus rasgos naturales.", "en": "Comprehensive analysis of facial proportions, symmetry and structure to design a personalized treatment plan that enhances your natural features."}'::jsonb,
    '/images/imagenes_web/cirugia-estetica-facial-allurahealthcare.png',
    'published',
    1
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000004',
    '{"es": "Toxina Botulínica y Rellenos Dérmicos", "en": "Botulinum Toxin and Dermal Fillers"}'::jsonb,
    'toxina-botulinica-rellenos',
    '{"es": "Tratamientos mínimamente invasivos para suavizar líneas de expresión y restaurar volumen facial. Resultados naturales con técnicas de precisión.", "en": "Minimally invasive treatments to smooth expression lines and restore facial volume. Natural results with precision techniques."}'::jsonb,
    '{"es": "Tratamientos mínimamente invasivos para suavizar líneas de expresión y restaurar volumen facial. Resultados naturales con técnicas de precisión.", "en": "Minimally invasive treatments to smooth expression lines and restore facial volume. Natural results with precision techniques."}'::jsonb,
    '/images/imagenes_web/cirugia-estetica-facial-allurahealthcare.png',
    'published',
    2
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000004',
    '{"es": "Bioestimuladores y Rejuvenecimiento", "en": "Biostimulators and Rejuvenation"}'::jsonb,
    'bioestimuladores-rejuvenecimiento',
    '{"es": "Estimulación de la producción natural de colágeno para una mejora progresiva y duradera de la calidad de la piel y el tono facial.", "en": "Stimulation of natural collagen production for a progressive and lasting improvement in skin quality and facial tone."}'::jsonb,
    '{"es": "Estimulación de la producción natural de colágeno para una mejora progresiva y duradera de la calidad de la piel y el tono facial.", "en": "Stimulation of natural collagen production for a progressive and lasting improvement in skin quality and facial tone."}'::jsonb,
    '/images/imagenes_web/cirugia-estetica-facial-allurahealthcare.png',
    'published',
    3
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000004',
    '{"es": "Blefaroplastia", "en": "Blepharoplasty"}'::jsonb,
    'blefaroplastia',
    '{"es": "Cirugía de rejuvenecimiento de párpados superiores e inferiores. Elimina el exceso de piel y bolsas para una mirada más descansada y juvenil.", "en": "Rejuvenation surgery for upper and lower eyelids. Removes excess skin and bags for a more rested and youthful look."}'::jsonb,
    '{"es": "Cirugía de rejuvenecimiento de párpados superiores e inferiores. Elimina el exceso de piel y bolsas para una mirada más descansada y juvenil.", "en": "Rejuvenation surgery for upper and lower eyelids. Removes excess skin and bags for a more rested and youthful look."}'::jsonb,
    '/images/imagenes_web/cirugia-estetica-facial-allurahealthcare.png',
    'published',
    4
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000004',
    '{"es": "Rinoplastia", "en": "Rhinoplasty"}'::jsonb,
    'rinoplastia',
    '{"es": "Cirugía de remodelación nasal para mejorar estética y función respiratoria. Planificación digital previa para visualizar el resultado esperado.", "en": "Nasal remodeling surgery to improve aesthetics and respiratory function. Prior digital planning to visualize the expected result."}'::jsonb,
    '{"es": "Cirugía de remodelación nasal para mejorar estética y función respiratoria. Planificación digital previa para visualizar el resultado esperado.", "en": "Nasal remodeling surgery to improve aesthetics and respiratory function. Prior digital planning to visualize the expected result."}'::jsonb,
    '/images/imagenes_web/cirugia-estetica-facial-allurahealthcare.png',
    'published',
    5
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000004',
    '{"es": "Lifting Facial", "en": "Facelift"}'::jsonb,
    'lifting-facial',
    '{"es": "Procedimiento quirúrgico para tensar y reposicionar tejidos faciales, logrando un rejuvenecimiento natural y duradero sin apariencia operada.", "en": "Surgical procedure to tighten and reposition facial tissues, achieving natural and lasting rejuvenation without an operated appearance."}'::jsonb,
    '{"es": "Procedimiento quirúrgico para tensar y reposicionar tejidos faciales, logrando un rejuvenecimiento natural y duradero sin apariencia operada.", "en": "Surgical procedure to tighten and reposition facial tissues, achieving natural and lasting rejuvenation without an operated appearance."}'::jsonb,
    '/images/imagenes_web/cirugia-estetica-facial-allurahealthcare.png',
    'published',
    6
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000004',
    '{"es": "Mentoplastia", "en": "Mentoplasty"}'::jsonb,
    'mentoplastia',
    '{"es": "Procedimiento para redefinir el contorno del mentón mediante implantes o reducción ósea, mejorando el perfil facial y la armonía general.", "en": "Procedure to redefine chin contour through implants or bone reduction, improving facial profile and overall harmony."}'::jsonb,
    '{"es": "Procedimiento para redefinir el contorno del mentón mediante implantes o reducción ósea, mejorando el perfil facial y la armonía general.", "en": "Procedure to redefine chin contour through implants or bone reduction, improving facial profile and overall harmony."}'::jsonb,
    '/images/imagenes_web/cirugia-estetica-facial-allurahealthcare.png',
    'published',
    7
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000004',
    '{"es": "Coordinación con Cirugía Maxilofacial", "en": "Maxillofacial Surgery Coordination"}'::jsonb,
    'coordinacion-cirugia-maxilofacial',
    '{"es": "Coordinación integral con cirujanos maxilofaciales para casos complejos que requieren corrección ósea, cirugía ortognática o reconstrucción facial.", "en": "Comprehensive coordination with maxillofacial surgeons for complex cases requiring bone correction, orthognathic surgery or facial reconstruction."}'::jsonb,
    '{"es": "Coordinación integral con cirujanos maxilofaciales para casos complejos que requieren corrección ósea, cirugía ortognática o reconstrucción facial.", "en": "Comprehensive coordination with maxillofacial surgeons for complex cases requiring bone correction, orthognathic surgery or facial reconstruction."}'::jsonb,
    '/images/imagenes_web/cirugia-estetica-facial-allurahealthcare.png',
    'published',
    8
  )
ON CONFLICT (site_id, slug) DO UPDATE
  SET title_i18n       = EXCLUDED.title_i18n,
      description_i18n = EXCLUDED.description_i18n;

-- =============================================================================
-- 4. TEAM MEMBERS
-- =============================================================================

INSERT INTO team_members (site_id, name, slug, role_i18n, bio_i18n, photo_url, sort_order, is_visible)
VALUES
  (
    '00000000-0000-0000-0000-000000000001',
    'Dra. Johanna Jaramillo',
    'dra-johanna-jaramillo',
    '{"es": "Odontóloga, Especialista en Prótesis Periodontal", "en": "Dentist, Specialist in Periodontal Prosthetics"}'::jsonb,
    '{"es": "Odontóloga de la Universidad CES (1999), Especialista en Prostodoncia Periodontal (2004). Key Opinion Leader en implantología, Miembro de redes internacionales especializadas, Docente desde 2006 y Conferencista nacional e internacional. Enfoque clínico en implantes dentales y rehabilitaciones complejas, casos interdisciplinarios y fotografía clínica digital.", "en": "Dentist from Universidad CES (1999), Specialist in Periodontal Prosthodontics (2004). Key Opinion Leader in implantology, Member of specialized international networks, Lecturer since 2006 and national and international speaker. Clinical focus on dental implants and complex rehabilitations, interdisciplinary cases and digital clinical photography."}'::jsonb,
    '/images/team/dra-johanna-jaramillo.jpg',
    1,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Dra. Daniela Alzate',
    'dra-daniela-alzate',
    '{"es": "Odontóloga, Ortodoncista y MSc.", "en": "Dentist, Orthodontist and MSc."}'::jsonb,
    '{"es": "Odontóloga de la Universidad CES (2013), Especialista en Ortodoncia (2020), MSc. en Ciencias Odontológicas (2020). Coautora en American Journal of Orthodontics and Dentofacial Orthopedics. Enfoque clínico en ortodoncia moderna y alineadores transparentes, armonización facial y planes basados en evidencia.", "en": "Dentist from Universidad CES (2013), Specialist in Orthodontics (2020), MSc. in Dental Sciences (2020). Co-author in the American Journal of Orthodontics and Dentofacial Orthopedics. Clinical focus on modern orthodontics and clear aligners, facial harmonization and evidence-based plans."}'::jsonb,
    '/images/team/dra-daniela-alzate.jpg',
    2,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Dr. Sebastián Muñoz',
    'dr-sebastian-munoz',
    '{"es": "Odontólogo MSc, Especialista en Prótesis Periodontal", "en": "Dentist MSc, Specialist in Periodontal Prosthetics"}'::jsonb,
    '{"es": "Odontólogo de la Universidad CES (2000), Especialista (2005), MSc. (2018), Máster en estética dental (gIDE / UCLA). Director de posgrado en rehabilitación oral, Conferencista internacional. Enfoque clínico en rehabilitación oral completa, estética dental avanzada y casos complejos.", "en": "Dentist from Universidad CES (2000), Specialist (2005), MSc. (2018), Master in dental aesthetics (gIDE / UCLA). Director of postgraduate program in oral rehabilitation, International speaker. Clinical focus on complete oral rehabilitation, advanced dental aesthetics and complex cases."}'::jsonb,
    '/images/team/dr-sebastian-munoz.jpg',
    3,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Dr. Santiago Henao',
    'dr-santiago-henao',
    '{"es": "Odontólogo, Ortodoncista, Diamond Top Doctor Invisalign", "en": "Dentist, Orthodontist, Diamond Top Doctor Invisalign"}'::jsonb,
    '{"es": "Odontólogo de la UAM (2012), Ortodoncia y Ortopedia Maxilofacial – México (2015). Diamond Top Doctor Invisalign, Key Opinion Leader en alineadores. Enfoque clínico en tratamientos con Invisalign, ortodoncia digital y estética de sonrisa.", "en": "Dentist from UAM (2012), Orthodontics and Maxillofacial Orthopedics – Mexico (2015). Diamond Top Doctor Invisalign, Key Opinion Leader in aligners. Clinical focus on Invisalign treatments, digital orthodontics and smile aesthetics."}'::jsonb,
    '/images/team/dr-santiago-henao.jpg',
    4,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Dr. Iván Darío Jiménez',
    'dr-ivan-dario-jimenez',
    '{"es": "Odontólogo, Ortodoncista y MSc.", "en": "Dentist, Orthodontist and MSc."}'::jsonb,
    '{"es": "Ortodoncia y Maestría de la University of Manitoba, Canadá. American Board of Orthodontics Certification. Conferencista internacional en investigación, Miembro de asociaciones globales. Enfoque clínico en crecimiento y desarrollo facial, ortodoncia avanzada y equilibrio funcional y estético.", "en": "Orthodontics and Master''s from the University of Manitoba, Canada. American Board of Orthodontics Certification. International speaker in research, Member of global associations. Clinical focus on facial growth and development, advanced orthodontics and functional and aesthetic balance."}'::jsonb,
    '/images/team/dr-ivan-dario-jimenez.jpg',
    5,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Dr. Alejandro Cifuentes',
    'dr-alejandro-cifuentes',
    '{"es": "Odontólogo, Especialista en Rehabilitación Oral", "en": "Dentist, Specialist in Oral Rehabilitation"}'::jsonb,
    '{"es": "Odontólogo de la Universidad CES (2013), Especialista en Rehabilitación Oral (2020). Director técnico de laboratorio dental de alta precisión, Docente en diplomado de estética (desde 2022). Enfoque clínico en diseño de sonrisa y carillas, rehabilitación oral completa y odontología digital.", "en": "Dentist from Universidad CES (2013), Specialist in Oral Rehabilitation (2020). Technical director of high-precision dental laboratory, Lecturer in aesthetics diploma (since 2022). Clinical focus on smile design and veneers, complete oral rehabilitation and digital dentistry."}'::jsonb,
    '/images/team/dr-alejandro-cifuentes.jpg',
    6,
    true
  )
ON CONFLICT (site_id, slug) DO UPDATE
  SET name       = EXCLUDED.name,
      role_i18n  = EXCLUDED.role_i18n,
      bio_i18n   = EXCLUDED.bio_i18n;

-- =============================================================================
-- 5. FAQS
-- No unique slug constraint — INSERT only (duplicates harmless if run once)
-- =============================================================================

INSERT INTO faqs (site_id, question_i18n, answer_i18n, sort_order, is_visible)
VALUES
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "¿Necesito hablar español para recibir atención?", "en": "Do I need to speak Spanish to receive care?"}'::jsonb,
    '{"es": "No. Contamos con coordinadores bilingües (español e inglés) disponibles durante todo el proceso.", "en": "No. We have bilingual coordinators (Spanish and English) available throughout the entire process."}'::jsonb,
    1,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "¿Qué pasa si necesito seguimiento después de regresar a mi país?", "en": "What happens if I need follow-up after returning to my country?"}'::jsonb,
    '{"es": "Ofrecemos seguimiento remoto con videollamadas y comunicación directa con tu especialista vía WhatsApp.", "en": "We offer remote follow-up with video calls and direct communication with your specialist via WhatsApp."}'::jsonb,
    2,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "¿Los procedimientos incluyen garantía?", "en": "Do procedures include a guarantee?"}'::jsonb,
    '{"es": "Sí. Todos nuestros tratamientos incluyen garantías según el tipo de procedimiento, con protocolos claros de seguimiento.", "en": "Yes. All our treatments include guarantees according to the type of procedure, with clear follow-up protocols."}'::jsonb,
    3,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "¿Puedo combinar varios tratamientos en un mismo viaje?", "en": "Can I combine several treatments in one trip?"}'::jsonb,
    '{"es": "Absolutamente. De hecho, muchos pacientes optimizan su viaje combinando tratamientos odontológicos y de medicina facial estética.", "en": "Absolutely. In fact, many patients optimize their trip by combining dental and facial aesthetic medicine treatments."}'::jsonb,
    4,
    true
  );

-- =============================================================================
-- 6. TESTIMONIALS
-- INSERT only (duplicates harmless if run once)
-- =============================================================================

INSERT INTO testimonials (site_id, author_name, author_location, content_i18n, rating, is_visible, sort_order)
VALUES
  (
    '00000000-0000-0000-0000-000000000001',
    'Sarah M.',
    'Miami, FL',
    '{"es": "Vine a Allura para un tratamiento de implantes y superó todas mis expectativas. El equipo me hizo sentir completamente cómoda desde el primer día. ¡Mi sonrisa luce increíble!", "en": "I came to Allura for an implant treatment and it exceeded all my expectations. The team made me feel completely comfortable from day one. My smile looks incredible!"}'::jsonb,
    5,
    true,
    1
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Carlos R.',
    'Nueva York, NY',
    '{"es": "El proceso con Invisalign fue perfecto. El seguimiento remoto funcionó muy bien y no tuve que preocuparme por nada. Altamente recomendado para pacientes internacionales.", "en": "The Invisalign process was perfect. The remote monitoring worked very well and I didn''t have to worry about anything. Highly recommended for international patients."}'::jsonb,
    5,
    true,
    2
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'María L.',
    'Bogotá, Colombia',
    '{"es": "Me realizaron un Smile Makeover completo con carillas en porcelana. El resultado es exactamente lo que esperaba. El Dr. Muñoz es un artista.", "en": "I had a complete Smile Makeover with porcelain veneers. The result is exactly what I expected. Dr. Muñoz is an artist."}'::jsonb,
    5,
    true,
    3
  );

-- =============================================================================
-- 7. BLOG POSTS
-- =============================================================================

INSERT INTO blog_posts (site_id, title_i18n, slug, excerpt_i18n, body_i18n, author, status, published_at)
VALUES
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Implantes dentales: qué esperar antes, durante y después del procedimiento", "en": "Dental implants: what to expect before, during and after the procedure"}'::jsonb,
    'implantes-dentales-que-esperar',
    '{"es": "Una guía completa para pacientes internacionales que consideran un tratamiento de implantología en Medellín.", "en": "A complete guide for international patients considering implantology treatment in Medellín."}'::jsonb,
    '{"es": "Los implantes dentales son una de las soluciones más efectivas y duraderas para reemplazar dientes perdidos. En Allura Healthcare, utilizamos tecnología 3D para planificar cada caso con precisión milimétrica.", "en": "Dental implants are one of the most effective and long-lasting solutions for replacing missing teeth. At Allura Healthcare, we use 3D technology to plan each case with millimeter precision."}'::jsonb,
    'Allura Healthcare',
    'published',
    '2026-05-01'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Toxina botulínica: mitos y realidades desde la perspectiva médica", "en": "Botulinum toxin: myths and realities from a medical perspective"}'::jsonb,
    'toxina-botulinica-mitos-realidades',
    '{"es": "Resolvemos las dudas más frecuentes sobre el uso de toxina botulínica y cuándo es la opción adecuada.", "en": "We answer the most frequent questions about the use of botulinum toxin and when it is the right option."}'::jsonb,
    '{"es": "La toxina botulínica es uno de los tratamientos más seguros y efectivos en medicina facial estética cuando es aplicado por profesionales certificados.", "en": "Botulinum toxin is one of the safest and most effective treatments in facial aesthetic medicine when applied by certified professionals."}'::jsonb,
    'Allura Healthcare',
    'published',
    '2026-04-01'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Por qué Medellín se convirtió en el destino favorito para el turismo dental", "en": "Why Medellín became the top destination for dental tourism"}'::jsonb,
    'medellin-destino-turismo-dental',
    '{"es": "Calidad internacional, costos competitivos y una ciudad vibrante: las razones detrás del crecimiento del turismo médico en Colombia.", "en": "International quality, competitive costs and a vibrant city: the reasons behind the growth of medical tourism in Colombia."}'::jsonb,
    '{"es": "Medellín ha emergido como uno de los principales destinos de turismo médico en América Latina gracias a su infraestructura de salud de clase mundial y sus especialistas de alto nivel.", "en": "Medellín has emerged as one of the leading medical tourism destinations in Latin America thanks to its world-class health infrastructure and top-level specialists."}'::jsonb,
    'Allura Healthcare',
    'published',
    '2026-03-01'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Allura Aligners vs. Invisalign: guía para elegir el mejor alineador para ti", "en": "Allura Aligners vs. Invisalign: guide to choosing the best aligner for you"}'::jsonb,
    'allura-aligners-vs-invisalign',
    '{"es": "Comparamos las opciones de ortodoncia invisible más avanzadas y te ayudamos a entender cuál se adapta mejor a tu caso.", "en": "We compare the most advanced invisible orthodontics options and help you understand which fits your case best."}'::jsonb,
    '{"es": "Elegir entre diferentes sistemas de alineadores depende de múltiples factores: la complejidad de tu caso, tu estilo de vida y tus objetivos de tratamiento.", "en": "Choosing between different aligner systems depends on multiple factors: the complexity of your case, your lifestyle and your treatment goals."}'::jsonb,
    'Allura Healthcare',
    'published',
    '2026-02-01'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Cómo preparar tu viaje médico a Medellín: lista de verificación completa", "en": "How to prepare your medical trip to Medellín: complete checklist"}'::jsonb,
    'preparar-viaje-medico-medellin',
    '{"es": "Documentos, cuidados pre-operatorios, alojamiento y actividades: todo lo que necesitas saber antes de volar.", "en": "Documents, pre-operative care, accommodation and activities: everything you need to know before you fly."}'::jsonb,
    '{"es": "Preparar un viaje médico requiere planificación cuidadosa. En Allura Healthcare coordinamos cada detalle para que tu experiencia sea segura y cómoda.", "en": "Preparing a medical trip requires careful planning. At Allura Healthcare we coordinate every detail to make your experience safe and comfortable."}'::jsonb,
    'Allura Healthcare',
    'published',
    '2026-01-01'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    '{"es": "Diseño de sonrisa digital: así transformamos tu sonrisa antes del primer procedimiento", "en": "Digital smile design: how we transform your smile before the first procedure"}'::jsonb,
    'diseno-sonrisa-digital',
    '{"es": "Tecnología de simulación facial que te permite ver tu resultado final antes de comenzar cualquier tratamiento.", "en": "Facial simulation technology that lets you see your final result before starting any treatment."}'::jsonb,
    '{"es": "El diseño digital de sonrisa es una herramienta revolucionaria que permite planificar y visualizar el resultado de los tratamientos dentales antes de comenzar.", "en": "Digital smile design is a revolutionary tool that allows planning and visualizing the results of dental treatments before starting."}'::jsonb,
    'Allura Healthcare',
    'published',
    '2025-12-01'
  )
ON CONFLICT (site_id, slug) DO UPDATE
  SET title_i18n   = EXCLUDED.title_i18n,
      excerpt_i18n = EXCLUDED.excerpt_i18n;

-- =============================================================================
-- END OF SEED
-- =============================================================================
