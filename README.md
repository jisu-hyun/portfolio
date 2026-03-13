# Portfolio

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
