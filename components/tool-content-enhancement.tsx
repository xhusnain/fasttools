import { BookOpen, HelpCircle, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ToolContentEnhancementProps {
  toolName: string
  toolDescription: string
  whatItIs: string
  howItWorks: string[]
  useCases: string[]
  whyChooseThis: string[]
  relatedTools?: Array<{ name: string; href: string }>
  faqs?: Array<{ question: string; answer: string }>
}

export function ToolContentEnhancement({
  toolName,
  toolDescription,
  whatItIs,
  howItWorks,
  useCases,
  whyChooseThis,
  relatedTools = [],
  faqs = [],
}: ToolContentEnhancementProps) {
  return (
    <div className="space-y-8 mt-12">
      {/* What It Is Section */}
      <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-4 w-4 text-primary" />
          </div>
          What is {toolName}?
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="text-base">{whatItIs}</p>
          <p className="text-base">{toolDescription}</p>
        </div>
      </article>

      {/* How It Works Section */}
      {howItWorks.length > 0 && (
        <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-4 w-4 text-primary" />
            </div>
            How to Use {toolName}
          </h2>
          <ol className="space-y-3 text-muted-foreground">
            {howItWorks.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-base leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </article>
      )}

      {/* Use Cases Section */}
      {useCases.length > 0 && (
        <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-4 w-4 text-primary" />
            </div>
            Common Use Cases for {toolName}
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span className="text-base leading-relaxed">{useCase}</span>
              </li>
            ))}
          </ul>
        </article>
      )}

      {/* Why Choose This Tool Section */}
      {whyChooseThis.length > 0 && (
        <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-4 w-4 text-primary" />
            </div>
            Why Choose Our {toolName}?
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            {whyChooseThis.map((reason, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span className="text-base leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </article>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
          <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="h-4 w-4 text-primary" />
              </div>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-l-4 border-primary/30 pl-4">
                  <h3 className="text-lg font-semibold mb-2 text-heading-accent">
                    {faq.question}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </>
      )}

      {/* Related Tools Section */}
      {relatedTools.length > 0 && (
        <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
            Related Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relatedTools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="p-4 rounded-lg border border-border hover:border-primary transition-colors hover:bg-primary/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-foreground">
                    {tool.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </article>
      )}
    </div>
  )
}

