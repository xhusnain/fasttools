
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageLayout } from "@/components/common/tool-page-layout";
import { pinterestVariants } from "../pinterest-variants";
import dynamic from "next/dynamic";
import { createToolConfig } from "@/lib/create-tool-config";

const PinterestDownloader = dynamic(() => import("@/components/social-media/pinterest-downloader/pinterest-downloader").then(mod => mod.PinterestDownloader), {
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
  const variant = pinterestVariants[params.slug];
  
  if (!variant) {
    return {};
  }

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    alternates: {
      canonical: `/social-media-tools/pinterest-downloader/${params.slug}`
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(pinterestVariants).map((slug) => ({
    slug,
  }));
}

export default function PinterestVariantPage({ params }: PageProps) {
  const variant = pinterestVariants[params.slug];

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

  return <ToolPageLayout {...toolConfig.getLayoutProps(<PinterestDownloader />)} />;
}
