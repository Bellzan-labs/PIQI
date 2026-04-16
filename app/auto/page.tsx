import type { Metadata } from "next";
import { VerticalHub } from "@/components/sections/VerticalHub";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { getVertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

const v = getVertical("auto")!;

export const metadata: Metadata = {
  title: v.displayName,
  description: v.description,
  alternates: { canonical: "/auto" },
  openGraph: { title: v.displayName, description: v.description, url: `${SITE.url}/auto` }
};

export default function AutoPage() {
  return (
    <VerticalHub
      vertical={v}
      extraAfterMediaSplit={
        v.gallery && v.gallery.length > 0 ? (
          <ImageGallery
            eyebrow="The workshop"
            title="Inside the workshop."
            items={v.gallery}
          />
        ) : null
      }
    />
  );
}
