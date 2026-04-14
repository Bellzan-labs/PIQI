import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export type HeroAction = { label: string; href: string; variant?: "primary" | "secondary" };

export type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: HeroAction[];
  video?: { src: string; poster?: string };
  /** Full-bleed editorial hero image (Unsplash). Rendered behind the copy with a red gradient overlay. */
  image?: { src: string; alt: string };
  /** If true, layout stacks the copy on top of a full-bleed image (instead of a right-side inline media tile). */
  fullBleedImage?: boolean;
  children?: ReactNode;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  video,
  image,
  fullBleedImage = true,
  children
}: HeroProps) {
  const hasFullBleed = Boolean(video) || (Boolean(image) && fullBleedImage);

  return (
    <section className={`hero section${hasFullBleed ? " hero-full-bleed" : ""}`}>
      {video ? (
        <div className="hero-media" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={video.poster}
            className="hero-video"
          >
            <source src={video.src} type="video/mp4" />
          </video>
          <div className="hero-overlay hero-overlay-brand" />
        </div>
      ) : null}

      {image && fullBleedImage && !video ? (
        <div className="hero-media" aria-hidden="true">
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-image-bleed"
          />
          <div className="hero-overlay hero-overlay-brand" />
        </div>
      ) : null}

      <div className="container hero-grid">
        <div className="hero-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {subtitle ? <p className="hero-text">{subtitle}</p> : null}
          {actions && actions.length > 0 ? (
            <div className="hero-actions">
              {actions.map((a) => (
                <Button
                  key={a.href}
                  href={a.href}
                  variant={a.variant ?? "primary"}
                  size="md"
                >
                  {a.label}
                </Button>
              ))}
            </div>
          ) : null}
          {children}
        </div>

        {image && !fullBleedImage ? (
          <div className="hero-image">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="cover-image theme-media"
            />
            <div className="hero-image-overlay" aria-hidden="true" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
