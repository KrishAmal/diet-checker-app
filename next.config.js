/** @type {import('next').NextConfig} */

const UnoCSS = require('@unocss/webpack').default

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/diet-checker-app",
  webpack: (config) => {
    config.plugins.push(
      UnoCSS(), // Adding UnoCSS to the project
    )
    return config
  },
  experimental: {
    images: {
      unoptimized: true
    }
  },
}

module.exports = nextConfig
