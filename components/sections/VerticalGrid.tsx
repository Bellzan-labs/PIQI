import Image from "next/image";
import Link from "next/link";
import { getAllVerticals } from "@/lib/data/verticals";

export function VerticalGrid() {
  const verticals = getAllVerticals();
  return (
    <section className="section vertical-grid-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our verticals</p>
          <h2>
            Six arms, <span className="text-accent">one</span> group.
          </h2>
        </div>

        <div className="vertical-grid">
          {verticals.map((v) => (
            <Link key={v.slug} href={`/${v.slug}`} className="vertical-tile">
              <div className="vertical-tile-media">
                <Image
                  src={v.heroImage.url}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 50vw, 18vw"
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
      </div>
    </section>
  );
}
