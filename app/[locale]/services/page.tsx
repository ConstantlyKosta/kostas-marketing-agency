import { useTranslations } from 'next-intl';

import CTAButtons from '@/components/CTAButtons';

export default function ServicesPage() {
  const t = useTranslations('Services');
  const items = t.raw('items') as Array<{ title: string; description: string; outcome: string }>;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-accent-400">{t('kicker')}</p>
        <h1 className="text-3xl font-semibold text-mist-100 md:text-4xl">{t('title')}</h1>
        <p className="text-mist-200">{t('subtitle')}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-3xl border border-ink-800/80 bg-ink-900/60 p-6">
            <h2 className="text-xl font-semibold text-mist-100">{item.title}</h2>
            <p className="mt-3 text-sm text-mist-200">{item.description}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-accent-400">{item.outcome}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-ink-800/80 bg-ink-900/70 p-8">
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
