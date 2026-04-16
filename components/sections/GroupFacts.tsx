import { SITE } from "@/lib/constants";
import { getAllVerticals } from "@/lib/data/verticals";
import { Motif3 } from "@/components/brand";

export function GroupFacts() {
  const verticals = getAllVerticals();
  const facts = [
    { label: "Founded", value: String(SITE.founded) },
    { label: "Area served", value: SITE.areaServed },
    { label: "Verticals", value: String(verticals.length) }
  ];

  return (
    <section className="section group-facts-section">
      <Motif3 className="group-facts-motif" variant="light" />
      <div className="container">
        <ul className="group-facts">
          {facts.map((f) => {
            const isNumeric = /^\d+\+?$/.test(f.value);
            return (
              <li key={f.label} className="group-fact">
                <span
                  className={`group-fact-value ${isNumeric ? "group-fact-value--numeric" : "group-fact-value--text"}`}
                >
                  {f.value}
                </span>
                <span className="group-fact-label">{f.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
