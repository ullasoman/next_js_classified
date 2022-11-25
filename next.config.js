/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dobuyme.com'],
    unoptimized: true
  },
  compiler: {
    removeConsole: false
  },
}

module.exports = nextConfig