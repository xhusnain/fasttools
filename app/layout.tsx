import type React from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { GlobalLoading } from "@/components/global-loading"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { env } from "@/lib/env"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: {
    template: "%s | FastTools",
    default: "FastTools",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: "l2XEjZ8SEN_FD96ft9mIUW8cPiLW4mDbX6wZabF-xv0",
    yandex: "242a8cf232328714",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "fasttools",
    "application-name": "fasttools",
    "msapplication-TileColor": "#3D348B",
    "msapplication-navbutton-color": "#3D348B",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-tap-highlight": "no",
    "google-site-verification": "l2XEjZ8SEN_FD96ft9mIUW8cPiLW4mDbX6wZabF-xv0",
    "yandex-verification": "242a8cf232328714",
    "msvalidate.01": "DE0A07DC9E742C4C8E795D7C99EF238B",
    "p:domain_verify": "603c992f6d70753cf89c1a0141990c73",
    "facebook-domain-verification": "m4jw5d6c1jsteghq2xo00wflvif79x",
    "google-adsense-account": "ca-pub-6296569221534302",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3D348B" },
    { media: "(prefers-color-scheme: dark)", color: "#3D348B" },
  ],
  colorScheme: "dark light",
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
          width: 500,
          height: 500,
          description: "FastTools professional logo with modern FT symbol and blue gradient"
        },
        image: "https://www.fasttools.store/banner.png",
        description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, easy to use, no registration required.",
        foundingDate: "2024",
        sameAs: [
          "https://x.com/ZamanIsmail7",
          "https://www.facebook.com/profile.php?id=61582711433268",
          "https://www.youtube.com/@fasttools_official",
          "https://www.linkedin.com/company/fasttools/?viewAsMember=true"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "support@fasttools.store",
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
        alternateName: ["fasttools", "fast tools", "fasttools.store"],
        url: "https://www.fasttools.store/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.fasttools.store/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground">
        {/* Google Analytics */}
        {env.isProduction && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-4G804HZ22C"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4G804HZ22C');
              `}
            </Script>
          </>
        )}

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
          <GlobalLoading />
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
    }
