import type { Metadata } from 'next';
import { Noto_Sans, Noto_Sans_Hebrew } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Link from 'next/link';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import Wordmark from '@/components/Wordmark';
import { locales } from '@/i18n';
import { siteConfig } from '@/lib/site';

import '../globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sans'
});

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ['hebrew'],
  display: 'swap',
  variable: '--font-hebrew'
});

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.baseUrl),
    icons: {
      icon: '/icon'
    },
    alternates: {
      canonical: `/${locale}`
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: siteConfig.name,
      images: [
        {
          url: '/og-placeholder.svg',
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    }
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const isRtl = locale === 'he';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <body
        className={`${notoSans.variable} ${notoSansHebrew.variable} min-h-screen bg-ink-950 font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <header className="border-b border-ink-800/70">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2">
                <Link href={`/${locale}`} className="w-fit">
                  <Wordmark />
                </Link>
                <p className="text-xs uppercase tracking-wide text-mist-200">
                  {siteConfig.locations.hq} · {siteConfig.locations.focus}
                </p>
              </div>
              <div className="flex flex-col gap-4 md:items-end">
                <LanguageSwitcher />
                <nav className="flex flex-wrap gap-4 text-sm text-mist-200">
                  <Link href={`/${locale}/services`} className="hover:text-accent-400">
                    {messages.Navigation.services}
                  </Link>
                  <Link href={`/${locale}/about`} className="hover:text-accent-400">
                    {messages.Navigation.about}
                  </Link>
                  <Link href={`/${locale}/contact`} className="hover:text-accent-400">
                    {messages.Navigation.contact}
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-ink-800/70">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-mist-200">
              <div className="flex flex-col gap-2">
                <Wordmark />
                <p>{messages.Footer.tagline}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-mist-100">
                    {messages.Footer.connectLabel}
                  </p>
                  <p>{siteConfig.contact.whatsappNumber}</p>
                  <p>{siteConfig.contact.phone}</p>
                  <p>{siteConfig.contact.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-mist-100">
                    {messages.Footer.locationLabel}
                  </p>
                  <p>{messages.Footer.locationValue}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-mist-100">
                    {messages.Footer.linksLabel}
                  </p>
                  <Link href={`/${locale}`} className="hover:text-accent-400">
                    {messages.Navigation.home}
                  </Link>
                  <Link href={`/${locale}/services`} className="hover:text-accent-400">
                    {messages.Navigation.services}
                  </Link>
                  <Link href={`/${locale}/about`} className="hover:text-accent-400">
                    {messages.Navigation.about}
                  </Link>
                  <Link href={`/${locale}/contact`} className="hover:text-accent-400">
                    {messages.Navigation.contact}
                  </Link>
                </div>
              </div>
              <p className="text-xs text-mist-200/70">{messages.Footer.legal}</p>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
