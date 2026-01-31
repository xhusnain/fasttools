
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ToolPageLayout } from "@/components/common/tool-page-layout";
import { createToolConfig } from "@/lib/create-tool-config";
import { downloaderVariants } from "../downloader-variants";
import { CheckCircle2, X } from "lucide-react";

import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

// SSG Params
export async function generateStaticParams() {
    return Object.keys(downloaderVariants).map((slug) => ({
        slug: slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

// Metadata
export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const variant = downloaderVariants[params.slug];
    if (!variant) return {};

    return {
        title: variant.metaTitle,
        description: variant.metaDescription,
        alternates: {
            canonical: `/social-media-tools/instagram-downloader/${params.slug}`,
        },
    };
}

export default async function InstagramDownloaderVariantPage(props: Props) {
    const params = await props.params;
    const variant = downloaderVariants[params.slug];

    if (!variant) {
        notFound();
    }

    const toolConfig = createToolConfig({
        toolName: variant.toolName,
        description: variant.metaDescription,
        metaTitle: variant.metaTitle,
        metaDescription: variant.metaDescription,
        path: `/social-media-tools/instagram-downloader/${params.slug}`,

        schemaOptions: {
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Android, iOS, Windows, macOS",
            ratingValue: "4.9",
            ratingCount: "25000",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
            },
        },

        header: {
            title: variant.headerTitle,
            description: variant.headerDescription,
            titleSize: "medium",
            descriptionSize: "small",
        },

        breadcrumbs: [
            { label: "Social Media Tools", href: "/social-media-tools" },
            { label: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
            { label: variant.toolName, href: `/social-media-tools/instagram-downloader/${params.slug}` },
        ],

        content: {
            overview: (
                <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {variant.overviewText}
                    </p>

                    <div className="my-8 overflow-x-auto rounded-lg border border-border">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="text-xs uppercase bg-muted/50 text-muted-foreground">
                            <tr>
                                <th className="px-6 py-3 border-b border-border">Feature</th>
                                <th className="px-6 py-3 border-b border-border text-primary font-bold">FastTools</th>
                                <th className="px-6 py-3 border-b border-border">SaveFrom</th>
                                <th className="px-6 py-3 border-b border-border">SnapInsta</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                            <tr className="bg-background">
                                <td className="px-6 py-4 font-medium border-r border-border">Speed</td>
                                <td className="px-6 py-4 text-green-500 font-bold border-r border-border">&lt; 2s (Direct CDN)</td>
                                <td className="px-6 py-4 border-r border-border">3-5s</td>
                                <td className="px-6 py-4">3-5s</td>
                            </tr>
                            <tr className="bg-background">
                                <td className="px-6 py-4 font-medium border-r border-border">Quality</td>
                                <td className="px-6 py-4 text-green-500 font-bold border-r border-border">Original 1080p</td>
                                <td className="px-6 py-4 border-r border-border">Compressed</td>
                                <td className="px-6 py-4">Original</td>
                            </tr>
                            <tr className="bg-background">
                                <td className="px-6 py-4 font-medium border-r border-border">Ads</td>
                                <td className="px-6 py-4 text-green-500 font-bold border-r border-border">Zero Popups</td>
                                <td className="px-6 py-4 text-red-500 border-r border-border">High</td>
                                <td className="px-6 py-4 text-red-500">High</td>
                            </tr>
                            <tr className="bg-background">
                                <td className="px-6 py-4 font-medium border-r border-border">Audio</td>
                                <td className="px-6 py-4 text-green-500 font-bold border-r border-border">Preserved</td>
                                <td className="px-6 py-4 border-r border-border">Sometimes Muted</td>
                                <td className="px-6 py-4">Preserved</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),

            howToSteps: variant.uniqueSteps || [
                "Find the Instagram content (Video, Reel, Photo) and copy its link.",
                "Paste the URL into the FastTools input box above.",
                "Click 'Download' and wait a split second.",
                "Choose your quality (HD, SD, or MP3) and save it to your device.",
            ],

            features: variant.uniqueFeatures || [
                "Original HD Quality: Get the 1080x1080 pixel original image, not the compressed thumbnail.",
                "100% Anonymous: The account owner will never know you viewed their profile picture.",
                "No Login Required: Secure and private. No password or account needed.",
                "Fast Processing: Results load in under 2 seconds.",
                "Public Accounts Only: We respect privacy and only support public profiles.",
            ],

            aboutTool: (
                <div className="space-y-8">
                    <article className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">
                            Why Use FastTools for {variant.toolName}?
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {variant.overviewText}
                        </p>
                    </article>

                    <article className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">
                            Legal & Safe
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            FastTools respects user privacy. We only allow downloading from public accounts. We do not store any content on our servers; we simply act as a bridge to Instagram's public CDN.
                        </p>
                    </article>
                </div>
            ),

            faqs: [
                ...(variant.faqOverrides || []),
                {
                    question: "Is this tool free?",
                    answer: "Yes, FastTools is 100% free and unlimited. No hidden fees.",
                },
                {
                    question: "Do I need to login?",
                    answer: "No. You do not need an Instagram account to use this tool.",
                },
            ],

            relatedTools: [
                { name: "Instagram Reels Downloader", href: "/social-media-tools/instagram-downloader/reels-downloader" },
                { name: "Instagram Video Downloader", href: "/social-media-tools/instagram-downloader/video-downloader" },
                { name: "Instagram Photo Downloader", href: "/social-media-tools/instagram-downloader/photo-downloader" },
                { name: "Audio/MP3 Downloader", href: "/social-media-tools/instagram-downloader/audio-downloader" },
                { name: "Story Saver", href: "/social-media-tools/instagram-downloader/story-saver" },
                { name: "Carousel Downloader", href: "/social-media-tools/instagram-downloader/carousel-downloader" },
            ],
        },
    });

    return <ToolPageLayout {...toolConfig.getLayoutProps(<UnifiedDownloader defaultPlatform="instagram" placeholder="https://www.instagram.com/p/..." />)} />;
}
