import type { Metadata } from "next";
import { VerticalHub } from "@/components/sections/VerticalHub";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { Callout } from "@/components/sections/Callout";
import { Container } from "@/components/ui/Container";
import { getVertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

const v = getVertical("property")!;

export const metadata: Metadata = {
  title: v.displayName,
  description: v.description,
  alternates: { canonical: "/property" },
  openGraph: { title: v.displayName, description: v.description, url: `${SITE.url}/property` }
};

export default function PropertyPage() {
  return (
    <>
      <VerticalHub
        vertical={v}
        extraAfterMediaSplit={
          v.gallery && v.gallery.length > 0 ? (
            <ImageGallery
              eyebrow="Portfolio"
              title="Properties under management."
              items={v.gallery}
            />
          ) : null
        }
      />
      <section className="section">
        <Container variant="narrow">
          <Callout
            variant="fact"
            label="The outcome"
            title="Minimize downtime. Maximize the longevity of your assets."
            body="Property management paid for in one line: what it costs you when you don't have it."
          />
        </Container>
      </section>
    </>
  );
}
