import type { NextConfig } from "next";

// Deployed at https://Rikki-007.github.io/portfolio/ via GitHub Pages,
// so assets need the repo name as a base path in production.
const repoBasePath = process.env.GITHUB_ACTIONS ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
