import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const InstagramDpViewer = dynamic(
  () => import("@/components/social-media/instagram-dp-viewer").then((mod) => mod.InstagramDpViewer),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Instagram Profile Picture Viewer",
  description:
    "View Instagram profile pictures in full size HD by username. Free profile picture viewer with zoom and download. No login required.",
  metaTitle: "Instagram Profile Picture Viewer - Full Size HD",
  metaDescription:
    "View Instagram profile pictures in full size HD by username. Free profile picture viewer with zoom and download. No login required.",
  path: "/social-media-tools/instagram-profile-picture-viewer",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    name: "Instagram Profile Picture Viewer",
    alternateName: [
      "Instagram PFP Viewer",
      "Instagram Profile Photo Viewer",
      "Instagram DP Viewer",
      "Insta Profile Picture Viewer",
      "Full Size Instagram Profile Picture Viewer",
    ],
    featureList: [
      "View Instagram profile pictures in full size",
      "Zoom profile pictures in the browser",
      "Download available HD profile photos",
      "Works by username or profile URL",
      "No Instagram login required",
      "Supports public and private account profile pictures",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "Instagram Profile Picture Viewer",
    description:
      "View an Instagram profile picture in full size. Enter a username, zoom the profile photo, and save the available HD image with no login.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
    {
      label: "Instagram Profile Picture Viewer",
      href: "/social-media-tools/instagram-profile-picture-viewer",
    },
  ],

  content: {
    quickAnswer:
      "This free Instagram profile picture viewer shows the available full-size profile photo for an Instagram username or profile URL. You can zoom the picture, inspect details, and download the available HD image without logging in.",
    definition:
      "An Instagram profile picture viewer is a browser tool that loads the public profile photo for an Instagram account and displays it at a larger size than the Instagram app thumbnail.",
    keyTakeaways: [
      "Built for profile picture searches, including Instagram PFP, DP, profile photo, and avatar queries",
      "Includes a full-size zoom viewer for inspecting profile picture details",
      "No Instagram password or account login is required",
      "Works on desktop and mobile browsers",
      "Only profile pictures and public profile data are handled; private posts and stories are not accessible",
    ],
    overview:
      "Instagram shows profile pictures as small circular thumbnails, which makes it hard to inspect a face, logo, or avatar. This Instagram profile picture viewer loads the available profile photo by username, shows it in a larger preview, and provides zoom and download controls. It is the same workflow people search for as Instagram DP viewer, Insta PFP viewer, profile photo viewer, or full-size Instagram profile picture viewer.",
    howToSteps: [
      "Enter the Instagram username or paste the full profile URL.",
      "Click the view button to load the profile picture and profile context.",
      "Use the Zoom Full Size button to inspect the profile photo.",
      "Download the available HD or SD image if you need a saved copy.",
    ],
    features: [
      {
        title: "Full-size profile picture preview",
        description:
          "Shows the available Instagram profile photo larger than the app thumbnail.",
      },
      {
        title: "Zoom controls",
        description:
          "Open the profile picture in a full-screen viewer and zoom up to inspect details.",
      },
      {
        title: "Username and URL input",
        description:
          "Works with @handles, plain usernames, and full Instagram profile links.",
      },
      {
        title: "No-login workflow",
        description:
          "No Instagram account, password, app install, or browser extension is required.",
      },
      {
        title: "Download options",
        description:
          "Save the available profile picture image in HD or SD when Instagram returns it.",
      },
      {
        title: "Privacy-aware limits",
        description:
          "The tool handles profile pictures only and does not unlock private content.",
      },
    ],
    useCases: [
      {
        title: "Check a profile photo before replying",
        description:
          "Inspect the profile picture of a new follower, DM sender, or unknown account.",
      },
      {
        title: "Review a brand avatar",
        description:
          "View a company logo or creator avatar at a larger size before using it as a reference.",
      },
      {
        title: "Download your own profile picture",
        description:
          "Save a backup of your own Instagram profile photo or check how it looks in full size.",
      },
      {
        title: "Profile photo research",
        description:
          "Compare profile picture quality, crops, and identity signals across public profiles.",
      },
    ],
    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Profile Picture, DP, and PFP Mean the Same Thing</h3>
          <p>
            Instagram users describe the same image in different ways: profile picture, profile photo, DP, display picture, PFP, or avatar. This page targets the profile-picture wording directly while using the same reliable viewer workflow as the main Instagram DP tool.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Tool Can and Cannot Show</h3>
          <p>
            The viewer can show the public profile image and basic profile context returned by Instagram. It cannot show private posts, stories, reels, messages, or restricted account content.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Best Results</h3>
          <p>
            Use the exact username, including dots and underscores. If you paste a URL, make sure it points to the Instagram profile itself rather than a post, reel, or story.
          </p>
        </div>
      </div>
    ),
    aboutToolText:
      "This Instagram profile picture viewer loads the available profile photo for an Instagram account, shows it at a larger size, and provides zoom and download controls without requiring an Instagram login.",
    proTip:
      "For the highest success rate, paste the exact profile URL from Instagram and avoid display names, because display names are not unique.",
    faqs: [
      {
        question: "How do I view an Instagram profile picture in full size?",
        answer:
          "Enter the Instagram username or profile URL, then click the view button. The tool loads the available profile picture and lets you open it in a full-size zoom viewer.",
      },
      {
        question: "Is this different from an Instagram DP viewer?",
        answer:
          "No. Instagram profile picture viewer, Instagram DP viewer, PFP viewer, and profile photo viewer all describe the same type of tool.",
      },
      {
        question: "Can I zoom the Instagram profile picture?",
        answer:
          "Yes. Use the Zoom Full Size button after the profile loads. The zoom viewer includes zoom in, zoom out, reset, and save controls.",
      },
      {
        question: "Do I need to login to Instagram?",
        answer:
          "No. The tool is designed for no-login profile picture viewing and does not ask for your Instagram password.",
      },
      {
        question: "Can this view private Instagram posts?",
        answer:
          "No. It only handles profile pictures and public profile information. It does not access private posts, stories, reels, or messages.",
      },
      {
        question: "Why does an image sometimes fail to load?",
        answer:
          "Instagram can change image URLs, block some requests, or return temporary errors. Check the username, try the full profile URL, and retry after a short delay.",
      },
    ],
    relatedTools: [
      { name: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
      { name: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "YouTube Channel Checker", href: "/social-media-tools/channel-checker" },
      { name: "Influencer Rate Calculator", href: "/social-media-tools/influencer-rate-calculator" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

// Canonical points to the main Instagram DP Viewer page — this page serves the
// same tool and would otherwise cannibalize its rankings for DP-viewer queries.
export const metadata: Metadata = {
  ...toolConfig.metadata,
  alternates: {
    ...toolConfig.metadata.alternates,
    canonical: "https://fasttools.store/social-media-tools/instagram-dp",
  },
}

export default function InstagramProfilePictureViewerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />
}
