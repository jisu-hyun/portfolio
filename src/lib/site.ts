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
    oneLiner:
      "폭염·시민인식·녹지·유동인구 데이터를 통합해 수원시 지속가능성을 진단하고, 구별 우선순위를 제안했습니다.",
    period: "2025.08",
    problem:
      "분산된 공공·공간 데이터를 하나의 기준으로 묶어, ‘어디에 먼저 투자/개선해야 하는지’를 설명할 수 있는 지표가 필요했습니다.",
    learnings: [
      "다원 데이터(기상·서베이·공간·유동인구)를 기준/단위로 정규화하고 결합하는 방법을 익혔습니다.",
      "분석 결과를 ‘정책/업무에서 쓰이는 문장’으로 바꾸기 위해 지표 정의와 해석을 반복했습니다.",
    ],
    tools: "Python (Pandas, GeoPandas) · 시각화(Matplotlib/Seaborn) · 재현성(구성/문서화)",
    whyGood:
      "공공데이터의 제약을 감안해 지표를 정의하고, 결과를 비교 가능한 형태(시각화/문서)로 정리했습니다.",
    tags: ["공공데이터", "GIS", "지표설계", "재현성", "문서화"],
    links: [
      { label: "GitHub", href: "https://github.com/jisu-hyun/suwon-sri-data-contest", kind: "primary" },
    ],
  },
  {
    id: "national-treemap",
    order: 2,
    title: "전국 가로수 현황 지도",
    category: "공공데이터 · 지도 서비스",
    coverImage: {
      src: "/images/projects/national-treemap.png",
      alt: "전국 가로수 현황지도 메인 화면",
    },
    keyPoints: [
      "전국(시·도) 단위로 가로수 분포/밀도를 한 화면에서 비교",
      "원본(100MB+) CSV를 서비스용 요약 데이터로 변환해 로딩/탐색 성능 확보",
      "지역별 데이터 품질 차이를 흡수해 일관된 탐색 흐름으로 연결",
    ],
    flow: ["지도(전국 비교)", "가로수 알아보기(지역/종 탐색)", "활용 데이터(정제·집계 방식)", "데이터 출처/주의사항"],
    writeup: {
      intro:
        "서울시청 조경과에서 트리맵 데이터를 관리하면서 서울시 트리맵을 참고했습니다.\n그러다 \"이걸 전국 가로수 현황도 한 화면에서 비교하고 찾아볼 수 있게 만들면 좋겠다\"는 생각이 들어서 프로젝트를 시작했습니다.\n하지만 공공데이터는 용량이 크고 지역마다 형식이 제각각이라 그대로는 서비스에 쓰기 어려웠습니다.\n그래서 전국 기준으로 집계한 데이터와 지역별로 확장한 데이터를 나눠서 만들고, 화면에서는 안정적으로 탐색할 수 있게 구성했습니다.",
      tech: ["React", "TypeScript", "Vite", "Leaflet(react-leaflet)", "Recharts", "Node(데이터 스크립트)", "Cloudflare Pages/Workers"],
      problemSolving: [
        "100MB+ 원본 CSV를 그대로 배포하지 않고, 시·도 분할(`split-by-sido`)과 집계(`aggregate-city-tree`)로 `city-tree-summary.json`을 생성해 로딩/배포 용량을 줄였습니다.",
        "데이터가 불완전할 때 화면이 깨지지 않도록 전국 수준 여부를 판별하고(`isCompleteNationwideData`), 실패 시 목업/대체값으로 폴백하도록 구성했습니다.",
        "정적 호스팅 환경에서도 뉴스/서울 데이터가 동작하도록 Cloudflare Worker API를 붙이고, 미설정/실패 시에는 정적 `news.json`으로 재시도하는 이중 경로를 만들었습니다.",
      ],
      results: [
        "전국(시·도) 통계 + 지역 마커를 한 UI에서 비교/탐색 가능한 형태로 제공했습니다.",
        "데이터 변환 파이프라인을 스크립트로 고정해, 업데이트 시 `build`만으로 산출물이 자동 갱신되도록 했습니다.",
        "정적 배포(Cloudflare Pages)에서도 API 유무에 따라 기능이 자연스럽게 degrade 되도록 설계해 운영 안정성을 높였습니다.",
      ],
    },
    oneLiner:
      "전국(시·도) 가로수 데이터를 집계·정제해, 지도에서 밀도/분포를 비교·탐색할 수 있는 서비스로 구현했습니다.",
    period: "2026.03.01 ~ 2026.03.12",
    problem:
      "대용량 원본 CSV(100MB+)를 그대로 쓰기 어렵고, 전국 단위로 한 번에 비교·탐색할 수 있는 요약 데이터와 화면 흐름이 필요했습니다.",
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
      "원본 CSV를 시·도 단위로 분할하고 집계 스크립트로 요약 JSON을 생성해 서비스에 연결했습니다.",
      "결측/중복/표준화 이슈를 화면 단에서 깨지지 않게 정리하는 기준을 만들었습니다.",
      "지도 기반 UI에서 비교·필터·상세 탐색 흐름을 설계/구현했습니다.",
    ],
    tools: "TypeScript · React/Next · 지도 시각화(Leaflet) · 데이터 집계(Node)",
    whyGood:
      "데이터를 ‘볼 수 있는 화면’이 아니라 ‘탐색 가능한 서비스’로 연결해, 전국 단위 현황 파악과 비교에 바로 쓰이게 했습니다.",
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
    oneLiner:
      "수원시 의류수거함 1,442개를 정제해 구별로 탐색 가능한 지도로 구현했습니다.",
    period: "2025.07",
    problem:
      "시설 위치 정보가 흩어져 있어 시민/담당자가 ‘어디에 무엇이 있는지’를 빠르게 찾기 어려웠습니다.",
    learnings: [
      "수집 → 정제 → 시각화까지 짧은 사이클로, 업무에 쓰이는 산출물(지도)을 만드는 과정을 경험했습니다.",
    ],
    tools: "Python · 공공데이터 정제 · HTML 지도 생성",
    whyGood:
      "실제 사용자가 ‘찾는 흐름’에 맞춰 데이터를 재구성하고, 바로 열어볼 수 있는 지도로 제공했습니다.",
    tags: ["공공데이터", "데이터정제", "지도", "Python", "사용자흐름"],
    links: [
      { label: "GitHub", href: "https://github.com/jisu-hyun/suwon-clothing-bin", kind: "secondary" },
    ],
  },
  {
    id: "jj",
    order: 4,
    title: "근무 스케줄링 앱",
    category: "서비스 · 업무자동화",
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
    id: "national-protected-treemap",
    order: 5,
    title: "전국 보호수 현황지도",
    category: "공공데이터 · 지도/탐색",
    keyPoints: [
      "전국(시·도) 단위로 보호수 분포·현황을 한 화면에서 비교",
      "공공데이터 정제 후 지도에서 지정 보호수 위치·정보 탐색 가능",
      "지역별 데이터 품질 차이를 흡수해 일관된 탐색 흐름으로 연결",
    ],
    flow: ["지도(전국·지역 비교)", "보호수 알아보기(지역/종류 탐색)", "활용 데이터", "데이터 출처"],
    writeup: {
      intro:
        "가로수 현황지도와 같은 방식으로, 지정·보호 나무(보호수) 데이터를 전국 단위에서 한눈에 비교·탐색할 수 있게 하고 싶어 기획했습니다. 공공데이터는 지역마다 형식이 달라 그대로는 서비스에 쓰기 어려우므로, 집계·정제된 기준 데이터와 지역별 상세를 나누어 지도에서 안정적으로 보여주는 구조로 설계했습니다.",
      tech: ["React", "TypeScript", "Vite", "Leaflet(react-leaflet)", "Node(데이터 스크립트)"],
      problemSolving: [
        "지역별로 다른 보호수 공공데이터 형식을 하나의 기준으로 정규화해 지도·통계에 반영했습니다.",
        "데이터가 비어 있거나 불완전한 지역이 있어도 화면이 깨지지 않도록 폴백·검증 로직을 두었습니다.",
        "정적 배포 환경에서도 동작하도록 데이터는 빌드 시점에 생성·포함하는 방식으로 구성했습니다.",
      ],
      results: [
        "전국·시도별 보호수 현황을 지도와 목록으로 비교·탐색할 수 있는 형태로 제공했습니다.",
        "데이터 변환을 스크립트로 고정해, 원본만 갱신하면 빌드로 서비스 데이터가 자동 반영되게 했습니다.",
      ],
    },
    buildSummary: [
      {
        title: "전국 기준",
        body: "공공데이터포털 등에서 제공하는 보호수(지정·보호 나무) 데이터를 시·도 단위로 집계해 지도 색상과 전국 통계에 반영했습니다.",
      },
      {
        title: "지역별 상세",
        body: "지자체별 공개 데이터(CSV·Shapefile 등)를 파싱하고 좌표 변환·지오코딩을 거쳐 지도 마커로 표시했습니다.",
      },
    ],
    dataSourceSummary: "모든 데이터는 공공데이터포털(data.go.kr) 등에서 제공하는 자료를 활용했습니다.",
    oneLiner:
      "전국 공공데이터를 정제해 지역별 보호수(지정·보호 나무) 현황을 지도에서 비교·탐색할 수 있는 웹으로 구현했습니다.",
    period: "2026.03",
    problem:
      "지역별로 흩어진 보호수 데이터를 모아 전국 단위로 한 번에 비교·검색할 수 있는 사용자 흐름이 필요했습니다.",
    learnings: [
      "공공데이터 결측/중복/표준화 이슈를 서비스에서 견딜 수 있게 정리하는 감각을 쌓았습니다.",
      "지도 기반 서비스에서 비교 → 필터 → 상세 흐름을 설계·구현했습니다.",
    ],
    tools: "TypeScript · React · 지도 시각화(Leaflet) · 데이터 정제",
    whyGood:
      "공공데이터의 제약을 감안해 정제·검증을 선행하고, 탐색 가능한 지도 UI로 연결했습니다.",
    tags: ["공공데이터", "데이터정제", "지도시각화", "웹구현", "검색/필터"],
    links: [{ label: "GitHub", href: "https://github.com/jisu-hyun/national-protected-treemap", kind: "primary" }],
  },
];
