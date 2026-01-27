
import { UnifiedToolConfig } from "@/lib/create-tool-config";

export interface DownloaderVariantConfig {
    slug: string;
    toolName: string;
    metaTitle: string;
    metaDescription: string;
    headerTitle: string;
    headerDescription: string;
    overviewText: string;
    faqOverrides?: Array<{ question: string; answer: string }>;
    // New fields for unique content
    uniqueFeatures?: string[];
    uniqueSteps?: string[];
}

export const downloaderVariants: Record<string, DownloaderVariantConfig> = {
    "reels-downloader": {
        slug: "reels-downloader",
        toolName: "Instagram Reels Downloader - Save Reels Audio & Video",
        metaTitle: "Instagram Reels Downloader - Download Reels Audio & Video HD",
        metaDescription: "Download Instagram Reels in full HD (1080p). Save Reels with original audio. No watermark, unlimited downloads, free online tool.",
        headerTitle: "Instagram Reels Downloader",
        headerDescription: "Save Instagram Reels with original audio in HD. No watermark. Fast and free.",
        overviewText: "An **Instagram Reels Downloader** is a specialized tool that extracts the high-quality video and audio file from an Instagram Reel link. Unlike screen recording, which captures low-quality video and UI overlays, our tool fetches the raw MP4 file directly from Instagram's server. This ensures you get the original 1080p resolution and crisp audio, perfect for repurposing on TikTok or YouTube Shorts.",
        uniqueSteps: [
            "Open the Instagram app and find the Reel you want to save.",
            "Tap the three dots (...) and select 'Copy Link'.",
            "Paste the link into the Reels Downloader above.",
            "Click 'Download' to get the HD MP4 file with audio."
        ],
        uniqueFeatures: [
            "Preserves Original Audio: Keeps the trending audio track intact.",
            "No Watermark: Clean video without the 'Instagram' logo.",
            "Full 9:16 Aspect Ratio: Perfect for reposting on TikTok/Shorts."
        ]
    },
    "video-downloader": {
        slug: "video-downloader",
        toolName: "Instagram Video Downloader - Save Videos to MP4",
        metaTitle: "Instagram Video Downloader - Download Instagram Videos MP4 HD",
        metaDescription: "Download Instagram Videos to MP4 in HD. Save feed videos, IGTV, and Live replays. Works on PC, iPhone, and Android.",
        headerTitle: "Instagram Video Downloader (HD MP4)",
        headerDescription: "Download any Instagram video to MP4. Feed videos, IGTV, and more.",
        overviewText: "The **Instagram Video Downloader** allows you to save standard feed videos and IGTV content directly to your device. Instagram videos are often compressed when viewing on mobile data, but the source file is usually much higher quality. Our tool bypasses the app's compression and downloads the original MP4 source file, often in 1080p at 30fps or 60fps.",
        uniqueSteps: [
            "Navigate to the Instagram Video or IGTV post.",
            "Copy the URL from the address bar or share menu.",
            "Paste it into the Video Downloader input box.",
            "Select 'Download Video' to save the MP4 file."
        ],
        uniqueFeatures: [
            "Supports Long Videos: Download IGTV and long feed videos.",
            "HD Quality: Up to 1080p/4K depending on source.",
            "Universal MP4 Format: Plays on any device or media player."
        ]
    },
    "photo-downloader": {
        slug: "photo-downloader",
        toolName: "Instagram Photo Downloader - Save HD Images",
        metaTitle: "Instagram Photo Downloader - Download Full Size Instagram Photos",
        metaDescription: "Download Instagram Photos in original full size. Save high-resolution images from any public post. No login required.",
        headerTitle: "Instagram Photo Downloader",
        headerDescription: "Save Instagram photos in full original resolution. No screenshots, no quality loss.",
        overviewText: "An **Instagram Photo Downloader** is essential because Instagram prevents users from saving images directly to their phone gallery. Taking a screenshot reduces quality and includes screen clutter. Our tool extracts the original JPEG file uploaded by the photographer, ensuring you get the maximum resolution available (often 1080x1350px for portraits).",
        uniqueSteps: [
            "Find the Instagram photo you want to save.",
            "Copy the link to the post.",
            "Paste it here to extract the original image file.",
            "Click 'Download Image' to save the full-resolution JPEG."
        ],
        uniqueFeatures: [
            "Original Resolution: Get the exact file uploaded by the user.",
            "No Compression: No lossy screenshot artifacts.",
            "Metadata Preservation: Keeps the original image quality."
        ]
    },
    "carousel-downloader": {
        slug: "carousel-downloader",
        toolName: "Instagram Carousel Downloader - Download Multiple Photos",
        metaTitle: "Instagram Carousel Downloader - Save Multiple Photos/Videos",
        metaDescription: "Download all photos and videos from an Instagram Carousel post. Save multiple images at once. Batch downloader for Instagram.",
        headerTitle: "Instagram Carousel Downloader",
        headerDescription: "Download every photo and video from a Carousel post (slideshow) in one click.",
        overviewText: "The **Instagram Carousel Downloader** solves the problem of saving multiple images from a single post (slideshow). Manually screenshotting 10 slides is tedious and low quality. Our tool detects all media items in a Carousel URL and lists them individually, allowing you to download the specific slides you want in full HD.",
        uniqueSteps: [
            "Copy the link to the Carousel (slideshow) post.",
            "Paste it into the Carousel Downloader.",
            "Wait for the tool to list all images/videos in the post.",
            "Download individual slides or save them all."
        ],
        uniqueFeatures: [
            "Batch Detection: Finds all media in the carousel.",
            "Mixed Media Support: Downloads both photos and videos from the same post.",
            "Selective Download: Choose only the slides you want."
        ]
    },
    "audio-downloader": {
        slug: "audio-downloader",
        toolName: "Instagram Audio Downloader - Extract MP3 from Reels",
        metaTitle: "Instagram Audio Downloader - Convert Reels to MP3",
        metaDescription: "Extract audio from Instagram Reels and Videos. Convert Instagram to MP3. Download trending songs and dialogues.",
        headerTitle: "Instagram Audio Downloader (MP3)",
        headerDescription: "Extract the audio track from any Reel or Video. Save as MP3.",
        overviewText: "An **Instagram Audio Downloader** allows creators to extract just the sound (MP3) from a Reel or Video. This is incredibly useful for saving trending audio, dialogues, or background music to use in your own edits. We separate the audio track from the video container and provide a clean MP3 download link.",
        uniqueSteps: [
            "Find a Reel with the audio you want.",
            "Copy the Reel link.",
            "Paste it here and click 'Download'.",
            "Select 'Download Audio' to get the MP3 file."
        ],
        uniqueFeatures: [
            "MP3 Extraction: Converts video sound to MP3.",
            "High Bitrate: Preserves audio clarity (up to 320kbps).",
            "No Video: Saves storage by only downloading the sound."
        ]
    },
    "story-saver": {
        slug: "story-saver",
        toolName: "Instagram Story Saver - Download Stories anonymously",
        metaTitle: "Instagram Story Saver - Download Stories Anonymously",
        metaDescription: "Download Instagram Stories from public accounts. Save stories before they disappear. 100% anonymous story viewer.",
        headerTitle: "Instagram Story Saver",
        headerDescription: "Save Stories from public accounts before they vanish after 24 hours.",
        overviewText: "The **Instagram Story Saver** lets you preserve ephemeral content. Stories disappear after 24 hours, but our tool lets you save them permanently to your device. It works for public accounts and downloads the video or image file anonymously, so the user never knows you saved it.",
        uniqueSteps: [
            "Enter the Username of the account (or copy a story link).",
            "Click 'Check Stories'.",
            "View the active stories for that user.",
            "Click 'Download' on the specific story you want to save."
        ],
        uniqueFeatures: [
            "Anonymous Viewing: The user won't see your name in viewer list.",
            "Permanent Save: Keep stories after they expire.",
            "Video & Photo: Supports both story types."
        ]
    }
};
