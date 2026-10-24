import type { NextConfig } from "next";

// For a project site (username.github.io/repo-name) set NEXT_PUBLIC_BASE_PATH=/repo-name
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
