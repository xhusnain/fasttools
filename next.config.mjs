import CopyPlugin from 'copy-webpack-plugin'

/** @type {import('next').NextConfig} */
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
  webpack: (config, { isServer, dev }) => {
    // Handle Fabric.js properly
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      }

      // Copy ONNX model files to static directory for deployment
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

    // Handle canvas module and other externals
    config.externals = config.externals || []
    config.externals.push({
      canvas: 'commonjs canvas',
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    })

    // Optimize bundle splitting for production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            maxSize: 244000,
          },
          
          workers: {
            test: /[\\/]workers[\\/]/,
            name: "workers",
            chunks: "all",
            priority: 5,
          },
        },
      }
    }

    return config
  },

  // Enterprise caching headers for model files
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
    ]
  },
}

export default nextConfig
