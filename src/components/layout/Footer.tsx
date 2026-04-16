import Image from "next/image";
import Link from "next/link";
import { Locale, getTranslations } from "@/lib/translations";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  return (
    <footer className="bg-edpro-ink text-white">
      {/* KHDA Disclosure Banner */}
      <div className="bg-edpro-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-8 h-8 rounded-full bg-edpro-light/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-edpro-light"
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
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              {t.footer.disclosure}
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                <Image
                  src="/images/edpro-logo.png"
                  alt="EdPro Academy Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <div className="font-bold text-white text-base">
                  {isRTL ? "أكاديمية إيدبرو" : "EdPro Academy"}
                </div>
                <div className="text-white/60 text-xs leading-snug mt-0.5">
                  {isRTL ? "(جزء من إي دي برو لخدمات التعليم)" : "(part of EdPro Education Services)"}
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {isRTL
                ? "معهد تدريب معتمد من KHDA في دبي"
                : "KHDA-Recognized Training Institute in Dubai, UAE"}
            </p>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-edpro-light/15 text-edpro-light text-xs font-semibold w-fit">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                KHDA Recognized
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold w-fit border border-white/20">
                {isRTL ? "تصريح هيئة المعرفة رقم ٦٣١١١٨" : "KHDA Permit No. 631118"}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-white/70 hover:text-edpro-light text-sm transition-colors"
                >
                  {t.footer.links.home}
                </Link>
              </li>
              <li>
                <a
                  href={`/${locale}#programs`}
                  className="text-white/70 hover:text-edpro-light text-sm transition-colors"
                >
                  {t.footer.links.programs}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}#about`}
                  className="text-white/70 hover:text-edpro-light text-sm transition-colors"
                >
                  {t.footer.links.about}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}#partners`}
                  className="text-white/70 hover:text-edpro-light text-sm transition-colors"
                >
                  {t.footer.links.partners}
                </a>
              </li>
              <li>
                <a
                  href="https://www.edpro.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-edpro-light text-sm transition-colors flex items-center gap-1"
                >
                  {t.footer.links.parentSite}
                  <svg
                    className="w-3 h-3"
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
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              {t.footer.legal}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-edpro-light text-sm transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-edpro-light/50 flex-shrink-0"></span>
                  {t.footer.links.admissionPolicy}
                  <span className="text-xs text-white/40 italic">
                    {isRTL ? "(قريباً)" : "(Coming Soon)"}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-edpro-light text-sm transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-edpro-light/50 flex-shrink-0"></span>
                  {t.footer.links.termsOfService}
                  <span className="text-xs text-white/40 italic">
                    {isRTL ? "(قريباً)" : "(Coming Soon)"}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-edpro-light text-sm transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-edpro-light/50 flex-shrink-0"></span>
                  {t.footer.links.privacyPolicy}
                  <span className="text-xs text-white/40 italic">
                    {isRTL ? "(قريباً)" : "(Coming Soon)"}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-edpro-light mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/70 text-sm">
                  {t.footer.contactInfo.location}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-edpro-light flex-shrink-0"
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
                <a
                  href="mailto:info@edpro.academy"
                  className="text-edpro-light hover:text-white text-sm transition-colors font-medium"
                >
                  info@edpro.academy
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-edpro-light flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <a
                  href="https://edpro.academy"
                  className="text-white/70 hover:text-edpro-light text-sm transition-colors"
                >
                  {t.footer.contactInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-xs text-center sm:text-start">
              {t.footer.copyright}
            </p>
            <p className="text-white/50 text-xs flex items-center gap-1.5">
              <svg
                className="w-3 h-3 text-edpro-light"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t.footer.regulatoryNote}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
