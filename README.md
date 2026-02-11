# Kosta's Marketing Agency

Modern, dark-mode-only marketing site built with Next.js App Router, TypeScript, Tailwind CSS, and next-intl.

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build & start

```bash
npm run build
npm run start
```

## Deploy (Vercel)

This project is deploy-ready for Vercel. Import the repo and deploy with the default Next.js settings.

## Deploy (GitHub Pages)

GitHub Pages serves static files, so you must export the site:

1. Update `next.config.mjs` to add `output: 'export'` and (optionally) a `basePath`/`assetPrefix` that matches your repo name.
2. Disable `middleware.ts` for the export build (middleware is not supported for static export).
3. Run:

```bash
npm run build
```

The export will be created in the `out/` folder. Deploy that folder using a GitHub Actions workflow or by pushing it to a `gh-pages` branch.

## Edit content

All copy is stored in locale JSON files:

- `messages/en.json`
- `messages/ru.json` (draft translation)
- `messages/he.json` (draft translation)

Update the copy and structure there. The pages read directly from these files.

## Replace Contact Details

Update the placeholders in **exactly** these locations (or set env vars listed below):

1. `lib/site.ts`
   - `contact.whatsappNumber`
   - `contact.whatsappLink`
   - `contact.phone`
   - `contact.email`
2. `messages/en.json`, `messages/ru.json`, `messages/he.json`
   - Optional: update any copy that references the city/area or location descriptions.

### Env overrides (recommended for deployment)

Set these environment variables in your host (e.g. Vercel Project Settings):

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME` (optional)
- `NEXT_PUBLIC_SITE_DESCRIPTION` (optional)
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_WHATSAPP_LINK`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_EMAIL`

## RTL notes

- Hebrew routes (`/he`) render with `dir="rtl"` set at the `<html>` element in `app/[locale]/layout.tsx`.
- Keep Hebrew copy concise for better line breaks.

## i18n notes

- Localized routes are `/en`, `/ru`, `/he` via `next-intl` middleware in `middleware.ts`.
- Translation files live in `messages/` and are loaded in `i18n.ts`.

## Design tokens

**Colors** (Tailwind theme extensions in `tailwind.config.ts`)
- Ink: `#050505` / `#0d0d0f` / `#141418` / `#1f1f26`
- Accent: `#62f5ff` / `#3ad9ff` / `#00b5f5`
- Ember: `#ff8c5a` / `#ff6a3d`
- Mist: `#e6e7f2` / `#cfd2e6`

**Type scale**
- `text-xs` for labels, `text-sm` for supporting copy
- `text-lg`–`text-xl` for section subtitles
- `text-2xl`–`text-5xl` for headlines

**Spacing rules**
- Section padding: `py-16` (desktop), `py-24` for hero
- Card padding: `p-6` to `p-10`
- Layout width: `max-w-6xl`

## Tagline options (default marked)

**English**
1. **(Default)** Beyond the feed, into real-world fame.
2. Local marketing for people who actually show up.
3. Make your place the place.
4. New sincerity for local brands.
5. Earn brain space, not just impressions.
6. Real people. Real places. Real buzz.
7. The anti-template marketing studio.
8. Community-first growth, on the ground.
9. Your neighborhood, amplified.
10. Built for foot traffic and word-of-mouth.

**Русский**
1. **(Default)** Вне ленты — в реальной славе.
2. Локальный маркетинг для тех, кто приходит лично.
3. Сделаем ваше место тем самым местом.
4. Новая искренность для локальных брендов.
5. Ваша память важнее охватов.
6. Реальные люди. Реальные места. Реальный шум.
7. Анти-шаблонное агентство.
8. Рост через сообщество, на месте.
9. Ваш район, усиленный.
10. Для трафика и сарафана.

**עברית**
1. **(ברירת מחדל)** מעבר לפיד, אל תהילה אמיתית.
2. שיווק מקומי למי שמגיע באמת.
3. נהפוך את המקום שלכם למקום של כולם.
4. כנות חדשה למותגים מקומיים.
5. זוכרים אותך, לא רק רואים אותך.
6. אנשים אמיתיים. מקומות אמיתיים. באז אמיתי.
7. סטודיו שיווק נגד תבניות.
8. צמיחה קהילתית, על הקרקע.
9. השכונה שלכם, מוגברת.
10. בנוי לתנועה ולפה לאוזן.

## Hero headline options (default marked)

**English**
1. **(Default)** We build real-world marketing that makes local people remember you.
2. Turn your place into the story everyone tells.
3. Local growth built on real connection, not algorithms.
4. Marketing that lives in the street, not just the screen.
5. Make your brand the neighborhood habit.
6. Break the mold and earn brain space.

**Русский**
1. **(Default)** Мы строим офлайн-маркетинг, который заставляет людей помнить о вас.
2. Сделаем ваше место историей, которую пересказывают.
3. Локальный рост через живые связи, а не алгоритмы.
4. Маркетинг, который живёт на улице, а не только на экране.
5. Превратите бренд в привычку района.
6. Разорвите шаблон и займитесь brain space.

**עברית**
1. **(ברירת מחדל)** אנחנו בונים שיווק אמיתי בשטח שגורם לאנשים לזכור אותך.
2. נהפוך את המקום שלכם לסיפור שכולם מספרים.
3. צמיחה מקומית דרך חיבור אמיתי, לא אלגוריתמים.
4. שיווק שחי ברחוב, לא רק במסך.
5. להפוך את המותג להרגל של השכונה.
6. לשבור את התבנית ולכבוש brain space.

## CTA microcopy options (default marked)

**English**
1. **(Default)** Let’s connect
2. Book the free audit
3. Show me the plan

**Русский**
1. **(Default)** Давайте на связи
2. Записаться на аудит
3. Хочу план

**עברית**
1. **(ברירת מחדל)** בואו נתחבר
2. לקבוע אבחון חינם
3. תראו לי את התוכנית

## Free audit naming options (default marked)

1. **(Default)** Vibe Audit
2. Brain Space Audit
3. Foot-Traffic Audit
