import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!hasLocale(routing.locales, locale)) {
    const { notFound } = await import("next/navigation");
    notFound();
  }
  return {
    locale: locale!,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
