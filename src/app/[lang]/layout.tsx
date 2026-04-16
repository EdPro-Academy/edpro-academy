import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Tajawal } from "next/font/google";
import { Locale, locales, getTranslations } from "@/lib/translations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

interface LangLayoutProps {
  children: React.ReactNode;
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
  if (!locales.includes(locale)) return {};

  const t = getTranslations(locale);
  const isArabic = locale === "ar";

  return {
    title: t.meta.title,
    description: t.meta.description,
    metadataBase: new URL("https://edpro.academy"),
    alternates: {
      canonical: `https://edpro.academy/${locale}`,
      languages: {
        en: "https://edpro.academy/en",
        ar: "https://edpro.academy/ar",
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `https://edpro.academy/${locale}`,
      siteName: t.meta.siteName,
      locale: isArabic ? "ar_AE" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/edpro-og.png",
          width: 1200,
          height: 630,
          alt: "EdPro Academy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export default function LangLayout({ children, params }: LangLayoutProps) {
  const locale = params.lang as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${inter.variable} ${tajawal.variable}`}
    >
      <body
        className={`min-h-screen flex flex-col ${
          isRTL ? "font-tajawal" : "font-inter"
        } antialiased`}
      >
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
