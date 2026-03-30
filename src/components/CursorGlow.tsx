"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const layerEl = layerRef.current;
    if (!layerEl) return;
    layerEl.dataset.cursorLite = "1";
    let clickTimer: number | null = null;
    let boost = "0";
    const interactiveSelector = "a, button, [role='button'], input, textarea, select, label";

    const onMove = (e: PointerEvent) => {
      layerEl.style.setProperty("--cursor-x", `${e.clientX}px`);
      layerEl.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    const onPointerDown = () => {
      layerEl.style.setProperty("--cursor-click", "1");
      if (clickTimer != null) window.clearTimeout(clickTimer);
      clickTimer = window.setTimeout(() => {
        layerEl.style.setProperty("--cursor-click", "0");
      }, 170);
    };

    const onPointerUp = () => {
      layerEl.style.setProperty("--cursor-click", "0");
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const interactive = target?.closest(interactiveSelector);
      const nextBoost = interactive ? "1" : "0";
      if (boost === nextBoost) return;
      boost = nextBoost;
      layerEl.style.setProperty("--cursor-boost", nextBoost);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointerover", onPointerOver);
      if (clickTimer != null) window.clearTimeout(clickTimer);
      delete layerEl.dataset.cursorLite;
    };
  }, []);

  return (
    <div ref={layerRef} className="cursor-layer-root pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="cursor-glow pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="cursor-aura pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="cursor-flash pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
    </div>
  );
}

