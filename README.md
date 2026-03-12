# portfolio

개인 포트폴리오 사이트입니다. Next.js(App Router), Tailwind CSS, Framer Motion으로 구성되어 있습니다.

## 실행 방법

```bash
npm install
npm run dev
```

실행 후 브라우저에서 http://localhost:3000 (또는 터미널에 표시된 주소)로 접속하시면 됩니다.  
루트 경로에서 404가 발생할 경우, `npx next dev --hostname 127.0.0.1 --port 3000` 으로 다시 실행해 보시는 것을 권장드립니다.

## 빌드 및 배포

```bash
npm run build
npm run start
```

## 기술 스택

- Next.js 16, React 19
- Tailwind CSS 4
- Framer Motion (스크롤·스태거 애니메이션)
- Geist 폰트

## 프로젝트 구조

- `src/app/(main)/page.tsx` — 메인 페이지 (Hero ~ Contact)
- `src/components/` — Nav, Footer, Section, Button, Tag, AnimateIn
- `src/lib/site.ts` — 이름, 소개 문구, 프로젝트 목록 등 콘텐츠

문구나 링크를 수정하실 때는 `site.ts`를 참고해 주시면 됩니다.
