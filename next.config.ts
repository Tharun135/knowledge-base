import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages export
  images: {
    unoptimized: true, // Required, as Next.js image optimization doesn't work for static export
  },
  experimental: {
    // Allows markdown files to be read dynamically during export
    // If you have any errors building, you can remove this or modify as needed.
  }
};

export default nextConfig;
