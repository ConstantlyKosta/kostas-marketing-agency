import { MetadataRoute } from 'next';

import { locales } from '@/i18n';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/services', '/about', '/contact'];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteConfig.baseUrl}/${locale}${page}`,
      lastModified: new Date().toISOString()
    }))
  );
}
