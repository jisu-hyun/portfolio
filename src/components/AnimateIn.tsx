"use client";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article";
};

export function AnimateIn({
  children,
  className = "",
  as = "div",
}: AnimateInProps) {
  const Component = as as keyof React.JSX.IntrinsicElements;
  return <Component className={className}>{children}</Component>;
}

type StaggerGridProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerGrid({ children, className = "" }: StaggerGridProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
