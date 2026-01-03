import React from "react"
import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/ui/gheader"
import { GAccordion, GAccordionContent, GAccordionItem, GAccordionTrigger } from "@/ui/gaccordion"

import Link from "next/link"
import { createMetadata } from "@/lib/metadata-base"
import {
  Download,
  ArrowRight,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Copy,
  Search,
  CheckCircle,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react"
export const metadata = createMetadata({
  title: "Free Video Downloader for YouTube, TikTok, & More",
  description: "Download videos from YouTube, TikTok, Instagram, Facebook, and X (Twitter) for free. Our online video downloader is fast, easy, and requires no software installation. Save your favorite content offline in HD.",
  path: "/downloaders",
  ogImageAlt: "A free and easy-to-use video downloader from FastTools.",
  twitterCreator: "@FastTools",
  twitterTitle: "Free Video Downloader for YouTube, TikTok, & More | FastTools",
  twitterDescription: "Download videos from YouTube, TikTok, Instagram, Facebook, and X (Twitter) for free. Fast, easy, and no software required.",
});

const downloaders = [
  {
    id: "youtube-downloader",
    name: "YouTube",
    description: "Download YouTube videos in HD quality.",
    icon: Youtube,
    href: "/social-media-tools/youtube-downloader",
    color: "#FF0000",
    hoverColor: "#CC0000",
  },
  {
    id: "tiktok-downloader",
    name: "TikTok",
    description: "Download TikTok videos without watermarks.",
    icon: Download,
    href: "/social-media-tools/tiktok-downloader",
    color: "#00f2ea",
    hoverColor: "#ff0050",
  },
  {
    id: "instagram-downloader",
    name: "Instagram",
    description: "Download Reels, Stories, and posts.",
    icon: Instagram,
    href: "/social-media-tools/instagram-downloader",
    color: "#E1306C",
    hoverColor: "#F77737",
  },
  {
    id: "facebook-downloader",
    name: "Facebook",
    description: "Save public Facebook videos in HD.",
    icon: Facebook,
    href: "/social-media-tools/facebook-downloader",
    color: "#1877F2",
    hoverColor: "#0a52bd",
  },
  {
    id: "x-video-downloader",
    name: "X/Twitter",
    description: "Download X videos without watermarks.",
    icon: Twitter,
    href: "/social-media-tools/x-video-downloader",
    color: "#1DA1F2",
    hoverColor: "#0F85D9",
  },
  {
    id: "capcut-downloader",
    name: "CapCut",
    description: "Download CapCut videos and templates.",
    icon: Download,
    href: "/social-media-tools/capcut-downloader",
    color: "#00CED1",
    hoverColor: "#00B4B8",
  },
]

const faqItems = [
  {
    question: "Which platforms are supported?",
    answer: "We currently support downloading from major platforms including YouTube, TikTok, Instagram, Facebook, and X (formerly Twitter). We are always working to add support for more sites."
  },
  {
    question: "Is it legal to download videos?",
    answer: "Our tools should be used for personal purposes only. Downloading copyrighted material without permission may be illegal in your country. Please respect the intellectual property rights of content creators and ensure you have the right to download any video."
  },
  {
    question: "What video quality can I download?",
    answer: "Our downloaders aim to provide the highest quality available from the source platform. This often includes options for Standard Definition (SD), High Definition (HD), and in some cases, 4K."
  },

]

export default function DownloadersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FastTools Downloaders",
    description: "A collection of free video and media download tools for various social media platforms.",
    url: "https://www.fasttools.store/downloaders",
    numberOfItems: downloaders.length,
    itemListElement: downloaders.map((downloader, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: downloader.name,
      description: downloader.description,
      url: `https://www.fasttools.store${downloader.href}`
    }))
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.fasttools.store/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Downloaders",
        item: "https://www.fasttools.store/downloaders"
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: "Downloaders", href: "/downloaders" },
            ]}
          />

          <div className="max-w-6xl mx-auto mt-8 md:mt-12">
            <div className="mb-12 md:mb-16">
              <GHeader
                title="Free Media Downloaders"
                description="Easily download videos and media from popular social platforms like YouTube, TikTok, Instagram, Facebook, and X (Twitter). Our tools are fast, free, and designed for simplicity, allowing you to save your favorite content for offline access."
                titleSize="large"
                descriptionSize="medium"
                color="blue"
              />
            </div>

            {/* Tools Section - Now at the top */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Our Featured Downloaders
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Select a platform below to start downloading your favorite media instantly.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {downloaders.map((downloader) => {
                  const Icon = downloader.icon
                  return (
                    <Link
                      key={downloader.id}
                      href={downloader.href}
                      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-0.5 transition-all hover:shadow-xl"
                      style={{ '--brand-color': downloader.color } as React.CSSProperties}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-color)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                      <div className="relative flex flex-col h-full bg-card/80 backdrop-blur-sm rounded-[10px] p-5">
                        <div className="mb-4 flex items-center justify-center">
                          <div
                            className="rounded-lg p-2.5 transition-all group-hover:scale-110"
                            style={{ backgroundColor: `${downloader.color}15`, color: downloader.color }}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>

                        <div className="flex-1 text-center">
                          <h3 className="text-lg font-bold text-heading-accent mb-1 group-hover:text-[var(--brand-color)] transition-colors">
                            {downloader.name}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-snug mb-3">
                            {downloader.description}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center justify-center">
                          <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: downloader.color }}>
                            <span>Try Now</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Instructions Section - Now below tools */}
            <div className="mb-20 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl -z-10" />
              <div className="bg-card/40 backdrop-blur-md border border-border/40 rounded-3xl p-8 md:p-16">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h2>
                  <p className="text-muted-foreground text-lg">
                    Three simple steps to save any media from the web to your device.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center group">
                    <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:rotate-3">
                      <Copy className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 text-6xl font-black text-primary/5 pointer-events-none">01</div>
                    <h3 className="text-xl font-bold text-heading-accent mb-3">Copy Video URL</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Find the video on its platform and copy the link from your browser's address bar.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center text-center group">
                    <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:rotate-3">
                      <Search className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 text-6xl font-black text-primary/5 pointer-events-none">02</div>
                    <h3 className="text-xl font-bold text-heading-accent mb-3">Paste & Analyze</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Paste the link into our search bar. Our system will immediately process and fetch the video data.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col items-center text-center group">
                    <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:rotate-3">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 text-6xl font-black text-primary/5 pointer-events-none">03</div>
                    <h3 className="text-xl font-bold text-heading-accent mb-3">Download Media</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Choose your preferred quality and format, then click download to save the file.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <div className="lg:col-span-2 space-y-12">
                <article className="prose prose-invert prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-primary mb-6">A Multi-Platform Solution for All Your Media Needs</h2>
                  <p className="text-muted-foreground leading-extended">In today's digital world, content is spread across countless platforms. That's why we've designed our suite of downloaders to be a versatile, all-in-one solution. Whether you're looking to save an educational lecture from YouTube, a viral dance from TikTok without the watermark, or a cherished family video from Facebook, our tools have you covered.</p>
                  <p className="text-muted-foreground leading-extended">We understand that each platform has its unique content formats, from Instagram's Reels and Stories to the concise video clips on X (formerly Twitter). Our service is engineered to handle these different formats seamlessly, providing you with a consistent and reliable experience no matter where the content originates.</p>
                </article>

                <article className="prose prose-invert prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-primary mb-6">Understanding Video and Audio Quality Options</h2>
                  <p className="text-muted-foreground leading-extended">When you download a video, quality matters. Our tools are designed to give you control over the final output, ensuring the file meets your specific needs. For most videos, we offer a range of resolution options, including High Definition (HD) 1080p for crisp, clear playback on large screens, and Standard Definition (SD) 720p or 480p.</p>
                </article>
              </div>

              <div className="lg:col-span-1 space-y-8">
                <div className="bg-card border border-border/40 rounded-2xl p-8 sticky top-24">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { icon: ShieldCheck, text: "100% Secure & Private" },
                      { icon: Zap, text: "Ultra-Fast Processing" },
                      { icon: Download, text: "No Software Required" },
                      { icon: Star, text: "Always Free to Use" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Everything you need to know about our downloading tools.</p>
              </div>
              <GAccordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <GAccordionItem value={`item-${index}`} key={index} className="bg-card border border-border/40 rounded-xl px-2">
                    <GAccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-4">
                      {item.question}
                    </GAccordionTrigger>
                    <GAccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                      {item.answer}
                    </GAccordionContent>
                  </GAccordionItem>
                ))}
              </GAccordion>
            </div>

            <div className="text-center text-sm text-muted-foreground max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <p><strong>Disclaimer:</strong> Our tools are intended for personal use only. Please respect the intellectual property rights of content creators. It is your responsibility to ensure that you have the right to download and use any content accessed through our service. We do not host or store any copyrighted material on our servers.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
