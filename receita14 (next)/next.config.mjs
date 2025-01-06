/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ezbrew.com.br",
        pathname: "/wp-content/uploads/2021/09/*",
      },
    ],
  },
};

export default nextConfig;
