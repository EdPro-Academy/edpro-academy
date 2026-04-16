import { notFound } from "next/navigation";
import { Locale, locales } from "@/lib/translations";
import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import AboutSection from "@/components/sections/AboutSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";

interface HomePageProps {
  params: { lang: string };
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function HomePage({ params }: HomePageProps) {
  const locale = params.lang as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <>
      <HeroSection locale={locale} />
      <ProgramsSection locale={locale} />
      <AboutSection locale={locale} />
      <PartnersSection locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
