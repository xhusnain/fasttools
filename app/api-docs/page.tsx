import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  Globe,
  Code
} from "lucide-react"

export const metadata: Metadata = {
  title: "API Documentation - FastTools | Free APIs & Developer Resources",
  description: "Comprehensive API documentation for FastTools. Free currency conversion API and more developer tools. Get started with our RESTful APIs.",
  keywords: [
    "api documentation",
    "currency api",
    "free api",
    "restful api",
    "developer api",
    "json api",
    "fasttools api",
    "webhook api"
  ],
  openGraph: {
    title: "API Documentation - FastTools | Free APIs & Developer Resources",
    description: "Comprehensive API documentation for FastTools. Free currency conversion API and more developer tools.",
    type: "website",
    url: "https://www.fasttools.store/api-docs",
    siteName: "FastTools",
    locale: "en_US",
    images: [
      {
        url: "https://www.fasttools.store/banner.png",
        width: 1200,
        height: 630,
        alt: "FastTools API Documentation",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Documentation - FastTools | Free APIs & Developer Resources",
    description: "Comprehensive API documentation for FastTools. Free currency conversion API and more developer tools.",
    images: ["https://www.fasttools.store/banner.png"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/api-docs",
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
}

const apis = [
  {
    id: "currency-api",
    name: "Currency Conversion API",
    description: "Real-time currency exchange rates and conversion service",
    icon: Globe,
    href: "/converters/currency-api",
    version: "v1",
    status: "active",
  },
]

export default function ApiDocsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools API Documentation",
    description: "Comprehensive API documentation for FastTools services",
    url: "https://www.fasttools.store/api-docs",
    provider: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: "API Docs", href: "/api-docs" },
            ]}
          />

          <div className="max-w-6xl mx-auto mt-8 md:mt-12">
            {/* Title Section */}
            <div className="mb-12 md:mb-16">
              <GHeader
                title="API Documentation"
                description="Integrate FastTools services into your applications with our powerful RESTful APIs. Free to use, developer-friendly, and well-documented."
                titleSize="large"
                descriptionSize="medium"
                color="orange"
              />
            </div>

            {/* API Services Grid */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                <Code className="h-7 w-7" />
                Available APIs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {apis.map((api) => {
                  const Icon = api.icon
                  return (
                    <Link
                      key={api.id}
                      href={api.href}
                      className="bg-card border border-border/40 rounded-xl p-6 hover:border-border/70 transition-all duration-300 group relative h-full flex flex-col"
                    >
                      {/* Icon in top-right */}
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-orange-500" />
                        </div>
                        {api.status === "active" && (
                          <span className="px-2 py-1 text-xs font-bold bg-heading-accent-border/10 text-heading-accent border border-heading-accent-border/30 rounded">
                            Active
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="pr-20 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-heading-accent mb-2 group-hover:text-heading-accent transition-colors">
                          {api.name}
                        </h3>
                        <p className="text-xs text-orange-500 mb-3 font-bold">Version {api.version}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {api.description}
                        </p>
                        <div className="flex items-center gap-2 text-orange-500 group-hover:text-orange-400 transition-colors">
                          <span className="text-sm font-bold">View Docs</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* More Coming Soon Section */}
            <div className="mt-16 md:mt-20 p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">More APIs Coming Soon</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  We're constantly expanding our API offerings. If you need a specific API that's not available, please email us and we'll make it for you.
                </p>
                <a
                  href="mailto:fasttools.store@outlook.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-foreground font-bold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

