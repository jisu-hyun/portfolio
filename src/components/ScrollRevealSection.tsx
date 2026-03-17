"use client";

import * as React from "react";
import { motion } from "framer-motion";

type ScrollRevealSectionProps = {
  id?: string;
  /** 대문자 섹션 제목 (예: PROJECTS, EXPERIENCE). 있으면 중앙 정렬 h2 + 구분선 렌더 */
  sectionTitle?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  children: React.ReactNode;
};

const sectionHeadingClass =
  "font-extrabold tracking-tight text-white text-fluid-3xl md:text-fluid-4xl";

export function ScrollRevealSection({
  id,
  sectionTitle,
  eyebrow = "",
  title = "",
  subtitle = "",
  titleClassName = "",
  children,
}: ScrollRevealSectionProps) {
  const hasInlineTitle = eyebrow || title || subtitle;

  return (
    <motion.section
      id={id}
      className="scroll-mt-[76px] py-[var(--space-section-y)] sm:scroll-mt-[96px]"
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
