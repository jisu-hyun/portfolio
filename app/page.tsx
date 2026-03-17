import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { ContactForm } from "@/components/ContactForm";
import { Tag } from "@/components/ui/Tag";
import { AnimateIn, StaggerGrid, StaggerItem } from "@/components/AnimateIn";
import { featuredProjects, site } from "@/lib/site";

/** 빈 줄 기준으로 문단(배열의 배열)으로 묶기 */
function toParagraphs(lines: readonly string[]): string[][] {
  const paragraphs: string[][] = [];
  let current: string[] = [];
  for (const line of lines) {
    if (line === "") {
      if (current.length > 0) {
        paragraphs.push(current);
        current = [];
      }
    } else {
      current.push(line);
    }
  }
  if (current.length > 0) paragraphs.push(current);
  return paragraphs;
}

export default function Home() {
  return (
    <div id="top" className="relative min-h-dvh">
      <div
        className="gradient-orb-1 pointer-events-none fixed inset-0 -z-20"
        aria-hidden="true"
        style={{
          background: "radial-gradient(1200px circle at 20% 0%, rgba(120,170,255,.2), transparent 55%)",
        }}
      />
      <div
        className="gradient-orb-2 pointer-events-none fixed inset-0 -z-20"
        aria-hidden="true"
        style={{
          background: "radial-gradient(900px circle at 80% 20%, rgba(160,120,255,.16), transparent 55%)",
        }}
      />
      <div
        className="gradient-orb-3 pointer-events-none fixed inset-0 -z-20"
        aria-hidden="true"
        style={{
          background: "radial-gradient(900px circle at 40% 80%, rgba(80,255,200,.12), transparent 55%)",
        }}
      />
      <div className="grid-overlay fixed inset-0 -z-10" aria-hidden="true" />
      <div className="noise fixed inset-0 -z-10" aria-hidden="true" />
      <Nav />

      <main className="relative">
        <ScrollReveal className="pb-[var(--space-section-y)] pt-24 sm:pt-28 md:pt-32">
          <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 md:px-10 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14">
              <div className="min-w-0">
                <AnimateIn delay={0.08}>
                  <h1 className="mt-4 font-extrabold tracking-tight text-white text-fluid-3xl md:text-fluid-4xl sm:mt-6">
                    <span className="block">{site.headlineLines[0]}</span>
                    {site.headlineLines[1] ? (
                      <span className="mt-2 block">{site.headlineLines[1]}</span>
                    ) : null}
                  </h1>
                </AnimateIn>
                <AnimateIn delay={0.12}>
                  <div className="mt-4 text-fluid-sm font-semibold tracking-[0.18em] text-white/55 sm:mt-5">
                    {site.brandlineEn}
                  </div>
                </AnimateIn>
                <AnimateIn delay={0.16}>
                  <div className="mt-4 max-w-2xl text-pretty text-fluid-sm leading-[2.05] tracking-[0.01em] text-white/75 sm:mt-5 space-y-4 break-keep">
                    {toParagraphs(site.intro).map((p, i) => (
                        <p key={i}>
                          {p.map((line, j) => (
                            <span key={j}>
                              {line}
                              {j < p.length - 1 ? <br /> : null}
                            </span>
                          ))}
                        </p>
                      ))}
                  </div>
                </AnimateIn>
              </div>

              <AnimateIn delay={0.18} as="div" className="relative hidden min-w-0 lg:block">
                <div className="relative hero-hex-wrap overflow-hidden">
                  <img
                    src="/images/hero-hex.png"
                    alt="데이터 중심 기술 경험 요약"
                    className="hero-hex w-[124%] max-w-[1120px] select-none opacity-100 drop-shadow-[0_50px_150px_rgba(0,0,0,.55)] -translate-x-[12%]"
                    loading="eager"
                  />
                </div>

                <div
                  className="pointer-events-none absolute -inset-16 -z-10 rounded-[64px] bg-[radial-gradient(closest-side,rgba(136,174,255,.24),transparent_62%)] blur-[90px]"
                  aria-hidden="true"
                />
              </AnimateIn>
            </div>
          </div>
        </ScrollReveal>

        <ScrollRevealSection id="projects" sectionTitle="PROJECTS">
          <div className="mt-8 w-full">
            <StaggerGrid className="grid gap-4 sm:gap-5 lg:grid-cols-2">
                {featuredProjects
                  .slice()
                  .sort((a, b) => {
                    const score = (p: { period: string }) => {
                      const s = p.period.trim();
                      if (s.includes("진행")) return Number.POSITIVE_INFINITY;
                      const m = s.match(/^(\d{4})\.(\d{2})$/);
                      if (!m) return Number.NEGATIVE_INFINITY;
                      const y = Number(m[1]);
                      const mo = Number(m[2]);
                      return y * 100 + mo;
                    };
                    const diff = score(b) - score(a);
                    return diff !== 0 ? diff : b.order - a.order;
                  })
                  .map((p) => {
                    const thumbGradients: Record<number, string> = {
                      1: "linear-gradient(135deg, rgba(120,170,255,.4) 0%, rgba(100,140,220,.2) 100%)",
                      2: "linear-gradient(135deg, rgba(80,220,180,.35) 0%, rgba(60,180,160,.18) 100%)",
                      3: "linear-gradient(135deg, rgba(255,180,100,.3) 0%, rgba(220,140,80,.15) 100%)",
                      4: "linear-gradient(135deg, rgba(160,120,255,.35) 0%, rgba(120,80,200,.18) 100%)",
                      5: "linear-gradient(135deg, rgba(100,200,255,.3) 0%, rgba(80,160,220,.15) 100%)",
                      6: "linear-gradient(135deg, rgba(140,100,200,.35) 0%, rgba(100,80,160,.18) 100%)",
                    };
                    const detailHref = `/projects/${p.id}`;
                    return (
                      <StaggerItem key={p.id}>
                        <article id={p.id} className="scroll-mt-24">
                          <a
                            href={detailHref}
                            className="project-card group block overflow-hidden rounded-xl border border-white/15 bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/60"
                          >
                            <div
                              className="project-thumb relative h-44 w-full overflow-hidden border-b border-white/15 sm:h-48 md:h-52"
                              style={{ background: thumbGradients[p.order] ?? thumbGradients[1] }}
                            >
                              <div className="absolute inset-0 opacity-80 [background:radial-gradient(900px_circle_at_30%_20%,rgba(255,255,255,.28),transparent_55%),radial-gradient(700px_circle_at_70%_80%,rgba(255,255,255,.16),transparent_58%)]" />
                              <div className="absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(closest-side,rgba(124,58,237,.25),transparent_72%)]" />
                              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.02),rgba(0,0,0,.12))]" />
                              {p.coverImage ? p.id === "jj" ? (
                                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                                  <img
                                    src={p.coverImage.src}
                                    alt={p.coverImage.alt}
                                    className="h-full w-full object-contain opacity-90"
                                    loading="lazy"
                                  />
                                </div>
                              ) : (
                                <img
                                  src={p.coverImage.src}
                                  alt={p.coverImage.alt}
                                  className="absolute inset-0 h-full w-full object-cover object-top opacity-90"
                                  loading="lazy"
                                />
                              ) : null}
                            </div>

                            <div className="flex min-w-0 flex-col gap-3 p-4 sm:p-5">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-base font-semibold tracking-[0.14em] text-white/85">
                                  {p.category}
                                </span>
                                <span className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-base font-semibold text-white/75">
                                  {p.period}
                                </span>
                              </div>

                              <div className="min-w-0">
                                <h3 className="text-xl font-extrabold tracking-[-0.02em] text-white sm:text-2xl">
                                  {p.title}
                                </h3>
                              </div>

                              <div className="mt-1 flex items-center justify-between">
                                <span className="text-base font-semibold text-white/80">Case Study</span>
                                <span className="inline-flex items-center gap-2 rounded-lg bg-[#7c3aed]/90 px-4 py-2.5 text-base font-semibold text-white shadow-[0_14px_45px_rgba(124,58,237,.18)] transition-colors group-hover:bg-[#6d28d9]">
                                  자세히 보기
                                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </article>
                      </StaggerItem>
                    );
                  })}
              </StaggerGrid>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection id="experience" sectionTitle="EXPERIENCE">
          <div className="mt-8 w-full glass rounded-2xl border border-white/15 p-5 sm:rounded-3xl sm:p-6 md:p-8">
              <StaggerGrid className="grid gap-3 sm:gap-4">
                {[
                  {
                    title: "서울시청 · 조경과",
                    period: "2025.04.01 ~ 재직중",
                    body: "가로수 데이터 관리 시스템(트리맵) · 담당업무: 가로수 및 녹지 데이터 현황관리(강북권)",
                  },
                ].map((x) => (
                  <StaggerItem key={x.title}>
                    <div className="card-hover-glow rounded-2xl border border-white/12 bg-white/[0.02] p-4 sm:p-5">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                        <div className="text-fluid-sm font-semibold tracking-tight text-white md:text-fluid-base">
                          {x.title}
                        </div>
                        <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/45">
                          {x.period}
                        </div>
                      </div>
                      <p className="mt-2 text-fluid-sm leading-7 text-white/70 sm:mt-3 md:text-fluid-base">
                        {x.body}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
        </ScrollRevealSection>

        <ScrollRevealSection id="skills" sectionTitle="SKILLS">
          <div className="mt-8 w-full glass rounded-2xl border border-white/15 p-5 sm:mt-10 sm:rounded-3xl sm:p-6 md:p-8">
              <div className="grid gap-6 sm:gap-8">
                {[
                  {
                    title: "Language",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" />
                      </svg>
                    ),
                    items: ["Python", "JavaScript", "TypeScript", "SQL", "Kotlin"],
                  },
                  {
                    title: "Frontend",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8" /><path d="M12 17v4" />
                      </svg>
                    ),
                    items: ["React", "Next.js", "Tailwind CSS", "Vite", "HTML/CSS", "Recharts"],
                  },
                  {
                    title: "Data · 시각화",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 3v18h18" />
                        <path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
                      </svg>
                    ),
                    items: ["Pandas", "GeoPandas", "NumPy", "Matplotlib", "Seaborn", "Leaflet", "공공데이터"],
                  },
                  {
                    title: "Tool · 환경",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    ),
                    items: ["Git", "Cloudflare", "Excel", "Node.js", "Supabase"],
                  },
                ].map((c) => (
                  <div key={c.title} className="border-b border-white/10 last:border-0 pb-6 last:pb-0 sm:pb-8 sm:last:pb-0">
                    <div className="mb-3 flex items-center gap-2 sm:mb-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80">
                        {c.icon}
                      </span>
                      <span className="text-fluid-sm font-semibold text-white md:text-fluid-base">{c.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {c.items.map((it) => (
                        <Tag key={it}>{it}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </ScrollRevealSection>

        <ScrollRevealSection id="contact" sectionTitle="CONTACT">
          <div className="mt-8 w-full max-w-md mx-auto">
            <div className="glass rounded-2xl border border-white/15 p-5 sm:rounded-3xl sm:p-6 md:p-8">
              <ContactForm
                toEmail={site.email}
                formspreeFormId={process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? undefined}
              />
            </div>
          </div>
        </ScrollRevealSection>

        <div className="min-h-24 sm:min-h-32" aria-hidden="true" />

        <Footer />
      </main>
    </div>
  );
}
