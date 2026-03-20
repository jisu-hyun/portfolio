"use client";

import * as React from "react";
import { motion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function ScrollReveal({ children, className = "", as = "section" }: ScrollRevealProps) {
  const Component = motion[as] as React.ComponentType<{
    style?: Record<string, unknown>;
    className?: string;
    children?: React.ReactNode;
    initial?: Record<string, unknown>;
    whileInView?: Record<string, unknown>;
    viewport?: Record<string, unknown>;
    transition?: Record<string, unknown>;
  }>;

  return (
    <Component
      className={className}
      initial={{ opacity: 0.4, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
