import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 sm:py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-[var(--space-section-x)] sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8">
        <p className="text-fluid-sm text-white/60">
          © {new Date().getFullYear()} {site.nameEn}. Built with intention.
        </p>
        <div className="flex items-center gap-4 text-fluid-sm">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-white/70 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

