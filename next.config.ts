import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
     domains: ["cdn.dummyjson.com"],
    
  },
  devIndicators:false
  
};

export default nextConfig;
