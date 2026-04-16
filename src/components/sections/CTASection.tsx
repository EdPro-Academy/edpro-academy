import { Locale, getTranslations } from "@/lib/translations";

interface CTASectionProps {
  locale: Locale;
}

export default function CTASection({ locale }: CTASectionProps) {
  const isRTL = locale === "ar";

  return (
    <section className="py-16 md:py-20 bg-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(105,204,237,0.5) 0%, transparent 60%),
                             radial-gradient(circle at 70% 50%, rgba(1,92,142,0.8) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {isRTL ? "سجّل الآن" : "Enroll Today"}
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
          {isRTL
            ? "ابدأ رحلتك التعليمية مع أكاديمية إيدبرو"
            : "Start Your Learning Journey with EdPro Academy"}
        </h2>

        <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          {isRTL
            ? "انضم إلى مئات المهنيين الذين طوّروا مساراتهم المهنية من خلال برامجنا المعتمدة من KHDA"
            : "Join hundreds of professionals who have advanced their careers through our KHDA-recognized programs"}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://buy.stripe.com/4gM4gycscaFA2PB710gUM00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-edpro-primary font-bold text-base hover:bg-edpro-light hover:text-edpro-dark transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          >
            {isRTL ? "سجّل الآن" : "Enroll Now"}
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
            href="https://forms.gle/bos9erAbaQK7cpDr7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white px-8 py-4 text-base rounded-xl"
          >
            {isRTL ? "تواصل مع فريق القبول" : "Contact Admissions"}
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/20">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <svg className="w-4 h-4 text-edpro-light" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {isRTL ? "معتمد من KHDA" : "KHDA Recognized"}
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <svg className="w-4 h-4 text-edpro-light" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {isRTL ? "دفع آمن عبر Stripe" : "Secure Stripe Payment"}
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <svg className="w-4 h-4 text-edpro-light" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {isRTL ? "دعم متعدد اللغات" : "Bilingual Support"}
          </div>
        </div>
      </div>
    </section>
  );
}
