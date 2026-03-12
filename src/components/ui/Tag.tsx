export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-fluid-xs font-medium text-white/80 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white hover:scale-105 sm:px-3">
      {children}
    </span>
  );
}

