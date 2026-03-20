"use client";

import * as React from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function ScrollReveal({ children, className = "", as = "section" }: ScrollRevealProps) {
  const Component = as as keyof React.JSX.IntrinsicElements;

  return <Component className={className}>{children}</Component>;
}
