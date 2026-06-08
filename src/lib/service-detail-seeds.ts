// Auto-generated seed content for service_detail sections
export type ServiceDetailSeed = {
  category:     { es: string; en: string }
  categorySlug: string
  title:        { es: string; en: string }
  description:  { es: string; en: string }
  benefits:     { es: string; en: string }[]
  steps:        { title: { es: string; en: string }; description: { es: string; en: string } }[]
  candidates:   { es: string; en: string }[]
  timeline:     { es: string; en: string }
  whyBody:      { es: string; en: string }
}

export const SERVICE_DETAIL_SEEDS: Record<string, ServiceDetailSeed> = {

  // ─── ALIGNERS ────────────────────────────────────────────────────────────────

  '/servicios/aligners/alineadores-transparentes': {
    category:     { es: 'Allura Aligners', en: 'Allura Aligners' },
    categorySlug: 'aligners',
    title:        { es: 'Alineadores Transparentes', en: 'Clear Aligners' },
    description:  {
      es: 'Alineadores de alta precisión fabricados a medida mediante escáner intraoral digital, sin impresiones físicas incómodas. Ortodoncia discreta, eficiente y diseñada para la vida de nuestros pacientes internacionales.',
      en: 'High-precision custom aligners fabricated using a digital intraoral scanner, without uncomfortable physical impressions. Discreet, efficient orthodontics designed for the lives of our international patients.',
    },
    benefits: [
      { es: 'Ortodoncia completamente invisible en la vida diaria', en: 'Completely invisible orthodontics in daily life' },
      { es: 'Sin impresiones de alginato — solo escáner digital 3D', en: 'No alginate impressions — digital 3D scanner only' },
      { es: 'Material termoplástico médico de alta resistencia y claridad', en: 'High-strength, clear medical thermoplastic material' },
      { es: 'Removibles para comer, beber y limpiar los dientes', en: 'Removable for eating, drinking and cleaning teeth' },
      { es: 'Sin restricciones alimentarias ni riesgo de fractura de brackets', en: 'No dietary restrictions or risk of bracket breakage' },
      { es: 'Seguimiento adaptado a pacientes que viven fuera de Colombia', en: 'Follow-up adapted for patients living outside Colombia' },
    ],
    steps: [
      {
        title:       { es: 'Diagnóstico y escáner digital', en: 'Diagnosis and digital scanner' },
        description: { es: 'Evaluación ortodóncica completa y escáner intraoral 3D como base para el diseño del tratamiento.', en: 'Complete orthodontic evaluation and 3D intraoral scan as the basis for treatment design.' },
      },
      {
        title:       { es: 'Planificación digital', en: 'Digital planning' },
        description: { es: 'Diseño del movimiento dental paso a paso y generación de la simulación del resultado final antes de fabricar.', en: 'Step-by-step design of tooth movements and generation of the final result simulation before fabrication.' },
      },
      {
        title:       { es: 'Fabricación y primera entrega', en: 'Fabrication and first delivery' },
        description: { es: 'Los alineadores se fabrican con impresoras 3D de alta precisión y se entregan con el plan de cambio por etapas.', en: 'Aligners are fabricated with high-precision 3D printers and delivered with the stage-by-stage change plan.' },
      },
      {
        title:       { es: 'Seguimiento y controles remotos', en: 'Follow-up and remote check-ups' },
        description: { es: 'Monitoreo mediante fotografías y videollamadas con el especialista. Envío de nuevos alineadores por correo internacional si aplica.', en: 'Monitoring via photographs and video calls with the specialist. International shipping of new aligners if applicable.' },
      },
    ],
    candidates: [
      { es: 'Adultos y adolescentes con casos de apiñamiento o espaciado', en: 'Adults and teenagers with crowding or spacing cases' },
      { es: 'Pacientes con pequeñas recidivas de ortodoncia previa', en: 'Patients with minor relapses from previous orthodontic treatment' },
      { es: 'Personas que desean discreción total durante el tratamiento', en: 'People who want complete discretion during treatment' },
      { es: 'Pacientes internacionales que no pueden hacer visitas frecuentes', en: 'International patients who cannot make frequent visits' },
    ],
    timeline: {
      es: 'Entre 4 y 18 meses según la complejidad del caso. La visita inicial a Medellín dura 2-3 días y el seguimiento se realiza remotamente en su mayor parte.',
      en: 'Between 4 and 18 months depending on case complexity. The initial visit to Medellín lasts 2-3 days and follow-up is mostly carried out remotely.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/aligners/escaneo-digital-3d': {
    category:     { es: 'Allura Aligners', en: 'Allura Aligners' },
    categorySlug: 'aligners',
    title:        { es: 'Escaneo Digital 3D', en: '3D Digital Scanning' },
    description:  {
      es: 'Tecnología de escáner intraoral de última generación que reemplaza las incómodas impresiones de alginato. Captura tu boca con precisión milimétrica en minutos y forma la base digital de todo el tratamiento.',
      en: 'Next-generation intraoral scanner technology that replaces uncomfortable alginate impressions. Captures your mouth with millimeter precision in minutes and forms the digital foundation of the entire treatment.',
    },
    benefits: [
      { es: 'Sin impresiones de alginato ni material en boca', en: 'No alginate impressions or material in the mouth' },
      { es: 'Captura completa en 3-5 minutos con total comodidad', en: 'Complete capture in 3-5 minutes with total comfort' },
      { es: 'Precisión milimétrica para fabricación de alineadores y restauraciones', en: 'Millimeter precision for fabrication of aligners and restorations' },
      { es: 'Archivo digital permanente para comparar evolución del tratamiento', en: 'Permanent digital file to compare treatment progress' },
      { es: 'Compartible remotamente con el especialista antes de viajar', en: 'Shareable remotely with the specialist before traveling' },
      { es: 'Base para planificación digital de implantes, carillas y coronas', en: 'Foundation for digital planning of implants, veneers and crowns' },
    ],
    steps: [
      {
        title:       { es: 'Preparación y calibración', en: 'Preparation and calibration' },
        description: { es: 'El escáner se calibra y el paciente se posiciona cómodamente. No se requiere ninguna preparación previa.', en: 'The scanner is calibrated and the patient is positioned comfortably. No prior preparation is required.' },
      },
      {
        title:       { es: 'Escaneo completo', en: 'Full scan' },
        description: { es: 'El especialista pasa la sonda intraoral por toda la boca capturando la geometría exacta de dientes, encías y oclusión.', en: 'The specialist passes the intraoral probe through the entire mouth, capturing the exact geometry of teeth, gums and occlusion.' },
      },
      {
        title:       { es: 'Revisión en tiempo real', en: 'Real-time review' },
        description: { es: 'El modelo digital 3D se visualiza en pantalla al instante. El especialista verifica zonas de detalle y repite si es necesario.', en: 'The 3D digital model is displayed on screen instantly. The specialist verifies detailed areas and repeats if necessary.' },
      },
      {
        title:       { es: 'Entrega del modelo digital', en: 'Digital model delivery' },
        description: { es: 'El paciente recibe el modelo digital de su boca para revisar y compartir, y el equipo lo usa para planificar el tratamiento.', en: 'The patient receives the digital model of their mouth to review and share, and the team uses it to plan the treatment.' },
      },
    ],
    candidates: [
      { es: 'Todos los pacientes de alineadores o restauraciones dentales se benefician del escáner 3D', en: 'All aligner or dental restoration patients benefit from the 3D scanner' },
      { es: 'Especialmente útil para pacientes con reflejos nauseosos intensos', en: 'Especially useful for patients with strong gag reflexes' },
      { es: 'Indicado para planificación de implantes y cirugías guiadas digitalmente', en: 'Indicated for implant planning and digitally guided surgeries' },
      { es: 'Pacientes internacionales que desean recibir un plan digital antes de viajar', en: 'International patients who wish to receive a digital plan before traveling' },
    ],
    timeline: {
      es: 'El escaneo se realiza en 5-15 minutos durante la primera cita de diagnóstico. El modelo digital está disponible el mismo día.',
      en: 'The scan is performed in 5-15 minutes during the first diagnostic appointment. The digital model is available the same day.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/aligners/invisalign': {
    category:     { es: 'Allura Aligners', en: 'Allura Aligners' },
    categorySlug: 'aligners',
    title:        { es: 'Invisalign', en: 'Invisalign' },
    description:  {
      es: 'El sistema de alineadores más reconocido mundialmente, disponible en Allura con el Dr. Santiago Henao, especialista certificado con distinción Diamond Top Doctor — uno de los niveles más altos otorgados por Invisalign a nivel global.',
      en: "The world's most recognized aligner system, available at Allura with Dr. Santiago Henao, a specialist certified with Diamond Top Doctor distinction — one of the highest levels awarded by Invisalign globally.",
    },
    benefits: [
      { es: 'Sistema de alineadores número 1 en el mundo con millones de casos tratados', en: "World's #1 aligner system with millions of treated cases" },
      { es: 'Especialista Diamond Top Doctor — el nivel más alto de certificación Invisalign', en: 'Diamond Top Doctor specialist — the highest level of Invisalign certification' },
      { es: 'Planificación digital con Clincheck® para visualizar tu resultado final', en: 'Digital planning with Clincheck® to visualize your final result' },
      { es: 'Removibles para comer, beber y cepillarse con total comodidad', en: 'Removable for eating, drinking and brushing with total comfort' },
      { es: 'Prácticamente invisibles en la vida cotidiana', en: 'Virtually invisible in everyday life' },
      { es: 'Protocolo de seguimiento remoto para pacientes internacionales', en: 'Remote monitoring protocol for international patients' },
    ],
    steps: [
      {
        title:       { es: 'Escáner intraoral y diagnóstico', en: 'Intraoral scanner and diagnosis' },
        description: { es: 'El especialista realiza un escáner digital 3D completo para planificar tu caso en la plataforma Clincheck® de Invisalign.', en: "The specialist performs a complete 3D digital scan to plan your case on Invisalign's Clincheck® platform." },
      },
      {
        title:       { es: 'Simulación con Clincheck®', en: 'Clincheck® simulation' },
        description: { es: 'Ves en 3D la animación de cómo se moverán tus dientes, paso a paso, hasta el resultado final. Apruebas el plan antes de fabricar.', en: 'You see a 3D animation of how your teeth will move, step by step, up to the final result. You approve the plan before fabrication.' },
      },
      {
        title:       { es: 'Fabricación y primera entrega', en: 'Fabrication and first delivery' },
        description: { es: 'Se fabrican tus alineadores personalizados y te los entregamos con instrucciones completas de uso y cuidado.', en: 'Your personalized aligners are fabricated and delivered to you with complete instructions for use and care.' },
      },
      {
        title:       { es: 'Seguimiento remoto internacional', en: 'International remote monitoring' },
        description: { es: 'Controles periódicos mediante fotografías intraorales y videollamadas con tu especialista desde tu país.', en: 'Periodic check-ups via intraoral photographs and video calls with your specialist from your country.' },
      },
    ],
    candidates: [
      { es: 'Adultos y adolescentes con apiñamiento leve, moderado o severo', en: 'Adults and teenagers with mild, moderate or severe crowding' },
      { es: 'Casos con mordidas abiertas, cruzadas o profundas según evaluación', en: 'Cases with open, cross or deep bites subject to evaluation' },
      { es: 'Pacientes que rechazaron el tratamiento con brackets por razones estéticas', en: 'Patients who declined bracket treatment for aesthetic reasons' },
      { es: 'Personas que buscan ortodoncia discreta con seguimiento profesional a distancia', en: 'People seeking discreet orthodontics with professional remote follow-up' },
    ],
    timeline: {
      es: 'La duración varía entre 6 meses y 2 años según la complejidad. La visita inicial a Medellín dura 2-3 días; el resto del tratamiento se gestiona de forma remota con visitas esporádicas.',
      en: 'Duration varies between 6 months and 2 years depending on complexity. The initial visit to Medellín lasts 2-3 days; the rest of the treatment is managed remotely with occasional visits.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/aligners/planificacion-personalizada': {
    category:     { es: 'Allura Aligners', en: 'Allura Aligners' },
    categorySlug: 'aligners',
    title:        { es: 'Planificación Personalizada', en: 'Personalized Planning' },
    description:  {
      es: 'Simulación digital animada y detallada de tu tratamiento completo: ves exactamente cómo se moverá cada diente, en qué orden y cuánto tiempo tomará, antes de que se fabriquen los alineadores.',
      en: 'Detailed animated digital simulation of your complete treatment: you see exactly how each tooth will move, in what order and how long it will take, before the aligners are fabricated.',
    },
    benefits: [
      { es: 'Visualización 3D animada del movimiento dental paso a paso', en: '3D animated visualization of tooth movement step by step' },
      { es: 'Aprobación del resultado final antes de comenzar el tratamiento', en: 'Approval of the final result before starting treatment' },
      { es: 'Comunicación precisa de expectativas y objetivos entre especialista y paciente', en: 'Precise communication of expectations and goals between specialist and patient' },
      { es: 'Ajustes posibles antes de la fabricación definitiva', en: 'Adjustments possible before definitive fabrication' },
      { es: 'Estimación precisa de la duración y el número de etapas', en: 'Precise estimate of duration and number of stages' },
      { es: 'Plan compartible por correo electrónico para revisión desde tu país', en: 'Plan shareable by email for review from your country' },
    ],
    steps: [
      {
        title:       { es: 'Análisis de escáner y registros', en: 'Scanner and records analysis' },
        description: { es: 'El especialista analiza el escáner 3D, fotografías y radiografías para elaborar el plan de tratamiento.', en: 'The specialist analyzes the 3D scan, photographs and X-rays to draw up the treatment plan.' },
      },
      {
        title:       { es: 'Diseño de la secuencia de movimientos', en: 'Movement sequence design' },
        description: { es: 'Diseño etapa por etapa de los movimientos dentales, considerando prioridades clínicas y objetivos estéticos.', en: 'Stage-by-stage design of tooth movements, considering clinical priorities and aesthetic goals.' },
      },
      {
        title:       { es: 'Revisión conjunta con el paciente', en: 'Joint review with the patient' },
        description: { es: 'Presentación del plan animado al paciente en pantalla con explicación de cada fase del tratamiento.', en: 'Presentation of the animated plan to the patient on screen with explanation of each treatment phase.' },
      },
      {
        title:       { es: 'Aprobación y fabricación', en: 'Approval and fabrication' },
        description: { es: 'Tras la aprobación del paciente, se inicia la fabricación de todos los alineadores del plan de tratamiento.', en: 'After patient approval, fabrication of all aligners in the treatment plan begins.' },
      },
    ],
    candidates: [
      { es: 'Todos los pacientes de alineadores reciben una planificación personalizada', en: 'All aligner patients receive a personalized plan' },
      { es: 'Pacientes que desean entender completamente su tratamiento antes de comprometerse', en: 'Patients who want to fully understand their treatment before committing' },
      { es: 'Casos internacionales que toman decisiones a distancia antes de viajar', en: 'International cases who make decisions remotely before traveling' },
      { es: 'Personas con alta exigencia estética que quieren aprobar el resultado esperado', en: 'People with high aesthetic demands who want to approve the expected result' },
    ],
    timeline: {
      es: 'La planificación se presenta en la primera consulta o se envía digitalmente al paciente. La revisión y aprobación pueden hacerse por videollamada desde cualquier país.',
      en: 'The plan is presented at the first consultation or sent digitally to the patient. Review and approval can be done by video call from any country.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/aligners/seguimiento-remoto': {
    category:     { es: 'Allura Aligners', en: 'Allura Aligners' },
    categorySlug: 'aligners',
    title:        { es: 'Seguimiento Remoto Internacional', en: 'International Remote Monitoring' },
    description:  {
      es: 'Protocolo diseñado específicamente para pacientes que inician su tratamiento de ortodoncia en Medellín y continúan desde su país de origen. Control profesional a distancia sin sacrificar calidad ni seguridad.',
      en: 'Protocol designed specifically for patients who begin their orthodontic treatment in Medellín and continue from their home country. Professional distance monitoring without sacrificing quality or safety.',
    },
    benefits: [
      { es: 'Tratamiento de ortodoncia sin necesidad de vivir en Medellín', en: 'Orthodontic treatment without needing to live in Medellín' },
      { es: 'Controles periódicos por videollamada con tu especialista', en: 'Periodic check-ups by video call with your specialist' },
      { es: 'Revisión de fotografías intraorales para evaluar el progreso sin desplazarse', en: 'Intraoral photograph review to assess progress without traveling' },
      { es: 'Envío de alineadores por correo internacional según protocolo', en: 'International shipping of aligners per protocol' },
      { es: 'Acceso directo al especialista por WhatsApp para consultas urgentes', en: 'Direct access to the specialist via WhatsApp for urgent queries' },
      { es: 'Visitas presenciales solo en momentos clave del tratamiento', en: 'In-person visits only at key moments of the treatment' },
    ],
    steps: [
      {
        title:       { es: 'Inicio presencial en Medellín', en: 'In-person start in Medellín' },
        description: { es: 'Primera visita para diagnóstico, escáner, aprobación del plan y entrega del primer lote de alineadores.', en: 'First visit for diagnosis, scan, plan approval and delivery of the first batch of aligners.' },
      },
      {
        title:       { es: 'Protocolo de fotografías remotas', en: 'Remote photograph protocol' },
        description: { es: 'El paciente envía fotografías intraorales estandarizadas periódicamente según el protocolo establecido.', en: 'The patient sends standardized intraoral photographs periodically according to the established protocol.' },
      },
      {
        title:       { es: 'Controles por videollamada', en: 'Video call check-ups' },
        description: { es: 'Revisión virtual regular con el especialista para evaluar la evolución, resolver dudas y aprobar el avance al siguiente lote.', en: 'Regular virtual review with the specialist to assess progress, resolve questions and approve advancement to the next batch.' },
      },
      {
        title:       { es: 'Visitas presenciales estratégicas', en: 'Strategic in-person visits' },
        description: { es: 'Visitas a Medellín en puntos clave: cambio de bracket, refinamientos o instalación de la contención final.', en: 'Visits to Medellín at key points: attachment changes, refinements or installation of the final retainer.' },
      },
    ],
    candidates: [
      { es: 'Pacientes internacionales que no residen en Colombia', en: 'International patients who do not reside in Colombia' },
      { es: 'Personas que viajan ocasionalmente a Colombia y pueden hacer visitas puntuales', en: 'People who travel occasionally to Colombia and can make targeted visits' },
      { es: 'Casos de moderada a alta complejidad que aceptan el modelo de seguimiento híbrido', en: 'Moderate to high complexity cases that accept the hybrid monitoring model' },
      { es: 'Pacientes que ya tuvieron una cita de diagnóstico presencial en Allura', en: 'Patients who have already had an in-person diagnostic appointment at Allura' },
    ],
    timeline: {
      es: 'La duración total es la misma que el tratamiento presencial. La visita inicial es de 2-3 días; las visitas posteriores (si se requieren) son de 1-2 días cada una.',
      en: 'Total duration is the same as in-person treatment. The initial visit is 2-3 days; subsequent visits (if required) are 1-2 days each.',
    },
    whyBody: { es: '', en: '' },
  },

  // ─── FACIAL HARMONY ──────────────────────────────────────────────────────────

  '/servicios/facial-harmony/bioestimuladores': {
    category:     { es: 'Facial Harmony', en: 'Facial Harmony' },
    categorySlug: 'facial-harmony',
    title:        { es: 'Bioestimuladores y Rejuvenecimiento', en: 'Biostimulators and Rejuvenation' },
    description:  {
      es: 'Tratamientos inyectables de última generación que estimulan el propio organismo para producir colágeno, elastina y otros componentes de la dermis, logrando un rejuvenecimiento progresivo, profundo y de larga duración.',
      en: 'Next-generation injectable treatments that stimulate the body to produce collagen, elastin and other dermal components, achieving progressive, deep and long-lasting rejuvenation.',
    },
    benefits: [
      { es: 'Estimulación natural de la producción de colágeno y elastina', en: 'Natural stimulation of collagen and elastin production' },
      { es: 'Mejora progresiva que se intensifica durante meses', en: 'Progressive improvement that intensifies over months' },
      { es: 'Resultados que duran entre 18 meses y 3 años según el producto', en: 'Results lasting between 18 months and 3 years depending on the product' },
      { es: 'Sin aspecto artificial ni aspecto inflado', en: 'No artificial or inflated appearance' },
      { es: 'Compatible con otros procedimientos estéticos faciales', en: 'Compatible with other facial aesthetic procedures' },
      { es: 'Mejora de la calidad y firmeza de la piel en general', en: 'Overall improvement in skin quality and firmness' },
    ],
    steps: [
      {
        title:       { es: 'Evaluación de calidad dérmica', en: 'Dermal quality assessment' },
        description: { es: 'Análisis del estado de la piel, grado de laxitud, volumen y calidad dérmica para seleccionar el bioestimulador más adecuado.', en: "Analysis of skin condition, degree of laxity, volume and dermal quality to select the most appropriate biostimulator." },
      },
      {
        title:       { es: 'Selección del protocolo', en: 'Protocol selection' },
        description: { es: 'Elección entre Sculptra®, Radiesse®, Ellanse® u otros bioestimuladores disponibles según las necesidades del paciente.', en: "Choice between Sculptra®, Radiesse®, Ellanse® or other available biostimulators according to the patient's needs." },
      },
      {
        title:       { es: 'Aplicación con técnica avanzada', en: 'Application with advanced technique' },
        description: { es: 'Inyección con cánula o aguja según la zona tratada, bajo protocolo de asepsia estricto y mapeo facial previo.', en: 'Injection with cannula or needle depending on the treated area, under strict asepsis protocol and prior facial mapping.' },
      },
      {
        title:       { es: 'Seguimiento a los 30-90 días', en: 'Follow-up at 30-90 days' },
        description: { es: 'Control del resultado a medio plazo para evaluar la respuesta biológica y planificar sesiones adicionales si corresponde.', en: 'Mid-term results check to assess the biological response and plan additional sessions if appropriate.' },
      },
    ],
    candidates: [
      { es: 'Adultos de 35 a 65 años con signos de envejecimiento cutáneo progresivo', en: 'Adults aged 35 to 65 with signs of progressive skin aging' },
      { es: 'Pacientes con pérdida de firmeza y tonicidad en piel del rostro y cuello', en: 'Patients with loss of firmness and tone in the facial and neck skin' },
      { es: 'Personas que buscan resultados naturales y duraderos sin cirugía', en: 'People seeking natural, long-lasting results without surgery' },
      { es: 'Casos donde se quiere mejorar la calidad de la piel más allá del volumen', en: 'Cases where improving skin quality beyond volume is the goal' },
    ],
    timeline: {
      es: 'La sesión dura entre 30 y 60 minutos. Se pueden requerir 1 a 3 sesiones. El resultado final se aprecia a los 2-3 meses de la última aplicación y puede durar entre 18 meses y 3 años.',
      en: 'The session lasts between 30 and 60 minutes. 1 to 3 sessions may be required. The final result is visible 2-3 months after the last application and can last between 18 months and 3 years.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/facial-harmony/blefaroplastia': {
    category:     { es: 'Facial Harmony', en: 'Facial Harmony' },
    categorySlug: 'facial-harmony',
    title:        { es: 'Blefaroplastia', en: 'Blepharoplasty' },
    description:  {
      es: 'Cirugía de párpados para corregir el exceso de piel, la grasa herniada y la flacidez de la zona periocular, logrando una mirada más fresca, descansada y rejuvenecida sin alterar la expresión característica del paciente.',
      en: "Eyelid surgery to correct excess skin, herniated fat and laxity of the periocular area, achieving a fresher, more rested and rejuvenated look without altering the patient's characteristic expression.",
    },
    benefits: [
      { es: 'Corrección del exceso de piel en párpados superiores e inferiores', en: 'Correction of excess skin on upper and lower eyelids' },
      { es: 'Eliminación de bolsas de grasa bajo los ojos', en: 'Removal of fat bags under the eyes' },
      { es: 'Mirada más abierta, descansada y juvenil', en: 'A more open, rested and youthful look' },
      { es: 'Cicatrices mínimas ocultas en los pliegues naturales del párpado', en: 'Minimal scars hidden in the natural eyelid folds' },
      { es: 'Recuperación relativamente rápida comparada con otras cirugías faciales', en: 'Relatively fast recovery compared to other facial surgeries' },
      { es: 'Resultado permanente — el tejido extraído no regresa', en: 'Permanent result — the removed tissue does not return' },
    ],
    steps: [
      {
        title:       { es: 'Evaluación oftalmológica y estética', en: 'Ophthalmological and aesthetic assessment' },
        description: { es: 'Descarte de condiciones oftalmológicas que puedan contraindicar la cirugía. Fotografía clínica y análisis estético detallado.', en: 'Ruling out ophthalmological conditions that may contraindicate surgery. Clinical photography and detailed aesthetic analysis.' },
      },
      {
        title:       { es: 'Exámenes preoperatorios', en: 'Pre-operative tests' },
        description: { es: "Laboratorios, evaluación cardiovascular y cualquier estudio requerido según el estado de salud del paciente.", en: "Labs, cardiovascular assessment and any studies required based on the patient's health status." },
      },
      {
        title:       { es: 'Cirugía con anestesia local y sedación', en: 'Surgery under local anesthesia and sedation' },
        description: { es: 'Procedimiento bajo sedación consciente y anestesia local. Duración entre 1 y 2 horas según si son párpados superiores, inferiores o ambos.', en: 'Procedure under conscious sedation and local anesthesia. Duration between 1 and 2 hours depending on whether upper, lower or both eyelids are treated.' },
      },
      {
        title:       { es: 'Recuperación y seguimiento', en: 'Recovery and follow-up' },
        description: { es: 'Reposo de 5 a 7 días en Medellín. Retiro de puntos a los 5-7 días. Seguimiento remoto posterior.', en: 'Rest of 5 to 7 days in Medellín. Suture removal at 5-7 days. Remote follow-up thereafter.' },
      },
    ],
    candidates: [
      { es: 'Adultos con exceso de piel en párpados superiores que afecta la visión o la estética', en: 'Adults with excess skin on upper eyelids affecting vision or aesthetics' },
      { es: 'Personas con bolsas grasas persistentes bajo los ojos', en: 'People with persistent fat bags under the eyes' },
      { es: 'Pacientes en buen estado de salud general sin contraindicaciones oftalmológicas', en: 'Patients in good general health with no ophthalmological contraindications' },
      { es: 'Casos que desean rejuvenecimiento de la mirada sin cambiar la expresión facial', en: 'Cases seeking rejuvenation of the gaze without changing facial expression' },
    ],
    timeline: {
      es: 'La cirugía dura 1-2 horas. Se requieren 10-12 días en Medellín (cirugía + recuperación inicial + retiro de puntos). El resultado final se aprecia completamente a los 3 meses.',
      en: 'Surgery lasts 1-2 hours. 10-12 days in Medellín are required (surgery + initial recovery + suture removal). The final result is fully visible at 3 months.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/facial-harmony/cirugia-maxilofacial': {
    category:     { es: 'Facial Harmony', en: 'Facial Harmony' },
    categorySlug: 'facial-harmony',
    title:        { es: 'Coordinación con Cirugía Maxilofacial', en: 'Maxillofacial Surgery Coordination' },
    description:  {
      es: 'Planificación interdisciplinaria que integra odontología y cirugía maxilofacial para casos complejos que requieren corrección ósea de la mandíbula, el maxilar superior o las estructuras faciales profundas.',
      en: 'Interdisciplinary planning integrating dentistry and maxillofacial surgery for complex cases requiring bone correction of the jaw, upper maxilla or deep facial structures.',
    },
    benefits: [
      { es: 'Coordinación sin costura entre odontología y cirugía maxilofacial', en: 'Seamless coordination between dentistry and maxillofacial surgery' },
      { es: 'Planificación digital preoperatoria con guías quirúrgicas 3D', en: 'Pre-operative digital planning with 3D surgical guides' },
      { es: 'Tratamiento de maloclusiones esqueléticas severas no resolubles con ortodoncia', en: 'Treatment of severe skeletal malocclusions not resolvable with orthodontics' },
      { es: 'Corrección de asimetrías faciales de base ósea', en: 'Correction of bone-based facial asymmetries' },
      { es: 'Equipo interdisciplinario con protocolos internacionales', en: 'Interdisciplinary team with international protocols' },
      { es: 'Seguimiento conjunto durante todo el proceso de recuperación', en: 'Joint follow-up throughout the entire recovery process' },
    ],
    steps: [
      {
        title:       { es: 'Diagnóstico interdisciplinario', en: 'Interdisciplinary diagnosis' },
        description: { es: 'Evaluación conjunta entre el ortodoncista y el cirujano maxilofacial de Allura, con cefalometría digital y modelos 3D.', en: "Joint assessment between Allura's orthodontist and maxillofacial surgeon, with digital cephalometry and 3D models." },
      },
      {
        title:       { es: 'Preparación ortodóncica prequirúrgica', en: 'Pre-surgical orthodontic preparation' },
        description: { es: 'Alineación dental mediante brackets o alineadores para preparar la dentición para la cirugía. Este período puede durar 12-18 meses.', en: 'Dental alignment using braces or aligners to prepare the dentition for surgery. This period may last 12-18 months.' },
      },
      {
        title:       { es: 'Cirugía ortognática', en: 'Orthognathic surgery' },
        description: { es: 'Procedimiento quirúrgico bajo anestesia general para reposicionar los maxilares y/o la mandíbula según el plan establecido.', en: 'Surgical procedure under general anesthesia to reposition the maxillae and/or mandible according to the established plan.' },
      },
      {
        title:       { es: 'Ortodoncia postoperatoria y seguimiento', en: 'Post-operative orthodontics and follow-up' },
        description: { es: 'Finalización del tratamiento ortodóncico tras la cirugía para conseguir la oclusión óptima planificada.', en: 'Completion of orthodontic treatment after surgery to achieve the planned optimal occlusion.' },
      },
    ],
    candidates: [
      { es: 'Pacientes con maloclusión esquelética severa (clase II o clase III ósea)', en: 'Patients with severe skeletal malocclusion (bone class II or class III)' },
      { es: 'Casos con asimetría facial de origen óseo', en: 'Cases with facial asymmetry of bone origin' },
      { es: 'Personas con apnea obstructiva del sueño relacionada con la morfología maxilofacial', en: 'People with obstructive sleep apnea related to maxillofacial morphology' },
      { es: 'Pacientes que no responden al tratamiento ortodóncico convencional', en: 'Patients who do not respond to conventional orthodontic treatment' },
    ],
    timeline: {
      es: 'El tratamiento completo puede durar entre 18 y 36 meses, incluyendo las fases de ortodoncia pre y postquirúrgica. La cirugía en sí requiere hospitalización de 1-2 días y recuperación inicial de 10-14 días en Medellín.',
      en: 'The complete treatment can last between 18 and 36 months, including the pre- and post-surgical orthodontic phases. The surgery itself requires 1-2 days hospitalization and initial recovery of 10-14 days in Medellín.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/facial-harmony/evaluacion-facial': {
    category:     { es: 'Facial Harmony', en: 'Facial Harmony' },
    categorySlug: 'facial-harmony',
    title:        { es: 'Evaluación Facial Estructural', en: 'Structural Facial Assessment' },
    description:  {
      es: 'Análisis detallado de tus proporciones faciales, estructura ósea, volúmenes y rasgos característicos para diseñar un plan de armonización coherente con tu identidad. La evaluación es el primer paso de cualquier tratamiento facial en Allura.',
      en: 'Detailed analysis of your facial proportions, bone structure, volumes and characteristic features to design a harmonization plan consistent with your identity. The assessment is the first step of any facial treatment at Allura.',
    },
    benefits: [
      { es: 'Análisis facial basado en proporciones áureas y criterios médicos', en: 'Facial analysis based on golden proportions and medical criteria' },
      { es: 'Plan de tratamiento personalizado sin procedimientos innecesarios', en: 'Personalized treatment plan without unnecessary procedures' },
      { es: 'Fotografía clínica estandarizada de frente, perfil y 3/4', en: 'Standardized clinical photography from the front, profile and 3/4 angle' },
      { es: 'Discusión abierta de expectativas y posibilidades reales', en: 'Open discussion of expectations and realistic possibilities' },
      { es: 'Sin compromiso posterior a la evaluación', en: 'No commitment required after the assessment' },
      { es: 'Disponible como consulta virtual previa al viaje a Medellín', en: 'Available as a virtual consultation before traveling to Medellín' },
    ],
    steps: [
      {
        title:       { es: 'Historia clínica y objetivos', en: 'Clinical history and goals' },
        description: { es: 'Conversación amplia sobre motivaciones, expectativas, historial de procedimientos previos y estado de salud general.', en: 'Comprehensive conversation about motivations, expectations, history of prior procedures and general health status.' },
      },
      {
        title:       { es: 'Fotografía clínica estandarizada', en: 'Standardized clinical photography' },
        description: { es: 'Registro fotográfico profesional en múltiples ángulos para análisis de proporciones y asimetrías.', en: 'Professional photography at multiple angles for analysis of proportions and asymmetries.' },
      },
      {
        title:       { es: 'Análisis de proporciones faciales', en: 'Facial proportion analysis' },
        description: { es: 'Evaluación de tercios faciales, ángulos nasofaciales, nasolabiales, proyección del mentón y armonía general.', en: 'Assessment of facial thirds, nasofacial angles, nasolabial angles, chin projection and overall harmony.' },
      },
      {
        title:       { es: 'Plan y recomendaciones', en: 'Plan and recommendations' },
        description: { es: 'Presentación de opciones de tratamiento con expectativas realistas, orden de procedimientos recomendado y presupuesto.', en: 'Presentation of treatment options with realistic expectations, recommended procedure sequence and budget.' },
      },
    ],
    candidates: [
      { es: 'Cualquier paciente interesado en procedimientos de medicina facial estética', en: 'Any patient interested in facial aesthetic medicine procedures' },
      { es: 'Personas que desean orientación antes de decidir qué procedimiento realizarse', en: 'People who want guidance before deciding which procedure to undergo' },
      { es: 'Pacientes que han tenido procedimientos previos y buscan una segunda opinión', en: 'Patients who have had previous procedures and are looking for a second opinion' },
      { es: 'Quienes quieren resultados naturales y coherentes con sus rasgos', en: 'Those who want natural results consistent with their features' },
    ],
    timeline: {
      es: 'La evaluación se realiza en una sola cita de 60 a 90 minutos. También puede hacerse como consulta virtual previa antes de viajar a Medellín.',
      en: 'The assessment is conducted in a single appointment of 60 to 90 minutes. It can also be done as a virtual consultation before traveling to Medellín.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/facial-harmony/lifting-facial': {
    category:     { es: 'Facial Harmony', en: 'Facial Harmony' },
    categorySlug: 'facial-harmony',
    title:        { es: 'Lifting Facial', en: 'Facelift' },
    description:  {
      es: 'Procedimiento quirúrgico que reposiciona los tejidos faciales descendidos para restaurar la definición del óvalo facial, el cuello y el área mandibular sin producir resultados tensos ni artificiales.',
      en: 'Surgical procedure that repositions descended facial tissues to restore the definition of the facial oval, neck and mandibular area without producing tight or artificial results.',
    },
    benefits: [
      { es: 'Rejuvenecimiento facial profundo y duradero — resultados de 7 a 15 años', en: 'Deep and lasting facial rejuvenation — results lasting 7 to 15 years' },
      { es: 'Reposición de tejidos sin el aspecto tenso propio de técnicas antiguas', en: 'Tissue repositioning without the tight appearance of old techniques' },
      { es: 'Mejora simultánea de zona mandibular, mejillas y cuello', en: 'Simultaneous improvement of the mandibular area, cheeks and neck' },
      { es: 'Cicatrices ocultas en las líneas naturales del pelo y las orejas', en: 'Scars hidden in the natural hairline and ear lines' },
      { es: "Compatible con procedimientos complementarios (blefaroplastia, lipofilling)", en: 'Compatible with complementary procedures (blepharoplasty, lipofilling)' },
      { es: "Resultado natural que luce como 'tú, pero 10-15 años antes'", en: "Natural result that looks like 'you, but 10-15 years younger'" },
    ],
    steps: [
      {
        title:       { es: 'Evaluación y planificación', en: 'Assessment and planning' },
        description: { es: 'Análisis del grado de laxitud facial, calidad de la piel y expectativas del paciente para definir la técnica más adecuada.', en: 'Analysis of the degree of facial laxity, skin quality and patient expectations to define the most appropriate technique.' },
      },
      {
        title:       { es: 'Exámenes preoperatorios completos', en: 'Complete pre-operative tests' },
        description: { es: 'Laboratorios, evaluación cardiovascular, historial de medicamentos anticoagulantes y preparación preoperatoria.', en: 'Labs, cardiovascular assessment, anticoagulant medication history and pre-operative preparation.' },
      },
      {
        title:       { es: 'Cirugía bajo anestesia general', en: 'Surgery under general anesthesia' },
        description: { es: 'Procedimiento de 3 a 5 horas que puede incluir cuello, mejillas y zona temporal según el plan establecido.', en: 'Procedure of 3 to 5 hours that may include the neck, cheeks and temporal area according to the established plan.' },
      },
      {
        title:       { es: 'Recuperación supervisada en Medellín', en: 'Supervised recovery in Medellín' },
        description: { es: '12 a 14 días de recuperación con controles diarios los primeros días, retiro de drenajes y seguimiento del proceso de cicatrización.', en: '12 to 14 days of recovery with daily check-ups during the first days, drain removal and monitoring of the healing process.' },
      },
    ],
    candidates: [
      { es: 'Adultos de 45 a 65 años con signos avanzados de envejecimiento facial', en: 'Adults aged 45 to 65 with advanced signs of facial aging' },
      { es: 'Personas con pérdida de definición del óvalo facial y papada', en: 'People with loss of facial oval definition and jowls' },
      { es: 'Pacientes con buenas condiciones de salud general sin contraindicaciones anestésicas', en: 'Patients in good general health without anesthetic contraindications' },
      { es: 'Casos que desean resultados duraderos superiores a los obtenidos con tratamientos no invasivos', en: 'Cases seeking lasting results beyond what non-invasive treatments can achieve' },
    ],
    timeline: {
      es: 'La cirugía dura 3-5 horas. Se requieren entre 14 y 18 días en Medellín para la recuperación inicial. El resultado final se estabiliza a los 3-6 meses.',
      en: 'Surgery lasts 3-5 hours. Between 14 and 18 days in Medellín are required for initial recovery. The final result stabilizes at 3-6 months.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/facial-harmony/mentoplastia': {
    category:     { es: 'Facial Harmony', en: 'Facial Harmony' },
    categorySlug: 'facial-harmony',
    title:        { es: 'Mentoplastia', en: 'Mentoplasty' },
    description:  {
      es: 'Cirugía de redefinición del mentón para mejorar la proyección y el equilibrio del perfil facial. Puede realizarse con implantes de silicona médica o con reposicionamiento óseo según la indicación clínica.',
      en: 'Chin redefinition surgery to improve the projection and balance of the facial profile. Can be performed with medical silicone implants or with bone repositioning depending on the clinical indication.',
    },
    benefits: [
      { es: 'Mejora significativa del perfil y el equilibrio facial', en: 'Significant improvement of the profile and facial balance' },
      { es: 'Procedimiento mínimamente invasivo con cicatriz interna imperceptible', en: 'Minimally invasive procedure with imperceptible internal scar' },
      { es: 'Recuperación más rápida que otros procedimientos quirúrgicos faciales', en: 'Faster recovery than other facial surgical procedures' },
      { es: 'Compatible con rinoplastia para corrección integral del perfil', en: 'Compatible with rhinoplasty for comprehensive profile correction' },
      { es: 'Implantes de silicona médica certificados de alta calidad', en: 'High-quality certified medical silicone implants' },
      { es: "Resultado permanente y proporcional a los rasgos del paciente", en: "Permanent result proportional to the patient's features" },
    ],
    steps: [
      {
        title:       { es: 'Análisis de perfil y planificación', en: 'Profile analysis and planning' },
        description: { es: 'Evaluación de la proyección actual del mentón en relación con nariz, labios y frente. Morfing fotográfico del perfil.', en: 'Assessment of current chin projection relative to the nose, lips and forehead. Photographic profile morphing.' },
      },
      {
        title:       { es: 'Exámenes preoperatorios', en: 'Pre-operative tests' },
        description: { es: 'Laboratorios y evaluación médica general para autorizar el procedimiento bajo anestesia local con sedación.', en: 'Labs and general medical assessment to authorize the procedure under local anesthesia with sedation.' },
      },
      {
        title:       { es: 'Cirugía', en: 'Surgery' },
        description: { es: 'Incisión interna (en boca) o submentoniana mínima para insertar el implante en la posición planeada. Duración: 45 a 90 minutos.', en: 'Internal (intraoral) or minimal submental incision to insert the implant in the planned position. Duration: 45 to 90 minutes.' },
      },
      {
        title:       { es: 'Recuperación', en: 'Recovery' },
        description: { es: 'Reposo de 5 a 7 días. Dieta blanda la primera semana. El edema disminuye progresivamente durante los primeros 30 días.', en: 'Rest of 5 to 7 days. Soft diet during the first week. Swelling decreases progressively during the first 30 days.' },
      },
    ],
    candidates: [
      { es: 'Adultos con mentón retruido que desequilibra las proporciones faciales', en: 'Adults with retruded chin that unbalances facial proportions' },
      { es: 'Pacientes que buscan mejorar el perfil facial sin cirugía de mayor complejidad', en: 'Patients seeking to improve the facial profile without more complex surgery' },
      { es: 'Casos que se combinan con rinoplastia para corrección integral', en: 'Cases combined with rhinoplasty for comprehensive correction' },
      { es: 'Personas con expectativas realistas sobre los resultados alcanzables', en: 'People with realistic expectations about achievable results' },
    ],
    timeline: {
      es: 'La cirugía dura entre 45 y 90 minutos. Se requieren entre 7 y 10 días en Medellín. El resultado final se aprecia completamente a los 30-60 días.',
      en: 'Surgery lasts between 45 and 90 minutes. Between 7 and 10 days in Medellín are required. The final result is fully visible at 30-60 days.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/facial-harmony/rinoplastia': {
    category:     { es: 'Facial Harmony', en: 'Facial Harmony' },
    categorySlug: 'facial-harmony',
    title:        { es: 'Rinoplastia', en: 'Rhinoplasty' },
    description:  {
      es: 'Cirugía de refinamiento nasal orientada a mejorar la armonía del perfil y la estética del rostro en conjunto, siempre respetando la identidad del paciente y priorizando resultados naturales sobre cambios drásticos.',
      en: "Nasal refinement surgery aimed at improving profile harmony and overall facial aesthetics, always respecting the patient's identity and prioritizing natural results over drastic changes.",
    },
    benefits: [
      { es: 'Mejora del equilibrio entre nariz y rasgos faciales', en: 'Improved balance between nose and facial features' },
      { es: 'Técnica primaria o de revisión según el historial del paciente', en: 'Primary or revision technique depending on patient history' },
      { es: 'Enfoque en naturalidad y coherencia con la identidad facial del paciente', en: "Focus on naturalness and consistency with the patient's facial identity" },
      { es: 'Combinable con corrección funcional (septum, cornetes) si es necesario', en: 'Combinable with functional correction (septum, turbinates) if needed' },
      { es: 'Planificación con morfing fotográfico previo para alineación de expectativas', en: 'Planning with prior photographic morphing for expectation alignment' },
      { es: 'Seguimiento postoperatorio remoto con nuestro equipo especializado', en: 'Remote post-operative follow-up with our specialized team' },
    ],
    steps: [
      {
        title:       { es: 'Consulta y morfing fotográfico', en: 'Consultation and photographic morphing' },
        description: { es: 'Evaluación del caso, análisis de las proporciones nasofaciales y simulación fotográfica del resultado esperado.', en: 'Case assessment, nasofacial proportion analysis and photographic simulation of the expected result.' },
      },
      {
        title:       { es: 'Exámenes preoperatorios', en: 'Pre-operative tests' },
        description: { es: 'Laboratorios, TAC nasal y evaluación médica completa antes de autorizar la cirugía.', en: 'Labs, nasal CT scan and complete medical evaluation before authorizing surgery.' },
      },
      {
        title:       { es: 'Cirugía bajo anestesia general', en: 'Surgery under general anesthesia' },
        description: { es: 'Procedimiento de 2 a 3 horas bajo anestesia general. Técnica abierta o cerrada según la complejidad del caso.', en: 'Procedure of 2 to 3 hours under general anesthesia. Open or closed technique depending on case complexity.' },
      },
      {
        title:       { es: 'Recuperación y seguimiento', en: 'Recovery and follow-up' },
        description: { es: 'Reposo de 7 a 10 días en Medellín con retiro de puntos y descangue. Seguimiento remoto hasta los 6-12 meses postoperatorios.', en: 'Rest of 7 to 10 days in Medellín with suture and cast removal. Remote follow-up up to 6-12 months post-operatively.' },
      },
    ],
    candidates: [
      { es: 'Adultos mayores de 18 años con desarrollo facial completo', en: 'Adults over 18 years of age with complete facial development' },
      { es: 'Personas con joroba nasal, punta ancha o asimetría que les genera insatisfacción', en: 'People with nasal hump, wide tip or asymmetry causing dissatisfaction' },
      { es: 'Pacientes con obstrucción respiratoria que puede corregirse simultáneamente', en: 'Patients with respiratory obstruction that can be corrected simultaneously' },
      { es: 'Casos de rinoplastia de revisión por procedimientos previos insatisfactorios', en: 'Revision rhinoplasty cases due to unsatisfactory prior procedures' },
    ],
    timeline: {
      es: 'La cirugía dura 2-3 horas. Se requieren 12-14 días en Medellín. El resultado final se evalúa a los 12 meses cuando desaparece el edema residual.',
      en: 'Surgery lasts 2-3 hours. 12-14 days in Medellín are required. The final result is assessed at 12 months when residual swelling disappears.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/facial-harmony/toxina-botulinica': {
    category:     { es: 'Facial Harmony', en: 'Facial Harmony' },
    categorySlug: 'facial-harmony',
    title:        { es: 'Toxina Botulínica y Rellenos Dérmicos', en: 'Botulinum Toxin and Dermal Fillers' },
    description:  {
      es: 'Aplicación de toxina botulínica y ácido hialurónico con criterio médico y visión artística para suavizar expresiones, restaurar volumen y armonizar el rostro con resultados naturales que no se notan pero se perciben.',
      en: 'Application of botulinum toxin and hyaluronic acid with medical judgment and artistic vision to soften expressions, restore volume and harmonize the face with natural results that are not noticed but are felt.',
    },
    benefits: [
      { es: 'Resultados visibles desde las 72 horas para la toxina botulínica', en: 'Visible results within 72 hours for botulinum toxin' },
      { es: 'Sin cirugía, sin anestesia general, sin período de recuperación significativo', en: 'No surgery, no general anesthesia, no significant recovery period' },
      { es: 'Técnicas de inyección avanzadas para resultados naturales y simétricos', en: 'Advanced injection techniques for natural and symmetrical results' },
      { es: 'Productos de marca reconocida con registro sanitario INVIMA', en: 'Brand-name products with INVIMA health registry' },
      { es: 'Planificación por zonas: frente, entrecejo, patas de gallo, pómulos, labios', en: "Zone-by-zone planning: forehead, frown lines, crow's feet, cheekbones, lips" },
      { es: 'Resultado reversible con hialuronidasa en el caso de rellenos con ácido hialurónico', en: 'Reversible results with hyaluronidase in the case of hyaluronic acid fillers' },
    ],
    steps: [
      {
        title:       { es: 'Evaluación y mapeo facial', en: 'Facial assessment and mapping' },
        description: { es: 'El especialista analiza la musculatura facial, volúmenes y asimetrías para diseñar el plan de aplicación zona a zona.', en: 'The specialist analyzes facial musculature, volumes and asymmetries to design the zone-by-zone application plan.' },
      },
      {
        title:       { es: 'Planificación del tratamiento', en: 'Treatment planning' },
        description: { es: "Definición de los productos, dosis y puntos de aplicación exactos según el objetivo de cada zona.", en: "Definition of products, doses and exact application points according to each zone's objective." },
      },
      {
        title:       { es: 'Aplicación del tratamiento', en: 'Treatment application' },
        description: { es: 'Inyecciones precisas con agujas ultrafinas o cánulas bajo protocolo de asepsia estricto. El procedimiento dura 20-45 minutos.', en: 'Precise injections with ultra-fine needles or cannulas under strict asepsis protocol. The procedure takes 20-45 minutes.' },
      },
      {
        title:       { es: 'Control y seguimiento', en: 'Follow-up check' },
        description: { es: 'Control a los 14 días para evaluar el resultado y realizar ajustes si fuera necesario.', en: 'Check-up at 14 days to assess the result and make adjustments if necessary.' },
      },
    ],
    candidates: [
      { es: 'Adultos con líneas de expresión o arrugas dinámicas', en: 'Adults with expression lines or dynamic wrinkles' },
      { es: 'Personas que desean restaurar volumen facial perdido con el envejecimiento', en: 'People who wish to restore facial volume lost with aging' },
      { es: 'Casos de asimetría labial o facial que se benefician de corrección con rellenos', en: 'Cases of lip or facial asymmetry that benefit from filler correction' },
      { es: 'Pacientes que buscan resultados naturales sin cirugía', en: 'Patients seeking natural results without surgery' },
    ],
    timeline: {
      es: 'El procedimiento dura entre 30 y 60 minutos. El resultado de la toxina botulínica aparece en 3-7 días y dura 4-6 meses. Los rellenos de ácido hialurónico duran entre 9 y 18 meses según la zona.',
      en: 'The procedure takes between 30 and 60 minutes. Botulinum toxin results appear in 3-7 days and last 4-6 months. Hyaluronic acid fillers last between 9 and 18 months depending on the area.',
    },
    whyBody: { es: '', en: '' },
  },

  // ─── FULL MOUTH RECONSTRUCTION ───────────────────────────────────────────────

  '/servicios/full-mouth-reconstruction/implantes-all-on-x': {
    category:     { es: 'Full Mouth Reconstruction', en: 'Full Mouth Reconstruction' },
    categorySlug: 'full-mouth-reconstruction',
    title:        { es: 'Implantes All-on-X', en: 'All-on-X Implants' },
    description:  {
      es: 'Una arcada dental completa, fija y permanente sobre solo 4 o 6 implantes estratégicamente posicionados. La solución definitiva cuando la pérdida dental es total o casi total.',
      en: 'A complete, fixed and permanent dental arch on just 4 or 6 strategically positioned implants. The definitive solution when tooth loss is total or near-total.',
    },
    benefits: [
      { es: 'Arcada completa fija en un solo procedimiento quirúrgico', en: 'Complete fixed arch in a single surgical procedure' },
      { es: 'Solo 4 o 6 implantes para sostener toda la arcada', en: 'Only 4 or 6 implants to support the entire arch' },
      { es: 'Carga inmediata: dientes provisionales el mismo día en muchos casos', en: 'Immediate loading: provisional teeth the same day in many cases' },
      { es: 'Elimina el uso de prótesis removibles para siempre', en: 'Eliminates removable dentures forever' },
      { es: 'Mayor preservación del hueso en comparación con prótesis convencionales', en: 'Greater bone preservation compared to conventional dentures' },
      { es: 'Resultados funcionales y estéticos de alta calidad desde el primer día', en: 'High-quality functional and aesthetic results from day one' },
    ],
    steps: [
      {
        title:       { es: 'Diagnóstico 3D y planificación quirúrgica', en: '3D diagnosis and surgical planning' },
        description: { es: 'Tomografía cone beam y diseño digital del ángulo y posición óptima de cada implante para maximizar el soporte óseo disponible.', en: 'Cone beam CT scan and digital design of the optimal angle and position of each implant to maximize available bone support.' },
      },
      {
        title:       { es: 'Cirugía de colocación', en: 'Placement surgery' },
        description: { es: 'Instalación de los 4 o 6 implantes bajo sedación o anestesia local. Procedimiento de alta complejidad realizado por nuestro equipo de implantólogos.', en: 'Installation of the 4 or 6 implants under sedation or local anesthesia. High-complexity procedure performed by our implantology team.' },
      },
      {
        title:       { es: 'Carga provisional inmediata', en: 'Immediate provisional loading' },
        description: { es: 'En la mayoría de los casos, instalamos una prótesis provisional fija el mismo día de la cirugía.', en: 'In most cases, we install a fixed provisional prosthesis the same day as surgery.' },
      },
      {
        title:       { es: 'Prótesis definitiva', en: 'Definitive prosthesis' },
        description: { es: 'Entre 6 y 12 meses después, instalamos la prótesis definitiva de porcelana o zirconio, fabricada a medida.', en: 'Between 6 and 12 months later, we install the custom-made definitive porcelain or zirconia prosthesis.' },
      },
    ],
    candidates: [
      { es: 'Pacientes con pérdida total o casi total de piezas en una o ambas arcadas', en: 'Patients with total or near-total tooth loss in one or both arches' },
      { es: 'Personas que usan prótesis removibles y desean una solución fija y permanente', en: 'People who wear removable dentures and want a fixed, permanent solution' },
      { es: 'Pacientes con reabsorción ósea severa que pueden beneficiarse de ángulos de implante alternativos', en: 'Patients with severe bone resorption who may benefit from alternative implant angles' },
      { es: 'Casos que buscan la menor cantidad de procedimientos posible', en: 'Cases seeking the fewest possible procedures' },
    ],
    timeline: {
      es: 'La cirugía requiere 5-7 días en Medellín. La prótesis definitiva se instala en una segunda visita entre 6 y 12 meses después, coordinable de forma separada.',
      en: 'Surgery requires 5-7 days in Medellín. The definitive prosthesis is installed on a second visit between 6 and 12 months later, which can be coordinated separately.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/full-mouth-reconstruction/implantes-unitarios': {
    category:     { es: 'Full Mouth Reconstruction', en: 'Full Mouth Reconstruction' },
    categorySlug: 'full-mouth-reconstruction',
    title:        { es: 'Implantes Unitarios y Múltiples', en: 'Single and Multiple Implants' },
    description:  {
      es: 'Recupera cada pieza perdida con implantes de titanio biocompatibles que se integran al hueso y funcionan como dientes naturales, de por vida.',
      en: 'Recover each lost tooth with biocompatible titanium implants that integrate into the bone and function like natural teeth, for life.',
    },
    benefits: [
      { es: 'Sustitución permanente de piezas perdidas sin afectar dientes adyacentes', en: 'Permanent replacement of lost teeth without affecting adjacent teeth' },
      { es: 'Material de titanio biocompatible con integración ósea garantizada', en: 'Biocompatible titanium material with guaranteed bone integration' },
      { es: 'Resultado estético y funcional idéntico al diente natural', en: 'Aesthetic and functional result identical to the natural tooth' },
      { es: 'No requiere adhesivos ni prótesis removibles', en: 'No adhesives or removable dentures required' },
      { es: 'Previene la reabsorción ósea generada por la pérdida dental', en: 'Prevents bone resorption caused by tooth loss' },
      { es: 'Mantenimiento igual al de los dientes naturales', en: 'Maintenance identical to natural teeth' },
    ],
    steps: [
      {
        title:       { es: 'Evaluación y diagnóstico 3D', en: '3D evaluation and diagnosis' },
        description: { es: 'Tomografía cone beam para analizar volumen óseo disponible y planificar la posición exacta del implante.', en: 'Cone beam CT scan to analyze available bone volume and plan the exact position of the implant.' },
      },
      {
        title:       { es: 'Colocación del implante', en: 'Implant placement' },
        description: { es: 'Cirugía mínimamente invasiva bajo anestesia local para instalar el implante de titanio en el hueso maxilar.', en: 'Minimally invasive surgery under local anesthesia to install the titanium implant into the jawbone.' },
      },
      {
        title:       { es: 'Período de osteointegración', en: 'Osseointegration period' },
        description: { es: 'Entre 3 y 6 meses para que el implante se integre completamente al hueso. Se puede hacer remotamente desde tu país.', en: 'Between 3 and 6 months for the implant to fully integrate into the bone. This phase can be managed remotely from your country.' },
      },
      {
        title:       { es: 'Corona definitiva', en: 'Final crown' },
        description: { es: 'Fabricación e instalación de la corona de porcelana personalizada sobre el implante ya integrado.', en: 'Fabrication and installation of the custom porcelain crown on the already-integrated implant.' },
      },
    ],
    candidates: [
      { es: 'Pacientes con una o varias piezas dentales perdidas', en: 'Patients with one or more missing teeth' },
      { es: 'Personas con hueso maxilar suficiente para sostener el implante', en: 'People with sufficient jawbone to support the implant' },
      { es: 'Pacientes con buena salud general y sin enfermedades no controladas', en: 'Patients in good general health without uncontrolled conditions' },
      { es: 'Adultos que no sean fumadores crónicos o estén dispuestos a dejar de fumar', en: 'Adults who do not smoke chronically or are willing to quit smoking' },
    ],
    timeline: {
      es: 'El proceso completo dura entre 4 y 8 meses. La primera fase (cirugía) requiere 3-5 días en Medellín; la segunda fase (corona) puede coordinarse en una segunda visita o remotamente.',
      en: 'The complete process takes between 4 and 8 months. The first phase (surgery) requires 3-5 days in Medellín; the second phase (crown) can be coordinated on a second visit or remotely.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/full-mouth-reconstruction/planificacion-digital-3d': {
    category:     { es: 'Full Mouth Reconstruction', en: 'Full Mouth Reconstruction' },
    categorySlug: 'full-mouth-reconstruction',
    title:        { es: 'Planificación Digital 3D', en: '3D Digital Planning' },
    description:  {
      es: 'Antes de cualquier procedimiento, simulamos tu caso completo con tecnología digital de última generación. Ves tu resultado antes de comenzar y el equipo planifica con precisión milimétrica cada paso del tratamiento.',
      en: 'Before any procedure, we simulate your complete case with next-generation digital technology. You see your result before starting and the team plans every step of the treatment with millimeter precision.',
    },
    benefits: [
      { es: 'Visualización del resultado final antes del primer procedimiento', en: 'Visualization of the final result before the first procedure' },
      { es: 'Planificación quirúrgica precisa con guías quirúrgicas digitales', en: 'Precise surgical planning with digital surgical guides' },
      { es: 'Reducción de la incertidumbre y mejora en la comunicación con el paciente', en: 'Reduced uncertainty and improved communication with the patient' },
      { es: 'Fabricación de restauraciones a medida con fresado CAD/CAM', en: 'Custom restoration fabrication with CAD/CAM milling' },
      { es: 'Sin impresiones físicas incómodas — solo escáner digital', en: 'No uncomfortable physical impressions — digital scanner only' },
      { es: 'Documentación digital completa del caso para seguimiento remoto', en: 'Complete digital case documentation for remote follow-up' },
    ],
    steps: [
      {
        title:       { es: 'Escáner intraoral 3D', en: '3D intraoral scanner' },
        description: { es: 'Captura digital de toda la boca en minutos, sin impresiones de alginato. Cómodo, rápido y de alta precisión.', en: 'Digital capture of the entire mouth in minutes, without alginate impressions. Comfortable, fast and highly precise.' },
      },
      {
        title:       { es: 'Tomografía cone beam', en: 'Cone beam CT scan' },
        description: { es: 'Imagen tridimensional del hueso maxilar y mandibular para evaluar volumen óseo y estructuras anatómicas clave.', en: 'Three-dimensional image of the upper and lower jawbone to evaluate bone volume and key anatomical structures.' },
      },
      {
        title:       { es: 'Diseño digital del tratamiento', en: 'Digital treatment design' },
        description: { es: 'El equipo diseña el caso en software especializado: posición de implantes, forma de las restauraciones, oclusión y estética.', en: 'The team designs the case in specialized software: implant positions, restoration shapes, occlusion and aesthetics.' },
      },
      {
        title:       { es: 'Presentación al paciente', en: 'Patient presentation' },
        description: { es: 'Revisión conjunta del plan digital antes de comenzar cualquier procedimiento, con opción de ajustes.', en: 'Joint review of the digital plan before starting any procedure, with the option for adjustments.' },
      },
    ],
    candidates: [
      { es: 'Todos los pacientes de Full Mouth Reconstruction se benefician de la planificación 3D', en: 'All Full Mouth Reconstruction patients benefit from 3D planning' },
      { es: 'Especialmente valioso para casos con implantes o rehabilitación oral compleja', en: 'Especially valuable for cases involving implants or complex oral rehabilitation' },
      { es: 'Pacientes internacionales que viajan una sola vez y necesitan máxima precisión', en: 'International patients who travel once and need maximum precision' },
      { es: 'Casos en que el resultado estético es crítico para el paciente', en: 'Cases where the aesthetic result is critical for the patient' },
    ],
    timeline: {
      es: 'La planificación digital se realiza en la primera visita diagnóstica (1-2 días). El plan digital acompaña todo el tratamiento y se comparte con el paciente de forma remota.',
      en: 'Digital planning is carried out at the first diagnostic visit (1-2 days). The digital plan accompanies the entire treatment and is shared with the patient remotely.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/full-mouth-reconstruction/protesis-fijas': {
    category:     { es: 'Full Mouth Reconstruction', en: 'Full Mouth Reconstruction' },
    categorySlug: 'full-mouth-reconstruction',
    title:        { es: 'Prótesis Fijas sobre Implantes', en: 'Fixed Prostheses on Implants' },
    description:  {
      es: 'Coronas y puentes de porcelana o zirconio fijados permanentemente sobre implantes. El resultado es una dentadura que se ve, se siente y funciona exactamente como tus propios dientes.',
      en: 'Porcelain or zirconia crowns and bridges permanently fixed on implants. The result is a set of teeth that looks, feels and functions exactly like your own teeth.',
    },
    benefits: [
      { es: 'Resultado estético superior con porcelana o zirconio de alta resistencia', en: 'Superior aesthetic result with high-strength porcelain or zirconia' },
      { es: 'Fijación permanente sin adhesivos ni remoción diaria', en: 'Permanent fixation without adhesives or daily removal' },
      { es: 'Distribución natural de las fuerzas masticatorias', en: 'Natural distribution of masticatory forces' },
      { es: 'Sin necesidad de limpiar la prótesis fuera de la boca', en: 'No need to clean the prosthesis outside the mouth' },
      { es: 'Mayor comodidad y confianza en la vida diaria', en: 'Greater comfort and confidence in daily life' },
      { es: 'Durabilidad excepcional con cuidado adecuado', en: 'Exceptional durability with proper care' },
    ],
    steps: [
      {
        title:       { es: 'Selección de material', en: 'Material selection' },
        description: { es: 'Elección entre porcelana feldespática, zirconio o combinaciones según la zona de la boca y las exigencias estéticas.', en: 'Choice between feldspathic porcelain, zirconia or combinations depending on the area of the mouth and aesthetic requirements.' },
      },
      {
        title:       { es: 'Toma de impresiones digitales', en: 'Digital impressions' },
        description: { es: 'Escáner intraoral 3D para fabricar la prótesis con precisión milimétrica en el laboratorio.', en: '3D intraoral scanner to fabricate the prosthesis with millimeter precision in the laboratory.' },
      },
      {
        title:       { es: 'Prueba provisional', en: 'Provisional fitting' },
        description: { es: 'Instalación de prótesis provisional para validar estética, oclusión y comodidad antes de la definitiva.', en: 'Installation of provisional prosthesis to validate aesthetics, occlusion and comfort before the definitive one.' },
      },
      {
        title:       { es: 'Instalación definitiva', en: 'Definitive installation' },
        description: { es: 'Cementación o atornillado de la prótesis definitiva con control de oclusión y acabado final.', en: 'Cementing or screwing of the definitive prosthesis with occlusion control and final finishing.' },
      },
    ],
    candidates: [
      { es: 'Pacientes con uno o más implantes ya integrados', en: 'Patients with one or more already-integrated implants' },
      { es: 'Personas que desean reemplazar prótesis removibles por una solución fija', en: 'People who wish to replace removable dentures with a fixed solution' },
      { es: 'Casos que requieren restaurar uno o varios dientes con alto valor estético', en: 'Cases requiring restoration of one or more teeth with high aesthetic value' },
      { es: 'Pacientes con implantes previos que necesitan renovar la prótesis', en: 'Patients with prior implants who need to renew the prosthesis' },
    ],
    timeline: {
      es: 'Una vez que los implantes están integrados (3-6 meses), la fabricación e instalación de la prótesis definitiva toma entre 2 y 3 semanas y requiere 4-7 días en Medellín.',
      en: 'Once implants are integrated (3-6 months), fabrication and installation of the definitive prosthesis takes 2 to 3 weeks and requires 4-7 days in Medellín.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/full-mouth-reconstruction/reemplazo-restauraciones': {
    category:     { es: 'Full Mouth Reconstruction', en: 'Full Mouth Reconstruction' },
    categorySlug: 'full-mouth-reconstruction',
    title:        { es: 'Reemplazo de Restauraciones Fallidas', en: 'Replacement of Failed Restorations' },
    description:  {
      es: 'Evaluación integral y sustitución de restauraciones antiguas con amalgama, resinas infiltradas, coronas fracturadas o implantes fallidos. Empezamos desde cero con materiales de última generación.',
      en: 'Comprehensive evaluation and replacement of old amalgam restorations, infiltrated composites, fractured crowns or failed implants. Starting fresh with next-generation materials.',
    },
    benefits: [
      { es: 'Eliminación de focos de infiltración o infección en restauraciones antiguas', en: 'Elimination of infiltration or infection foci in old restorations' },
      { es: 'Sustitución de amalgamas por restauraciones libres de metal', en: 'Replacement of amalgams with metal-free restorations' },
      { es: 'Materiales biocompatibles de última generación', en: 'Next-generation biocompatible materials' },
      { es: 'Restauración de la estética en zonas anteriores y posteriores', en: 'Restoration of aesthetics in anterior and posterior areas' },
      { es: 'Diagnóstico con tecnología de detección temprana de caries', en: 'Diagnosis with early cavity detection technology' },
      { es: 'Plan escalonado para renovar todo en el menor número de visitas', en: 'Phased plan to renew everything in the fewest number of visits' },
    ],
    steps: [
      {
        title:       { es: 'Diagnóstico con tecnología de detección temprana', en: 'Diagnosis with early detection technology' },
        description: { es: 'Uso de cámara intraoral, radiografías digitales y transiluminación para detectar infiltración no visible a simple vista.', en: 'Use of intraoral camera, digital X-rays and transillumination to detect infiltration not visible to the naked eye.' },
      },
      {
        title:       { es: 'Retiro de restauraciones existentes', en: 'Removal of existing restorations' },
        description: { es: 'Remoción cuidadosa de resinas, amalgamas o coronas antiguas preservando el máximo tejido dental sano.', en: 'Careful removal of old composites, amalgams or crowns preserving the maximum amount of healthy dental tissue.' },
      },
      {
        title:       { es: 'Tratamiento del diente subyacente', en: 'Treatment of the underlying tooth' },
        description: { es: 'Endodoncia, reconstrucción o cualquier tratamiento necesario antes de la nueva restauración.', en: 'Endodontics, reconstruction or any necessary treatment before the new restoration.' },
      },
      {
        title:       { es: 'Nueva restauración definitiva', en: 'New definitive restoration' },
        description: { es: 'Instalación de resinas compuestas, cerámicas o coronas de porcelana según el caso.', en: 'Installation of composite resins, ceramics or porcelain crowns depending on the case.' },
      },
    ],
    candidates: [
      { es: 'Pacientes con restauraciones antiguas de amalgama que desean reemplazarlas', en: 'Patients with old amalgam restorations who wish to replace them' },
      { es: 'Personas con sensibilidad dental persistente en zonas restauradas', en: 'People with persistent dental sensitivity in restored areas' },
      { es: 'Casos con coronas fracturadas, levantadas o con caries secundaria', en: 'Cases with fractured, dislodged crowns or secondary decay' },
      { es: 'Pacientes con implantes con complicaciones que requieren evaluación', en: 'Patients with implant complications requiring evaluation' },
    ],
    timeline: {
      es: 'El tiempo varía según la cantidad de restauraciones. Una primera visita de 5-7 días en Medellín suele ser suficiente para completar la mayoría de los reemplazos.',
      en: 'Time varies depending on the number of restorations. A first visit of 5-7 days in Medellín is usually sufficient to complete most replacements.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/full-mouth-reconstruction/rehabilitacion-oral-completa': {
    category:     { es: 'Full Mouth Reconstruction', en: 'Full Mouth Reconstruction' },
    categorySlug: 'full-mouth-reconstruction',
    title:        { es: 'Rehabilitación Oral Completa', en: 'Full Oral Rehabilitation' },
    description:  {
      es: 'Tratamiento integral que combina múltiples especialidades odontológicas para restaurar la salud, función y estética de toda la boca en casos de deterioro severo o múltiple.',
      en: 'Comprehensive treatment combining multiple dental specialties to restore the health, function and aesthetics of the entire mouth in cases of severe or multiple deterioration.',
    },
    benefits: [
      { es: 'Tratamiento coordinado por un equipo multidisciplinario de especialistas', en: 'Treatment coordinated by a multidisciplinary team of specialists' },
      { es: 'Restauración simultánea de función masticatoria, salud gingival y estética', en: 'Simultaneous restoration of masticatory function, gingival health and aesthetics' },
      { es: 'Plan de tratamiento personalizado por fases para mayor comodidad', en: 'Personalized phased treatment plan for greater comfort' },
      { es: 'Tecnología de diagnóstico 3D para planificación precisa', en: '3D diagnostic technology for precise planning' },
      { es: 'Eliminación de focos infecciosos y restauración de la salud bucal integral', en: 'Elimination of infectious foci and restoration of comprehensive oral health' },
      { es: 'Seguimiento remoto entre fases para pacientes internacionales', en: 'Remote follow-up between phases for international patients' },
    ],
    steps: [
      {
        title:       { es: 'Diagnóstico integral', en: 'Comprehensive diagnosis' },
        description: { es: 'Evaluación completa de dientes, encías, oclusión, articulación temporomandibular y tejidos blandos mediante radiografías y escáner 3D.', en: 'Complete evaluation of teeth, gums, occlusion, temporomandibular joint and soft tissues using X-rays and 3D scanner.' },
      },
      {
        title:       { es: 'Fase de saneamiento', en: 'Sanitation phase' },
        description: { es: 'Tratamiento periodontal, extracciones necesarias, endodoncias y cualquier procedimiento previo requerido.', en: 'Periodontal treatment, necessary extractions, endodontics and any prior procedures required.' },
      },
      {
        title:       { es: 'Fase protésica', en: 'Prosthetic phase' },
        description: { es: 'Instalación de implantes, coronas, puentes o combinaciones según el plan diseñado para cada caso.', en: 'Installation of implants, crowns, bridges or combinations according to the plan designed for each case.' },
      },
      {
        title:       { es: 'Mantenimiento y seguimiento', en: 'Maintenance and follow-up' },
        description: { es: 'Controles periódicos y protocolo de mantenimiento para garantizar la longevidad de todos los tratamientos realizados.', en: 'Periodic check-ups and maintenance protocol to ensure the longevity of all treatments performed.' },
      },
    ],
    candidates: [
      { es: 'Pacientes con deterioro dental severo por caries múltiple avanzada', en: 'Patients with severe dental deterioration due to advanced multiple cavities' },
      { es: 'Personas con erosión dental significativa por reflujo o hábitos alimenticios', en: 'People with significant dental erosion from reflux or dietary habits' },
      { es: 'Casos con pérdida de dimensión vertical o problemas de mordida', en: 'Cases with loss of vertical dimension or bite problems' },
      { es: 'Pacientes con múltiples piezas fracturadas, desgastadas o perdidas', en: 'Patients with multiple fractured, worn or missing teeth' },
    ],
    timeline: {
      es: 'La rehabilitación oral completa puede tomar entre 6 meses y 2 años según la complejidad. Se planifica en fases coordinadas con las visitas del paciente internacional a Medellín.',
      en: "Full oral rehabilitation can take between 6 months and 2 years depending on complexity. It is planned in phases coordinated with the international patient's visits to Medellín.",
    },
    whyBody: { es: '', en: '' },
  },

  // ─── SMILE MAKEOVER ──────────────────────────────────────────────────────────

  '/servicios/smile-makeover/blanqueamiento-dental': {
    category:     { es: 'Smile Makeover', en: 'Smile Makeover' },
    categorySlug: 'smile-makeover',
    title:        { es: 'Blanqueamiento Dental Profesional', en: 'Professional Teeth Whitening' },
    description:  {
      es: 'Protocolo clínico de blanqueamiento supervisado por nuestros especialistas para lograr resultados seguros, uniformes y duraderos que superan lo que puede lograrse con blanqueamiento casero sin supervisión.',
      en: 'Clinical whitening protocol supervised by our specialists to achieve safe, uniform and lasting results that surpass what can be achieved with unsupervised home whitening.',
    },
    benefits: [
      { es: 'Aclaramiento de hasta 8 tonos en una sola sesión clínica', en: 'Lightening of up to 8 shades in a single clinical session' },
      { es: 'Control profesional que garantiza resultados uniformes', en: 'Professional control that ensures uniform results' },
      { es: 'Protección gingival durante todo el procedimiento', en: 'Gingival protection throughout the procedure' },
      { es: 'Sin daño al esmalte cuando se realiza bajo supervisión especializada', en: 'No enamel damage when performed under specialized supervision' },
      { es: 'Protocolo de mantenimiento personalizado para prolongar el resultado', en: 'Personalized maintenance protocol to prolong the result' },
      { es: 'Compatible y previo a otros tratamientos estéticos como carillas', en: 'Compatible with and prior to other aesthetic treatments such as veneers' },
    ],
    steps: [
      {
        title:       { es: 'Evaluación del estado dental', en: 'Dental condition evaluation' },
        description: { es: 'Limpieza profesional y revisión de obturaciones o zonas sensibles que puedan afectar el resultado o la tolerancia al tratamiento.', en: 'Professional cleaning and review of fillings or sensitive areas that may affect the result or treatment tolerance.' },
      },
      {
        title:       { es: 'Protección gingival', en: 'Gingival protection' },
        description: { es: 'Aplicación de barrera de resina fotopolimerizable en la encía para protegerla completamente durante el blanqueamiento.', en: 'Application of a light-cured resin barrier on the gum to completely protect it during whitening.' },
      },
      {
        title:       { es: 'Aplicación del gel blanqueador', en: 'Whitening gel application' },
        description: { es: 'Aplicación de peróxido de hidrógeno de alta concentración en los dientes y activación con luz de polimerización LED.', en: 'Application of high-concentration hydrogen peroxide on the teeth and activation with LED polymerization light.' },
      },
      {
        title:       { es: 'Plan de mantenimiento domiciliario', en: 'Home maintenance plan' },
        description: { es: 'Entrega de cubetas personalizadas y gel de menor concentración para mantener el resultado desde casa.', en: 'Delivery of custom trays and lower-concentration gel to maintain the result from home.' },
      },
    ],
    candidates: [
      { es: 'Pacientes con dientes amarillos, grises o manchados por café, té o tabaco', en: 'Patients with yellow, grey or stained teeth from coffee, tea or tobacco' },
      { es: 'Personas con pigmentación intrínseca leve a moderada', en: 'People with mild to moderate intrinsic pigmentation' },
      { es: 'Pacientes que quieren mejorar su sonrisa antes de un evento importante', en: 'Patients who want to improve their smile before an important event' },
      { es: 'Como paso previo a la instalación de carillas o restauraciones estéticas', en: 'As a prior step before installing veneers or aesthetic restorations' },
    ],
    timeline: {
      es: 'Una sesión de blanqueamiento clínico dura entre 60 y 90 minutos. Se puede complementar con blanqueamiento domiciliario durante 1-2 semanas adicionales desde tu país.',
      en: 'A clinical whitening session lasts between 60 and 90 minutes. It can be complemented with home whitening for 1-2 additional weeks from your country.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/smile-makeover/carillas-porcelana': {
    category:     { es: 'Smile Makeover', en: 'Smile Makeover' },
    categorySlug: 'smile-makeover',
    title:        { es: 'Carillas en Porcelana', en: 'Porcelain Veneers' },
    description:  {
      es: 'Láminas ultrafinas de porcelana adheridas a la superficie de los dientes para transformar radicalmente color, forma, tamaño y alineación sin necesidad de ortodoncia ni procedimientos invasivos.',
      en: 'Ultra-thin porcelain wafers bonded to the tooth surface to radically transform color, shape, size and alignment without the need for orthodontics or invasive procedures.',
    },
    benefits: [
      { es: 'Transformación estética radical con mínima reducción del diente', en: 'Radical aesthetic transformation with minimal tooth reduction' },
      { es: 'Porcelana translúcida que imita perfectamente el esmalte natural', en: 'Translucent porcelain that perfectly mimics natural enamel' },
      { es: 'Resistencia al manchado superior al esmalte natural', en: 'Stain resistance superior to natural enamel' },
      { es: 'Resultado inmediato sin meses de tratamiento de ortodoncia', en: 'Immediate result without months of orthodontic treatment' },
      { es: 'Personalización total de color, forma y tamaño', en: 'Full customization of color, shape and size' },
      { es: 'Durabilidad de 10 a 20 años con cuidado adecuado', en: 'Durability of 10 to 20 years with proper care' },
    ],
    steps: [
      {
        title:       { es: 'Diseño digital de sonrisa', en: 'Digital smile design' },
        description: { es: 'Simulación fotorrealista del resultado esperado antes de preparar ningún diente. El paciente aprueba el diseño.', en: 'Photorealistic simulation of the expected result before preparing any tooth. The patient approves the design.' },
      },
      {
        title:       { es: 'Preparación dental mínima', en: 'Minimal dental preparation' },
        description: { es: 'Reducción mínima del esmalte (0.3-0.7mm) para alojar la carilla. Técnica preservadora que protege el diente.', en: 'Minimal enamel reduction (0.3-0.7mm) to accommodate the veneer. Preserving technique that protects the tooth.' },
      },
      {
        title:       { es: 'Prueba en boca (mock-up)', en: 'In-mouth trial (mock-up)' },
        description: { es: 'Instalación temporal del diseño para evaluar estética, fonética y comodidad antes de la carilla definitiva.', en: 'Temporary installation of the design to evaluate aesthetics, phonetics and comfort before the definitive veneer.' },
      },
      {
        title:       { es: 'Adhesión definitiva', en: 'Definitive bonding' },
        description: { es: 'Cementación de las carillas de porcelana con sistemas adhesivos de alta resistencia y acabado final.', en: 'Cementation of the porcelain veneers with high-strength adhesive systems and final finishing.' },
      },
    ],
    candidates: [
      { es: 'Pacientes con manchas intrínsecas que no responden al blanqueamiento', en: 'Patients with intrinsic stains that do not respond to whitening' },
      { es: 'Personas con dientes pequeños, desgastados o con forma irregular', en: 'People with small, worn or irregularly shaped teeth' },
      { es: 'Casos con pequeños diastemas o leve apiñamiento sin problemas de mordida', en: 'Cases with small diastemas or mild crowding without bite problems' },
      { es: 'Pacientes que buscan una transformación estética completa en poco tiempo', en: 'Patients seeking a complete aesthetic transformation in a short time' },
    ],
    timeline: {
      es: 'El proceso completo dura entre 2 y 3 semanas desde la planificación hasta la instalación definitiva. Requiere entre 7 y 10 días en Medellín.',
      en: 'The complete process takes between 2 and 3 weeks from planning to definitive installation. It requires between 7 and 10 days in Medellín.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/smile-makeover/coronas-porcelana': {
    category:     { es: 'Smile Makeover', en: 'Smile Makeover' },
    categorySlug: 'smile-makeover',
    title:        { es: 'Coronas en Porcelana', en: 'Porcelain Crowns' },
    description:  {
      es: 'Fundas de porcelana o zirconio que recubren completamente el diente dañado, devolviéndole su forma, función, resistencia y una apariencia perfectamente natural.',
      en: 'Porcelain or zirconia caps that completely cover the damaged tooth, restoring its shape, function, resistance and a perfectly natural appearance.',
    },
    benefits: [
      { es: 'Restauración completa de dientes muy deteriorados sin extraerlos', en: 'Complete restoration of severely deteriorated teeth without extracting them' },
      { es: 'Porcelana o zirconio de alta resistencia y aspecto ultranatural', en: 'High-strength porcelain or zirconia with ultra-natural appearance' },
      { es: 'Personalización de color, forma y translucidez para armonizar con los dientes vecinos', en: 'Customization of color, shape and translucency to harmonize with neighboring teeth' },
      { es: 'Protección completa del diente subyacente', en: 'Complete protection of the underlying tooth' },
      { es: 'Durabilidad superior a 15 años con cuidado adecuado', en: 'Durability exceeding 15 years with proper care' },
      { es: 'Sin necesidad de extracción en la mayoría de los casos', en: 'No extraction required in most cases' },
    ],
    steps: [
      {
        title:       { es: 'Evaluación y preparación dental', en: 'Evaluation and dental preparation' },
        description: { es: 'El especialista evalúa el estado del diente y realiza la preparación (reducción controlada) para alojar la corona.', en: 'The specialist evaluates the tooth condition and performs the preparation (controlled reduction) to accommodate the crown.' },
      },
      {
        title:       { es: 'Escáner digital e impresión digital', en: 'Digital scanner and impression' },
        description: { es: 'Toma de impresión digital 3D para fabricar la corona con precisión en laboratorio de tecnología CAD/CAM.', en: '3D digital impression for fabricating the crown with precision in a CAD/CAM technology laboratory.' },
      },
      {
        title:       { es: 'Corona provisional', en: 'Provisional crown' },
        description: { es: 'Instalación de corona provisional durante el período de fabricación de la definitiva para proteger el diente y evaluar estética.', en: 'Installation of a provisional crown during the fabrication period to protect the tooth and evaluate aesthetics.' },
      },
      {
        title:       { es: 'Instalación definitiva', en: 'Definitive installation' },
        description: { es: 'Cementación de la corona de porcelana definitiva con ajuste de oclusión y acabado final profesional.', en: 'Cementation of the definitive porcelain crown with occlusion adjustment and professional final finishing.' },
      },
    ],
    candidates: [
      { es: 'Dientes con fracturas extensas que no pueden restaurarse con resina', en: 'Teeth with extensive fractures that cannot be restored with resin' },
      { es: 'Piezas tratadas con endodoncia que requieren protección total', en: 'Teeth treated with endodontics requiring total protection' },
      { es: 'Dientes con gran destrucción por caries avanzada', en: 'Teeth with extensive destruction due to advanced decay' },
      { es: 'Casos donde las carillas no son suficientes por el grado de daño', en: 'Cases where veneers are insufficient due to the degree of damage' },
    ],
    timeline: {
      es: 'La fabricación de coronas toma entre 1 y 2 semanas. El proceso completo (evaluación, preparación, provisional y definitiva) requiere entre 7 y 12 días en Medellín.',
      en: 'Crown fabrication takes between 1 and 2 weeks. The complete process (evaluation, preparation, provisional and definitive) requires between 7 and 12 days in Medellín.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/smile-makeover/diseno-digital-sonrisa': {
    category:     { es: 'Smile Makeover', en: 'Smile Makeover' },
    categorySlug: 'smile-makeover',
    title:        { es: 'Diseño Digital de Sonrisa', en: 'Digital Smile Design' },
    description:  {
      es: 'Simulación fotorrealista de tu nueva sonrisa utilizando fotografías clínicas y software especializado. Ves exactamente cómo quedarás antes de que se toque ningún diente.',
      en: 'Photorealistic simulation of your new smile using clinical photographs and specialized software. You see exactly what you will look like before any tooth is touched.',
    },
    benefits: [
      { es: 'Visualización realista del resultado final antes de cualquier procedimiento', en: 'Realistic visualization of the final result before any procedure' },
      { es: 'Comunicación precisa entre el paciente y el equipo clínico', en: 'Precise communication between the patient and clinical team' },
      { es: 'Posibilidad de ajustar proporción, color y forma hasta aprobar el diseño', en: 'Ability to adjust proportion, color and shape until the design is approved' },
      { es: 'Base para la fabricación digital de restauraciones a medida', en: 'Foundation for digital fabrication of custom restorations' },
      { es: 'Reducción de la ansiedad y sorpresas durante el tratamiento', en: 'Reduced anxiety and surprises during treatment' },
      { es: 'Archivo digital permanente del caso para seguimiento', en: 'Permanent digital case file for follow-up' },
    ],
    steps: [
      {
        title:       { es: 'Fotografía clínica estandarizada', en: 'Standardized clinical photography' },
        description: { es: 'Registro fotográfico completo de frente, perfil y sonrisa con iluminación clínica profesional.', en: 'Complete photographic record from the front, profile and smile with professional clinical lighting.' },
      },
      {
        title:       { es: 'Análisis facial y dental', en: 'Facial and dental analysis' },
        description: { es: 'Evaluación de proporciones faciales, línea de la sonrisa, forma y color actual de los dientes.', en: 'Evaluation of facial proportions, smile line, current tooth shape and color.' },
      },
      {
        title:       { es: 'Diseño digital', en: 'Digital design' },
        description: { es: "El especialista diseña la nueva sonrisa respetando proporciones áureas y los deseos del paciente.", en: "The specialist designs the new smile respecting golden proportions and the patient's wishes." },
      },
      {
        title:       { es: 'Aprobación y mock-up físico', en: 'Approval and physical mock-up' },
        description: { es: 'El paciente aprueba el diseño digital y opcionalmente lo prueba en boca mediante un mock-up de resina temporal.', en: 'The patient approves the digital design and optionally tries it in the mouth via a temporary resin mock-up.' },
      },
    ],
    candidates: [
      { es: 'Cualquier paciente que contemple un tratamiento estético dental', en: 'Any patient contemplating a dental aesthetic treatment' },
      { es: 'Personas que quieren ver el resultado antes de comprometerse con el tratamiento', en: 'People who want to see the result before committing to treatment' },
      { es: 'Casos con múltiples opciones de tratamiento donde la visualización ayuda a decidir', en: 'Cases with multiple treatment options where visualization helps decide' },
      { es: 'Pacientes que desean transmitir claramente sus expectativas estéticas al equipo', en: 'Patients who want to clearly convey their aesthetic expectations to the team' },
    ],
    timeline: {
      es: 'El diseño digital se realiza en 1-2 sesiones de 1 a 2 horas cada una y puede entregarse en formato digital para revisar desde tu país antes de viajar.',
      en: 'The digital design is carried out in 1-2 sessions of 1 to 2 hours each and can be delivered in digital format to review from your country before traveling.',
    },
    whyBody: { es: '', en: '' },
  },

  '/servicios/smile-makeover/restauraciones-esteticas': {
    category:     { es: 'Smile Makeover', en: 'Smile Makeover' },
    categorySlug: 'smile-makeover',
    title:        { es: 'Restauraciones Estéticas Avanzadas', en: 'Advanced Aesthetic Restorations' },
    description:  {
      es: 'Técnicas adhesivas mínimamente invasivas de última generación para corregir fracturas, manchas, irregularidades y diastemas sin necesidad de coronas ni procedimientos más extensos.',
      en: 'Next-generation minimally invasive adhesive techniques to correct fractures, stains, irregularities and diastemas without the need for crowns or more extensive procedures.',
    },
    benefits: [
      { es: 'Mínima o nula reducción del diente natural', en: 'Minimal or no reduction of the natural tooth' },
      { es: 'Resinas nanocompositas de alta estética con aspecto de porcelana', en: 'High-aesthetic nanocomposite resins with a porcelain-like appearance' },
      { es: 'Corrección de fracturas, manchas, diastemas y formas irregulares', en: 'Correction of fractures, stains, diastemas and irregular shapes' },
      { es: 'Resultado inmediato en una sola sesión en muchos casos', en: 'Immediate result in a single session in many cases' },
      { es: 'Técnica reversible en la mayoría de las situaciones', en: 'Reversible technique in most situations' },
      { es: 'Excelente relación entre resultado estético y costo del tratamiento', en: 'Excellent ratio between aesthetic result and treatment cost' },
    ],
    steps: [
      {
        title:       { es: 'Diagnóstico y plan estético', en: 'Diagnosis and aesthetic plan' },
        description: { es: 'Evaluación clínica y fotográfica para determinar el mejor enfoque según el tipo y extensión de cada irregularidad.', en: 'Clinical and photographic evaluation to determine the best approach based on the type and extent of each irregularity.' },
      },
      {
        title:       { es: 'Selección de color y forma', en: 'Color and shape selection' },
        description: { es: 'Elección del tono de resina y diseño de la forma final con la participación activa del paciente.', en: 'Choice of resin shade and final shape design with active patient participation.' },
      },
      {
        title:       { es: 'Restauración directa', en: 'Direct restoration' },
        description: { es: 'Aplicación y modelado de la resina compuesta de alta estética directamente en el diente, capa por capa.', en: 'Application and sculpting of the high-aesthetic composite resin directly onto the tooth, layer by layer.' },
      },
      {
        title:       { es: 'Pulido y acabado final', en: 'Polishing and final finishing' },
        description: { es: 'Pulido con instrumentos especializados para lograr superficie lisa, brillante y armoniosa con los dientes adyacentes.', en: 'Polishing with specialized instruments to achieve a smooth, bright surface harmonious with adjacent teeth.' },
      },
    ],
    candidates: [
      { es: 'Dientes con fracturas pequeñas o medianas', en: 'Teeth with small or medium fractures' },
      { es: 'Manchas superficiales que no responden al blanqueamiento', en: 'Surface stains that do not respond to whitening' },
      { es: 'Diastemas (espacios entre dientes) de tamaño pequeño a moderado', en: 'Diastemas (gaps between teeth) of small to moderate size' },
      { es: 'Pacientes que buscan mejoras estéticas conservadoras y económicas', en: 'Patients seeking conservative and cost-effective aesthetic improvements' },
    ],
    timeline: {
      es: 'La mayoría de las restauraciones estéticas directas se realizan en 1 a 3 sesiones. El tiempo en Medellín puede ser de 2 a 5 días según la cantidad de piezas a tratar.',
      en: 'Most direct aesthetic restorations are completed in 1 to 3 sessions. Time in Medellín can be 2 to 5 days depending on the number of teeth to treat.',
    },
    whyBody: { es: '', en: '' },
  },

}
