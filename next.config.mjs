// next.config.mjs
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure both Turbopack and Webpack builds can resolve "@"
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(process.cwd()),
    };
    return config;
  },
};

export default nextConfig;
