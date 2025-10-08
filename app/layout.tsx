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
    })
    
    const geistMono = Geist_Mono({
      subsets: ["latin"],
      variable: "--font-geist-mono",
    })
    
    export const metadata: Metadata = {
      metadataBase: new URL("https://fasttools.store"),
      title: {
        default: "FastTools - Free Online Tools for Everyone",
        template: "%s | FastTools - Free Online Tools",
      },
      description:
        "FastTools offers 40+ free online tools including text, file, image, and productivity utilities — all in one place. Fast, accurate, and easy to use.",
      keywords: [
        "online tools",
        "free tools", 
        "fast tools",
        "productivity tools",
        "text tools",
        "file converters",
        "image tools",
        "calculators",
        "utilities",
        "web tools",
        "free online tools",
        "fasttools store",
        "conversion tools",
        "SEO tools",
        "AI tools",
        "dev tools",
        "finance tools",
        "date tools",
        "social media tools"
      ],
      authors: [{ name: "FastTools Team", url: "https://fasttools.store/about" }],
      creator: "FastTools",
      publisher: "FastTools",
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://fasttools.store",
        siteName: "FastTools",
        title: "FastTools - Free Online Tools for Everyone",
        description: "FastTools offers 40+ free online tools including text, file, image, and productivity utilities — all in one place. Fast, accurate, and easy to use.",
        images: [
          {
            url: "/og-image.svg",
            width: 1200,
            height: 630,
            alt: "FastTools - Professional Online Tools & Utilities",
            type: "image/svg+xml",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@fasttoolsstore",
        creator: "@fasttoolsstore",
        title: "FastTools - Free Online Tools",
        description: "FastTools offers 40+ free online tools including text, file, image, and productivity utilities — all in one place.",
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
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
        yahoo: "your-yahoo-verification-code",
      },
      category: "Technology",
      classification: "Free Online Tools and Utilities",
      referrer: "origin-when-cross-origin",
      generator: "Next.js",
      applicationName: "FastTools",
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
        "apple-mobile-web-app-title": "FastTools",
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
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80,
          description: "FastTools professional logo with modern FT symbol and blue gradient"
        },
        image: "https://fasttools.store/og-image.svg",
        description: "FastTools offers 40+ free online tools including text, file, image, and productivity utilities — all in one place. Fast, accurate, and easy to use.",
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
        }
      }
    
      const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store",
        description: "Free online tools and utilities for everyone",
        publisher: {
          "@type": "Organization",
          name: "FastTools"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://fasttools.store/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
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
