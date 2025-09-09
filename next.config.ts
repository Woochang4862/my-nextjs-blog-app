import type { NextConfig } from "next";

const basePath = "/my-nextjs-blog-app";
const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
};

export { basePath };

export default nextConfig;
