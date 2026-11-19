import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubActions ? "/naveens-doomsday-clock" : "";
const siteUrl = isGitHubActions
  ? "https://girirajravichandran.github.io/naveens-doomsday-clock"
  : "https://mcu-doomsday-clock.vercel.app";

const nextConfig: NextConfig = {
  ...(isGitHubActions && {
    output: "export",
    basePath,
    trailingSlash: true,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
