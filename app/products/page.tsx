import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/ui/gheader"
import { GToolCard } from "@/ui/gtool-card"
import { GAccordion, GAccordionContent, GAccordionItem, GAccordionTrigger } from "@/ui/gaccordion"

import Link from "next/link"
import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"
import {
  Calculator,
  Sparkles,
  Wrench,
  Code,
  Image,
  FileText,
  Search,
  Globe,
  DollarSign,
  User,
  Briefcase,
  GraduationCap,
  Calendar,
  Lock as LockIcon
} from "lucide-react"
export const metadata: Metadata = createMetadata({
  title: "100+ Free Online Tools for Every Need | FastTools",
  description: "Explore 100+ free online tools for every need. Calculators, AI utilities, converters & developer tools. Secure, fast & free.",
  path: "/products",
  ogImageAlt: "A showcase of the wide variety of free online tools offered by FastTools.",
  twitterCreator: "@FastTools",
  twitterTitle: "100+ Free Online Tools for Every Need | FastTools",
  twitterDescription: "Discover our full suite of 100+ free online tools. From calculators and converters to AI-powered utilities and developer tools, FastTools has a solution for every task.",
  breadcrumbs: [
    {
      "label": "Products",
      "href": "/products"
    }
  ]
});

const categories = [
  {
    id: "calculators",
    name: "Professional Calculators",
    description: "A comprehensive collection of precise calculators for finance, health, business, and everyday life. Get accurate answers instantly.",
    icon: Calculator,
    href: "/calculator",
  },
  {
    id: "finance-tools",
    name: "Finance Tools",
    description: "Take control of your finances with specialized tools for invoicing, payment calculations, savings goals, and investment planning.",
    icon: DollarSign,
    href: "/finance-tools",
  },
  {
    id: "ai-tools",
    name: "AI-Powered Tools",
    description: "Harness the power of artificial intelligence to generate content, edit images, and automate tasks with our cutting-edge AI tools.",
    icon: Sparkles,
    href: "/ai-tools",
  },
  {
    id: "converters",
    name: "Smart Converters",
    description: "Seamlessly convert between a vast range of units, including currency, measurements, data sizes, and file formats.",
    icon: Wrench,
    href: "/converters",
  },
  {
    id: "crypto-tools",
    name: "Crypto & Security Tools",
    description: "Generate secure tokens, keys, and manage cryptographic functions securely in your browser.",
    icon: LockIcon,
    href: "/crypto-tools",
  },
  {
    id: "dev-tools",
    name: "Developer Tools",
    description: "Boost your productivity with essential utilities for developers, from formatters and validators to code generators and debuggers.",
    icon: Code,
    href: "/dev-tools",
  },
  {
    id: "image-tools",
    name: "Image Tools",
    description: "Transform your images with our powerful editing suite. Resize, compress, convert, and apply AI-powered effects with ease.",
    icon: Image,
    href: "/image-tools",
  },
  {
    id: "pdf-tools",
    name: "PDF Tools",
    description: "Effortlessly manage your PDF files. Merge, split, compress, convert, and edit your documents right in your browser.",
    icon: FileText,
    href: "/pdf-tools",
  },
  {
    id: "seo-tools",
    name: "SEO Tools",
    description: "Improve your online visibility by analyzing keywords, checking site performance, and generating meta tags to rank higher.",
    icon: Search,
    href: "/seo-tools",
  },
  {
    id: "social-media",
    name: "Social Media Tools",
    description: "Elevate your social media game. Download videos, generate post ideas, and manage your presence more effectively.",
    icon: Globe,
    href: "/social-media-tools",
  },
  {
    id: "fun-tools",
    name: "Fun Tools",
    description: "Inject some fun into your day with entertaining tools for social media content, celebrations, and personal enjoyment.",
    icon: Sparkles,
    href: "/fun-tools",
  },
]

const benefits = [
  {
    icon: User,
    title: "Individuals",
    description: "Simplify daily tasks, from calculating a tip to converting measurements for a recipe. Our tools are here to make your life easier."
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Enhance your productivity with tools for finance, development, and marketing. Get the job done faster and more accurately."
  },
  {
    icon: GraduationCap,
    title: "Students & Educators",
    description: "Access a wide range of academic and creative tools for research, projects, and learning, all in one accessible place."
  }
];

