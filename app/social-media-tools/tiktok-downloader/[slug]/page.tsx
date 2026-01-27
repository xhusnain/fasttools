
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageLayout } from "@/components/common/tool-page-layout";
import { tiktokVariants } from "../tiktok-variants";
import dynamic from "next/dynamic";
import { createToolConfig } from "@/lib/create-tool-config";

const TiktokDownloader = dynamic(() => import("@/components/social-media/tiktok-downloader/tiktok-downloader").then(mod => mod.TiktokDownloader), {
  loading: () => <div className="min-h-[600px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
})

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const variant = tiktokVariants[params.slug];
  
  if (!variant) {
    return {};
  }

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    alternates: {
      canonical: `/social-media-tools/tiktok-downloader/${params.slug}`
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(tiktokVariants).map((slug) => ({
    slug,
  }));
}

export default function TiktokVariantPage({ params }: PageProps) {
  const variant = tiktokVariants[params.slug];

  if (!variant) {
    notFound();
  }

  // Create a base config and override with variant data
  const toolConfig = createToolConfig({
    toolName: variant.toolName,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/social-media-tools/tiktok-downloader/${variant.slug}`,

    header: {
      title: variant.headerTitle,
      description: variant.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
    },

    breadcrumbs: [
      { label: "Social Media Tools", href: "/social-media-tools" },
      { label: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { label: variant.headerTitle, href: `/social-media-tools/tiktok-downloader/${variant.slug}` },
    ],

    content: {
      // We pass the variant overview text as custom content
      overview: variant.overviewText,
      // We can inherit or override other sections. 
      // For now, let's keep the core functionality components but update text.
      howToSteps: [
        "Copy the TikTok link you want to process.",
        "Paste it into the input box above.",
        "Click Download and choose your format."
      ],
      features: [
        "Free & Unlimited",
        "High Quality Output",
        "No Login Required", 
        "Fast Processing"
      ],
      // If the variant has specific FAQ overrides, we could merge them here
      faqs: variant.faqOverrides ? variant.faqOverrides : []
    }
  });

  return <ToolPageLayout {...toolConfig.getLayoutProps(<TiktokDownloader />)} />;
}
