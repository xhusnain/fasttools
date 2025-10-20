import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
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
  metadataBase: new URL("https://www.fasttools.store"),
  title: {
    default: "Free Online Tools | fasttools - Complete Digital Toolkit",
    template: "%s | FastTools",
  },
  description:
    "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
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
        "QR code generator",
        "password generator",
        "color picker",
        "unit converter",
        "currency converter",
        "PDF tools",
        "URL shortener",
        "word counter",
        "tiktok downloader",
        "AI content generator",
        "AI writing assistant",
        "image editing tools",
        "fasttools",
        "fast tools",
        "conversion tools",
        "web applications",
        "digital tools",
        "browser utilities",
        "free online tools",
        "online platform",
        "digital toolkit",
        "professional toolkit",
        "automation platform",
        "efficiency toolkit",
        "workflow tools",
        "business web tools",
        "marketing tools online",
        "SEO optimization",
        "content creation tools",
        "file converters",
        "web resources",
        "digital productivity",
        "online efficiency"
    ],
  authors: [{ name: "fasttools Team", url: "https://www.fasttools.store/about" }],
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
        url: "https://www.fasttools.store",
        siteName: "fasttools",
        title: "Free Online Tools | fasttools - Complete Digital Toolkit",
        description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
        images: [
          {
            url: "/banner.png",
            width: 1200,
            height: 630,
            alt: "fasttools - Professional Online Tools & Utilities Collection",
            type: "image/png",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@ZamanIsmail7",
        creator: "@ZamanIsmail7",
        title: "Free Online Tools | fasttools - Complete Digital Toolkit",
        description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
        images: ["/banner.png"],
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
      { url: "/logo.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/logo.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    shortcut: "/logo.svg",
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
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.png",
          width: 320,
          height: 80,
          description: "fasttools professional logo with modern FT symbol and blue gradient"
        },
        image: "https://www.fasttools.store/banner.png",
        description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
        foundingDate: "2024",
        sameAs: [
          "https://x.com/ZamanIsmail7",
          "https://www.facebook.com/profile.php?id=61582711433268",
          "https://www.youtube.com/channel/UCLnJoKw00cNkTjT5C0axoiQ"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "fasttools.store@outlook.com",
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
          "Developer Utilities",
          "Free Web Tools",
          "Digital Productivity",
          "Online Calculators",
          "Web Utilities",
          "Browser Tools",
          "Instant Tools",
          "Cloud Tools",
          "Digital Solutions",
          "Online Services",
          "Web Services",
          "Digital Platform",
          "Online Platform",
          "Web Platform",
          "Digital Toolkit",
          "Professional Tools",
          "Business Tools",
          "Marketing Tools",
          "Content Creation Tools",
          "Workflow Tools",
          "Automation Tools",
          "Digital Resources",
          "Online Resources",
          "Web Resources",
          "Digital Assets",
          "Online Assets",
          "Web Assets"
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
        url: "https://www.fasttools.store",
        description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
        publisher: {
          "@type": "Organization",
          name: "fasttools",
          url: "https://www.fasttools.store"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.fasttools.store/search?q={search_term_string}",
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
              url: "https://www.fasttools.store/ai-tools"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Converter Tools",
              description: "Comprehensive conversion utilities for currency, units, text, and file formats",
              url: "https://www.fasttools.store/converters"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Calculator Tools",
              description: "Financial, business, and general purpose calculators for all your calculation needs",
              url: "https://www.fasttools.store/calculator"
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "SEO Tools",
              description: "SEO optimization tools including meta tag generators, keyword density checkers, and content analyzers",
              url: "https://www.fasttools.store/seo-tools"
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Image Tools",
              description: "Image processing and editing tools including croppers, converters, and OCR text extraction",
              url: "https://www.fasttools.store/image-tools"
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
              item: "https://www.fasttools.store"
            }
          ]
        }
      }
    
      return (
        <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <head>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-4G804HZ22C"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-4G804HZ22C');
                    `,
                }}
            />
            
            {/* Microsoft Clarity */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "tspya2xfyk");
                    `,
                }}
            />
            {/* Essential Meta Tags */}
            <link rel="sitemap" type="application/xml" href="/sitemap.xml"/>
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
            <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
            <meta name="bingbot" content="index, follow"/>
            <meta name="slurp" content="index, follow"/>
            <meta name="duckduckbot" content="index, follow"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"/>
            <meta name="google-adsense-account" content="ca-pub-6296569221534302"/>
            <meta name="yandex-verification" content="242a8cf232328714" />
            <meta name="p:domain_verify" content="603c992f6d70753cf89c1a0141990c73"/>
            <meta name="facebook-domain-verification" content="m4jw5d6c1jsteghq2xo00wflvif79x" />
            
            {/* Enhanced SEO Meta Tags */}
            <meta name="author" content="fasttools Team"/>
            <meta name="copyright" content="fasttools"/>
            <meta name="owner" content="fasttools"/>
            <meta name="url" content="https://www.fasttools.store"/>
            <meta name="identifier-URL" content="https://www.fasttools.store"/>
            <meta name="category" content="Technology, Web Tools, Online Utilities"/>
            <meta name="coverage" content="Worldwide"/>
            <meta name="distribution" content="Global"/>
            <meta name="rating" content="General"/>
            <meta name="target" content="all"/>
            <meta name="audience" content="all"/>
            <meta name="language" content="en-US"/>
            <meta name="geo.region" content="US"/>
            <meta name="geo.placename" content="United States"/>
            <meta name="geo.position" content="39.8283;-98.5795"/>
            <meta name="ICBM" content="39.8283, -98.5795"/>
            <meta name="DC.title" content="Free Online Tools | fasttools - Complete Digital Toolkit"/>
            <meta name="DC.creator" content="fasttools Team"/>
            <meta name="DC.subject" content="Free Online Tools, Web Utilities, Digital Tools, Productivity Tools"/>
            <meta name="DC.description" content="fasttools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use."/>
            <meta name="DC.publisher" content="fasttools"/>
            <meta name="DC.contributor" content="fasttools Team"/>
            <meta name="DC.date" content="2024-01-01"/>
            <meta name="DC.type" content="Service"/>
            <meta name="DC.format" content="text/html"/>
            <meta name="DC.identifier" content="https://www.fasttools.store"/>
            <meta name="DC.source" content="https://www.fasttools.store"/>
            <meta name="DC.language" content="en-US"/>
            <meta name="DC.relation" content="https://www.fasttools.store"/>
            <meta name="DC.coverage" content="Worldwide"/>
            <meta name="DC.rights" content="Copyright fasttools"/>
            
            {/* Performance Optimization Meta Tags */}
            <meta name="format-detection" content="telephone=no"/>
            <meta name="format-detection" content="address=no"/>
            <meta name="format-detection" content="email=no"/>
            <meta httpEquiv="x-dns-prefetch-control" content="on"/>
            <meta httpEquiv="x-ua-compatible" content="IE=edge"/>
            <meta httpEquiv="cleartype" content="on"/>
            <link rel="dns-prefetch" href="//fonts.googleapis.com"/>
            <link rel="dns-prefetch" href="//fonts.gstatic.com"/>
            <link rel="dns-prefetch" href="//www.google-analytics.com"/>
            <link rel="dns-prefetch" href="//vercel.live"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://vercel.live" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
            
            {/* Core Web Vitals Optimization */}
            <meta name="color-scheme" content="dark light"/>
            <meta name="supported-color-schemes" content="dark light"/>
            <meta name="theme-color" content="#3D348B" media="(prefers-color-scheme: light)"/>
            <meta name="theme-color" content="#3D348B" media="(prefers-color-scheme: dark)"/>
            <meta name="msapplication-navbutton-color" content="#3D348B"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            
            {/* Mobile Optimization */}
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta name="apple-mobile-web-app-title" content="fasttools"/>
            <meta name="application-name" content="fasttools"/>
            <meta name="apple-touch-fullscreen" content="yes"/>
            <meta name="apple-mobile-web-app-orientations" content="portrait"/>
            <meta name="msapplication-TileColor" content="#3D348B"/>
            <meta name="msapplication-config" content="/browserconfig.xml"/>
            <meta name="msapplication-tooltip" content="fasttools - Free Online Tools"/>
            <meta name="msapplication-starturl" content="/"/>
            <meta name="msapplication-tap-highlight" content="no"/>
            
            {/* Security Headers */}
            <meta httpEquiv="X-Content-Type-Options" content="nosniff"/>
            <meta httpEquiv="X-Frame-Options" content="DENY"/>
            <meta httpEquiv="X-XSS-Protection" content="1; mode=block"/>
            <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin"/>
            <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()"/>
            <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://vercel.live https://*.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://vercel.live https://*.clarity.ms;"/>
            
            {/* Cache and Performance */}
            <meta name="revisit-after" content="1 days"/>
            <meta name="expires" content="never"/>
            <meta name="cache-control" content="public, max-age=31536000, immutable"/>
            <meta name="pragma" content="cache"/>
            <meta name="last-modified" content="2024-01-15"/>
            <meta name="generator" content="Next.js"/>
            <meta name="build" content="production"/>
            
            {/* Social Media Optimization */}
            <meta name="twitter:app:name:iphone" content="fasttools"/>
            <meta name="twitter:app:name:ipad" content="fasttools"/>
            <meta name="twitter:app:name:googleplay" content="fasttools"/>
            <meta name="twitter:app:url:iphone" content="https://www.fasttools.store"/>
            <meta name="twitter:app:url:ipad" content="https://www.fasttools.store"/>
            <meta name="twitter:app:url:googleplay" content="https://www.fasttools.store"/>
            <meta name="twitter:app:id:iphone" content="fasttools"/>
            <meta name="twitter:app:id:ipad" content="fasttools"/>
            <meta name="twitter:app:id:googleplay" content="fasttools"/>
            
            {/* Additional SEO Meta Tags */}
            <meta name="keywords" content="free online tools, web tools, productivity tools, AI tools, converter tools, calculator tools, text tools, image tools, developer tools, business tools, SEO tools, social media tools, finance tools, date time tools, fun tools, utility tools, web utilities, online calculators, free online services, tool collection, hashtag generator, QR code generator, password generator, color picker, unit converter, currency converter, text case converter, image converter, PDF tools, URL shortener, word counter, character counter, random number generator, color palette generator, meme generator, QR code scanner, barcode generator, invoice generator, receipt generator, certificate generator"/>
            <meta name="news_keywords" content="free online tools, web tools, productivity tools, AI tools, converter tools, calculator tools"/>
            <meta name="subject" content="Free Online Tools and Digital Utilities"/>
            <meta name="summary" content="fasttools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use."/>
            <meta name="abstract" content="Comprehensive collection of free online tools and utilities for productivity, conversion, and content creation."/>
            <meta name="topic" content="Technology, Web Tools, Online Utilities"/>
            <meta name="classification" content="Technology, Web Tools, Online Utilities"/>
            
            {/* Search Engine Bot Instructions */}
            <meta name="yandexbot" content="index, follow"/>
            <meta name="baiduspider" content="index, follow"/>
            <meta name="facebookexternalhit" content="index, follow"/>
            <meta name="twitterbot" content="index, follow"/>
            <meta name="linkedinbot" content="index, follow"/>
            <meta name="whatsapp" content="index, follow"/>
            <meta name="telegrambot" content="index, follow"/>
            <meta name="applebot" content="index, follow"/>
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
            <main id="main-content" className="min-h-[calc(100vh-4rem)]" role="main">
              {children}
            </main>
            <Footer />
            <CookieConsent />
            <Analytics/>
          <SpeedInsights/>
          </body>
        </html>
      )
    }
