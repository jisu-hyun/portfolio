export function Tag({
  children,
  size = "default",
}: {
  children: string;
  size?: "default" | "sm";
}) {
  const sizeClass =
    size === "sm"
      ? "px-2 py-0.5 text-[0.7rem] font-medium tracking-tight"
      : "px-2.5 py-1 text-fluid-xs font-medium tracking-tight sm:px-3";
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 text-white/90 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white hover:scale-[1.02] ${sizeClass}`}
    >
      {children}
    </span>
  );
}

