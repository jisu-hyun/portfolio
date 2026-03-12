"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const rafRef = useRef<number | null>(null);
  const latestRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    // 터치 디바이스(모바일/태블릿)에서는 비활성화
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const el = document.documentElement;

    const onMove = (e: PointerEvent) => {
      latestRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        el.style.setProperty("--cursor-x", `${latestRef.current.x}px`);
        el.style.setProperty("--cursor-y", `${latestRef.current.y}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  return <div className="cursor-glow pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}

