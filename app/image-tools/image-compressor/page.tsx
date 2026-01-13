import { ImageCompressor } from "@/components/image/image-compressor"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
    toolName: "Image Compressor",
    description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images. Best for web SEO and performance.",
    metaTitle: "Free Image Compressor - Reduce Image Size Online (Unlimited)",
    metaDescription: "Compress JPG, PNG, and WebP images online for free. Reduce file size up to 90% without losing quality. No limits, secure client-side compression.",
    path: "/image-tools/image-compressor",

    schemaOptions: {
        applicationCategory: "PhotoEditor",
        ratingValue: "4.9",
        ratingCount: "2150"
    },

    header: {
        title: "Free Image Compressor (Optimize Images Online)",
        description: "Reduce image file size instantly while maintaining quality. optimize JPG, PNG, and WebP images for faster website loading and better SEO.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Image Tools", href: "/image-tools" },
        { label: "Image Compressor", href: "/image-tools/image-compressor" },
    ],

    content: {
        overview: "Our advanced image compressor reduces file size by up to 90% while maintaining visible quality. Perfect for web developers, bloggers, and designers who need to optimize images for faster page load times and better SEO rankings. Unlike other tools that upload your photos to a server, our tool compresses images locally in your browser using advanced algorithms. This ensures 100% privacy and security - your images never leave your device. Support for all major formats including JPG, PNG, and WebP results in smaller files that look identical to the originals.",

        howToSteps: [
            "Upload your image by dragging and dropping or clicking the upload area. Supports JPG, PNG, and WebP.",
            "Adjust the compression settings if needed. You can control the max size (MB) and max dimensions.",
            "Preview the compressed image and check the file size reduction percentage.",
            "Download your optimized image instantly. No watermarks, no sign-up required."
        ],

        features: [
            "Smart lossy compression for maximum size reduction with minimal quality loss",
            "100% Client-side processing - your images are never uploaded to any server",
            "Supports JPG, PNG, and WebP formats",
            "Batch processing supported (one by one for maximum control)",
            "Adjustable quality and resizing options",
            "Real-time preview of the compressed image",
            "No file size limits or daily usage restrictions",
            "Works offline once loaded",
            "Free forever with no watermarks"
        ],

        useCases: [
            "Website Optimization: Reduce image sizes to improve page load speed, Core Web Vitals, and SEO rankings.",
            "Email Marketing: Compress header images and graphics to ensure emails load quickly and don't get clipped.",
            "Social Media: Optimize images for Instagram, Facebook, and Twitter to ensure fast uploads and correct display.",
            "Storage: Save disk space on your devices or cloud storage by compressing photo archives.",
            "Portfolios: showcase high-quality work without slow loading times that drive visitors away."
        ],

        aboutTool: "This Image Compressor uses the browser's built-in canvas capabilities and modern compression algorithms to reduce file sizes efficiently. By leveraging client-side processing, we eliminate the need for server uploads, making the process faster and more secure. We use smart compression techniques that selectively reduce the number of colors and remove unnecessary metadata to shrinking files significantly without human-visible quality loss.",

        proTip: "For the best balance between quality and file size for the web, try aiming for a file size under 200KB for large banner images and under 100KB for blog content. Using the WebP format often provides better compression than JPG or PNG.",

        faqs: [
            {
                question: "Is this image compressor free?",
                answer: "Yes, our image compressor is 100% free to use with no hidden costs, subscriptions, or limits."
            },
            {
                question: "Is it safe to use?",
                answer: "Absolutely. Compression happens entirely in your browser. Your images are never uploaded to our servers, ensuring complete privacy."
            },
            {
                question: "Does it reduce image quality?",
                answer: "We use 'smart lossy' compression which significantly reduces file size with negligible impact on visual quality. You can adjust the quality settings to find your perfect balance."
            },
            {
                question: "What formats are supported?",
                answer: "We support the most common web formats: JPEG, PNG, and WebP."
            }
        ],

        relatedTools: [
            { name: "Image Background Remover", href: "/image-tools/image-background-remover" },
            { name: "Image to Text", href: "/image-tools/image-to-text" }
        ],
    }
})

export const metadata = toolConfig.metadata

export default function ImageCompressorPage() {
    return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageCompressor />)} />
}
