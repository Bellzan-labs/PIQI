import type { CSSProperties, ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
  variant?: "default" | "narrow";
  className?: string;
};

export function Container({ children, variant = "default", className = "" }: ContainerProps) {
  const style: CSSProperties | undefined =
    variant === "narrow"
      ? { maxWidth: "var(--container-narrow, 960px)", marginInline: "auto" }
      : undefined;
  return (
    <div className={`container ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
