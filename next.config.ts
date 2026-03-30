import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** 프로덕션에서 브라우저 소스맵 비활성화(번들 구조 노출 완화) */
  productionBrowserSourceMaps: false,
  /** 프로덕션 빌드에서 console.* 제거(에러 로그는 유지) */
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error"] }
        : false,
  },
  /** EMFILE(too many open files) 시 라우트가 깨져 GET / 404 나는 경우 완화 */
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.git/**"],
      };
    }
    return config;
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/about", destination: "/", permanent: false },
      { source: "/skills", destination: "/#skills", permanent: false },
      { source: "/experience", destination: "/#experience", permanent: false },
    ];
  },
};

export default nextConfig;
