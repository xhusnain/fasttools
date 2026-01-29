
import { DpVariantConfig } from "../instagram-dp/dp-variants";

export const pinterestVariants: Record<string, DpVariantConfig> = {
    "video": {
        slug: "video",
        toolName: "Pinterest Video Downloader 4K- Free Online Saver",
        metaTitle: "Pinterest Video Downloader 4K - Download Reels & Stories (Free)",
        metaDescription: "Download Pinterest videos, Reels, and Stories in 4K & 1080p HD. The best free online saver for Pinterest videos on iPhone, Android & PC. No watermark.",
        headerTitle: "Pinterest Video Downloader (4K/HD)",
        headerDescription: "Download high-quality videos, TV clips, and aesthetic Reels from Pinterest. Fast, free, and supports 1080p/4K.",
        overviewText: "Looking for a **free Pinterest Video Downloader** that keeps the original quality? Most tools compress videos, but our 4K downloader fetches the original 1080p or 4K stream directly from Pinterest. Perfect for saving aesthetic Reels, design tutorials, and cooking videos without watermarks.",
        faqOverrides: [
            {
                question: "Can I download Pinterest Reels?",
                answer: "Yes! Our tool works perfectly with Pinterest's new 'Watch' tab and Reels format."
            }
        ]
    },
    "image": {
        slug: "image",
        toolName: "Pinterest Image Downloader - Save High Quality Photos",
        metaTitle: "Pinterest Image Downloader - Download Original HD Photos (Free)",
        metaDescription: "Download Pinterest images in full original resolution (HD/4K). Get the uncompressed JPG/PNG photo without Login. Best free Pinterest photo saver.",
        headerTitle: "Pinterest Photo Downloader",
        headerDescription: "Download the original, uncompressed image in full HD quality. Essential for designers and mood boards.",
        overviewText: "Don't settle for low-quality screenshots! Our **Pinterest Image Downloader** extracts the hidden 'Original' size URL (often 3000px+) so you can save the crispest version of any Pin. Ideal for printing, wallpapers, and professional design work. Free and unlimited usage.",
        faqOverrides: [
            {
                question: "Is this high resolution?",
                answer: "Yes, we fetch the 'originals' bucket from Pinterest's CDN, which is the maximum quality available."
            }
        ]
    },
    "gif": {
        slug: "gif",
        toolName: "Pinterest GIF Downloader - Save Animated Pins",
        metaTitle: "Pinterest GIF Downloader - Download Animated GIFs & Stickers Online",
        metaDescription: "Download animated GIFs and moving stickers from Pinterest easily. Save motion pins as .GIF files to your phone or computer. Free & Fast.",
        headerTitle: "Pinterest GIF Saver",
        headerDescription: "Save animated stickers and moving pictures in original GIF format. Keeps the animation playing smoothly.",
        overviewText: "Pinterest is full of amazing animated GIFs and stickers, but saving them can be tricky. Our **Pinterest GIF Downloader** automatically detects the .gif source file and downloads it directly, ensuring the animation keeps playing in your gallery, Discord, or social media.",
        faqOverrides: [
            {
                question: "How do I save a GIF?",
                answer: "Just paste the link to the animated pin. We automatically detect the GIF format and serve that file."
            }
        ]
    }
};
