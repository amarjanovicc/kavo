const path = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App je u client/ – bez ovoga Next uzima lockfile iz nadređenog foldera kao root
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

module.exports = nextConfig;
