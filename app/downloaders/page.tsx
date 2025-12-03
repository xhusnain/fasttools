import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import Link from "next/link"
import { createMetadata } from "@/lib/metadata-base"
import {
  Download,
  ArrowRight,
  Youtube,
  Copy,
  Search,
  CheckCircle,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
    id: "tiktok-downloader",
    name: "TikTok Downloader",
    description: "Download TikTok videos without watermarks in high definition. Save your favorite short videos effortlessly.",
    icon: Download,
    href: "/social-media-tools/tiktok-downloader",
  },
  {
    id: "instagram-downloader",
    name: "Instagram Downloader",
    description: "Download Instagram posts, reels, stories, and images in HD quality. Preserve your favorite moments from Instagram.",
    icon: Download,
    href: "/social-media-tools/instagram-downloader",
  },
  {
    id: "facebook-downloader",
    name: "Facebook Downloader",
    description: "Download public Facebook videos in HD quality directly to your device. Simple, fast, and reliable.",
    icon: Download,
    href: "/social-media-tools/facebook-downloader",
  },
  {
    id: "x-video-downloader",
    name: "X Video Downloader",
    description: "Download videos from X (formerly Twitter) in high definition without any watermarks. Save important clips and moments.",
    icon: Download,
    href: "/social-media-tools/x-video-downloader",
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
                color="orange"
              />
            </div>

            <div className="mb-16 bg-card border border-border/40 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">How to Use Our Downloaders</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Copy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-heading-accent mb-2">1. Copy the URL</h3>
                  <p className="text-sm text-muted-foreground">Navigate to the video or media you want to download on its respective platform and copy its URL from the address bar or share menu.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-heading-accent mb-2">2. Paste and Search</h3>
                  <p className="text-sm text-muted-foreground">Go to the specific downloader tool on our site, paste the URL into the input field, and click the 'Download' button.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-heading-accent mb-2">3. Choose & Save</h3>
                  <p className="text-sm text-muted-foreground">Our tool will process the link and provide you with various download options. Choose your preferred format and quality, and save the file to your device.</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Our Suite of Downloaders</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {downloaders.map((downloader) => {
                  const Icon = downloader.icon
                  return (
                    <Link
                      key={downloader.id}
                      href={downloader.href}
                      className="bg-card border border-border/40 rounded-xl p-6 hover:border-border/70 transition-all duration-300 group relative h-full flex flex-col"
                    >
                      <div className="absolute top-4 right-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-foreground" />
                        </div>
                      </div>
                      <div className="pr-12 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-heading-accent mb-3 group-hover:text-heading-accent transition-colors">
                          {downloader.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {downloader.description}
                        </p>
                        <div className="flex items-center gap-2 text-foreground group-hover:text-foreground transition-colors">
                          <span className="text-sm font-bold">Try Now</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="space-y-16 mb-16">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">A Multi-Platform Solution for All Your Media Needs</h2>
                <p>In today's digital world, content is spread across countless platforms. That's why we've designed our suite of downloaders to be a versatile, all-in-one solution. Whether you're looking to save an educational lecture from YouTube, a viral dance from TikTok without the watermark, or a cherished family video from Facebook, our tools have you covered. We understand that each platform has its unique content formats, from Instagram's Reels and Stories to the concise video clips on X (formerly Twitter). Our service is engineered to handle these different formats seamlessly, providing you with a consistent and reliable experience no matter where the content originates. This multi-platform capability saves you the hassle of searching for a different tool for each site, making FastTools your go-to destination for saving online media.</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Understanding Video and Audio Quality Options</h2>
                <p>When you download a video, quality matters. Our tools are designed to give you control over the final output, ensuring the file meets your specific needs. For most videos, we offer a range of resolution options, including High Definition (HD) 1080p for crisp, clear playback on large screens, and Standard Definition (SD) 720p or 480p for smaller file sizes that are perfect for mobile viewing or quick sharing. This flexibility ensures you get the content you want in the format you need, optimized for your use case.</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Safe, Secure, and Ethical Downloading</h2>
                <p>Your online safety is our top priority. Many online downloader tools are cluttered with intrusive ads, pop-ups, and potentially malicious software. We've built our platform to be clean, secure, and respectful of your privacy. Our website is protected with SSL encryption, ensuring a secure connection between your browser and our servers. Furthermore, we do not require you to register an account or provide any personal information to use our tools. While our service is designed to be safe and easy to use, we also encourage ethical downloading practices. It's important to remember that most content on these platforms is protected by copyright. Our tools are intended for personal use, such as downloading your own content or saving publicly available media for offline viewing. We urge all users to respect the intellectual property rights of creators and to ensure they have the legal right to download and use any content.</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                {faqItems.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center text-xs text-muted-foreground max-w-3xl mx-auto">
              <p><strong>Disclaimer:</strong> Our tools are intended for personal use only. Please respect the intellectual property rights of content creators. It is your responsibility to ensure that you have the right to download and use any content accessed through our service. We do not host or store any copyrighted material on our servers.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
