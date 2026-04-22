import { getTranslations, isRTL } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolBox from "@/components/ToolBox";
import FAQ from "@/components/FAQ";

/**
 * Shared layout for all tool sub-pages (Discord, Instagram, PUBG, WhatsApp, etc.).
 * Renders: Header → ToolBox → page-specific content → FAQ → Footer.
 *
 * Props:
 *   lang        - current language code ("en" | "es" | "pt" | "ar")
 *   title       - page H1 heading
 *   description - short subtitle shown below the heading
 *   content     - JSX content block rendered between the tool and FAQ
 */
export default function SubPageLayout({ lang, title, description, content }) {
  const t = getTranslations(lang);
  const rtl = isRTL(lang);

  return (
    <div dir={rtl ? "rtl" : "ltr"}>
      <Header lang={lang} t={t} />

      <main>
        {/* Page hero */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-40" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-14 text-center">
            <h1 className="font-display text-[2.5rem] sm:text-5xl font-bold leading-[1.02] tracking-tight text-foreground">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </section>

        {/* Copy tool */}
        <ToolBox />

        {/* Page-specific content */}
        {content && (
          <section className="relative bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
              {content}
            </div>
          </section>
        )}

        <FAQ />
      </main>

      <Footer lang={lang} t={t} />
    </div>
  );
}
