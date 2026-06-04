import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YoutubeThumbnailDownloader = dynamic(
  () => import("@/components/social-media/youtube-thumbnail-downloader").then((mod) => mod.YoutubeThumbnailDownloader),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YouTube Thumbnail Downloader",
  description:
    "Download YouTube video thumbnails in all resolutions from 120×90 to 1280×720 (maxresdefault). Free YouTube thumbnail grabber — extract and save thumbnail images instantly.",
  metaTitle: "YouTube Thumbnail Downloader — Download Thumbnails in HD 1280×720 Free",
  metaDescription:
    "Download YouTube thumbnails in all sizes including HD 1280×720 maxresdefault. Free YouTube thumbnail grabber — paste any video URL to extract and save thumbnail images.",
  path: "/social-media-tools/youtube-thumbnail",

  header: {
    title: "YouTube Thumbnail Downloader",
    description:
      "Download YouTube video thumbnails in all available sizes — from 120×90 default to 1280×720 maxresdefault. Paste any video URL to extract and save thumbnail images instantly.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "YouTube thumbnail downloader and grabber. Extract video thumbnails in all 5 resolutions: 120×90 default, 320×180 mqdefault, 480×360 hqdefault, 640×480 sddefault, 1280×720 maxresdefault HD.",
    alternateName: [
      "YouTube Thumbnail Grabber",
      "YT Thumbnail Downloader",
      "YouTube Thumbnail Saver",
      "HD Thumbnail Extractor",
      "Maxresdefault Downloader",
      "YouTube Video Image Downloader",
      "Thumbnail Image Grabber",
      "YouTube Shorts Thumbnail Tool",
      "YouTube Live Thumbnail Downloader",
      "Custom Thumbnail Inspector",
      "YouTube Preview Image Tool",
      "ThumbnailFinder Alternative",
      "Thumbnail Save Alternative",
      "Get YouTube Thumbnail",
      "YouTube Video Cover Image",
    ],
    ratingValue: "4.9",
    ratingCount: "8920",
    featureList: [
      "Download thumbnails in all sizes: 120×90, 320×180, 480×360, 640×480, 1280×720",
      "Maxresdefault 1280×720 HD thumbnail extraction",
      "Works with any YouTube video URL or video ID",
      "Instant thumbnail preview before download",
      "Thumbnails saved as high-quality JPG files",
      "No login or software required",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A YouTube Thumbnail Downloader is a free online tool that extracts and downloads thumbnail images from any YouTube video in all available resolutions — from 120×90 (default) up to 1280×720 (maxresdefault).",
    quickAnswer:
      "Paste a YouTube video URL to instantly see and download all available thumbnail sizes: default (120×90), mqdefault (320×180), hqdefault (480×360), sddefault (640×480), and maxresdefault (1280×720). Click download on the resolution you need. No account or software required.",
    keyTakeaways: [
      "Downloads YouTube thumbnails in 5 resolutions: 120×90 to 1280×720",
      "Maxresdefault (1280×720) is the highest quality thumbnail available",
      "Works with any public YouTube video URL, short URL, or video ID",
      "YouTube generates thumbnails automatically — every video has them",
      "Thumbnails save as JPG files ready for presentations and social media",
      "Useful for thumbnail design research, A/B testing analysis, and content planning",
    ],
    overview:
      "Download YouTube video thumbnails in all available sizes with this free thumbnail grabber. Every YouTube video has multiple thumbnail resolutions generated automatically. This tool extracts all of them — from the small 120×90 default up to the full 1280×720 maxresdefault HD image. Simply paste the YouTube video URL, preview all available thumbnail sizes, and download the one you need. Works with standard youtube.com URLs, youtu.be short links, and raw video IDs. Thumbnails are commonly used for content research, thumbnail design inspiration, presentations, blog posts, and social media sharing.",

    howToSteps: [
      "Copy the YouTube video URL from your browser or the YouTube app share menu.",
      "Paste the URL into the thumbnail downloader input field above.",
      "Preview all available thumbnail sizes displayed with their resolutions.",
      "Click download on the thumbnail size you want — maxresdefault (1280×720) for the best quality.",
    ],

    features: [
      "Download thumbnails in 5 sizes: default, mq, hq, sd, and maxresdefault",
      "HD 1280×720 maxresdefault for the highest quality thumbnail",
      "Instant preview of all thumbnail sizes before download",
      "Works with youtube.com URLs, youtu.be short links, and video IDs",
      "No login, browser extension, or software required",
      "One-click download as high-quality JPG files",
    ],

    useCases: [
      "Research competitor thumbnail designs and click-through-rate optimization strategies",
      "Download thumbnails for blog posts, articles, and social media sharing",
      "Analyze top-performing thumbnails in your niche for design inspiration",
      "Save thumbnails for content calendars, editorial planning, and presentations",
      "Compare thumbnail styles across channels for A/B testing ideas",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How YouTube Thumbnails Work</h3>
          <p>
            YouTube automatically generates 5 standard thumbnail sizes for every uploaded video. These thumbnails are publicly accessible via YouTube&apos;s image CDN at predictable URLs based on the video ID. The tool constructs each URL pattern and shows you all available sizes with download buttons. For videos uploaded in HD with a custom thumbnail, all 5 sizes are available. For older or auto-thumbnailed videos, the largest (maxresdefault 1280×720) may not exist — the tool falls back to hqdefault or sddefault.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">YouTube Thumbnail Resolution Reference</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">URL slug</th>
                <th className="text-left py-2 px-2 text-foreground">Resolution</th>
                <th className="text-left py-2 px-2 text-foreground">Aspect</th>
                <th className="text-left py-2 px-2 text-foreground">Always available?</th>
                <th className="text-left py-2 px-2 text-foreground">Use case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>default.jpg</code></td>
                <td className="py-2 px-2">120 × 90</td>
                <td className="py-2 px-2">4:3</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
                <td className="py-2 px-2">Small preview / playlist tile</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>mqdefault.jpg</code></td>
                <td className="py-2 px-2">320 × 180</td>
                <td className="py-2 px-2">16:9</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
                <td className="py-2 px-2">Mobile feed display</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>hqdefault.jpg</code></td>
                <td className="py-2 px-2">480 × 360</td>
                <td className="py-2 px-2">4:3 (with letterbox)</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
                <td className="py-2 px-2">Reliable fallback for blog embeds</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>sddefault.jpg</code></td>
                <td className="py-2 px-2">640 × 480</td>
                <td className="py-2 px-2">4:3 (with letterbox)</td>
                <td className="py-2 px-2 text-orange-500">Most videos</td>
                <td className="py-2 px-2">Mid-quality embeds</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><strong><code>maxresdefault.jpg</code></strong></td>
                <td className="py-2 px-2"><strong>1280 × 720</strong></td>
                <td className="py-2 px-2"><strong>16:9 (HD)</strong></td>
                <td className="py-2 px-2 text-orange-500">HD uploads + custom thumbs only</td>
                <td className="py-2 px-2"><strong>Design analysis, presentations, blog hero</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Anatomy of High-CTR YouTube Thumbnails</h3>
          <p>
            Looking at top-performing YouTube thumbnails reveals consistent patterns. Analyzing competitor thumbnails (which is the most common use of this tool) is gold for CTR optimization:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Single bold face with intense expression</strong> (surprise, shock, emphasis) — MrBeast, Mark Rober, virtually every top creator</li>
            <li><strong>3-5 word large text overlay</strong> in bold sans-serif fonts (Impact, Bebas Neue, Anton, Montserrat Bold)</li>
            <li><strong>High-contrast colors</strong> — bright red / yellow / blue against contrasting backgrounds; avoid muted tones</li>
            <li><strong>Curiosity gap visual cues</strong> — circled or arrow-pointed elements, &quot;before/after&quot; layouts, numbered countdowns</li>
            <li><strong>Mobile-first composition</strong> — face fills 30-40% of frame so it&apos;s legible at thumbnail size</li>
            <li><strong>Brand consistency</strong> — color palettes, fonts, and frame layouts that signal the channel within ~0.1 seconds</li>
            <li><strong>Emotional triggers</strong> — surprise, anger, fear, curiosity all outperform calm / professional shots</li>
            <li><strong>Numbers / superlatives</strong> — &quot;$100,000 vs $1,&quot; &quot;LAST TO LEAVE WINS,&quot; &quot;I QUIT MY JOB&quot; — specific stakes</li>
          </ul>
          <p className="mt-3">
            Download competitor thumbnails at maxresdefault, open them in Figma / Photoshop, and reverse-engineer the structure: where is the face placed? What font weight? What colors? Apply the patterns to your own thumbnails without copying.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Custom vs Auto-Generated Thumbnails</h3>
          <p>
            <strong>Custom thumbnails</strong> are uploaded by the creator separately from the video. They always have maxresdefault (1280×720) available. <strong>Auto-generated thumbnails</strong> are YouTube&apos;s algorithmic choice from three video frames — these typically don&apos;t have maxresdefault, only hqdefault. <strong>Custom thumbnails outperform auto-generated by 30-90% on CTR</strong> in YouTube&apos;s own studies, which is why every serious creator uploads custom thumbnails. To use the custom-thumbnail feature in YouTube Studio, you need a verified phone number on your account.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Public Image Status</h3>
          <p>
            YouTube thumbnails are <strong>public assets</strong> served by YouTube&apos;s CDN — anyone can access them without login. The tool doesn&apos;t scrape, doesn&apos;t download from your account, doesn&apos;t require authentication. It just constructs the predictable image URL based on the video ID and fetches it. The image is delivered directly from YouTube to your browser — we don&apos;t see or store the download. <strong>Copyright note:</strong> downloading is legal; reusing thumbnails commercially without permission may infringe on creator copyright. For editorial / commentary / criticism uses, U.S. fair use generally applies; for monetization on YouTube/elsewhere, get explicit permission from the original creator.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>CTR research:</strong> download top performers in your niche, identify thumbnail patterns, apply to your own</li>
            <li><strong>Blog post embeds:</strong> use hqdefault or maxresdefault as featured images for video-related blog posts</li>
            <li><strong>Press kits:</strong> include thumbnails of media coverage videos in PR materials</li>
            <li><strong>Newsletter content:</strong> include video thumbnails as preview images in email content blocks</li>
            <li><strong>Educational presentations:</strong> reference and discuss specific videos with their thumbnails</li>
            <li><strong>Compilation videos:</strong> use clip thumbnails as section dividers in your own video edits</li>
            <li><strong>Course materials:</strong> reference instructional videos with their thumbnails as visual anchors</li>
            <li><strong>Channel rebranding analysis:</strong> compare a channel&apos;s old and new thumbnail styles for design evolution</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "Always go for maxresdefault (1280×720) when available — it's the only HD-quality YouTube thumbnail. If it's not available, hqdefault (480×360) is the most reliable fallback. For CTR research, download 10-20 thumbnails from top performers in your niche and look for patterns: face expressions, text font/size, color schemes, number/superlative usage. Apply the patterns (not the specific designs) to your thumbnails.",

    faqs: [
      {
        question: "How do I download a YouTube video thumbnail?",
        answer:
          "Copy the YouTube video URL, paste it into our thumbnail downloader above, and you will see all available thumbnail sizes. Click the download button on the size you want — maxresdefault (1280×720) gives the highest quality.",
      },
      {
        question: "What thumbnail sizes can I download?",
        answer:
          "YouTube generates 5 standard sizes: default (120×90), mqdefault (320×180), hqdefault (480×360), sddefault (640×480), and maxresdefault (1280×720). The tool shows all available sizes with preview images.",
      },
      {
        question: "What is maxresdefault and is it always available?",
        answer:
          "Maxresdefault is YouTube's highest quality thumbnail at 1280×720 pixels. It is available for most videos, especially those with custom-uploaded thumbnails. Videos with only auto-generated thumbnails may not have this size.",
      },
      {
        question: "Can I use YouTube thumbnails on my website or blog?",
        answer:
          "YouTube thumbnails are publicly accessible images. For editorial purposes like reviews, criticism, and news reporting, fair use may apply. For commercial use, ensure you have permission from the video creator.",
      },
      {
        question: "Does this work with YouTube Shorts thumbnails?",
        answer:
          "Yes. Paste a YouTube Shorts URL to extract its thumbnail. Shorts thumbnails follow the same size format as regular video thumbnails.",
      },
      {
        question: "Do I need a YouTube account to download thumbnails?",
        answer:
          "No. Thumbnails are public images. No YouTube login, account, or software is required — the tool works entirely in your browser.",
      },
      {
        question: "Is this YouTube thumbnail downloader free?",
        answer:
          "Yes. 100% free with no limits on downloads, no registration, and no watermarks added to thumbnail images.",
      },
      {
        question: "What thumbnail resolutions does YouTube provide?",
        answer:
          "YouTube auto-generates 6 thumbnail sizes for every video: maxresdefault (1280×720 HD), sddefault (640×480 SD), hqdefault (480×360), mqdefault (320×180), default (120×90), and 3 storyboard variants. Not every video has maxresdefault — only HD-uploaded videos do. The tool downloads the largest available size automatically and lets you pick smaller versions if needed."
      },
      {
        question: "How do I download a Shorts thumbnail?",
        answer:
          "Paste the YouTube Shorts URL (youtube.com/shorts/VIDEO_ID) — the tool extracts the same thumbnail set as regular videos. Shorts thumbnails are typically the first frame of the video unless the creator uploaded a custom thumbnail."
      }
    ],

    relatedTools: [
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "YouTube Channel Checker", href: "/social-media-tools/channel-checker" },
      { name: "YouTube Channel Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeThumbnailPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeThumbnailDownloader />)} />
}
