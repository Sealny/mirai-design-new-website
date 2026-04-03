/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Cloudflare Pages deployment via @cloudflare/next-on-pages
  // Uncomment the line below when deploying to Cloudflare Pages:
  // experimental: { runtime: 'edge' },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Strict mode for catching issues early
  reactStrictMode: true,

  // Enable CSS optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
