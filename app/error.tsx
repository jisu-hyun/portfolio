"use client";

import { useEffect } from "react";

const isProd = process.env.NODE_ENV === "production";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-[#0f1219] px-6">
      <h1 className="text-fluid-2xl font-semibold text-white">오류가 발생했어요</h1>
      <p className="text-center text-fluid-base text-white/70">
        일시적인 문제가 생겼어요. 아래 버튼으로 다시 시도해 주세요.
      </p>
      {!isProd && (
        <>
          <pre className="max-w-full overflow-auto rounded-lg border border-white/15 bg-white/5 p-4 text-left text-sm text-white/80">
            {error.message}
          </pre>
          {error.digest ? (
            <p className="text-fluid-xs text-white/50">digest: {error.digest}</p>
          ) : null}
        </>
      )}
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-white/90 px-5 py-3 text-sm font-medium text-black transition hover:bg-white"
      >
        다시 시도
      </button>
    </div>
  );
}
