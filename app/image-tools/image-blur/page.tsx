import { ImageBlur } from "@/components/image/image-blur"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
    toolName: "Image Background Blur",
    description: "Blur image backgrounds with AI portrait mode. Create professional bokeh effects with adjustable blur intensity for stunning photos.",
    metaTitle: "AI Photo Background Blur Tool | No App",
    metaDescription: "Blur image backgrounds online instantly with AI. Create portrait mode & DSLR bokeh effects. Free tool for iPhone, Android & desktop. No watermarks.",
    path: "/image-tools/image-blur",

    header: {
        title: "Blur Image Background Online Free",
        description: "Create professional portrait mode and DSLR-style bokeh effects instantly with AI. Blur photo backgrounds on iPhone, Android, and desktop with adjustable intensity (5-50px). No app download needed—process privately in your browser and download without watermarks.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Image Tools", href: "/image-tools" },
        { label: "Image Background Blur", href: "/image-tools/image-blur" },
    ],

    content: {
        overview: "Our AI-powered image background blur tool automatically detects subjects and applies professional-grade blur effects to create stunning portrait mode images. Perfect for enhancing photos with DSLR-style bokeh effects, creating depth of field, and making subjects stand out against softly blurred backgrounds. The advanced AI distinguishes foreground subjects from backgrounds with precision, keeping your subject sharp while applying smooth, natural-looking blur to the background. Adjustable blur intensity from subtle (5px) to dramatic (50px) gives you complete creative control. Works instantly on portraits, pet photos, product photography, and any image where you want to create professional depth effects. All processing happens locally in your browser for complete privacy—no uploads, no storage, no tracking. Create professional-looking photos without expensive DSLR cameras, Photoshop subscriptions, or technical editing skills. Perfect for social media content, professional portraits, e-commerce product photos, and creative photography.",

        howToSteps: [
            "Upload your image by clicking the upload area or dragging and dropping. Supports JPG, PNG, JPEG, and WebP formats.",
            "The AI automatically detects your main subject and creates a selection mask. Preview shows which areas will stay sharp vs. blurred.",
            "Adjust blur intensity using the slider (5px to 50px). See real-time preview of blur effect as you make changes.",
            "Download your professionally blurred image instantly. The output maintains original resolution and quality with no watermarks."
        ],

        features: [
            "AI-powered subject detection automatically identifies foreground subjects",
            "Adjustable blur intensity from 5px to 50px for precise creative control",
            "Portrait mode effect mimicking professional DSLR bokeh",
            "Professional depth of field simulation for stunning results",
            "Real-time preview shows changes before final processing",
            "Supports high-resolution images up to 4K quality",
            "Works with JPG, PNG, JPEG, and WebP formats",
            "Complete privacy: All processing in browser, no uploads",
            "No watermarks on output images",
            "Instant download of processed photos",
            "Mobile-friendly interface for iPhone and Android",
            "Desktop quality on Windows, Mac, and Linux",
            "No app download or installation required",
            "Free forever with unlimited usage",
            "Professional DSLR-style bokeh effects",
            "Natural-looking blur gradients"
        ],

        useCases: [
            "Portrait Photography: Create professional portrait mode effects with beautiful bokeh blur. Perfect for profile pictures, headshots, LinkedIn photos, and social media profiles.",
            "Product Photography: Make products stand out with professional background blur. Ideal for e-commerce listings, catalogs, and marketing materials that need focus on the product.",
            "Social Media Content: Enhance Instagram, Facebook, and Twitter posts with eye-catching blur effects. Create professional-looking content that drives engagement.",
            "Pet Photography: Highlight your furry friends with clean background blur. Perfect for adoption listings, pet portraits, and social media pet accounts.",
            "Event Photography: Improve event photos by blurring busy backgrounds and focusing attention on subjects. Great for weddings, parties, and conferences.",
            "Real Estate: Create depth in property photos by blurring foreground or background elements. Highlight specific features in listings.",
            "Fashion & Beauty: Create professional lookbook photos and beauty shots with soft, blurred backgrounds. Perfect for fashion blogs and e-commerce.",
            "Food Photography: Make dishes pop with selective blur. Draw attention to the main dish while softening the background.",
            "Travel Photography: Enhance travel photos by emphasizing subjects against blurred backgrounds. Create professional-looking vacation photos.",
            "Creative Photography: Experiment with depth of field effects and artistic blur to create unique, eye-catching images for portfolios and exhibitions."
        ],

        aboutTool: "Our image blur tool uses advanced AI neural networks to detect subjects and apply selective background blur automatically. The edge detection algorithm analyzes your image to identify the main subject, distinguishing it from the background with high precision. The blur effect uses Gaussian blur algorithms to create smooth, natural-looking depth of field that mimics professional DSLR camera bokeh. Unlike simple blur filters, our AI-powered approach maintains sharp edges around subjects while creating smooth blur gradients in backgrounds. All processing happens locally in your browser using WebAssembly and machine learning models, ensuring your photos never leave your device. The adjustable intensity slider lets you control blur strength from subtle depth enhancement to dramatic focus effects. Output images maintain full resolution and quality, perfect for professional use in marketing, social media, or personal projects.",

        proTip: "For best background blur results, use images with clear subject separation from the background. Good lighting helps the AI detect subjects accurately—ensure subjects are well-lit without harsh shadows. Images with contrasting colors between subject and background produce cleaner edge detection. For portraits, position subjects 3-6 feet from the background to maximize the blur effect. Start with moderate blur intensity (15-25px) and adjust based on your creative vision. For product photos, use slight blur (10-15px) to maintain professionalism while creating depth. For artistic portraits, try stronger blur (30-50px) for dramatic bokeh effects.",

        faqs: [
            {
                question: "How does background blur work and what makes it professional?",
                answer: "Our background blur tool uses sophisticated AI edge detection algorithms to identify subjects and create natural-looking blur effects. It automatically detects the main subject in your image and applies selective blurring to the background while keeping the subject sharp and clear. The tool offers adjustable blur intensity, allowing you to create subtle or dramatic effects depending on your needs. Professional photographers use this technique to create depth, focus attention on subjects, and produce studio-quality results. The algorithm works best with portraits and objects that have clear separation from their backgrounds."
            },
            {
                question: "Can I adjust the blur intensity?",
                answer: "Yes! Our tool provides a blur intensity slider ranging from 5px (subtle) to 50px (dramatic). You can see a real-time preview as you adjust the slider, allowing you to find the perfect blur strength for your image. Subtle blur (5-15px) works great for product photos and professional portraits, while stronger blur (30-50px) creates artistic bokeh effects perfect for creative photography and social media content."
            },
            {
                question: "What types of images work best with background blur?",
                answer: "The tool works best with images that have clear subject-background separation. Portraits with subjects 3-6 feet from the background produce excellent results. Product photos on plain backgrounds work perfectly. Pet photos with distinct edges respond well to the AI detection. Images with good contrast between subject and background colors create the cleanest blur effects. While the AI handles complex scenarios, clear, well-lit subjects with defined edges produce the most professional results."
            },
            {
                question: "Is my data secure when using the blur tool?",
                answer: "Absolutely! All image processing happens locally in your browser. Your photos never leave your device, never get uploaded to our servers, and aren't stored or tracked in any way. This client-side processing ensures complete privacy for personal photos, professional work, or sensitive business materials. You can use the tool offline once loaded, and all processing stays on your device throughout."
            },
            {
                question: "How does this compare to Photoshop or Canva?",
                answer: "Our tool provides instant AI-powered blur without manual selection work required in Photoshop. While Photoshop offers more granular control for complex edits, our AutoML approach handles 90% of blur needs automatically. Unlike Canva Pro's background blur ($12.99/month), our tool is completely free with no watermarks or usage limits. No subscriptions, no learning curve, and no software installation required. For quick, professional blur effects, our tool delivers results comparable to expensive software in seconds."
            },
            {
                question: "Can I use this on mobile devices?",
                answer: "Yes! Our tool works perfectly on iPhone, Android, tablets, and all mobile devices through any modern browser. No app download required—just visit our website and start blurring backgrounds. The mobile-optimized interface makes it easy to upload photos from your camera roll, adjust blur intensity with touch controls, and download results directly to your device. It's the perfect on-the-go solution for quick blur effects."
            },
            {
                question: "What's the maximum image resolution supported?",
                answer: "Our tool supports images up to 4K resolution (3840×2160) and file sizes up to 10MB. We maintain full resolution in output images—no quality loss or downscaling. Process HD (1080p) and 4K images while preserving every detail in sharp areas. High-resolution support makes our tool perfect for professional photography, prints, and large-format displays."
            },
            {
                question: "Do you add watermarks to blurred images?",
                answer: "No, we never add watermarks to your images. All downloads are clean, professional photos ready for immediate use. Unlike many online blur tools that watermark free versions, our tool provides completely watermark-free images with unlimited usage at no cost. Your photos, your rights, no restrictions."
            },
            {
                question: "Can I blur backgrounds in videos?",
                answer: "Currently, our tool specializes in image background blur. For video background blur, you would need video editing software like CapCut, Zoom's virtual background feature, or professional video editors. However, you can use our tool to create blurred background images for use in video editing software or as Zoom virtual backgrounds in HD 4K quality."
            },
            {
                question: "How is this different from iPhone portrait mode?",
                answer: "iPhone portrait mode uses dual cameras and depth sensors available only on certain iPhone models. Our tool works on any device—iPhone, Android, Windows, Mac, or Linux—and can process any photo, not just ones taken in the moment. You can apply blur effects to old photos, downloaded images, or photos from any camera. Plus, you have full control over blur intensity (5-50px) versus iPhone's automatic blur. It's perfect for enhancing photos after they're taken or improving portrait mode shots from older phones."
            },
            {
                question: "What image formats can I download?",
                answer: "The output is provided as a high-quality JPG or PNG file, depending on your original format. We maintain the original resolution and quality while applying the blur effect. You can immediately use the downloaded image for social media posts, professional presentations, e-commerce listings, or any other purpose without additional conversion."
            }
        ],

        relatedTools: [
            { name: "Image Background Remover", href: "/image-tools/image-background-remover" },
            { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" }
        ],
    }
})

export const metadata = toolConfig.metadata

export default function ImageBlurPage() {
    return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageBlur />)} />
}
