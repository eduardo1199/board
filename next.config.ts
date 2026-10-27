import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://avatars.githubusercontent.com/u/',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
