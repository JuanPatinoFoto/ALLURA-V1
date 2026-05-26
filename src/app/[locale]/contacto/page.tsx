import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { getTranslations } from "next-intl/server";
import { getSiteSettings, buildWhatsAppUrl } from "@/lib/getSiteSettings";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "contacto" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function ContactoPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
