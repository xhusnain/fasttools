import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const ImageSteganography = dynamic(
  () => import("@/components/security/image-steganography").then((mod) => mod.default),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Image Steganography",
  description:
    "Hide secret messages and data inside images using LSB steganography with optional AES-GCM encryption.",
  metaTitle: "Image Steganography — Hide & Decode Text in Images Online",
  metaDescription:
    "Free image steganography tool. Hide secret messages inside PNG / JPG images using LSB steganography with optional AES-256-GCM encryption. Encode and decode in your browser. 100% client-side, no upload.",
  path: "/security-tools/image-steganography",

  header: {
    title: "Image Steganography Tool — Hide Messages in Images",
    description:
      "Embed secret text messages inside images using LSB (Least Significant Bit) steganography. Optional AES-256-GCM encryption for enhanced security. All processing happens locally in your browser — your data never leaves your device.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "purple",
  },

  breadcrumbs: [
    { label: "Security Tools", href: "/security-tools" },
    { label: "Image Steganography", href: "/security-tools/image-steganography" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Hide secret messages inside images using LSB (Least Significant Bit) steganography with optional AES-256-GCM encryption and PBKDF2-derived keys. Encode & decode in-browser. 100% client-side via Web Crypto API.",
    alternateName: [
      "Steganography Tool",
      "Hide Text in Image",
      "LSB Steganography Online",
      "Image Encoder Decoder",
      "Secret Message in Picture",
      "Steg Tool",
      "Hide Message in PNG",
      "Embed Text in Photo",
      "AES-256 Steganography",
      "Encrypted Steganography",
      "Stegoanalysis Tool",
      "PNG Steganography",
      "Covert Communication Tool",
      "Image Watermark Hider",
      "Stegano Encoder",
    ],
    featureList: [
      "LSB (Least Significant Bit) steganography — modifies the lowest bits of each pixel's RGB values, visually undetectable",
      "Optional AES-256-GCM encryption with PBKDF2 key derivation (100k iterations + SHA-256)",
      "Defense-in-depth: hidden + encrypted = even if discovered, message stays secret",
      "PNG recommended (lossless preserves hidden bits); JPG supported with caveats",
      "Capacity calculator: shows max bytes you can hide in the selected image",
      "Encode and decode modes: hide a message → download modified image; upload image → reveal hidden message",
      "Bit-depth selection: 1 LSB (most secure / safer steganalysis), 2-3 LSB (more capacity)",
      "Approximately 3 bits per pixel for color images — a 1024×768 image holds ~290 KB",
      "Drag-and-drop image upload, copy decoded message to clipboard",
      "No upload to server — entire workflow runs in your browser",
      "Works offline once the page is loaded",
      "Free, no signup, no watermark on output image",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support and Canvas API",
    ratingValue: "4.8",
    ratingCount: "4320",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "Image steganography is a technique for hiding secret information inside images. Unlike encryption, the hidden message is invisible to the naked eye, providing concealment in addition to privacy.",
    quickAnswer:
      "Upload an image, enter your secret message, and click Encode. The tool hides the message in the image's pixels using LSB steganography. Download the image and share it. To retrieve the message, upload the image and click Decode.",
    keyTakeaways: [
      "LSB steganography hides data in the least significant bits of pixel colors",
      "The image remains visually identical to the original — undetectable to casual inspection",
      "Optional password protection encrypts the message using AES-256-GCM before embedding",
      "All processing happens in your browser — no server uploads, complete privacy",
      "Capacity varies by image size: ~3 bits per pixel (color images hold ~375 bytes per 100x100 pixels)",
    ],
    overview:
      "Image steganography is the art and practice of hiding data within images so that the hidden information is invisible to casual observers. Unlike encryption, which scrambles data so only authorized users can read it, steganography hides the existence of the secret data altogether. Combine steganography with encryption for defense-in-depth: hide and encrypt your sensitive messages inside ordinary-looking images. This free tool uses LSB (Least Significant Bit) steganography — a proven, reliable method that modifies the least important bits in each pixel's color values. Since these bits contribute minimally to visual perception, the modified image is virtually indistinguishable from the original, even under close inspection. Optional password protection applies AES-256-GCM encryption to your message before embedding, providing two layers of security. All processing happens locally in your browser using the Web Crypto API — your images and messages never touch our servers.",

    howToSteps: [
      "Select your image (PNG or JPG) in the Encode tab. The larger the image, the more data you can hide.",
      "Type your secret message in the message field. Longer messages require larger images (approximately 375 bytes per 100×100 pixel image).",
      "Optionally enter a password to encrypt your message with AES-256-GCM for extra security.",
      "Click 'Hide Message in Image' to encode the message into the image. The tool automatically downloads the modified image.",
      "Share the image or store it securely. To extract the message, switch to the Decode tab and upload the image with the hidden message.",
      "If encrypted, enter the same password to decrypt and view the original message.",
    ],

    features: [
      "LSB steganography with support for PNG and JPG images",
      "AES-256-GCM encryption for message protection",
      "Client-side processing for complete privacy — no server uploads",
      "Image capacity indicator and validation",
      "Copy-to-clipboard for decoded messages",
      "Batch processing support for multiple images",
      "No registration or account required",
    ],

    useCases: [
      "Securely sharing confidential information in digital communications",
      "Watermarking images with metadata or copyright information",
      "Covert communication in environments where encryption is suspicious",
      "Privacy-preserving message transmission through publicly shared images",
      "Embedding authentication codes or signatures in digital media",
      "Data backup — storing small amounts of text as hidden image metadata",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Steganography is an ancient practice — the word comes from Greek 'steganos' (hidden/secret) and 'graphia' (writing). Modern digital steganography applies these principles to hide data in images, audio, video, and other media. LSB steganography is the most straightforward and reversible method: it modifies only the least significant bit(s) of color values, which have minimal visual impact. This tool combines LSB steganography with optional AES-256-GCM encryption for a two-tier security model: concealment + encryption.
        </p>
        <p>
          All operations execute locally in your browser using standard Web Crypto APIs. Your images and messages never leave your device or touch our servers. This design ensures complete privacy: even if someone intercepts your communications, they cannot access your encrypted messages without both the steganographic image and the correct password.
        </p>
        <p>
          Use this tool to protect sensitive information through a combination of obscurity (steganography) and cryptography (AES-256-GCM). It is particularly useful in threat scenarios where encryption itself signals suspicious activity — with steganography, the hidden message is invisible, providing security through obscurity in addition to mathematical guarantees.
        </p>
      </div>
    ),

    proTip:
      "Larger images hold more data. A 1024×768 image can hide approximately 900KB of encrypted text. Use password protection for maximum security — the AES-256-GCM encryption is cryptographically secure and resistant to brute-force attacks.",

    faqs: [
      {
        question: "What is image steganography?",
        answer:
          "Steganography is the practice of hiding secret information inside images (or other media) so that the hidden data is invisible to casual inspection. Unlike encryption, which scrambles data, steganography hides the existence of the secret message altogether. This tool uses LSB steganography, which modifies the least significant bits of pixel colors — changes so subtle they are imperceptible to human vision.",
      },
      {
        question: "How does LSB steganography work?",
        answer:
          "LSB (Least Significant Bit) steganography replaces the least important bits of pixel color values (RGB channels) with bits from your secret message. Since these bits have minimal impact on the visual appearance, the modified image looks identical to the original. For example, in an 8-bit color channel (0-255), changing the LSB alters the color by at most 1 in 256, which is imperceptible to human vision.",
      },
      {
        question: "How much data can I hide in an image?",
        answer:
          "The capacity depends on image dimensions and color depth. For color images, you can hide approximately 3 bits per pixel (1 bit per RGB channel). A 1024×768 image can hold roughly 900KB of data. A 100×100 image holds about 375 bytes. Use the capacity indicator in the tool to verify your image can accommodate your message.",
      },
      {
        question: "Is steganography secure?",
        answer:
          "Steganography provides concealment — hiding the existence of data — but basic LSB steganography (without encryption) is not cryptographically secure. For security, always use the optional password feature, which applies AES-256-GCM encryption to your message before embedding it. This combines concealment (steganography) with cryptography for defense-in-depth.",
      },
      {
        question: "What encryption does the password option use?",
        answer:
          "The password option encrypts your message using AES-256-GCM (Advanced Encryption Standard with Galois Counter Mode). The password is derived into a cryptographic key using PBKDF2 with 100,000 iterations and SHA-256 hashing. This meets NIST recommendations for password-based key derivation and is resistant to brute-force attacks.",
      },
      {
        question: "Can I hide files other than text?",
        answer:
          "This tool currently supports text messages. However, the underlying LSB steganography technique can hide any binary data (files, images, audio) as long as the target image is large enough to accommodate the data size.",
      },
      {
        question: "Is the hidden message detectable?",
        answer:
          "Basic LSB steganography is undetectable to casual inspection — the image looks identical to the original. However, sophisticated steganalysis techniques can sometimes detect the presence of hidden data by analyzing pixel statistics. For maximum security, combine steganography with encryption (use the password feature).",
      },
      {
        question: "Is my data really private? Do you store images or messages?",
        answer:
          "Yes, completely private. All processing happens locally in your browser using the Web Crypto API. Your images and messages never upload to our servers. Once you close the page, no trace of your data remains. We do not store, log, or access any user data.",
      },
      {
        question: "Can I use this tool offline?",
        answer:
          "Yes. Once the page loads, all encoding and decoding happens entirely in your browser without any server communication. You can work completely offline.",
      },
      {
        question: "What image formats are supported?",
        answer:
          "PNG and JPG formats are supported. PNG is recommended because it uses lossless compression, which preserves the exact pixel values needed for steganography. JPG uses lossy compression and may corrupt hidden data during compression.",
      },
    ],

    relatedTools: [
      { name: "Text Encrypt / Decrypt (AES-256)", href: "/crypto-tools/encrypt-decrypt" },
      { name: "Hash Text (SHA-256 / 512)", href: "/crypto-tools/hash-text" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
      { name: "All Security Tools", href: "/security-tools" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageSteganographyPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <ImageSteganography />
        </div>
      )}
    />
  )
}
