"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale, getTranslations } from "@/lib/translations";

interface CoursePageProps {
  params: {
    lang: Locale;
    id: string;
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const { lang, id } = params;
  const t = getTranslations(lang);
  const isRTL = lang === "ar";
  const cd = t.courseDetail;

  // Find the matching course card
  const course = t.programs.cards.find((c) => c.id === id);
  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
        {/* ── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-edpro-dark via-edpro-primary to-edpro-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <Link href={`/${lang}`} className="hover:text-white transition-colors">
                {isRTL ? "الرئيسية" : "Home"}
              </Link>
              <span>/</span>
              <Link href={`/${lang}#programs`} className="hover:text-white transition-colors">
                {t.programs.sectionTitle}
              </Link>
              <span>/</span>
              <span className="text-white/90 line-clamp-1">{course.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
              {/* Left: Course Info */}
              <div className="lg:col-span-2">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-edpro-light/20 text-edpro-light text-xs font-semibold border border-edpro-light/30">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    KHDA {isRTL ? "معتمد" : "Recognized"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium border border-white/20">
                    {course.deliveryMode}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium border border-white/20">
                    {course.level}
                  </span>
                  {course.badge && (
                    <span className="px-3 py-1 rounded-full bg-amber-400/90 text-amber-900 text-xs font-bold">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                  {course.title}
                </h1>

                {/* Overview */}
                <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                  {course.overview}
                </p>

                {/* Quick Stats Row */}
                <div className="flex flex-wrap gap-6 pt-6 border-t border-white/20">
                  {[
                    {
                      icon: (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: cd.durationLabel,
                      value: course.duration,
                    },
                    {
                      icon: (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                        </svg>
                      ),
                      label: cd.deliveryLabel,
                      value: course.deliveryMode,
                    },
                    {
                      icon: (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      ),
                      label: cd.languageLabel,
                      value: cd.languageValue,
                    },
                    {
                      icon: (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      ),
                      label: cd.certLabel,
                      value: cd.certValue,
                    },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-edpro-light flex-shrink-0">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-white/60 text-xs">{stat.label}</div>
                        <div className="text-white font-semibold text-sm">{stat.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Video Placeholder (hero area, desktop) */}
              <div className="hidden lg:block lg:col-span-1">
                <VideoPlaceholder cd={cd} isRTL={isRTL} />
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT + SIDEBAR ───────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">

            {/* ── LEFT / MAIN COLUMN ──────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Video Placeholder (mobile) */}
              <div className="lg:hidden">
                <VideoPlaceholder cd={cd} isRTL={isRTL} />
              </div>

              {/* Program Content / Accordion */}
              <CourseContentAccordion cd={cd} isRTL={isRTL} />

              {/* Learning Outcomes */}
              <section>
                <h2 className="text-2xl font-bold text-edpro-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-edpro-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-edpro-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  {cd.outcomesTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cd.outcomes.map((outcome, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-edpro-light-bg border border-edpro-border"
                    >
                      <div className="w-6 h-6 rounded-full bg-edpro-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-edpro-ink leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Admission Requirements */}
              <section>
                <h2 className="text-2xl font-bold text-edpro-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-edpro-light/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-edpro-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  {cd.requirementsTitle}
                </h2>
                <ul className="space-y-3">
                  {cd.requirementsItems.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-edpro-dark text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-edpro-ink leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Instructor Section */}
              <InstructorSection cd={cd} isRTL={isRTL} />
            </div>

            {/* ── RIGHT / STICKY SIDEBAR ──────────────────────────────── */}
            <div className="lg:col-span-1">
              <EnrollmentSidebar course={course} cd={cd} isRTL={isRTL} lang={lang} />
            </div>
          </div>
        </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────────────────── */

function VideoPlaceholder({
  cd,
  isRTL,
}: {
  cd: ReturnType<typeof getTranslations>["courseDetail"];
  isRTL: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-edpro-ink aspect-video relative group">
      {/* Thumbnail / Overlay */}
      {!playing && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setPlaying(true)}
          role="button"
          aria-label="Play video"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-edpro-dark/90 to-edpro-primary/80" />

          {/* EdPro logo watermark */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="relative w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
              <Image
                src="/images/edpro-logo.png"
                alt="EdPro Academy"
                fill
                className="object-contain p-1"
              />
            </div>

            {/* Play button */}
            <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-200 backdrop-blur-sm">
              <svg
                className={`w-7 h-7 text-white ${isRTL ? "" : "translate-x-0.5"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-white font-semibold text-sm">{cd.videoPlaceholder}</p>
              <p className="text-white/60 text-xs mt-1">{cd.videoNote}</p>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder iframe (shown after click) */}
      {playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-edpro-ink">
          <div className="text-center text-white/70 p-8">
            <svg className="w-12 h-12 mx-auto mb-3 text-edpro-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p className="text-sm font-medium">{cd.videoNote}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function CourseContentAccordion({
  cd,
  isRTL,
}: {
  cd: ReturnType<typeof getTranslations>["courseDetail"];
  isRTL: boolean;
}) {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const totalLessons = cd.modules.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-edpro-dark flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-edpro-primary/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-edpro-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </span>
          {cd.contentTitle}
        </h2>
        <span className="text-xs text-edpro-muted bg-edpro-light-bg border border-edpro-border px-3 py-1 rounded-full">
          {cd.modules.length} {isRTL ? "وحدات" : "modules"} · {totalLessons} {isRTL ? "دروس" : "lessons"}
        </span>
      </div>

      <div className="space-y-3">
        {cd.modules.map((module, moduleIndex) => (
          <div
            key={moduleIndex}
            className="border border-edpro-border rounded-xl overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-edpro-light-bg transition-colors text-start"
              onClick={() =>
                setOpenModule(openModule === moduleIndex ? null : moduleIndex)
              }
              aria-expanded={openModule === moduleIndex}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-edpro-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {moduleIndex + 1}
                </span>
                <span className="font-semibold text-edpro-dark text-sm md:text-base">
                  {module.title}
                </span>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0 ms-4">
                <span className="text-xs text-edpro-muted hidden sm:block">
                  {module.lessons.length} {isRTL ? "دروس" : "lessons"}
                </span>
                <svg
                  className={`w-4 h-4 text-edpro-muted transition-transform duration-200 ${
                    openModule === moduleIndex ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Accordion Body */}
            {openModule === moduleIndex && (
              <div className="border-t border-edpro-border bg-edpro-light-bg/50">
                <ul className="divide-y divide-edpro-border/50">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li
                      key={lessonIndex}
                      className="flex items-center gap-3 px-5 py-3.5"
                    >
                      <div className="w-7 h-7 rounded-full border-2 border-edpro-border flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3.5 h-3.5 text-edpro-muted"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-edpro-ink">{lesson}</span>
                      <span className="ms-auto text-xs text-edpro-muted/60 italic hidden sm:block">
                        {isRTL ? "محتوى قادم" : "Coming soon"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function InstructorSection({
  cd,
  isRTL,
}: {
  cd: ReturnType<typeof getTranslations>["courseDetail"];
  isRTL: boolean;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-edpro-dark mb-6 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-edpro-dark/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-edpro-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </span>
        {cd.instructorTitle}
      </h2>

      <div className="bg-edpro-light-bg rounded-2xl border border-edpro-border p-6 md:p-8">
        <div className="flex items-start gap-5">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-edpro-primary to-edpro-dark flex items-center justify-center flex-shrink-0 shadow-md">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="font-bold text-edpro-dark text-lg">{cd.instructorName}</h3>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                {isRTL ? "قريباً" : "TBA"}
              </span>
            </div>
            <p className="text-edpro-primary text-sm font-medium mb-3">
              {isRTL ? "مدرب أكاديمية إيدبرو" : "EdPro Academy Instructor"}
            </p>
            <p className="text-sm text-edpro-muted leading-relaxed mb-5">
              {cd.instructorBio}
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2">
              {cd.instructorCredentials.map((cred, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-edpro-border text-xs font-medium text-edpro-ink"
                >
                  <svg className="w-3 h-3 text-edpro-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CourseCard {
  id: string;
  title: string;
  deliveryMode: string;
  deliveryIcon: string;
  duration: string;
  fee: string;
  level: string;
  overview: string;
  syllabus: readonly string[];
  badge?: string;
}

function EnrollmentSidebar({
  course,
  cd,
  isRTL,
  lang,
}: {
  course: CourseCard;
  cd: ReturnType<typeof getTranslations>["courseDetail"];
  isRTL: boolean;
  lang: Locale;
}) {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-white rounded-2xl border border-edpro-border shadow-xl overflow-hidden">
        {/* Sidebar Header */}
        <div className="bg-gradient-to-br from-edpro-dark to-edpro-primary p-6 text-white">
          <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">
            {cd.feeLabel}
          </p>
          <p className="text-2xl font-extrabold text-white mb-1">{course.fee}</p>
          <p className="text-white/60 text-xs">
            {isRTL ? "شامل جميع المواد" : "All materials included"}
          </p>
        </div>

        {/* Sidebar Body */}
        <div className="p-6 space-y-5">
          {/* Enroll CTA */}
          <a
            href="https://buy.stripe.com/4gM4gycscaFA2PB710gUM00"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-4 rounded-xl bg-edpro-primary text-white font-bold text-base hover:bg-edpro-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            {cd.enrollBtn}
          </a>

          {/* Contact Admissions */}
          <a
            href={cd.contactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 rounded-xl border-2 border-edpro-primary text-edpro-primary font-semibold text-sm hover:bg-edpro-primary hover:text-white transition-all duration-200"
          >
            {cd.contactAdmissions}
          </a>

          {/* Divider */}
          <div className="border-t border-edpro-border" />

          {/* Program Details */}
          <div className="space-y-3">
            {[
              { label: cd.durationLabel, value: course.duration },
              { label: cd.deliveryLabel, value: course.deliveryMode },
              { label: cd.levelLabel, value: course.level },
              { label: cd.startLabel, value: cd.startValue },
              { label: cd.languageLabel, value: cd.languageValue },
              { label: cd.certLabel, value: cd.certValue },
              { label: cd.khdaLabel, value: cd.khdaValue },
            ].map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-3">
                <span className="text-xs text-edpro-muted font-medium flex-shrink-0">{item.label}</span>
                <span className="text-xs text-edpro-ink font-semibold text-end">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-edpro-border" />

          {/* KHDA Trust Badge */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-edpro-light-bg border border-edpro-border">
            <svg className="w-5 h-5 text-edpro-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-xs text-edpro-muted leading-relaxed">
              {isRTL
                ? "هذا البرنامج مقدَّم من أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم)، معهد معتمد من KHDA في دبي."
                : "This program is offered by EdPro Academy (part of EdPro Education Services), a KHDA-recognized institute in Dubai."}
            </p>
          </div>

          {/* Back to Programs */}
          <Link
            href={`/${lang}#programs`}
            className="flex items-center justify-center gap-2 text-xs text-edpro-muted hover:text-edpro-primary transition-colors"
          >
            <svg className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {cd.backToPrograms}
          </Link>
        </div>
      </div>
    </div>
  );
}
