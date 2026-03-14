/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  images: {
    domains: [],
    unoptimized: true,
  },
  // Redirects não são suportados com output: 'export'
  // Os redirecionamentos são gerenciados pelo Cloudflare Pages via _redirects
};
module.exports = nextConfig;
