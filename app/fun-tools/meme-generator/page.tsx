import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const MemeGenerator = dynamic(
  () => import("@/components/fun-tools/meme-generator").then((mod) => mod.MemeGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Meme Generator",
  description:
    "Free online meme generator with 100+ trending templates, custom text overlay, drag-and-drop positioning, multiple fonts, and instant PNG download. No watermark, no signup, no ads.",
  metaTitle: "Free Meme Generator Online - Create Memes Instantly",
  metaDescription:
    "Create memes free online with 100+ trending templates. Custom text, fonts, colors & outlines. Drag-and-drop positioning. Download PNG with no watermark. No signup needed.",
  path: "/fun-tools/meme-generator",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Free online meme generator with 100+ popular meme templates, custom image upload, multiple text boxes with drag-and-drop positioning, 9 font families (Impact, Arial, Comic Sans MS, etc.), adjustable font size (12-100px), text color & outline color pickers, outline width control, bold/italic/alignment options, word wrap, instant PNG download with no watermark, mobile touch support, and template search. 100% client-side processing.",
    featureList: [
      "100+ popular meme templates from trending internet memes",
      "Custom image upload (JPG, PNG, GIF, WebP) or drag-and-drop",
      "Multiple text boxes with independent positioning",
      "Drag-and-drop text repositioning on canvas",
      "9 font families: Impact, Arial, Arial Black, Comic Sans MS, Courier New, Georgia, Helvetica, Times New Roman, Verdana",
      "Font size slider (12px to 100px)",
      "Text color picker with hex display",
      "Outline color and width control (0-10px)",
      "Bold, italic, and text alignment (left/center/right)",
      "Automatic word wrap for long text",
      "Instant PNG download with no watermark",
      "Template search with real-time filtering",
      "Mobile touch support for text dragging",
      "100% client-side — images never leave your device",
    ],
    softwareRequirements: "Modern web browser with JavaScript and Canvas API support",
  },

  header: {
    title: "Free Meme Generator Online",
    description:
      "Create hilarious memes in seconds with 100+ templates, custom text, and instant download. No watermark, no signup, completely free.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Meme Generator", href: "/fun-tools/meme-generator" },
  ],

  content: {
    definition:
      "A meme generator is an online tool that lets you create image-based memes by overlaying customizable text on popular templates or your own photos, producing shareable content for social media, messaging, and entertainment.",

    quickAnswer:
      "Choose a template from 100+ popular memes (or upload your own image), type your top and bottom text, customize font/color/outline, drag text to position it perfectly, and click Download to save your meme as a PNG — no watermark, no signup, completely free.",

    keyTakeaways: [
      "100+ trending meme templates available instantly, with search to find the perfect one",
      "Fully customizable text: 9 fonts, adjustable size, color, outline, bold/italic, and alignment",
      "Drag-and-drop text positioning lets you place text anywhere on the image",
      "Download as high-quality PNG with absolutely no watermark or branding",
      "100% client-side processing — your images never leave your device, ensuring complete privacy",
      "Works on desktop and mobile with touch support for text dragging",
    ],

    overview:
      "This meme generator lets you create memes directly in your browser. Pick from 100+ trending templates or upload your own image, add multiple text boxes with full styling control (font, size, color, outline), drag them to the perfect position, and download your creation as a high-quality PNG. Everything runs client-side — your images never leave your device. There are no watermarks, no accounts to create, no ads, and no limits on how many memes you can make.",

    howToSteps: [
      "Choose a meme template from the gallery (search to find specific memes) or click 'Upload' to use your own image.",
      "Edit the default top and bottom text, or click 'Add' to create additional text boxes. Type your caption in the text layer panel.",
      "Customize each text box: change font, size, color, outline color/width, bold, italic, or alignment using the style controls.",
      "Drag text directly on the canvas to position it exactly where you want. Click a text layer in the panel to select it.",
      "Click 'Download' to save your meme as a PNG file with no watermark. Share it on social media, messaging apps, or anywhere you want.",
    ],

    features: [
      "100+ Trending Templates: Browse and search popular meme formats — Drake, Distracted Boyfriend, Two Buttons, Expanding Brain, and more.",
      "Custom Image Upload: Use your own photos via file picker or drag-and-drop. Supports JPG, PNG, GIF, and WebP formats.",
      "Multiple Text Boxes: Add unlimited text layers, each independently styled and positioned.",
      "Drag-and-Drop Positioning: Click and drag text directly on the canvas. Works with mouse and touch.",
      "9 Font Families: Impact (classic meme font), Arial, Arial Black, Comic Sans MS, Courier New, Georgia, Helvetica, Times New Roman, Verdana.",
      "Full Text Styling: Adjustable font size (12-100px), bold, italic, left/center/right alignment.",
      "Color Customization: Text color picker, outline color picker, and outline width slider (0-10px).",
      "No Watermark Download: Save your meme as a high-quality PNG file with zero branding or watermarks.",
      "Template Search: Real-time search to instantly find the template you need from 100+ options.",
      "Privacy First: 100% client-side. Your images are processed locally and never uploaded to any server.",
      "Mobile Friendly: Fully responsive with touch support for dragging text on phones and tablets.",
      "Automatic Word Wrap: Long text automatically wraps to fit within the image width.",
    ],

    useCases: [
      "Social Media Content: Create funny memes for Twitter/X, Instagram, Reddit, Facebook, and TikTok.",
      "Group Chats: Make inside jokes and reaction images for WhatsApp, Discord, Slack, and Telegram.",
      "Marketing & Branding: Create relatable meme content for brand social media accounts.",
      "Classroom & Education: Teachers making engaging, humorous content to connect with students.",
      "Work & Office Humor: Lighten up Slack channels and team meetings with custom memes.",
      "Event Celebration: Create personalized memes for birthdays, weddings, and milestones.",
      "Content Creation: YouTubers, bloggers, and streamers making thumbnails and reaction images.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Makes a Great Meme?</h3>
          <p>
            The best memes combine a relatable situation with unexpected humor. The image provides
            context, and the text delivers the punchline. Classic meme formats like Drake,
            Distracted Boyfriend, and Expanding Brain work because people instantly recognize the
            template and understand the joke structure. The key is matching the right template to
            your idea — our search feature helps you find the perfect format from 100+ options.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Impact Font Is the Meme Standard</h3>
          <p>
            Impact font became the standard for memes because of its bold, condensed letterforms
            with thick strokes that remain readable at any size, even on small mobile screens.
            The white text with black outline combination (which this tool defaults to) ensures
            text is legible against any background color or image. While Impact remains the
            classic choice, modern memes increasingly use Arial, Helvetica, and even Comic Sans
            for different tones — all available in this generator.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Memes in Digital Marketing</h3>
          <p>
            Brands increasingly use memes in their social media strategy because meme content
            generates 60% more organic engagement than traditional marketing posts. Wendy&apos;s,
            Netflix, and Duolingo are examples of brands that built massive followings through
            meme marketing. The key is authenticity — forced or outdated memes can backfire.
            This generator helps marketers quickly create on-trend content using the latest
            templates.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Security</h3>
          <p>
            Unlike many online meme generators that upload your images to their servers, this tool
            processes everything locally in your browser using the HTML5 Canvas API. Your images
            never leave your device, making it safe to use with personal photos, work-related
            content, or any image you wouldn&apos;t want stored on a third-party server. There&apos;s no
            account creation, no tracking, and no ads.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For the most shareable memes, keep text short and punchy — the best memes deliver the joke in under 10 words. Use ALL CAPS for classic meme style (Impact font, white text, black outline). For modern memes, try lowercase with a clean sans-serif font like Arial or Helvetica.",

    faqs: [
      {
        question: "What is a meme generator?",
        answer:
          "A meme generator is an online tool that lets you create image-based memes by placing customizable text over popular template images or your own photos. You choose a template, add your caption text, style it, and download the finished meme to share on social media.",
      },
      {
        question: "Is this meme generator completely free?",
        answer:
          "Yes, 100% free with no hidden costs. There are no watermarks on your downloads, no account creation required, no premium tiers, and no ads. You can create unlimited memes.",
      },
      {
        question: "Do you store or upload my images?",
        answer:
          "No. This meme generator runs entirely in your browser using the HTML5 Canvas API. Your images are processed locally on your device and are never uploaded to any server. Your photos and created memes remain completely private.",
      },
      {
        question: "How many meme templates are available?",
        answer:
          "The generator includes 100+ popular meme templates that are regularly updated, including classics like Drake, Distracted Boyfriend, Two Buttons, Change My Mind, Expanding Brain, Bernie Sanders, Woman Yelling at Cat, and many more. You can also upload your own custom images.",
      },
      {
        question: "Can I use my own images to make memes?",
        answer:
          "Yes. Click the 'Upload' tab to upload any image from your device via file picker or drag-and-drop. The generator supports JPG, PNG, GIF, and WebP formats. There are no file size limits.",
      },
      {
        question: "What fonts are available for meme text?",
        answer:
          "The generator includes 9 fonts: Impact (the classic meme font), Arial, Arial Black, Comic Sans MS, Courier New, Georgia, Helvetica, Times New Roman, and Verdana. Each text box can use a different font.",
      },
      {
        question: "Can I add more than two text boxes?",
        answer:
          "Yes. While the generator starts with the classic top and bottom text layout, you can add unlimited additional text boxes by clicking the 'Add' button. Each text box can be independently positioned, styled, and colored.",
      },
      {
        question: "How do I position text on the meme?",
        answer:
          "Click and drag any text directly on the canvas to move it to the exact position you want. This works with both mouse on desktop and touch on mobile devices. Click a text layer in the side panel to select it first.",
      },
      {
        question: "What format are downloaded memes?",
        answer:
          "Memes are downloaded as high-quality PNG files with no watermark or branding. PNG preserves text sharpness and supports transparency. The filename includes a timestamp for easy organization.",
      },
      {
        question: "Does this work on mobile phones?",
        answer:
          "Yes, the meme generator is fully responsive and works on smartphones and tablets. Touch support lets you drag text to reposition it on mobile, and all controls are optimized for smaller screens.",
      },
      {
        question: "Why is Impact the most popular meme font?",
        answer:
          "Impact font became the meme standard because its bold, condensed design with thick strokes stays readable even on small screens and busy backgrounds. Combined with white text and a black outline, it's legible against virtually any image — which is why it's been the go-to meme font since the early 2010s.",
      },
      {
        question: "Can I use memes I create for commercial purposes?",
        answer:
          "The memes you create with your own images are yours to use however you want, including commercially. However, meme templates based on copyrighted images (movies, TV shows, etc.) exist in a legal gray area. Most meme usage falls under fair use for commentary and parody, but consult a legal professional for specific commercial use cases.",
      },
      {
        question: "How is this different from Imgflip or other meme generators?",
        answer:
          "Unlike most meme generators, this tool has no watermarks (even on free tier), no account required, no ads, and processes everything locally for privacy. It offers the same popular templates plus custom upload, multiple independently-styled text boxes, drag-and-drop positioning, and full text styling — all completely free.",
      },
      {
        question: "Can I make memes without any text?",
        answer:
          "Yes. You can delete all text boxes except one (by clicking the trash icon), then clear its text content. Or simply leave the text fields empty — only text that has content is rendered on the canvas.",
      },
    ],

    relatedTools: [
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "Pet Names Generator", href: "/ai-tools/pet-names" },
      { name: "QR Code Generator", href: "/ai-tools/qr-generator" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function MemeGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<MemeGenerator />)} />
}
