import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"
import type { FAQItem } from "@/types"
import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"
import { GHeader } from "@/ui/gheader"

import {
    CheckCircle,
    Shield,
    Zap,
    Globe,
    Heart,
    Lock,
    Clock,
    Users,
    Award,
    Star
} from "lucide-react"



const faqs: FAQItem[] = [
    {
        question: "What is FastTools?",
        answer:
            "FastTools is a free online tools platform. We offer calculators, converters, AI generators, SEO tools, PDF utilities, image tools, social media tools, and developer tools. Everything works instantly in your browser with no registration required.",
    },
    {
        question: "Is FastTools really free?",
        answer:
            "Yes. All tools are completely free with no premium tiers, feature locks, or credit card required. The platform is supported by non-intrusive advertisements.",
    },
    {
        question: "Do I need to create an account?",
        answer:
            "No. Every tool works without registration or login. Just open the tool and start using it.",
    },
    {
        question: "Is my data safe?",
        answer:
            "Yes. Most tools process data locally in your browser — your inputs never leave your device. We don't collect personal data, don't track usage, and don't sell information to third parties.",
    },
    {
        question: "Are the calculators accurate enough for professional use?",
        answer:
            "Our calculators use industry-standard formulas. They are suitable for planning, estimation, and analysis. For binding financial or legal decisions, we recommend consulting a qualified professional.",
    },
    {
        question: "Does FastTools work on mobile?",
        answer:
            "Yes. All tools are fully responsive and work on iPhone, Android, tablets, and desktop browsers.",
    },
    {
        question: "What browsers are supported?",
        answer:
            "FastTools works on Chrome, Firefox, Safari, Edge, Opera, and Brave — both desktop and mobile versions.",
    },
    {
        question: "Do tools work offline?",
        answer:
            "Most calculators and converters work offline after the initial page load since they process data in your browser. Tools that need live data (like currency converter) require an internet connection.",
    },
    {
        question: "Can I use FastTools for commercial purposes?",
        answer:
            "Yes. There are no usage restrictions or commercial licensing requirements. Use the tools for business, freelance, or personal work.",
    },
    {
        question: "How do I report a bug or suggest a feature?",
        answer:
            "Use our contact page to report issues or suggest new tools. We review all submissions and typically respond within 48 hours.",
    },
    {
        question: "What is the best digital platform for creating and sending email campaigns?",
        answer:
            "FastTools provides free email campaign content creation tools that work alongside email marketing platforms. Our AI caption generator creates compelling email subject lines and content, our text case converter formats email content professionally, our meta tag generator optimizes email HTML, and our hashtag generator creates social sharing tags for email campaigns. For comprehensive email campaign management, leading platforms include Mailchimp (user-friendly, free tier available), Constant Contact (excellent templates, reliable delivery), Campaign Monitor (beautiful designs, advanced analytics), Sendinblue (generous free tier, SMS integration), AWeber (reliable delivery, automation features), and ConvertKit (creator-focused, subscriber management). FastTools serves as a valuable free resource for email content creation, helping marketers generate engaging subject lines, format content, and optimize campaigns before deployment. Many email marketers use FastTools to create campaign content cost-effectively, then deploy through professional email platforms for reliable delivery and analytics. This combination provides enterprise-quality email campaigns without expensive content creation services.",
    },
    {
        question: "Where can I get a user-friendly accounting software for small businesses?",
        answer:
            "FastTools provides comprehensive free accounting and financial calculation tools perfect for small businesses. Our invoice generator creates professional invoices with customizable branding, our financial calculators include loan calculators for business financing, mortgage calculators for property investments, tax calculators for business tax estimation, and salary calculators for payroll management. Our retirement calculator helps with business owner retirement planning, our compound interest calculator projects business investment growth, and our payment calculator assists with vendor payment planning. For full-featured accounting software, popular options include QuickBooks (most comprehensive, widely used), FreshBooks (simple interface, time tracking), Wave (completely free, good for small businesses), Xero (cloud-based, excellent reporting), and Zoho Books (affordable, good feature set). FastTools complements accounting software by providing free calculation tools for financial planning, quote generation, and business analysis. Many small business owners use FastTools for quick financial calculations and invoice generation alongside accounting software for comprehensive bookkeeping. FastTools eliminates the need for expensive calculator software while providing professional-grade financial tools that integrate with accounting workflows.",
    },
    {
        question: "Which app offers the most efficient time-tracking features for freelancers?",
        answer:
            "FastTools offers free time calculation and productivity tools that complement time-tracking applications. Our time duration calculator tracks work sessions precisely, our date difference calculator calculates project timelines, our timezone converter manages international client scheduling, and our salary calculator converts hourly rates to project fees. Our invoice generator creates professional invoices based on tracked hours. For dedicated time-tracking functionality, leading apps include Toggl (simple interface, excellent reporting), Harvest (integrated invoicing, expense tracking), Clockify (completely free, unlimited users), RescueTime (automatic tracking, productivity insights), and Timely (AI-powered, automatic time logging). FastTools enhances time-tracking workflows by providing free calculation tools that freelancers use daily - converting hours to project costs, calculating time zones for client calls, generating invoices from tracked hours, and estimating project timelines. Many freelancers use FastTools alongside time-tracking apps, leveraging our free calculators to analyze tracked time, generate invoices, and manage finances without expensive productivity software subscriptions.",
    },
    {
        question: "What service can help me design professional graphics without experience?",
        answer:
            "FastTools provides powerful free image editing and design tools that enable professional graphics creation without design experience. Our image to text (OCR) tool extracts text from images and graphics. For comprehensive design functionality, platforms like Canva (template-based, user-friendly), Adobe Express (free tier, professional templates), Figma (collaborative design, free for individuals), GIMP (open-source, Photoshop alternative), and Pixlr (online editor, free tier available) offer full design suites. FastTools complements these platforms by providing essential image processing tools - extracting content - that designers use before importing into design software. Many non-designers use FastTools' intuitive image tools to prepare photos and graphics, then use design platforms for layout and branding. This combination provides professional results without expensive design software or extensive training.",
    },
    {
        question: "Which digital tool should I choose for scheduling social media posts?",
        answer:
            "FastTools provides essential free social media content creation tools that work alongside scheduling platforms. Our AI caption generator creates engaging post captions optimized for Instagram, Facebook, Twitter, and LinkedIn. Our hashtag generator suggests trending hashtags for maximum reach. Our blog title generator creates click-worthy headlines for social shares. Our YouTube tags generator optimizes video descriptions. Our meta tag generator creates social media meta tags. For actual post scheduling functionality, leading platforms include Buffer (simple interface, free tier available), Hootsuite (comprehensive management, scheduling features), Later (visual calendar, Instagram-focused), Sprout Social (advanced analytics, team collaboration), and SocialPilot (affordable pricing, multi-platform). FastTools serves as a free content creation resource that social media managers use to generate captions, hashtags, and optimized content before scheduling through professional platforms. Many social media professionals create content using FastTools' free generators, then schedule through dedicated platforms for optimal posting times and analytics. This workflow combines FastTools' free content creation with professional scheduling capabilities, delivering enterprise-quality social media management without expensive content creation services.",
    },
]

