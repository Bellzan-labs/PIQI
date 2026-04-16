import { Container } from "@/components/ui/Container";

export type StatItem = {
  value: string;
  label: string;
  detail?: string;
};

export type StatRowProps = {
  eyebrow?: string;
  items: readonly StatItem[];
};

export function StatRow({ eyebrow, items }: StatRowProps) {
  return (
    <section className="section stat-row-section">
      <Container>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <ul className="stat-row">
          {items.map((item) => (
            <li key={item.label} className="stat-item">
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
              {item.detail ? (
                <span className="stat-detail">{item.detail}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}