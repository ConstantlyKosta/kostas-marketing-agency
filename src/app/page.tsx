import { locales, site } from '@/config/site';

export default function RootPage() {
  return (
    <div className="root-gate">
      <div className="root-card">
        <div className="logo">{site.agencyName}</div>
        <p className="muted">Choose your language</p>
        <div className="root-links">
          {locales.map((locale) => (
            <a key={locale} href={`/${locale}`} className="lang-link">
              {locale.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
