import type React from "react"
import "./globals.css"
import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
import { CookieConsent } from "@/components/common/cookie-consent"
import { WelcomePopup } from "@/components/common/welcome-popup"
import { ThemeProvider } from "@/components/common/theme-provider"

import { env } from "@/config/env"
import { createMetadata, globalViewport, getWebsiteSchema } from "@/lib/metadata-base"
import { roboto, montserrat, openSans } from "@/app/fonts"
import { DeferredScript } from "@/components/common/deferred-script"



export const viewport = globalViewport

export const metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: {
    default: "FastTools - 1000+ Free Online Tools",
    template: "%s | FastTools",
  },
  description: "FastTools provides 1000+ free online tools and expert articles: PDF tools, AI generators, calculators, developer utilities, and a tech blog with in-depth tutorials. 100% free, secure local processing, and works on all devices.",
  authors: [{ name: "FastTools Team", url: "https://www.fasttools.store" }],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "l2XEjZ8SEN_FD96ft9mIUW8cPiLW4mDbX6wZabF-xv0",
    yandex: "242a8cf232328714",
    me: ["support@fasttools.store"],
    other: {
      "msvalidate.01": "DE0A07DC9E742C4C8E795D7C99EF238B",
      "p:domain_verify": "603c992f6d70753cf89c1a0141990c73",
      "facebook-domain-verification": "m4jw5d6c1jsteghq2xo00wflvif79x",
      "google-adsense-account": "ca-pub-6296569221534302",
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ZamanIsmail7",
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
    description: "FastTools offers 1000+ free online tools and a comprehensive tech blog featuring AI generators, converters, calculators, and expert development guides. Fast, accurate, secure, and always free.",
    foundingDate: "2024",
    sameAs: [
      "https://x.com/ZamanIsmail7",
      "https://www.facebook.com/profile.php?id=61582711433268",
      "https://www.youtube.com/@fasttools_official",
      "https://www.linkedin.com/company/fasttools/?viewAsMember=true",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@fasttools.store",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
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
      "Web Assets",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Free Online Tools",
        description: "Comprehensive collection of free online tools and utilities",
      },
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const websiteSchema = getWebsiteSchema()

  return (
    <html lang="en" className={`antialiased ${roboto.variable} ${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Critical Resource Hints - Optimized for Performance */}
        {/* Preconnect to external domains with high priority */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Ad networks - lower priority, defer */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/roboto-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/android-chrome-512x512.png" />
      </head>
      <body className="bg-background font-sans text-foreground">





        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

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
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
          <CookieConsent />


          <WelcomePopup />
          {/* Google Adsense - Deferred for better performance */}
          {env.isProduction && (
            <DeferredScript
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6296569221534302"
              id="adsbygoogle-script"
              crossOrigin="anonymous"
            />
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
