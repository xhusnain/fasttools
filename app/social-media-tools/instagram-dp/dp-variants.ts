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
  "private-account": {
    slug: "private-account",
    toolName: "Private Instagram DP Viewer",
    metaTitle: "Private Instagram DP Viewer - View Profile Picture",
    metaDescription:
      "View profile pictures of private Instagram accounts. Profile photos are publicly visible even on private accounts. No login required. Free.",
    headerTitle: "Private Instagram Account DP Viewer",
    headerDescription:
      "View profile photos for private Instagram accounts. Profile pictures remain visible even when posts are private.",
    overviewText:
      "Private Instagram accounts hide posts, reels, and stories — but the profile picture (DP) remains publicly visible. This tool lets you view and zoom into private account profile photos in full size without needing to follow the account or log in.",
    keywords: [
      "private instagram dp viewer",
      "view private instagram profile picture",
      "private account instagram dp",
      "private instagram profile photo viewer",
      "instagram private account profile picture",
    ],
    howToSteps: [
      "Enter the private Instagram account username.",
      "The tool fetches the publicly visible profile picture.",
      "View the full-size DP in your browser.",
      "Save a copy for reference if needed.",
    ],
    featureOverrides: [
      "View profile pictures of private accounts",
      "Full-size profile photo output",
      "No login or follow required",
      "Works on mobile and desktop browsers",
      "Free with no signup",
    ],
    faqOverrides: [
      {
        question: "Can I view private posts or stories with this tool?",
        answer:
          "No. This tool only shows the profile picture, which is publicly visible even on private accounts. It does not access private posts, reels, or stories.",
      },
      {
        question: "Do private account profile pictures show in full size?",
        answer:
          "Yes. Instagram profile pictures are publicly accessible regardless of account privacy settings. This tool fetches and displays them in the highest available resolution.",
      },
      {
        question: "Will the account owner know I viewed their DP?",
        answer:
          "No. Viewing a profile picture does not send any notification to the account owner.",
      },
    ],
  },
  "hd-1080p": {
    slug: "hd-1080p",
    toolName: "Instagram DP Viewer HD 1080p",
    metaTitle: "Instagram DP Viewer HD - Full Size 1080p Profile Picture",
    metaDescription:
      "View full-size Instagram profile pictures in HD quality. Zoom and save high-resolution DPs. Free, no login required.",
    headerTitle: "Instagram DP Viewer HD 1080p",
    headerDescription:
      "View full-size and high-quality Instagram profile pictures.",
    overviewText:
      "Use this HD Instagram DP viewer when you want the largest available profile picture preview instead of the small circular thumbnail shown in the Instagram app. It is built for full-size profile picture checks, 1080p-style searches, and high-resolution DP downloads.",
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
    metaTitle: "Instagram DP Viewer for PC - View Profile Pictures on Desktop",
    metaDescription:
      "Use Instagram DP Viewer on desktop to view and save profile pictures with a larger-screen workflow. Free, no login.",
    headerTitle: "Instagram DP Viewer for PC",
    headerDescription:
      "Desktop-focused profile-picture viewing for PC and Mac users.",
    overviewText:
      "Use the Instagram DP viewer on PC or Mac when you want a larger desktop preview, easier right-click saving, and a clearer view of profile pictures than the Instagram mobile app provides.",
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
    metaTitle: "Insta Zoom - View Instagram Profile Picture Full Size",
    metaDescription:
      "Use Insta Zoom to view Instagram profile pictures in full size. Zoom profile photos, inspect details, and save the available DP. Free, no login.",
    headerTitle: "Insta Zoom Profile Picture Viewer",
    headerDescription:
      "Built for users searching Instagram DP zoom and enlarge workflows.",
    overviewText:
      "Use this Insta Zoom profile picture viewer to enlarge an Instagram DP, inspect profile photo details, and save the available full-size image. It is designed for users who search for insta zoom, Instagram profile zoom, and profile picture zoom workflows.",
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
    metaTitle: "Anonymous Instagram DP Viewer - No Login Profile Picture",
    metaDescription:
      "View Instagram profile pictures anonymously without logging in. No account needed. Free browser-based DP viewer with no tracking.",
    headerTitle: "Anonymous Instagram DP Viewer — No Login Required",
    headerDescription:
      "View any Instagram profile picture anonymously. No login, no account, no tracking. Just enter a username.",
    overviewText:
      "Want to view an Instagram profile picture without logging in or leaving a trace? This anonymous DP viewer lets you look up any public profile photo by username — completely anonymously, with no Instagram account required. Your view is never recorded or shared with the account owner.",
    keywords: [
      "anonymous instagram dp viewer",
      "instagram dp viewer no login",
      "view instagram profile picture anonymously",
      "insta dp anonymous viewer",
      "instagram profile picture without account",
    ],
    howToSteps: [
      "Enter any Instagram username (no login needed).",
      "The tool fetches the profile picture anonymously.",
      "View the full-size DP without any tracking.",
      "Save a copy for reference if needed.",
    ],
    featureOverrides: [
      "100% anonymous profile picture viewing",
      "No Instagram login or account required",
      "No tracking or notifications sent",
      "Full-size HD profile photo output",
      "Works on all browsers and devices",
      "Free with no signup",
    ],
    faqOverrides: [
      {
        question: "Is this truly anonymous? Will the user know I viewed their DP?",
        answer:
          "Yes, it is fully anonymous. Instagram does not notify users when their profile picture is viewed. This tool does not require login, so there is no connection to your account.",
      },
      {
        question: "Do I need an Instagram account to use this?",
        answer:
          "No. This viewer works without any Instagram login. Just enter the username and view the profile picture.",
      },
      {
        question: "Does this work for private accounts?",
        answer:
          "Profile pictures are visible even on private accounts. This tool can view the DP of any account regardless of privacy settings.",
      },
    ],
  },
}
