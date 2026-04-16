import Link from "next/link";

export type CalloutProps = {
  variant?: "question" | "fact" | "note";
  label?: string;
  title: string;
  body?: string;
  cta?: { label: string; href: string };
};

export function Callout({
  variant = "note",
  label,
  title,
  body,
  cta
}: CalloutProps) {
  const isExternal = cta ? /^https?:\/\//.test(cta.href) : false;
  return (
    <aside className={`callout callout--${variant}`}>
      {label ? <span className="callout-label">{label}</span> : null}
      <p className="callout-title">{title}</p>
      {body ? <p className="callout-body">{body}</p> : null}
      {cta ? (
        isExternal ? (
          <a
            className="callout-cta"
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta.label}
          </a>
        ) : (
          <Link className="callout-cta" href={cta.href}>
            {cta.label}
          </Link>
        )
      ) : null}
    </aside>
  );
}