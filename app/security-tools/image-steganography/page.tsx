'use client';

import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import ImageSteganography from '@/components/security/image-steganography';
import GCard from '@/ui/gcard';

export const metadata: Metadata = {
  title: 'Image Steganography Tool - Hide Secret Messages in Images Online',
  description: 'Hide secret messages inside images using LSB steganography. Encode and decode hidden text in PNG/JPG with optional AES-GCM encryption. Free online steganography tool.',
  keywords: 'steganography, hide message in image, LSB encoding, image encryption, secure communication',
  openGraph: {
    title: 'Image Steganography Tool - Hide Secret Messages in Images',
    description: 'Hide and extract secret messages from images using advanced LSB steganography',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Steganography Tool',
    description: 'Hide secret messages in images online',
  },
};

export default function ImageSteganographyPage() {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org/',
    '@type': 'SoftwareApplication',
    name: 'Image Steganography Tool',
    description: 'Hide secret messages inside images using LSB steganography with optional AES-GCM encryption',
    url: 'https://fasttools.io/security-tools/image-steganography',
    applicationCategory: 'Utility',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '156',
    },
  };

  const howToSchema = {
    '@context': 'https://schema.org/',
    '@type': 'HowTo',
    name: 'How to Hide a Message in an Image Using Steganography',
    description: 'Step-by-step guide to hide secret messages inside images using LSB steganography',
    image: 'https://fasttools.io/images/steganography-howto.jpg',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Your Image',
        text: 'Choose a PNG or JPG image where you want to hide your message. Larger images can hold more data.',
        image: 'https://fasttools.io/images/step1-select.jpg',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Secret Message',
        text: 'Type the message you want to hide in the image. You can hide up to several thousand characters depending on image size.',
        image: 'https://fasttools.io/images/step2-message.jpg',
      },
      {
        '@type': 'HowToStep',
        name: 'Add Optional Password Protection',
        text: 'Optionally add a password to encrypt your message using AES-GCM encryption for extra security.',
        image: 'https://fasttools.io/images/step3-password.jpg',
      },
      {
        '@type': 'HowToStep',
        name: 'Encode and Download',
        text: 'Click "Hide Message in Image" to encode your message. The tool will automatically download the new image with hidden message.',
        image: 'https://fasttools.io/images/step4-download.jpg',
      },
      {
        '@type': 'HowToStep',
        name: 'Share or Store Securely',
        text: 'Share the image with others or store it securely. To extract the message, select the "Extract Message" tab.',
        image: 'https://fasttools.io/images/step5-share.jpg',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org/',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is image steganography?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Image steganography is the practice of hiding secret information inside images. Unlike encryption, steganography hides the existence of the message itself. The image looks normal to anyone who doesn\'t know a message is hidden inside it.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does LSB steganography work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LSB (Least Significant Bit) steganography replaces the least significant bits of pixel color values with bits from your secret message. Since these bits have minimal impact on the visual appearance, the image looks virtually identical to the original while carrying hidden data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the hidden message secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Basic LSB steganography provides concealment but not encryption. For enhanced security, use the optional password feature which applies AES-GCM encryption to your message before embedding it in the image.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I hide text in any image?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The tool works best with PNG and JPG images. Larger images can hold more data. A typical image can hide anywhere from a few hundred to several thousand characters depending on its dimensions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the image quality degrade?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, LSB steganography has minimal visual impact. The image will look virtually identical to the original, even though it contains hidden data.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I extract a hidden message?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Switch to the "Extract Message" tab, select the image with hidden message, enter the password if one was used, and click "Extract Hidden Message". The hidden text will appear instantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this tool open source?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this steganography tool is open source and available on GitHub. The implementation uses pure JavaScript with LSB encoding and AES-GCM encryption for enhanced security.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this tool offline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All processing happens in your browser using client-side JavaScript. No data is sent to our servers, so you can use this tool completely offline once the page is loaded.',
        },
      },
      {
        '@type': 'Question',
        name: 'What formats does it support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The tool supports PNG and JPG/JPEG image formats. PNG files are recommended as they preserve all pixel data without compression artifacts that could affect steganographic data.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much data can I hide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The capacity depends on image size. Each pixel has 3 color channels (RGB), and you can hide 1 bit per channel. For example, a 1000x1000 image can theoretically hide about 375KB of data, though practical limits are lower for reliability.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="software-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="space-y-12">
        {/* Hero Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Image Steganography Tool
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Hide secret messages inside images using advanced LSB steganography with optional AES-GCM encryption. Encode and decode messages in PNG/JPG images instantly.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#tool" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Use Tool Now
              </a>
              <a href="#how-it-works" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 font-medium">
                Learn How It Works
              </a>
            </div>
          </div>
        </section>

        {/* Tool Component */}
        <section id="tool" className="max-w-4xl mx-auto w-full px-4">
          <ImageSteganography />
        </section>

        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GCard className="p-6">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Encryption Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Optional AES-GCM encryption adds an extra layer of security to your hidden messages
              </p>
            </GCard>

            <GCard className="p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Client-Side Processing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All processing happens in your browser. No data is sent to servers for complete privacy
              </p>
            </GCard>

            <GCard className="p-6">
              <div className="text-3xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold mb-2">Visual Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">
                LSB steganography preserves image quality while hiding data. The image looks identical
              </p>
            </GCard>

            <GCard className="p-6">
              <div className="text-3xl mb-4">📁</div>
              <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Supports PNG and JPG/JPEG formats with full capacity optimization for each format
              </p>
            </GCard>

            <GCard className="p-6">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built with transparent, auditable code for complete security and no hidden functionality
              </p>
            </GCard>

            <GCard className="p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">High Capacity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hide thousands of characters in a single image depending on dimensions and format
              </p>
            </GCard>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Image</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Select a PNG or JPG image. Larger images (1000x1000+ pixels) can accommodate more hidden data. The tool works with any resolution.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enter Your Message</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Type the secret text you want to hide. This can be anything: passwords, coordinates, instructions, or sensitive information.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Add Password (Optional)</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For extra security, add a password. Your message will be encrypted using AES-GCM before being hidden in the image.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Encode & Download</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Click "Hide Message in Image" to encode. The image is automatically downloaded. To the naked eye, it looks completely normal.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Extract Anytime</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Switch to "Extract Message" tab, select the image with hidden message, provide password if used, and click extract to reveal your message.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">Secure Communication</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Send sensitive information disguised as innocent images. Perfect for communicating securely when direct channels are monitored.
              </p>
            </GCard>

            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Embed metadata, authentication tokens, or configuration data inside images for distribution and archival purposes.
              </p>
            </GCard>

            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">Digital Watermarking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hide copyright information or ownership details within images without affecting visual appearance or integrity.
              </p>
            </GCard>

            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">Education & Research</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn about steganography techniques and explore how hidden data can be embedded and extracted from digital media.
              </p>
            </GCard>

            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">Privacy & Anonymity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share information privately by hiding messages within publicly shareable images. Only intended recipients can extract them.
              </p>
            </GCard>

            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">Covert Data Storage</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Store sensitive notes or backup information within image files. The data remains hidden unless someone knows to look for it.
              </p>
            </GCard>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Details</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">LSB (Least Significant Bit) Encoding</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This tool uses Least Significant Bit steganography, which replaces the least significant bits of pixel color values with bits from your message. This technique:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Has minimal visual impact (imperceptible to human eyes)</li>
                <li>Provides good data capacity (up to 3 bits per pixel in RGB images)</li>
                <li>Is reversible and lossless for data recovery</li>
                <li>Works with both PNG and JPG formats</li>
              </ul>
            </GCard>

            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">AES-GCM Encryption</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                When you add a password, your message is encrypted using AES-GCM (Advanced Encryption Standard - Galois/Counter Mode):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Military-grade encryption with 256-bit keys</li>
                <li>Authenticated encryption (detects tampering)</li>
                <li>Password-based key derivation using PBKDF2</li>
                <li>Random initialization vectors for each encoding</li>
              </ul>
            </GCard>

            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">Data Capacity Calculator</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The maximum data capacity for an image is calculated as:
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm overflow-auto">
                <p className="text-gray-800 dark:text-gray-200">
                  Max Capacity = (Image Width × Image Height × 3 channels × 1 bit/channel) / 8
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For example, a 1000×1000 pixel image can theoretically hold about 375 KB of data.
              </p>
            </GCard>

            <GCard className="p-6">
              <h3 className="text-xl font-semibold mb-3">Security Considerations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>LSB steganography alone provides concealment, not encryption</li>
                <li>Always use password protection for sensitive data</li>
                <li>Avoid compressing images after encoding (use PNG)</li>
                <li>JPG compression may damage hidden data</li>
                <li>Store passwords securely - the tool cannot recover lost passwords</li>
              </ul>
            </GCard>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                What is image steganography?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Image steganography is the practice of hiding secret information inside images. Unlike encryption which scrambles data, steganography hides the existence of the message itself. The image looks normal to anyone who doesn't know a message is hidden inside it. It's the art of invisible communication.
              </p>
            </details>

            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                How does LSB steganography work?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                LSB (Least Significant Bit) steganography replaces the least significant bits of pixel color values with bits from your secret message. Since these bits have minimal impact on the visual appearance, the image looks virtually identical to the original while carrying hidden data. For example, in an RGB image, each pixel has three color channels, allowing 3 bits of data to be hidden per pixel.
              </p>
            </details>

            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                Is the hidden message secure?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Basic LSB steganography provides concealment but not encryption. For enhanced security, use the optional password feature which applies AES-GCM encryption to your message before embedding it in the image. This provides military-grade encryption in addition to steganographic concealment.
              </p>
            </details>

            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                Can I hide text in any image?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                The tool works best with PNG and JPG images. Larger images can hold more data. A 1000×1000 pixel image can hide approximately 375 KB of text. PNG format is recommended over JPG for lossless quality preservation, as JPG compression can damage hidden data.
              </p>
            </details>

            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                Will the image quality degrade?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                No, LSB steganography has minimal visual impact. The image will look virtually identical to the original, even though it contains hidden data. The changes are at the bit level and are imperceptible to human eyes.
              </p>
            </details>

            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                How do I extract a hidden message?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Switch to the "Extract Message" tab, select the image with hidden message, enter the password if one was used, and click "Extract Hidden Message". The hidden text will appear instantly. The extraction process is fast and accurate.
              </p>
            </details>

            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                Is this tool open source?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Yes, this steganography tool is open source and available on GitHub. The implementation uses pure JavaScript with LSB encoding and AES-GCM encryption for enhanced security. You can review the code and run it completely offline.
              </p>
            </details>

            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                Can I use this tool offline?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Yes! All processing happens in your browser using client-side JavaScript. No data is sent to our servers, so you can use this tool completely offline once the page is loaded. Your data never leaves your device.
              </p>
            </details>

            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                What formats does it support?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                The tool supports PNG and JPG/JPEG image formats. PNG files are recommended as they preserve all pixel data without compression artifacts that could affect steganographic data. JPG compression is lossy and may damage hidden information.
              </p>
            </details>

            <details className="border rounded-lg p-4 dark:border-gray-700">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                How much data can I hide?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                The capacity depends on image size. Each pixel has 3 color channels (RGB), and you can hide 1 bit per channel using LSB encoding. For example, a 1000×1000 image can theoretically hide about 375KB of data, though practical limits are slightly lower for reliability and data integrity.
              </p>
            </details>
          </div>
        </section>

        {/* Related Tools Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Related Tools</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/security-tools/password-generator" className="group">
              <GCard className="p-6 h-full transition-all group-hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Password Generator</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Generate strong, unique passwords for protecting your steganographic messages
                </p>
              </GCard>
            </Link>

            <Link href="/security-tools/text-encryption" className="group">
              <GCard className="p-6 h-full transition-all group-hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Text Encryption</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Encrypt text directly using AES-GCM encryption for secure communication
                </p>
              </GCard>
            </Link>

            <Link href="/security-tools/hash-generator" className="group">
              <GCard className="p-6 h-full transition-all group-hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Hash Generator</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Generate cryptographic hashes for data verification and integrity checking
                </p>
              </GCard>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
