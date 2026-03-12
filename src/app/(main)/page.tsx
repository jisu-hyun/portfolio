import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
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
        <section className="pb-[var(--space-section-y)] pt-16 sm:pt-20 md:pt-24">
          <div className="mx-auto w-full max-w-6xl px-[var(--space-section-x)] sm:px-6 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-10">
              <div className="min-w-0">
                <AnimateIn delay={0}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-fluid-xs font-semibold tracking-tight text-white/70 sm:px-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(136,174,255,.9)]" />
                    {site.nameKo} · {site.nameEn}
                  </div>
                </AnimateIn>
                <AnimateIn delay={0.08}>
                  <h1 className="mt-4 text-balance font-semibold tracking-tight text-white text-fluid-hero sm:mt-6">
                    {site.headline}
                  </h1>
                </AnimateIn>
                <AnimateIn delay={0.16}>
                  <p className="mt-4 max-w-xl text-pretty text-fluid-lead leading-7 text-white/75 sm:mt-5 sm:leading-8">
                    {site.intro[0]}
                    <br />
                    {site.intro[1]}
                  </p>
                </AnimateIn>
                <AnimateIn delay={0.24}>
                  <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3">
                    <Button href="#projects" variant="primary">
                      프로젝트 보기
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M13 5a1 1 0 0 0 0 2h3.59L6.3 17.29a1 1 0 1 0 1.4 1.42L18 8.41V12a1 1 0 1 0 2 0V5h-7z" />
                      </svg>
                    </Button>
                    <Button href="#contact" variant="secondary">
                      연락하기
                    </Button>
                    <Button href={site.githubUrl} variant="ghost">
                      GitHub
                    </Button>
                  </div>
                </AnimateIn>
                <AnimateIn delay={0.32}>
                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                    {[
                      "Public Data",
                      "Data QA",
                      "GIS / Map-based Thinking",
                      "Visualization",
                      "Frontend Implementation",
                      "Documentation",
                    ].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </AnimateIn>
              </div>

              <AnimateIn delay={0.2} as="div" className="relative min-w-0">
                <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.04))] p-4 shadow-[0_20px_80px_rgba(0,0,0,.45)] transition-all duration-300 hover:border-white/15 sm:rounded-3xl sm:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0 text-fluid-sm font-semibold tracking-tight text-white">
                      Selected Highlights
                    </div>
                    <div className="shrink-0 text-fluid-xs text-white/55">2025 → 2026</div>
                  </div>
                  <div className="mt-4 grid gap-2 sm:mt-5 sm:gap-3">
                    {featuredProjects
                      .slice()
                      .sort((a, b) => a.order - b.order)
                      .slice(0, 2)
                      .map((p) => (
                        <div
                          key={p.id}
                          className="rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/[0.07] sm:rounded-2xl sm:p-4"
                        >
                          <div className="flex items-start justify-between gap-3 sm:gap-4">
                            <div className="min-w-0">
                              <div className="text-fluid-sm font-semibold tracking-tight text-white">
                                {p.order}. {p.title}
                              </div>
                              <p className="mt-1.5 text-fluid-sm leading-6 text-white/70 sm:mt-2">
                                {p.oneLiner}
                              </p>
                            </div>
                            <a
                              href={p.links[0]?.href ?? "#projects"}
                              className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-fluid-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:px-3 sm:py-2"
                            >
                              보기
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 sm:mt-6 sm:rounded-2xl sm:p-4">
                    <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">
                      PRINCIPLE
                    </div>
                    <div className="mt-2 text-fluid-sm leading-6 text-white/75">
                      "무엇을 만들었는가"보다
                      <br />
                      <span className="text-white">"왜 만들었고 어떤 문제를 풀었는가"</span>
                      를 먼저 보여줍니다.
                    </div>
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-[radial-gradient(closest-side,rgba(136,174,255,.25),transparent_65%)] blur-2xl"
                  aria-hidden="true"
                />
              </AnimateIn>
            </div>
          </div>
        </section>

        <Section
          id="about"
          eyebrow="ABOUT"
          title="데이터를 '결과물'로 만드는 사람"
          subtitle="성장서사 대신, 문제를 정의하고 끝까지 완성하는 방식으로 소개합니다."
        >
          <StaggerGrid className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            <StaggerItem>
              <div className="card-hover-glow rounded-2xl border border-white/10 bg-[var(--card)] p-4 transition-colors hover:border-white/15 sm:rounded-3xl sm:p-5 md:p-6">
                <div className="text-fluid-sm font-semibold text-white md:text-fluid-base">지금 하는 일</div>
                <p className="mt-2 text-fluid-sm leading-7 text-white/70 sm:mt-3 md:text-fluid-base">
                  공공·도시 데이터를 분석하고, 사용자에게 "바로 쓰이는" 화면으로
                  구현합니다.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card-hover-glow rounded-2xl border border-white/10 bg-[var(--card)] p-4 transition-colors hover:border-white/15 sm:rounded-3xl sm:p-5 md:p-6">
                <div className="text-fluid-sm font-semibold text-white md:text-fluid-base">관심 문제</div>
                <p className="mt-2 text-fluid-sm leading-7 text-white/70 sm:mt-3 md:text-fluid-base">
                  데이터 품질(정합성/누락/이상치)과 정보 접근성, 비교/탐색 UX에
                  집중합니다.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card-hover-glow rounded-2xl border border-white/10 bg-[var(--card)] p-4 transition-colors hover:border-white/15 sm:rounded-3xl sm:p-5 md:p-6">
                <div className="text-fluid-sm font-semibold text-white md:text-fluid-base">성장 방향</div>
                <p className="mt-2 text-fluid-sm leading-7 text-white/70 sm:mt-3 md:text-fluid-base">
                  지도·대시보드·데이터 제품화 역량을 더 깊게 만들고 있습니다.
                </p>
              </div>
            </StaggerItem>
          </StaggerGrid>
        </Section>

        <Section
          eyebrow="CORE"
          title="Strength / Core Keywords"
          subtitle="길게 설명하지 않고, 나를 빠르게 인식시키는 핵심 역량입니다."
        >
          <StaggerGrid className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            {[
              ["Public Data", "공공/도시 데이터 맥락을 이해하고 설계합니다."],
              ["Data Cleaning & QA", "정합성/누락/이상치를 규칙으로 다룹니다."],
              ["Map-based Visualization", "공간/지역 관점으로 비교를 만듭니다."],
              ["Dashboard & IA", "정보 구조로 '이해 가능한 흐름'을 설계합니다."],
              ["Frontend Implementation", "UI 흐름을 구현으로 정확히 옮깁니다."],
              ["Documentation", "재현성과 전달력을 문서로 남깁니다."],
            ].map(([k, d]) => (
              <StaggerItem key={k}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.07] sm:rounded-3xl sm:p-5">
                  <div className="text-fluid-sm font-semibold tracking-tight text-white md:text-fluid-base">
                    {k}
                  </div>
                  <div className="mt-1.5 text-fluid-sm leading-6 text-white/65 sm:mt-2 md:text-fluid-base">{d}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        <Section
          eyebrow="SKILLS"
          title="업무 단위로 정리한 스킬"
          subtitle="기술 나열이 아니라, 어떤 일을 어떤 방식으로 해내는지가 보이도록 구성했습니다."
        >
          <StaggerGrid className="grid gap-3 sm:gap-4 lg:grid-cols-2">
            {[
              {
                title: "Data",
                desc: "정제/검수/지표 설계, 재현 가능한 분석",
                items: ["Python", "Pandas", "NumPy", "SQL"],
              },
              {
                title: "Visualization",
                desc: "비교/탐색 중심의 화면 구성",
                items: ["Matplotlib", "Seaborn", "Dashboard 설계", "Storytelling"],
              },
              {
                title: "Web",
                desc: "정보구조 → UI 흐름 → 구현",
                items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
              },
              {
                title: "Work / Collaboration",
                desc: "이해관계자 전달 가능한 산출물",
                items: ["Excel", "문서화", "데이터 검수", "보고자료 작성"],
              },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-hover-glow rounded-2xl border border-white/10 bg-[var(--card)] p-4 transition-colors hover:border-white/15 sm:rounded-3xl sm:p-5 md:p-6">
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
        </Section>

        <Section
          id="projects"
          eyebrow="FEATURED"
          title="Featured Projects"
          subtitle="'데이터를 서비스로 바꾼 사례' 중심으로 구성했습니다."
        >
          <StaggerGrid className="grid gap-3 sm:gap-4 lg:grid-cols-3">
            {featuredProjects
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((p) => (
                <StaggerItem
                  key={p.id}
                  className={p.order === 1 ? "lg:col-span-2" : ""}
                >
                <article
                  className="card-hover-glow rounded-2xl border border-white/10 bg-[var(--card)] p-4 shadow-[0_18px_80px_rgba(0,0,0,.35)] transition-colors hover:border-white/15 sm:rounded-3xl sm:p-5 md:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-4">
                    <div className="min-w-0">
                      <p className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">
                        PROJECT {p.order}
                      </p>
                      <h3 className="mt-1.5 text-fluid-lg font-semibold tracking-tight text-white sm:mt-2 md:text-fluid-xl">
                        {p.title}
                      </h3>
                    </div>
                    <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-fluid-xs font-semibold text-white/70 sm:px-3">
                      {p.links.some((l) => l.label.includes("Private"))
                        ? "Private"
                        : "Public"}
                    </div>
                  </div>

                  <p className="mt-3 text-fluid-sm leading-7 text-white/70 sm:mt-4 md:text-fluid-base">
                    {p.oneLiner}
                  </p>

                  <p className="mt-3 text-fluid-sm leading-7 text-white/80 sm:mt-4 md:text-fluid-base">
                    <span className="font-semibold text-white">왜 괜찮은가:</span>{" "}
                    {p.whyGood}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:mt-7">
                    {p.links.map((l) => (
                      <Button
                        key={l.href}
                        href={l.href}
                        variant={l.kind}
                        className="px-4 py-2"
                      >
                        {l.label}
                      </Button>
                    ))}
                    <Button href="#contact" variant="ghost" className="px-4 py-2">
                      상세 문의
                    </Button>
                  </div>
                </article>
                </StaggerItem>
              ))}
          </StaggerGrid>
        </Section>

        <Section
          id="experience"
          eyebrow="EXPERIENCE"
          title="일한 환경과 방식"
          subtitle="이력서처럼 길게가 아니라, 타임라인처럼 핵심만 정리합니다."
        >
          <StaggerGrid className="grid gap-2 sm:gap-3">
            {[
              {
                title: "서울시 가로수 데이터 전문가",
                period: "실무 경험",
                body: "속성값 정합성 검수, 좌표/수종/규격/병해충 이력 등 품질 관리를 통해 데이터 신뢰도를 높이는 업무를 수행했습니다. (세부는 비공개 범위에 따라 요약 제공)",
              },
              {
                title: "공공데이터 기반 프로젝트 수행",
                period: "프로젝트",
                body: "도시/행정 데이터의 구조와 제약을 이해하고, 분석 결과가 실제로 쓰이는 형태(지도/대시보드/문서)로 연결했습니다.",
              },
              {
                title: "개인 학습 및 서비스형 프로젝트",
                period: "지속",
                body: "데이터를 사용자 경험으로 바꾸는 연습을 꾸준히 하고, 결과물로 남깁니다.",
              },
            ].map((x) => (
              <StaggerItem key={x.title}>
                <div className="card-hover-glow rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/15 sm:rounded-3xl sm:p-5 md:p-6">
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
        </Section>

        <Section
          id="process"
          eyebrow="PROCESS"
          title="How I Work"
          subtitle="'생각하면서 만드는 사람'으로 보이게 하는 나의 작업 흐름입니다."
        >
          <StaggerGrid className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">
            {[
              {
                k: "Define",
                d: "문제/사용자/의사결정 포인트를 먼저 정리합니다.",
              },
              { k: "Audit", d: "데이터 구조와 품질을 확인합니다." },
              { k: "Refine", d: "필요한 정보만 정제하고 표준화합니다." },
              { k: "Build", d: "탐색/비교 중심 UI 흐름을 구현합니다." },
              { k: "Document", d: "문서화하고 개선합니다." },
            ].map((s, idx) => (
              <StaggerItem key={s.k}>
                <div className="card-hover-glow rounded-2xl border border-white/10 bg-[var(--card)] p-4 transition-colors hover:border-white/15 sm:rounded-3xl sm:p-5 md:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-fluid-sm font-semibold text-white md:text-fluid-base">{s.k}</div>
                    <div className="text-fluid-xs text-white/45">{String(idx + 1).padStart(2, "0")}</div>
                  </div>
                  <p className="mt-2 text-fluid-sm leading-7 text-white/70 sm:mt-3 md:text-fluid-base">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        <Section
          id="contact"
          eyebrow="CONTACT"
          title="함께 이야기 나눠요"
          subtitle="새로운 데이터 프로젝트와 서비스 구현에 관심이 있습니다. 편하게 연락 주세요."
        >
          <AnimateIn>
          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.04))] p-4 transition-colors hover:border-white/15 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">
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
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5 md:p-6">
                <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">
                  QUICK LINKS
                </div>
                <div className="mt-3 grid gap-2 sm:mt-4">
                  {[
                    { label: "Projects", href: "#projects" },
                    { label: "Experience", href: "#experience" },
                    { label: "How I Work", href: "#process" },
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
        </Section>

        <Footer />
      </main>
    </div>
  );
}
