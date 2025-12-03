import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import Link from "next/link"
import { createMetadata } from "@/lib/metadata-base"
import {
  ArrowRight,
  Globe,
  Code,
  BookOpen,
  Zap,
  ShieldCheck,
  Star
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = createMetadata({
  title: "Free RESTful API for Developers | FastTools",
  description: "Access free, reliable, and easy-to-use RESTful APIs for your applications. Get started with our developer-friendly API documentation, including a free currency conversion API. No API key required to start.",
  path: "/api-docs",
  ogImageAlt: "Developer documentation for free RESTful APIs from FastTools.",
  twitterCreator: "@FastTools",
  twitterTitle: "Free RESTful API for Developers | FastTools",
  twitterDescription: "Access free, reliable, and easy-to-use RESTful APIs. Get started in minutes with our developer-friendly documentation.",
});

const apis = [
  {
    id: "currency-api",
    name: "Currency Conversion API",
    description: "Real-time currency exchange rates and conversion service. Access up-to-date information for over 150 currencies worldwide.",
    icon: Globe,
    href: "/converters/currency-api",
    version: "v1",
    status: "active",
  },
]

const benefits = [
    {
        icon: Zap,
        title: "Blazing Fast & Reliable",
        description: "Our APIs are built on a robust, scalable infrastructure, ensuring high availability and low latency for your applications."
    },
    {
        icon: Star,
        title: "Free & Accessible",
        description: "Get started for free. Our generous free tiers are designed to help developers experiment and build without financial barriers."
    },
    {
        icon: ShieldCheck,
        title: "Secure & Standardized",
        description: "We follow industry best practices for security. All API traffic is encrypted, and we use standard RESTful conventions."
    },
    {
        icon: BookOpen,
        title: "Comprehensive Documentation",
        description: "Each API comes with clear, detailed documentation, code samples, and live testing capabilities to get you up and running in minutes."
    }
]

const faqItems = [
    {
        question: "Do I need an API key to use your APIs?",
        answer: "Currently, our APIs are open and do not require an API key for access. You can start making requests right away. We may introduce keys in the future to manage usage and offer advanced features."
    },
    {
        question: "Are there any rate limits?",
        answer: "For now, we do not enforce strict rate limits on our free APIs. However, we monitor for abusive usage to ensure fair access for all developers. We may introduce formal rate limiting in the future."
    },
    {
        question: "What kind of support do you offer for developers?",
        answer: "We offer support via email. If you have any questions, encounter issues, or have suggestions for new APIs, please don't hesitate to reach out to us through our contact page."
    },
    {
        question: "Are you planning to add more APIs?",
        answer: "Yes! We are actively working on expanding our API offerings to include many of our popular tools, such as image processing, PDF utilities, and more. Stay tuned for updates."
    }
];

export default function ApiDocsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools API Documentation",
    description: "Comprehensive API documentation for FastTools services, offering free, reliable, and easy-to-use developer tools.",
    url: "https://www.fasttools.store/api-docs",
    provider: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
    }
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
        name: "API Docs",
        item: "https://www.fasttools.store/api-docs"
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
              { label: "API Docs", href: "/api-docs" },
            ]}
          />

          <div className="max-w-6xl mx-auto mt-8 md:mt-12">
            <div className="mb-12 md:mb-16">
              <GHeader
                title="API Documentation"
                description="Integrate FastTools services into your applications with our powerful RESTful APIs. Our developer-friendly tools are free to use, well-documented, and built for performance. Explore our available APIs and start building today."
                titleSize="large"
                descriptionSize="medium"
                color="orange"
              />
            </div>

            <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Why Use FastTools APIs?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Code className="h-7 w-7" />
                Available APIs
              </h2>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                We are continuously developing a suite of APIs to provide programmatic access to our most popular tools. Each API is designed to be simple, efficient, and easy to integrate.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {apis.map((api) => {
                  const Icon = api.icon
                  return (
                    <Link
                      key={api.id}
                      href={api.href}
                      className="bg-card border border-border/40 rounded-xl p-6 hover:border-border/70 transition-all duration-300 group relative h-full flex flex-col"
                    >
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        {api.status === "active" && (
                          <span className="px-2 py-1 text-xs font-bold bg-heading-accent-border/10 text-heading-accent border border-heading-accent-border/30 rounded">
                            Active
                          </span>
                        )}
                      </div>
                      <div className="pr-16 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-heading-accent mb-2 group-hover:text-heading-accent transition-colors">
                          {api.name}
                        </h3>
                        <p className="text-xs text-primary mb-3 font-bold">Version {api.version}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {api.description}
                        </p>
                        <div className="flex items-center gap-2 text-primary group-hover:text-orange-400 transition-colors">
                          <span className="text-sm font-bold">View Docs</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="space-y-16 mb-16">
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Getting Started with the FastTools Currency API</h2>
                    <p>Our free Currency Conversion API is designed for simplicity and ease of use, providing real-time exchange rates for over 150 currencies. To get started, you don't need an API key—you can begin making requests immediately. The API provides a simple GET endpoint for fetching conversion rates. For example, to get the latest conversion rate from USD to EUR, you would make a request to an endpoint like <code>/api/v1/currency/convert?from=USD&to=EUR&amount=1</code>. The API will return a clean JSON response containing the requested rate and the converted amount. This straightforward design makes it incredibly easy to integrate into any application, from e-commerce sites to financial dashboards. The data is updated regularly to ensure you're always working with the most current exchange rates available.</p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Understanding RESTful Principles and Best Practices</h2>
                    <p>Our APIs are built on REST (Representational State Transfer), an architectural style that has become the standard for web-based APIs. This means our APIs are predictable, scalable, and easy to understand. We adhere to core RESTful principles, such as using standard HTTP methods (GET, POST, etc.) to perform actions, and structuring our URLs to represent resources in a logical way. For example, a GET request to <code>/api/v1/tools</code> would retrieve a list of available tools. This stateless design ensures that every request contains all the information needed to process it, making our APIs highly reliable and easy to debug. By following these best practices, we provide a developer-friendly experience that reduces the learning curve and allows you to focus on building your application, not on deciphering a complex API.</p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">The Future of FastTools APIs: Our Roadmap</h2>
                    <p>We are committed to building a comprehensive and powerful API platform for developers. The APIs currently available are just the beginning. Our roadmap includes the introduction of API keys to provide a more personalized and secure experience, allowing for higher rate limits and access to more advanced features. We are also actively working on exposing more of our popular tools through new endpoints. Soon, you'll be able to programmatically interact with our image editing tools, PDF utilities, and data converters. We believe in the power of community-driven development, so we actively encourage you to suggest new APIs or features that would help you in your projects. Your feedback will directly shape the future of our platform as we work to become the go-to source for free, reliable developer APIs.</p>
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                    {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
