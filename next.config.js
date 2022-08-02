/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/diet-checker-app",
  experimental: {
    images: {
      unoptimized: true
    } 
  }
}

module.exports = nextConfig
