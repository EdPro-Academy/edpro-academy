"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale, getTranslations } from "@/lib/translations";
import LoginModal from "@/components/ui/LoginModal";

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const t = getTranslations(locale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const oppositeLocale: Locale = locale === "en" ? "ar" : "en";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}#programs`, label: t.nav.programs },
    { href: `/${locale}#about`, label: t.nav.about },
    { href: `/${locale}#partners`, label: t.nav.partners },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/97 backdrop-blur-md shadow-nav"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 flex-shrink-0 group"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/images/edpro-logo.png"
                  alt="EdPro Academy Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-edpro-dark font-bold text-lg leading-tight group-hover:text-edpro-primary transition-colors">
                  {locale === "ar" ? "أكاديمية إيدبرو" : "EdPro Academy"}
                </div>
                <div className="text-edpro-muted text-xs leading-snug mt-0.5">
                  {locale === "ar"
                    ? "(جزء من إي دي برو لخدمات التعليم)"
                    : "(part of EdPro Education Services)"}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-edpro-ink hover:text-edpro-primary hover:bg-edpro-light/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.edpro.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium text-edpro-muted hover:text-edpro-primary hover:bg-edpro-light/10 transition-all duration-200 flex items-center gap-1"
              >
                {t.nav.parentSite}
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
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Language Switcher — Globe Icon */}
              <Link
                href={`/${oppositeLocale}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-edpro-border text-sm font-medium text-edpro-ink hover:border-edpro-primary hover:text-edpro-primary transition-all duration-200"
                aria-label={t.nav.switchLangLabel}
              >
                {/* Globe icon (Lucide-style) */}
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>{t.nav.switchLang}</span>
              </Link>

              {/* Login Button */}
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-edpro-primary text-white text-sm font-semibold hover:bg-edpro-dark transition-all duration-200 shadow-sm hover:shadow-md"
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {t.nav.login}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-edpro-ink hover:bg-edpro-light/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-edpro-border py-4 space-y-1 animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-edpro-ink hover:text-edpro-primary hover:bg-edpro-light/10 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.edpro.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-edpro-muted hover:text-edpro-primary hover:bg-edpro-light/10 transition-all"
              >
                {t.nav.parentSite} ↗
              </a>
              <div className="pt-2 border-t border-edpro-border">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-edpro-primary text-white text-sm font-semibold hover:bg-edpro-dark transition-all"
                >
                  {t.nav.login}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        locale={locale}
      />
    </>
  );
}
