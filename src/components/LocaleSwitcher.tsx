'use client';

import { usePathname } from 'next/navigation';
import { locales, defaultLocale } from '@/config/site';

type Props = {
  labels: Record<string, string>;
};

export function LocaleSwitcher({ labels }: Props) {
  const pathname = usePathname() || '/';
  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = (segments[0] || defaultLocale) as string;
  const rest = segments.slice(1).join('/');

  return (
    <div className="lang-switch" aria-label={labels.languageLabel}>
      {locales.map((locale) => {
        const href = `/${locale}${rest ? `/${rest}` : ''}`;
        const active = locale === currentLocale;
        return (
          <a
            key={locale}
            href={href}
            className={`lang-link ${active ? 'is-active' : ''}`.trim()}
            aria-current={active ? 'page' : undefined}
          >
            {locale.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
