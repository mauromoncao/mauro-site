/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  images: {
    domains: [],
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redireciona rotas internas para os subdomínios dedicados
      {
        source: "/blog/:path*",
        destination: "https://blog.mauromoncao.adv.br/:path*",
        permanent: true,
      },
      {
        source: "/solucoes-juridicas/:path*",
        destination: "https://solucoes.mauromoncao.adv.br/:path*",
        permanent: true,
      },
      {
        source: "/assistente-juridico/:path*",
        destination: "https://drben.mauromoncao.adv.br/:path*",
        permanent: true,
      },
      {
        source: "/dr-ben/:path*",
        destination: "https://drben.mauromoncao.adv.br/:path*",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
