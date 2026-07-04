// Intent-variant pages for the AI Image Detector (audit 04b: the only
// mid-competition INVEST in image-tools; "spawn midjourney detector,
// 'is this image ai generated', 'ai profile picture detector' variants").
// Same 5-signal forensic tool; each page owns one search intent with
// genuinely different content: generator-specific tells, a manual checklist,
// and the fake-profile playbook respectively.

import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AIImageDetector = dynamic(
  () => import("@/components/image/ai-image-detector").then((mod) => mod.AIImageDetector),
  { loading: () => <ToolLoader /> }
)

interface DetectorVariant {
  slug: string
  toolName: string
  metaTitle: string
  metaDescription: string
  headerTitle: string
  headerDescription: string
  definition: string
  quickAnswer: string
  overview: string
  keywords: string[]
  keyTakeaways: string[]
  aboutSections: Array<{ heading: string; body: string }>
  proTip: string
  faqs: Array<{ question: string; answer: string }>
}

export const detectorVariants: Record<string, DetectorVariant> = {
  "midjourney-detector": {
    slug: "midjourney-detector",
    toolName: "Midjourney Detector",
    metaTitle: "Midjourney Detector — Check if an Image Is Midjourney AI",
    metaDescription:
      "Detect Midjourney images: upload a photo and run 5 forensic signals plus the Midjourney-specific tells — texture gloss, lighting perfection, hands, and metadata. Free, runs in your browser.",
    headerTitle: "Midjourney Detector",
    headerDescription:
      "Upload an image to check for Midjourney generation — forensic analysis plus the tells specific to Midjourney's aesthetic. Runs locally; your image is never uploaded.",
    definition:
      "A Midjourney detector analyzes an image for the statistical and visual signatures of Midjourney's diffusion model — combining general AI-generation forensics (noise patterns, frequency artifacts, metadata) with the model's characteristic aesthetic tells.",
    quickAnswer:
      "Upload the image above — the detector runs five forensic signals (noise fingerprint, frequency-domain artifacts, metadata, compression history, statistical texture analysis) in your browser. For Midjourney specifically, also weigh the aesthetic tells below: the glossy 'perfect' lighting, hyper-detailed textures that repeat on close inspection, and cinematic color grading that real photos rarely have straight out of camera.",
    overview:
      "Midjourney is the generator whose output people most often need to check — it dominates AI art shared on social media, and since v6 its photorealistic mode fools casual viewers reliably. Detection is therefore two-layered. The forensic layer (what the tool runs): diffusion models leave statistical fingerprints in noise distribution and frequency space that survive even screenshotting, and Midjourney images carry no camera EXIF (no shutter speed, no lens, no sensor noise profile). The aesthetic layer (what you check by eye, guided below): Midjourney has a house style — dramatic rim lighting, ultra-clean skin with pore-level 'detail' that's actually pattern, and compositional perfection — that persists even in photorealism mode. Neither layer alone is proof; together they're a strong verdict.",
    keywords: [
      "midjourney detector",
      "detect midjourney image",
      "is this image midjourney",
      "midjourney checker",
      "check if image is midjourney",
    ],
    keyTakeaways: [
      "Five forensic signals run locally: noise fingerprint, frequency artifacts, metadata, compression, texture statistics",
      "Midjourney tells: cinematic lighting, glossy 'perfected' surfaces, pattern-like fine detail, no camera EXIF",
      "v6+ photorealism beats the old tells (hands are mostly fixed) — forensics matter more than ever",
      "Screenshots strip metadata but NOT statistical fingerprints — the detector still works",
      "No detector is court-proof: treat results as strong evidence, not certainty",
    ],
    aboutSections: [
      {
        heading: "Midjourney's Tells, Version by Version",
        body: "The folk wisdom about AI hands is outdated — Midjourney v5 mostly fixed fingers, and v6+ renders hands correctly more often than not. What persists: text in images (signage, labels) still degrades into plausible-but-wrong glyphs on close inspection; fine repeating structures (fabric weave, hair strands, foliage) show pattern-like regularity where real photos show chaos; backgrounds get a characteristic painterly smear at mid-distance; and the lighting is the biggest tell of all — Midjourney lights everything like a $100k commercial shoot, with rim light, perfect exposure, and no blown highlights, which almost no real candid photo has. When someone claims a 'photo' and it looks professionally lit despite a casual context, weigh that heavily.",
      },
      {
        heading: "What Survives Screenshots and Re-Encoding",
        body: "Sharing chains launder the obvious evidence: a screenshot strips the missing-EXIF signal (screenshots legitimately have no camera data), and platform re-compression muddies compression-history analysis. What survives is the statistical layer — diffusion models synthesize noise differently from camera sensors, and that difference lives in the pixel statistics themselves, robust to one or two re-encodes. This is why the detector runs multiple signals and reports them separately: on a fresh export, metadata + statistics converge; on a much-reshared image, you lean on the statistical signals and the aesthetic checklist.",
      },
    ],
    proTip:
      "Zoom to 200% on any area of fine repeating detail — hair, grass, fabric. Midjourney's 'detail' is generated texture that repeats with unnatural rhythm; a real photo's detail is optically chaotic. This single check catches many v6 photorealistic images that pass at thumbnail size.",
    faqs: [
      {
        question: "Can you reliably detect Midjourney v6 images?",
        answer:
          "More reliably than by eye, less than perfectly. v6's photorealism defeats casual inspection, but the statistical fingerprints of diffusion generation remain, and Midjourney's aesthetic bias (lighting, texture regularity) persists even in photorealistic mode. Treat a multi-signal 'likely AI' as strong evidence and corroborate with context — where was it posted, by whom, does a reverse image search find an original?",
      },
      {
        question: "Does Midjourney watermark or tag its images?",
        answer:
          "Midjourney embeds C2PA/content-credentials metadata in some export paths, but it's trivially stripped by screenshots and most social platforms. Absence of a tag proves nothing; presence is a strong positive signal. The detector checks metadata as one of its five signals rather than relying on it.",
      },
      {
        question: "Is my image uploaded when I check it?",
        answer:
          "No — all five forensic signals run in your browser via JavaScript. The image never leaves your device, which matters when you're checking sensitive or unpublished material.",
      },
      {
        question: "Can this tell Midjourney apart from DALL-E or Stable Diffusion?",
        answer:
          "Attribution to a specific generator is much harder than detecting generation itself — the models share architecture families and their fingerprints overlap. The detector answers 'AI-generated or not' confidently; 'which model' is a judgment call the aesthetic tells (Midjourney's house style is the most distinctive) inform but don't prove.",
      },
    ],
  },

  "is-this-image-ai-generated": {
    slug: "is-this-image-ai-generated",
    toolName: "Is This Image AI-Generated",
    metaTitle: "Is This Image AI-Generated? — Check Any Photo Free",
    metaDescription:
      "Wondering if a photo is AI? Upload it — 5 forensic signals check noise, frequency artifacts, metadata, and texture statistics in your browser. Plus the 60-second manual checklist.",
    headerTitle: "Is This Image AI-Generated?",
    headerDescription:
      "Upload the image and find out — five forensic signals analyzed locally in your browser, plus the manual checklist for a second opinion. Nothing is uploaded.",
    definition:
      "Checking whether an image is AI-generated combines forensic analysis (noise fingerprints, frequency-domain artifacts, metadata, compression history, texture statistics) with visual inspection for the systematic errors generative models still make.",
    quickAnswer:
      "Upload the image above — the detector runs five forensic checks in your browser and reports a verdict with per-signal breakdown. For a fast manual second opinion: check hands and teeth, read any text in the image letter by letter, zoom into fine textures for unnatural repetition, look for physically impossible reflections or shadows, and ask whether the lighting is too perfect for the claimed context.",
    overview:
      "This question — is this image real? — is now part of basic media literacy: AI images headline fake news, drive romance scams, fabricate product reviews, and win photo contests. The reliable answer combines two things this page provides. First, the forensic tool: generative models synthesize images statistically unlike cameras, leaving fingerprints in noise and frequency space that survive casual re-sharing; the detector reads five such signals without your image ever leaving the browser. Second, the human checklist below — the systematic errors generators still make — because the strongest verdicts come from forensics and inspection agreeing, and because you'll often need to judge images where you can't run any tool (a projected slide, a printed flyer, someone else's phone).",
    keywords: [
      "is this image ai generated",
      "how to tell if an image is ai generated",
      "check if image is ai",
      "ai generated image checker",
      "real or ai photo",
    ],
    keyTakeaways: [
      "Five forensic signals, all in-browser: noise fingerprint, frequency artifacts, metadata, compression history, texture statistics",
      "The 60-second manual checklist: text, hands, textures at zoom, shadows/reflections, too-perfect lighting",
      "Missing camera EXIF is suggestive; screenshots make it meaningless — weigh signals together",
      "Reverse image search is the forgotten third tool: originals and earlier versions settle many cases",
      "Verdicts are probabilistic — strong evidence, not proof, in either direction",
    ],
    aboutSections: [
      {
        heading: "The 60-Second Manual Checklist",
        body: "(1) Read any text: signs, labels, jewelry engraving — generators produce glyph-shaped nonsense that passes at a glance and fails when actually read. (2) Count and inspect hands, teeth, and ears — much improved since 2023, still the most common failure site, especially in group shots and at image edges. (3) Zoom into fine texture — hair, fabric, foliage, skin pores: generated detail repeats with pattern-like rhythm; optical detail is chaotic. (4) Trace light and reflections — do shadows agree on one light source? Do mirrors, windows, and eyes reflect the scene that's actually there? (5) Context-check the perfection — studio-grade lighting on a claimed candid, flawless skin on a claimed selfie, and impossibly clean backgrounds are aesthetic tells. Two or more failures = treat as generated until proven otherwise.",
      },
      {
        heading: "What the Forensic Signals See That You Can't",
        body: "Camera sensors produce noise with a characteristic structure — correlated across color channels, shaped by the physical photosite grid, varying with ISO. Diffusion models produce statistically different 'noise' because theirs is synthesized, not sensed. Similar story in frequency space: generation and upscaling leave periodic artifacts invisible at normal viewing. These signals are the detector's core because they're robust to the things that defeat visual inspection — a photorealistic v6-era image with perfect hands and readable text can still carry generation statistics. The metadata check (camera EXIF present and coherent?) and compression-history analysis round it out; each signal is reported separately so you can see WHY the verdict is what it is.",
      },
      {
        heading: "When the Tool Says 'Real' — Stay Skeptical Anyway",
        body: "Two failure modes keep detection humble. False reals: heavy platform recompression, small crops, and aggressive filters can wash out generation fingerprints, and AI-edited (not fully generated) photos — a real photo with a generated background — mix both signatures. False AIs: heavy retouching, HDR processing, beauty filters, and AI-upscaled real photos can trip generated-texture heuristics. So use the triangle: forensic verdict + manual checklist + provenance (reverse image search, who posted it first, is there a higher-resolution original?). Confidence comes from agreement across all three, not from any single green checkmark.",
      },
    ],
    proTip:
      "Reverse-image-search before anything else when stakes are real — Google Lens or TinEye finding the same image on a stock-AI gallery, or an earlier UN-edited version, settles in ten seconds what forensics can only estimate.",
    faqs: [
      {
        question: "How can I tell if an image is AI-generated?",
        answer:
          "Run it through the detector above (five forensic signals, in-browser), then spend 60 seconds on the manual checks: read any text in the image, inspect hands and teeth, zoom into fine textures for unnatural repetition, verify shadows and reflections agree, and ask if the lighting is too perfect for the context. Forensics and inspection agreeing is a strong verdict.",
      },
      {
        question: "Are AI image detectors accurate?",
        answer:
          "Good ones are meaningfully better than human judgment, and multi-signal analysis beats single-signal tools — but none are infallible in either direction. Recompression can hide fingerprints (false 'real'), and heavy filters on real photos can mimic them (false 'AI'). Treat outputs as strong evidence to combine with provenance checks, not as proof.",
      },
      {
        question: "Can a screenshot of an AI image still be detected?",
        answer:
          "Often yes. Screenshotting strips metadata, but the statistical generation fingerprints live in the pixels themselves and survive a screenshot and moderate recompression. The detector weighs its signals accordingly — on screenshots, the verdict leans on noise and texture statistics rather than metadata.",
      },
      {
        question: "Is the image I upload stored anywhere?",
        answer:
          "No. Analysis runs entirely in your browser — the image is never transmitted, stored, or logged. That's deliberate: the images people most need to verify are often exactly the ones they shouldn't upload to a random server.",
      },
    ],
  },

  "ai-profile-picture-detector": {
    slug: "ai-profile-picture-detector",
    toolName: "AI Profile Picture Detector",
    metaTitle: "AI Profile Picture Detector — Spot Fake Profile Photos",
    metaDescription:
      "Check if a profile picture is AI-generated: upload it for 5-signal forensic analysis plus the fake-profile tells — GAN eye alignment, background smears, mismatched earrings. Free, private.",
    headerTitle: "AI Profile Picture Detector",
    headerDescription:
      "Upload a suspicious profile photo — dating match, new follower, LinkedIn connection — and check it for AI generation. Analysis runs locally; the photo is never uploaded.",
    definition:
      "An AI profile picture detector checks whether an account's photo is a generated face — combining forensic signals with the tells specific to face generators (StyleGAN's fixed eye geometry, background artifacts, accessory asymmetry) used at scale by fake accounts, bots, and romance scams.",
    quickAnswer:
      "Upload the profile photo above for the forensic verdict, then check the face-specific tells: on classic generated faces (StyleGAN/thispersondoesnotexist), the eyes sit at nearly identical pixel positions in every image, backgrounds dissolve into smears, earrings and glasses go asymmetric, and hair strands melt into skin. Newer diffusion-made profiles are cleaner — for those, the forensic signals and the account's behavior are the evidence.",
    overview:
      "Fake profile photos are the workhorse of online deception: romance-scam personas, bot networks, fake LinkedIn recruiters, sockpuppet reviewers, and catfish accounts overwhelmingly use generated faces because they're free, infinite, and reverse-image-search-proof — which is exactly the tell, since a REAL person's photo usually appears somewhere else online and a generated one never does. This page pairs the forensic detector with the two skills that catch fake profiles in practice: reading the generation artifacts specific to face generators, and reading the account around the photo. One photo, no tagged photos by others, recent join date, and too-attractive-too-generic presentation is the pattern regardless of what any detector says.",
    keywords: [
      "ai profile picture detector",
      "fake profile picture checker",
      "is this profile picture ai",
      "detect fake dating profile photo",
      "generated face detector",
    ],
    keyTakeaways: [
      "Forensic check + face-generator tells + account behavior = the working method",
      "StyleGAN-era tells: identical eye positioning, background smears, asymmetric earrings/glasses, melted hair edges",
      "Reverse image search finding NOTHING is itself suspicious — real people leave photo trails",
      "Newer diffusion profiles are cleaner visually — forensic signals and account context carry the verdict",
      "All analysis is local: checking a suspicious photo doesn't share it anywhere",
    ],
    aboutSections: [
      {
        heading: "The Classic Generated-Face Tells (StyleGAN Era)",
        body: "The 'this person does not exist' generation of fake faces — still heavily used by bot farms because the sites are free and instant — has mechanical tells. Eye geometry: StyleGAN was trained on aligned faces, so the eyes land at virtually the same coordinates in every output; when a profile photo is cropped tight and front-facing with perfectly level eyes, that's the signature. Edges and accessories fail next: earrings don't match each other, glasses frames bend or merge with skin at the temples, hair strands dissolve into the forehead, collars and shoulders go anatomically vague. And backgrounds give it away wholesale — smeared, dreamlike blurs with no identifiable place, because the model only learned faces. Any two of these together is effectively conclusive for a GAN face.",
      },
      {
        heading: "Reading the Account, Not Just the Photo",
        body: "Modern scam operations increasingly use diffusion models or stolen real photos, so the photo check must sit inside an account check. The pattern that matters: a single profile photo (or a set that's suspiciously consistent in lighting and pose — generated sets have no candids), no photos taken BY other people, no tagged appearances, a recent creation date, and a bio optimized to be attractive to the target demographic. Then the behavioral tells: fast escalation to another platform (WhatsApp/Telegram), refusal to video call, and — in romance-scam scripts — an early hard-luck story or investment opportunity. A real-looking photo cannot rescue an account with that shape; a generated photo just confirms it.",
      },
      {
        heading: "The Reverse-Search Paradox",
        body: "For normal photos, reverse image search finding matches is the red flag (stolen photo, catfish using someone else's pictures). For generated faces it inverts: finding NOTHING is the anomaly. Real people's profile photos usually trace somewhere — an old account, a team page, a news mention, the same photo at different crops. A face that exists in exactly one place on the internet, at exactly one resolution, was very possibly minted for that account. Run the search both ways: matches elsewhere → check whose face it really is; no matches at all → weigh generation much higher, and let the forensic verdict above break the tie.",
      },
    ],
    proTip:
      "Ask for a specific, cheap-to-produce proof photo — 'send a photo holding up three fingers.' Real people comply in seconds; scam operations running generated or stolen photos stall, deflect, or produce something that fails the request. It remains the fastest catfish filter there is.",
    faqs: [
      {
        question: "How do I check if a dating profile picture is AI?",
        answer:
          "Upload it to the detector above for the forensic verdict, then check the classics: perfectly level eyes at center-frame, mismatched earrings, melted hair edges, and a smeared background. Combine with a reverse image search (no results anywhere = suspicious for a face) and the account pattern — one perfect photo, no candids, recent join, fast move to another app.",
      },
      {
        question: "What is thispersondoesnotexist and why does it matter?",
        answer:
          "A site that serves a new StyleGAN-generated face on every refresh — free, instant, and unsearchable, which made it the default photo source for fake accounts at scale. Its faces carry the mechanical tells described above (fixed eye geometry, background smears), so they're the most detectable class of fake profile photo.",
      },
      {
        question: "Can detectors catch newer diffusion-generated profile photos?",
        answer:
          "The visual tells are weaker (diffusion faces have varied poses and coherent backgrounds), but the statistical generation fingerprints remain and the forensic signals target those. For these, the verdict should lean on forensics plus account behavior — no photo trail, no candids, scripted escalation — rather than visual inspection alone.",
      },
      {
        question: "Is it safe to upload someone's photo here to check it?",
        answer:
          "Yes in the privacy sense that matters: analysis runs entirely in your browser, so the photo is never transmitted to a server or stored. You're not re-sharing a possibly-private image just to verify it.",
      },
    ],
  },
}

