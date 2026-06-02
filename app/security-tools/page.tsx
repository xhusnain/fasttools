import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import { Eye, EyeOff, Lock, Shield } from "lucide-react"

const securityTools = [
  {
    title: "Image Steganography",
    description:
      "Hide secret messages and data inside images using steganography. Encrypt, embed, and extract hidden content securely.",
    href: "/security-tools/image-steganography",
    icon: EyeOff,
  },
]

const toolConfig = createToolConfig({
  toolName: "Security Tools",
  description:
    "Privacy-focused security and encryption tools for data protection, steganography, and secure information handling. All tools work offline in your browser.",
  metaTitle: "Security & Privacy Tools: Encryption, Steganography",
  metaDescription:
    "Free security tools for data protection and privacy: image steganography, encryption, and secure information handling. Browser-based and offline.",
  path: "/security-tools",

  schemaOptions: {
    itemList: {
      name: "Security Tools Collection",
      description:
        "A collection of privacy-focused security utilities for encryption, data protection, and steganography.",
      items: securityTools.map((tool) => ({
        name: tool.title,
        description: tool.description,
        url: tool.href,
      })),
    },
  },

  header: {
    title: "Security & Privacy Tools",
    description:
      "Privacy-focused tools for encryption, data protection, steganography, and secure information handling. All tools work offline in your browser.",
    titleSize: "large",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [{ label: "Security Tools", href: "/security-tools" }],

  content: {
    overview:
      "This category focuses on privacy-first security utilities designed for immediate use in protecting sensitive information. Each tool runs entirely in your browser, ensuring your data never leaves your device. From hiding secrets in images to encrypting text, these tools are built for both practical security workflows and educational purposes.",

    features: [
      "Client-side execution for complete data privacy",
      "No installation or signup required",
      "Offline functionality for sensitive operations",
      "Support for common security and privacy tasks",
      "Easy integration into security workflows",
    ],

    useCases: [
      "Hiding sensitive messages in images for secure transfer",
      "Data protection and privacy preservation",
      "Encryption and decryption workflows",
      "Secure information storage and handling",
      "Privacy-aware communication",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Security and privacy are fundamental rights in the digital age. This category provides practical, browser-based tools that help you protect your information without relying on third-party servers or cloud storage.
        </p>
        <p>
          Each tool is designed with privacy-first principles: your data stays on your device, processing is immediate, and nothing is stored or transmitted. Whether you need to hide secrets in images or encrypt sensitive text, these utilities support your privacy goals.
        </p>
      </div>
    ),

    faqs: [
      {
        question: "Are these security tools safe to use?",
        answer:
          "Yes. All tools process data entirely in your browser without sending anything to our servers. Your data never leaves your device.",
      },
      {
        question: "Do I need to install anything?",
        answer:
          "No. These are browser-based tools. Simply open the tool, use it, and close the page. No installation, accounts, or plugins required.",
      },
      {
        question: "Can I use these tools offline?",
        answer:
          "Yes. Once the page loads, all processing happens locally in your browser. You can work completely offline.",
      },
      {
        question: "What is image steganography?",
        answer:
          "Steganography is the practice of hiding data inside other data. Image steganography hides messages or files inside image files while keeping the image visually identical.",
      },
      {
        question: "Can these tools help with production security?",
        answer:
          "These tools are suitable for data protection, testing, and privacy workflows. For production use, always follow your organization's security policies and standards.",
      },
    ],

    relatedTools: [
      { name: "Crypto Tools", href: "/crypto-tools" },
      { name: "Web Tools", href: "/web-tools" },
      { name: "Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SecurityToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {securityTools.map((tool) => (
            <GToolCard
              key={`security-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
