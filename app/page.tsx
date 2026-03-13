import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { AnimateIn, StaggerGrid, StaggerItem } from "@/components/AnimateIn";
import { featuredProjects, site } from "@/lib/site";

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
          <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14">
              <div className="min-w-0">
                <AnimateIn delay={0.08}>
                  <h1 className="font-display mt-4 text-balance font-semibold tracking-[-0.02em] text-white text-fluid-hero-sm leading-[1.18] sm:mt-6">
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
                    {site.intro
                      .reduce<string[][]>((acc, line) => {
                        if (line === "") {
                          if (acc[acc.length - 1]?.length) acc.push([]);
                          return acc;
                        }
                        acc[acc.length - 1]!.push(line);
                        return acc;
                      }, [[]])
                      .filter((p) => p.length > 0)
                      .map((p, i) => (
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

        <ScrollRevealSection
          id="projects"
          eyebrow=""
          title="프로젝트"
          subtitle=""
          titleClassName="text-fluid-4xl md:text-[clamp(2.4rem,2.6vw+1.6rem,3.4rem)] font-extrabold"
        >
          <StaggerGrid className="grid gap-5 sm:gap-6 lg:grid-cols-2">
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
                };
                const detailHref = `/projects/${p.id}`;
                return (
                  <StaggerItem key={p.id}>
                    <article id={p.id} className="scroll-mt-24">
                      <a
                        href={detailHref}
                        className="project-card group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/60"
                      >
                        <div
                          className="project-thumb relative h-40 w-full overflow-hidden border-b border-white/10 sm:h-44"
                          style={{ background: thumbGradients[p.order] ?? thumbGradients[1] }}
                        >
                          <div className="absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_30%_20%,rgba(255,255,255,.18),transparent_55%),radial-gradient(700px_circle_at_70%_80%,rgba(255,255,255,.10),transparent_58%)]" />
                          <div className="absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(closest-side,rgba(124,58,237,.25),transparent_72%)]" />
                          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.05),rgba(0,0,0,.22))]" />
                          {p.coverImage ? p.id === "jj" ? (
                            <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6">
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
                              className="absolute inset-0 h-full w-full object-cover opacity-90"
                              loading="lazy"
                            />
                          ) : null}
                        </div>

                        <div className="flex min-w-0 flex-col gap-3 p-4 sm:p-5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-fluid-xs font-semibold tracking-[0.18em] text-white/55">
                              {p.category}
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-fluid-xs font-semibold text-white/45">
                              {p.period}
                            </span>
                          </div>

                          <div className="min-w-0">
                            <h3 className="text-fluid-lg font-extrabold tracking-[-0.02em] text-white/92 sm:text-fluid-xl">
                              {p.title}
                            </h3>
                            <p className="mt-2 text-fluid-xs leading-7 text-white/72">
                              {p.oneLiner}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2">
                            {p.tags.slice(0, 5).map((t) => (
                              <Tag key={t}>{t}</Tag>
                            ))}
                          </div>

                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-fluid-xs font-semibold text-white/45">Case Study</span>
                            <span className="inline-flex items-center gap-2 rounded-lg bg-[#7c3aed]/90 px-3 py-2 text-fluid-xs font-semibold text-white shadow-[0_14px_45px_rgba(124,58,237,.18)] transition-colors group-hover:bg-[#6d28d9]">
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
        </ScrollRevealSection>

        <ScrollRevealSection
          id="experience"
          eyebrow="EXPERIENCE"
          title="업무경험"
          subtitle=""
        >
          <StaggerGrid className="grid gap-2 sm:gap-3">
            {[
              {
                title: "서울시청 · 조경과",
                period: "2025.04.01 ~ 재직중",
                body: "참여사업: 가로수 데이터 관리 시스템(트리맵) · 담당업무: 가로수 및 녹지 데이터 현황관리(강북권)",
              },
            ].map((x) => (
              <StaggerItem key={x.title}>
                <div className="card-hover-glow glass rounded-2xl border border-white/10 p-4 sm:rounded-3xl sm:p-5 md:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                    <div className="text-fluid-sm font-semibold tracking-tight text-white md:text-fluid-base">
                      {x.title}
                    </div>
                    <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/45">
                      {x.period}
                    </div>
                  </div>
                  <p className="mt-2 text-fluid-sm leading-7 text-white/70 sm:mt-3 md:text-fluid-base">{x.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </ScrollRevealSection>

        <ScrollRevealSection
          id="skills"
          eyebrow="SKILLS"
          title="기술과 역량"
          subtitle="데이터 정제·시각화·웹 구현까지 쓰는 도구입니다."
        >
          <StaggerGrid className="grid gap-3 sm:gap-4 lg:grid-cols-2">
            {[
              { title: "Data", desc: "정제·검수·지표 설계, 재현 가능한 분석", items: ["Python", "Pandas", "NumPy", "SQL"] },
              { title: "Visualization", desc: "비교·탐색 중심 화면 구성", items: ["Matplotlib", "Seaborn", "Dashboard", "Storytelling"] },
              { title: "Web", desc: "정보구조 → UI 흐름 → 구현", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { title: "Work", desc: "이해관계자 전달 가능한 산출물", items: ["Excel", "문서화", "데이터 검수", "보고자료"] },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-hover-glow glass rounded-2xl border border-white/10 p-4 sm:rounded-3xl sm:p-5 md:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
                    <div className="text-fluid-sm font-semibold text-white md:text-fluid-base">{c.title}</div>
                    <div className="text-fluid-xs text-white/55">{c.desc}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                    {c.items.map((it) => (
                      <Tag key={it}>{it}</Tag>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <div className="mt-8 glass rounded-2xl border border-white/10 p-4 sm:mt-10 sm:rounded-3xl sm:p-5 md:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-fluid-sm font-semibold text-white md:text-fluid-base">Tech Stack</div>
              <div className="text-fluid-xs text-white/55">데이터 중심으로 확장해 온 기술들</div>
            </div>
            <StaggerGrid className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:mt-5 sm:gap-6">
              {[
                { t: "HTML", s: "5", c: "from-[#ff8a4c]/30 to-white/5", ring: "bg-[#ff8a4c]/18" },
                { t: "CSS", s: "3", c: "from-[#60a5fa]/28 to-white/5", ring: "bg-[#60a5fa]/18" },
                { t: "JavaScript", s: "JS", c: "from-[#facc15]/22 to-white/5", ring: "bg-[#facc15]/16" },
                { t: "TypeScript", s: "TS", c: "from-[#3b82f6]/22 to-white/5", ring: "bg-[#3b82f6]/16" },
                { t: "React", s: "⚛︎", c: "from-[#7dd3fc]/20 to-white/5", ring: "bg-[#7dd3fc]/14" },
                { t: "Tailwind", s: "TW", c: "from-[#2dd4bf]/18 to-white/5", ring: "bg-[#2dd4bf]/12" },
                { t: "Git", s: "GIT", c: "from-[#fb7185]/18 to-white/5", ring: "bg-[#fb7185]/12" },
              ].map((x) => (
                <StaggerItem key={x.t}>
                  <div className="group flex flex-col items-center gap-2">
                    <div
                      className={`relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br ${x.c} shadow-[0_18px_60px_rgba(0,0,0,.45)]`}
                      style={{
                        clipPath: "polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%)",
                      }}
                      aria-label={x.t}
                      title={x.t}
                    >
                      <div
                        className={`grid h-[42px] w-[42px] place-items-center rounded-xl border border-white/10 ${x.ring} text-fluid-xs font-extrabold tracking-[-0.01em] text-white/85 transition-transform duration-300 group-hover:scale-[1.04]`}
                        style={{
                          clipPath: "polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%)",
                        }}
                      >
                        {x.s}
                      </div>
                    </div>
                    <div className="text-fluid-xs font-semibold text-white/55">{x.t}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection
          id="contact"
          eyebrow="CONTACT"
          title="연락하기"
        >
          <AnimateIn>
          <div className="card-3d glass-strong rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div className="min-w-0">
                <div className="text-fluid-sm font-semibold text-white md:text-fluid-base">
                  {site.nameKo} ({site.nameEn})
                </div>
                <div className="mt-2 text-fluid-sm leading-7 text-white/70 md:text-fluid-base">
                  이메일로 연락 주시면, 비공개 프로젝트는 범위에 맞춰{" "}
                  <span className="text-white">Case Study 형태로</span> 공유드릴게요.
                </div>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                  <Button href={`mailto:${site.email}`} variant="primary">
                    {site.email}
                  </Button>
                  <Button href={site.githubUrl} variant="secondary">
                    GitHub
                  </Button>
                </div>
              </div>
              <div className="glass rounded-xl border border-white/10 p-4 sm:rounded-2xl sm:p-5 md:p-6">
                <div className="mt-3 grid gap-2 sm:mt-4">
                  {[
                    { label: "Projects", href: "#projects" },
                    { label: "Experience", href: "#experience" },
                    { label: "Skills", href: "#skills" },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-fluid-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:rounded-xl sm:px-4 sm:py-3"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </AnimateIn>
        </ScrollRevealSection>

        <Footer />
      </main>
    </div>
  );
}
