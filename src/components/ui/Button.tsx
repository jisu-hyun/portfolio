import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  target?: "_blank";
  rel?: string;
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-white/90 text-black hover:bg-white hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
  ghost:
    "text-white/80 hover:text-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
};

export function Button({
  href,
  variant = "secondary",
  children,
  className = "",
  target,
  rel,
}: Props) {
  const isExternal = href.startsWith("http");

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-fluid-sm font-medium tracking-tight transition-all duration-200 ease-out sm:px-5 sm:py-3";
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        target={target ?? "_blank"}
        rel={rel ?? "noreferrer"}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

