import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ru', 'he'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    return { messages: (await import('./messages/en.json')).default };
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
