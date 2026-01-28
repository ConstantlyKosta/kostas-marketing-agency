import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { contactLinks, getLocaleContent, getLocaleKey, locales, site } from '@/config/site';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props) {
  const content = getLocaleContent(params.locale);

  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      images: ['/og.svg']
    }
  };
}

export default function LocaleLayout({ children, params }: Props) {
  const locale = getLocaleKey(params.locale);
  const content = getLocaleContent(locale);
  const dir = locale === 'he' ? 'rtl' : 'ltr';

  return (
    <div className="page" lang={locale} dir={dir} data-dir={dir}>
      <header className="site-header">
        <Container className="header-inner">
          <a className="logo" href={`/${locale}`}>
            {site.agencyName}
          </a>
          <nav className="nav">
            <a href={`/${locale}/services`}>{content.nav.services}</a>
            <a href={`/${locale}/about`}>{content.nav.about}</a>
            <a href={`/${locale}/contact`}>{content.nav.contact}</a>
          </nav>
          <div className="header-actions">
            <LocaleSwitcher labels={content.common} />
            <Button href={contactLinks.whatsapp} variant="primary">
              {content.common.whatsappLabel}
            </Button>
          </div>
        </Container>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <Container className="footer-inner">
          <div className="footer-brand">
            <div className="logo small">{site.agencyName}</div>
            <p className="muted">{content.footer.note}</p>
          </div>
          <div className="footer-links">
            <a href={`/${locale}/services`}>{content.nav.services}</a>
            <a href={`/${locale}/about`}>{content.nav.about}</a>
            <a href={`/${locale}/contact`}>{content.nav.contact}</a>
          </div>
          <div className="footer-contact">
            <a href={contactLinks.whatsapp}>
              {content.common.whatsappLabel}: {site.contacts.whatsapp.display}
            </a>
            <a href={contactLinks.phone}>
              {content.common.callLabel}: {site.contacts.phone}
            </a>
            <a href={contactLinks.email}>
              {content.common.emailLabel}: {site.contacts.email}
            </a>
            <div className="footer-location">
              {site.locationLines[locale].map((line) => (
                <div key={line}>{line}</div>
              ))}
              <div className="muted">{site.serviceAreaLine[locale]}</div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
