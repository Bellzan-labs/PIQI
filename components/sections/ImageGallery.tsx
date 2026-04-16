import Image from "next/image";
import { Container } from "@/components/ui/Container";

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ImageGalleryProps = {
  eyebrow?: string;
  title?: string;
  items: readonly GalleryItem[];
};

export function ImageGallery({ eyebrow, title, items }: ImageGalleryProps) {
  if (!items || items.length === 0) return null;
  return (
    <section className="section image-gallery-section">
      <Container>
        {eyebrow || title ? (
          <div className="section-heading">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
          </div>
        ) : null}
        <div className="image-gallery-grid">
          {items.map((item) => (
            <figure key={item.src} className="image-gallery-item">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
                priority={false}
              />
              <div className="image-gallery-overlay" aria-hidden="true" />
              {item.caption ? <figcaption>{item.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
