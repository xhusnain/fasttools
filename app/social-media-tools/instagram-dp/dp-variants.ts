export interface DpVariantConfig {
  slug: string
  toolName: string
  metaTitle: string
  metaDescription: string
  headerTitle: string
  headerDescription: string
  overviewText: string
  keywords?: string[]
  faqOverrides?: Array<{ question: string; answer: string }>
  howToSteps?: string[]
  featureOverrides?: string[]
}

export const dpVariants: Record<string, DpVariantConfig> = {
  "private-downloader": {
    slug: "private-downloader",
    toolName: "Private Instagram DP Viewer",
    metaTitle: "Private Instagram DP Viewer (Profile Picture Only)",
    metaDescription:
      "View profile pictures for private Instagram accounts where profile photos are publicly visible. Does not access private posts or stories.",
    headerTitle: "Private Instagram DP Viewer",
    headerDescription:
      "Check profile photos for private accounts (profile picture only).",
    overviewText:
      "This variant is built for users searching private-account DP lookup terms. It only covers profile-picture visibility and does not unlock private posts, reels, or stories.",
    keywords: [
      "private instagram dp viewer",
      "private instagram profile picture viewer",
      "view private instagram dp",
      "private account profile photo instagram",
    ],
    faqOverrides: [
      {
        question: "Can this view private posts or stories?",
        answer:
          "No. This variant only handles profile-picture lookup where that image is publicly visible.",
      },
    ],
  },
  "hd-1080p": {
    slug: "hd-1080p",
    toolName: "Instagram DP Viewer HD 1080p",
    metaTitle: "Instagram DP Viewer HD 1080p (Full Size)",
    metaDescription:
      "View and download full-size Instagram profile pictures in HD quality when available.",
    headerTitle: "Instagram DP Viewer HD 1080p",
    headerDescription:
      "Focused on full-size and high-quality profile-picture output.",
    overviewText:
      "This variant is optimized for full-size and HD-intent queries such as 1080p DP viewer and full-resolution profile photo lookup.",
    keywords: [
      "instagram dp viewer hd",
      "instagram dp 1080p",
      "full size instagram profile picture",
      "instagram profile picture full resolution",
    ],
  },
  "pc-viewer": {
    slug: "pc-viewer",
    toolName: "Instagram DP Viewer for PC",
    metaTitle: "Instagram DP Viewer for PC & Mac",
    metaDescription:
      "Use Instagram DP Viewer on desktop to inspect and download profile pictures with a larger-screen workflow.",
    headerTitle: "Instagram DP Viewer for PC",
    headerDescription:
      "Desktop-focused profile-picture lookup for PC and Mac users.",
    overviewText:
      "This route is designed for desktop-intent searches, with guidance tailored for PC and Mac browsing workflows.",
    keywords: [
      "instagram dp viewer for pc",
      "instagram profile picture viewer pc",
      "insta dp viewer desktop",
      "instagram pfp viewer mac",
    ],
  },
  "zoom-profile-picture": {
    slug: "zoom-profile-picture",
    toolName: "Insta Zoom Profile Picture Viewer",
    metaTitle: "Insta Zoom Profile Picture Viewer (Full Size)",
    metaDescription:
      "Zoom Instagram profile pictures and inspect full-size profile photo detail in-browser.",
    headerTitle: "Insta Zoom Profile Picture Viewer",
    headerDescription:
      "Built for users searching Instagram DP zoom and enlarge workflows.",
    overviewText:
      "This variant targets zoom-focused queries and provides a profile-picture inspection path for detail checks and larger-screen review.",
    keywords: [
      "insta zoom profile picture",
      "instagram dp zoom",
      "zoom instagram profile picture",
      "enlarge instagram profile photo",
    ],
  },
  "anonymous-viewer": {
    slug: "anonymous-viewer",
    toolName: "Anonymous Instagram DP Viewer",
    metaTitle: "Anonymous Instagram DP Viewer (No Login)",
    metaDescription:
      "View Instagram profile pictures without logging in, with a quick browser-based lookup workflow.",
    headerTitle: "Anonymous Instagram DP Viewer",
    headerDescription:
      "No-login profile-picture lookup workflow for quick checks.",
    overviewText:
      "This variant targets no-login and anonymous-intent DP queries while keeping scope limited to profile-picture viewing workflows.",
    keywords: [
      "anonymous instagram dp viewer",
      "instagram dp viewer no login",
      "view instagram profile picture anonymously",
      "insta dp anonymous viewer",
    ],
  },
}
