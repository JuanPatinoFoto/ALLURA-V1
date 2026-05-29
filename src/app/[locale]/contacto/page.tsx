import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { getTranslations } from "next-intl/server";
import { getSiteSettings, buildWhatsAppUrl } from "@/lib/getSiteSettings";
import { getPageBySlug, getSectionsByPage } from '@/lib/supabase/pages'
import { SectionRenderer } from '@/components/sections/SectionRenderer'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const [t, settings] = await Promise.all([
    getTranslations({ locale, namespace: "contacto" }),
    getSiteSettings(),
  ]);
  const ogImageUrl = settings?.seoImageUrl;
  const title = t("metaTitle");
  const description = t("metaDesc");
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(ogImageUrl && { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }),
    },
  };
}

export default async function ContactoPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dbPage = await getPageBySlug('/contacto')
  const sections = dbPage ? await getSectionsByPage(dbPage.id) : []

  if (sections.length > 0) {
    return (
      <>
        {sections.map(section => (
          <SectionRenderer key={section.id} section={section} locale={locale} />
        ))}
      </>
    )
  }

  const t = await getTranslations("contacto");
  const settings = await getSiteSettings();
  const contactEmail = settings?.contactEmail || "contact@allurahealthcare.com";
  const whatsappUrl = buildWhatsAppUrl(settings, locale as "es" | "en");

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-40 pb-20 px-6 md:px-12 text-center">
        <SectionHeading
          eyebrow={t("heroEyebrow")}
          title={t("heroTitle")}
          subtitle={t("heroSubtitle")}
          centered
          light
        />
      </section>

      <ContactForm contactEmail={contactEmail} whatsappUrl={whatsappUrl} />
    </>
  );
}
