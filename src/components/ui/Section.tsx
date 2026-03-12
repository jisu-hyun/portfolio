import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 py-[var(--space-section-y)] md:scroll-mt-24"
    >
      <div
        className="mx-auto w-full max-w-6xl px-[var(--space-section-x)] sm:px-6 md:px-8"
      >
        <div className="mb-6 sm:mb-8 md:mb-10">
          <p className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-fluid-3xl font-semibold tracking-tight text-white md:text-fluid-4xl">
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
    </section>
  );
}

