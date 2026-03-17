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
      "폭염 체감도와 녹지 이용 특성을 분석해 시민이 체감할 수 있는 수원시 녹지 정책 방향(스마트 급수·그늘지수 기반 그늘길 알림 등)을 제안했습니다.",
    period: "2025.08",
    writeup: {
      intro:
        "수원시민이 체감할 수 있는 녹지 정책 방향을 설정하기 위해, 폭염 체감도와 녹지 이용 특성을 중심으로 분석했습니다. 기상청 폭염·기후 데이터, 수원서베이(시민 인식·공원 이용), 녹지 현황·가로수 생태계 정보·인당 공원면적 등 다원 데이터를 통합해 수원시 기후 취약성과 녹지 수급을 진단하고, 스마트 급수 시스템 도입·그늘지수(GSI) 기반 그늘길 알림 등 정책제언을 최종 산출물로 제출했습니다.",
      tech: ["Python", "Pandas", "GeoPandas", "NumPy", "Matplotlib", "Seaborn", "기상청·수원서베이·녹지·가로수 공공데이터"],
      problemSolving: [
        "폭염일수·시민 기후 인식·인당 공원면적·녹지 이용 특성을 통합 분석해 수원시 녹지·폭염 취약성을 진단했습니다.",
        "그늘지수(GSI)를 산정해 구별 그늘 수급 격차를 파악하고, 팔달구(폭염 취약계층 밀집)·영통구(대표 녹지) 등 우선 추진 구역을 제안했습니다.",
        "스마트 급수 시스템·레인시티 연계, 녹음길 알림 서비스 등 실행 가능한 정책제언을 정리해 최종 산출물로 제출했습니다.",
      ],
      results: [
        "수원시 기후·녹지·시민 인식 데이터를 하나의 분석 체계로 통합하고, 구별 우선순위를 제시했습니다.",
        "최종 산출물(PDF)로 정책 방향과 구별 추진안을 제출했으며, 경진대회에서 수상했습니다.",
      ],
    },
    keyPoints: [
      "수원시 기후·폭염일수·시민 인식 데이터와 녹지 현황·이용 특성을 통합 분석",
      "그늘지수(GSI) 산정으로 구별 그늘 수급 격차 파악, 팔달구·영통구 등 우선 추진 구역 제안",
      "스마트 급수 시스템 도입·레인시티 연계, 녹음길 알림 서비스 등 정책제언을 최종 산출물로 정리",
    ],
    problem:
      "분산된 공공·공간·서베이 데이터를 하나의 기준으로 묶어, ‘어디에 먼저 투자/개선해야 하는지’를 설명할 수 있는 지표와 정책 방향이 필요했습니다.",
    learnings: [
      "다원 데이터(기상청·수원서베이·녹지현황·가로수 생태계·유동인구 등)를 기준/단위로 정규화하고 결합하는 방법을 익혔습니다.",
      "그늘지수(GSI)처럼 공급·수요를 함께 반영한 지표를 설계하고, 분석 결과를 정책/업무 문장으로 옮기는 연습을 했습니다.",
    ],
    tools: "Python (Pandas, GeoPandas, NumPy) · 시각화(Matplotlib/Seaborn) · 재현성(구성/문서화)",
    whyGood:
      "공공데이터 제약을 감안해 지표를 정의하고, 스마트 급수·그늘길 알림 등 실행 가능한 정책제언과 함께 비교 가능한 형태(시각화/문서)로 정리했습니다.",
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
    period: "2026.03",
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
      "시도별·지역별 보호수 위치를 지도에서 한눈에 비교·탐색",
      "산림청 보호수 전국 지정현황 CSV를 파싱해 시도별·수종별 집계 후 지도·통계에 반영",
      "서울·경북·광주·인천·대전 등 지역별 상세 마커(클러스터)로 개별 보호수 위치 표시",
    ],
    flow: ["지도(전국·시도 비교)", "보호수 통계·뉴스", "데이터 출처"],
    writeup: {
      intro:
        "가로수 현황지도와 같은 방식으로, 산림청 지정 보호수(지정·보호 나무) 데이터를 전국·시도별로 지도에서 비교·탐색할 수 있게 한 웹 서비스입니다. 원본 데이터는 data/에 두고, 스크립트로 파싱·집계한 뒤 public/data에 protected-trees.csv와 지역별 마커 JSON을 만들어 지도와 통계에 씁니다.",
      tech: ["React", "Vite", "Leaflet(react-leaflet)", "Recharts", "Tailwind", "Node(데이터 스크립트)", "Turf·proj4·shapefile"],
      problemSolving: [
        "산림청 보호수 전국 지정현황 CSV를 parse-protected-trees-csv로 파싱해 시도별·수종별 집계를 만들고, 지도 색상과 전국 통계에 반영했습니다.",
        "지역별 상세 마커는 시군구별 CSV·좌표를 처리하는 스크립트(서울, 경북, 광주, 인천, 대전, 여주, 양평, 남양주, 김천, 단양, 당진, 울산 중구 등)로 GeoJSON·마커 JSON을 생성해 클러스터로 표시했습니다.",
        "제주는 N3A shapefile 변환·시군구 경계 처리 스크립트로 경계와 격자 데이터를 만들어 지도에 반영했습니다. 뉴스는 빌드 시 fetch-news-build로 정적 JSON 생성, 배포 후에는 네이버 API 선택 사용.",
      ],
      results: [
        "전국·시도별 보호수 현황을 지도(색상 밀도)와 통계로 제공하고, 일부 지역에서는 개별 보호수 마커로 위치 탐색이 가능하게 했습니다.",
        "원본 CSV·Shapefile만 갱신한 뒤 빌드하면 스크립트가 자동으로 집계·마커를 만들어 서비스에 반영되도록 구성했습니다.",
      ],
    },
    buildSummary: [
      {
        title: "전국 기준",
        body: "산림청 보호수 전국 지정현황(2024-12-31) CSV를 시·도·수종별로 집계해 지도 색상(구간별 그루 수)과 전국 통계에 반영했습니다.",
      },
      {
        title: "지역별 상세 마커",
        body: "서울·경북·광주·여주·양평·남양주·김천·용산·단양·계양·인천·당진·울산 중구·대전 등 시군구별 CSV/좌표를 스크립트로 파싱·지오코딩해 마커 JSON으로 두고, 지도에서 클러스터로 표시했습니다. 제주는 N3A shapefile을 GeoJSON으로 변환해 시군구 경계를 사용했습니다.",
      },
    ],
    dataSourceSummary: "산림청 보호수 전국 지정현황 등 공공데이터를 활용했습니다. 데이터 출처: 산림청 보호수 전국 지정현황(2024-12-31).",
    oneLiner:
      "시도별·지역별 보호수 위치를 지도에서 비교·탐색할 수 있는 웹 서비스로, 산림청 보호수 전국 지정현황 데이터를 정제해 구현했습니다.",
    period: "2026.03",
    problem:
      "지역별로 흩어진 보호수 데이터를 전국 단위로 한 번에 비교·탐색할 수 있는 사용자 흐름이 필요했습니다.",
    learnings: [
      "산림청 전국 지정현황 CSV와 지역별 상세 데이터 형식 차이를 스크립트로 흡수해 지도·통계에 일관되게 반영하는 방법을 익혔습니다.",
      "지도 기반 서비스에서 전국 요약 → 지역 선택 → 상세 마커(클러스터) 흐름을 설계·구현했습니다.",
    ],
    tools: "React · Vite · Leaflet(react-leaflet) · Recharts · Tailwind · Node(파싱·집계·지오코딩 스크립트)",
    whyGood:
      "공공데이터를 정제·집계해 전국 보호수 현황을 지도와 통계로 제공하고, 지역별로는 개별 보호수 위치까지 탐색 가능하게 했습니다.",
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
      "대구 차량광고·도색·랩핑 전문업체 대동카아트의 기업 홍보 사이트를 Next.js로 구축하고, 갤러리 관리자·문의 API·SEO·사이트맵까지 운영에 맞춰 구성했습니다.",
    period: "2026.02",
    keyPoints: [
      "회사소개(인사말·회사소개·조직도·오시는길), 사업분야(도색·랩핑), 포토갤러리(승용·승합·소형/중대형 화물·학원차/버스), 주요거래처·FAQ·연락 플로팅 버튼",
      "관리자 전용 갤러리 페이지로 카테고리별 시공 사진 등록·순서 변경·삭제, Supabase 연동·GitHub 연동(Cloudflare Pages 배포)으로 콘텐츠 반영",
      "문의·공지·FAQ API(Supabase), 사이트맵 자동 생성, 반응형·SEO·오픈그래프 메타 구성으로 실제 도메인(daedongcarart.com) 운영",
    ],
    flow: ["메인(히어로·갤러리·인사·연락)", "회사소개", "사업분야", "포토갤러리", "주요거래처·FAQ", "관리자 갤러리"],
    writeup: {
      intro:
        "차량광고·도색·랩핑 전문업체 대동카아트의 기업 홍보 웹사이트입니다. Next.js App Router와 TypeScript·Tailwind로 회사 소개, 사업 분야(도색/랩핑), 카테고리별 포토갤러리(승용차·승합차·소형/중대형 화물·학원차/버스), 주요거래처·FAQ·연락처를 한 사이트에서 제공합니다. 갤러리 콘텐츠는 비공개 관리자 페이지에서 등록·수정할 수 있도록 하고, 문의·공지·FAQ는 Supabase API로 연동해 실제 비즈니스 운영에 맞춰 구축했습니다.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "App Router", "Supabase", "Cloudflare Pages", "사이트맵 생성"],
      problemSolving: [
        "기업 정보·사업 소개·시공 갤러리·연락을 한곳에서 보여 주고, 모바일에서도 이용하기 쉽게 반응형과 터치 친화 UI를 적용했습니다.",
        "갤러리 사진을 코드 수정 없이 관리할 수 있도록 비공개 관리자 페이지를 만들고, Supabase·GitHub 연동으로 배포 시 자동 반영되도록 구성했습니다.",
        "문의 접수·공지·FAQ를 Supabase로 저장·조회하고, SEO·오픈그래프·사이트맵을 설정해 검색과 공유에 유리하게 했습니다.",
      ],
      results: [
        "실제 도메인(daedongcarart.com)으로 서비스 중이며, 회사 소개부터 갤러리·문의까지 한 사이트에서 운영할 수 있게 했습니다.",
        "관리자 매뉴얼·설정 가이드를 제공해 비개발자도 갤러리와 콘텐츠를 안정적으로 관리할 수 있도록 했습니다.",
      ],
    },
    problem:
      "기업 정보와 사업 소개·시공 사례·연락처를 한곳에서 보여 주고, 갤러리 등 콘텐츠를 운영자가 직접 갱신할 수 있는 홍보 사이트가 필요했습니다.",
    learnings: [
      "회사소개·사업분야·갤러리·FAQ 등 비즈니스 웹에 필요한 정보 구조와 페이지 흐름을 설계·구현했습니다.",
      "Supabase API·관리자 페이지·배포 연동을 한 번에 구성해, 실제 클라이언트 사이트 운영 요구에 맞춘 경험을 쌓았습니다.",
    ],
    tools: "Next.js 14 · TypeScript · Tailwind CSS · Supabase · Cloudflare Pages · 사이트맵 생성",
    whyGood:
      "실제 비즈니스(대동카아트) 운영 사이트로, 반응형·SEO·관리자·API·배포까지 한 프로젝트에서 설계·구현한 경험을 담았습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "반응형", "SEO"],
    links: [
      { label: "Live", href: "https://daedongcarart.com", kind: "primary" },
      { label: "GitHub", href: "https://github.com/jisu-hyun/business-websit", kind: "secondary" },
    ],
  },
];
