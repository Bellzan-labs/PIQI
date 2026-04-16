import type { Metadata } from "next";
import { VerticalHub } from "@/components/sections/VerticalHub";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { getVertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

const v = getVertical("yachts")!;

export const metadata: Metadata = {
  title: v.displayName,
  description: v.description,
  alternates: { canonical: "/yachts" },
  openGraph: { title: v.displayName, description: v.description, url: `${SITE.url}/yachts` }
};

export default function YachtsPage() {
  return (
    <VerticalHub
      vertical={v}
      extraAfterMediaSplit={
        v.gallery && v.gallery.length > 0 ? (
          <ImageGallery
            eyebrow="A voyage that will exceed your expectations"
            title="The boat, in its own light."
            items={v.gallery}
          />
        ) : null
      }
    />
  );
}
