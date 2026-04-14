import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "PIQI Group terms of use.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <section className="section">
      <Container variant="narrow">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Use</h1>
        <p>
          Our full terms of use will be published here. Contact us if you need more information in
          the meantime.
        </p>
        {/* TODO Phase 5: replace with full terms of use approved by the group. */}
      </Container>
    </section>
  );
}
