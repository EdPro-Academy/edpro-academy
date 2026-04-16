import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Locale, locales, getTranslations } from "@/lib/translations";
import { notFound } from "next/navigation";

interface SuccessPageProps {
  params: { lang: string };
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const locale = params.lang as Locale;
  const t = getTranslations(locale);
  return {
    title: `${t.success.title} | EdPro Academy`,
    description: t.success.message,
    robots: { index: false, follow: false },
  };
}

export default function SuccessPage({ params }: SuccessPageProps) {
  const locale = params.lang as Locale;
  if (!locales.includes(locale)) notFound();

  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  return (
    <div className="min-h-screen bg-gradient-to-br from-edpro-light-bg via-white to-edpro-light/10 flex items-center justify-center p-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-edpro-dark to-edpro-primary px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

            {/* Success Icon */}
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-5 mx-auto">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              {t.success.heading}
            </h1>
            <p className="text-white/80 text-sm">{t.success.title}</p>
          </div>

          {/* Content */}
          <div className="px-8 py-8">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/edpro-logo.png"
                  alt="EdPro Academy"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-edpro-dark text-lg">
                  {isRTL ? "أكاديمية إيدبرو" : "EdPro Academy"}
                </div>
                <div className="text-edpro-muted text-xs leading-snug mt-0.5">
                  {isRTL
                    ? "(جزء من إي دي برو لخدمات التعليم)"
                    : "(part of EdPro Education Services)"}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="text-center mb-8">
              <p className="text-edpro-muted text-sm leading-relaxed">
                {t.success.message}
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-edpro-light-bg rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-edpro-dark text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                {t.success.nextSteps}
              </h3>
              <ol className="space-y-3">
                {t.success.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-edpro-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm text-edpro-ink">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* KHDA Disclosure */}
            <div className="disclosure-box mb-8 text-center">
              <p className="text-xs text-edpro-muted">
                {isRTL
                  ? "أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم) علامة تجارية مملوكة وتُدار من قِبَل إيدبرو لخدمات التعليم، وهو معهد تدريب معترف به ومرخص رسمياً من هيئة المعرفة والتنمية البشرية (KHDA) في دبي. تصريح هيئة المعرفة رقم ٦٣١١١٨."
                  : "EdPro Academy (part of EdPro Education Services) is a brand owned and operated by EdPro Education Services, a training institute officially recognized and permitted by the Knowledge and Human Development Authority (KHDA) in Dubai. KHDA Permit No. 631118."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}`}
                className="btn-primary flex-1 justify-center py-3.5 rounded-xl"
              >
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {t.success.backHome}
              </Link>
              <a
                href="https://forms.gle/bos9erAbaQK7cpDr7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 justify-center py-3.5 rounded-xl"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t.success.contact}
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-edpro-muted mt-6">
          {isRTL
            ? "© ٢٠٢٤ أكاديمية إيدبرو · علامة تجارية لإيدبرو لخدمات التعليم · منظَّم من KHDA، دبي"
            : "© 2024 EdPro Academy · A brand of EdPro Education Services · Regulated by KHDA, Dubai"}
        </p>
      </div>
    </div>
  );
}
