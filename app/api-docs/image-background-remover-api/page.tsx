import { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Code, Zap, Shield, Image as ImageIcon, Layers, Monitor, Copy } from "lucide-react"
import { CopyButton } from "@/components/common/copy-button"
import { GHeader } from "@/ui/gheader"
import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
    title: "Image Background Remover API | Free & Easy Integration",
    description: "Integrate our powerful AI background remover into your website or app. Use our simple Iframe solution or upcoming REST API for automated processing.",
    path: "/api-docs/image-background-remover-api",
    includeSchema: false
})

export const metadata = {
    ...baseMetadata,
    title: "Image Background Remover API | Free & Easy Integration"
}

export default function ImageBgRemoverAPIDocsPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
                <div className="max-w-7xl mx-auto">
                    <Breadcrumbs
                        items={[
                            { label: "API Docs", href: "/api-docs" },
                            { label: "Image Background Remover API", href: "/api-docs/image-background-remover-api" },
                        ]}
                    />
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                        <div className="flex-1 lg:flex-[2] space-y-4 sm:space-y-6 md:space-y-8">
                            {/* Hero */}
                            <div className="mt-8 md:mt-12">
                                <GHeader
                                    title="Image Background Remover API"
                                    description="Integrate our state-of-the-art AI background removal technology directly into your applications. We currently offer a robust Iframe solution for instant integration, with a full REST API coming soon."
                                    titleSize="large"
                                    descriptionSize="medium"
                                    color="blue"
                                />
                            </div>

                            {/* Iframe Integration Section */}
                            <div className="p-4 sm:p-6 md:p-8 rounded-lg bg-card border border-border shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Monitor className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-foreground">Iframe Integration (Recommended)</h2>
                                </div>

                                <p className="text-muted-foreground text-sm mb-6">
                                    The easiest way to add background removal usage to your site is by embedding our tool via an Iframe. This provides a full user interface for uploading and processing images without any complex coding.
                                </p>

                                <div className="bg-muted rounded-lg p-4 sm:p-6 mb-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-semibold text-foreground text-sm">Embed Code</h4>
                                        <CopyButton
                                            text='<iframe src="https://www.fasttools.store/image-tools/image-background-remover" width="100%" height="800px" style="border:none; border-radius: 12px; overflow: hidden;" title="FastTools Background Remover"></iframe>'
                                            id="iframe-code"
                                            className="text-xs sm:text-sm"
                                        />
                                    </div>
                                    <pre className="text-xs sm:text-sm text-muted-foreground overflow-x-auto p-4 bg-background/50 rounded border border-border">
                                        {`<iframe 
  src="https://www.fasttools.store/image-tools/image-background-remover" 
  width="100%" 
  height="800px" 
  style="border:none; border-radius: 12px; overflow: hidden;" 
  title="FastTools Background Remover"
></iframe>`}
                                    </pre>
                                </div>

                                <h3 className="text-lg font-bold mb-4 text-foreground">Customization Options</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-muted p-4 rounded-lg">
                                        <code className="text-sm font-bold text-primary block mb-2">width</code>
                                        <p className="text-xs text-muted-foreground">Adjust the width to fit your container. Use "100%" for responsive layouts.</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <code className="text-sm font-bold text-primary block mb-2">height</code>
                                        <p className="text-xs text-muted-foreground">Set a fixed height (e.g., "800px") to ensure the tool is fully visible.</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <code className="text-sm font-bold text-primary block mb-2">style</code>
                                        <p className="text-xs text-muted-foreground">Add CSS styles like border-radius or shadows to match your site's design.</p>
                                    </div>
                                </div>
                            </div>

                            {/* REST API Section */}
                            <div className="p-4 sm:p-6 md:p-8 rounded-lg bg-card border border-border shadow relative overflow-hidden">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heading-accent/10 rounded-lg">
                                        <Code className="h-6 w-6 text-heading-accent" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-foreground">REST API for Developers</h2>
                                </div>

                                <div className="prose max-w-none text-muted-foreground mb-6">
                                    <p className="mb-4 text-sm sm:text-base">
                                        Need a powerful, automated solution for bulk image processing? We offer a state-of-the-art <strong>REST API for Image Background Removal</strong> designed for high-volume enterprise needs.
                                    </p>
                                    <p className="mb-6 text-sm sm:text-base">
                                        Chat with our support team to get early access. We promise that our API is <strong className="text-heading-accent">50% cheaper than the market average</strong> and <strong className="text-heading-accent">200% more advanced</strong>, featuring superior edge detection for hair, fur, and semi-transparent objects.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Automatic Background Removal</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Bulk Image Processing</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Transparent PNG API</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">E-commerce Photo Editing</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">AI Cutout Tool</span>
                                    </div>
                                </div>

                                <div className="bg-muted/50 p-6 rounded-lg border border-border text-center mb-8">
                                    <h3 className="text-lg font-bold text-foreground mb-2">Ready to Scale?</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Get your API key and start integrating the world's most cost-effective background remover today.
                                    </p>
                                    <div className="inline-flex items-center justify-center px-6 py-3 bg-heading-accent text-white font-bold rounded-lg shadow-lg text-sm md:text-base cursor-default">
                                        Chat with our Customer Support
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-base font-semibold text-foreground mb-3">Planned Endpoints</h3>
                                        <div className="bg-muted rounded-lg p-3 sm:p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-bold">POST</span>
                                                <code className="text-sm text-foreground">/v1/image/remove-bg</code>
                                            </div>
                                            <p className="text-xs text-muted-foreground">Upload an image file or provide a URL to receive a transparent PNG.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold text-foreground mb-3">Key Features</h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                                            <li className="flex items-center gap-2">
                                                <Zap className="h-4 w-4 text-heading-accent" />
                                                <span>High-Speed Processing</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Layers className="h-4 w-4 text-heading-accent" />
                                                <span>Smart Edge Detection</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <ImageIcon className="h-4 w-4 text-heading-accent" />
                                                <span>Batch Processing</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Shield className="h-4 w-4 text-heading-accent" />
                                                <span>Secure & Private</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="p-6 sm:p-8 rounded-lg bg-card border border-border shadow">
                                <h2 className="text-2xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
                                <div className="space-y-6 text-sm text-muted-foreground">
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-heading-accent">Is the Iframe solution free to use?</h3>
                                        <p>Yes! You can embed the Iframe on your website for free. There are no strict usage limits for the client-side tool.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-heading-accent">When will the REST API be available?</h3>
                                        <p>We are currently in the development phase. We expect to release the beta version of the API in the coming months.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-heading-accent">Does the tool work on mobile devices?</h3>
                                        <p>Absolutely. The Iframe is fully responsive and works seamlessly on mobile devices, providing a great user experience on all screen sizes.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
