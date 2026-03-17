"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SCROLL_REVEAL } from "@/lib/scroll";

const OPACITY_RANGE: [number, number] = [0.5, 1];

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function ScrollReveal({ children, className = "", as = "section" }: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [...SCROLL_REVEAL.offset],
  });
  const y = useTransform(scrollYProgress, [0, 1], [SCROLL_REVEAL.yOffset, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], OPACITY_RANGE);

  const Component = motion[as] as React.ComponentType<{
    ref?: React.Ref<HTMLDivElement | null>;
    style?: Record<string, unknown>;
    className?: string;
    children?: React.ReactNode;
  }>;

  return (
    <Component ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </Component>
  );
}
