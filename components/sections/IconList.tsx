import Image from "next/image";
import { Container } from "@/components/ui/Container";

export type IconListItem = {
  iconSrc: string;
  title: string;
  description: string;
};

export type IconListProps = {
  eyebrow?: string;
  title?: string;
  items: readonly IconListItem[];
};

export function IconList({ eyebrow, title, items }: IconListProps) {
  return (
    <section className="section icon-list-section">
      <Container>
        {title ? (
          <div className="section-heading">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2>{title}</h2>
          </div>
        ) : null}
        <div className="icon-list-row">
          {items.map((item) => (
            <article key={item.title} className="icon-list-item">
              <div className="icon-list-icon" aria-hidden="true">
                <Image src={item.iconSrc} alt="" width={56} height={56} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}