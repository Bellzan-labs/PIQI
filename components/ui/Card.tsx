import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type CardProps = {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  children?: ReactNode;
};

export function Card({ title, description, image, imageAlt, href, children }: CardProps) {
  const body = (
    <>
      {image ? (
        <div className="ui-card-media">
          <Image src={image} alt={imageAlt ?? ""} fill sizes="(max-width: 900px) 100vw, 33vw" />
        </div>
      ) : null}
      <div className="ui-card-body">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="ui-card ui-card-link">
        {body}
      </Link>
    );
  }

  return <article className="ui-card">{body}</article>;
}
