import type { ReactNode } from "react";

export default function ConsultingLayout({ children }: { children: ReactNode }) {
  // Segment-level chrome for the Consulting vertical. Sub-service side links can be added here
  // once the spoke pages need shared secondary navigation.
  // TODO Phase 3: add sub-service side rail for consulting spokes.
  return <div className="consulting-segment">{children}</div>;
}
