import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
