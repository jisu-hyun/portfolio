"use client";

import * as React from "react";
import { motion } from "framer-motion";

type ScrollRevealSectionProps = {
  id?: string;
  sectionTitle?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  navAnchor?: "projects" | "aligned";
  children: React.ReactNode;
};

const sectionHeadingClass =
  "font-extrabold tracking-tight text-white text-fluid-3xl md:text-fluid-4xl";

const anchorProjects =
  "scroll-mt-[max(1.625rem,env(safe-area-inset-top)+1.375rem)] sm:scroll-mt-8 md:scroll-mt-10";
const sectionPtProjects =
  "pt-[clamp(2.5rem,3.5vw+1.25rem,5.5rem)] pb-[var(--space-section-y)] sm:pt-[clamp(2.65rem,3.75vw+1.35rem,5.65rem)] md:pt-[clamp(2.75rem,4vw+1.4rem,5.75rem)]";

const anchorAligned =
  "scroll-mt-[max(2.4rem,env(safe-area-inset-top)+2rem)] sm:scroll-mt-12 md:scroll-mt-14";
const sectionPtAligned =
  "pt-[clamp(3.85rem,4.75vw+2rem,7.15rem)] pb-[var(--space-section-y)] sm:pt-[clamp(4rem,5vw+2.15rem,7.35rem)] md:pt-[clamp(4.15rem,5.2vw+2.25rem,7.55rem)]";

export function ScrollRevealSection({
  id,
  sectionTitle,
  eyebrow = "",
  title = "",
  subtitle = "",
  titleClassName = "",
  navAnchor = "aligned",
  children,
}: ScrollRevealSectionProps) {
  const hasInlineTitle = eyebrow || title || subtitle;
  const isProjects = navAnchor === "projects";
  const sectionClass = isProjects ? sectionPtProjects : sectionPtAligned;
  const anchorClass = isProjects ? anchorProjects : anchorAligned;

  return (
    <motion.section
      id={id}
      className={`${sectionClass} ${anchorClass}`}
      initial={{ opacity: 0, y: 78, scale: 0.985, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 md:px-10 lg:px-12">
        {sectionTitle ? (
          <div className="mb-6 flex flex-col items-center sm:mb-8 md:mb-10">
            <h2 className={sectionHeadingClass + (titleClassName ? ` ${titleClassName}` : "")}>
              {sectionTitle}
            </h2>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-white/40" aria-hidden />
          </div>
        ) : null}
        {hasInlineTitle ? (
          <div className="mb-6 sm:mb-8 md:mb-10">
            {eyebrow ? (
              <p className="mb-2 text-fluid-xs font-semibold tracking-[0.2em] text-white/70">
                {eyebrow}
              </p>
            ) : null}
            {title ? <h2 className={sectionHeadingClass + (titleClassName ? ` ${titleClassName}` : "")}>{title}</h2> : null}
            {subtitle ? (
              <p className="mt-3 max-w-2xl text-fluid-sm leading-7 text-white/80 md:text-fluid-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </motion.section>
  );
}
