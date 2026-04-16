import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/global/JsonLd";
import { buildReview } from "@/lib/schema";

export type QuoteBlockProps = {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorImage?: { src: string; alt: string };
  eyebrow?: string;
  emitReviewSchema?: boolean;
};

export function QuoteBlock({
  quote,
  authorName,
  authorRole,
  authorImage,
  eyebrow,
  emitReviewSchema = false
}: QuoteBlockProps) {
  return (
    <section className="section quote-block-section">
      <Container variant="narrow">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <figure className="quote-block">
          <span className="quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="quote-block-body">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="quote-author">
            {authorImage ? (
              <span className="quote-author-image">
                <Image
                  src={authorImage.src}
                  alt={authorImage.alt}
                  width={64}
                  height={64}
                />
              </span>
            ) : null}
            <span className="quote-author-text">
              <cite className="quote-author-name">{authorName}</cite>
              {authorRole ? (
                <span className="quote-author-role">{authorRole}</span>
              ) : null}
            </span>
          </figcaption>
        </figure>
        {emitReviewSchema ? (
          <JsonLd data={buildReview({ body: quote, authorName })} />
        ) : null}
      </Container>
    </section>
  );
}