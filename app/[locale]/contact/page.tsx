import { useTranslations } from 'next-intl';
import Link from 'next/link';

import CTAButtons from '@/components/CTAButtons';
import { siteConfig } from '@/lib/site';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const details = t.raw('details') as Array<{ label: string; value: string }>;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-accent-400">{t('kicker')}</p>
        <h1 className="text-3xl font-semibold text-mist-100 md:text-4xl">{t('title')}</h1>
        <p className="text-mist-200">{t('subtitle')}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-ink-800/80 bg-ink-900/60 p-6">
          <h2 className="text-xl font-semibold text-mist-100">{t('direct.title')}</h2>
          <p className="mt-3 text-sm text-mist-200">{t('direct.subtitle')}</p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-mist-200">
            <Link href={siteConfig.contact.whatsappLink} className="hover:text-accent-400">
              {t('direct.whatsapp')}: {siteConfig.contact.whatsappNumber}
            </Link>
            <Link href={`tel:${siteConfig.contact.phone}`} className="hover:text-accent-400">
              {t('direct.phone')}: {siteConfig.contact.phone}
            </Link>
            <Link href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent-400">
              {t('direct.email')}: {siteConfig.contact.email}
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-ink-800/80 bg-ink-900/60 p-6">
          <h2 className="text-xl font-semibold text-mist-100">{t('detailsTitle')}</h2>
          <div className="mt-4 space-y-3 text-sm text-mist-200">
            {details.map((detail) => (
              <div key={detail.label} className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-mist-100">{detail.label}</span>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-ink-800/80 bg-ink-900/70 p-8">
        <h2 className="text-2xl font-semibold text-mist-100">{t('cta.title')}</h2>
        <p className="mt-3 text-mist-200">{t('cta.subtitle')}</p>
        <div className="mt-6">
          <CTAButtons
            primaryLabel={t('cta.primaryCta')}
            callLabel={t('cta.callCta')}
            emailLabel={t('cta.emailCta')}
          />
        </div>
      </div>
    </div>
  );
}
