# portfolio

개인 포트폴리오 사이트. Next.js(App Router) + Tailwind + Framer Motion.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 (또는 터미널에 찍힌 주소) 열면 됨.  
루트에서 404 나오면 `npx next dev --hostname 127.0.0.1 --port 3000` 로 한 번 더 시도해보면 됨.

## 빌드

```bash
npm run build
npm run start
```

## 사용한 것

- Next.js 16, React 19
- Tailwind CSS 4
- Framer Motion (스크롤/스태거 애니메이션)
- Geist 폰트

## 폴더 대략

- `src/app/(main)/page.tsx` — 메인 한 페이지 (Hero ~ Contact)
- `src/components/` — Nav, Footer, Section, Button, Tag, AnimateIn
- `src/lib/site.ts` — 이름/소개/프로젝트 목록 등 문구

문구·링크 수정은 `site.ts` 보면 됨.
