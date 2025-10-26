import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageBackgroundRemover } from "@/components/image-background-remover"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight, Code, Globe, Zap, Shield } from "lucide-react"

// Cleaned up and trimmed metadata (excessive keyword stuffing removed for clarity and modern SEO practice)
export const metadata: Metadata = {
    metadataBase: new URL("https://www.fasttools.store"),
    title: "Free AI Image Background Remover – Remove Backgrounds Online | FastTools",
    description:
        "Remove image backgrounds instantly with our free AI-powered tool. Create transparent backgrounds for photos, product images, and graphics — fast, accurate, and secure on any device.",
    keywords: [
        // Primary & Key Secondary Keywords - Sufficient for SEO
        "remove background", "background remover", "free background remover", "image background remover",
        "remove background from image", "online background remover", "transparent background",
        "ai background remover", "photo background remover", "remove bg", "background eraser",
        "high quality background remover", "background remover png", "client-side background remover",
        "no file upload required", "fast image background remover", "background remover online free"
    ],
    alternates: { canonical: "https://www.fasttools.store/image-tools/image-background-remover" },
    openGraph: {
        title: "Free AI Image Background Remover – Remove Backgrounds Online | FastTools",
        description: "Remove image backgrounds instantly with our free AI-powered tool. Create transparent backgrounds for photos, product images, and graphics — fast, accurate, and secure on any device.",
        url: "https://www.fasttools.store/image-tools/image-background-remover",
        type: "website",
        siteName: "FastTools",
        images: [
            {
                url: "https://www.fasttools.store/og-image.svg",
                width: 1200,
                height: 630,
                alt: "Free AI Image Background Remover – Remove Backgrounds Online | FastTools",
                type: "image/svg+xml",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free AI Image Background Remover – Remove Backgrounds Online | FastTools",
        description: "Remove image backgrounds instantly with our free AI-powered tool. Create transparent backgrounds for photos, product images, and graphics — fast, accurate, and secure on any device.",
        images: ["https://www.fasttools.store/og-image.svg"],
    },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Free AI Image Background Remover – Remove Backgrounds Online",
            alternateName: ["Background Remover", "Image Background Remover", "Remove Background Tool"],
            applicationCategory: "UtilitiesApplication",
            operatingSystem: ["Web Browser", "Windows", "macOS", "Linux", "iOS", "Android"],
            url: "https://www.fasttools.store/image-tools/image-background-remover",
            description:
                "Remove image backgrounds instantly with our free AI-powered tool. Create transparent backgrounds for photos, product images, and graphics — fast, accurate, and secure on any device.",
            inLanguage: ["en", "es", "fr", "de", "zh", "ar", "pt", "ru", "ja", "ko", "hi", "it", "nl", "tr", "pl"],
            isAccessibleForFree: true,
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock"
            },
            featureList: [
                "Multi‑format input (JPG, PNG, JPEG, WebP)", "Download processed image", "In‑browser background removal processing",
                "Background remover with AI technology", "Privacy-focused processing", "No file upload required",
                "High accuracy background removal", "Transparent PNG output", "Real-time processing", "Offline capability"
            ],
            author: {
                "@type": "Organization",
                name: "FastTools",
                url: "https://www.fasttools.store"
            },
            publisher: {
                "@type": "Organization",
                name: "FastTools",
                url: "https://www.fasttools.store",
                logo: {
                    "@type": "ImageObject",
                    url: "https://www.fasttools.store/logo.svg",
                    width: 320,
                    height: 80
                }
            },
            datePublished: "2024-01-01",
            dateModified: new Date().toISOString().split('T')[0],
            version: "2.0",
            softwareVersion: "2.0",
            downloadUrl: "https://www.fasttools.store/image-tools/image-background-remover",
            screenshot: "https://www.fasttools.store/og-image.svg",
            keywords: "remove background, free background remover, AI background remover, transparent background, background removal online",
            about: {
                "@type": "Thing",
                name: "Background Removal and Image Editing",
                description: "Free online tools for background removal, image editing, and photo processing"
            },
            isPartOf: {
                "@type": "WebSite",
                name: "FastTools",
                url: "https://www.fasttools.store"
            }
        }),
    },
}

// -----------------------------------------------------------------------------
// REDESIGNED MAIN COMPONENT
// -----------------------------------------------------------------------------

