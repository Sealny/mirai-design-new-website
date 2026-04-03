import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // Optimize bundle
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Compress output
  compress: true,
  // Production optimizations
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  // Headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
