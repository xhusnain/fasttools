import CopyPlugin from 'copy-webpack-plugin'

const nextConfig = {
  output: 'standalone',

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      '@iconify/react',
      'react-icons',
    ],
    outputFileTracingIncludes: {
      '/api/bg-remover': ['./node_modules/onnxruntime-node/bin/**/*'],
    },
  },
  serverExternalPackages: ['onnxruntime-node'],

  turbopack: {},

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // unoptimized: true, // Removed for performance optimization
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

      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: 'public/models',
              to: '../../static/models',
              noErrorOnMissing: true,
            },
          ],
        })
      )
    }

    config.externals = config.externals || []
    config.externals.push({
      canvas: 'commonjs canvas',
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    })

    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
            name: "framework",
            priority: 40,
            enforce: true,
          },

          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: "radix",
            priority: 30,
            maxSize: 150000,
          },

          icons: {
            test: /[\\/]node_modules[\\/](lucide-react|@iconify|react-icons)[\\/]/,
            name: "icons",
            priority: 25,
            maxSize: 100000,
          },

          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            priority: 10,
            maxSize: 200000,
          },

          common: {
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
            maxSize: 100000,
          },

          workers: {
            test: /[\\/]workers[\\/]/,
            name: "workers",
            chunks: "all",
            priority: 50,
          },
        },
      }
    }

    return config
  },

  async headers() {
    return [
      {
        source: "/models/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "application/octet-stream",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable, s-maxage=31536000",
          },
          {
            key: "CDN-Cache-Control",
            value: "max-age=31536000",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/og-image.svg",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
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
            key: "X-Robots-Tag",
            value: "noindex",
          },
          {
            key: "Content-Type",
            value: "image/svg+xml",
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
        ],
      },
    ]
  },
}

export default nextConfig
