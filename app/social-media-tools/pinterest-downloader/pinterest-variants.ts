
import { DpVariantConfig } from "../instagram-dp/dp-variants";

export const pinterestVariants: Record<string, DpVariantConfig> = {
    "video": {
        slug: "video",
        toolName: "Pinterest Video Downloader 4K - Save Reels & Stories",
        metaTitle: "Pinterest Video Downloader 4K - Download Reels & Stories HD",
        metaDescription: "Download Pinterest videos, Reels, and Stories in 4K & 1080p HD. The best free saver for Pinterest videos on iPhone & Android.",
        headerTitle: "Pinterest Video Downloader (4K/HD)",
        headerDescription: "Download high-quality videos, TV clips, and aesthetic Reels from Pinterest. Supports 1080p and 4K.",
        overviewText: "Looking for a **Pinterest Video Downloader** that actually keeps the quality? Most tools compress videos, but we fetch the original 1080p or 4K stream. Perfect for saving design tutorials, cooking recipes, or aesthetic background videos for your own projects.",
        faqOverrides: [
            {
                question: "Can I download Pinterest Reels?",
                answer: "Yes! Our tool works perfectly with Pinterest's new 'Watch' tab and Reels format."
            }
        ]
    },
    "image": {
        slug: "image",
        toolName: "Pinterest Image Downloader - Save Original Photos",
        metaTitle: "Pinterest Image Downloader - Download Full Size Photos",
        metaDescription: "Download Pinterest images in full original resolution. Get the uncompressed JPG/PNG photo, not the screenshot.",
        headerTitle: "Pinterest Photo Downloader",
        headerDescription: "Download the original, uncompressed image. Essential for designers and mood boards.",
        overviewText: "Don't screenshot! Screenshots reduce quality. Our **Pinterest Image Downloader** finds the hidden 'Original' size URL (often 3000px+) so you can download the crispest version of any pin. Ideal for printing, wallpapers, or professional design work.",
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
        metaTitle: "Pinterest GIF Downloader - Download Animated GIFs & Stickers",
        metaDescription: "Download animated GIFs from Pinterest. Save motion pins as .GIF files to your phone or computer.",
        headerTitle: "Pinterest GIF Saver",
        headerDescription: "Save animated stickers and moving pictures. Keeps the animation playing.",
        overviewText: "Pinterest is full of amazing animated GIFs and stickers, but the app doesn't let you save them easily. Our tool detects the **.gif** source file and downloads it directly, ensuring the animation keeps playing in your gallery or Discord.",
        faqOverrides: [
            {
                question: "How do I save a GIF?",
                answer: "Just paste the link to the animated pin. We automatically detect the GIF format and serve that file."
            }
        ]
    }
};
