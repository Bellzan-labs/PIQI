import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { getAllVerticals } from "@/lib/data/verticals";
import { getAllConsultingServices } from "@/lib/data/consulting-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/privacy",
    "/terms"
  ];

  const verticalRoutes = getAllVerticals().map((v) => `/${v.slug}`);
  const consultingSpokes = getAllConsultingServices().map(
    (s) => `/consulting/${s.slug}`
  );

  const all = [...staticRoutes, ...verticalRoutes, ...consultingSpokes];

  return all.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
