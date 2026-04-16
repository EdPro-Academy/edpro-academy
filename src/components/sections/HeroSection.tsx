import { Locale, getTranslations } from "@/lib/translations";

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  const legalSubtext =
    locale === "ar"
      ? "(جزء من إي دي برو لخدمات التعليم)"
      : "(part of EdPro Education Services)";

  return (
    <section className="relative overflow-hidden bg-hero min-h-[85vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(105,204,237,0.4) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%),
                             radial-gradient(circle at 60% 80%, rgba(1,92,142,0.6) 0%, transparent 50%)`,
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 end-10 w-64 h-64 rounded-full bg-edpro-light/10 blur-3xl" />
      <div className="absolute bottom-20 start-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl">
          {/* KHDA Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium mb-8 animate-fade-in-up">
            <svg
              className="w-4 h-4 text-edpro-light"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {t.hero.badge}
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Primary title — clean brand name only */}
            <span className="block">{t.hero.heading}</span>
            {/* Legal sub-brand — smaller, muted, on its own line */}
            <span className="block text-white/60 text-lg md:text-xl font-medium mt-1 mb-2">
              {legalSubtext}
            </span>
            {/* Highlighted tagline */}
            <span className="block text-edpro-light mt-1">
              {t.hero.headingHighlight}
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.subheading}{" "}
            <a
              href="https://www.edpro.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-edpro-light font-semibold hover:text-white underline underline-offset-2 transition-colors"
            >
              {t.hero.parentOrg}
            </a>
            .
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href={`/${locale}#programs`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-edpro-primary font-bold text-base hover:bg-edpro-light hover:text-edpro-dark transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              {t.hero.cta}
              <svg
                className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href={`/${locale}#about`}
              className="btn-outline-white px-8 py-4 text-base rounded-xl"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Stats Row */}
          <div
            className="flex flex-wrap gap-6 md:gap-10 mt-14 pt-10 border-t border-white/20 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: t.hero.stat1Value, label: t.hero.stat1Label },
              { value: t.hero.stat2Value, label: t.hero.stat2Label },
              { value: t.hero.stat3Value, label: t.hero.stat3Label },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
                {index < 2 && (
                  <div className="w-px h-10 bg-white/20 hidden sm:block ms-3" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L1440 60L1440 0C1200 40 960 60 720 50C480 40 240 10 0 30L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
