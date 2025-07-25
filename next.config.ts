import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY || "";
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo_name = repo.replace(/.*?\//, "");

  assetPrefix = `/${repo_name}/`;
  basePath = `/${repo_name}`;
}

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  basePath,
  assetPrefix,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  }

};

export default nextConfig;
