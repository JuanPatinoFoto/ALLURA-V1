// src/components/ui/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggle = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1.5 font-body text-xs tracking-[0.15em] uppercase select-none">
      <button
        onClick={() => toggle("es")}
        aria-label="Cambiar a español"
        className={
          locale === "es"
            ? "text-brand-navy font-bold"
            : "text-brand-silver hover:text-brand-navy transition-colors duration-200"
        }
      >
        ES
      </button>
      <span className="text-brand-silver" aria-hidden="true">|</span>
      <button
        onClick={() => toggle("en")}
        aria-label="Switch to English"
        className={
          locale === "en"
            ? "text-brand-navy font-bold"
            : "text-brand-silver hover:text-brand-navy transition-colors duration-200"
        }
      >
        EN
      </button>
    </div>
  );
}
