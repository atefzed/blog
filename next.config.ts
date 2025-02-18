import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blog",
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
}

export default nextConfig;
