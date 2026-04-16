import { Locale, locales, defaultLocale } from "./translations";

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/");
  const maybeLocale = segments[1] as Locale;
  if (locales.includes(maybeLocale)) {
    return maybeLocale;
  }
  return defaultLocale;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1] as Locale;

  if (locales.includes(maybeLocale)) {
    segments[1] = locale;
    return segments.join("/");
  }

  return `/${locale}${pathname}`;
}

export { locales, defaultLocale };
export type { Locale };
