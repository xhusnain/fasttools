

const nextConfig = {
  output: 'standalone',

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      '@iconify/react',
      'react-icons',
    ],
  },

  turbopack: {},

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // unoptimized: true, // Removed for performance optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains for IPTV channel logos
      }
    ],
  },
  transpilePackages: ['lucide-react'],
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      }
    }

    config.externals = config.externals || []
    config.externals.push({
      canvas: 'commonjs canvas',
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    })

    return config
  },

  async redirects() {
    return [
      {
        source: '/calculator/compound-interest-calculator',
        destination: '/finance-tools/compound-interest',
        permanent: true,
      },
      {
        source: '/image-tools/background-remover',
        destination: '/image-tools/image-background-remover',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [

      {
        source: "/og-image.svg",
        headers: [
          {
            key: "Content-Type",
            value: "image/svg+xml",
          },
        ],
      },
      {
        source: "/logo.svg",
        headers: [
          {
            key: "Content-Type",
            value: "image/svg+xml",
          },
        ],
      },
      {
        source: "/live-tv/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Last-Modified",
            value: new Date().toUTCString(),
          },
        ],
      },
    ]
  },
}

export default nextConfig
