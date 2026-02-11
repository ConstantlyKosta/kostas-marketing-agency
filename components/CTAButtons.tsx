import Link from 'next/link';

import { siteConfig } from '@/lib/site';

interface CTAButtonsProps {
  primaryLabel: string;
  callLabel: string;
  emailLabel: string;
}

export default function CTAButtons({ primaryLabel, callLabel, emailLabel }: CTAButtonsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        href={siteConfig.contact.whatsappLink}
        className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-accent-400"
      >
        {primaryLabel}
      </Link>
      <Link
        href={`tel:${siteConfig.contact.phone}`}
        className="inline-flex items-center justify-center rounded-full border border-mist-200/40 px-6 py-3 text-sm font-semibold text-mist-100 transition hover:border-accent-400 hover:text-accent-400"
      >
        {callLabel}
      </Link>
      <Link
        href={`mailto:${siteConfig.contact.email}`}
        className="inline-flex items-center justify-center rounded-full border border-mist-200/40 px-6 py-3 text-sm font-semibold text-mist-100 transition hover:border-ember-400 hover:text-ember-400"
      >
        {emailLabel}
      </Link>
    </div>
  );
}
