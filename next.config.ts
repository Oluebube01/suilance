import type { NextConfig } from "next";
import { allowedImageDomains } from "./config/images";

const nextConfig: NextConfig = {
  images: {
    domains: allowedImageDomains,
  },
};

export default nextConfig;