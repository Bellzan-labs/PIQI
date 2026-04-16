import type { Metadata } from "next";
import { VerticalHub } from "@/components/sections/VerticalHub";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { getVertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

const v = getVertical("coaching")!;

export const metadata: Metadata = {
  title: v.displayName,
  description: v.description,
  alternates: { canonical: "/coaching" },
  openGraph: { title: v.displayName, description: v.description, url: `${SITE.url}/coaching` }
};

export default function CoachingPage() {
  return (
    <VerticalHub
      vertical={v}
      extraAfterMediaSplit={
        v.gallery && v.gallery.length > 0 ? (
          <ImageGallery
            eyebrow="The practice"
            title="Where the work happens."
            items={v.gallery}
          />
        ) : null
      }
    />
  );
}
