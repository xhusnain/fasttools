import { createMetadata } from "@/lib/metadata-base"
import type { Metadata } from "next"

export const metadata: Metadata = createMetadata({
  title: "Contact Us - Get in Touch with FastTools",
  description: "Contact FastTools for support, feedback, or questions about our free online tools. We're here to help with calculators, converters, AI tools, and more. Response within 24-48 hours.",
  path: "/contact",
  breadcrumbs: [
    { label: "Contact", href: "/contact" }
  ],
  faqs: [
    {
      question: "What kind of tools do you offer?",
      answer: "We offer a wide range of free online tools, including calculators, converters, image editors, developer tools, and much more. Our goal is to provide a one-stop shop for all your utility needs."
    },
    {
      question: "Are your tools really free to use?",
      answer: "Yes, all tools on FastTools are completely free to use. We are committed to providing accessible and high-quality utilities for everyone."
    },
    {
      question: "I have a suggestion for a new tool. Where can I submit it?",
      answer: "We love hearing from our users! You can use the contact form on this page to send us your suggestions. Please provide as much detail as possible about the tool you'd like to see."
    },
    {
      question: "I found a bug or issue with a tool. How do I report it?",
      answer: "Please use the contact form to report any bugs or issues. Be sure to include the name of the tool, a description of the problem, and the steps to reproduce it. This will help us fix it as quickly as possible."
    }
  ]
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
