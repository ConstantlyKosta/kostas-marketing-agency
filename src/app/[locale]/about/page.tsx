import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { contactLinks, getLocaleContent } from '@/config/site';

type Props = {
  params: { locale: string };
};

export default function AboutPage({ params }: Props) {
  const content = getLocaleContent(params.locale);

  return (
    <>
      <Section className="page-hero reveal">
        <Container>
          <h1>{content.aboutPage.title}</h1>
          {content.aboutPage.body.map((paragraph) => (
            <p key={paragraph} className="lead">
              {paragraph}
            </p>
          ))}
          <Button href={contactLinks.whatsapp} variant="primary">
            {content.aboutPage.cta}
          </Button>
        </Container>
      </Section>

      <Section className="reveal">
        <Container>
          <Card className="about-card">
            <h2>{content.home.deadInternet.title}</h2>
            <p>{content.home.deadInternet.body}</p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
