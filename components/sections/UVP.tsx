type UVPItem = { title: string; description: string; icon?: string };

const DEFAULT_ITEMS: UVPItem[] = [
  {
    title: "Working-draft tight",
    description:
      "We keep the first pass simple: understand the business, the pressure points, and what success needs to look like."
  },
  {
    title: "Commercially honest",
    description:
      "Procurement, contracts, costs, and risk live alongside the strategy — not in a separate silo."
  },
  {
    title: "Handoff-ready",
    description:
      "Workshops, controls, and close-out support so the plan can actually be run by the business."
  }
];

export function UVP({
  eyebrow = "Why PIQI",
  title = "Strategy that survives the first month of delivery.",
  items = DEFAULT_ITEMS
}: {
  eyebrow?: string;
  title?: string;
  items?: UVPItem[];
}) {
  return (
    <section className="section uvp-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="uvp-grid">
          {items.map((item) => (
            <article key={item.title} className="uvp-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
