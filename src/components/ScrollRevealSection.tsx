"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Y_OFFSET = 56;
const OPACITY_RANGE: [number, number] = [0.82, 1];

type ScrollRevealSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  titleClassName?: string;
  children: React.ReactNode;
};

/**
 * Section과 동일한 구조 + 스크롤에 따라 아래에서 위로 올라오는 모션.
 */
export function ScrollRevealSection({
  id,
  eyebrow,
  title,
  subtitle = "",
  titleClassName = "",
  children,
}: ScrollRevealSectionProps) {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start 0.22"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [Y_OFFSET, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], OPACITY_RANGE);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ y, opacity }}
      className="scroll-mt-28 py-[var(--space-section-y)] md:scroll-mt-32"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-3 sm:px-4 md:px-6">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2
            className={`font-semibold tracking-tight text-white md:text-fluid-4xl text-fluid-3xl ${titleClassName}`}
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-fluid-sm leading-7 text-white/70 md:text-fluid-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}
