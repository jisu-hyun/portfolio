const items = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 border-b border-white/10 bg-[linear-gradient(180deg,rgba(0,0,0,.72),rgba(0,0,0,.38))] backdrop-blur-[14px]" />
      <header className="relative mx-auto flex w-full max-w-screen-2xl items-center justify-center px-6 pb-3 pt-[calc(env(safe-area-inset-top)+0.75rem)] sm:px-8 sm:pb-4 sm:pt-[calc(env(safe-area-inset-top)+1rem)] md:px-10 lg:px-12">
        <nav className="pointer-events-auto hidden items-center md:flex" aria-label="Primary">
          <div className="glass rounded-full border border-white/10 bg-white/[0.03] p-1 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-0.5">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="group relative rounded-full px-4 py-2 text-fluid-sm font-semibold tracking-tight text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white active:scale-[0.98]"
                >
                  <span className="relative z-10">{it.label}</span>
                  <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-[rgba(136,174,255,.0)] via-[rgba(136,174,255,.7)] to-[rgba(160,120,255,.0)] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="pointer-events-auto md:hidden">
          <a
            href="#projects"
            className="glass inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-fluid-sm font-semibold text-white/80"
          >
            Menu
          </a>
        </div>
      </header>
    </div>
  );
}

