
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ToolPageLayout } from "@/components/common/tool-page-layout";
import { createToolConfig } from "@/lib/create-tool-config";
import { dpVariants } from "../dp-variants";
import { EyeOff, User, Lock } from "lucide-react";

// Dynamic Import of the Component
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

// Generate Static Params for SSG
export async function generateStaticParams() {
    return Object.keys(dpVariants).map((slug) => ({
        slug: slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate Metadata based on Slug
export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const variant = dpVariants[params.slug];
    if (!variant) return {};

    return {
        title: variant.metaTitle,
        description: variant.metaDescription,
        alternates: {
            canonical: `/social-media-tools/instagram-dp/${params.slug}`,
        },
    };
}

export default async function InstagramDpVariantPage(props: Props) {
    const params = await props.params;
    const variant = dpVariants[params.slug];

    if (!variant) {
        notFound();
    }

    // Merge Base Config with Variant Overrides
    const toolConfig = createToolConfig({
        toolName: variant.toolName,
        description: variant.metaDescription,
        metaTitle: variant.metaTitle,
        metaDescription: variant.metaDescription,
        path: `/social-media-tools/instagram-dp/${params.slug}`,

        schemaOptions: {
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Android, iOS, Windows, macOS",
            ratingValue: "4.9",
            ratingCount: "1250",
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
            { label: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
            { label: variant.toolName, href: `/social-media-tools/instagram-dp/${params.slug}` },
        ],

        content: {
            overview: (
                <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {variant.overviewText}
                    </p>

                    <div className="my-8 overflow-x-auto rounded-lg border border-border">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs uppercase bg-muted/50 text-muted-foreground">
                            <tr>
                                <th className="px-6 py-3">Feature</th>
                                <th className="px-6 py-3 text-primary font-bold">FastTools</th>
                                <th className="px-6 py-3">Standard Viewers</th>
                                <th className="px-6 py-3">Instagram App</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                            <tr className="bg-background">
                                <td className="px-6 py-4 font-medium">Resolution</td>
                                <td className="px-6 py-4 text-green-500 font-bold">Full HD (1080p)</td>
                                <td className="px-6 py-4">Often Compressed</td>
                                <td className="px-6 py-4 text-red-500">Thumbnail (150px)</td>
                            </tr>
                            <tr className="bg-background">
                                <td className="px-6 py-4 font-medium">Anonymity</td>
                                <td className="px-6 py-4 text-green-500 font-bold">100% Private</td>
                                <td className="px-6 py-4">Varies</td>
                                <td className="px-6 py-4">Not Anonymous</td>
                            </tr>
                            <tr className="bg-background">
                                <td className="px-6 py-4 font-medium">Login Required</td>
                                <td className="px-6 py-4 text-green-500 font-bold">No</td>
                                <td className="px-6 py-4">Sometimes</td>
                                <td className="px-6 py-4 text-red-500">Yes</td>
                            </tr>
                            <tr className="bg-background">
                                <td className="px-6 py-4 font-medium">Speed</td>
                                <td className="px-6 py-4 text-green-500 font-bold">&lt; 2 Seconds</td>
                                <td className="px-6 py-4">5+ Seconds</td>
                                <td className="px-6 py-4">Instant</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),

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
                    <article className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">
                            {variant.toolName} – Why Use This Tool?
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {variant.overviewText}
                        </p>
                    </article>

                    <article className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">
                            How to Use {variant.toolName}
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

                    <article className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">
                            Can You View Private Instagram DPs?
                        </h2>
                        <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg">
                            <h4 className="text-base text-foreground font-bold mb-2 flex items-center">
                                <span className="mr-2">💡</span> Pro Tip: Private Account Limitations
                            </h4>
                            <p className="text-base text-foreground font-medium">
                                Yes, you can view the profile picture of a private account.
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                While Instagram restricts access to posts and stories for private accounts, the <strong>Profile Picture (DP) is always public data</strong>. Our tool leverages this public API endpoint to fetch the high-resolution version of the avatar.
                            </p>
                        </div>
                    </article>
                </div>
            ),

            faqs: [
                ...(variant.faqOverrides || []),
                {
                    question: "How to download Instagram profile picture 1080p?",
                    answer:
                        "Simply enter the username in our Insta DP Viewer, wait for the HD image to load, and click the 'Download' button. The image will be saved to your device in original 1080p quality.",
                },
                {
                    question: "Can I view private Instagram DP?",
                    answer:
                        "Yes, the profile picture itself is public data. You can view the DP of private accounts, but you cannot view their private posts or stories.",
                },
                {
                    question: "Does Instagram notify when someone views DP?",
                    answer:
                        "No. Instagram does not send notifications when someone views or downloads a profile picture. Our tool is anonymous.",
                },
            ],

            relatedTools: [
                { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
                { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
                // Internal Linking to Other Variants
                { name: "Private Downloader", href: "/social-media-tools/instagram-dp/private-downloader" },
                { name: "HD 1080p Viewer", href: "/social-media-tools/instagram-dp/hd-1080p" },
                { name: "PC Viewer", href: "/social-media-tools/instagram-dp/pc-viewer" },
                { name: "Insta Zoom", href: "/social-media-tools/instagram-dp/zoom-profile-picture" },
                { name: "Anonymous Viewer", href: "/social-media-tools/instagram-dp/anonymous-viewer" },
            ],
        },
    });

    return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />;
}
