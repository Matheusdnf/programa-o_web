import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["m.media-amazon.com"], // Adicione o domínio aqui
  },
  remotePatterns: [
    {
      protocol: "http",
      hostname: "www.omdbapi.com",
      pathname: "/**",
    },
  ],
};

export default nextConfig;
