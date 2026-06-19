import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllVerticals } from "@/lib/data/verticals";

/**
 * "More from PIQI Group" — the lateral sibling strip at the foot of every
 * vertical hub. Links sideways to 2-3 sibling verticals and up to the group,
 * never down into another vertical's internals (respects the no-nesting rule).
 * Makes the thin umbrella feel connected without a mega-menu.
 */
export function SiblingStrip({ currentSlug }: { currentSlug: string }) {
  const siblings = getAllVerticals()
    .filter((v) => v.slug !== currentSlug)
    .slice(0, 3);

  if (siblings.length === 0) return null;

  return (
    <section className="section sibling-strip-section">
      <Container>
        <div className="section-heading" data-reveal>
          <p className="eyebrow">More from PIQI Group</p>
          <h2>
            Other arms of the <span className="text-accent">group</span>.
          </h2>
        </div>
        <div className="vertical-grid sibling-strip" data-reveal-fade>
          {siblings.map((v) => (
            <Link key={v.slug} href={`/${v.slug}`} className="vertical-tile">
              <div className="vertical-tile-media">
                <Image
                  src={v.heroImage.url}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 50vw, 30vw"
                  className="theme-media"
                />
                <div className="vertical-tile-overlay" aria-hidden="true" />
              </div>
              <div className="vertical-tile-body">
                <h3>{v.displayName}</h3>
                <p>{v.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="sibling-strip-up">
          <Link href="/about" className="back-link">
            About PIQI Group
          </Link>
        </p>
      </Container>
    </section>
  );
}
