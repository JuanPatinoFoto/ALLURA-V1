import { defineField, defineType } from "sanity";

export const globalConfig = defineType({
  name: "globalConfig",
  title: "Configuración Global",
  type: "document",
  fields: [
    defineField({
      name: "whatsappUrl",
      title: "URL de WhatsApp",
      type: "url",
      description: "URL completa de WhatsApp incluyendo el mensaje predeterminado",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email de contacto",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "instagram",
      title: "URL Instagram",
      type: "url",
    }),
    defineField({
      name: "facebook",
      title: "URL Facebook",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "URL LinkedIn",
      type: "url",
    }),
    defineField({
      name: "tiktok",
      title: "URL TikTok",
      type: "url",
    }),
    defineField({
      name: "copyright_es",
      title: "Texto copyright (Español)",
      type: "string",
    }),
    defineField({
      name: "copyright_en",
      title: "Copyright text (English)",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Configuración Global" };
    },
  },
});
