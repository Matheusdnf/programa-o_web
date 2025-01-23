import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["m.media-amazon.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.omdbapi.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
