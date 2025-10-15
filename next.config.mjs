/** @type {import('next').NextConfig */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Handle www to non-www redirects
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.fasttools.store',
          },
        ],
        destination: 'https://fasttools.store/:path*',
        permanent: true,
      },
      // Handle HTTP to HTTPS redirects
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://fasttools.store/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
