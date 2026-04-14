import type { Metadata } from "next";
import { VerticalHub } from "@/components/sections/VerticalHub";
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
      offerings={[
        "Wedding attire, bridesmaid and flower girl outfits",
        "Groom and best man suits",
        "Matric dance outfits",
        "School uniforms, tracksuits, and safety clothing",
        "Branded embroidered or printed clothing"
      ]}
      body="High fashion and bespoke clothing that translates your vision into craft."
    />
  );
}
