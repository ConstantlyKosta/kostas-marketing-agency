const env = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  whatsappLink: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
  phone: process.env.NEXT_PUBLIC_PHONE,
  email: process.env.NEXT_PUBLIC_EMAIL
};

const fallbackWhatsappNumber = '+9725XXXXXXX';
const normalizedWhatsapp = env.whatsappNumber?.replace(/\D/g, '');

export const siteConfig = {
  name: env.siteName ?? "Kosta's Marketing Agency",
  description:
    env.siteDescription ??
    'Modern, on-site marketing strategy for local businesses that want more than social media reach.',
  baseUrl: env.siteUrl ?? 'https://kostas-marketing-agency.vercel.app',
  localeLabels: {
    en: 'English',
    ru: 'Русский',
    he: 'עברית'
  },
  contact: {
    whatsappNumber: env.whatsappNumber ?? fallbackWhatsappNumber,
    whatsappLink:
      env.whatsappLink ??
      (normalizedWhatsapp ? `https://wa.me/${normalizedWhatsapp}` : 'https://wa.me/9725XXXXXXX'),
    phone: env.phone ?? fallbackWhatsappNumber,
    email: env.email ?? 'hello@kostasmarketing.co'
  },
  locations: {
    hq: 'Herzliya',
    focus: 'Tel Aviv area'
  }
};
