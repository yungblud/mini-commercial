/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
}

module.exports = nextConfig
