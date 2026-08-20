import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages export
  basePath: isProd ? "/knowledge-base" : "",
  images: {
    unoptimized: true, // Required, as Next.js image optimization doesn't work for static export
  },
};

export default nextConfig;

