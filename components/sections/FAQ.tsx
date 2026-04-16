import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/global/JsonLd";
import { buildFAQPage } from "@/lib/schema";
import type { FAQ as FAQType } from "@/lib/data/faqs";

export type FAQProps = {
  items: readonly FAQType[];
  eyebrow?: string;
  title?: string;
  slugForSchema?: string;
};

export function FAQ({ items, eyebrow, title }: FAQProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="section faq-section">
      <Container variant="narrow">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h2>{title}</h2> : null}
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
      <JsonLd data={buildFAQPage(items)} />
    </section>
  );
}
