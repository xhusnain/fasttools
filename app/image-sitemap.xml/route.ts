import { NextResponse } from 'next/server'
import type { MetadataRoute } from "next"

export async function GET() {
  const baseUrl = "https://www.fasttools.store"
  const currentDate = new Date()

  // XML escape function to properly encode special characters
  const escapeXml = (str: string): string => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
  }

  // Content freshness strategy for images - different update frequencies
  const getFreshnessDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date
  }

  // IMAGE SITEMAP - Only includes images that actually exist in public folder
  // Organized by priority and avoiding duplicates

  // ===== MAIN SITE IMAGES (Highest Priority) =====
  const mainImages = [
    {
      url: "https://www.fasttools.store",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 1.0,
      images: [
        {
          url: "https://www.fasttools.store/logo.png",
          title: "FastTools Professional Logo PNG - Free Online Tools Collection",
          caption: "FastTools professional logo with modern FT symbol and blue gradient design for comprehensive free online tools collection"
        },
        {
          url: "https://www.fasttools.store/logo.svg",
          title: "FastTools Professional Logo SVG - Vector Format",
          caption: "FastTools logo in scalable vector format for high-quality rendering at any size, perfect for professional use"
        },
        {
          url: "https://www.fasttools.store/logo.ico",
          title: "FastTools Logo ICO - Windows Favicon",
          caption: "FastTools logo in ICO format for Windows systems and legacy browser compatibility"
        },
        {
          url: "https://www.fasttools.store/banner.png",
          title: "FastTools Social Media Image - Complete Digital Toolkit",
          caption: "FastTools professional social media sharing image showcasing comprehensive free online tools collection for productivity and business"
        },
        {
          url: "https://www.fasttools.store/og-image.png",
          title: "FastTools Open Graph Image PNG",
          caption: "FastTools Open Graph image for social media sharing and SEO optimization in PNG format"
        },
        {
          url: "https://www.fasttools.store/og-image.svg",
          title: "FastTools Open Graph Image SVG",
          caption: "FastTools Open Graph vector image for social media sharing with excellent quality at any resolution"
        },
        {
          url: "https://www.fasttools.store/apple-touch-icon.png",
          title: "FastTools Apple Touch Icon",
          caption: "FastTools iOS app icon for home screen and mobile devices"
        },
        {
          url: "https://www.fasttools.store/icon-192.png",
          title: "FastTools PWA Icon 192x192",
          caption: "FastTools Progressive Web App icon for mobile and desktop installation"
        },
        {
          url: "https://www.fasttools.store/icon-512.png",
          title: "FastTools PWA Icon 512x512",
          caption: "FastTools Progressive Web App icon for high-resolution displays and app stores"
        },
        {
          url: "https://www.fasttools.store/web-app-manifest-192x192.png",
          title: "FastTools Maskable Icon 192x192 - PWA Manifest",
          caption: "FastTools maskable icon for PWA manifest, optimized for adaptive icons on Android and iOS"
        },
        {
          url: "https://www.fasttools.store/web-app-manifest-512x512.png",
          title: "FastTools Maskable Icon 512x512 - PWA Manifest",
          caption: "FastTools high-resolution maskable icon for PWA manifest and app stores"
        },
        {
          url: "https://www.fasttools.store/favicon-96x96.png",
          title: "FastTools Favicon 96x96",
          caption: "FastTools favicon in 96x96 pixel format for browser tabs and bookmarks"
        },
        {
          url: "https://www.fasttools.store/favicon.svg",
          title: "FastTools Favicon SVG - Scalable Vector",
          caption: "FastTools favicon in SVG format for modern browsers with crisp rendering at any resolution"
        },
        {
          url: "https://www.fasttools.store/favicon.ico",
          title: "FastTools Favicon ICO - Browser Icon",
          caption: "FastTools favicon in ICO format for maximum browser compatibility"
        },
        {
          url: "https://www.fasttools.store/placeholder.jpg",
          title: "FastTools Placeholder Image JPG",
          caption: "FastTools placeholder image for loading states and content previews"
        },
        {
          url: "https://www.fasttools.store/placeholder.svg",
          title: "FastTools Placeholder SVG",
          caption: "FastTools scalable placeholder image for dynamic content loading"
        },
        {
          url: "https://www.fasttools.store/placeholder-user.jpg",
          title: "FastTools User Avatar Placeholder",
          caption: "FastTools default user avatar placeholder for profile images and user accounts"
        }
      ]
    }
  ]

  // ===== KEY TOOL CATEGORIES (High Priority) =====
  const toolCategoryImages = [
    {
      url: "https://www.fasttools.store/ai-tools",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.95,
      images: [
        {
          url: "https://www.fasttools.store/banner.png",
          title: "AI Tools - Artificial Intelligence Content Generation",
          caption: "FastTools AI Tools collection for automated content creation and artificial intelligence utilities"
        },
        {
          url: "https://www.fasttools.store/logo.png",
          title: "FastTools AI Tools Logo",
          caption: "FastTools professional logo for AI automation tools and content generation"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/calculator",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
      images: [
        {
          url: "https://www.fasttools.store/banner.png",
          title: "Calculator Tools - Free Online Calculators",
          caption: "FastTools Calculator collection for financial, scientific, and utility calculations"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/converters",
      lastModified: getFreshnessDate(3),
      changeFrequency: "weekly" as const,
      priority: 0.85,
      images: [
        {
          url: "https://www.fasttools.store/banner.png",
          title: "Converter Tools - Unit and Format Converters",
          caption: "FastTools Converter collection for currency, length, temperature, and file format conversions"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/dev-tools",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://www.fasttools.store/dev-image-2.jpg",
          title: "Free Developer Tools Online - Chrome DevTools, Safari, React Developer Tools",
          caption: "Professional developer tools collection featuring Chrome DevTools, Safari developer tools, React developer tools, JWT decoder, regex tester, and essential coding utilities for web development"
        },
        {
          url: "https://www.fasttools.store/banner.png",
          title: "Developer Tools - Programming and Web Development",
          caption: "FastTools Developer Tools collection for programmers and web developers"
        }
      ]
    }
  ]

  // ===== IMAGE TOOLS (High Priority) =====
  const imageToolsPages = [
    {
      url: "https://www.fasttools.store/image-tools",
      lastModified: getFreshnessDate(1),
      changeFrequency: "weekly" as const,
      priority: 0.95,
      images: [
        {
          url: "https://www.fasttools.store/banner.png",
          title: "Image Tools Collection - Professional Photo Editing and Processing",
          caption: "FastTools comprehensive image tools collection for background removal, photo editing, and image processing"
        },
        {
          url: "https://www.fasttools.store/logo.png",
          title: "FastTools Image Tools Logo",
          caption: "Professional logo for FastTools image editing and processing toolkit"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/image-tools/image-background-remover",
      lastModified: getFreshnessDate(1),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [
        {
          url: "https://www.fasttools.store/before_human.jpg",
          title: "Human Photo Before Background Removal - Professional Portrait Photography",
          caption: "Professional portrait photo before AI-powered background removal showing original image with background"
        },
        {
          url: "https://www.fasttools.store/after_Human.png",
          title: "Human Photo After Background Removal - Transparent PNG Portrait",
          caption: "Professional portrait with perfectly removed background showcasing AI precision and transparent PNG output"
        },
        {
          url: "https://www.fasttools.store/before_dog.jpg",
          title: "Pet Dog Photo Before Background Removal - Animal Photography",
          caption: "Pet dog photo before background removal showing original image with natural background for pet photography"
        },
        {
          url: "https://www.fasttools.store/after_dog.png",
          title: "Pet Dog Photo After Background Removal - Transparent Pet Image",
          caption: "Pet dog photo with perfectly removed background showcasing advanced edge detection for fur and complex details"
        },
        {
          url: "https://www.fasttools.store/object_before.jpg",
          title: "Product Object Photo Before Background Removal - E-commerce Photography",
          caption: "Product object photo before background removal showing original image for e-commerce and commercial photography"
        },
        {
          url: "https://www.fasttools.store/object_after.png",
          title: "Product Object Photo After Background Removal - Clean Product Image",
          caption: "Product object with clean removed background perfect for e-commerce listings and marketing materials"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/image-tools/image-blur",
      lastModified: getFreshnessDate(1),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [
        {
          url: "https://www.fasttools.store/human-blur-before.png",
          title: "Human Photo Before Background Blur - Professional Portrait Photography",
          caption: "Professional portrait photo before AI-powered background blur showing original image with sharp background"
        },
        {
          url: "https://www.fasttools.store/human-blur-after.png",
          title: "Human Photo After Background Blur - Portrait Mode Bokeh Effect",
          caption: "Professional portrait with AI-blurred background showcasing natural bokeh effect and professional depth of field"
        },
        {
          url: "https://www.fasttools.store/dog-blur-before.png",
          title: "Pet Dog Photo Before Background Blur - Animal Photography",
          caption: "Pet dog photo before background blur showing original image with sharp background for pet photography"
        },
        {
          url: "https://www.fasttools.store/dog-blur-after.png",
          title: "Pet Dog Photo After Background Blur - Pet Portrait with Bokeh",
          caption: "Pet dog photo with AI-blurred background showcasing advanced edge detection for fur and perfect subject isolation"
        },
        {
          url: "https://www.fasttools.store/object-blur-before.png",
          title: "Product Object Photo Before Background Blur - E-commerce Photography",
          caption: "Product object photo before background blur showing original image for e-commerce and commercial photography"
        },
        {
          url: "https://www.fasttools.store/object-blur-after.png",
          title: "Product Object Photo After Background Blur - Professional Depth of Field",
          caption: "Product object with AI-blurred background perfect for e-commerce, marketing materials, and professional product photos"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/image-tools/image-to-text",
      lastModified: getFreshnessDate(2),
      changeFrequency: "weekly" as const,
      priority: 0.85,
      images: [
        {
          url: "https://www.fasttools.store/banner.png",
          title: "Image to Text - OCR Text Extraction Tool",
          caption: "AI-powered OCR tool to extract text from images, scanned documents, and photos instantly"
        },
        {
          url: "https://www.fasttools.store/logo.png",
          title: "FastTools Image to Text Converter Logo",
          caption: "Professional logo for FastTools OCR and text extraction tool"
        }
      ]
    }
  ]

  // ===== PDF TOOLS =====
  const pdfToolsPages = [
    {
      url: "https://www.fasttools.store/pdf-tools/pdf-splitter-merger",
      lastModified: getFreshnessDate(3),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://www.fasttools.store/banner.png",
          title: "PDF Splitter & Merger - Free PDF Editing and Processing",
          caption: "Comprehensive PDF splitter and merger tool for splitting large PDFs or merging multiple PDF documents"
        },
        {
          url: "https://www.fasttools.store/logo.png",
          title: "FastTools PDF Splitter & Merger Logo",
          caption: "Professional logo for FastTools PDF splitting and merging toolkit"
        }
      ]
    },
    {
      url: "https://www.fasttools.store/pdf-tools/pdf-unlocker",
      lastModified: getFreshnessDate(3),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://www.fasttools.store/banner.png",
          title: "PDF Unlocker - Remove PDF Password Protection",
          caption: "Free online PDF unlocker to remove password protection and unlock secured PDF files instantly"
        },
        {
          url: "https://www.fasttools.store/logo.png",
          title: "FastTools PDF Unlocker Logo",
          caption: "Professional logo for FastTools PDF password removal tool"
        }
      ]
    }
  ]

  // Combine all image entries
  const allImageEntries = [
    ...mainImages,
    ...toolCategoryImages,
    ...imageToolsPages,
    ...pdfToolsPages
  ]

  // Generate enhanced XML sitemap with cluster organization
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allImageEntries.map(item => `  <url>
    <loc>${escapeXml(item.url)}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>${item.images.map(image => `
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`).join('')}
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
