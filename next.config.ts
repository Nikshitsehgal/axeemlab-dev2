import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Enable strict TypeScript checking
    ignoreBuildErrors: false,
  },
  images: {
    domains: [], // Add external domains if needed
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    typedRoutes: false, // Enable typed routes (Next.js 13.2+)
  },
};

export default nextConfig;
