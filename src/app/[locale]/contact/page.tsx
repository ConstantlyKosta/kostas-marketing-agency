import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { contactLinks, getLocaleContent, site } from '@/config/site';

type Props = {
  params: { locale: string };
};

export default function ContactPage({ params }: Props) {
  const locale = params.locale;
  const content = getLocaleContent(locale);

  return (
    <>
      <Section className="page-hero reveal">
        <Container>
          <h1>{content.contactPage.title}</h1>
          <p className="lead">{content.contactPage.intro}</p>
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
          <p className="muted">{content.contactPage.responseTime}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid">
            <Card className="reveal" style={{ animationDelay: '60ms' }}>
              <h2>{content.common.whatsappLabel}</h2>
              <p>{site.contacts.whatsapp.display}</p>
              <Button href={contactLinks.whatsapp} variant="secondary">
                {content.common.whatsappLabel}
              </Button>
            </Card>
            <Card className="reveal" style={{ animationDelay: '120ms' }}>
              <h2>{content.common.callLabel}</h2>
              <p>{site.contacts.phone}</p>
              <Button href={contactLinks.phone} variant="secondary">
                {content.common.callLabel}
              </Button>
            </Card>
            <Card className="reveal" style={{ animationDelay: '180ms' }}>
              <h2>{content.common.emailLabel}</h2>
              <p>{site.contacts.email}</p>
              <Button href={contactLinks.email} variant="secondary">
                {content.common.emailLabel}
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
