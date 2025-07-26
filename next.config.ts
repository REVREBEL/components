import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.fly.dev",
    "localhost:*",
    "127.0.0.1:*"
  ]
};

export default nextConfig;
