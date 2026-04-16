import Link from "next/link";
import { Locale, getTranslations } from "@/lib/translations";

interface ProgramsSectionProps {
  locale: Locale;
}

const deliveryColors: Record<string, string> = {
  Blended: "bg-purple-100 text-purple-700",
  Online: "bg-blue-100 text-blue-700",
  "In-person": "bg-green-100 text-green-700",
  مدمج: "bg-purple-100 text-purple-700",
  إلكتروني: "bg-blue-100 text-blue-700",
  حضوري: "bg-green-100 text-green-700",
};

const levelColors: Record<string, string> = {
  Advanced: "bg-red-50 text-red-600",
  Intermediate: "bg-amber-50 text-amber-600",
  Foundation: "bg-emerald-50 text-emerald-600",
  متقدم: "bg-red-50 text-red-600",
  متوسط: "bg-amber-50 text-amber-600",
  أساسي: "bg-emerald-50 text-emerald-600",
};

export default function ProgramsSection({ locale }: ProgramsSectionProps) {
  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  return (
    <section
      id="programs"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-edpro-light-bg"
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            {isRTL ? "برامجنا الأكاديمية" : "Academic Programs"}
          </div>
          <h2 className="section-title">{t.programs.sectionTitle}</h2>
          <p className="section-subtitle">{t.programs.sectionSubtitle}</p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.programs.cards.map((program, index) => (
            <div
              key={program.id}
              className="program-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="relative p-6 pb-4 bg-gradient-to-br from-edpro-dark to-edpro-primary">
                {/* Badge */}
                {program.badge && (
                  <div className="absolute top-4 end-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">
                      {program.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="text-4xl mb-4">{program.deliveryIcon}</div>

                {/* Delivery Mode */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      deliveryColors[program.deliveryMode] ||
                      "bg-white/20 text-white"
                    } bg-opacity-90`}
                  >
                    {program.deliveryMode}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      levelColors[program.level] || "bg-white/20 text-white"
                    } bg-opacity-90`}
                  >
                    {program.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-snug">
                  {program.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-edpro-border">
                  <div className="flex items-center gap-1.5 text-sm text-edpro-muted">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="w-px h-4 bg-edpro-border" />
                  <div className="flex items-center gap-1.5 text-sm text-edpro-muted">
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
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="font-medium">{program.fee}</span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-sm text-edpro-muted leading-relaxed mb-5 flex-1">
                  {program.overview}
                </p>

                {/* Syllabus */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-edpro-dark uppercase tracking-wider mb-3">
                    {isRTL ? "المحاور الرئيسية" : "Program Syllabus"}
                  </h4>
                  <ul className="space-y-1.5">
                    {program.syllabus.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-edpro-ink"
                      >
                        <svg
                          className="w-4 h-4 text-edpro-primary mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href="https://buy.stripe.com/4gM4gycscaFA2PB710gUM00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center py-3 rounded-xl text-sm"
                  >
                    {t.programs.enrollBtn}
                    <svg
                      className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
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
                  <Link
                    href={`/${locale}/courses/${program.id}`}
                    className="btn-secondary flex-1 justify-center py-3 rounded-xl text-sm"
                  >
                    {t.programs.syllabusBtn}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-edpro-muted">
            {isRTL
              ? "جميع البرامج معتمدة من هيئة المعرفة والتنمية البشرية (KHDA) في دبي"
              : "All programs are delivered under KHDA recognition in Dubai, UAE"}
          </p>
        </div>
      </div>
    </section>
  );
}
