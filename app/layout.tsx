import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { AdSpace } from "@/components/ad-space"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { GlobalLoading } from "@/components/global-loading"
import type { Metadata } from "next"
import { validateEnv } from "@/lib/env"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

if (typeof window === "undefined") {
  validateEnv()
}

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://fasttools.store"),
  title: {
    default: "Free Online Tools | fasttools - Complete Digital Toolkit",
    template: "%s | fasttools - Free Online Tools",
  },
  description:
    "fasttools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
  keywords: [
    "online tools",
    "free web tools",
    "productivity tools", 
    "AI tools",
    "converter tools",
    "calculator tools",
    "text tools",
    "image tools",
    "developer tools",
    "business tools",
    "SEO tools",
    "social media tools",
    "finance tools",
    "date time tools",
    "fun tools",
    "utility tools",
    "web utilities",
    "online calculators",
    "free online services",
    "tool collection",
    "hashtag generator",
    "QR code generator",
    "password generator",
    "color picker",
    "unit converter",
    "currency converter",
    "text case converter",
    "image converter",
    "PDF tools",
    "URL shortener",
    "word counter",
    "character counter",
    "random number generator",
    "color palette generator",
    "meme generator",
    "QR code scanner",
    "barcode generator",
    "invoice generator",
    "receipt generator",
    "certificate generator",
    "free online hashtag generator for Instagram",
    "best free QR code generator online",
    "free password generator with custom length",
    "online color picker tool free",
    "free unit converter tool online",
    "currency converter with live rates",
    "free text case converter online",
    "image format converter free online",
    "free PDF tools online",
    "free URL shortener service",
    "word counter tool free online",
    "character counter for social media",
    "random number generator between range",
    "color palette generator from image",
    "free meme generator with templates",
    "QR code scanner online free",
    "barcode generator free online",
    "free invoice generator template",
    "receipt generator free online",
    "certificate generator free template",
    "fasttools",
    "fasttools store",
    "conversion tools",
    "dev tools",
    "date tools",
    "free tools",
    "fast tools",
    "file converters",
    "calculators",
    "utilities",
    "web tools",
    "free online tools",
    "tiktok downloader",
    "image to text",
    "OCR tools",
    "AI content generator",
    "AI writing assistant",
    "financial calculators",
    "business calculators",
    "social media utilities",
    "content creation tools",
    "image editing tools",
    "date calculators",
    "fun utilities",
    "privacy-respecting tools",
    "mobile-first design",
    "SEO optimization",
    "web utilities",
    "online calculators",
    "free online services"
  ],
  authors: [{ name: "fasttools Team", url: "https://fasttools.store/about" }],
  creator: "fasttools",
  publisher: "fasttools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://fasttools.store",
        siteName: "fasttools",
        title: "Free Online Tools | fasttools - Complete Digital Toolkit",
        description: "fasttools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
        images: [
          {
            url: "/og-image.svg",
            width: 1200,
            height: 630,
            alt: "fasttools - Professional Online Tools & Utilities Collection",
            type: "image/svg+xml",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@fasttoolsstore",
        creator: "@fasttoolsstore",
        title: "Free Online Tools | fasttools - Complete Digital Toolkit",
        description: "fasttools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
        images: ["/og-image.svg"],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      alternates: {
        canonical: "https://fasttools.store",
      },
      verification: {
        google: "l2XEjZ8SEN_FD96ft9mIUW8cPiLW4mDbX6wZabF-xv0",
        yandex: "your-yandex-verification-code",
        yahoo: "your-yahoo-verification-code",
      },
      category: "Technology",
      classification: "Free Online Tools and Utilities",
      referrer: "origin-when-cross-origin",
      generator: "Next.js",
      applicationName: "fasttools",
      manifest: "/manifest.json",
      icons: {
        icon: [
          { url: "/favicon.ico", sizes: "any" },
          { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
          { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [
          { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
      },
      other: {
          "google-site-verification": "l2XEjZ8SEN_FD96ft9mIUW8cPiLW4mDbX6wZabF-xv0",
          "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-title": "fasttools",
        "msapplication-TileColor": "#2563eb",
        "theme-color": "#2563eb",
      },
    }
    
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "fasttools",
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80,
          description: "fasttools professional logo with modern FT symbol and blue gradient"
        },
        image: "https://fasttools.store/og-image.svg",
        description: "fasttools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
        foundingDate: "2024",
        sameAs: [
          "https://twitter.com/fasttoolsstore",
          "https://facebook.com/fasttoolsstore",
          "https://linkedin.com/company/fasttoolsstore"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "hello@fasttools.store",
          availableLanguage: "English"
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "US"
        },
        knowsAbout: [
          "Online Tools",
          "AI Content Generation", 
          "Web Development Tools",
          "Digital Conversion Tools",
          "Business Productivity Tools",
          "SEO Optimization",
          "Image Processing",
          "Financial Calculators",
          "Social Media Tools",
          "Developer Utilities"
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Online Tools",
            description: "Comprehensive collection of free online tools and utilities"
          },
          price: "0",
          priceCurrency: "USD"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "1250",
          bestRating: "5",
          worstRating: "1"
        }
      }
    
      const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "fasttools",
        url: "https://fasttools.store",
        description: "fasttools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
        publisher: {
          "@type": "Organization",
          name: "fasttools",
          url: "https://fasttools.store"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://fasttools.store/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        mainEntity: {
          "@type": "ItemList",
          name: "Free Online Tools Collection",
          description: "Comprehensive collection of free online tools and utilities",
          numberOfItems: 1000,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "AI Tools",
              description: "AI-powered content generation tools including meme generators, caption generators, and hashtag suggesters",
              url: "https://fasttools.store/ai-tools"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Converter Tools",
              description: "Comprehensive conversion utilities for currency, units, text, and file formats",
              url: "https://fasttools.store/converters"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Calculator Tools",
              description: "Financial, business, and general purpose calculators for all your calculation needs",
              url: "https://fasttools.store/tools"
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "SEO Tools",
              description: "SEO optimization tools including meta tag generators, keyword density checkers, and content analyzers",
              url: "https://fasttools.store/seo-tools"
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Image Tools",
              description: "Image processing and editing tools including croppers, converters, and OCR text extraction",
              url: "https://fasttools.store/image-tools"
            }
          ]
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://fasttools.store"
            }
          ]
        }
      }
    
      return (
        <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <head>
            <link rel="sitemap" type="application/xml" href="/sitemap.xml"/>
            <link rel="canonical" href="https://fasttools.store"/>
            <meta name="robots" content="index, follow"/>
            <meta name="googlebot" content="index, follow"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
            <meta name="google-adsense-account" content="ca-pub-6296569221534302"/>
            
            {/* Performance Optimization Meta Tags */}
            <meta name="format-detection" content="telephone=no"/>
            <meta name="format-detection" content="address=no"/>
            <meta name="format-detection" content="email=no"/>
            <meta httpEquiv="x-dns-prefetch-control" content="on"/>
            <link rel="dns-prefetch" href="//fonts.googleapis.com"/>
            <link rel="dns-prefetch" href="//fonts.gstatic.com"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            
            {/* Core Web Vitals Optimization */}
            <meta name="color-scheme" content="dark light"/>
            <meta name="supported-color-schemes" content="dark light"/>
            <meta name="theme-color" content="#2563eb" media="(prefers-color-scheme: light)"/>
            <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: dark)"/>
            
            {/* Mobile Optimization */}
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
            <meta name="apple-mobile-web-app-title" content="FastTools"/>
            <meta name="application-name" content="FastTools"/>
            <meta name="msapplication-TileColor" content="#2563eb"/>
            <meta name="msapplication-config" content="/browserconfig.xml"/>
            
            {/* Security Headers */}
            <meta httpEquiv="X-Content-Type-Options" content="nosniff"/>
            <meta httpEquiv="X-Frame-Options" content="DENY"/>
            <meta httpEquiv="X-XSS-Protection" content="1; mode=block"/>
            <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin"/>
            
            {/* SEO Enhancement */}
            <meta name="language" content="English"/>
            <meta name="geo.region" content="US"/>
            <meta name="geo.placename" content="United States"/>
            <meta name="distribution" content="global"/>
            <meta name="rating" content="general"/>
            <meta name="revisit-after" content="1 days"/>
            <meta name="expires" content="never"/>
            <meta name="cache-control" content="public, max-age=31536000"/>
            <script
                suppressHydrationWarning
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}
            />
            <script
                suppressHydrationWarning
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}
            />
            
        </head>
        <body className="min-h-screen bg-background font-sans text-foreground">
        <a href="#main-content" className="skip-link">
            Skip to main content
            </a>
            <GlobalLoading />
            <Header />
            <div className="container mx-auto px-4 py-4">
              <AdSpace slot="header" className="h-20" />
            </div>
            <main id="main-content" className="min-h-[calc(100vh-4rem)]" role="main">
              {children}
            </main>
            <div className="container mx-auto px-4 py-6">
              <AdSpace slot="footer" className="h-24 max-w-6xl mx-auto" />
            </div>
            <Footer />
            <CookieConsent />
            <Analytics/>
          <SpeedInsights/>
          </body>
        </html>
      )
    }
