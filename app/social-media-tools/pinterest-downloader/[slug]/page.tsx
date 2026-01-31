
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageLayout } from "@/components/common/tool-page-layout";
import { pinterestVariants } from "../pinterest-variants";
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
  const variant = pinterestVariants[slug];

  if (!variant) {
    return {};
  }

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    alternates: {
      canonical: `/social-media-tools/pinterest-downloader/${slug}`
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(pinterestVariants).map((slug) => ({
    slug,
  }));
}

export default async function PinterestVariantPage({ params }: PageProps) {
  const { slug } = await params;
  const variant = pinterestVariants[slug];

  if (!variant) {
    notFound();
  }

  const toolConfig = createToolConfig({
    toolName: variant.toolName,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/social-media-tools/pinterest-downloader/${variant.slug}`,

    header: {
      title: variant.headerTitle,
      description: variant.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
    },

    breadcrumbs: [
      { label: "Social Media Tools", href: "/social-media-tools" },
      { label: "Pinterest Downloader", href: "/social-media-tools/pinterest-downloader" },
      { label: variant.headerTitle, href: `/social-media-tools/pinterest-downloader/${variant.slug}` },
    ],

    content: {
      overview: variant.overviewText,
      howToSteps: [
        "Find the Pin you want to save.",
        "Copy the link (pinterest.com/pin/...)",
        "Paste it above and hit Download."
      ],
      features: [
        "Original Quality Extraction",
        "Video & Image Support",
        "No Login Needed",
        "Secure & Private"
      ],
      faqs: variant.faqOverrides ? variant.faqOverrides : [],
      aboutTool: variant.overviewText,
    }
  });

  return <ToolPageLayout {...toolConfig.getLayoutProps(<UnifiedDownloader defaultPlatform="pinterest" placeholder="https://www.pinterest.com/pin/..." />)} />;
}
