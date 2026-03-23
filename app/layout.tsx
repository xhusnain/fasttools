import type { Metadata } from "next"
import type React from "react"
import Script from "next/script"
import "./globals.css"
import dynamic from "next/dynamic"
import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
import { ThemeProvider } from "@/components/common/theme-provider"
import { createMetadata, globalViewport, getWebsiteSchema } from "@/lib/metadata-base"
import { DeferredScript } from "@/components/common/deferred-script"
import { roboto, montserrat } from "@/lib/fonts"

const CookieConsent = dynamic(
    () => import("@/components/common/cookie-consent").then(mod => mod.CookieConsent)
)




export const viewport = globalViewport

export const metadata: Metadata = {
    metadataBase: new URL("https://www.fasttools.store"),
    title: {
        default: "FastTools - Free Online Tools | Calculators, Converters & Developer Tools",
        template: "%s",
    },
    description: "Free online tools: calculators, converters, developer tools, SEO tools, image tools, PDF tools & more. No signup required, 100% free, secure local processing.",
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
        alternateName: ["fasttools", "fast tools", "online tools"],
        url: "https://www.fasttools.store",
        description: "FastTools is a free online tools platform. Calculators, converters, crypto, PDF, developer tools — all free, no signup required.",
        foundingDate: "2024-01-01",
        sameAs: [
            "https://github.com/AliHusnain-FastTools/fasttools",
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
            "Web Development Tools",
            "Digital Conversion Tools",
            "SEO Optimization",
            "Image Processing",
            "Financial Calculators",
            "Social Media Tools",
            "Developer Utilities",
            "Free Web Tools",
            "Online Calculators",
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
    }

    const websiteSchema = getWebsiteSchema("https://www.fasttools.store/all-tools?q={search_term_string}")

    return (
        <html lang="en" className={`antialiased ${roboto.variable} ${montserrat.variable}`} suppressHydrationWarning>
            <head>
                <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
            </head>
            <body className="bg-background font-sans text-foreground">
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
                    <main id="main-content" role="main" tabIndex={-1} className="outline-none">
                        {children}
                    </main>
                    <Footer />
                    <CookieConsent />



                    {process.env.NODE_ENV === "production" && (
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
