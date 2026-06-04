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
    "Hide and decode text messages inside PNG or JPG images using LSB steganography with optional AES-GCM encryption.",
  metaTitle: "Image Steganography — Hide & Decode Text in Images Online",
  metaDescription:
    "Free image steganography tool. Hide text messages inside PNG or JPG images using LSB steganography with optional AES-256-GCM encryption. Outputs PNG and runs in your browser.",
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
      "Hide text messages inside images using LSB (Least Significant Bit) steganography with optional AES-256-GCM encryption and PBKDF2-derived keys. Encode and decode in-browser with PNG output via Web Crypto API.",
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
      "PNG Steganography",
      "Text in Image Hider",
      "Decode Hidden Text from Image",
      "Stegano Encoder",
    ],
    featureList: [
      "Hide text messages inside PNG or JPG source images",
      "Decode hidden text from PNG steganography images",
      "LSB (Least Significant Bit) steganography — uses one low bit from each RGB channel",
      "Optional AES-256-GCM encryption with PBKDF2 key derivation (100k iterations + SHA-256)",
      "Output downloads as PNG to preserve hidden pixel bits",
      "Capacity is about 3 bits per pixel minus the message-length header and encryption overhead",
      "Encode mode hides a message; decode mode extracts the hidden message",
      "Drag-and-drop image upload, copy decoded message to clipboard",
      "No upload to server — entire workflow runs in your browser",
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
      "Capacity varies by image size: about 3 bits per pixel, so a 100x100 image holds about 3.7 KB before overhead",
    ],
    overview:
      "Image steganography hides text inside an image so the message is not visible during normal viewing. This free online tool uses one least significant bit from each RGB channel, then downloads the encoded result as a PNG so the hidden bits are preserved. Optional password protection encrypts the message with AES-256-GCM before embedding it, adding privacy if someone finds the hidden data. It is useful for learning steganography, sharing private notes, puzzle design, watermark-style text markers, and testing how LSB encoding changes image pixels. All encoding and decoding happens locally in your browser using Canvas and the Web Crypto API — your images and messages do not upload to our servers.",

    howToSteps: [
      "Select your image (PNG or JPG) in the Encode tab. The larger the image, the more data you can hide.",
      "Type your secret message in the message field. Longer messages require larger images because capacity is based on image dimensions.",
      "Optionally enter a password to encrypt your message with AES-256-GCM for extra security.",
      "Click 'Hide Message in Image' to encode the message into the image. The tool automatically downloads the modified image.",
      "Share the image or store it securely. To extract the message, switch to the Decode tab and upload the image with the hidden message.",
      "If encrypted, enter the same password to decrypt and view the original message.",
    ],

    features: [
      "LSB steganography for text messages in PNG and JPG source images",
      "AES-256-GCM encryption for optional password-protected messages",
      "Client-side processing for complete privacy — no server uploads",
      "PNG output to preserve hidden pixel bits",
      "Copy-to-clipboard for decoded messages",
      "Single-image encode and decode workflow",
      "No registration or account required",
    ],

    useCases: [
      "Learning how LSB image steganography works",
      "Hiding short private notes inside image files",
      "Creating puzzle, classroom, or capture-the-flag style image challenges",
      "Adding hidden text markers to personal image files",
      "Testing how PNG preservation affects hidden pixel data",
      "Comparing encrypted and unencrypted hidden-message workflows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How LSB Encoding Works</h3>
          <p>
            Digital images store color as numbers. LSB steganography changes the least significant bit of those numbers, which has a very small visual effect. This tool stores message bits across the red, green, and blue channels and writes a short length header first so the decoder knows where the hidden text ends.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Capacity and Image Choice</h3>
          <p>
            Capacity depends on pixel count. A 100x100 color image has about 30,000 usable channel bits, or roughly 3.7 KB before the length header and encryption overhead. A 1024x768 image holds about 288 KiB before overhead. Larger images can carry longer messages, but short text is more reliable and less likely to be changed by later edits.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Encryption and Passwords</h3>
          <p>
            The password option encrypts the message before it is hidden. It uses AES-GCM with a PBKDF2-derived key, so the decoded data still needs the correct password before it can be read. Without a password, the tool hides plain text and should be treated as concealment rather than cryptographic security.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">PNG vs JPG</h3>
          <p>
            PNG is the safest format for the final steganography image because it preserves exact pixel values. JPG source images can be used, but the encoded download is PNG. Avoid resizing, compressing, screenshotting, or uploading the result to services that recompress images, because those changes can destroy the hidden bits.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Limitations and Responsible Use</h3>
          <p>
            This tool is designed for text messages, education, privacy experiments, and legitimate watermark-style notes. LSB steganography is not invisible to every forensic analysis technique, and it does not replace secure storage, access control, or end-to-end encrypted communication for sensitive material.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use PNG output and avoid recompressing or resizing the encoded image. Image editors, social platforms, and messaging apps often rewrite pixels, which can remove or corrupt the hidden message.",

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
          "The capacity depends on image dimensions. This tool uses about 3 bits per pixel, then reserves a 32-bit message-length header and may add encryption overhead. A 100x100 image holds about 3,746 bytes before overhead. A 1024x768 image holds about 294,908 bytes, or roughly 288 KiB, before overhead.",
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
          "This page currently supports text messages only. The underlying LSB technique can be adapted for binary files, but this tool's interface is built for entering, encrypting, hiding, decoding, and copying text.",
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
          "All encoding and decoding runs in your browser after the page loads, so images and messages are not uploaded during the workflow. Browser caching behavior can vary, so do not rely on this page as a packaged offline app.",
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
