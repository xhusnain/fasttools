import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { GlobalLoading } from "@/components/global-loading"
import type { Metadata } from "next"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://toolifyhub.com"),
  title: {
    default: "ToolifyHub - Free Online Tools for Everyone",
    template: "%s | ToolifyHub",
  },
  description:
    "Access free online tools including age calculator, date calculators, and more. Fast, accurate, and easy to use.",
  keywords: ["online tools", "free tools", "age calculator", "calculators", "utilities"],
  authors: [{ name: "ToolifyHub" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toolifyhub.com",
    siteName: "ToolifyHub",
    title: "ToolifyHub - Free Online Tools for Everyone",
    description: "Access free online tools including age calculator, date calculators, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToolifyHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolifyHub - Free Online Tools for Everyone",
    description: "Access free online tools including age calculator, date calculators, and more.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <GlobalLoading />
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
