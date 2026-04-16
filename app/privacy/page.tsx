import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PIQI Group handles personal information collected through enquiries, the website, and engagements with our verticals.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <Container variant="narrow">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p>
          Our full privacy policy will be published here. If you need information about how we
          handle your data, please contact us.
        </p>
        {/* TODO Phase 5: replace with full privacy policy approved by the group. */}
      </Container>
    </section>
  );
}
