export const site = {
  nameKo: "현지수",
  nameEn: "HyunJisu",
  headlineLines: ["Data-Focused Developer", "HyunJisu"],
  brandlineEn: "Public Data · Analysis · Management",
  intro: [
    "안드로이드 개발을 시작으로",
    "웹 개발, 데이터 분석, 시각화 등 다양한 기술 영역을 경험해왔습니다.",
    "",
    "그중에서도 데이터를 기반으로 문제를 이해하고",
    "서비스로 연결하는 과정에 가장 큰 흥미를 느끼고 있습니다.",
    "",
    "데이터를 중심으로 기술을 활용하는 개발자로 성장하고 있습니다.",
  ],
  heroTags: ["공공데이터", "데이터정합성", "데이터분석", "데이터관리", "시각화", "SQL", "Python", "GIS"],
  email: "hyunjisu99@daum.net",
  githubUrl: "https://github.com/jisu-hyun",
} as const;

export type FeaturedProject = {
  id: string;
  order: number;
  title: string;
  category: string;
  oneLiner: string;
  period: string;
  coverImage?: { src: string; alt: string };
  keyPoints?: string[];
  flow?: string[];
  writeup?: {
    intro: string;
    tech: string[];
    problemSolving: string[];
    results: string[];
  };
  buildSummary?: Array<{ title: string; body: string }>;
  dataSourceSummary?: string;
  dataSources?: Array<{ label: string; note?: string; href?: string }>;
  disclaimer?: string;
  problem: string;
  learnings: string[];
  tools: string;
  whyGood: string;
  tags: string[];
  links: Array<{ label: string; href: string; kind: "primary" | "secondary" }>;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "suwon-sri-data-contest",
    order: 1,
    title: "수원SRI 데이터 경진대회",
    category: "공공데이터 · 정책/지표",
    coverImage: {
      src: "/images/projects/suwon-sri-data-contest.png",
      alt: "SRI 데이터 경진대회 - 시민이 체감할 수 있는 수원시 녹지정책 방향설정",
    },
    oneLiner:
      "수원시 폭염·녹지·가로수·유동인구·서베이 데이터를 파이프라인으로 분석해 그래프/지도 결과물을 자동 생성하고, 그늘지수(GSI)로 ‘공급–수요’를 같은 기준에서 비교했습니다.",
    period: "2025.08",
    writeup: {
      intro:
        "수원시 폭염·녹지·공원·가로수·유동인구·서베이 데이터를 한 번에 실행되는 파이프라인으로 분석해 그래프·지도 결과물을 자동 생성한 프로젝트입니다.\n도시 환경 이슈를 단일 지표로 단순화하기보다, 시간 추이(폭염)·인식(서베이)·공간 분포(녹지/공원/유동인구)·공급-수요 관점(GSI)을 함께 제시하는 “근거 묶음” 형태로 구성했습니다.\n특히 그늘지수(GSI)는 공급(가로수)과 수요(폭염 민감계층)를 0–1 정규화 후 지수화해 같은 스케일에서 비교 가능하게 만들고, 분위수 기반 등급(매우 부족~충분)으로 구별 비교가 가능하도록 정리했습니다.",
      tech: [
        "Python",
        "pandas · NumPy",
        "Matplotlib(그래프)",
        "GeoPandas(Shapefile/CRS/지도)",
        "Makefile(재현 실행)",
      ],
      problemSolving: [
        "인코딩/원천 형식 혼재(cp949, utf-8, utf-8-sig 등)를 고려해 로딩 방식을 분리하고(일부는 인코딩 자동 시도), 숫자형 변환/결측 처리로 안정화했습니다.",
        "전자지도 shapefile 레이어를 불러오고(EPSG:5179 설정 후 EPSG:4326 변환), 녹지/공원 포인트를 함께 표현해 한 장의 종합 분포 지도로 구성했습니다.",
        "GSI로 ‘공급-수요’를 같은 스케일에서 비교할 수 있도록 공급/수요를 각각 정규화하고 지수화해 구별 상대 부족을 시각화했습니다(등급화 포함).",
        "`make reproduce` 또는 `python scripts/run_all.py`로 주요 결과물이 `outputs/figures/`에 일괄 생성되도록 파이프라인화했습니다.",
      ],
      results: [
        "공공/대회 데이터를 정제·집계해 PNG/CSV 결과물을 재현 가능하게 자동 생성했습니다.",
        "geopandas로 shapefile 레이어와 포인트 데이터를 결합해 수원시 종합 녹지·공원 지도 결과물을 만들었습니다.",
        "그늘지수(GSI)로 가로수 공급과 민감계층 수요를 정규화·지수화해 구별 비교가 가능하도록 시각화했습니다.",
      ],
    },
    keyPoints: [
      "공공/대회 데이터를 정제·집계해 PNG/CSV 결과물을 재현 가능하게 자동 생성",
      "geopandas로 shapefile 레이어+포인트를 결합한 수원시 종합 녹지·공원 지도 제작",
      "그늘지수(GSI)로 가로수 공급과 폭염 민감계층 수요를 정규화·지수화해 구별 비교 가능",
      "Makefile + 일괄 실행 스크립트로 분석을 한 번에 재현 가능하게 구성",
    ],
    problem:
      "도시 환경 이슈를 단일 지표로 단순화하지 않으면서도, 시간·인식·공간·공급-수요 관점을 함께 보여 주는 ‘근거 묶음’이 필요했습니다. 또한 다양한 원천 데이터(인코딩/형식/공간 레이어)를 한 번에 재현 가능한 실행 구조로 묶어야 했습니다.",
    learnings: [
      "공공/대회 데이터처럼 형식·인코딩이 섞인 입력을 안정적으로 로딩하고 정제하는 패턴을 정리했습니다.",
      "공급-수요를 같은 스케일로 맞추는 지표(GSI)를 설계하고, 등급화로 비교 가능하게 표현하는 방법을 익혔습니다.",
      "Makefile/일괄 실행 스크립트로 결과물을 반복 재현 가능하게 만드는 흐름을 경험했습니다.",
    ],
    tools: "Python · pandas/numpy · geopandas · matplotlib · Makefile · scripts(run_all)",
    whyGood:
      "데이터 정제/검증부터 공간 시각화, 지표(GSI) 설계, 결과물 자동 생성까지 ‘재현 가능한 분석 파이프라인’으로 묶어 제출물(PNG/CSV/PDF)까지 일관되게 만들었습니다.",
    tags: ["공공데이터", "GIS", "지표설계", "폭염·녹지", "재현성", "문서화"],
    dataSourceSummary:
      "기상청 기후통계, 수원서베이(2023·2024), 경기데이터드림(인당 공원면적), 수원시 녹지현황·가로수 생태계 정보, 주민등록인구통계, 데이콘 SRI 데이터 경진대회 제공 데이터셋 등 공공데이터를 활용했습니다.",
    links: [
      { label: "GitHub", href: "https://github.com/jisu-hyun/suwon-sri-data-contest", kind: "primary" },
      { label: "최종 산출물 (PDF)", href: "/files/suwon-sri-final.pdf", kind: "secondary" },
    ],
  },
  {
    id: "national-treemap",
    order: 2,
    title: "전국 가로수 현황지도",
    category: "공공데이터 · 지도 서비스",
    coverImage: {
      src: "/images/projects/national-treemap.png",
      alt: "전국 가로수 현황지도 메인 화면",
    },
    keyPoints: [
      "대용량 공공 CSV를 스크립트로 정제·집계해 정적 배포용 `public/data/` 산출물로 고정",
      "전국 지도는 면적 보정 밀도(그루/km²) 기준 choropleth(4단계 구간)로 ‘공정 비교’ 가능하게 구현",
      "부산·전북·경기 일부 지역은 줌에 따라 클러스터 → 개별 마커로 상세 탐색을 자연스럽게 연결",
      "뉴스/서울 집계는 API·Worker·빌드 스냅샷 등 폴백 경로를 둬 정적 배포에서도 기능이 깨지지 않게 설계",
    ],
    flow: ["지도(전국 비교)", "가로수 알아보기(지역/종 탐색)", "활용 데이터(정제·집계 방식)"],
    writeup: {
      intro:
        "메인 지도에서는 시·도 단위로 ‘어느 지역에 가로수가 더 많은지’를 보기 쉽게 보여 주고, 일부 지역은 확대하면 더 자세한 위치/구간 탐색까지 이어집니다.\n또한 ‘가로수 알아보기’ 페이지에서 가로수가 하는 일(도시 온도 완화, 대기 정화 등)과 시민이 할 수 있는 일, 관할 기관 연락처·FAQ까지 함께 안내해 “데이터”를 “이해”로 연결했습니다.",
      tech: [
        "React + TypeScript",
        "Vite",
        "Leaflet(지도)",
        "Recharts(통계)",
        "Node.js 스크립트(데이터 정제/집계)",
        "Cloudflare(Workers/Pages)",
      ],
      problemSolving: [
        "원본 CSV를 그대로 배포하지 않고, 전국 비교용 요약 JSON을 생성해 `public/data/`로 고정했습니다(`aggregate-city-tree`).",
        "처리 단위를 줄이기 위해 시·도 단위 분할 스크립트를 두고(`split-by-sido`), 검증/인코딩 변환으로 데이터 흔들림을 줄였습니다.",
        "전국 비교는 ‘그루 수’가 아니라 면적 보정 밀도(그루/km²)를 기준으로 잡고, 지도 색/범례/통계가 같은 기준을 쓰게 맞췄습니다.",
        "부산·전북·경기 일부 지역은 줌 단계에 따라 클러스터 → 개별 마커로 전환되도록 구성해, ‘요약 → 상세’ 흐름이 끊기지 않게 했습니다.",
        "정적 배포에서도 빈 화면이 되지 않도록 뉴스/서울 집계는 API·Worker·스냅샷 등 폴백 경로를 두었습니다.",
      ],
      results: [
        "전국(시·도) 밀도 choropleth와 통계를 기본으로 제공하고, 일부 지역은 마커 탐색까지 이어지도록 구성했습니다.",
        "`public/data/` 산출물을 기준으로 정적 배포에서도 업데이트/운영이 단순하게 돌아가게 만들었습니다.",
      ],
    },
    oneLiner:
      "전국 가로수 현황을 지도에서 한눈에 비교하고, ‘가로수 알아보기’로 기능·관리·FAQ까지 쉽게 이해할 수 있게 만든 서비스입니다.",
    period: "2026.03",
    problem:
      "공공 가로수 데이터는 용량이 크고 지역별 형식이 달라, 전국 비교와 지역 상세 탐색을 한 화면에서 안정적으로 제공하기가 어렵습니다. 정적 배포 환경에서도 깨지지 않도록 데이터 파이프라인과 폴백 전략이 필요했습니다.",
    buildSummary: [
      {
        title: "전국 기준",
        body: "산림청 도시숲 가로수 현황을 시·도별로 집계해 지도 색상(단위 면적당)과 전국 통계에 반영했습니다. 면적 기준은 KOSIS 지역별 면적을 사용했습니다.",
      },
      {
        title: "서울",
        body: "서울시 트리맵 데이터를 사용해 전국 집계의 서울 값을 대체했습니다.",
      },
      {
        title: "지역 확장(부산/전북/경기)",
        body: "지자체별 CSV(일부 Shapefile 포함)를 파싱하고 좌표 변환·지오코딩을 거쳐 마커로 표시했습니다. 집계는 지역 합계에 반영했습니다.",
      },
    ],
    dataSourceSummary: "모든 데이터는 공공데이터포털(data.go.kr)에서 제공하는 자료를 활용했습니다.",
    learnings: [
      "대용량/비정형 공공데이터를 ‘정적 산출물’로 수렴시키면 서비스가 훨씬 안정해진다는 걸 체감했습니다.",
      "전국 비교는 기준(그루/km²)을 먼저 정하고, 지도·범례·통계를 그 기준으로 맞추는 게 중요했습니다.",
      "줌 단계에 따라 요약 → 상세로 자연스럽게 내려가는 지도 UX를 설계하는 경험을 했습니다.",
      "정적 배포 환경에서는 API가 없거나 실패할 수 있다는 전제에서 폴백을 준비해야 했습니다.",
    ],
    tools: "TypeScript · React · Vite · Leaflet · Recharts · Node.js(데이터 스크립트) · Cloudflare",
    whyGood:
      "대용량/비정형 공공데이터를 ‘정적 산출물 + 지도 UX’로 풀어, 전국 비교와 지역 탐색이 한 흐름에서 이어지게 만들었습니다. 배포 환경에 따라 API가 달라도 동작하도록 폴백을 준비해 운영 안정성을 챙겼습니다.",
    tags: ["공공데이터", "데이터정제", "지도시각화", "웹구현", "검색/필터"],
    links: [
      { label: "Live", href: "https://treemap-korea.pages.dev/", kind: "primary" },
      { label: "GitHub", href: "https://github.com/jisu-hyun/national-treemap", kind: "secondary" },
    ],
  },
  {
    id: "suwon-clothing-bin",
    order: 3,
    title: "수원시 의류수거함 위치 지도",
    category: "공공데이터 · 위치/시설",
    coverImage: {
      src: "/images/projects/suwon-clothing-bin.png",
      alt: "수원시 의류수거함 현황 - 구별 통계와 위치 지도",
    },
    oneLiner:
      "수원시 의류수거함 1,442개를 정제해 구별로 탐색 가능한 인터랙티브 지도로 구현했습니다.",
    period: "2025.07",
    keyPoints: [
      "2025-07-30 기준 전 수원시 의류수거함 1,442개를 권선구(565)·영통구(360)·장안구(296)·팔달구(221) 등 구별로 집계·표시",
      "지도 드래그 이동, 마우스 휠 확대/축소, 우측 레이어로 구별 표시 on/off, 마커 클릭 시 상세 정보 확인",
      "수원시 의류수거함 위치 공공데이터를 정제해 웹에서 바로 열어볼 수 있는 지도 서비스로 제공",
    ],
    flow: ["전체 현황(구별 개수)", "위치 지도(레이어·마커)", "사용 방법"],
    writeup: {
      intro:
        "수원시 의류수거함 위치 데이터를 기반으로 제작한 인터랙티브 지도입니다. 시설 위치 정보가 흩어져 있어 시민·담당자가 ‘어디에 무엇이 있는지’를 빠르게 찾기 어렵다는 문제를 해결하기 위해, 공공데이터를 정제하고 구별 집계와 지도 시각화를 적용해 한 화면에서 현황과 위치를 탐색할 수 있게 했습니다.",
      tech: ["Python", "공공데이터 정제", "HTML/CSS/JS", "지도 시각화"],
      problemSolving: [
        "수원시 제공 의류수거함 위치 데이터를 수집·정제해 구별(권선·영통·장안·팔달) 집계와 지도용 좌표 데이터로 변환했습니다.",
        "지도에서 드래그 이동·확대/축소·구별 레이어 선택·마커 클릭 상세 정보 등 사용자 흐름에 맞춰 구성했습니다.",
        "정적 호스팅(GitHub Pages)으로 배포해 별도 서버 없이 바로 열어볼 수 있는 형태로 제공했습니다.",
      ],
      results: [
        "전 수원시 의류수거함 1,442개를 구별 통계와 인터랙티브 지도로 한눈에 볼 수 있게 했습니다.",
        "시민·담당자가 ‘가까운 수거함 찾기’에 바로 활용할 수 있는 웹 서비스를 구축했습니다.",
      ],
    },
    problem:
      "시설 위치 정보가 흩어져 있어 시민/담당자가 ‘어디에 무엇이 있는지’를 빠르게 찾기 어려웠습니다.",
    learnings: [
      "수집 → 정제 → 시각화까지 짧은 사이클로, 업무에 쓰이는 산출물(지도)을 만드는 과정을 경험했습니다.",
      "지도 UI에서 레이어·마커·상세 정보 등 사용자가 ‘찾기’에 필요한 요소를 단순하게 구성하는 방법을 익혔습니다.",
    ],
    tools: "Python · 공공데이터 정제 · HTML/지도 시각화 · GitHub Pages",
    whyGood:
      "실제 사용자가 ‘찾는 흐름’에 맞춰 데이터를 재구성하고, 바로 열어볼 수 있는 인터랙티브 지도로 제공했습니다.",
    tags: ["공공데이터", "데이터정제", "지도", "Python", "사용자흐름"],
    dataSourceSummary: "수원시 의류수거함 위치 공공데이터를 활용했습니다.",
    links: [
      { label: "Live", href: "https://jisu-hyun.github.io/suwon-clothing-bin/", kind: "primary" },
      { label: "GitHub", href: "https://github.com/jisu-hyun/suwon-clothing-bin", kind: "secondary" },
    ],
  },
  {
    id: "jj",
    order: 4,
    title: "근무 스케줄링 앱",
    category: "서비스 · 업무자동화",
    coverImage: {
      src: "/images/projects/jj.png",
      alt: "JJ 프로젝트 로고",
    },
    oneLiner:
      "현장에서 반복되는 일정 공유/조율 문제를 줄이기 위해 근무 스케줄을 등록·공유하는 앱을 구현했습니다.",
    period: "2025.07",
    problem: "현장에서는 일정 공유가 흩어져 있어 누락/중복이 자주 발생했고, 표준화된 입력/조회가 필요했습니다.",
    learnings: [
      "업무 프로세스(입력→검증→조회)를 화면 흐름으로 설계하고 구현하는 경험을 쌓았습니다.",
    ],
    tools: "Kotlin · Android · CRUD/폼 UX",
    whyGood:
      "현장 문제를 ‘데이터 입력 규칙 + 화면 흐름’으로 바꿔 누락/혼선을 줄이는 방향으로 설계했습니다.",
    tags: ["업무자동화", "앱개발", "입력검증", "Kotlin", "Android"],
    links: [{ label: "GitHub", href: "https://github.com/jisu-hyun/jj", kind: "primary" }],
  },
  {
    id: "nurse-treemap",
    order: 5,
    title: "전국 보호수 현황지도",
    category: "공공데이터 · 지도/탐색",
    coverImage: {
      src: "/images/projects/nurse-treemap.png",
      alt: "전국 보호수 현황지도 메인 화면",
    },
    keyPoints: [
      "전국 보호수 현황을 시·도 단위 choropleth(4단계 구간)로 한눈에 비교",
      "가능 지역은 확대 시 클러스터 → 개별 마커로 이어지는 탐색 흐름 제공",
      "산림청 ‘보호수 전국 지정현황’과 지자체 공개 데이터를 정제·보정해 지도/통계/뉴스로 연결",
      "정적 배포 환경에서도 동작하도록 `public/data/` 산출물 + 폴백 경로로 안정성 확보",
      "탐색(지역 선택·확대/마커 선택) 중심의 UI로 “요약 → 상세” 흐름을 설계",
    ],
    flow: ["지도(전국 비교)", "지역 선택(통계/상세)", "확대 탐색(클러스터/마커)", "보호수 알아보기", "활용 데이터"],
    writeup: {
      intro:
        "메인 지도에서는 시·도 단위로 “어느 지역에 보호수가 더 많은지”를 색 구간(choropleth) + 툴팁으로 직관적으로 보여 줍니다.\n또한 확대 시(가능 지역)에는 시군구/구 단위 클러스터로 요약을 제공하고, 더 확대하면 개별 보호수 마커를 선택해 수종/본수 등 정보를 확인할 수 있게 구성해 “요약 → 상세” 흐름을 자연스럽게 연결했습니다.\n별도로 ‘보호수 알아보기’ 페이지에서 보호수의 의미·관리·FAQ·시민 행동 가이드와 시도별 관할 연락처를 안내해 “데이터”를 “이해”로 이어지게 했고, ‘활용 데이터’ 페이지에서 사용한 공공데이터 출처를 정리했습니다.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Leaflet",
        "react-leaflet",
        "Recharts",
        "Node.js(스크립트)",
        "Turf.js",
        "proj4",
        "shapefile",
      ],
      problemSolving: [
        "원본 CSV를 그대로 쓰지 않고, 서비스가 바로 읽는 데이터를 `public/data/`에 고정해 정적 배포에 최적화했습니다(예: `public/data/protected-trees.csv` + 지역별 마커 JSON + 제주 시군구 GeoJSON).",
        "CSV 인코딩 흔들림을 줄이기 위해 브라우저 로딩에서 UTF-8/EUC-KR/CP949 순 디코딩 + 한글 헤더 검증으로 안정적으로 파싱했습니다.",
        "일부 지역(서울/인천/경북 상세)은 지자체 데이터가 더 정확한 케이스가 있어, 로딩 시 마커/상세 집계를 함께 불러와 시도 총계·수종 분포·전국 합계까지 재계산해 지도/통계 수치가 어긋나지 않게 했습니다.",
        "마커 과밀 문제는 클러스터(카운트 원형) → 개별 마커 단계로 나누고, 동일 좌표 중첩은 미세 오프셋으로 클릭 가능성을 확보했습니다.",
        "제주는 Shapefile→GeoJSON 변환으로 만든 시군구 경계를 적용해, 줌 단계에 따라 시도 → 제주시/서귀포시로 자연스럽게 전환되도록 처리했습니다.",
        "뉴스는 정적 배포에서도 빈 화면이 되지 않도록 `/api/news`(로컬 서버·Pages Functions) → `public/data/news.json`(빌드 스냅샷) → 정적 폴백 순의 폴백 경로를 설계했습니다.",
      ],
      results: [
        "전국(시·도) 보호수 choropleth와 상위 수종 통계를 기본으로 제공하고, 일부 지역은 마커 탐색까지 이어지도록 구성했습니다.",
        "`public/data/` 산출물 중심 구조로, 원본 데이터 갱신 후 빌드만으로 서비스 반영이 가능해 운영/업데이트가 단순해졌습니다.",
      ],
    },
    buildSummary: [
      {
        title: "전국 기준",
        body: "산림청 보호수 전국 지정현황(2024-12-31) CSV를 시·도·수종별로 집계해 choropleth(4단계 구간)와 수종 통계의 기준 데이터로 사용했습니다.",
      },
      {
        title: "지역별 상세 마커",
        body: "서울·인천·경북·광주·대전·울산(중구) 등은 지역별 CSV/좌표를 스크립트로 정규화해 마커 JSON으로 수렴했고, 지도에서는 클러스터/상세 탐색으로 연결했습니다. 제주는 N3A shapefile을 GeoJSON으로 변환해 시군구 경계를 적용했습니다.",
      },
    ],
    dataSourceSummary:
      "산림청 보호수 전국 지정현황(2024-12-31) CSV를 기본으로 사용하고, 일부 지역은 지자체/지역 단위 자료를 추가로 정규화해 상세 마커로 확장했습니다.",
    oneLiner: "전국 보호수 현황을 시·도 단위 choropleth(4단계 구간)로 한눈에 비교할 수 있는 웹 서비스입니다.",
    period: "2026.03",
    problem:
      "전국 단위 비교(요약)와 지역 단위 상세 탐색(마커)을 한 흐름으로 제공하려면, 공공 CSV/지자체 데이터의 형식·인코딩 차이를 흡수하고 정적 배포에서도 깨지지 않는 구조가 필요했습니다.",
    learnings: [
      "정적 배포 환경에서 깨지지 않는 ‘데이터 파이프라인 → 산출물(public/data) → 화면 연결’ 흐름을 설계·구현했습니다.",
      "전국 비교(choropleth) → 확대 탐색(클러스터/마커)로 내려가는 지도 UX를 구성하는 방법을 정리했습니다.",
      "지역별 데이터 품질 차이를 ‘보정 + 재계산’으로 흡수해 지도/통계 수치를 일관되게 유지하는 경험을 했습니다.",
    ],
    tools: "React · Vite · Leaflet(react-leaflet) · Recharts · Tailwind · Node.js(스크립트) · Turf · proj4 · shapefile",
    whyGood:
      "공공데이터를 ‘볼 수 있는 화면’이 아니라 ‘탐색 가능한 서비스’로 연결했고, 정적 배포에서도 뉴스/데이터가 빈 화면이 되지 않도록 폴백까지 설계해 완성도를 높였습니다.",
    tags: ["공공데이터", "데이터정제", "지도시각화", "웹구현", "검색/필터"],
    links: [
      { label: "Live", href: "https://nurse-treemap.pages.dev/", kind: "primary" },
      { label: "GitHub", href: "https://github.com/jisu-hyun/nurse-treemap", kind: "secondary" },
    ],
  },
  {
    id: "business-websit",
    order: 6,
    title: "대동카아트",
    category: "웹 · 서비스",
    coverImage: {
      src: "/images/projects/business-websit.png",
      alt: "대동카아트 비즈니스 웹사이트 메인 화면",
    },
    oneLiner:
      "차량 래핑/도장 작업 사진을 보기 좋게 모아 보여주는 사이트를 만들고, 사장님이 관리자 화면에서 사진을 올리거나 삭제하면 홈페이지에 그대로 반영되게 만들었습니다.",
    period: "2026.02",
    keyPoints: [
      "갤러리(카테고리별) 목록/검색/상세 + 포토갤러리 노출",
      "관리자 페이지에서 게시물 CRUD/이미지 업로드/노출 관리",
      "비밀번호 로그인 + 쿠키 기반 인증으로 관리자 기능 보호",
      "수정 내용이 GitHub에 커밋되고 Cloudflare Pages 자동 배포로 반영되는 운영 흐름",
    ],
    flow: ["갤러리(목록/상세)", "관리자(등록/수정/삭제)", "배포 반영(자동)"],
    writeup: {
      intro:
        "차량 래핑/도장 작업 사진을 보기 좋게 모아 보여주는 사이트를 만들고, 운영자가 관리자 화면에서 사진/게시물을 올리거나 삭제하면 홈페이지에 바로 반영되게 구성했습니다.\n또, Cloudflare Pages처럼 정적 배포 환경에서도 관리자 기능이 끊기지 않도록(업로드/저장/반영) 서버 기능을 Pages Functions로 분리하고 저장은 GitHub에 남기도록 설계했습니다.",
      tech: [
        "Next.js(App Router) · React · TypeScript · Tailwind",
        "Cloudflare Pages(정적 배포) · Pages Functions",
        "GitHub API(Contents/Git Data API)",
      ],
      problemSolving: [
        "Cloudflare Pages는 정적 배포라서 배포 환경에서는 Pages Functions가 `/api/admin/*`를 담당하도록 분리하고, 로컬에서는 Next Route Handler로 개발이 가능하게 구성했습니다.",
        "관리자 저장 시 원본(`data/gallery/<category>.json`)과 정적 반영용(`public/data/gallery/<category>.json`)을 함께 GitHub에 커밋해, 정적 사이트에서도 데이터가 안정적으로 유지되게 했습니다.",
        "이미지 업로드는 브라우저에 토큰을 두지 않고 서버가 GitHub로 업로드하도록 프록시를 둬 보안/운영 리스크를 줄였습니다.",
        "정적 export에서 `/api` 때문에 빌드가 깨지는 문제는 빌드 단계에서 `app/api`를 임시로 제외하고, 배포는 Functions로 처리하게 구성했습니다.",
        "HTTPS일 때만 `Secure` 쿠키를 적용하고 인증 상태는 서버에서 확인하도록 해 환경별 로그인/쿠키 이슈를 정리했습니다.",
        "업로드/저장 중 편집 상태가 꼬이는 문제는 편집 상태 ref 동기화로 안정화했습니다.",
        "삭제/동기화 이슈는 이름 공백/표기 차이까지 고려해 포토갤러리 반영 로직을 개선했습니다.",
      ],
      results: [
        "운영자가 관리자에서 수정하면 GitHub에 저장되고 배포가 따라오도록, 실제 운영 가능한 갤러리 사이트를 완성했습니다.",
        "정적 배포 제약(Cloudflare Pages) 안에서 인증/업로드/저장 흐름을 설계해 “만들고 끝”이 아니라 운영 가능한 형태로 정리했습니다.",
      ],
    },
    problem:
      "정적 배포 환경(Cloudflare Pages)에서도 운영자가 직접 갤러리 콘텐츠를 관리(업로드/수정/삭제)할 수 있는 ‘운영 흐름’이 필요했습니다.",
    learnings: [
      "정적 배포 제약이 있는 환경에서 관리자 기능을 유지하기 위한 아키텍처(Functions + GitHub 저장)를 설계·구현했습니다.",
      "쿠키 인증/빌드 export 이슈/업로드 안정화/동기화 같은 운영 이슈를 해결하면서 구조를 고도화했습니다.",
    ],
    tools: "Next.js(App Router) · TypeScript · Tailwind · Cloudflare Pages/Functions · GitHub API",
    whyGood:
      "정적 배포(Cloudflare Pages) 제약을 전제로 관리자 기능을 Pages Functions + GitHub 저장으로 구현했고, 이미지 업로드·게시물 CRUD·포토갤러리 동기화까지 운영 흐름을 끝까지 완성했습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Cloudflare", "관리자", "GitHub API"],
    links: [
      { label: "Live", href: "https://daedongcarart.com", kind: "primary" },
      { label: "GitHub", href: "https://github.com/jisu-hyun/business-websit", kind: "secondary" },
    ],
  },
];
