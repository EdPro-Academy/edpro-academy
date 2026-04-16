"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Locale, getTranslations } from "@/lib/translations";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export default function LoginModal({
  isOpen,
  onClose,
  locale,
}: LoginModalProps) {
  const t = getTranslations(locale);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-content" dir={locale === "ar" ? "rtl" : "ltr"}>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/edpro-logo.png"
                alt="EdPro Academy"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-edpro-dark">
                {t.login.title}
              </h2>
              <p className="text-sm text-edpro-muted">{t.login.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-edpro-muted hover:bg-gray-100 hover:text-edpro-ink transition-colors"
            aria-label="Close"
          >
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
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-edpro-border mb-6" />

        {/* SSO Buttons */}
        <div className="space-y-3">
          {/* Google SSO */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-edpro-border hover:border-edpro-primary hover:bg-edpro-light/5 transition-all duration-200 group">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-medium text-edpro-ink group-hover:text-edpro-primary transition-colors">
              {t.login.googleBtn}
            </span>
          </button>

          {/* Microsoft SSO */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-edpro-border hover:border-edpro-primary hover:bg-edpro-light/5 transition-all duration-200 group">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#F25022" d="M1 1h10v10H1z" />
              <path fill="#00A4EF" d="M13 1h10v10H13z" />
              <path fill="#7FBA00" d="M1 13h10v10H1z" />
              <path fill="#FFB900" d="M13 13h10v10H13z" />
            </svg>
            <span className="font-medium text-edpro-ink group-hover:text-edpro-primary transition-colors">
              {t.login.microsoftBtn}
            </span>
          </button>
        </div>

        {/* Note */}
        <p className="mt-5 text-xs text-edpro-muted text-center leading-relaxed">
          {t.login.note}
        </p>
      </div>
    </div>
  );
}
