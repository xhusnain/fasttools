import { permanentRedirects } from "./lib/redirects.mjs"

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
      'recharts',
      'date-fns',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-tooltip',
    ],
    // Enable compression
    gzipSize: true,
    // Optimize for modern browsers
    esmExternals: true,
  },
  // Optimize server components
  serverExternalPackages: ['sharp'],

  // Compression
  compress: true,

  // Power optimizations
  poweredByHeader: false,

  // React strict mode for better performance
  reactStrictMode: true,

  // Normalize URLs to prevent duplicate content
  trailingSlash: false,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },

  async redirects() {
    return permanentRedirects
  },

  turbopack: {},

  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // unoptimized: true, // Removed for performance optimization
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
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


}

export default nextConfig
