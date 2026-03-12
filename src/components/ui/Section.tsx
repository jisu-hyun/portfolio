import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  titleClassName = "",
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  titleClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 py-[var(--space-section-y)] md:scroll-mt-32"
    >
      <div
        className="mx-auto w-full max-w-screen-2xl px-3 sm:px-4 md:px-6"
      >
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
    </section>
  );
}

