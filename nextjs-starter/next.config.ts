import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/atv-tours-west-yellowstone',
        destination: '/west-yellowstone-atv-tours',
        permanent: true,
      },
      {
        source: '/guided-vs-rental',
        destination: '/rental-vs-guided',
        permanent: true,
      },
      {
        source: '/guided-vs-rental-atv',
        destination: '/rental-vs-guided',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
