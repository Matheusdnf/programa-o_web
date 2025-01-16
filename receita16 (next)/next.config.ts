import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
