"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const items = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#career", label: "Career" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<((typeof items)[number]["href"]) | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const activeHrefRef = useRef<((typeof items)[number]["href"]) | null>(null);

  const hrefToId = useMemo(() => {
    const map = new Map<string, string>();
    for (const it of items) {
      if (it.href.startsWith("#") && it.href.length > 1) map.set(it.href, it.href.slice(1));
    }
    return map;
  }, []);

  const getScroller = () => {
    const body = document.body;
    try {
      const bodyOverflowY = getComputedStyle(body).overflowY;
      if (bodyOverflowY !== "visible" && bodyOverflowY !== "hidden") return body;
    } catch {}
    return (document.scrollingElement as HTMLElement | null) ?? document.documentElement;
  };

  const scrollToHash = useCallback(
    (href: string) => {
      const id = hrefToId.get(href);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      const scroller = getScroller();
      const headerH = headerRef.current?.getBoundingClientRect().height ?? 0;
      const gap = 14;
      const targetTop = el.getBoundingClientRect().top + scroller.scrollTop - (headerH + gap);

      scroller.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
      history.replaceState(null, "", href);
    },
    [hrefToId]
  );

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const scroller = getScroller();
    const offsetBase = () => (headerRef.current?.getBoundingClientRect().height ?? 0) + 24;
    let rafRef: number | null = null;

    const updateActiveFromScroll = () => {
      let current: (typeof items)[number]["href"] | null = null;
      for (const it of items) {
        const id = hrefToId.get(it.href);
        if (!id) continue;
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offsetBase()) current = it.href;
      }
      if (activeHrefRef.current !== current) {
        activeHrefRef.current = current;
        setActiveHref(current);
      }
    };

    const onScroll = () => {
      if (rafRef != null) return;
      rafRef = window.requestAnimationFrame(() => {
        rafRef = null;
        updateActiveFromScroll();
      });
    };

    // 초기 진입 시 hash가 있으면 우선 반영
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      if (hrefToId.has(hash)) setActiveHref(hash as (typeof items)[number]["href"]);
    }

    updateActiveFromScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);
    window.addEventListener("hashchange", updateActiveFromScroll);
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
      window.removeEventListener("hashchange", updateActiveFromScroll);
      if (rafRef != null) window.cancelAnimationFrame(rafRef);
    };
  }, [hrefToId]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 border-b border-white/10 bg-[linear-gradient(180deg,rgba(0,0,0,.72),rgba(0,0,0,.38))] backdrop-blur-[14px]" />
      <header
        ref={(node) => {
          headerRef.current = node;
        }}
        className={`relative mx-auto flex w-full max-w-screen-2xl items-center justify-center px-6 pb-2 pt-[max(0.35rem,env(safe-area-inset-top))] sm:px-8 sm:pb-3 sm:pt-[max(0.5rem,env(safe-area-inset-top))] md:px-10 md:pb-4 md:pt-[calc(env(safe-area-inset-top)+0.65rem)] lg:px-12 ${open ? "pointer-events-none opacity-0" : ""}`}
        aria-hidden={open}
      >
        <nav className="pointer-events-auto hidden items-center md:flex" aria-label="Primary">
          <div className="glass rounded-full border border-white/10 bg-white/[0.03] p-1 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-0.5">
              {items.map((it) => (
                (() => {
                  const isActive = activeHref === it.href;
                  return (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={(e) => {
                    if (!it.href.startsWith("#")) return;
                    e.preventDefault();
                    scrollToHash(it.href);
                    setActiveHref(it.href);
                  }}
                  className={`group relative rounded-full px-4 py-2 text-fluid-sm font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] ${
                    isActive
                      ? "bg-white/8 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{it.label}</span>
                  <span
                    className={`pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left bg-gradient-to-r from-[rgba(136,174,255,.0)] via-[rgba(136,174,255,.7)] to-[rgba(160,120,255,.0)] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
                  );
                })()
              ))}
            </div>
          </div>
        </nav>

        <div className="pointer-events-auto md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
            className="glass inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-fluid-sm font-semibold text-white/80"
          >
            Menu
          </button>
        </div>
      </header>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[55] bg-black/55 backdrop-blur-sm md:hidden"
            aria-label="메뉴 닫기"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav-panel"
            className="fixed inset-x-0 top-0 z-[60] flex max-h-[min(100dvh,100vh)] flex-col border-b border-white/15 bg-[rgba(10,12,18,.97)] shadow-[0_24px_80px_rgba(0,0,0,.65)] backdrop-blur-2xl md:hidden"
            style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top))" }}
          >
            <div className="flex items-center justify-between px-6 pb-2 pt-1 sm:px-8">
              <span className="text-fluid-xs font-semibold tracking-[0.2em] text-white/45">NAV</span>
              <button
                type="button"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-fluid-sm font-semibold text-white/85 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                닫기
              </button>
            </div>
            <nav className="flex flex-col gap-0.5 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-1 sm:px-6" aria-label="모바일 메뉴">
              {items.map((it) => (
                (() => {
                  const isActive = activeHref === it.href;
                  return (
                <a
                  key={it.href}
                  href={it.href}
                  className={`rounded-xl px-4 py-3.5 text-fluid-base font-semibold transition-colors ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/85 hover:bg-white/5 hover:text-white active:bg-white/10"
                  }`}
                  onClick={(e) => {
                    setOpen(false);
                    if (!it.href.startsWith("#")) return;
                    e.preventDefault();
                    setActiveHref(it.href);
                    requestAnimationFrame(() => scrollToHash(it.href));
                  }}
                >
                  {it.label}
                </a>
                  );
                })()
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
