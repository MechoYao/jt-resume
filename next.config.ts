import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'jt-resume'; // 你的 GitHub 仓库名

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
