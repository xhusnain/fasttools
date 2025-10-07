import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { TiktokDownloader } from "@/components/tiktok-downloader"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "TikTok Video Downloader - Download Without Watermark | FastTools",
  description:
    "Download TikTok videos without watermark. Free TikTok downloader tool for educational purposes. Always respect content creator rights.",
  keywords:
    "tiktok downloader, download tiktok video, tiktok no watermark, tiktok video download, save tiktok video, tiktok saver, tiktok mp4 download, download reels, short video downloader, download tiktok hd, tiktok url download, social video downloader, creator tools, content repurposing, video for editing, download for educational use, save for analysis, caption backup, tiktok thumbnail, mobile downloader, desktop downloader, fast tiktok download, free tiktok downloader, online tiktok downloader, watermark remover (not modifying source), brand asset collection, editorial research, social media tools, video seo, content library, video archive, reuse your own content, download your own tiktoks, best practices, copyright respect, creator rights, fair use guidance",
  alternates: {
    canonical: "https://fasttools.store/social-media-tools/tiktok-downloader",
  },
  openGraph: {
    title: "TikTok Video Downloader - No Watermark | FastTools",
    description:
      "Download TikTok videos in HD without watermark. Paste link and get direct download for video or audio.",
    url: "https://fasttools.store/social-media-tools/tiktok-downloader",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TikTok Video Downloader - FastTools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Video Downloader - No Watermark | FastTools",
    description:
      "Free TikTok downloader. Paste link, get HD video or MP3. Works on mobile and desktop.",
    images: ["/og-image.png"],
  },
}

export default function TiktokDownloaderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I download a TikTok video without watermark?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Copy the TikTok link, paste it into the input, select Get Download Links, then choose the No Watermark option.",
                },
              },
              {
                "@type": "Question",
                name: "Is using a TikTok downloader legal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Only download content you own or are authorized to use. Always follow TikTok's terms and applicable laws.",
                },
              },
              {
                "@type": "Question",
                name: "Does this work on mobile and desktop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The tool runs in your browser on phones, tablets, and computers.",
                },
              },
              {
                "@type": "Question",
                name: "Why do some links fail to load?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Private, age-restricted, or region-limited videos may not be available. Try another link or check your connection.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Download TikTok video without watermark",
            description:
              "Step-by-step guide to save a TikTok video in HD without watermark using FastTools.",
            totalTime: "PT1M",
            supply: [{ "@type": "HowToSupply", name: "TikTok video URL" }],
            tool: [{ "@type": "HowToTool", name: "Web browser" }],
            step: [
              {
                "@type": "HowToStep",
                name: "Copy the TikTok link",
                text: "Open the TikTok app or website and copy the video URL.",
              },
              {
                "@type": "HowToStep",
                name: "Paste into the downloader",
                text: "Paste the link into the input field on the TikTok Video Downloader page.",
              },
              {
                "@type": "HowToStep",
                name: "Get download links",
                text: "Click Get Download Links and wait for processing.",
              },
              {
                "@type": "HowToStep",
                name: "Choose format",
                text: "Select Download Video (No Watermark), Download Video (Watermark), or Download Audio (MP3).",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "TikTok Video Downloader",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            url: "https://fasttools.store/social-media-tools/tiktok-downloader",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description:
              "Free online tool to download TikTok videos without watermark. Paste URL to get direct MP4 and MP3 links.",
          }),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Tools", href: "/social-media-tools" },
          { label: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
        ]}
      />

      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">TikTok Video Downloader</h1>
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          Download TikTok videos without watermark. For educational purposes only. Always respect content creator rights
          and copyright laws.
        </p>
      </div>

      {/* Top Content Ad */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>

      <TiktokDownloader />
      
      {/* Center Content Ad */}
      <div className="my-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>

      <div className="mt-12 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">How to Use the TikTok Video Downloader</h2>
        <ol>
          <li>Copy the TikTok video link from the app or web.</li>
          <li>Paste the URL into the input field above and select Get Download Links.</li>
          <li>Choose Download Video (No Watermark), Download Video (Watermark), or Download Audio (MP3).</li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground">About Our Free TikTok Downloader</h2>
        <p>
          FastTools provides a simple, fast, and free TikTok downloader to save videos in HD quality without watermark.
          It works directly in your browser and supports both desktop and mobile. Use it to archive your own videos,
          repurpose content, or back up clips for editing. Always respect creator rights and platform policies.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
        <h3>Can I download TikTok videos without watermark?</h3>
        <p>Yes. After processing, select the No Watermark option to download the MP4 file.</p>
        <h3>Why is my link not working?</h3>
        <p>Private, age-restricted, or region-limited videos might not be available for download.</p>
        <h3>Is this TikTok downloader free?</h3>
        <p>Yes, it is completely free to use from any modern browser.</p>
        <h3>Does it work on iPhone and Android?</h3>
        <p>Yes. The tool runs in your browser on iOS and Android devices as well as on desktop.</p>

        <h2 className="text-2xl font-semibold text-foreground">Related Tools</h2>
        <p>
          Explore more social tools like <a href="/social-media-tools/youtube-thumbnail">YouTube Thumbnail Downloader</a>,
          <a href="/social-media-tools/instagram-dp" className="ml-1">Instagram DP Viewer</a>, and
          <a href="/seo-tools/hashtags" className="ml-1">Hashtag Generator</a> to optimize your social media workflow.
        </p>
      </div>

      {/* Bottom Content Ad */}
      <div className="mt-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>
    </div>
  )
}
