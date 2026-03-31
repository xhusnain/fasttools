const nextConfig = {
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

  // Compression
  compress: true,

  // Power optimizations
  poweredByHeader: false,

  // React strict mode for better performance
  reactStrictMode: true,

  // Normalize URLs to prevent duplicate content
  trailingSlash: false,

  turbopack: {},

  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
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
