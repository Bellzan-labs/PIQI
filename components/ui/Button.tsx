import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  external?: never;
};

export type ButtonAllProps = LinkProps | ButtonProps;

function classesFor(variant: ButtonVariant, size: ButtonSize, fullWidth?: boolean) {
  const variantClass =
    variant === "primary"
      ? "button-primary"
      : variant === "secondary"
        ? "button-secondary"
        : "button-ghost";
  const sizeClass = `button-${size}`;
  return ["button", variantClass, sizeClass, fullWidth ? "button-full" : ""]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonAllProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    fullWidth,
    children
  } = props;
  const classes = `${classesFor(variant, size, fullWidth)} ${className}`.trim();

  if ("href" in props && typeof props.href === "string") {
    const isExternal = props.external === true || /^https?:\/\//.test(props.href);
    if (isExternal) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
