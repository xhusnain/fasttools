
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
        toolName: "Instagram Reels Downloader - Download Instagram Reels Audio & Video",
        metaTitle: "Instagram Reels Downloader - Download Reels Audio & Video (MP4/MP3)",
        metaDescription: "Download Instagram Reels video with audio. Save Reels in HD 1080p. Extract MP3 audio from Reels. No watermark, unlimited free downloads for iPhone/Android.",
        headerTitle: "Instagram Reels Downloader (Audio Included)",
        headerDescription: "Download Instagram Reels with original audio. Save in HD 1080p without watermark. Works on all devices.",
        overviewText: "The **Instagram Reels Downloader** by FastTools is the ultimate solution for saving short-form video content. Unlike screen recording which captures UI clutter and low-quality audio, our tool extracts the **Original Reel Source File** directly from Instagram. This ensures you get **Crisp 1080p Video** and **High-Fidelity Audio** perfectly synced. Whether you want to repost to TikTok, save a trending audio track, or archive your favorite creators' content, our Reels downloader gets it done in seconds without any watermarks.",
        uniqueSteps: [
            "Open the Instagram app and find the Reel you want to save.",
            "Tap the 'Share' icon (paper plane) or three dots (...) and select 'Copy Link'.",
            "Paste the link into the FastTools Reels Downloader above.",
            "Click 'Download' to extract the HD MP4 file with full audio."
        ],
        uniqueFeatures: [
            "Original Audio Preservation: Downloads videos with the original trending audio track intact.",
            "No Watermark: Clean video files ready for cross-platform sharing (TikTok, Shorts).",
            "Full HD Vertical: Saves the 9:16 aspect ratio video in 1080p resolution.",
            "MP3 Extraction: Option to download just the audio track if needed."
        ]
    },
    "video-downloader": {
        slug: "video-downloader",
        toolName: "Instagram Video Downloader - Save Instagram Videos to Gallery (MP4)",
        metaTitle: "Instagram Video Downloader - Download Instagram Videos Online (HD)",
        metaDescription: "Download Instagram videos to your gallery. Save feed videos, IGTV, and live replays in MP4 format. Free online tool for iPhone, Android, and PC.",
        headerTitle: "Instagram Video Downloader (HD MP4)",
        headerDescription: "Save any Instagram video to your device. Feed posts, IGTV, and Live replays in original quality.",
        overviewText: "The **Instagram Video Downloader** is designed for preserving standard feed videos, IGTV episodes, and Live replays. Instagram heavily compresses video playback on mobile to save data, but the source file is often much higher quality. Our tool bypasses this compression to fetch the **Original MP4 Source File**, often in **1080p at 60fps**. This is the best way to watch videos offline without buffering or to save content that might be deleted later.",
        uniqueSteps: [
            "Navigate to the Instagram Video, IGTV, or Live Replay post.",
            "Copy the URL from the browser address bar or the app's share menu.",
            "Paste it into the Video Downloader input box.",
            "Select 'Download Video' to save the MP4 file to your gallery/downloads."
        ],
        uniqueFeatures: [
            "Long Video Support: Perfect for downloading full-length IGTV episodes and interviews.",
            "60fps Support: Captures high frame rate gaming and sports content smoothly.",
            "Universal Compatibility: MP4 files work on every smartphone and computer.",
            "No Login: Safe and secure downloading without providing account details."
        ]
    },
    "photo-downloader": {
        slug: "photo-downloader",
        toolName: "Instagram Photo Downloader - Save High Quality Instagram Photos",
        metaTitle: "Instagram Photo Downloader - Download Full Size Profile Pictures & Posts",
        metaDescription: "Download Instagram photos in full original resolution (HD/4K). Save profile pictures (DP) and post images. Best free Instagram image downloader.",
        headerTitle: "Instagram Photo Downloader (Original Size)",
        headerDescription: "Download full-resolution Instagram photos. Save profile pictures and post images without screenshots.",
        overviewText: "Stop taking low-quality screenshots! The **Instagram Photo Downloader** extracts the original, full-resolution image file uploaded by the photographer. Screenshots capture your screen's resolution, not the image's, often resulting in pixelated, blurry copies. Our tool grabs the **Original JPEG** directly from the CDN, ensuring you get the maximum **1080x1350px (Portrait)** or even **4K** quality where available. Perfect for saving high-quality wallpapers, art, and photography.",
        uniqueSteps: [
            "Find the Instagram photo or profile picture you want to save.",
            "Copy the link to the post (tap three dots > Link).",
            "Paste it here to extract the original image file.",
            "Click 'Download Image' to save the full-resolution JPEG."
        ],
        uniqueFeatures: [
            "Max Resolution: Fetches the largest available version of the image.",
            "No UI Clutter: Clean images without Instagram buttons or tags.",
            "Metadata Intact: Preserves color profiles for accurate reproduction.",
            "Profile Pic Zoom: Can also download full-size profile pictures (DP)."
        ]
    },
    "carousel-downloader": {
        slug: "carousel-downloader",
        toolName: "Instagram Carousel Downloader - Download All Photos & Videos",
        metaTitle: "Instagram Carousel Downloader - Save Multiple Photos/Videos (Slideshow)",
        metaDescription: "Download all photos and videos from an Instagram Carousel post. Batch download Instagram slideshows. Save multiple images at once.",
        headerTitle: "Instagram Carousel Downloader (Batch Save)",
        headerDescription: "Download entire Instagram albums. Save every photo and video from a carousel post in one go.",
        overviewText: "The **Instagram Carousel Downloader** is a productivity lifesaver. Downloading a 10-slide carousel one by one is tedious, and screenshots ruin the quality. Our tool parses the entire carousel post, identifies every single photo and video, and presents them for **Batch Downloading**. You can download all 10 slides in high quality with just a few clicks. Ideally suited for saving educational carousels, comic strips, event photo dumps, and product showcases.",
        uniqueSteps: [
            "Copy the link to the Carousel (slideshow) post.",
            "Paste it into the Carousel Downloader.",
            "Wait for the tool to list all images/videos contained in the post.",
            "Click 'Download' on individual slides or save them all."
        ],
        uniqueFeatures: [
            "Batch Processing: Detects and lists all media items in a post instantly.",
            "Mixed Media: Handles carousels containing both videos and photos.",
            "Selective Save: Download only the specific slides you want.",
            "Original Quality: Every slide is downloaded in its full native resolution."
        ]
    },
    "audio-downloader": {
        slug: "audio-downloader",
        toolName: "Instagram Audio Downloader - Convert Instagram Video to MP3",
        metaTitle: "Instagram to MP3 Converter - Download Audio from Reels & Videos",
        metaDescription: "Convert Instagram videos and Reels to MP3. Extract audio from Instagram. Download trending songs, sounds, and music from Instagram.",
        headerTitle: "Instagram Audio Downloader (MP3 Converter)",
        headerDescription: "Extract MP3 audio from any Instagram Reel or Video. Save trending sounds and music.",
        overviewText: "The **Instagram Audio Downloader** allows you to strip the visuals and keep just the sound. It's an **Instagram to MP3 Converter** that is perfect for content creators looking for trending audio, musicians saving samples, or anyone who wants to turn a video speech into a podcast clip. We extract the audio stream directly and provide it as a widely compatible **MP3 file**, saving you storage space and data compared to downloading the full video.",
        uniqueSteps: [
            "Find a Reel or Video with the audio/song you want.",
            "Copy the direct link to the post.",
            "Paste it here and click 'Download'.",
            "Select 'Download Audio' to get the isolated MP3 file."
        ],
        uniqueFeatures: [
            "MP3 Conversion: Instantly converts video sound to MP3 format.",
            "High Bitrate: Extracts the highest quality audio stream available (up to 320kbps).",
            "Data Saver: Download a 3MB song instead of a 50MB video.",
            "Editor Ready: Files are ready to import into CapCut, Premiere, or other editors."
        ]
    },
    "story-saver": {
        slug: "story-saver",
        toolName: "Instagram Story Saver - View & Download Stories Anonymously",
        metaTitle: "Instagram Story Saver - Anonymous Story Viewer & Downloader",
        metaDescription: "View and download Instagram Stories anonymously. Save Stories before they disappear (24h). No login required, free story saver.",
        headerTitle: "Instagram Story Saver (Anonymous)",
        headerDescription: "Watch and download Instagram Stories anonymously. Save content before it vanishes.",
        overviewText: "The **Instagram Story Saver** gives you the power to archive ephemeral content. Stories are designed to disappear after 24 hours, but with our tool, you can **Save Them Forever**. More importantly, it functions as an **Anonymous Story Viewer**. Since our servers fetch the story on your behalf, your name never appears in the 'Viewed By' list of the account owner. This is an essential tool for discreetly monitoring competitors, saving memories from friends, or keeping offline copies of important updates.",
        uniqueSteps: [
            "Enter the Username of the account (or copy a specific story link).",
            "Click 'Check Stories' to scan for active 24h stories.",
            "View the list of available video and photo stories.",
            "Click 'Download' on the specific story you want to save."
        ],
        uniqueFeatures: [
            "100% Anonymous: View stories without notifying the user.",
            "24h Bypass: Save stories to your device before they expire.",
            "highlights Support: Can also access and download from Story Highlights.",
            "Full Fidelity: Downloads stories in their original upload quality."
        ]
    },
    "app": {
        slug: "app",
        toolName: "Instagram Video Downloader App - Best for iPhone & Android",
        metaTitle: "Instagram Video Downloader App - Install Free on iPhone & Android",
        metaDescription: "The best Instagram video downloader app for iPhone and Android. Install as a PWA for fast, ad-free downloads. Better than generic app store alternatives.",
        headerTitle: "Instagram Downloader App (iOS & Android)",
        headerDescription: "The best free app to download Instagram videos. Install on your home screen for instant access.",
        overviewText: "Looking for the **Best Instagram Video Downloader App** for your iPhone or Android? FastTools offers a superior alternative to clutter-filled app store downloads. Our tool functions as a **Progressive Web App (PWA)**, meaning you can 'install' it directly to your home screen from your browser. This gives you a full-screen, native app experience without the massive storage footprint, intrusive tracking, or battery drain of traditional apps. It's the fastest, safest way to save Instagram content on mobile.",
        uniqueSteps: [
            "Open this page in Safari (iOS) or Chrome (Android).",
            "Tap the 'Share' button (iOS) or Menu dots (Android).",
            "Select 'Add to Home Screen'.",
            "Launch the FastTools app from your home screen to download videos instantly."
        ],
        uniqueFeatures: [
            "No App Store Account: Install directly without an Apple ID or Google account.",
            "Zero Storage Impact: Takes up less than 1MB significantly lighter than native apps.",
            "Always Updated: You always have the latest version without manual updates.",
            "Privacy First: We don't ask for contacts, location, or camera permissions."
        ]
    },
    "save": {
        slug: "save",
        toolName: "Save From Instagram - Video, Photo & Reel Saver",
        metaTitle: "Save Instagram Video - Save From Net Instagram Downloader",
        metaDescription: "Save videos from Instagram easily. The best 'Save From' tool for Instagram Reels, Photos, and Videos. Quick, free, and secure saver.",
        headerTitle: "Save From Instagram (Video & Photo Saver)",
        headerDescription: "The easiest way to save content from Instagram. Simply paste a link to save to your device.",
        overviewText: "When you want to **Save From Instagram**, you need a tool that is reliable, fast, and uncomplicated. Our generic 'Save' tool is built for speed and simplicity. Whether you are trying to save a funny Reel, a memorable photo, or an informative video tutorial, this tool handles it all. It acts as a universal **Instagram Saver**, automatically detecting the content type and providing the correct download link. No need to switch between different tools; just paste and save.",
        uniqueSteps: [
            "Copy the link of the Instagram content you wish to save.",
            "Paste it into the 'Save From' input field.",
            "Let the tool detect if it's a video, photo, or reel.",
            "Tap 'Save' to download the file to your local storage."
        ],
        uniqueFeatures: [
            "Universal Saver: Works on all link types (p/, reel/, tv/, stories/).",
            "One-Click Saving: Streamlined process for rapid archiving.",
            "Format Auto-Detect: Automatically serves MP4 for videos and JPEG for photos.",
            "Secure Downloading: Uses HTTPS to ensure your download is private and safe."
        ]
    },
    "4k": {
        slug: "4k",
        toolName: "4K Instagram Downloader - High Quality Video & Photo",
        metaTitle: "4K Instagram Video Downloader - Download Highest Quality (1080p+)",
        metaDescription: "Download Instagram videos in 4K and 1080p HD. The highest quality Instagram downloader available. Save crystal clear videos and photos.",
        headerTitle: "4K Instagram Video Downloader (High Quality)",
        headerDescription: "Download Instagram content in the maximum possible quality. Up to 4K and 1080p HD support.",
        overviewText: "For creators, editors, and quality enthusiasts, the **4K Instagram Downloader** is the premium choice. While Instagram often compresses content for mobile viewing, the source files are frequently uploaded in much higher quality. Our tool prioritizes fetching the **Highest Bitrate** and **Maximum Resolution** streams available from Instagram's CDN. While true 4K is rare on Instagram, we ensure you get the absolute best version that exists—typically crisp **1080p High Bitrate** files that look stunning on desktop monitors and large screens.",
        uniqueSteps: [
            "Find a high-quality post (shot on professional cameras).",
            "Copy the link and paste it into the 4K Downloader.",
            "The tool will scan for the highest resolution stream available.",
            "Download the 'HD' or 'Max Quality' file option presented."
        ],
        uniqueFeatures: [
            "Max Quality Priority: Algorithms favor resolution and bitrate over file size.",
            "Uncompressed Audio: Extracts the best available viewing audio.",
            "Pixel Perfect: Perfect for editors who need high-res assets for montages.",
            "Clear Details: See details in photos and videos that are lost in standard downloads."
        ]
    }
};
