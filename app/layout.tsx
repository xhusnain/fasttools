import type React from "react"
import { Montserrat, Roboto } from "next/font/google"
import "./globals.css"
import { ConditionalHeader } from "@/components/conditional-header-footer"
import { ConditionalFooter } from "@/components/conditional-header-footer"
import { ConditionalCookieConsent } from "@/components/conditional-header-footer"
import { GlobalLoading } from "@/components/global-loading"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { env } from "@/lib/env"


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: {
    default: "FastTools - Free Online Tools | AI Generator, Calculator, Converter & SEO",
    template: "%s",
  },
  description:
    "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, easy to use, no registration required.",
    keywords: [
        "fasttools",
        "fast tools",
        "free online tools",
        "online tools platform",
        "free fast tools",
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
        "conversion tools",
        "web applications",
        "digital tools",
        "browser utilities",
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
        "online efficiency",
        "fast web tools",
        "quick tools",
        "instant tools"
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
        siteName: "FastTools",
        title: "FastTools - Free Online Tools | 1000+ AI, Calculator, Converter & SEO Tools",
        description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, easy to use, no registration.",
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
        title: "FastTools - Free Online Tools | 1000+ AI, Calculator, Converter & SEO Tools",
        description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, easy to use, no registration.",
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
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
        name: "FastTools",
        alternateName: ["fasttools", "fast tools", "fasttools.store"],
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.png",
          width: 320,
          height: 80,
          description: "FastTools professional logo with modern FT symbol and blue gradient"
        },
        image: "https://www.fasttools.store/banner.png",
        description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, easy to use, no registration required.",
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
        name: "FastTools",
        alternateName: ["fasttools", "fast tools"],
        url: "https://www.fasttools.store",
        description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, easy to use, no registration required.",
        publisher: {
          "@type": "Organization",
          name: "FastTools",
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
        <html lang="en" className={`${montserrat.variable} ${roboto.variable} antialiased`} suppressHydrationWarning>
        <head>
            {/* Theme initialization script - prevents flash of wrong theme */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    const theme = localStorage.getItem('theme') || 'dark';
                    if (theme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  })();
                `,
              }}
            />
            {/* Preload external scripts for better performance - Only in production */}
            {env.isProduction && (
              <>
                <link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=G-4G804HZ22C" as="script" crossOrigin="anonymous"/>
              </>
            )}
            
            {/* Google Analytics - Only in production */}
            {env.isProduction && (
              <>
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
              </>
            )}
            
            {/* Clickfortify Tracker - Only in production and not on embed routes */}
            {env.isProduction && (
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
                          (function() {
             
                           var s = document.createElement('script');
                            s.type = 'text/javascript';
                            s.async = true;
                            s.src = "https://tracker.clickfortify.com/cdn/spcZrjg3d1d/wstSb2fQc7v";
                            var x = document.getElementsByTagName('script')[0];
                            x.parentNode.insertBefore(s, x);
                          })();
                      `,
                  }}
              />
            )}
            
            {/* Essential Meta Tags */}
            <link rel="sitemap" type="application/xml" href="/sitemap.xml"/>
            
            {/* Favicon Links - Critical for Google Search Results */}
            <link rel="icon" href="/favicon.ico" sizes="any"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"/>
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
            <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
            <meta name="bingbot" content="index, follow"/>
            <meta name="slurp" content="index, follow"/>
            <meta name="duckduckbot" content="index, follow"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5"/>
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
            {env.isProduction && (
              <>
                <link rel="dns-prefetch" href="//www.google-analytics.com"/>
                <link rel="dns-prefetch" href="//www.googletagmanager.com"/>
              </>
            )}
            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            {env.isProduction && (
              <>
                <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous"/>
              </>
            )}
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
        <body className="bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="theme"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <GlobalLoading />
          <ConditionalHeader />
          <main id="main-content" role="main">
            {children}
          </main>
          <ConditionalFooter />
          <ConditionalCookieConsent />
        </ThemeProvider>
        </body>
        </html>
      )
    }