export default function ImageBackgroundRemoverPage() {
    return (
        <>
            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-8">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Image Tools", href: "/image-tools" },
                            { label: "Image Background Remover", href: "/image-tools/image-background-remover" },
                        ]}
                    />

                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1 lg:flex-[2] space-y-8">
                                {/* Hero Section */}
                                <div className="text-center space-y-5 animate-fade-in-up">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                                        <Code className="h-4 w-4 animate-pulse" />
                                        <span>AI Background Removal Tool</span>
                                        <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                                        Free AI Image Background Remover – Remove Backgrounds Online
                                    </h1>

                                    <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                                        Remove image backgrounds instantly with our free AI-powered tool. Create transparent backgrounds for photos, product images, and graphics — **fast, accurate, and secure** on any device.
                                    </p>

                                    {/* Feature Tags - Improved design and clarity */}
                                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm max-w-4xl mx-auto">
                                        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-card border border-primary/50 shadow-md transition hover:shadow-lg hover:border-primary">
                                            <Code className="h-5 w-5 text-primary mb-1" />
                                            <span className="text-primary font-bold text-sm">AI-Powered</span>
                                            <span className="text-xs text-muted-foreground">Smart & Accurate</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-card border border-green-500/50 shadow-md transition hover:shadow-lg hover:border-green-500">
                                            <Globe className="h-5 w-5 text-green-600 mb-1" />
                                            <span className="text-green-600 font-bold text-sm">Multi-Format</span>
                                            <span className="text-xs text-muted-foreground">JPG, PNG, WebP</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-card border border-accent/50 shadow-md transition hover:shadow-lg hover:border-accent">
                                            <Shield className="h-5 w-5 text-accent mb-1" />
                                            <span className="text-accent font-bold text-sm">Private</span>
                                            <span className="text-xs text-muted-foreground">In-Browser Processing</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-card border border-secondary-accent/50 shadow-md transition hover:shadow-lg hover:border-secondary-accent">
                                            <Zap className="h-5 w-5 text-secondary-accent mb-1" />
                                            <span className="text-secondary-accent font-bold text-sm">Instant</span>
                                            <span className="text-xs text-muted-foreground">Quick Results</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile/Tablet Ad - Top of Page */}
                                <div className="block xl:hidden mb-6">
                                    <div className="text-center mb-2">
                                        <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                                    </div>
                                    <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
                                </div>

                                {/* Tool Component - REDESIGNED FOR SIDE-BY-SIDE VIEW [OUTPUT | INPUT] */}
                                <div className="animate-fade-in-up animation-delay-200">
                                    <Card className="p-4 md:p-8 shadow-2xl border-2 border-primary/50">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

                                            {/* LEFT SIDE: Processed Image (Output) - as requested */}
                                            <div className="order-2 lg:order-1 space-y-4">
                                                <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                                                    <ArrowRight className="h-5 w-5 rotate-180 text-green-500" />
                                                    **Processed Image (Output)**
                                                </h2>
                                                {/* We assume the ImageBackgroundRemover component will display the result here */}
                                                <ImageBackgroundRemover />
                                                <div className="flex justify-center mt-4">
                                                    <Button variant="default" size="lg" className="text-base font-semibold">
                                                        <Zap className="h-5 w-5 mr-2" />
                                                        Download Transparent PNG
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* RIGHT SIDE: Upload Image (Input) - as requested */}
                                            <div className="order-1 lg:order-2 space-y-4 border-b pb-4 lg:border-b-0 lg:pb-0 lg:border-l lg:pl-10">
                                                <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                                                    <Code className="h-5 w-5 text-primary" />
                                                    **Upload Image (Input)**
                                                </h2>
                                                {/* Placeholder/Instructions for the Input Area */}
                                                <div className="h-64 flex items-center justify-center border-4 border-dashed border-muted-foreground/30 rounded-xl bg-muted/10">
                                <span className="text-muted-foreground text-center p-4">
                                    Drag & Drop an image here <br /> or click to browse files
                                    <p className="text-xs mt-2 font-medium">Supported formats: JPG, PNG, JPEG, WebP</p>
                                </span>
                                                </div>
                                                <div className="text-center">
                                                    <Button variant="outline" size="sm" className="font-semibold w-full">
                                                        Privacy Notice: Processing is 100% in-browser.
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>

                                {/* Mobile/Tablet Ad - After tool */}
                                <div className="block xl:hidden my-8">
                                    <div className="text-center mb-2">
                                        <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                                    </div>
                                    <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                                </div>

                                {/* Content Sections - Cleaned up and reorganized */}
                                <div className="space-y-10 animate-fade-in-up animation-delay-200">

                                    {/* Advanced AI Removal Section */}
                                    <div className="p-6 rounded-xl bg-card border border-border shadow-lg">
                                        <h2 className="text-2xl font-bold mb-4 text-card-foreground">Why Our AI Remover is the Best Free Tool</h2>
                                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                                            Our image background remover uses **cutting-edge AI technology** for high accuracy and superior privacy, processing everything locally in your browser.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <Card className="bg-muted/30 border-primary/20">
                                                <CardHeader>
                                                    <Zap className="h-6 w-6 text-primary mb-2" />
                                                    <CardTitle className="text-lg">Instant & Accurate</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-muted-foreground">
                                                        Achieves **95%+ accuracy** with clear images, handling complex edges like hair and fur better than most online tools.
                                                    </p>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-muted/30 border-green-500/20">
                                                <CardHeader>
                                                    <Shield className="h-6 w-6 text-green-600 mb-2" />
                                                    <CardTitle className="text-lg">Unmatched Privacy</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-muted-foreground">
                                                        All processing is **client-side** (in your browser). Your sensitive files **never leave your device** and are not stored on our servers.
                                                    </p>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-muted/30 border-secondary-accent/20">
                                                <CardHeader>
                                                    <Globe className="h-6 w-6 text-secondary-accent mb-2" />
                                                    <CardTitle className="text-lg">Universal Compatibility</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-muted-foreground">
                                                        Works perfectly on desktop, laptop, and mobile devices (Windows, Mac, iOS, Android) and supports JPG, PNG, JPEG, and WebP formats.
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>

                                    {/* Background Removal Use Cases & Applications */}
                                    <div className="p-6 rounded-xl bg-card border border-border shadow-lg">
                                        <h2 className="text-2xl font-bold mb-4 text-card-foreground">Background Removal Use Cases & Applications</h2>
                                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                                            Discover practical applications for our image background remover in business, e-commerce, and personal use.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground flex items-center gap-2"><ArrowRight className="h-4 w-4 text-primary" /> E-commerce & Product Images</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Create **professional product images** with transparent or pure white backgrounds required by platforms like Amazon, Shopify, and Etsy.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground flex items-center gap-2"><ArrowRight className="h-4 w-4 text-primary" /> Photo Editing & Graphic Design</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Get perfect cutouts for **social media content, digital art, and presentations**. Perfect for quick, high-quality image layering.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground flex items-center gap-2"><ArrowRight className="h-4 w-4 text-primary" /> Profile Pictures & Branding</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Clean up your professional headshots and team photos for consistent branding across your website and business cards.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground flex items-center gap-2"><ArrowRight className="h-4 w-4 text-primary" /> Platform Solutions</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Whether you prefer our **web tool, mobile app, or desktop download**, we offer fast, reliable solutions for every user need and operating system.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ Section */}
                                    <div className="p-6 rounded-xl bg-card border border-border shadow-lg">
                                        <h2 className="text-2xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                                                <FileText className="h-4 w-4 text-accent" />
                                            </div>
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6 mt-4">
                                            {/* FAQ 1 */}
                                            <div className="border-b pb-4">
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground">How accurate is the background removal?</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">Our background remover achieves **95%+ accuracy** with clear, high-resolution images. For best results, ensure your image has a good contrast between the subject and the background. The advanced AI handles most complexities automatically.</p>
                                            </div>

                                            {/* FAQ 2 */}
                                            <div className="border-b pb-4">
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground">What image formats are supported?</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">We support **JPG, JPEG, PNG, and WebP** for input. The output is a high-quality **PNG** with a transparent background to preserve the cutout perfectly. Processing occurs automatically upon upload.</p>
                                            </div>

                                            {/* FAQ 3 */}
                                            <div className="border-b pb-4">
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground">Is my data secure when using the background remover?</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">Yes, your data is completely secure. The background removal **processes all images locally in your browser**—your files never leave your device. We don't store, track, or transmit any of your images, ensuring maximum privacy.</p>
                                            </div>

                                            {/* FAQ 4 */}
                                            <div className="border-b pb-4">
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I improve removal accuracy?</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">Use **high-resolution images** with strong contrast between the subject and the background. Ensure the subject is clearly defined and not blurry. Our AI engine works best when the main subject is centered and well-lit.</p>
                                            </div>

                                            {/* FAQ 5 - Consolidated comparison */}
                                            <div className="border-b pb-4">
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground">How does this compare to Photoshop?</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">Our tool offers similar high-quality results to Photoshop's AI selection tools, but with **better automation and zero cost**. You don't need complex software installation or manual editing—just upload and download your transparent PNG in seconds.</p>
                                            </div>

                                            {/* FAQ 6 - Consolidated mobile/desktop apps */}
                                            <div>
                                                <h3 className="text-lg font-bold mb-2 text-card-foreground">Is there a mobile app or desktop version?</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">Our web tool is fully compatible with mobile devices. Additionally, we offer specific **desktop downloads** (for Windows) and dedicated **Android app** versions for users who prefer offline or native application functionality, ensuring we cover all your needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="hidden lg:block w-72">
                                <div className="sticky top-32 space-y-6">
                                    <div className="text-center">
                                        <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                                    </div>
                                    <AdSpace slot="sidebar" className="w-full h-96 border border-border rounded-xl shadow-sm bg-card" />

                                    <div className="text-center">
                                        <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                                    </div>
                                    <AdSpace slot="sidebar" className="w-full h-96 border border-border rounded-xl shadow-sm bg-card" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
