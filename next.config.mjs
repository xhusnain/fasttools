

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

    // Remove legacy JavaScript polyfills for modern browsers
    if (!dev && !isServer) {
      // Optimize for modern browsers - remove unnecessary polyfills
      config.resolve.alias = {
        ...config.resolve.alias,
      }
    }

    return config
  },


}

export default nextConfig
