"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "How accurate is the age calculator?",
    answer:
      "Our age calculator is 100% accurate. It uses precise date calculations to determine your exact age in years, months, and days. The tool accounts for leap years and varying month lengths to ensure complete accuracy.",
  },
  {
    question: "Is the age calculator really free to use?",
    answer:
      "Yes! All our online tools are completely free to use with no hidden fees, subscriptions, or registration required. You can use the age calculator as many times as you need without any cost.",
  },
  {
    question: "Can I use the age calculator on my mobile phone?",
    answer:
      "Our age calculator is fully responsive and mobile-friendly. It works perfectly on smartphones, tablets, and desktop computers. The interface automatically adapts to your screen size for the best experience.",
  },
  {
    question: "Do I need to create an account to use the tools?",
    answer:
      "No account is needed! You can start using our age calculator and other tools immediately without any registration. We respect your privacy and don't require personal information to use our services.",
  },
  {
    question: "How do I calculate my age in years, months, and days?",
    answer:
      "Simply select your birth date using the date picker in our age calculator, then click the 'Calculate Age' button. The tool will instantly display your exact age broken down into years, months, and days.",
  },
  {
    question: "Can I share my age calculation results?",
    answer:
      "Yes! After calculating your age, you can easily share the results or copy them to your clipboard. This makes it convenient to share your age information for official documents, social media, or personal records.",
  },
  {
    question: "Why should I use your age calculator instead of others?",
    answer:
      "Our age calculator stands out with its accuracy, speed, and user-friendly interface. It's SEO-optimized for fast loading, works on all devices, requires no registration, and provides instant, precise results. Plus, it's completely free!",
  },
  {
    question: "Are more calculation tools coming soon?",
    answer:
      "Yes! We're actively developing additional free online tools including date calculators, time converters, and other useful utilities. Check back regularly for new tools to help with your everyday calculations.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
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
  )
}
