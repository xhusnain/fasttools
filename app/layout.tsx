import type React from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { GlobalLoading } from "@/components/global-loading"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
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
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "fasttools",
    "msapplication-TileColor": "#3D348B",
    "theme-color": "#3D348B",
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
        alternateName: ["fasttools", "fast tools", "fasttools.store"],
        url: "https://www.fasttools.store/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.fasttools.store/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    
      return (
          <html lang="en" className="antialiased">
        <head>
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
            {env.isProduction && (
              <>
                <link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=G-4G804HZ22C" as="script" crossOrigin="anonymous"/>
              </>
            )}
            
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
            
            <link rel="sitemap" type="application/xml" href="/sitemap.xml"/>
            
            {/* Favicon Links - Critical for Google Search Results */}
            <link rel="icon" href="/favicon.ico" sizes="any"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"/>
            
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5"/>
            
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
            <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
            <meta name="bingbot" content="index, follow"/>
            <meta name="slurp" content="index, follow"/>
            <meta name="duckduckbot" content="index, follow"/>
            <meta name="yandexbot" content="index, follow"/>
            <meta name="baiduspider" content="index, follow"/>
            <meta name="applebot" content="index, follow"/>
            <meta name="google-adsense-account" content="ca-pub-6296569221534302"/>
            <meta name="yandex-verification" content="242a8cf232328714" />
            <meta name="p:domain_verify" content="603c992f6d70753cf89c1a0141990c73"/>
            <meta name="facebook-domain-verification" content="m4jw5d6c1jsteghq2xo00wflvif79x" />
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
            <meta name="color-scheme" content="dark light"/>
            <meta name="supported-color-schemes" content="dark light"/>
            <meta name="theme-color" content="#3D348B" media="(prefers-color-scheme: light)"/>
            <meta name="theme-color" content="#3D348B" media="(prefers-color-scheme: dark)"/>
            <meta name="msapplication-navbutton-color" content="#3D348B"/>
            <meta name="msapplication-TileColor" content="#3D348B"/>
            <meta name="msapplication-config" content="/browserconfig.xml"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-title" content="fasttools"/>
            <meta name="application-name" content="fasttools"/>
            <meta name="apple-touch-fullscreen" content="yes"/>
            <meta name="apple-mobile-web-app-orientations" content="portrait"/>
            <meta name="msapplication-tap-highlight" content="no"/>
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
