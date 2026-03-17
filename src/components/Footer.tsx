import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-36 sm:mt-44 md:mt-52 border-t border-white/10 py-5 sm:py-6 md:py-7">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 md:px-10 lg:px-12">
        <p className="min-w-0 flex-1 text-xs text-white/60 sm:text-sm">
          © {new Date().getFullYear()} {site.nameEn}. Built with intention.
        </p>
        <div className="flex shrink-0 items-center gap-3 text-xs sm:gap-4 sm:text-sm">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
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

