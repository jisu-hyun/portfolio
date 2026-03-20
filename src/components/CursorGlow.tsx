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
    const nav = navigator as Navigator & { deviceMemory?: number };
    const isLowSpec = (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 4;
    const prefersReducedData = window.matchMedia?.("(prefers-reduced-data: reduce)")?.matches ?? false;
    if (isLowSpec || prefersReducedData) {
      layerEl.dataset.cursorLite = "1";
    } else {
      layerEl.dataset.cursorLite = "0";
    }
    let clickTimer: number | null = null;
    let burstTimer: number | null = null;
    let rafRef: number | null = null;
    let nextX = -9999;
    let nextY = -9999;
    let boost = "0";
    const interactiveSelector = "a, button, [role='button'], input, textarea, select, label";

    const onMove = (e: PointerEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (rafRef != null) return;
      rafRef = window.requestAnimationFrame(() => {
        rafRef = null;
        layerEl.style.setProperty("--cursor-x", `${nextX}px`);
        layerEl.style.setProperty("--cursor-y", `${nextY}px`);
      });
    };

    const onPointerDown = (e: PointerEvent) => {
      layerEl.style.setProperty("--cursor-click", "1");
      layerEl.style.setProperty("--cursor-burst-x", `${e.clientX}px`);
      layerEl.style.setProperty("--cursor-burst-y", `${e.clientY}px`);
      layerEl.style.setProperty("--cursor-burst", "1");
      if (clickTimer != null) window.clearTimeout(clickTimer);
      if (burstTimer != null) window.clearTimeout(burstTimer);
      clickTimer = window.setTimeout(() => {
        layerEl.style.setProperty("--cursor-click", "0");
      }, 170);
      burstTimer = window.setTimeout(() => {
        layerEl.style.setProperty("--cursor-burst", "0");
      }, 260);
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
      if (burstTimer != null) window.clearTimeout(burstTimer);
      if (rafRef != null) window.cancelAnimationFrame(rafRef);
      delete layerEl.dataset.cursorLite;
    };
  }, []);

  return (
    <div ref={layerRef} className="cursor-layer-root pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="cursor-glow pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="cursor-aura pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="cursor-sparkle pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="cursor-sparkle-secondary pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="cursor-flash pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="cursor-burst pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
    </div>
  );
}

