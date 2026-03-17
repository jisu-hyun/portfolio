"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <body style={{ background: "#0f1219", color: "#e9eaf0", padding: "2rem", fontFamily: "sans-serif" }}>
        <h1 style={{ fontSize: "1.5rem" }}>오류</h1>
        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", fontSize: "0.875rem", color: "#94a3b8" }}>
          {error.message}
        </pre>
        {error.digest && <p style={{ color: "#64748b", fontSize: "0.75rem" }}>digest: {error.digest}</p>}
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            background: "rgba(255,255,255,0.9)",
            color: "#000",
            border: "none",
            borderRadius: "9999px",
            cursor: "pointer",
          }}
        >
          다시 시도
        </button>
      </body>
    </html>
  );
}
