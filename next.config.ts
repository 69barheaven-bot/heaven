import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "heaven-red.vercel.app",
          },
        ],
        destination: "https://rockbarheaven.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
