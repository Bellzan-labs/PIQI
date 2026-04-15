// Phase 3 content-dependent: no real client logos live yet.
// Component is wired into the homepage so the slot is reserved; it renders
// nothing until `logos` is supplied with at least one entry.
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export type ClientLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href?: string;
};

export type ClientLogosProps = {
  eyebrow?: string;
  heading?: string;
  logos?: ClientLogo[];
};

export function ClientLogos({ eyebrow, heading, logos }: ClientLogosProps) {
  if (!logos || logos.length === 0) return null;

  return (
    <section className="section client-logos-section">
      <Container>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {heading ? <h2>{heading}</h2> : null}
        <ul className="client-logos">
          {logos.map((logo) => (
            <li key={logo.src} className="client-logo">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
