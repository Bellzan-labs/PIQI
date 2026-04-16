import type { Metadata } from "next";
import { VerticalHub } from "@/components/sections/VerticalHub";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { getVertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

const v = getVertical("fashion")!;

export const metadata: Metadata = {
  title: v.displayName,
  description: v.description,
  alternates: { canonical: "/fashion" },
  openGraph: { title: v.displayName, description: v.description, url: `${SITE.url}/fashion` }
};

export default function FashionPage() {
  return (
    <VerticalHub
      vertical={v}
      extraAfterMediaSplit={
        v.gallery && v.gallery.length > 0 ? (
          <ImageGallery eyebrow="The studio" title="Cut, sewn, finished." items={v.gallery} />
        ) : null
      }
    />
  );
}