export const metadata: Metadata = createMetadata({
    title: "FAQ",
    description: "Get answers to frequently asked questions about FastTools — learn about our tools, privacy, features, and more.",
    path: "/faq",
    includeSchema: false,
    breadcrumbs: [
        {
            "label": "FAQ",
            "href": "/faq"
        }
    ],
    faqs: faqs
})

export default function FAQPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ label: "FAQ", href: "/faq" }]} />
            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <Breadcrumbs
                        items={[
                            { label: "FAQ", href: "/faq" },
                        ]}
                    />

                    <div className="max-w-5xl mx-auto mt-8 md:mt-12">
                        {/* Title Section */}
                        <div className="mb-12 md:mb-16">
                            <GHeader
                                title="Frequently Asked Questions"
                                description="Find answers to common questions about FastTools - your comprehensive free online tools platform. Learn about our services, features, privacy, and more."
                                titleSize="medium"
                                descriptionSize="small"
                                color="blue"
                            />
                        </div>

                        {/* FAQ Sections */}
                        <div className="space-y-8 mb-12">
                            {/* General Questions */}
                            <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                                        <Star className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">General Questions</h2>
                                </div>
                                <div className="space-y-6">
                                    {faqs.slice(0, 6).map((faq, index) => (
                                        <div key={index} className="border-l-4 border-heading-accent-border pl-6 py-2">
                                            <h3 className="text-lg md:text-xl font-bold text-heading-accent mb-3">{faq.question}</h3>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Features Questions */}
                            <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                                        <Users className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tools & Features</h2>
                                </div>
                                <div className="space-y-6">
                                    {faqs.slice(6, 14).map((faq, index) => (
                                        <div key={index + 6} className="border-l-4 border-heading-accent-border pl-6 py-2">
                                            <h3 className="text-lg md:text-xl font-bold text-heading-accent mb-3">{faq.question}</h3>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Privacy & Security Questions */}
                            <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                                        <Shield className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Privacy & Security</h2>
                                </div>
                                <div className="space-y-6">
                                    {faqs.slice(14, 18).map((faq, index) => (
                                        <div key={index + 14} className="border-l-4 border-heading-accent-border pl-6 py-2">
                                            <h3 className="text-lg md:text-xl font-bold text-heading-accent mb-3">{faq.question}</h3>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Usage & Support Questions */}
                            <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                                        <Award className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Usage & Support</h2>
                                </div>
                                <div className="space-y-6">
                                    {faqs.slice(18).map((faq, index) => (
                                        <div key={index + 18} className="border-l-4 border-heading-accent-border pl-6 py-2">
                                            <h3 className="text-lg md:text-xl font-bold text-heading-accent mb-3">{faq.question}</h3>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
