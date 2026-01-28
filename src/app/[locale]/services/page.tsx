import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { contactLinks, getLocaleContent } from '@/config/site';

type Props = {
  params: { locale: string };
};

export default function ServicesPage({ params }: Props) {
  const content = getLocaleContent(params.locale);

  return (
    <>
      <Section className="page-hero reveal">
        <Container>
          <h1>{content.servicesPage.title}</h1>
          <p className="lead">{content.servicesPage.intro}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="stack">
            {content.servicesPage.blocks.map((block, index) => (
              <Card
                key={block.title}
                className="service-block reveal"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div>
                  <h2>{block.title}</h2>
                  <p>{block.body}</p>
                </div>
                <Button href={contactLinks.whatsapp} variant="secondary">
                  {block.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
