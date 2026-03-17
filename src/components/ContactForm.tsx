"use client";

import * as React from "react";

type Props = {
  toEmail: string;
  formspreeFormId?: string | null;
};

export function ContactForm({ toEmail, formspreeFormId }: Props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formspreeFormId) {
      setStatus("sending");
      try {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), 8000);

        const formData = new FormData();
        formData.append("name", name || "(이름 없음)");
        if (email) formData.append("_replyto", email);
        formData.append("message", message.trim() || "(메시지 없음)");
        formData.append("_subject", `[포트폴리오 연락] ${name || "이름 없음"}`);

        const res = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
          signal: controller.signal,
        });
        window.clearTimeout(timeoutId);
        if (res.ok) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    const subject = encodeURIComponent(`[포트폴리오 연락] ${name || "이름 없음"}`);
    const body = encodeURIComponent(
      [
        message.trim() || "(메시지 없음)",
        "",
        "---",
        `보낸 이: ${name || "-"}`,
        `회신 이메일: ${email || "-"}`,
      ].join("\n")
    );
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  };

  if (status === "success") {
    return (
      <div className="success-reveal flex flex-col items-center text-center">
        <h2 className="font-display text-fluid-2xl font-bold tracking-tight text-white sm:text-fluid-3xl">
          Thank you :)
        </h2>
        <p className="mt-3 max-w-md text-fluid-sm leading-relaxed text-white/75">
          연락 주시면 답장 드릴게요. 비공개 프로젝트는 범위에 맞춰 Case Study로 공유 가능해요.
        </p>
        <div
          className="success-reveal-card relative mt-8 w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-10 backdrop-blur-xl"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.06), 0 24px 48px -12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div
            className="absolute -inset-px rounded-2xl opacity-60"
            style={{
              background:
                "linear-gradient(135deg, rgba(136,174,255,0.25), transparent 45%, transparent 55%, rgba(160,120,255,0.2))",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5"
              style={{
                boxShadow: "0 0 24px rgba(136,174,255,0.15), inset 0 0 20px rgba(136,174,255,0.08)",
              }}
            >
              <svg
                className="h-7 w-7 text-white/90"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </div>
            <span className="font-display text-xl font-semibold tracking-tight text-white">Thanks!</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-fluid-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white"
        >
          다른 메시지 보내기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
      {status === "error" && (
        <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-fluid-sm text-red-200">
          전송에 실패했어요. 이메일로 직접 연락해 주세요.
        </div>
      )}

      <label className="block">
        <span className="sr-only">이름</span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "sending"}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-fluid-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 disabled:opacity-60"
        />
      </label>
      <label className="block">
        <span className="sr-only">이메일</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "sending"}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-fluid-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 disabled:opacity-60"
        />
      </label>
      <label className="block">
        <span className="sr-only">메시지</span>
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          disabled={status === "sending"}
          className="w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-fluid-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 min-h-[120px] disabled:opacity-60"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 w-full rounded-xl bg-white/90 px-4 py-3.5 text-fluid-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-70 disabled:pointer-events-none"
      >
        {status === "sending" ? "전송 중…" : "SEND"}
      </button>
    </form>
  );
}
