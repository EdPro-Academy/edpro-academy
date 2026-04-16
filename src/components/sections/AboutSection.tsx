import { Locale, getTranslations } from "@/lib/translations";

interface AboutSectionProps {
  locale: Locale;
}

export default function AboutSection({ locale }: AboutSectionProps) {
  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white"
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
                d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
              />
            </svg>
            {isRTL ? "عن الأكاديمية" : "About Us"}
          </div>
          <h2 className="section-title">{t.about.sectionTitle}</h2>
        </div>

        {/* KHDA Disclosure */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="bg-gradient-to-r from-edpro-dark to-edpro-primary rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 end-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 start-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  {isRTL ? "الاعتراف الرسمي" : "Official Recognition"}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {t.about.disclosure}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-edpro-light-bg rounded-2xl p-8 border border-edpro-border hover:shadow-card transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-edpro-primary/10 flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-edpro-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-edpro-dark mb-3">
              {t.about.mission}
            </h3>
            <p className="text-sm text-edpro-muted leading-relaxed">
              {t.about.missionText}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-edpro-light-bg rounded-2xl p-8 border border-edpro-border hover:shadow-card transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-edpro-light/30 flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-edpro-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-edpro-dark mb-3">
              {t.about.vision}
            </h3>
            <p className="text-sm text-edpro-muted leading-relaxed">
              {t.about.visionText}
            </p>
          </div>

          {/* Values */}
          <div className="bg-edpro-light-bg rounded-2xl p-8 border border-edpro-border hover:shadow-card transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-edpro-dark/10 flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-edpro-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-edpro-dark mb-4">
              {t.about.values}
            </h3>
            <ul className="space-y-2">
              {t.about.valuesItems.map((value, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-edpro-ink"
                >
                  <svg
                    className="w-4 h-4 text-edpro-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Parent Organization Link */}
        <div className="mt-12 text-center">
          <p className="text-edpro-muted text-sm mb-4">
            {isRTL
              ? "أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم) هي مبادرة من"
              : "EdPro Academy (part of EdPro Education Services) is an initiative of"}
          </p>
          <a
            href="https://www.edpro.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-edpro-primary text-edpro-primary font-semibold text-sm hover:bg-edpro-primary hover:text-white transition-all duration-200"
          >
            {isRTL ? "زيارة إيدبرو لخدمات التعليم" : "Visit EdPro Education Services"}
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
