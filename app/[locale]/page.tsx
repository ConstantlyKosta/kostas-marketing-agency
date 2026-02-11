import { useTranslations } from 'next-intl';

import CTAButtons from '@/components/CTAButtons';
import { siteConfig } from '@/lib/site';

export default function HomePage() {
  const t = useTranslations('Home');
  const services = t.raw('services.items') as Array<{ title: string; description: string }>;
  const process = t.raw('process.steps') as Array<{ title: string; description: string }>;
  const testimonials = t.raw('testimonials.items') as Array<{ quote: string; name: string }>;
  const faqs = t.raw('faq.items') as Array<{ question: string; answer: string }>;
  const trustSignals = t.raw('testimonials.trustSignals') as string[];

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <section className="flex flex-col gap-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-400">
          {t('hero.kicker')}
        </p>
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold leading-tight text-mist-100 md:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-mist-200 md:text-xl">{t('hero.subtitle')}</p>
            <p className="text-sm text-mist-200/80">{t('hero.contrast')}</p>
            <CTAButtons
              primaryLabel={t('hero.primaryCta')}
              callLabel={t('hero.callCta')}
              emailLabel={t('hero.emailCta')}
            />
          </div>
          <div className="rounded-3xl border border-ink-800/80 bg-ink-900/70 p-6 text-sm text-mist-200 shadow-lg shadow-black/40">
            <p className="text-base font-semibold text-mist-100">{t('hero.auditLine')}</p>
            <p className="mt-3">{t('hero.auditDetail')}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-accent-400">{t('hero.auditTime')}</p>
          </div>
        </div>
        <p className="text-sm text-mist-200">{t('hero.trustLine')}</p>
      </section>

      <section className="border-y border-ink-800/70 py-10">
        <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-wide text-mist-200">
          {t('proofStrip.label')}:
          <span className="text-mist-100">Postel TLV</span>
          <span className="text-mist-100">Shuffle Bar</span>
          <span className="text-mist-100">Molotow</span>
          <span className="text-mist-100">Lager&Ale</span>
        </div>
      </section>

      <section className="grid gap-10 py-16 md:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-mist-100 md:text-3xl">
            {t('deadInternet.title')}
          </h2>
          <p className="text-mist-200">{t('deadInternet.body')}</p>
        </div>
        <div className="rounded-3xl border border-ink-800/80 bg-ink-900/60 p-6 text-sm text-mist-200">
          <p className="text-xs uppercase tracking-wide text-accent-400">{t('deadInternet.calloutLabel')}</p>
          <p className="mt-3 text-base text-mist-100">{t('deadInternet.callout')}</p>
        </div>
      </section>

      <section className="py-16" id="services">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-400">{t('services.kicker')}</p>
          <h2 className="text-2xl font-semibold text-mist-100 md:text-3xl">{t('services.title')}</h2>
          <p className="text-mist-200">{t('services.subtitle')}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-ink-800/80 bg-ink-900/50 p-6 transition hover:-translate-y-1 hover:border-accent-400/60"
            >
              <h3 className="text-lg font-semibold text-mist-100">{service.title}</h3>
              <p className="mt-3 text-sm text-mist-200">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="grid gap-8 md:grid-cols-[0.6fr_1fr] md:items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-400">{t('process.kicker')}</p>
            <h2 className="text-2xl font-semibold text-mist-100 md:text-3xl">{t('process.title')}</h2>
            <p className="text-mist-200">{t('process.subtitle')}</p>
          </div>
          <div className="space-y-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-ink-800/70 bg-ink-900/60 p-5"
              >
                <p className="text-xs uppercase tracking-wide text-accent-400">
                  {t('process.stepLabel', { number: index + 1 })}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-mist-100">{step.title}</h3>
                <p className="mt-2 text-sm text-mist-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="audit">
        <div className="rounded-3xl border border-ink-800/80 bg-gradient-to-br from-ink-900/80 via-ink-900/50 to-ink-950 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-400">{t('audit.kicker')}</p>
          <h2 className="mt-4 text-2xl font-semibold text-mist-100 md:text-3xl">{t('audit.title')}</h2>
          <p className="mt-4 text-mist-200">{t('audit.subtitle')}</p>
          <ul className="mt-6 grid gap-4 text-sm text-mist-200 md:grid-cols-3">
            <li className="rounded-2xl border border-ink-800/80 bg-ink-900/60 p-4">{t('audit.details.duration')}</li>
            <li className="rounded-2xl border border-ink-800/80 bg-ink-900/60 p-4">{t('audit.details.outputs')}</li>
            <li className="rounded-2xl border border-ink-800/80 bg-ink-900/60 p-4">{t('audit.details.nextStep')}</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-400">{t('testimonials.kicker')}</p>
            <h2 className="text-2xl font-semibold text-mist-100 md:text-3xl">{t('testimonials.title')}</h2>
            <p className="text-mist-200">{t('testimonials.subtitle')}</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-mist-200">
              {trustSignals.map((signal) => (
                <span key={signal} className="rounded-full border border-ink-800/80 px-4 py-2">
                  {signal}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl border border-ink-800/80 bg-ink-900/60 p-6">
                <p className="text-sm text-mist-200">“{item.quote}”</p>
                <p className="mt-4 text-xs uppercase tracking-wide text-accent-400">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-400">{t('faq.kicker')}</p>
            <h2 className="text-2xl font-semibold text-mist-100 md:text-3xl">{t('faq.title')}</h2>
            <p className="text-mist-200">{t('faq.subtitle')}</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-ink-800/80 bg-ink-900/60 p-6">
                <h3 className="text-base font-semibold text-mist-100">{faq.question}</h3>
                <p className="mt-2 text-sm text-mist-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="flex flex-col gap-6 rounded-3xl border border-ink-800/80 bg-ink-900/70 p-10 text-center">
          <h2 className="text-2xl font-semibold text-mist-100 md:text-3xl">{t('finalCta.title')}</h2>
          <p className="text-mist-200">{t('finalCta.subtitle')}</p>
          <CTAButtons
            primaryLabel={t('finalCta.primaryCta')}
            callLabel={t('finalCta.callCta')}
            emailLabel={t('finalCta.emailCta')}
          />
          <p className="text-xs uppercase tracking-wide text-mist-200">
            {t('finalCta.locationLine', {
              hq: siteConfig.locations.hq,
              focus: siteConfig.locations.focus
            })}
          </p>
        </div>
      </section>
    </div>
  );
}
