import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-[#05060a] px-6">
      <h1 className="text-fluid-2xl font-semibold text-white">404</h1>
      <p className="text-center text-fluid-base text-white/70">
        요청한 페이지를 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className="rounded-full bg-white/90 px-5 py-3 text-sm font-medium text-black transition hover:bg-white"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
