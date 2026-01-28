export type Locale = 'en' | 'ru' | 'he';

export const locales: Locale[] = ['en', 'ru', 'he'];
export const defaultLocale: Locale = 'en';

export const site = {
  agencyName: "Kosta’s Marketing Agency",
  locationLines: {
    en: ["HQ: Herzliya, Israel.", "Focus: Tel Aviv area. Other Israel — let’s talk."],
    ru: ["Штаб‑квартира: Герцлия, Израиль.", "Фокус: район Тель‑Авива. Остальной Израиль — давайте обсудим."],
    he: ["מטה: הרצליה, ישראל.", "פוקוס: אזור תל אביב. לשאר ישראל — נדבר."]
  },
  serviceAreaLine: {
    en: "Tel Aviv area first. For the rest of Israel — let’s talk.",
    ru: "В первую очередь — район Тель‑Авива. Остальной Израиль — давайте обсудим.",
    he: "קודם אזור תל אביב. לשאר ישראל — נדבר."
  },
  proofList: ["Postel TLV", "Shuffle Bar", "Molotow", "Lager&Ale"],
  offerDetails: {
    en: {
      title: "Free on‑site audit with the marketing creative.",
      description: "We visit your place, feel the vibe, meet the people, and propose grounded solutions."
    },
    ru: {
      title: "Бесплатный выездной аудит с маркетинг‑креативом.",
      description: "Мы приезжаем, чувствуем атмосферу, знакомимся с командой и предлагаем приземлённые решения."
    },
    he: {
      title: "אודיט חינם במקום עם הקריאייטיב.",
      description: "אנחנו מגיעים, מרגישים את האווירה, פוגשים את האנשים ומציעים פתרונות מעשיים."
    }
  },
  contacts: {
    whatsapp: {
      number: "972501234567",
      display: "+972 50 123 4567"
    },
    phone: "+972 50 123 4567",
    email: "hello@kostamarketing.com"
  },
  locales: {
    en: {
      seo: {
        title: "Kosta’s Marketing Agency — Beyond Social. Real‑World Memorability.",
        description:
          "Local‑first marketing in the Tel Aviv area: community presence, brain space, and real‑world growth. Free on‑site audit."
      },
      nav: {
        services: "Services",
        about: "About",
        contact: "Contact"
      },
      common: {
        whatsappLabel: "WhatsApp",
        callLabel: "Call",
        emailLabel: "Email",
        languageLabel: "Language"
      },
      home: {
        hero: {
          title: "Beyond social media → real‑world memorability.",
          subtitle: "We build community presence and brand ‘brain space’ — the feeling people remember.",
          badge: "Free on‑site audit (TLV area)"
        },
        proof: {
          title: "Trusted by"
        },
        deadInternet: {
          title: "Dead Internet → New Sincerity.",
          body:
            "In a world flooded with synthetic noise, people want the real thing. We practice Новая Искренность: honest community moments, real people, real places. AI improves workflows — it never fabricates reality."
        },
        services: {
          title: "Services that make people remember",
          intro: "Outcomes‑focused, local‑first marketing beyond social media.",
          items: [
            {
              title: "Real‑world growth strategy",
              body: "Local attention maps, neighborhood touchpoints, and measurable foot‑traffic lifts."
            },
            {
              title: "Community‑driven video",
              body: "Real people, real vibe. Short‑form that actually belongs to the place."
            },
            {
              title: "On‑site activations & collaborations",
              body: "Events, pop‑ups, and partnerships that turn visitors into regulars."
            },
            {
              title: "Memorability systems",
              body: "Touchpoints, story, identity, and repeatable rituals that stick."
            },
            {
              title: "Responsible AI usage",
              body: "Automation for planning, editing, and ops — never fake people or fake facts."
            }
          ]
        },
        audit: {
          title: "What the free audit looks like",
          whatHappensTitle: "What happens",
          whatHappens: [
            "Walkthrough + quick interviews",
            "Audience vibe scan",
            "Competitive reality check",
            "Immediate low‑cost fixes"
          ],
          whatYouGetTitle: "What you get",
          whatYouGet: [
            "1‑page action plan",
            "Reality‑based content angles",
            "Activation ideas + collaboration targets"
          ],
          cta: "Book the free audit on WhatsApp"
        },
        faq: {
          title: "FAQ",
          items: [
            {
              q: "Who is this for?",
              a: "Independent venues, hospitality, lifestyle, and retail that want real local traction."
            },
            {
              q: "What does ‘beyond social’ mean?",
              a: "Social is a distribution layer, not the strategy. The strategy is what happens in the real world."
            },
            {
              q: "What’s your video philosophy?",
              a: "Community‑driven, not performative. Real faces and places build trust."
            },
            {
              q: "How do you use AI?",
              a: "For speed and organization — never fabricating people, reviews, or events."
            },
            {
              q: "What’s your service area?",
              a: "Tel Aviv area focus. For the rest of Israel — let’s talk."
            },
            {
              q: "How do we start?",
              a: "Send a WhatsApp, pick a time, we come for the free audit."
            }
          ]
        },
        finalCta: {
          title: "Ready to win real‑world attention?",
          body: "Let’s map your next 90 days and build the brand people remember.",
          cta: "Start on WhatsApp"
        }
      },
      servicesPage: {
        title: "Services",
        intro:
          "Outcomes‑first marketing beyond social media. Choose what you need or ask for the full system.",
        blocks: [
          {
            title: "Real‑world growth strategy",
            body: "Local attention strategy, positioning, and a clear plan for measurable foot‑traffic growth.",
            cta: "Discuss on WhatsApp"
          },
          {
            title: "Community‑driven video",
            body: "Short‑form rooted in real people and real places — nothing staged, everything authentic.",
            cta: "Discuss on WhatsApp"
          },
          {
            title: "On‑site activations & collaborations",
            body: "Events, collaborations, and neighborhood partnerships that create memorable moments.",
            cta: "Discuss on WhatsApp"
          },
          {
            title: "Memorability systems",
            body: "Touchpoints, story, and identity systems that make your brand stick.",
            cta: "Discuss on WhatsApp"
          },
          {
            title: "Responsible AI support",
            body: "AI for planning, editing, and ops — never for fabricating reality.",
            cta: "Discuss on WhatsApp"
          }
        ]
      },
      aboutPage: {
        title: "About Kosta’s Marketing Agency",
        body: [
          "We’re based in Herzliya and work across the Tel Aviv area. We believe community presence beats algorithm chasing.",
          "We practice Новая Искренность and responsible AI: we speed up workflows without fabricating reality."
        ],
        cta: "Talk to us on WhatsApp"
      },
      contactPage: {
        title: "Contact",
        intro: "Fastest is WhatsApp. Phone and email work too.",
        responseTime: "We reply within 1 business day."
      },
      footer: {
        note: "Beyond social. Real‑world memorability."
      }
    },
    ru: {
      seo: {
        title: "Kosta’s Marketing Agency — за пределами соцсетей",
        description:
          "Локальный маркетинг в районе Тель‑Авива: сообщество, «место в голове» и рост в реальном мире. Бесплатный аудит."
      },
      nav: {
        services: "Услуги",
        about: "О нас",
        contact: "Контакты"
      },
      common: {
        whatsappLabel: "WhatsApp",
        callLabel: "Позвонить",
        emailLabel: "Email",
        languageLabel: "Язык"
      },
      home: {
        hero: {
          title: "За пределами соцсетей → реальная запоминаемость.",
          subtitle: "Мы строим присутствие в сообществе и «место в голове» бренда — ощущение, которое остаётся.",
          badge: "Бесплатный выездной аудит (Тель‑Авив)"
        },
        proof: {
          title: "Нам доверяют"
        },
        deadInternet: {
          title: "«Мёртвый интернет» → Новая Искренность.",
          body:
            "В мире синтетического шума людям нужен настоящий опыт. Мы работаем в логике «Новой Искренности»: честные моменты сообщества, реальные люди, реальные места. ИИ помогает процессам — но не подменяет реальность."
        },
        services: {
          title: "Услуги, которые запоминаются",
          intro: "Локальный маркетинг с результатом — за пределами соцсетей.",
          items: [
            {
              title: "Стратегия офлайн‑роста",
              body: "Карта локального внимания, точки контакта и измеримый рост реального трафика."
            },
            {
              title: "Видео от сообщества",
              body: "Реальные люди, реальный вайб. Короткие ролики, которые принадлежат месту."
            },
            {
              title: "Офлайн‑активации и коллаборации",
              body: "События, pop‑ups и партнёрства, которые превращают гостей в регулярных."
            },
            {
              title: "Система запоминаемости",
              body: "Контакты, история, айдентика и повторяемые ритуалы, которые остаются."
            },
            {
              title: "Ответственный ИИ",
              body: "Автоматизация планирования, монтажа и операций — без фейков и выдумок."
            }
          ]
        },
        audit: {
          title: "Как выглядит бесплатный аудит",
          whatHappensTitle: "Что происходит",
          whatHappens: [
            "Обход пространства + короткие интервью",
            "Скан атмосферы аудитории",
            "Реальный конкурентный контекст",
            "Быстрые низкозатратные улучшения"
          ],
          whatYouGetTitle: "Что вы получаете",
          whatYouGet: [
            "1‑страничный план действий",
            "Идеи контента, основанные на реальности",
            "Идеи активаций и партнёров"
          ],
          cta: "Записаться на аудит в WhatsApp"
        },
        faq: {
          title: "Вопросы",
          items: [
            {
              q: "Кому это подходит?",
              a: "Независимые места: гостеприимство, бары, кафе, ритейл и лайфстайл с локальной аудиторией."
            },
            {
              q: "Что значит «за пределами соцсетей»?",
              a: "Соцсети — это распределение, а не стратегия. Стратегия — в реальном мире."
            },
            {
              q: "Философия видео?",
              a: "Комьюнити‑подход, а не постановка. Настоящие лица и места создают доверие."
            },
            {
              q: "Как вы используете ИИ?",
              a: "Для скорости и организации — без подделки людей, отзывов или событий."
            },
            {
              q: "География?",
              a: "Фокус — район Тель‑Авива. Остальной Израиль — давайте обсудим."
            },
            {
              q: "Как начать?",
              a: "Напишите в WhatsApp, выберем время, приедем на бесплатный аудит."
            }
          ]
        },
        finalCta: {
          title: "Готовы забирать реальное внимание?",
          body: "Давайте спланируем следующие 90 дней и построим бренд, который помнят.",
          cta: "Начать в WhatsApp"
        }
      },
      servicesPage: {
        title: "Услуги",
        intro:
          "Маркетинг, который работает вне соцсетей. Можно выбрать отдельные услуги или построить систему.",
        blocks: [
          {
            title: "Стратегия офлайн‑роста",
            body: "Локальная стратегия внимания, позиционирование и план измеримого роста трафика.",
            cta: "Обсудить в WhatsApp"
          },
          {
            title: "Видео от сообщества",
            body: "Короткие ролики на реальных людях и местах — без постановки.",
            cta: "Обсудить в WhatsApp"
          },
          {
            title: "Офлайн‑активации и коллаборации",
            body: "События, коллаборации и партнёрства, которые создают запоминаемые моменты.",
            cta: "Обсудить в WhatsApp"
          },
          {
            title: "Система запоминаемости",
            body: "Контакты, история и айдентика, которые помогают бренду закрепиться.",
            cta: "Обсудить в WhatsApp"
          },
          {
            title: "Ответственный ИИ",
            body: "ИИ для планирования, монтажа и операций — без подмены реальности.",
            cta: "Обсудить в WhatsApp"
          }
        ]
      },
      aboutPage: {
        title: "О Kosta’s Marketing Agency",
        body: [
          "Мы базируемся в Герцлии и работаем в районе Тель‑Авива. Считаем, что присутствие в сообществе сильнее гонки за алгоритмами.",
          "Новая Искренность и ответственный ИИ: ускоряем работу, но не искажаем реальность."
        ],
        cta: "Написать в WhatsApp"
      },
      contactPage: {
        title: "Контакты",
        intro: "Самый быстрый способ — WhatsApp. Также доступны телефон и email.",
        responseTime: "Отвечаем в течение 1 рабочего дня."
      },
      footer: {
        note: "За пределами соцсетей. Реальная запоминаемость."
      }
    },
    he: {
      seo: {
        title: "Kosta’s Marketing Agency — מעבר לרשתות חברתיות",
        description: "שיווק מקומי באזור תל אביב: ״מקום בראש״ וצמיחה בעולם האמיתי. אודיט חינם במקום."
      },
      nav: {
        services: "שירותים",
        about: "אודות",
        contact: "יצירת קשר"
      },
      common: {
        whatsappLabel: "WhatsApp",
        callLabel: "שיחה",
        emailLabel: "אימייל",
        languageLabel: "שפה"
      },
      home: {
        hero: {
          title: "מעבר לרשתות חברתיות → זכירות בעולם האמיתי.",
          subtitle: "אנחנו בונים נוכחות קהילתית ו״מקום בראש״ של המותג — תחושה שנשארת.",
          badge: "אודיט חינם במקום (אזור ת״א)"
        },
        proof: {
          title: "סומכים עלינו"
        },
        deadInternet: {
          title: "האינטרנט המת → כנות חדשה.",
          body:
            "בעולם של רעש סינתטי אנשים מחפשים את הדבר האמיתי. אנחנו עובדים בגישת ״הכנות החדשה״: רגעים קהילתיים אמיתיים, אנשים אמיתיים, מקומות אמיתיים. AI משפר תהליכים — לא ממציא מציאות."
        },
        services: {
          title: "שירותים שגורמים לזכור",
          intro: "שיווק מקומי עם תוצאות — מעבר לרשתות.",
          items: [
            {
              title: "אסטרטגיית צמיחה בעולם האמיתי",
              body: "מפת תשומת‑לב מקומית, נקודות מגע וצמיחה מדידה בתנועה."
            },
            {
              title: "וידאו קהילתי",
              body: "אנשים אמיתיים, וייב אמיתי. תוכן קצר ששייך למקום."
            },
            {
              title: "הפעלות בשטח ושיתופי פעולה",
              body: "אירועים, פופ‑אפים ושיתופים שהופכים מבקרים לקבועים."
            },
            {
              title: "מערכת זכירות",
              body: "נקודות מגע, סיפור, זהות חזותית וטקסים שחוזרים ונשארים."
            },
            {
              title: "AI אחראי",
              body: "אוטומציה לתכנון, עריכה ותפעול — בלי זיופים ובלי מצג שווא."
            }
          ]
        },
        audit: {
          title: "איך נראה האודיט החינמי",
          whatHappensTitle: "מה קורה",
          whatHappens: [
            "סיור במקום + שיחות קצרות",
            "סקר וייב קהל",
            "בדיקת מציאות תחרותית",
            "שיפורים מיידיים בעלות נמוכה"
          ],
          whatYouGetTitle: "מה מקבלים",
          whatYouGet: [
            "תכנית פעולה בעמוד אחד",
            "זוויות תוכן שמבוססות על מציאות",
            "רעיונות להפעלות ולשיתופי פעולה"
          ],
          cta: "קביעת אודיט ב‑WhatsApp"
        },
        faq: {
          title: "שאלות נפוצות",
          items: [
            {
              q: "למי זה מתאים?",
              a: "מקומות עצמאיים: אירוח, ברים, קפה, ריטייל ולייפסטייל שרוצים קהל מקומי אמיתי."
            },
            {
              q: "מה זה אומר ״מעבר לרשתות״?",
              a: "הרשתות הן שכבת הפצה, לא אסטרטגיה. האסטרטגיה היא מה שקורה בשטח."
            },
            {
              q: "מה הפילוסופיה שלכם לגבי וידאו?",
              a: "קהילתי ולא מצועצע. פנים ומקומות אמיתיים בונים אמון."
            },
            {
              q: "איך אתם משתמשים ב‑AI?",
              a: "למהירות וארגון — בלי להמציא אנשים, ביקורות או אירועים."
            },
            {
              q: "אזור שירות?",
              a: "פוקוס אזור תל אביב. לשאר ישראל — נדבר."
            },
            {
              q: "איך מתחילים?",
              a: "שולחים WhatsApp, קובעים זמן, ומגיעים לאודיט חינם."
            }
          ]
        },
        finalCta: {
          title: "מוכנים לנצח תשומת‑לב אמיתית?",
          body: "נמפה את 90 הימים הקרובים ונבנה מותג שאנשים זוכרים.",
          cta: "מתחילים ב‑WhatsApp"
        }
      },
      servicesPage: {
        title: "שירותים",
        intro: "שיווק שמנצח מחוץ לרשתות. אפשר לבחור שירותים נקודתיים או מערכת מלאה.",
        blocks: [
          {
            title: "אסטרטגיית צמיחה בעולם האמיתי",
            body: "אסטרטגיית תשומת‑לב מקומית, מיצוב ותכנית לצמיחה מדידה בתנועה.",
            cta: "לדבר ב‑WhatsApp"
          },
          {
            title: "וידאו קהילתי",
            body: "תוכן קצר שמבוסס על אנשים ומקומות אמיתיים — בלי הצגה.",
            cta: "לדבר ב‑WhatsApp"
          },
          {
            title: "הפעלות בשטח ושיתופי פעולה",
            body: "אירועים, שיתופים ושותפויות שמייצרים רגעים זכירים.",
            cta: "לדבר ב‑WhatsApp"
          },
          {
            title: "מערכת זכירות",
            body: "נקודות מגע, סיפור וזהות שמקבעים את המותג בזיכרון.",
            cta: "לדבר ב‑WhatsApp"
          },
          {
            title: "AI אחראי",
            body: "AI לתכנון, עריכה ותפעול — בלי להמציא מציאות.",
            cta: "לדבר ב‑WhatsApp"
          }
        ]
      },
      aboutPage: {
        title: "אודות Kosta’s Marketing Agency",
        body: [
          "אנחנו בהרצליה ועובדים באזור תל אביב. אנחנו מאמינים שנוכחות קהילתית חזקה יותר ממרדף אחרי אלגוריתמים.",
          "הכנות החדשה + AI אחראי: משפרים תהליכים בלי להמציא מציאות."
        ],
        cta: "דברו איתנו ב‑WhatsApp"
      },
      contactPage: {
        title: "יצירת קשר",
        intro: "הדרך המהירה ביותר: WhatsApp. אפשר גם טלפון ואימייל.",
        responseTime: "נשיב תוך יום עסקים."
      },
      footer: {
        note: "מעבר לרשתות. זכירות בעולם האמיתי."
      }
    }
  }
} as const;

export const contactLinks = {
  whatsapp: `https://wa.me/${site.contacts.whatsapp.number}`,
  phone: `tel:${site.contacts.phone.replace(/[^\d+]/g, '')}`,
  email: `mailto:${site.contacts.email}`
} as const;

export function getLocaleContent(locale: string) {
  return site.locales[(locale as Locale) || defaultLocale] ?? site.locales[defaultLocale];
}

export function getLocaleKey(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}
