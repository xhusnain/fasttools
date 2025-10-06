"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "What is fasttools.store?",
    answer:
      "fasttools.store is a comprehensive collection of 40+ free online tools designed to help you with everyday tasks. From text converters and image processors to AI generators and productivity utilities, we provide everything you need in one place.",
  },
  {
    question: "Are all fasttools.store tools really free?",
    answer:
      "Yes! All our online tools are completely free to use with no hidden fees, subscriptions, or registration required. You can use any tool as many times as you need without any cost or limitations.",
  },
  {
    question: "Do I need to create an account to use fasttools.store?",
    answer:
      "No account is needed! You can start using our tools immediately without any registration. We respect your privacy and don't require personal information to use our services. Just visit and start using the tools right away.",
  },
  {
    question: "What types of tools does fasttools.store offer?",
    answer:
      "We offer a wide range of tools including text converters, image processors, AI generators, SEO tools, currency converters, file utilities, and more. Our tools are organized into categories like Converters, AI Tools, SEO Tools, Image Tools, and Finance Tools.",
  },
  {
    question: "Can I use fasttools.store on my mobile device?",
    answer:
      "Absolutely! All our tools are fully responsive and mobile-friendly. They work perfectly on smartphones, tablets, and desktop computers. The interface automatically adapts to your screen size for the best experience.",
  },
  {
    question: "How accurate are the fasttools.store tools?",
    answer:
      "Our tools are designed for accuracy and reliability. We use precise algorithms and up-to-date data sources to ensure you get accurate results every time. All calculations and conversions are performed with high precision.",
  },
  {
    question: "Can I share results from fasttools.store tools?",
    answer:
      "Yes! Most of our tools allow you to easily copy, download, or share your results. This makes it convenient to use the output in your projects, documents, or social media posts.",
  },
  {
    question: "Are new tools being added to fasttools.store?",
    answer:
      "Yes! We're continuously developing and adding new tools based on user feedback and emerging needs. Check back regularly for new utilities that can help streamline your workflow and boost productivity.",
  },
  {
    question: "Is my data safe when using fasttools.store?",
    answer:
      "Your privacy is important to us. Most of our tools process data locally in your browser, and we don't store your personal information. We follow strict privacy practices and don't track your usage patterns.",
  },
  {
    question: "Why should I choose fasttools.store over other tool websites?",
    answer:
      "fasttools.store stands out with its comprehensive collection, user-friendly interface, fast loading times, and commitment to being completely free. Our tools are SEO-optimized, work on all devices, and provide instant, accurate results without any registration required.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq, index) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="space-y-4 animate-fade-in-up animation-delay-200">
        {faqs.map((faq, index) => (
        <Card
          key={index}
          className="border border-border/50 overflow-hidden transition-all hover:shadow-md hover:border-primary/30"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
          >
            <span className="font-semibold text-foreground pr-4">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div className={`overflow-hidden transition-all ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
            <div className="px-6 pb-4 text-muted-foreground leading-relaxed">{faq.answer}</div>
          </div>
        </Card>
      ))}
      </div>
    </>
  )
}
