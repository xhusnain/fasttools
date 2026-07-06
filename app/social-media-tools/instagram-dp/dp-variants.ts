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
  "download": {
    slug: "download",
    toolName: "Insta DP Download",
    metaTitle: "Insta DP Download — Save Instagram Profile Picture Full Size HD",
    metaDescription:
      "Free insta DP download by username. Save any Instagram DP in full HD (up to 1080x1080) — no login needed, works on phone and PC.",
    headerTitle: "Insta DP Download — Full HD",
    headerDescription:
      "Download any Instagram DP in full HD by username. No login required — works on phone and PC.",
    overviewText:
      "This insta DP download tool saves the full-resolution profile photo — up to 1080x1080 pixels — instead of the small thumbnail Instagram shows. Type the username or paste the profile link, preview the insta DP in HD, and download it with one click. No Instagram login is needed, and it works on any phone, tablet, or PC. You can even download the DP of a private account, since profile pictures stay publicly visible regardless of privacy settings.",
    keywords: [
      "insta dp download",
      "instagram dp download",
      "instagram dp download hd",
      "instadp download",
      "download instagram dp",
      "insta dp download by username",
      "instagram pfp download",
    ],
    howToSteps: [
      "Type the Instagram username, or paste the profile URL.",
      "The tool fetches the full-resolution DP (up to 1080x1080).",
      "Preview the profile picture in full HD.",
      "Tap or click the download button to save it to your phone or PC.",
    ],
    featureOverrides: [
      "Download any Instagram DP by username — no link needed",
      "Full HD output up to 1080x1080 pixels",
      "No login or Instagram account required",
      "Works for private accounts (DPs stay public)",
      "One-click save on phone, tablet, and PC",
      "Free with no signup or watermark",
    ],
    faqOverrides: [
      {
        question: "How do I download an Instagram DP by username?",
        answer:
          "Type the username into the tool above and run the lookup — it fetches the profile picture and gives you a download button for the full-size image. You don't need the profile link, although pasting the full URL works too. The whole process takes a few seconds and requires no login.",
      },
      {
        question: "Can I download an Instagram DP in HD (1080p)?",
        answer:
          "Yes. This tool retrieves the largest version of the profile photo Instagram stores, which is up to 1080x1080 pixels. If the account owner uploaded a lower-resolution photo, you get the best quality available rather than an upscaled copy.",
      },
      {
        question: "Can I download the DP of a private account?",
        answer:
          "Yes. Profile pictures remain publicly visible even when an account is private, so the DP downloads in the same quality as any public profile. Private posts, stories, and reels cannot be accessed.",
      },
      {
        question: "Is it legal to download someone's Instagram profile picture?",
        answer:
          "Downloading a publicly visible profile picture for personal reference is generally fine, but the photo still belongs to its owner. Reposting it, impersonating the person, or using it commercially without permission can violate copyright and Instagram's terms. When in doubt, ask the account owner first.",
      },
      {
        question: "Do I need to log in to download an insta DP?",
        answer:
          "No. This insta DP downloader works entirely without an Instagram account — just enter a username. Nothing is connected to you, and the profile owner is never notified.",
      },
    ],
  },
  "private-account": {
    slug: "private-account",
    toolName: "Private Instagram DP Viewer",
    metaTitle: "View Private Instagram Profile Picture — DP Viewer for Private Accounts",
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
    metaTitle: "Instagram DP Viewer HD 1080p — Full Size Profile Picture",
    metaDescription:
      "View full-size Instagram profile pictures in HD quality. Zoom and save high-resolution DPs. Free, no login required.",
    headerTitle: "Instagram DP Viewer HD 1080p",
    headerDescription:
      "View full-size and high-quality Instagram profile pictures.",
    overviewText:
      "Instagram stores profile pictures at up to 1080x1080 pixels but only ever shows them as a small circle — 110 pixels on mobile, 150 on desktop. This page loads the highest resolution Instagram returns for a username, so you can inspect the photo at full quality and save a sharp copy instead of a blurry thumbnail.",
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
    metaTitle: "Instagram DP Viewer for PC & Mac — View Profile Pictures on Desktop",
    metaDescription:
      "Use Instagram DP Viewer on desktop to view and save profile pictures with a larger-screen workflow. Free, no login.",
    headerTitle: "Instagram DP Viewer for PC",
    headerDescription:
      "View Instagram profile pictures on a big screen — no app or extension needed.",
    overviewText:
      "View Instagram profile pictures on a big screen. Enter a username in any desktop browser — Chrome, Edge, Firefox, or Safari on Windows and Mac — to load the full-size photo, zoom in, and save it straight to your computer. Nothing to install, and no Instagram login required.",
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
    metaTitle: "Insta Zoom Profile Picture — View Full Size Instagram DP",
    metaDescription:
      "Zoom Instagram profile pictures and view full-size profile photo detail in-browser. Free, no login.",
    headerTitle: "Insta Zoom Profile Picture Viewer",
    headerDescription:
      "Enlarge any Instagram profile picture to full size and zoom in on the detail — right in your browser.",
    overviewText:
      "Instagram doesn't let you tap to enlarge a profile picture, and zooming into a screenshot only blurs the tiny 110-pixel thumbnail further. This page loads the original full-resolution image instead, so you can zoom in on real detail — a face, a logo, a background — and save a sharp copy if you need one.",
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
    metaTitle: "Anonymous Instagram DP Viewer — View Profile Pictures Without Login",
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
