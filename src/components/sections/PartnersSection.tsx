import { Locale, getTranslations } from "@/lib/translations";

interface PartnersSectionProps {
  locale: Locale;
}

export default function PartnersSection({ locale }: PartnersSectionProps) {
  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  return (
    <section
      id="partners"
      className="py-20 md:py-28 bg-gradient-to-b from-edpro-light-bg to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-edpro-light/20 text-edpro-dark text-sm font-semibold mb-4">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {isRTL ? "شركاؤنا" : "Our Partners"}
          </div>
          <h2 className="section-title">{t.partners.sectionTitle}</h2>
          <p className="section-subtitle">{t.partners.sectionSubtitle}</p>
        </div>

        {/* Partners Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* KHDA Card */}
          <div className="partner-card">
            {/* KHDA Logo Placeholder */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-edpro-dark to-edpro-primary flex items-center justify-center mb-6 shadow-lg">
              <div className="text-center">
                <div className="text-white font-extrabold text-xl leading-none">
                  KHDA
                </div>
                <div className="text-edpro-light text-xs mt-1 leading-none">
                  Dubai
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-3">
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t.partners.khda.status}
            </div>

            <h3 className="text-xl font-bold text-edpro-dark mb-2">
              {t.partners.khda.name}
            </h3>
            <p className="text-sm font-medium text-edpro-primary mb-4">
              {t.partners.khda.fullName}
            </p>
            <p className="text-sm text-edpro-muted leading-relaxed text-center">
              {t.partners.khda.description}
            </p>

            {/* Decorative separator */}
            <div className="mt-6 pt-6 border-t border-edpro-border w-full flex justify-center">
              <div className="flex items-center gap-2 text-xs text-edpro-muted">
                <svg
                  className="w-4 h-4 text-edpro-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                {isRTL
                  ? "هيئة تنظيمية حكومية في دبي"
                  : "Dubai Government Regulatory Authority"}
              </div>
            </div>
          </div>

          {/* Upcoming Accreditation Card */}
          <div className="partner-card border-dashed border-2 border-edpro-border bg-gradient-to-br from-white to-edpro-light-bg">
            {/* Placeholder Icon */}
            <div className="w-24 h-24 rounded-2xl bg-edpro-border/50 border-2 border-dashed border-edpro-border flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-edpro-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-3">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t.partners.upcoming.status}
            </div>

            <h3 className="text-xl font-bold text-edpro-dark mb-4">
              {t.partners.upcoming.title}
            </h3>
            <p className="text-sm text-edpro-muted leading-relaxed text-center">
              {t.partners.upcoming.description}
            </p>

            {/* Decorative separator */}
            <div className="mt-6 pt-6 border-t border-dashed border-edpro-border w-full flex justify-center">
              <div className="flex items-center gap-2 text-xs text-edpro-muted italic">
                <svg
                  className="w-4 h-4 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {isRTL
                  ? "سيتم الإعلان قريباً"
                  : "Announcement coming soon"}
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation Note */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="disclosure-box text-center">
            <p className="text-sm text-edpro-ink leading-relaxed">
              {locale === "ar"
                ? "أكاديمية إيدبرو علامة تجارية مملوكة وتُدار من قِبل إيدبرو لخدمات التعليم، وهو معهد تدريب معترف به ومرخص رسمياً من هيئة المعرفة والتنمية البشرية (KHDA) في دبي."
                : "EdPro Academy is a brand owned and operated by EdPro Education Services, a training institute officially recognized and permitted by the Knowledge and Human Development Authority (KHDA) in Dubai."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
