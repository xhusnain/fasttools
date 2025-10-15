import { NextResponse } from 'next/server'
import type { MetadataRoute } from "next"

export async function GET() {
  const baseUrl = "https://www.fasttools.store"
  const currentDate = new Date()
  
  // Content freshness strategy for images - different update frequencies
  const getFreshnessDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date
  }

  // ENHANCED IMAGE SITEMAP - Following Comprehensive SEO Strategy
  // Organized by topical authority clusters for maximum image SEO impact
  
  // ===== CLUSTER 1: AI & AUTOMATION TOOLS IMAGES (Highest Priority) =====
  const aiToolImages = [
    {
      url: "https://www.fasttools.store/ai-tools/caption-generator",
      lastModified: getFreshnessDate(1), // Updated daily for AI freshness
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for trending AI niche
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "AI Caption Generator Tool - Free Online AI Content Creation",
          caption: "FastTools AI Caption Generator - Create engaging social media captions with artificial intelligence"
        },
        {
          url: "https://www.fasttools.store/logo.svg",
          title: "FastTools AI Tools Logo",
          caption: "FastTools professional logo for AI automation tools and content generation"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/ai-tools/hashtag-suggester",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "AI Hashtag Suggester - Smart Social Media Hashtag Generator",
          caption: "FastTools AI Hashtag Suggester - Generate trending hashtags with artificial intelligence"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/ai-tools/lyrics-generator",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "AI Lyrics Generator - Free Online Song Writing Tool",
          caption: "FastTools AI Lyrics Generator - Create original song lyrics with artificial intelligence"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/ai-tools/meme-generator",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "AI Meme Generator - Free Online Meme Creation Tool",
          caption: "FastTools AI Meme Generator - Create viral memes with artificial intelligence"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/ai-tools/pet-names",
      lastModified: getFreshnessDate(3),
      changeFrequency: "daily" as const,
      priority: 0.85,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "AI Pet Name Generator - Smart Pet Naming Tool",
          caption: "FastTools AI Pet Name Generator - Generate unique pet names with artificial intelligence"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/ai-tools/qr-generator",
      lastModified: getFreshnessDate(3),
      changeFrequency: "daily" as const,
      priority: 0.85,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "AI QR Code Generator - Smart QR Code Creation Tool",
          caption: "FastTools AI QR Code Generator - Create custom QR codes with artificial intelligence"
        }
      ]
    }
  ]

  // ===== CLUSTER 2: CONVERSION & UTILITY TOOLS IMAGES (High Priority) =====
  const conversionToolImages = [
    {
      url: "https://www.fasttools.store/converters/currency",
      lastModified: getFreshnessDate(1), // Updated daily for live rates
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for currency converter
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Currency Converter - Live Exchange Rate Calculator",
          caption: "FastTools Currency Converter - Convert currencies with real-time exchange rates"
        },
        {
          url: "https://www.fasttools.store/logo.svg",
          title: "FastTools Currency Converter Logo",
          caption: "FastTools professional logo for currency conversion and financial tools"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/converters/file-size",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "File Size Converter - Free Online File Size Calculator",
          caption: "FastTools File Size Converter - Convert between different file size units"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/converters/length",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Length Converter - Free Online Length Calculator",
          caption: "FastTools Length Converter - Convert between different length units"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/converters/temperature",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Temperature Converter - Free Online Temperature Calculator",
          caption: "FastTools Temperature Converter - Convert between Celsius, Fahrenheit, and Kelvin"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/converters/text-case",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Text Case Converter - Free Online Text Case Tool",
          caption: "FastTools Text Case Converter - Convert text between different cases"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/converters/timezone",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Timezone Converter - Free Online Time Zone Calculator",
          caption: "FastTools Timezone Converter - Convert time between different time zones"
        }
      ]
    }
  ]

  // ===== CLUSTER 3: BUSINESS & FINANCE TOOLS IMAGES (High Priority) =====
  const businessToolImages = [
    {
      url: "https://www.fasttools.store/finance-tools/invoice-generator",
      lastModified: getFreshnessDate(3),
      changeFrequency: "weekly" as const,
      priority: 0.85, // High priority for business tools
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Invoice Generator - Free Online Invoice Creation Tool",
          caption: "FastTools Invoice Generator - Create professional invoices for your business"
        },
        {
          url: "https://www.fasttools.store/logo.svg",
          title: "FastTools Business Tools Logo",
          caption: "FastTools professional logo for business and financial tools"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/finance-tools/loan-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Loan Calculator - Free Online Loan Payment Calculator",
          caption: "FastTools Loan Calculator - Calculate loan payments and interest rates"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/finance-tools/tax-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Tax Calculator - Free Online Tax Calculation Tool",
          caption: "FastTools Tax Calculator - Calculate taxes and deductions accurately"
        }
      ]
    }
  ]

  // ===== CLUSTER 4: CONTENT CREATION TOOLS IMAGES (Medium-High Priority) =====
  const contentToolImages = [
    {
      url: "https://www.fasttools.store/social-media-tools/youtube-thumbnail",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for content creation
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "YouTube Thumbnail Downloader - Free Online Thumbnail Tool",
          caption: "FastTools YouTube Thumbnail Downloader - Download high-quality YouTube thumbnails"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/social-media-tools/instagram-dp",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Instagram DP Viewer - Free Online Profile Picture Tool",
          caption: "FastTools Instagram DP Viewer - View Instagram profile pictures anonymously"
        }
      ]
    }
  ]

  // ===== CLUSTER 5: DEVELOPER & TECHNICAL TOOLS IMAGES (Medium Priority) =====
  const developerToolImages = [
    {
      url: "https://www.fasttools.store/dev-tools/color-palette",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75, // Medium priority for developer tools
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Color Palette Generator - Free Online Color Tool",
          caption: "FastTools Color Palette Generator - Create beautiful color palettes for your projects"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/dev-tools/hex-to-rgb",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "Hex to RGB Converter - Free Online Color Converter",
          caption: "FastTools Hex to RGB Converter - Convert hex colors to RGB values"
        }
      ]
    }
  ]

  // ===== MAIN SITE IMAGES (Highest Priority) =====
  const mainImages = [
    {
      url: "https://www.fasttools.store",
      lastModified: getFreshnessDate(1), // Updated daily for homepage freshness
      changeFrequency: "daily" as const,
      priority: 1.0, // Highest priority for homepage
      images: [
        {
          url: "https://www.fasttools.store/logo.svg",
          title: "fasttools Professional Logo - Free Online Tools Collection",
          caption: "fasttools professional logo with modern FT symbol and blue gradient design for comprehensive free online tools collection"
        },
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "fasttools Social Media Image - Complete Digital Toolkit",
          caption: "fasttools professional social media sharing image showcasing comprehensive free online tools collection for productivity and business"
        },
        {
          url: "https://www.fasttools.store/favicon.svg",
          title: "fasttools Favicon - Online Tools",
          caption: "fasttools favicon for browser tabs and bookmarks representing free online tools and utilities"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/logo.svg",
      lastModified: getFreshnessDate(7), // Updated weekly
      changeFrequency: "monthly" as const,
      priority: 0.95, // Very high priority for main logo
      images: [
        {
          url: "https://www.fasttools.store/logo.svg",
          title: "fasttools Professional Logo",
          caption: "fasttools professional logo with modern FT symbol and blue gradient design"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/og-image.svg",
      lastModified: getFreshnessDate(7), // Updated weekly
      changeFrequency: "monthly" as const,
      priority: 0.9, // High priority for social sharing
      images: [
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "fasttools Social Media Image",
          caption: "fasttools professional social media sharing image with tools showcase"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/favicon.svg",
      lastModified: getFreshnessDate(14), // Updated bi-weekly
      changeFrequency: "monthly" as const,
      priority: 0.8, // High priority for brand recognition
      images: [
        {
          url: "https://www.fasttools.store/favicon.svg",
          title: "fasttools Favicon",
          caption: "fasttools favicon for browser tabs and bookmarks"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/apple-touch-icon.svg",
      lastModified: getFreshnessDate(14), // Updated bi-weekly
      changeFrequency: "monthly" as const,
      priority: 0.8, // High priority for mobile users
      images: [
        {
          url: "https://www.fasttools.store/apple-touch-icon.svg",
          title: "fasttools Apple Touch Icon",
          caption: "fasttools icon for Apple devices and iOS home screen"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/icon-192.svg",
      lastModified: getFreshnessDate(21), // Updated every 3 weeks
      changeFrequency: "monthly" as const,
      priority: 0.7, // Medium priority for PWA
      images: [
        {
          url: "https://www.fasttools.store/icon-192.svg",
          title: "fasttools Icon 192x192",
          caption: "fasttools 192x192 icon for web app manifest"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/icon-512.svg",
      lastModified: getFreshnessDate(21), // Updated every 3 weeks
      changeFrequency: "monthly" as const,
      priority: 0.7, // Medium priority for PWA
      images: [
        {
          url: "https://www.fasttools.store/icon-512.svg",
          title: "fasttools Icon 512x512",
          caption: "fasttools 512x512 icon for web app manifest"
        }
      ]
    }
  ]

  // Combine all image clusters for comprehensive coverage
  const allImageEntries = [
    ...mainImages,
    ...aiToolImages,
    ...conversionToolImages,
    ...businessToolImages,
    ...contentToolImages,
    ...developerToolImages
  ]

  // Generate enhanced XML sitemap with cluster organization
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allImageEntries.map(item => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
    ${item.images.map(image => `
    <image:image>
      <image:loc>${image.url}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`).join('')}
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
