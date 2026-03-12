export const site = {
  nameKo: "현지수",
  nameEn: "HyunJisu",
  headline: "Data Analyst & Frontend Builder",
  intro: [
    "공공·도시 데이터를 정제하고, 사람들이 바로 이해하고 쓰는 웹 서비스로 구현합니다.",
    "데이터 품질부터 화면 흐름까지 끝까지 책임지는 타입입니다.",
  ],
  email: "hyunjisu99@daum.net",
  githubUrl: "https://github.com/jisu-hyun",
} as const;

export type FeaturedProject = {
  id: string;
  order: 1 | 2 | 3;
  title: string;
  oneLiner: string;
  whyGood: string;
  tags: string[];
  links: Array<{ label: string; href: string; kind: "primary" | "secondary" }>;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "suwon-sri-data-contest",
    order: 1,
    title: "수원SRI 데이터 경진대회",
    oneLiner:
      "폭염·시민인식·녹지·유동인구 데이터를 통합해 수원시 지속가능성을 진단하고, 구별 정책 인사이트를 도출했습니다.",
    whyGood:
      "공간 분석 + 다원 데이터 결합 + 재현 가능한 실행 + 문서화까지 ‘실무형’으로 완결했습니다.",
    tags: [
      "Public Data",
      "GIS",
      "Reproducibility",
      "Documentation",
      "Visualization",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jisu-hyun/suwon-sri-data-contest",
        kind: "primary",
      },
    ],
  },
  {
    id: "nationwide-streettrees-protectedtrees",
    order: 2,
    title: "전국 가로수·보호수 현황지도",
    oneLiner:
      "전국 단위 공공데이터를 정제해 지역별 현황을 지도에서 비교·탐색할 수 있는 웹 결과물로 구현했습니다.",
    whyGood:
      "‘데이터 정리’가 아니라 정보 접근성과 비교 가능한 UI 흐름으로 바꾼 프로젝트입니다.",
    tags: [
      "Public Data",
      "Data Cleaning",
      "Map Visualization",
      "Frontend Implementation",
      "GIS Thinking",
    ],
    links: [
      { label: "Case Study (Private)", href: "#contact", kind: "primary" },
    ],
  },
  {
    id: "suwon-clothing-bin",
    order: 3,
    title: "수원시 의류수거함 위치 지도",
    oneLiner:
      "수원시 의류수거함 1,442개를 정리해, 구별로 한눈에 탐색 가능한 지도로 구현했습니다.",
    whyGood:
      "공공데이터를 사용자 관점(비교/탐색)으로 재구성하고, 결과물을 바로 열어볼 수 있는 HTML 지도로 완성했습니다.",
    tags: ["Public Data", "Data Cleaning", "Map", "Python", "UX Flow"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jisu-hyun/suwon-clothing-bin",
        kind: "secondary",
      },
    ],
  },
];