export function getDetectorVariantMetadata(slug: string): Metadata {
  const v = detectorVariants[slug]
  if (!v) return {}
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    keywords: v.keywords,
    alternates: { canonical: `/image-tools/${slug}` },
  }
}

export function renderDetectorVariantPage(slug: string) {
  const v = detectorVariants[slug]

  const siblingLinks = Object.values(detectorVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({ name: item.headerTitle, href: `/image-tools/${item.slug}` }))

  const toolConfig = createToolConfig({
    toolName: v.toolName,
    description: v.metaDescription,
    metaTitle: v.metaTitle,
    metaDescription: v.metaDescription,
    path: `/image-tools/${slug}`,

    schemaOptions: {
      applicationCategory: "MultimediaApplication",
      description: v.definition,
      alternateName: v.keywords,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },

    header: {
      title: v.headerTitle,
      description: v.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
      color: "purple",
    },

    breadcrumbs: [
      { label: "Image Tools", href: "/image-tools" },
      { label: "AI Image Detector", href: "/image-tools/ai-image-detector" },
      { label: v.headerTitle, href: `/image-tools/${slug}` },
    ],

    content: {
      definition: v.definition,
      quickAnswer: v.quickAnswer,
      keyTakeaways: v.keyTakeaways,
      overview: v.overview,

      howToSteps: [
        "Upload the image (or drag it in) — analysis starts locally in your browser.",
        "Read the per-signal breakdown, not just the verdict — it shows WHY the image scored as it did.",
        "Apply the manual tells from the sections below as a second opinion.",
        "For real stakes, add provenance: reverse image search and check where the image first appeared.",
      ],

      aboutTool: (
        <div className="space-y-10">
          {v.aboutSections.map((section) => (
            <article key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      ),

      proTip: v.proTip,

      faqs: [
        ...v.faqs,
        {
          question: "Is this detector free?",
          answer:
            "Yes — free, no signup, no usage limits, and fully client-side: the image is analyzed in your browser and never uploaded.",
        },
      ],

      relatedTools: [
        { name: "AI Image Detector (full tool)", href: "/image-tools/ai-image-detector" },
        ...siblingLinks,
        { name: "Image Steganography", href: "/security-tools/image-steganography" },
        { name: "AI Text Detector", href: "/ai-tools/ai-text-detector" },
        { name: "All Image Tools", href: "/image-tools" },
      ],
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<AIImageDetector />)} />
}
