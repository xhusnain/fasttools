
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
    uniqueFeatures?: string[];
    uniqueSteps?: string[];
}

export const downloaderVariants: Record<string, DownloaderVariantConfig> = {
    "reels-downloader": {
        slug: "reels-downloader",
        toolName: "Instagram Reels Downloader (Audio Included) - Save to Gallery",
        metaTitle: "Instagram Reels Downloader - Download Reels Audio & Video HD",
        metaDescription: "Download Instagram Reels in full HD (1080p). Save Reels with original audio. No watermark, unlimited downloads, free online tool.",
        headerTitle: "Instagram Reels Downloader (Audio Included)",
        headerDescription: "Save Instagram Reels with original audio in HD 1080p. No watermark. Fast, free, and works on iPhone/Android.",
        overviewText: "The **Instagram Reels Downloader** is a specialized tool engineered to extract high-quality video and audio files from Instagram Reel links. While screen recording captures low-quality video with UI overlays and often muffled audio, our tool connects directly to Instagram's CDN to fetch the raw **MP4 file**. This ensures you get the **Original 1080p Resolution** and **Crisp Audio**, perfectly synced. This is the ideal solution for creators who need to repurpose Reels for TikTok, YouTube Shorts, or Pinterest without the Instagram watermark.",
        uniqueSteps: [
            "Open the Instagram app and find the Reel you want to save.",
            "Tap the 'Share' icon (paper plane) or three dots (...) and select 'Copy Link'.",
            "Paste the link into the FastTools Reels Downloader above.",
            "Click 'Download' to extract the HD MP4 file with full audio."
        ],
        uniqueFeatures: [
            "Preserves Original Audio: Keeps the trending audio track intact (perfect for TikTok trends).",
            "No Watermark: Clean video without the 'Instagram' logo or UI overlay.",
            "Full 9:16 Aspect Ratio: Downloads the vertical video in its native format.",
            "1080p HD Support: Fetches the highest resolution available."
        ]
    },
    "video-downloader": {
        slug: "video-downloader",
        toolName: "Instagram Video Downloader (1080p) - Save IGTV & Feed",
        metaTitle: "Instagram Video Downloader - Download Instagram Videos MP4 HD",
        metaDescription: "Download Instagram Videos to MP4 in HD. Save feed videos, IGTV, and Live replays. Works on PC, iPhone, and Android.",
        headerTitle: "Instagram Video Downloader (HD MP4)",
        headerDescription: "Download any Instagram video to MP4. Feed videos, IGTV, and Live replays in original quality.",
        overviewText: "The **Instagram Video Downloader** allows you to save standard feed videos, IGTV content, and Live Replays directly to your device. Instagram compresses videos heavily to save mobile data, but the source file stored on their servers is often much higher quality. Our tool bypasses the app's compression and downloads the **Original MP4 Source File**, typically in **1080p at 30fps or 60fps**. This is perfect for archiving content, watching videos offline without buffering, or analyzing competitor video strategies.",
        uniqueSteps: [
            "Navigate to the Instagram Video, IGTV, or Live Replay post.",
            "Copy the URL from the browser address bar or the app's share menu.",
            "Paste it into the Video Downloader input box.",
            "Select 'Download Video' to save the MP4 file to your gallery/downloads."
        ],
        uniqueFeatures: [
            "Supports Long Videos: Download IGTV episodes and long feed videos.",
            "HD Quality: Up to 1080p or 4K depending on the original upload.",
            "Universal MP4 Format: Plays natively on any iPhone, Android, or PC media player.",
            "Live Replay Support: Save Live videos after they have been posted."
        ]
    },
    "photo-downloader": {
        slug: "photo-downloader",
        toolName: "Instagram Photo Downloader (Original Quality) - HD & 4K",
        metaTitle: "Instagram Photo Downloader - Download Full Size Instagram Photos",
        metaDescription: "Download Instagram Photos in original full size. Save high-resolution images from any public post. No login required.",
        headerTitle: "Instagram Photo Downloader (Original Quality)",
        headerDescription: "Save Instagram photos in full original resolution (up to 4K). No screenshots, no quality loss.",
        overviewText: "An **Instagram Photo Downloader** is essential for designers, archivists, and fans because Instagram prevents users from saving images directly. Taking a screenshot reduces quality significantly (capturing your screen's resolution, not the image's) and includes UI clutter. Our tool extracts the **Original JPEG File** uploaded by the photographer, ensuring you get the maximum resolution available—often **1080x1350px** for portraits or even higher for some uploads. We preserve the original color profile and metadata.",
        uniqueSteps: [
            "Find the Instagram photo you want to save.",
            "Copy the link to the post (tap three dots > Link).",
            "Paste it here to extract the original image file.",
            "Click 'Download Image' to save the full-resolution JPEG."
        ],
        uniqueFeatures: [
            "Original Resolution: Get the exact file uploaded by the user (no downscaling).",
            "No Compression Artifacts: Avoid the blocky look of screenshots.",
            "Metadata Preservation: Keeps the original image quality and format.",
            "Profile Picture Support: Can also extract high-res profile images."
        ]
    },
    "carousel-downloader": {
        slug: "carousel-downloader",
        toolName: "Instagram Carousel Downloader - Download Multiple Photos",
        metaTitle: "Instagram Carousel Downloader - Save Multiple Photos/Videos",
        metaDescription: "Download all photos and videos from an Instagram Carousel post. Save multiple images at once. Batch downloader for Instagram.",
        headerTitle: "Instagram Carousel Downloader (Batch Save)",
        headerDescription: "Download every photo and video from a Carousel post (slideshow) in one click.",
        overviewText: "The **Instagram Carousel Downloader** solves the tedious problem of saving multiple images from a single post (slideshow). Manually screenshotting 10 slides is time-consuming and results in poor quality. Our tool parses the Carousel URL, detects all media items (photos and videos mixed), and lists them individually. This allows you to **Batch Download** the entire set or selectively save specific slides in **Full HD**. Perfect for saving tutorial slides, comic strips, or photo dumps.",
        uniqueSteps: [
            "Copy the link to the Carousel (slideshow) post.",
            "Paste it into the Carousel Downloader.",
            "Wait for the tool to list all images/videos contained in the post.",
            "Click 'Download' on individual slides or save them all."
        ],
        uniqueFeatures: [
            "Batch Detection: Instantly finds all 10+ slides in a post.",
            "Mixed Media Support: Downloads both photos and videos from the same carousel.",
            "Selective Download: Choose only the specific slides you need.",
            "High Res: Gets the original file for every single slide."
        ]
    },
    "audio-downloader": {
        slug: "audio-downloader",
        toolName: "Instagram Audio Downloader - Extract MP3 from Reels",
        metaTitle: "Instagram Audio Downloader - Convert Reels to MP3",
        metaDescription: "Extract audio from Instagram Reels and Videos. Convert Instagram to MP3. Download trending songs and dialogues.",
        headerTitle: "Instagram Audio Downloader (MP3 Converter)",
        headerDescription: "Extract the audio track from any Reel or Video. Save as high-quality MP3.",
        overviewText: "An **Instagram Audio Downloader** allows creators to extract just the sound (MP3) from a Reel, Video, or IGTV post. This is incredibly useful for saving **Trending Audio**, viral dialogues, ASMR sounds, or background music to use in your own edits. We use advanced processing to separate the audio track from the video container and provide a clean **MP3 Download Link**. No need to download a huge video file just to get a 3MB song.",
        uniqueSteps: [
            "Find a Reel or Video with the audio/song you want.",
            "Copy the direct link to the post.",
            "Paste it here and click 'Download'.",
            "Select 'Download Audio' to get the isolated MP3 file."
        ],
        uniqueFeatures: [
            "MP3 Extraction: Converts video sound to universally compatible MP3.",
            "High Bitrate: Preserves audio clarity (up to 320kbps if available).",
            "Storage Saver: Save space by only downloading the small audio file.",
            "Clean Metadata: Ready for import into video editors."
        ]
    },
    "story-saver": {
        slug: "story-saver",
        toolName: "Instagram Story Saver & Downloader - View Anonymously",
        metaTitle: "Instagram Story Saver - Download Stories Anonymously",
        metaDescription: "Download Instagram Stories from public accounts. Save stories before they disappear. 100% anonymous story viewer.",
        headerTitle: "Instagram Story Saver (Anonymous)",
        headerDescription: "Save Stories from public accounts before they vanish after 24 hours. View anonymously.",
        overviewText: "The **Instagram Story Saver** lets you preserve ephemeral content that would otherwise disappear forever. Stories vanish after 24 hours, but our tool lets you **Save Them Permanently** to your device. Crucially, it works as an **Anonymous Story Viewer**—because we fetch the story via our servers, your username never appears in the account owner's 'Viewed By' list. This is perfect for market research, saving memories from friends, or keeping updates from your favorite influencers.",
        uniqueSteps: [
            "Enter the Username of the account (or copy a specific story link).",
            "Click 'Check Stories' to scan for active 24h stories.",
            "View the list of available video and photo stories.",
            "Click 'Download' on the specific story you want to save."
        ],
        uniqueFeatures: [
            "Anonymous Viewing: The user won't know you watched/saved their story.",
            "Permanent Archive: Keep stories forever, bypassing the 24h limit.",
            "Video & Photo Support: Downloads both static images and video stories.",
            "High Quality: Saves the story in the exact resolution it was uploaded."
        ]
    }
};
