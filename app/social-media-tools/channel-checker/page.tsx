import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"
import { CheckCircle, XCircle } from "lucide-react"

const YoutubeChannelChecker = dynamic(
  () => import("@/components/social-media/youtube-channel-checker").then((mod) => mod.YoutubeChannelChecker),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YouTube Channel Name & Handle Checker",
  description:
    "Free YouTube channel name availability checker. Instantly check if a YouTube channel name or @handle is available before launching your channel.",
  metaTitle: "YouTube Name Checker — Is That Channel Name or @Handle Taken?",
  metaDescription:
    "Check any YouTube channel name or @handle in one second — instant taken-or-available answer. Free, unlimited checks, no Google login. Try variations until one is free.",
  path: "/social-media-tools/channel-checker",

  header: {
    title: "YouTube Name & Handle Checker",
    description:
      "Instantly check if a YouTube channel name or @handle is available before you create or rebrand your channel. Free YouTube username checker that covers handle availability, channel name uniqueness, and custom URL — no YouTube login required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Handle Checker", href: "/social-media-tools/channel-checker" },
  ],

  schemaOptions: {
    applicationCategory: "WebApplication",
    description:
      "YouTube handle and channel-name availability checker for creator branding workflows.",
    alternateName: [
      "YouTube Name Checker",
      "YouTube Username Checker",
      "YouTube Channel Name Availability Checker",
      "Check If YouTube Channel Name Is Available",
      "Available YouTube Channel Names",
    ],
    featureList: [
      "YouTube handle availability check",
      "Channel name validation",
      "Custom URL availability check",
      "Fast browser-based workflow",
      "No login or install required",
      "Bulk name iteration support",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A YouTube Channel Name Availability Checker is a free tool that helps you check if a YouTube channel name is available or taken before you create or rename your channel. Also checks @handle availability.",
    quickAnswer:
      "How to check if a YouTube channel name is available? Enter any channel name or handle to instantly check availability. This tool helps you find available YouTube channel names and verify if a name is already taken. No YouTube account needed.",
    keyTakeaways: [
      "YouTube handles are unique @usernames (e.g., @YourBrand) that appear in your channel URL",
      "Handles must be 3-30 characters: letters, numbers, underscores, hyphens, periods only",
      "Channel display names do NOT need to be unique — handles do",
      "You can change your handle up to 2 times every 14 days",
      "Check availability on YouTube, Instagram, TikTok, and X for brand consistency",
    ],
    overview:
      "Want to know how to check if a YouTube channel name is available? Use this free checker to validate YouTube channel name availability before you commit. Check if a YouTube channel name is taken, find available YouTube channel names, and verify @handle availability instantly. A YouTube handle is your unique @username (e.g., @YourBrand) that appears in your channel URL and comments. Our tool helps creators, agencies, and brands check YouTube channel name availability and avoid naming conflicts — no YouTube account needed.",

    howToSteps: [
      "Enter a YouTube handle or channel name you want to check (with or without the @ symbol).",
      "Click the check button to run an availability lookup.",
      "Review the result — the tool shows whether the handle is taken or potentially available.",
      "If taken, try variations (add numbers, abbreviations, or related words) and check again.",
    ],

    features: [
      "Instant handle availability checks",
      "Channel name and @handle validation",
      "Fast iteration — check multiple names in seconds",
      "No YouTube login required",
      "Works on desktop and mobile browsers",
      "Supports handle format validation (length, characters)",
    ],

    useCases: [
      "New creators choosing a YouTube channel name and handle before launch",
      "Brands and businesses verifying handle availability for marketing campaigns",
      "Agencies checking multiple name options for client channels",
      "Rebranding existing channels — check if the new name is available first",
      "Cross-platform consistency — verify the same handle is available on YouTube",
    ],

    aboutTool: (
      <div className="space-y-10 text-muted-foreground">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How to Check If a YouTube Channel Name Is Available (Step-by-Step)</h2>
          <p>
            There are three reliable ways to check YouTube channel name availability. Use whichever is fastest for you:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li><strong>Use this tool above (recommended).</strong> Type any handle or channel name, press check, and get an instant answer with format validation. Saves you from repeatedly typing URLs.</li>
            <li><strong>Check directly on YouTube.</strong> Open <code className="text-foreground">youtube.com/@desiredname</code> in your browser. If you see &quot;This page isn&apos;t available&quot; or a 404, the handle <em>may</em> be free. If you see an existing channel, it&apos;s taken.</li>
            <li><strong>YouTube Studio claim flow.</strong> Inside YouTube Studio → Settings → Channel → Basic info, the handle field shows a green check if available or a red error if taken. This is the most authoritative source but requires you to be logged in.</li>
          </ol>
          <p>
            <strong>Important:</strong> the URL-probe method (method 2) sometimes returns false positives because YouTube reserves certain handles, blocks some patterns for trademark reasons, or has caching delays right after a channel is renamed. The tool above accounts for those edge cases.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">YouTube Handle Format Rules</h2>
          <p>
            Before you check availability, make sure the handle you want is actually valid. YouTube rejects handles that fail any of these rules — checking format first avoids wasting time on handles that could never work.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Rule</th>
                  <th className="p-3 text-left">Valid</th>
                  <th className="p-3 text-left">Invalid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold">Length 3–30 characters</td>
                  <td className="p-3 text-green-600">@cookwithme</td>
                  <td className="p-3 text-red-500">@a, @verylongchannelnamethatexceedsthirtycharacterslimit</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Letters, numbers, _ - . only</td>
                  <td className="p-3 text-green-600">@cook_with_me.2026</td>
                  <td className="p-3 text-red-500">@cook!me, @cook@me, @cook me</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Case-insensitive</td>
                  <td className="p-3 text-green-600">@MyBrand = @mybrand</td>
                  <td className="p-3 text-red-500">— (treated as the same handle)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">No impersonation / trademark</td>
                  <td className="p-3 text-green-600">@TechByMaya</td>
                  <td className="p-3 text-red-500">@YouTube, @Google, @Apple (blocked)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">No slurs or hate terms</td>
                  <td className="p-3 text-green-600">— (your handle, your call)</td>
                  <td className="p-3 text-red-500">Blocked by community guidelines</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Cannot start with a period</td>
                  <td className="p-3 text-green-600">@my.channel</td>
                  <td className="p-3 text-red-500">@.channel</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Handle vs Channel Name — Why It Matters</h2>
          <p>
            Many creators confuse handle availability with channel name availability. They are different checks:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">@Handle (must be unique)</h4>
              <p className="text-sm">Your <code className="text-foreground">@handle</code> appears in your channel URL (<code className="text-foreground">youtube.com/@handle</code>), in comments, in Shorts, and in @mentions. Every YouTube channel has exactly one handle, and no two channels can share the same handle. This is what our tool checks.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Channel name (does NOT need to be unique)</h4>
              <p className="text-sm">Your <strong>channel name</strong> (display name) is the title shown at the top of your channel and on videos. Multiple channels can use the same display name — &quot;Tech Reviews&quot; could be the channel name of hundreds of channels at the same time. There is no availability to check, you can just set it.</p>
            </div>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">If Your Handle Is Taken: 7 Variation Strategies That Work</h2>
          <p>
            Most short, common, single-word handles are already taken — YouTube has 100M+ channels. Try these patterns to find an available alternative:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Strategy</th>
                  <th className="p-3 text-left">Taken: @cooking</th>
                  <th className="p-3 text-left">Try instead</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Add your name</td><td className="p-3">@cooking</td><td className="p-3 text-green-600">@cookingwithsarah</td></tr>
                <tr><td className="p-3 font-semibold">Add niche modifier</td><td className="p-3">@cooking</td><td className="p-3 text-green-600">@cookingvegan, @cookingitalian</td></tr>
                <tr><td className="p-3 font-semibold">Add location</td><td className="p-3">@cooking</td><td className="p-3 text-green-600">@cookingnyc, @cookinglondon</td></tr>
                <tr><td className="p-3 font-semibold">Add &quot;the&quot;</td><td className="p-3">@cooking</td><td className="p-3 text-green-600">@thecooking, @thecookingchannel</td></tr>
                <tr><td className="p-3 font-semibold">Add &quot;real&quot; or &quot;official&quot;</td><td className="p-3">@cooking</td><td className="p-3 text-green-600">@realcooking, @cookingofficial</td></tr>
                <tr><td className="p-3 font-semibold">Use underscores or periods</td><td className="p-3">@cooking</td><td className="p-3 text-green-600">@cooking_, @cooking.tv</td></tr>
                <tr><td className="p-3 font-semibold">Use a synonym or verb form</td><td className="p-3">@cooking</td><td className="p-3 text-green-600">@cookery, @icook, @letscook</td></tr>
              </tbody>
            </GTable>
          </div>
          <p>
            Avoid generic number suffixes (@cooking123, @cooking2026) — they look spammy in URLs and hurt brand recall.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Cross-Platform Handle Check (Brand Consistency)</h2>
          <p>
            A YouTube handle being available doesn&apos;t mean the same handle is free on Instagram, TikTok, or X. For brand consistency, check all major platforms before committing. Most creators want the same handle everywhere. Here&apos;s a quick checklist:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>YouTube</strong>: <code>youtube.com/@yourhandle</code> — or use the tool above</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>Instagram</strong>: <code>instagram.com/yourhandle</code></span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>TikTok</strong>: <code>tiktok.com/@yourhandle</code></span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>X / Twitter</strong>: <code>x.com/yourhandle</code></span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>Twitch</strong>: <code>twitch.tv/yourhandle</code></span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>GitHub</strong> (for developers): <code>github.com/yourhandle</code></span></li>
          </ul>
          <p>
            If your preferred handle is taken on one platform, consider picking an alternative that&apos;s available <em>everywhere</em> rather than juggling different handles per platform.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FastTools vs Other YouTube Handle Checkers</h2>
          <p>
            How FastTools compares to the most popular free YouTube name checkers:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left text-green-600">FastTools</th>
                  <th className="p-3 text-left">BrandSnag</th>
                  <th className="p-3 text-left">Hopper HQ</th>
                  <th className="p-3 text-left">TubePilot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">YouTube handle check</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Format validation (length, chars)</td><td className="p-3 text-green-600">✓</td><td className="p-3">partial</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Bulk check (10+ handles)</td><td className="p-3 text-green-600">iterate fast</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3">up to 10</td></tr>
                <tr><td className="p-3 font-semibold">Cross-platform suggestion</td><td className="p-3 text-green-600">guidance + variant pages</td><td className="p-3">15 platforms</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">No upsell to paid scheduling service</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">No login</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>
      </div>
    ),

    proTip:
      "Check your desired handle on YouTube, Instagram, TikTok, and X at the same time to ensure cross-platform brand consistency before committing.",

    faqs: [
      {
        question: "How to check if a YouTube channel name is available?",
        answer:
          "Enter the channel name you want in our checker tool above and click check. The tool instantly verifies whether the YouTube channel name is available or already taken. You can also check directly on YouTube by going to youtube.com/@desiredname — if it shows 'This page isn't available', the name may be free.",
      },
      {
        question: "How to check if a YouTube channel name is taken?",
        answer:
          "Use this YouTube channel name availability checker — enter any name and it will tell you if it's already in use. This is the fastest way to check if a YouTube channel name is taken before you create your channel.",
      },
      {
        question: "How can I tell if a YouTube name is already taken?",
        answer:
          "The quickest sign is the channel URL: open youtube.com/@thename and if an existing channel loads, that name is taken; a 'page isn't available' error means it's likely free. For a definitive answer, run the name through the checker above or look for the green check in YouTube Studio's handle field. Keep in mind YouTube reserves some handles for trademark and impersonation reasons, so a 404 alone isn't a guarantee.",
      },
      {
        question: "How do I find available YouTube channel names?",
        answer:
          "Enter your desired name in the checker. If it's taken, try variations by adding your niche, location, or descriptive words. Our tool lets you quickly iterate through alternatives to find available YouTube channel names.",
      },
      {
        question: "What is the difference between a YouTube handle and channel name?",
        answer:
          "A YouTube handle is your unique @username (e.g., @YourBrand) that appears in your channel URL and comments. A channel name (display name) is the title shown on your channel page and does not need to be unique. Multiple channels can have the same display name, but handles must be unique across YouTube.",
      },
      {
        question: "Is checking a YouTube @handle the same as checking the channel name?",
        answer:
          "Not quite — the @handle is the only part with real availability to check, because handles must be unique across YouTube while display names don't have to be. In practice, availability only applies to the handle — it's what appears in the URL and in @mentions. This tool checks the handle; your display name can be whatever you like.",
      },
      {
        question: "Can I change my YouTube handle after creating it?",
        answer:
          "Yes, YouTube allows you to change your handle, but there are limits. You can change it up to 2 times within a 14-day period. After changing, your old handle becomes available for others to claim after a grace period. Choose carefully the first time to avoid losing a good handle.",
      },
      {
        question: "What are YouTube handle requirements?",
        answer:
          "YouTube handles must be 3-30 characters long, contain only letters (A-Z, a-z), numbers (0-9), underscores (_), hyphens (-), and periods (.). They are case-insensitive and must be unique across all of YouTube. Handles cannot impersonate other creators or violate community guidelines.",
      },
      {
        question: "Why is the handle I want already taken?",
        answer:
          "YouTube has over 100 million active channels, so many short or common handles are already claimed. Try adding your niche, location, or a descriptive word to your desired handle. For example, if @cooking is taken, try @cookingwithsarah or @homecooking. Our tool lets you quickly iterate through alternatives.",
      },
      {
        question: "Can I reserve a YouTube handle without creating a channel?",
        answer:
          "No. YouTube handles are assigned when you create or set up a channel. You cannot reserve a handle in advance. This is why checking availability and creating your channel promptly is important if you find your preferred handle is available.",
      },
      {
        question: "Can I check YouTube username availability without creating a channel?",
        answer:
          "Yes — no channel or sign-in is required. Checking is free and unlimited; the only step that requires a channel is actually claiming the handle once you find one that's free. If your preferred name is available, create the channel promptly, since handles can't be reserved in advance.",
      },
      {
        question: "How do YouTube handles affect SEO?",
        answer:
          "Your YouTube handle appears in your channel URL (youtube.com/@handle), making it part of your brand's searchable identity. A descriptive, keyword-relevant handle can help with discoverability both on YouTube search and Google. For example, @BestVeganRecipes is more SEO-friendly than @user12345.",
      },
      {
        question: "Is this YouTube handle checker free?",
        answer: "Yes. The tool is completely free with no registration, no login, and no limits on how many handles you can check.",
      },
      {
        question: "Does this tool work for YouTube channel custom URLs?",
        answer:
          "Yes. Since 2022, YouTube merged custom URLs and handles into a single system. Your @handle is your custom URL. Checking handle availability also tells you whether that custom URL is available.",
      },
      {
        question: "Can I use the same handle on YouTube and other platforms?",
        answer:
          "YouTube does not enforce cross-platform uniqueness, so a handle available on YouTube may already be taken on Instagram, TikTok, or X (and vice versa). We recommend checking all platforms before committing to ensure consistent branding.",
      },
      {
        question: "What is the difference between a YouTube handle and a custom URL?",
        answer:
          "There is no difference anymore. In 2022 YouTube merged the old custom URL system into handles. Your @handle IS your custom URL — they're the same string, controlled from the same setting. Old channels that had pre-2022 custom URLs were auto-migrated; their existing URL became their handle.",
      },
      {
        question: "How do I check if a YouTube name is unique?",
        answer:
          "Two facts matter: (1) display names do NOT have to be unique — multiple channels can be called 'Tech Reviews', so there's nothing to check for the display name; (2) handles MUST be unique. So 'is my YouTube name unique?' really means 'is my desired @handle available?' — use the tool above to check that exactly.",
      },
      {
        question: "Can two YouTube channels have the same name?",
        answer:
          "Yes — display names are not enforced as unique on YouTube. Two channels can both be called 'Cooking Channel' at the same time. What can't be shared is the handle (@cookingchannel). Search results disambiguate by handle, subscriber count, and verification status. If brand confusion is a concern, choose a more distinctive display name plus a unique handle.",
      },
      {
        question: "How do I check YouTube channel name availability without an account?",
        answer:
          "Use this tool — it doesn't require a YouTube account or login. We probe the public youtube.com/@handle URL to detect whether a channel exists, then format-validate the input against YouTube's handle rules. No data is stored.",
      },
      {
        question: "How fast does YouTube release handles from deleted channels?",
        answer:
          "YouTube does not currently have a published policy for releasing handles from deleted or banned channels. Anecdotally, handles from terminated channels remain locked indefinitely to prevent impersonation of the previous owner. Handles from voluntarily deleted personal channels sometimes become available after several months, but not reliably. Plan on the assumption that taken = permanently taken.",
      },
      {
        question: "Does this tool check handles in bulk?",
        answer:
          "The tool above checks one handle at a time, but iteration is fast — most users can check 20–30 handle variations in under a minute. For agency or brand-protection use cases that need bulk lookup across hundreds of handles, the YouTube Data API v3 (channels.list with the forHandle parameter) is the right approach.",
      },
      {
        question: "Can I check if a YouTube handle is taken for a different language or country?",
        answer:
          "YouTube handles are global — they're not scoped by country or language. The handle @cooking taken by a creator in Brazil is the same @cooking that would block a creator in Korea. Our tool detects taken handles regardless of which country's YouTube the channel is registered in.",
      },
    ],

    relatedTools: [
      { name: "YouTube Handle Availability Checker", href: "/social-media-tools/channel-checker/handle-availability" },
      { name: "YouTube Channel Name Availability Checker", href: "/social-media-tools/channel-checker/channel-name-checker" },
      { name: "Check If a YouTube Handle Is Taken", href: "/social-media-tools/channel-checker/check-if-taken" },
      { name: "YouTube Username Checker", href: "/social-media-tools/channel-checker/youtube-username-checker" },
      { name: "YouTube Channel Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
      { name: "TikTok Engagement Calculator", href: "/social-media-tools/tiktok-engagement-calculator" },
      // Cross-category: push authority to creator-relevant finance/calculator tools
      { name: "Influencer Rate Calculator", href: "/social-media-tools/influencer-rate-calculator" },
      { name: "Invoice Generator — Free Online", href: "/finance-tools/invoice-generator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ChannelCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeChannelChecker />)} />
}
