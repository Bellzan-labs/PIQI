import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export type MediaSplitProps = {
  eyebrow?: string;
  title: string;
  body?: readonly string[];
  bullets?: readonly string[];
  image: { src: string; alt: string };
  reverse?: boolean;
  cta?: { label: string; href: string };
  tone?: "default" | "accent";
};

export function MediaSplit({
  eyebrow,
  title,
  body,
  bullets,
  image,
  reverse = false,
  cta,
  tone = "default"
}: MediaSplitProps) {
  const classes = [
    "media-split",
    reverse ? "media-split--reverse" : "",
    tone === "accent" ? "media-split--accent" : ""
  ]
    .filter(Boolean)
    .join(" ");

  const isExternal = cta ? /^https?:\/\//.test(cta.href) : false;

  return (
    <section className="section media-split-section">
      <Container>
        <div className={classes}>
          <div className="media-split-text">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2>{title}</h2>
            {body && body.length > 0 ? (
              <div className="media-split-body">
                {body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : null}
            {bullets && bullets.length > 0 ? (
              <ul className="offerings-list media-split-bullets">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
            {cta ? (
              isExternal ? (
                <a
                  className="button button-primary button-md media-split-cta"
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cta.label}
                </a>
              ) : (
                <Link className="button button-primary button-md media-split-cta" href={cta.href}>
                  {cta.label}
                </Link>
              )
            ) : null}
          </div>
          <div className="media-split-image">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="media-split-img"
            />
            <div className="media-split-overlay" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}