const faqItems = [
  {
    question: "Are all the tools listed on this page really free?",
    answer: "Yes, every tool you see on FastTools is completely free to use. We are committed to providing high-quality, accessible tools for everyone without any cost."
  },
  {
    question: "Do I need to create an account to use the tools?",
    answer: "No, registration is not required for most of our tools. You can start using them immediately. We believe in providing a quick and hassle-free experience."
  },
  {
    question: "How often do you add new tools?",
    answer: "We are constantly working on developing and adding new tools to our collection. We aim to release new utilities regularly based on user feedback and emerging needs."
  },
  {
    question: "Is it safe to use these tools with my data?",
    answer: "Yes, your privacy and security are our top priorities. Many of our tools perform their functions entirely within your browser, meaning your files and data are never uploaded to our servers."
  }
];

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FastTools Products - All Tool Categories",
    description: "Complete collection of free online tools organized by category, designed for productivity, creativity, and convenience.",
    url: "https://www.fasttools.store/products",
    numberOfItems: categories.length,
    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.name,
      description: category.description,
      url: `https://www.fasttools.store${category.href}`
    }))
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.fasttools.store/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.fasttools.store/products"
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
            ]}
          />

          <div className="max-w-6xl mx-auto mt-8 md:mt-12">
            <div className="mb-12 md:mb-16">
              <GHeader
                title="Our Products"
                description="Welcome to our comprehensive suite of free online tools. We've organized our products into distinct categories to help you find the right tool for any task. Whether you're a developer, a student, a business professional, or just need to get something done, we have a solution for you."
                titleSize="large"
                descriptionSize="medium"
                color="blue"
              />
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Explore Our Tool Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categories.map((category) => (
                  <GToolCard
                    key={category.id}
                    title={category.name}
                    description={category.description}
                    href={category.href}
                    icon={category.icon}
                    ctaText="View Tools"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-16 mb-16">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">The Power of AI in Your Browser</h2>
                <p>Artificial intelligence is no longer a futuristic concept; it's a practical tool that can enhance creativity and productivity. Our suite of AI-powered tools brings the capabilities of machine learning directly to your browser, for free. Whether you're a content creator struggling with writer's block, a marketer looking for catchy social media captions, or a designer in need of inspiration, our AI tools are here to help. Use our AI content generator to brainstorm ideas, create outlines, or even write entire paragraphs of text. Our AI image tools can help you remove backgrounds, enhance photos, and generate unique visuals. The best part? It's all accessible without any complex software or expensive subscriptions. We believe in democratizing access to AI, and our tools are a testament to that commitment.</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Essential Tools for Modern Developers</h2>
                <p>In the fast-paced world of software development, efficiency is key. Our collection of developer tools is designed to streamline your workflow and handle the tedious tasks, so you can focus on what matters most: writing code. From front-end developers to data scientists, we have utilities to support every stage of the development lifecycle. Use our code formatters and beautifiers to ensure your HTML, CSS, and JavaScript are clean and readable. Validate your JSON, test your regular expressions, or decode a JWT token in seconds. Need placeholder data? Our Lorem Ipsum generator has you covered. These browser-based tools are lightweight, fast, and always available, saving you the need to install and manage countless standalone applications or IDE extensions. They are the perfect companions for any developer looking to boost their productivity.</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Your Complete Solution for PDF Management</h2>
                <p>The PDF is a universal format for documents, but managing them can often be a challenge. Our comprehensive suite of PDF tools puts you back in control. Whether you need to make a quick edit, combine multiple reports into a single file, or prepare a large document for email, we have a free online solution. Use our PDF merger to combine several files, or the splitter to extract specific pages. Our powerful compressor can significantly reduce file size without sacrificing quality, making it easy to share documents. Need to convert a PDF to another format? We offer conversions to Word, JPG, and more. All these tools run securely in your browser, meaning your sensitive documents are never uploaded to our servers. It's a complete, private, and free solution for all your PDF management needs.</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Who We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-card border border-border/40 rounded-xl">
                      <div className="flex justify-center mb-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-heading-accent mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
              <GAccordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                {faqItems.map((item, index) => (
                  <GAccordionItem value={`item-${index}`} key={index}>
                    <GAccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                      {item.question}
                    </GAccordionTrigger>
                    <GAccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </GAccordionContent>
                  </GAccordionItem>
                ))}
              </GAccordion>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
