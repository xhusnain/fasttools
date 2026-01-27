
import { DpVariantConfig } from "../instagram-dp/dp-variants";

export const tiktokVariants: Record<string, DpVariantConfig> = {
    "mp3": {
        slug: "mp3",
        toolName: "TikTok MP3 Downloader - Download Audio & Sound (HQ)",
        metaTitle: "TikTok MP3 Downloader - Convert Video to Audio (No Watermark)",
        metaDescription: "Download TikTok MP3 audio in high quality (320kbps). Extract sound, music, and songs from TikTok videos instantly. Free & Fast.",
        headerTitle: "TikTok to MP3 Converter",
        headerDescription: "Extract the sound, music, or dialogue from any TikTok video. Save as a high-quality MP3 file instantly.",
        overviewText: "The **TikTok MP3 Downloader** lets you extract audio from TikTok videos in the highest possible quality. Whether it's a trending song, a funny sound effect, or a voiceover, our tool converts the video to a clean MP3 file (up to 320kbps). Perfect for setting ringtones or saving music offline.",
        faqOverrides: [
            {
                question: "How to download TikTok MP3?",
                answer: "Paste the video link and click Download. We extract the original AAC audio stream and save it as MP3."
            }
        ]
    },
    "no-watermark": {
        slug: "no-watermark",
        toolName: "TikTok Downloader Without Watermark (HD 4K)",
        metaTitle: "TikTok Video Downloader Without Watermark - Save HD & 4K MP4",
        metaDescription: "Download TikTok videos without watermark in Full HD & 4K. The fastest TikTok saver for PC, iPhone, and Android. No app needed.",
        headerTitle: "TikTok Downloader Without Watermark",
        headerDescription: "Remove the TikTok logo automatically. Download clean, original quality videos (1080p/4K) for reposting.",
        overviewText: "Searching for **'TikTok downloader without watermark'**? You found the best one. We access the clean 'source' file directly from TikTok's servers, bypassing the logo overlay. This means you get the video exactly as the creator uploaded it—crisp, clear, and professional. Ideal for reposting to Instagram Reels or YouTube Shorts.",
        faqOverrides: [
            {
                question: "Is this better than SnapTik?",
                answer: "Yes! We use the same direct-source method but with faster servers and no popup ads."
            }
        ]
    },
    "story": {
        slug: "story",
        toolName: "TikTok Story Downloader - Save Slideshows & Videos",
        metaTitle: "TikTok Story Downloader - Download Stories & Slideshows",
        metaDescription: "Download TikTok Stories and Photo Slideshows. Save temporary stories before they disappear. View anonymously.",
        headerTitle: "TikTok Story Saver",
        headerDescription: "Save TikTok Stories and Photo Mode carousels. Keep them forever before they expire.",
        overviewText: "TikTok Stories disappear after 24 hours, but our **TikTok Story Downloader** lets you keep them forever. Whether it's a video story or a 'Photo Mode' slideshow, we extract the media in full resolution. You can even use this to view stories anonymously without the creator knowing.",
        faqOverrides: [
            {
                question: "Can I download stories anonymously?",
                answer: "Yes. Since you don't log in, the creator will never see your name in their viewer list."
            }
        ]
    }
};
