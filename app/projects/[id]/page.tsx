import { featuredProjects } from "@/lib/site";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const p = featuredProjects.find((x) => x.id === id);

  if (!p) {
    return (
      <main className="mx-auto w-full max-w-screen-2xl px-3 sm:px-4 md:px-6 py-[var(--space-section-y)]">
        <div className="glass rounded-2xl border border-white/10 p-6 sm:rounded-3xl sm:p-8">
          <div className="text-fluid-xl font-extrabold tracking-tight text-white">프로젝트를 찾을 수 없어요</div>
          <a
            href="/#projects"
            className="mt-5 inline-flex w-fit items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-fluid-xs font-semibold text-white/80 hover:bg-white/15"
          >
            프로젝트 목록으로
          </a>
        </div>
      </main>
    );
  }

  const primaryLink = p.links.find((l) => l.kind === "primary") ?? p.links[0];
  const otherLinks = p.links.filter((l) => l !== primaryLink);

  return (
    <main className="mx-auto w-full max-w-screen-2xl px-3 sm:px-4 md:px-6 py-[var(--space-section-y)]">
      <a
        href="/#projects"
        className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-fluid-xs font-semibold text-white/70 hover:bg-white/10 hover:text-white"
      >
        ← 프로젝트로 돌아가기
      </a>

      <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_28px_90px_rgba(0,0,0,.55)]">
        {p.coverImage ? p.id === "jj" ? (
          <div className="relative flex h-56 w-full items-center justify-center border-b border-white/10 bg-white/[0.02] py-8 px-8 sm:h-72 sm:py-10 sm:px-10 md:h-80 md:py-12 md:px-12">
            <img
              src={p.coverImage.src}
              alt={p.coverImage.alt}
              className="h-full max-h-full w-full max-w-full object-contain"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.15),rgba(0,0,0,.55))]" />
          </div>
        ) : (
          <div className="relative h-56 w-full border-b border-white/10 sm:h-72 md:h-80">
            <img
              src={p.coverImage.src}
              alt={p.coverImage.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.15),rgba(0,0,0,.55))]" />
          </div>
        ) : null}
        <div className="p-6 sm:p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-fluid-xs font-semibold tracking-[0.18em] text-white/55">
              {p.category}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-fluid-xs font-semibold text-white/45">
              {p.period}
            </span>
          </div>

          <h1 className="mt-5 text-fluid-3xl sm:text-fluid-4xl font-extrabold tracking-[-0.02em] text-white/95">
            {p.title}
          </h1>
          <p className="mt-4 text-fluid-sm leading-8 text-white/70 md:text-fluid-base sm:whitespace-nowrap">
            {p.oneLiner}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-fluid-xs font-semibold text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          {p.writeup ? (
            <div className="mt-6 grid gap-4">
              <div className="glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
                <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">프로젝트 소개</div>
                <div className="mt-3 whitespace-pre-line text-fluid-sm leading-8 text-white/75 md:text-fluid-base">{p.writeup.intro}</div>
              </div>

              <div className="glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
                <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">사용 기술</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.writeup.tech.map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-fluid-xs font-semibold text-white/70"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
                <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">문제 해결</div>
                <ul className="mt-3 grid gap-2">
                  {p.writeup.problemSolving.map((x) => (
                    <li key={x} className="text-fluid-sm leading-8 text-white/75 md:text-fluid-base">
                      - {x}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
                <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">적용 결과</div>
                <ul className="mt-3 grid gap-2">
                  {p.writeup.results.map((x) => (
                    <li key={x} className="text-fluid-sm leading-8 text-white/75 md:text-fluid-base">
                      - {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          {p.keyPoints?.length ? (
            <div className="mt-6 glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
              <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">핵심 요약</div>
              <ul className="mt-3 grid gap-2">
                {p.keyPoints.map((x) => (
                  <li key={x} className="text-fluid-sm leading-8 text-white/75 md:text-fluid-base">
                    - {x}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {p.flow?.length ? (
            <div className="mt-4 glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
              <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">구성 순서</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.flow.map((x, i) => (
                  <span
                    key={`${i}-${x}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-fluid-xs font-semibold text-white/70"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {!p.writeup ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
              <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">PROBLEM</div>
              <div className="mt-3 text-fluid-sm leading-8 text-white/75 md:text-fluid-base">{p.problem}</div>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
              <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">TOOLS</div>
              <div className="mt-3 text-fluid-sm leading-8 text-white/75 md:text-fluid-base">{p.tools}</div>
            </div>
          </div>
          ) : null}

          {!p.writeup ? (
            <div className="mt-4 glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
            <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">LEARNINGS</div>
            <ul className="mt-3 grid gap-2">
              {p.learnings.map((x) => (
                <li key={x} className="text-fluid-sm leading-8 text-white/75 md:text-fluid-base">
                  - {x}
                </li>
              ))}
            </ul>
          </div>
          ) : null}

          {!p.writeup ? (
            <div className="mt-4 glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
            <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">WHY IT MATTERS</div>
            <div className="mt-3 text-fluid-sm leading-8 text-white/75 md:text-fluid-base">{p.whyGood}</div>
          </div>
          ) : null}

          {p.buildSummary?.length ? (
            <div className="mt-4 glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
              <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">지도 구축 요약</div>
              <div className="mt-4 grid gap-3">
                {p.buildSummary.map((s) => (
                  <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-fluid-xs font-semibold text-white/80">{s.title}</div>
                    <div className="mt-2 text-fluid-sm leading-8 text-white/70 md:text-fluid-base">{s.body}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {p.dataSourceSummary || p.dataSources?.length ? (
            <div className="mt-4 glass rounded-2xl border border-white/10 p-5 sm:rounded-3xl sm:p-6">
              <div className="text-fluid-xs font-semibold tracking-[0.22em] text-white/50">데이터 출처</div>
              {p.dataSourceSummary ? (
                <div className="mt-3 text-fluid-sm leading-8 text-white/70 md:text-fluid-base">{p.dataSourceSummary}</div>
              ) : null}
              {p.dataSources?.length ? (
                <ul className="mt-4 grid gap-2">
                  {p.dataSources.map((d) => (
                    <li key={d.label} className="text-fluid-sm leading-8 text-white/75 md:text-fluid-base">
                      -{" "}
                      {d.href ? (
                        <a
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-white/20 underline-offset-4 hover:decoration-white/40"
                        >
                          {d.label}
                        </a>
                      ) : (
                        <span>{d.label}</span>
                      )}
                      {d.note ? <span className="text-white/55"> · {d.note}</span> : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          {p.disclaimer ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-fluid-sm leading-8 text-white/65 sm:rounded-3xl sm:p-6 md:text-fluid-base">
              {p.disclaimer}
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-2">
            {primaryLink ? (
              <a
                href={primaryLink.href}
                target={primaryLink.href.startsWith("http") ? "_blank" : undefined}
                rel={primaryLink.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded-lg bg-[#7c3aed] px-4 py-2 text-fluid-xs font-semibold text-white hover:bg-[#6d28d9]"
              >
                {primaryLink.label}
              </a>
            ) : null}
            {otherLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-fluid-xs font-semibold text-white/80 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="/#projects"
        className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-fluid-xs font-semibold text-white/70 hover:bg-white/10 hover:text-white"
      >
        ← 프로젝트로 돌아가기
      </a>
    </main>
  );
}

