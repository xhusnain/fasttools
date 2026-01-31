import { GHeader } from "@/ui/gheader"


import { FAQ } from "@/types/common-types/home-faq-section.types"

const faqs: FAQ[] = [
    {
        number: "01",
        question: "What AI tools are available for free content generation?",
        answer: "Our free AI tools include AI caption generator for social media posts, AI meme generator for viral content, AI hashtag suggester for better reach, AI song lyrics generator for creative writing, and AI pet name generator for naming pets. All tools use advanced AI technology to generate high-quality, relevant content instantly without any cost."
    },
    {
        number: "02",
        question: "How accurate are the currency exchange rates in your converter?",
        answer: "Our currency converter provides real-time exchange rates updated every minute from reliable financial data sources. We support 160+ currencies including USD, EUR, GBP, JPY, and more. The rates are accurate for travel, business, and investment purposes, with historical data and trend analysis available for informed decision-making."
    },
    {
        number: "03",
        question: "What financial calculators can help with loan and investment planning?",
        answer: "We offer comprehensive financial calculators including loan calculator for mortgage planning, EMI calculator for monthly payments, investment calculator for returns analysis, retirement calculator for long-term planning, compound interest calculator for savings growth, and tax calculator for income tax estimation. All calculators use professional-grade formulas compatible with BA II Plus and HP 12CP financial calculators."
    },
    {
        number: "04",
        question: "How can SEO tools improve my website's search engine rankings?",
        answer: "Our SEO tools help optimize your website with meta tag generator for better search snippets, keyword density checker for content optimization, hashtag generator for social media reach, and blog title generator for click-worthy headlines. These tools analyze your content, suggest improvements, and help you rank higher in Google search results for better organic traffic."
    },
    {
        number: "05",
        question: "What image processing tools are available for free?",
        answer: "Our image tools include image cropper for resizing and cropping photos, image converter for format conversion, image to text OCR for extracting text from images, and QR code generator for creating QR codes. All tools work in your browser without uploading files, ensuring complete privacy and security."
    },
    {
        number: "06",
        question: "What developer tools can help with coding and web development?",
        answer: "Our developer tools include HTML beautifier for code formatting, JSON formatter for data validation, regex tester for pattern matching, JWT decoder for token analysis, base64 encoder/decoder for data encoding, and 1000+ free color palettes with HEX codes for design. These tools help developers write better code, debug more effectively, and streamline their development workflow."
    },
    {
        number: "07",
        question: "Is my data safe when using these online tools?",
        answer: "Yes, your data is completely safe. All our tools process data locally in your browser without uploading files to our servers. We use privacy-first architecture where sensitive information like documents, images, and personal data never leaves your device. No registration required, no data collection, and no tracking - just pure, secure tool functionality."
    },
    {
        number: "08",
        question: "What categories of tools are available on FastTools?",
        answer: "We offer 10+ categories including AI Tools for content generation, Calculators for financial planning, Converters for data transformation, SEO Tools for website optimization, Image Tools for photo editing, Developer Tools for coding, Finance Tools for business calculations, Social Media Tools for marketing, and Fun Tools for entertainment. Each category contains 15-50+ specialized tools for different use cases."
    },
    {
        number: "09",
        question: "Can businesses use these tools for professional purposes?",
        answer: "Absolutely! Our tools are designed for professional use with business-grade accuracy and reliability. Many businesses use our financial calculators for loan analysis, currency converter for international trade, SEO tools for digital marketing, AI tools for content creation, and developer tools for web development. All tools are free for commercial use with no restrictions or watermarks."
    },
    {
        number: "10",
        question: "Do these tools work on mobile devices and tablets?",
        answer: "Yes, all our tools are mobile-optimized and work perfectly on smartphones, tablets, and desktop computers. Our responsive design ensures optimal performance across all devices with touch-friendly interfaces, fast loading times, and offline functionality for many tools. Access your favorite tools anywhere, anytime without any app downloads or installations."
    },
]

export function HomeFAQSection() {
    return (
        <section className="py-12 md:py-20 px-4 bg-background">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-8 md:mb-12">
                    <GHeader
                        title="FAQ"
                        description="Find quick answers to common questions about FastTools. Get instant clarity on features, pricing, security, and how to make the most of our 1000+ free online tools. Everything you need to know in one place."
                        titleSize="large"
                        descriptionSize="medium"
                        color="green"
                        as="h2"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-2">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group relative bg-card/50 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden p-6 sm:p-8"
                        >
                            <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none">
                                <span className="text-9xl font-black text-primary">{faq.number}</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 pr-4">{faq.question}</h3>
                                <p className="text-sm sm:text-base text-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
