
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageLayout } from "@/components/common/tool-page-layout";
import { tiktokVariants } from "../tiktok-variants";
import dynamic from "next/dynamic";
import { createToolConfig } from "@/lib/create-tool-config";

import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const variant = tiktokVariants[slug];

  if (!variant) {
    return {};
  }

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    alternates: {
      canonical: `/social-media-tools/tiktok-downloader/${slug}`
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(tiktokVariants).map((slug) => ({
    slug,
  }));
}

export default async function TiktokVariantPage({ params }: PageProps) {
  const { slug } = await params;
  const variant = tiktokVariants[slug];

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
      faqs: variant.faqOverrides ? variant.faqOverrides : [],
      aboutTool: variant.overviewText,
    }
  });

  return <ToolPageLayout {...toolConfig.getLayoutProps(<UnifiedDownloader defaultPlatform="tiktok" placeholder="https://www.tiktok.com/@username/video/..." />)} />;
}
