'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { locales } from '@/i18n';
import { siteConfig } from '@/lib/site';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/([a-z]{2})(?=\/|$)/, '');

  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-mist-200">
      {locales.map((loc) => {
        const isActive = loc === locale;
        const href = `/${loc}${pathWithoutLocale}` || `/${loc}`;
        return (
          <Link
            key={loc}
            href={href}
            className={`transition ${
              isActive ? 'text-accent-400' : 'hover:text-accent-400'
            }`}
          >
            {siteConfig.localeLabels[loc]}
          </Link>
        );
      })}
    </div>
  );
}
