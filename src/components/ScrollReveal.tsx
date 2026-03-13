"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Y_OFFSET = 56;
const OPACITY_RANGE: [number, number] = [0.82, 1];

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
};

/**
 * 스크롤에 따라 아래에서 위로 올라오는 모션.
 * 일회성이 아니라 스크롤 진행에 비례해 연속적으로 진행됨.
 */
export function ScrollReveal({ children, className = "", as = "section" }: ScrollRevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start 0.22"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [Y_OFFSET, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], OPACITY_RANGE);

  const Component = motion[as] as React.ComponentType<{
    ref: React.RefObject<HTMLElement | null>;
    style: React.CSSProperties;
    className: string;
    children: React.ReactNode;
  }>;

  return (
    <Component ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </Component>
  );
}
