// Plain module, no `astro:*` imports: `astro.config.mjs` reads it too.
export const LOCALES = ["en", "es"] as const;
export const DEFAULT_LOCALE = "en";

export type Locale = (typeof LOCALES)[number];
