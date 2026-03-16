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
    toolName: "IG DP Viewer HD — Instagram DP Viewer 1080p",
    metaTitle: "IG DP Viewer HD — Instagram DP Viewer HD 1080p Full Size (2026)",
    metaDescription:
      "Free IG DP viewer HD to view and download Instagram profile pictures in full size 1080p. InstaDp full size viewer with HD download — no login required.",
    headerTitle: "IG DP Viewer HD — Instagram Profile Picture Full Size 1080p",
    headerDescription:
      "Free IG DP viewer HD and InstaDp full size tool. View and download Instagram profile pictures in full HD 1080p resolution.",
    overviewText:
      "This IG DP viewer HD is optimized for full-size and HD-intent queries. Whether you search for instagram dp viewer hd, ig dp viewer hd, or instadp full size — this tool delivers full 1080p resolution profile picture viewing and downloads.",
    keywords: [
      "ig dp viewer hd",
      "instagram dp viewer hd",
      "instadp full size",
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
    toolName: "Insta DP Zoomer — Insta Zoom DP Viewer",
    metaTitle: "Insta DP Zoomer — Insta Zoom DP & Profile Picture Viewer (2026)",
    metaDescription:
      "Free insta DP zoomer to zoom and view Instagram profile pictures in full size. Insta zoom DP tool — enlarge any profile photo and download in HD. No login required.",
    headerTitle: "Insta DP Zoomer — Zoom & View Instagram Profile Pictures",
    headerDescription:
      "Free insta zoom DP tool to enlarge and view Instagram profile pictures in full size. Insta DP zoomer with HD download support.",
    overviewText:
      "This insta DP zoomer is built for users who want to zoom Instagram profile pictures and view them in full size. Whether you search for insta dp zoomer, insta zoom dp, or zoom profile picture — this tool lets you enlarge any Instagram profile photo, inspect the details, and download in HD quality.",
    keywords: [
      "insta dp zoomer",
      "insta zoom dp",
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
