import type React from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { env } from "@/lib/env"
import { createMetadata, globalViewport, getWebsiteSchema } from "@/lib/metadata-base"
import { roboto, montserrat } from "@/app/fonts"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const viewport = globalViewport

export const metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  ...createMetadata({
    title: "FastTools",
    description: "FastTools provides 1000+ free online tools: PDF tools (compress, convert, sign, merge), image tools (background remover, blur, OCR), calculators (BMI, loan, tax), AI generators, social media tools, SEO tools, converters, and developer utilities. 100% free, no registration, works on all devices.",
    path: "/",
  }),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
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
      description: "FastTools professional logo with modern FT symbol and blue gradient",
    },
    image: "https://www.fasttools.store/banner.png",
    description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, easy to use, no registration required.",
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
    <html lang="en" className={`antialiased ${roboto.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="monetag" content="684501ca5cfaf50fedefb16e2683c21d" />
      </head>
      <body className="bg-background font-sans text-foreground">
        <script src="https://quge5.com/88/tag.min.js" data-zone="189815" async data-cfasync="false"></script>
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
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
