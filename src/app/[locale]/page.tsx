import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { contactLinks, getLocaleContent, getLocaleKey, site } from '@/config/site';

type Props = {
  params: { locale: string };
};

export default function HomePage({ params }: Props) {
  const locale = getLocaleKey(params.locale);
  const content = getLocaleContent(locale);
  const offer = site.offerDetails[locale];

  return (
    <>
      <Section className="hero">
        <Container>
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <span className="badge">{content.home.hero.badge}</span>
              <h1>{content.home.hero.title}</h1>
              <p className="lead">{content.home.hero.subtitle}</p>
              <p className="muted">{offer.description}</p>
              <div className="cta-row">
                <Button href={contactLinks.whatsapp} variant="primary">
                  {content.common.whatsappLabel}
                </Button>
                <Button href={contactLinks.phone} variant="secondary">
                  {content.common.callLabel}
                </Button>
                <Button href={contactLinks.email} variant="ghost">
                  {content.common.emailLabel}
                </Button>
              </div>
            </div>
            <Card className="hero-card reveal" style={{ animationDelay: '120ms' }}>
              <div className="card-kicker">{content.home.audit.title}</div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <ul className="checklist">
                {content.home.audit.whatYouGet.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="proof-strip reveal" id="proof">
        <Container className="proof-inner">
          <span className="proof-title">{content.home.proof.title}</span>
          <div className="proof-list">
            {site.proofList.map((proof) => (
              <span key={proof} className="proof-item">
                {proof}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="split reveal">
            <div>
              <h2>{content.home.deadInternet.title}</h2>
            </div>
            <p className="lead">{content.home.deadInternet.body}</p>
          </div>
        </Container>
      </Section>

      <Section id="services">
        <Container>
          <div className="section-head reveal">
            <h2>{content.home.services.title}</h2>
            <p className="muted">{content.home.services.intro}</p>
          </div>
          <div className="grid">
            {content.home.services.items.map((item, index) => (
              <Card
                key={item.title}
                className="service-card reveal"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="audit">
        <Container>
          <div className="section-head reveal">
            <h2>{offer.title}</h2>
            <p className="muted">{offer.description}</p>
          </div>
          <div className="audit-grid">
            <Card className="reveal" style={{ animationDelay: '80ms' }}>
              <h3>{content.home.audit.whatHappensTitle}</h3>
              <ul className="checklist">
                {content.home.audit.whatHappens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card className="reveal" style={{ animationDelay: '160ms' }}>
              <h3>{content.home.audit.whatYouGetTitle}</h3>
              <ul className="checklist">
                {content.home.audit.whatYouGet.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="section-cta reveal" style={{ animationDelay: '220ms' }}>
            <Button href={contactLinks.whatsapp} variant="primary">
              {content.home.audit.cta}
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="faq">
        <Container>
          <div className="section-head reveal">
            <h2>{content.home.faq.title}</h2>
          </div>
          <div className="grid">
            {content.home.faq.items.map((item, index) => (
              <Card key={item.q} className="faq-card reveal" style={{ animationDelay: `${index * 80}ms` }}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="cta-band" id="contact">
        <Container>
          <div className="cta-band-inner reveal">
            <h2>{content.home.finalCta.title}</h2>
            <p className="lead">{content.home.finalCta.body}</p>
            <Button href={contactLinks.whatsapp} variant="primary">
              {content.home.finalCta.cta}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
