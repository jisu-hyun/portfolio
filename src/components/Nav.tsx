import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const items = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "How I Work" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <div className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[6px]" />
      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-[var(--space-section-x)] py-3 sm:px-6 sm:py-4 md:px-8">
        <a
          href="#top"
          className="group pointer-events-auto inline-flex min-w-0 items-center gap-2 transition-transform duration-200 hover:opacity-90"
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fluid-sm font-semibold text-white transition-colors duration-200 group-hover:border-white/20 group-hover:bg-white/10 sm:h-9 sm:w-9">
            {site.nameKo.slice(0, 1)}
          </span>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-fluid-sm font-semibold tracking-tight text-white">
              {site.nameKo}
              <span className="text-white/50"> · </span>
              <span className="text-white/70">{site.nameEn}</span>
            </div>
            <div className="hidden truncate text-fluid-xs tracking-tight text-white/55 sm:block">
              {site.headline}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="pointer-events-auto rounded-full px-2.5 py-2 text-fluid-sm font-medium text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white sm:px-3"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="pointer-events-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button href={site.githubUrl} variant="ghost" className="text-fluid-sm">
            GitHub
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 shrink-0 opacity-70"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.75 5.61.75 12c0 5.2 3.44 9.61 8.2 11.17.6.11.82-.27.82-.59 0-.29-.01-1.05-.02-2.06-3.34.75-4.04-1.66-4.04-1.66-.55-1.43-1.34-1.81-1.34-1.81-1.09-.77.08-.75.08-.75 1.2.09 1.84 1.27 1.84 1.27 1.07 1.87 2.81 1.33 3.49 1.02.11-.8.42-1.33.76-1.64-2.67-.31-5.48-1.37-5.48-6.1 0-1.35.46-2.45 1.24-3.31-.12-.31-.54-1.57.12-3.27 0 0 1-.33 3.3 1.26a11.2 11.2 0 0 1 3-.42c1.02 0 2.05.14 3 .42 2.3-1.59 3.3-1.26 3.3-1.26.66 1.7.24 2.96.12 3.27.77.86 1.24 1.96 1.24 3.31 0 4.75-2.81 5.78-5.5 6.09.43.38.82 1.13.82 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.71.83.59 4.76-1.56 8.2-5.97 8.2-11.17C23.25 5.61 18.27.5 12 .5z" />
            </svg>
          </Button>
          <Button href="#contact" variant="primary" className="hidden text-fluid-sm sm:inline-flex">
            연락하기
          </Button>
        </div>
      </header>
    </div>
  );
}

