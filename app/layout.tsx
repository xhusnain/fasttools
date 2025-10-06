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
  metadataBase: new URL("https://smarttoolboxes.com"),
  title: {
    default: "SmartToolBoxes - Free Online Tools for Everyone",
    template: "%s | SmartToolBoxes - Free Online Tools",
  },
  description:
    "SmartToolBoxes offers 40+ free online tools including text, file, image, and productivity utilities — all in one place. Fast, accurate, and easy to use.",
  keywords: [
    "online tools",
    "free tools", 
    "smart tools",
    "productivity tools",
    "text tools",
    "file converters",
    "image tools",
    "calculators",
    "utilities",
    "web tools",
    "free online tools",
    "smart toolboxes",
    "conversion tools",
    "SEO tools",
    "AI tools",
    "dev tools",
    "finance tools",
    "date tools",
    "social media tools"
  ],
  authors: [{ name: "SmartToolBoxes Team", url: "https://smarttoolboxes.com/about" }],
  creator: "SmartToolBoxes",
  publisher: "SmartToolBoxes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smarttoolboxes.com",
    siteName: "SmartToolBoxes",
    title: "SmartToolBoxes - Free Online Tools for Everyone",
    description: "SmartToolBoxes offers 40+ free online tools including text, file, image, and productivity utilities — all in one place. Fast, accurate, and easy to use.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmartToolBoxes - Free Online Tools and Utilities",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@smarttoolboxes",
    creator: "@smarttoolboxes",
    title: "SmartToolBoxes - Free Online Tools",
    description: "SmartToolBoxes offers 40+ free online tools including text, file, image, and productivity utilities — all in one place.",
    images: ["/og-image.png"],
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
    canonical: "https://smarttoolboxes.com",
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
  applicationName: "SmartToolBoxes",
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
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "SmartToolBoxes",
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
    name: "SmartToolBoxes",
    url: "https://smarttoolboxes.com",
    logo: "https://smarttoolboxes.com/logo.png",
    description: "SmartToolBoxes offers 40+ free online tools including text, file, image, and productivity utilities — all in one place. Fast, accurate, and easy to use.",
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/smarttoolboxes",
      "https://facebook.com/smarttoolboxes",
      "https://linkedin.com/company/smarttoolboxes"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@smarttoolboxes.com",
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
    name: "SmartToolBoxes",
    url: "https://smarttoolboxes.com",
    description: "Free online tools and utilities for everyone",
    publisher: {
      "@type": "Organization",
      name: "SmartToolBoxes"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://smarttoolboxes.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://smarttoolboxes.com" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
      </body>
    </html>
  )
}
