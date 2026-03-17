# Portfolio

## 프로젝트 구조

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃, 메타, 폰트
│   ├── page.tsx            # 메인(히어로·프로젝트·업무경험·기술·연락)
│   ├── globals.css         # 전역 스타일, CSS 변수
│   ├── not-found.tsx       # 404 페이지
│   └── projects/
│       ├── page.tsx        # /projects → /#projects 리다이렉트
│       └── [id]/page.tsx   # 프로젝트 상세
├── src/
│   ├── components/         # 공용 컴포넌트
│   │   ├── Nav.tsx, Footer.tsx, CursorGlow.tsx
│   │   ├── AnimateIn.tsx, ScrollReveal.tsx, ScrollRevealSection.tsx
│   │   └── ui/             # Button, Tag
│   └── lib/
│       ├── site.ts         # site 정보, featuredProjects 데이터
│       └── scroll.ts       # 스크롤 리빌 공통 상수
├── next.config.ts
├── tsconfig.json            # paths: "@/*" → "./src/*"
└── package.json
```

## 개발 서버 실행

**반드시 이 폴더에서** 실행하세요.

```bash
cd "/Users/js/Data Canvas/portfolio"
npm run dev
```

실행 후 브라우저에서 http://127.0.0.1:3000 접속. (다른 포트면 터미널에 표시된 주소 사용)

## 포트 정리 후 서버만 하나 띄우기

다른 터미널/이전에 켜 둔 서버 때문에 포트가 꽉 찼다면, **한 번만** 아래를 터미널에 붙여넣어 실행하세요. (3000~3005 사용 중인 프로세스 종료 후 dev 실행)

```bash
cd "/Users/js/Data Canvas/portfolio"
for p in 3000 3001 3002 3003 3004 3005; do lsof -ti :$p | xargs kill -9 2>/dev/null; done
rm -f .next/dev/lock
npm run dev
```

이후에는 **http://127.0.0.1:3000** 으로 접속.

## 연락하기 폼 (Formspree)

폼 제출을 이메일로 받으려면 [Formspree](https://formspree.io)에서 무료 가입 후:

1. **Create a new form** → 이메일 주소 연결
2. 생성된 폼의 **form endpoint**에서 ID만 복사 (예: `https://formspree.io/f/xyzabc` → `xyzabc`)
3. 프로젝트 루트에 `.env.local` 생성 후 아래 한 줄 추가:

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=xyzabc
```

4. 개발 서버 재시작 후 SEND 시 해당 이메일로 수신됩니다.  
   변수를 넣지 않으면 기존처럼 **mailto** 링크로 메일 앱이 열립니다.
