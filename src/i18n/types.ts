export type Locale = "en" | "fr" | "es" | "pt";

export const LOCALES: Locale[] = ["en", "fr", "es", "pt"];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  fr: "Français",
  es: "Español",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  fr: "🇫🇷",
  es: "🇪🇸",
};
