/** @type {import('next').NextConfig} */

// Refer integration of UnoCSS with nextJS herer -> https://github.com/unocss/unocss/tree/main/examples/next
const UnoCSS = require('@unocss/webpack').default

const nextConfig = {
  reactStrictMode: true,
  basePath: "/diet-checker-app",
  webpack: (config) => {
    config.cache = false
    config.plugins.push(
      UnoCSS(), // Adding UnoCSS to the project
    )
    return config
  },
}

module.exports = nextConfig
