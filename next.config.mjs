

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
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
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
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Static assets - aggressive caching
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/android-chrome-:size.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Fonts - long cache
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
      // _next static files - aggressive caching
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
        source: "/_next/static/chunks/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/live-tv/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600",
          },
        ],
      },
      {
        source: "/(sitemap.xml|robots.txt)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
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
          // Security headers
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.gstatic.com https://fundingchoicesmessages.google.com https://tracker.clickfortify.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net https://cm.g.doubleclick.net https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://gtrace.mediago.io https://gtracenep.admaster.cc",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.gstatic.com https://fundingchoicesmessages.google.com https://tracker.clickfortify.com https://cm.g.doubleclick.net https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://gtrace.mediago.io https://gtracenep.admaster.cc https://lh3.googleusercontent.com https://www.google.com",
              "frame-src 'self' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://fundingchoicesmessages.google.com https://tpc.googlesyndication.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // Cache HTML pages with ISR support
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ]
  },
}

export default nextConfig
