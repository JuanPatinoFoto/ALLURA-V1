const PptxGenJS = require("pptxgenjs");

const pptx = new PptxGenJS();

// ─── Brand tokens ───────────────────────────────────────────────────────────
const C = {
  dark:   "051c33",
  mid:    "8b9fb3",
  light:  "eaeeef",
  white:  "ffffff",
  accent: "a3bdd4",
};

const FONT_TITLE = "Trebuchet MS";
const FONT_BODY  = "Calibri";

pptx.layout  = "LAYOUT_16x9";
pptx.author  = "Allura Healthcare";
pptx.company = "Allura";
pptx.subject = "Rediseño Web — Caso de Éxito";
pptx.title   = "La Evolución de Allura";

// ─── Helper: dark slide base ────────────────────────────────────────────────
function darkSlide() {
  const sld = pptx.addSlide();
  sld.background = { color: C.dark };
  return sld;
}

// ─── Helper: light slide base ───────────────────────────────────────────────
function lightSlide() {
  const sld = pptx.addSlide();
  sld.background = { color: C.light };
  return sld;
}

// ─── Helper: horizontal rule ────────────────────────────────────────────────
function rule(sld, y, color = C.mid) {
  sld.addShape(pptx.ShapeType.rect, {
    x: 0.55, y, w: 8.9, h: 0.03,
    fill: { color },
    line: { color, width: 0 },
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 1 — Portada
// ══════════════════════════════════════════════════════════════════════════════
{
  const sld = darkSlide();

  // Decorative left bar
  sld.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.18, h: 5.63,
    fill: { color: C.mid },
    line: { color: C.mid, width: 0 },
  });

  // Subtle bottom stripe
  sld.addShape(pptx.ShapeType.rect, {
    x: 0, y: 5.2, w: 10, h: 0.43,
    fill: { color: "061f38" },
    line: { color: "061f38", width: 0 },
  });

  sld.addText("ALLURA", {
    x: 0.55, y: 0.55, w: 8.9, h: 0.6,
    fontSize: 13, bold: true, color: C.mid,
    fontFace: FONT_TITLE, charSpacing: 6,
  });

  rule(sld, 1.2);

  sld.addText("La Evolución de Allura", {
    x: 0.55, y: 1.45, w: 8.9, h: 1.2,
    fontSize: 44, bold: true, color: C.white,
    fontFace: FONT_TITLE,
  });

  sld.addText("De portal informativo a embudo de ventas premium", {
    x: 0.55, y: 2.75, w: 8.9, h: 0.7,
    fontSize: 20, color: C.mid,
    fontFace: FONT_BODY, italic: true,
  });

  sld.addText("HEALTHCARE · MEDELLÍN · 2026", {
    x: 0.55, y: 5.1, w: 8.9, h: 0.4,
    fontSize: 9, color: C.accent,
    fontFace: FONT_BODY, charSpacing: 4,
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 2 — El Reto vs. La Solución
// ══════════════════════════════════════════════════════════════════════════════
{
  const sld = lightSlide();

  sld.addText("EL RETO · LA SOLUCIÓN", {
    x: 0.55, y: 0.3, w: 8.9, h: 0.4,
    fontSize: 9, bold: true, color: C.mid,
    fontFace: FONT_BODY, charSpacing: 5,
  });

  sld.addText("Un cambio de paradigma", {
    x: 0.55, y: 0.7, w: 8.9, h: 0.75,
    fontSize: 32, bold: true, color: C.dark,
    fontFace: FONT_TITLE,
  });

  rule(sld, 1.5, C.mid);

  // ANTES box
  sld.addShape(pptx.ShapeType.rect, {
    x: 0.55, y: 1.7, w: 4.1, h: 2.4,
    fill: { color: "dde4ea" },
    line: { color: C.mid, width: 1 },
  });
  sld.addText("ANTES", {
    x: 0.65, y: 1.75, w: 3.9, h: 0.4,
    fontSize: 11, bold: true, color: C.mid,
    fontFace: FONT_BODY, charSpacing: 4,
  });
  const antesItems = [
    "Mensajes genéricos sin diferenciación",
    "Fricción en la navegación y CTAs agresivos",
    "Sin promesa de marca clara",
  ];
  sld.addText(antesItems.map(t => ({ text: "— " + t + "\n", options: {} })), {
    x: 0.65, y: 2.2, w: 3.85, h: 1.7,
    fontSize: 12, color: "4a5568",
    fontFace: FONT_BODY,
  });

  // DESPUÉS box
  sld.addShape(pptx.ShapeType.rect, {
    x: 5.05, y: 1.7, w: 4.4, h: 2.4,
    fill: { color: C.dark },
    line: { color: C.dark, width: 0 },
  });
  sld.addText("DESPUÉS", {
    x: 5.15, y: 1.75, w: 4.2, h: 0.4,
    fontSize: 11, bold: true, color: C.mid,
    fontFace: FONT_BODY, charSpacing: 4,
  });
  const despuesItems = [
    "Posicionamiento Quiet Luxury",
    "Flujo intuitivo y micro-conversiones elegantes",
    '"Salud que inspira, viajes que transforman"',
  ];
  sld.addText(despuesItems.map(t => ({ text: "✓  " + t + "\n", options: {} })), {
    x: 5.15, y: 2.2, w: 4.1, h: 1.7,
    fontSize: 12, color: C.white,
    fontFace: FONT_BODY,
  });

  sld.addText(
    "El paciente internacional no busca un médico. Busca una experiencia en la que pueda confiar su bienestar.",
    {
      x: 0.55, y: 4.35, w: 8.9, h: 0.9,
      fontSize: 13, color: C.dark, italic: true,
      fontFace: FONT_BODY, align: "center",
    }
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 3 — Claridad y Autoridad Médica
// ══════════════════════════════════════════════════════════════════════════════
{
  const sld = darkSlide();

  sld.addText("CLARIDAD · AUTORIDAD MÉDICA", {
    x: 0.55, y: 0.3, w: 8.9, h: 0.4,
    fontSize: 9, bold: true, color: C.mid,
    fontFace: FONT_BODY, charSpacing: 5,
  });

  sld.addText("El paciente entiende.\nEl paciente confía.", {
    x: 0.55, y: 0.68, w: 6, h: 1.2,
    fontSize: 34, bold: true, color: C.white,
    fontFace: FONT_TITLE,
  });

  rule(sld, 1.95);

  const bullets = [
    ["Servicios por intención del paciente", "Smile Makeover · Aligners · Aesthetic Medicine · Wellness"],
    ["Jerarquía visual en 5 segundos", "El usuario entiende la oferta completa antes del primer scroll"],
    ["Equipo Médico interactivo", "Fotos reales · Especialidades · Trayectoria visible"],
    ["Efecto autoridad", "Factor #1 de conversión en turismo médico internacional"],
  ];

  bullets.forEach(([title, sub], i) => {
    const y = 2.1 + i * 0.78;
    sld.addShape(pptx.ShapeType.rect, {
      x: 0.55, y: y + 0.05, w: 0.06, h: 0.45,
      fill: { color: C.mid },
      line: { color: C.mid, width: 0 },
    });
    sld.addText(title, {
      x: 0.75, y, w: 8.7, h: 0.35,
      fontSize: 13, bold: true, color: C.white,
      fontFace: FONT_BODY,
    });
    sld.addText(sub, {
      x: 0.75, y: y + 0.35, w: 8.7, h: 0.35,
      fontSize: 11, color: C.mid,
      fontFace: FONT_BODY, italic: true,
    });
  });

  sld.addText(
    "Los pacientes que ven el equipo médico antes de contactar convierten 3× más.",
    {
      x: 0.55, y: 5.05, w: 8.9, h: 0.42,
      fontSize: 11, color: C.accent, italic: true,
      fontFace: FONT_BODY, align: "right",
    }
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 4 — Conversión sin Fricción
// ══════════════════════════════════════════════════════════════════════════════
{
  const sld = lightSlide();

  sld.addText("CONVERSIÓN · CTA DESIGN", {
    x: 0.55, y: 0.3, w: 8.9, h: 0.4,
    fontSize: 9, bold: true, color: C.mid,
    fontFace: FONT_BODY, charSpacing: 5,
  });

  sld.addText("Cada clic acerca. Ninguno presiona.", {
    x: 0.55, y: 0.68, w: 8.9, h: 0.8,
    fontSize: 30, bold: true, color: C.dark,
    fontFace: FONT_TITLE,
  });

  rule(sld, 1.55, C.mid);

  // Table headers
  const headers = ["", "ANTES", "DESPUÉS"];
  const rows = [
    ["Tono del CTA",     '"CONTÁCTENOS AHORA"',           '"Quiero saber más"'],
    ["Canal de destino", "Formulario largo · alta fricción", "WhatsApp directo · un clic"],
    ["Cantidad",         "Un CTA genérico",               "CTAs contextuales por servicio"],
  ];

  const colX = [0.55, 3.0, 6.3];
  const colW = [2.35, 3.1, 3.15];

  // Header row
  headers.forEach((h, c) => {
    sld.addText(h, {
      x: colX[c], y: 1.72, w: colW[c], h: 0.35,
      fontSize: 10, bold: true, color: C.mid,
      fontFace: FONT_BODY, charSpacing: 3,
    });
  });

  rows.forEach(([label, antes, despues], r) => {
    const y = 2.12 + r * 0.72;
    const bg = r % 2 === 0 ? "dde4ea" : C.light;
    sld.addShape(pptx.ShapeType.rect, {
      x: 0.55, y, w: 8.9, h: 0.65,
      fill: { color: bg },
      line: { color: "c8d4dd", width: 0.5 },
    });
    [label, antes, despues].forEach((txt, c) => {
      sld.addText(txt, {
        x: colX[c] + 0.08, y: y + 0.08, w: colW[c] - 0.1, h: 0.52,
        fontSize: 11,
        bold: c === 0,
        color: c === 2 ? C.dark : c === 0 ? C.dark : "6b7280",
        fontFace: FONT_BODY,
        italic: c === 2,
      });
    });
  });

  // Flow
  const flow = ["Hero CTA", "Servicios", "Equipo Médico", "WhatsApp", "Consulta"];
  flow.forEach((step, i) => {
    const x = 0.55 + i * 1.8;
    sld.addShape(pptx.ShapeType.roundRect, {
      x, y: 4.47, w: 1.6, h: 0.6,
      fill: { color: C.dark },
      line: { color: C.dark, width: 0 },
      rectRadius: 0.08,
    });
    sld.addText(step, {
      x, y: 4.47, w: 1.6, h: 0.6,
      fontSize: 10, bold: true, color: C.white,
      fontFace: FONT_BODY, align: "center", valign: "middle",
    });
    if (i < flow.length - 1) {
      sld.addText("→", {
        x: x + 1.6, y: 4.57, w: 0.2, h: 0.4,
        fontSize: 14, color: C.mid,
        fontFace: FONT_BODY, align: "center",
      });
    }
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 5 — Cierre
// ══════════════════════════════════════════════════════════════════════════════
{
  const sld = darkSlide();

  // Accent rectangle top-right
  sld.addShape(pptx.ShapeType.rect, {
    x: 7.5, y: 0, w: 2.5, h: 1.2,
    fill: { color: C.mid },
    line: { color: C.mid, width: 0 },
  });

  sld.addText("ALLURA · PREPARADA PARA ESCALAR", {
    x: 0.55, y: 0.3, w: 6.8, h: 0.4,
    fontSize: 9, bold: true, color: C.mid,
    fontFace: FONT_BODY, charSpacing: 5,
  });

  sld.addText("Allura,\nlista para el mundo.", {
    x: 0.55, y: 0.72, w: 8.9, h: 1.5,
    fontSize: 40, bold: true, color: C.white,
    fontFace: FONT_TITLE,
  });

  rule(sld, 2.35);

  const pillars = [
    {
      num: "01",
      title: "Captación Internacional",
      body: "SEO estructurado para búsquedas en inglés y español. Metadata optimizada por servicio.",
    },
    {
      num: "02",
      title: "Confianza Absoluta",
      body: "Diseño Quiet Luxury: espacios limpios, tipografía elegante, imágenes de alta calidad.",
    },
    {
      num: "03",
      title: "Escalabilidad",
      body: "Componentes modulares listos para nuevos servicios, idiomas y mercados.",
    },
  ];

  pillars.forEach((p, i) => {
    const x = 0.55 + i * 3.15;
    sld.addShape(pptx.ShapeType.rect, {
      x, y: 2.52, w: 2.95, h: 2.1,
      fill: { color: "0a2b4a" },
      line: { color: C.mid, width: 0.75 },
    });
    sld.addText(p.num, {
      x: x + 0.15, y: 2.6, w: 0.6, h: 0.5,
      fontSize: 22, bold: true, color: C.mid,
      fontFace: FONT_TITLE,
    });
    sld.addText(p.title, {
      x: x + 0.15, y: 3.1, w: 2.65, h: 0.45,
      fontSize: 12, bold: true, color: C.white,
      fontFace: FONT_BODY,
    });
    sld.addText(p.body, {
      x: x + 0.15, y: 3.55, w: 2.65, h: 0.95,
      fontSize: 10, color: C.mid,
      fontFace: FONT_BODY, italic: true,
    });
  });

  sld.addText(
    "Este no es un rediseño cosmético.\nEs la base digital sobre la cual Allura construirá su liderazgo en turismo médico de lujo.",
    {
      x: 0.55, y: 4.72, w: 8.9, h: 0.75,
      fontSize: 13, color: C.accent, italic: true,
      fontFace: FONT_BODY, align: "center",
    }
  );

  sld.addText("Allura — Donde la salud se convierte en experiencia", {
    x: 0.55, y: 5.3, w: 8.9, h: 0.25,
    fontSize: 9, color: "4a6a8a",
    fontFace: FONT_BODY, align: "center", charSpacing: 2,
  });
}

// ─── Write file ──────────────────────────────────────────────────────────────
pptx.writeFile({ fileName: "Allura_Caso_Exito.pptx" })
  .then(() => console.log("✓  Allura_Caso_Exito.pptx generado exitosamente."))
  .catch((err) => { console.error("Error:", err); process.exit(1); });
