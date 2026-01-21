import type { Metadata } from "next"
import type React from "react"
import Script from "next/script"
import "./globals.css"
import { roboto, montserrat, openSans } from "@/app/fonts"
import { globalViewport } from "@/lib/metadata-base"

export const viewport = globalViewport

export const metadata: Metadata = {
    metadataBase: new URL("https://www.fasttools.store"),
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
    }

    return (
        <html lang="en" className={`antialiased ${roboto.variable} ${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                <Script id="google-tag-manager" strategy="beforeInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-P75QGKJ9');`}
                </Script>
            </head>
            <body className="bg-background font-sans text-foreground">
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-P75QGKJ9"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                {children}
            </body>
        </html>
    )
}
