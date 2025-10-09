/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Remove optimizeCss if you don't want to install critters
    // optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
  // Rest of your config remains the same
}

module.exports = nextConfig