
import { UnifiedToolConfig } from "@/lib/create-tool-config";

export interface DpVariantConfig {
    slug: string;
    toolName: string;
    metaTitle: string;
    metaDescription: string;
    headerTitle: string;
    headerDescription: string;
    overviewText: string;
    faqOverrides?: Array<{ question: string; answer: string }>;
}

export const dpVariants: Record<string, DpVariantConfig> = {
    "private-downloader": {
        slug: "private-downloader",
        toolName: "Private Insta DP Downloader - View Locked Profile Pictures",
        metaTitle: "Private Insta DP Downloader - View Locked Profile Pictures HD",
        metaDescription: "View and download Instagram profile pictures from private accounts in full HD. 100% anonymous, works on locked profiles (DP only).",
        headerTitle: "Private Instagram DP Downloader",
        headerDescription: "The only tool that lets you view the Profile Picture (DP) of private Instagram accounts in full HD. Safe, anonymous, and free.",
        overviewText: "A **Private Insta DP Downloader** is a specialized tool designed to fetch the profile picture of private (locked) Instagram accounts. While you cannot see their posts, the **Profile Picture is always public data**. Our tool extracts this public image in high resolution (1080p), allowing you to see who is behind the private request.",
        faqOverrides: [
            {
                question: "Can I download private Instagram profile pictures?",
                answer: "Yes. While their posts are hidden, the profile picture itself is hosted on a public server. Our tool accesses this public image so you can view and download it in HD."
            }
        ]
    },
    "hd-1080p": {
        slug: "hd-1080p",
        toolName: "Instagram DP Viewer 1080p - Full HD Quality",
        metaTitle: "Instagram DP Viewer 1080p - Download Full HD Profile Pictures",
        metaDescription: "Download Instagram profile pictures in original 1080p quality. No compression, no blurry thumbnails. Get the raw HD image.",
        headerTitle: "Instagram DP Viewer 1080p (Full HD)",
        headerDescription: "Download the original, uncompressed 1080x1080 profile picture. Stop staring at blurry thumbnails.",
        overviewText: "The **Instagram DP Viewer 1080p** focuses on one thing: Quality. Instagram often compresses profile pictures on the mobile app to save data. Our tool bypasses this compression and fetches the **original source file** (often 1080x1080 pixels) directly from Instagram's servers."
    },
    "pc-viewer": {
        slug: "pc-viewer",
        toolName: "Instagram DP Viewer for PC & Mac",
        metaTitle: "Instagram DP Viewer for PC - View Profile Pics on Desktop",
        metaDescription: "The best way to view Instagram profile pictures on your PC or Mac. Zoom, save, and download without using the mobile app.",
        headerTitle: "Instagram DP Viewer for PC",
        headerDescription: "Optimized for Desktop users. View and download Instagram DPs on your large screen in full detail.",
        overviewText: "Using Instagram on a PC is limited—you can't zoom in on profile pictures. Our **Instagram DP Viewer for PC** solves this. It provides a desktop-optimized interface to search, view, and download profile pictures in full resolution, making it perfect for designers, marketers, and casual users on laptops or desktops."
    },
    "zoom-profile-picture": {
        slug: "zoom-profile-picture",
        toolName: "Insta Zoom - Zoom into Instagram Profile Pictures",
        metaTitle: "Insta Zoom - Zoom & Enlarge Instagram Profile Pictures",
        metaDescription: "Zoom into any Instagram profile picture. Enlarge small avatars to full screen size (8x zoom). See every detail clearly.",
        headerTitle: "Insta Zoom - Enlarge Profile Pictures",
        headerDescription: "Zoom in up to 8x on any Instagram profile picture. See details you missed on the small mobile screen.",
        overviewText: "Instagram profile pictures are tiny on mobile screens. **Insta Zoom** allows you to 'blow up' the image to its full size. Whether you're trying to identify a face or admire a logo, our Zoom tool enlarges the avatar up to 1080p without losing quality."
    },
    "anonymous-viewer": {
        slug: "anonymous-viewer",
        toolName: "Anonymous Instagram DP Viewer - No Login",
        metaTitle: "Anonymous Instagram DP Viewer - Stalk Profile Pics Secretly",
        metaDescription: "View Instagram profile pictures 100% anonymously. No login, no notification, no trace. The user will never know.",
        headerTitle: "Anonymous Instagram DP Viewer",
        headerDescription: "Spy on profile pictures without getting caught. 100% anonymous viewing and downloading. No login required.",
        overviewText: "Privacy is key. The **Anonymous Instagram DP Viewer** acts as a proxy between you and Instagram. When you search for a user, our server fetches the image, not your device. This means the account owner sees absolutely no activity from you. You can view, zoom, and download their DP without them ever knowing."
    }
};
