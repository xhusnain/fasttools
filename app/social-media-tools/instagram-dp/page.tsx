import { Metadata } from "next";
import dynamic from "next/dynamic";

const InstagramDpViewer = dynamic(
    () =>
        import("@/components/social-media/instagram-dp-viewer").then(
            (mod) => mod.InstagramDpViewer
        ),
    {
      loading: () => (
          <div className="min-h-[600px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
      ),
    }
);

import { ToolPageLayout } from "@/components/common/tool-page-layout";
import { createToolConfig } from "@/lib/create-tool-config";
import {
  EyeOff,
  User,
  Lock,
} from "lucide-react";

const toolConfig = createToolConfig({
  toolName: "Insta DP Viewer - Instagram Profile Picture Download 1080p & HD",
  description:
      "Use the fastest Insta DP Viewer to view and download Instagram profile pictures in full HD (1080p). Works for public accounts only. No login required.",
  metaTitle: "Insta DP Viewer – Instagram Profile Picture Download 1080p & HD",
  metaDescription:
      "Use the fastest Insta DP Viewer to view and download Instagram profile pictures in full HD (1080p). Works for public accounts only. No login required.",
  path: "/social-media-tools/instagram-dp",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    ratingValue: "4.9",
    ratingCount: "1250",
  },

  header: {
    title: "Insta DP Viewer – View & Download Instagram Profile Picture in HD",
    description:
        "The fastest way to view and download Instagram profile pictures in full HD (1080p). 100% anonymous, no login required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
  ],

  content: {
    overview:
        "Use our **Insta DP Viewer** to instantly view and download Instagram profile pictures in full HD (1080p). Unlike the Instagram app which shows small, compressed thumbnails, our tool fetches the publicly available profile picture from Instagram’s CDN. Detailed view, zoom support, and instant download—all 100% anonymous and free.",

    howToSteps: [
      "Enter the Instagram username (with or without @) into the input field.",
      "Click 'View Profile Picture' to extract the HD image.",
      "Wait less than 2 seconds for the result to load.",
      "Click 'Download' to save the full-size 1080p image to your device.",
    ],

    features: [
      "Original HD Quality: Get the 1080x1080 pixel original image, not the compressed thumbnail.",
      "100% Anonymous: The account owner will never know you viewed their profile picture.",
      "No Login Required: Secure and private. No password or account needed.",
      "Fast Processing: Results load in under 2 seconds.",
      "Public Accounts Only: We respect privacy and only support public profiles.",
      "Universal Support: Works perfectly on iPhone, Android, PC, and Mac.",
      "Free Forever: No hidden fees or limits.",
      "Safe & Secure: No data storage or tracking.",
    ],

    useCases: [
      "Content Creators: Analyze competitor branding and profile images.",
      "Designers: See profile picture details for inspiration.",
      "Marketers: Research influencer profile aesthetics.",
      "Personal Use: Save your own profile picture in full resolution.",
      "Archiving: Keep a backup of important profile images.",
    ],

    aboutTool: (
        <div className="space-y-8">
          {/* H2: Insta DP Viewer HD – Full Size Profile Picture */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Insta DP Viewer HD – Full Size Profile Picture
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              When you view a profile on the Instagram app, you are seeing a compressed version of the image, usually resized to 150x150 pixels. This saves data but reduces quality. Our **Insta DP Viewer HD** tool bypasses this limitation by fetching the publicly available profile picture from Instagram’s CDN in its original resolution. This means you can see every detail clearly, without the blurriness of the app's thumbnail.
            </p>
          </article>

          {/* H2: How to Use Insta DP Viewer */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              How to Use Insta DP Viewer
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Using our tool is incredibly simple. Just follow these steps:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Find the username of the public Instagram account you want to view.</li>
              <li>Type it into the search box above (e.g., @username).</li>
              <li>Hit the "View Profile Picture" button.</li>
              <li>In seconds, you will see the profile picture in full HD.</li>
            </ul>
          </article>

          {/* H2: Download Instagram Profile Picture 1080p */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Download Instagram Profile Picture 1080p
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Once the image is loaded, you can save it. Our tool ensures you get the file in JPG format with no quality loss. Whether you need it for a project or just want to save a memory, you can download the profile picture instantly to your device in HD.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <EyeOff className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">No Login Needed</h4>
                <p className="text-xs text-muted-foreground">We never ask for your Instagram password or account details.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <User className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">No Trace Left</h4>
                <p className="text-xs text-muted-foreground"> The profile owner will never know you viewed or downloaded their DP.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Encrypted</h4>
                <p className="text-xs text-muted-foreground">Your search history is not stored on our servers.</p>
              </div>
            </div>
          </article>

          {/* H2: Can You View Private Instagram DP? */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Can You View Private Instagram DP?
            </h2>
            <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-base text-foreground font-medium">
                No. You cannot view private profile pictures.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                We strictly adhere to privacy standards. Our tool only works on public accounts. Attempting to access private data violates terms of service and user trust. If an account is private, you must follow them on Instagram to see their content.
              </p>
            </div>
          </article>
        </div>
    ),

    faqs: [
      {
        question: "How to download Instagram profile picture 1080p?",
        answer:
            "Simply enter the username in our Insta DP Viewer, wait for the HD image to load, and click the 'Download' button. The image will be saved to your device in original 1080p quality.",
      },
      {
        question: "Can I view private Instagram DP?",
        answer:
            "No. Our tool respects user privacy and only allows you to view and download profile pictures from public Instagram accounts.",
      },
      {
        question: "Does Instagram notify when someone views DP?",
        answer:
            "No. Instagram does not send notifications when someone views or downloads a profile picture. Our tool is anonymous.",
      },
      {
        question: "Is Insta DP Viewer safe and anonymous?",
        answer:
            "Yes. It is completely safe and anonymous. We do not require any login, we do not track your activity, and the account owner has no way of knowing you viewed their DP.",
      },
    ],

    relatedTools: [
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
    ],
  },
});

export const metadata: Metadata = {
  ...toolConfig.metadata,
  title: `Insta DP Viewer - Instagram Profile Picture Download 1080p & HD`,
};

export default function InstagramDpPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />;
}
