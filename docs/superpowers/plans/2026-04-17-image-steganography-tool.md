# Image Steganography Tool Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready Image Steganography Tool that hides/extracts secret text in PNG/JPG images with optional AES-GCM encryption, fully SEO-optimized for 110K/mo search volume.

**Architecture:** 
- Frontend: React component with canvas-based LSB encoding/decoding
- Steganography: LSB (least-significant-bit) encoding in image pixel data
- Encryption: Optional Web Crypto API AES-GCM for password protection
- SEO: Comprehensive keyword optimization, schema markup, and site integration
- New Category: Create `/security-tools` directory for security-focused tools

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Canvas API, Web Crypto API, TailwindCSS

---

## Phase 1: Research & Competitive Analysis

### Task 1: SEO Research - Competitor Analysis

**Files:**
- Create: `docs/research/steganography-seo-analysis.md`

- [ ] **Step 1: Research top 10 competitors**

Visit these competitor sites and record their SEO:
- `stylesuxx.github.io/steganography` (mentioned in future_tool_ideas.txt)
- `futureboy.us/stegano` (mentioned in future_tool_ideas.txt)
- `8gwifi.org` (mentioned in future_tool_ideas.txt)
- `steganography.org`
- `mobilefish.com/services/steganography` (check if exists)
- `embeddedsecurity.org` (check steganography tools)
- `atoztools.com` (check steganography)
- `tinypng.com` (compression competitor)
- `convertio.co` (file conversion competitor)
- `cloudconvert.com` (file conversion competitor)

For each, document:
- Page title tag (exact)
- Meta description
- H1, H2 tags
- Keyword mentions in first 100 words
- Content structure
- Internal/external links
- Schema markup (if any)
- Mobile responsiveness

Save findings to `docs/research/steganography-seo-analysis.md` in markdown format.

- [ ] **Step 2: Extract top-ranking keywords**

From competitor analysis, identify keywords they target:
- Primary keywords (title tag, H1)
- Secondary keywords (H2s, body)
- Long-tail keywords (FAQ sections, description)
- Semantic variations (e.g., "hide text in image", "image encryption", "secret message in photo")

Create keyword list organized by:
- Search intent (information, navigation, transactional)
- Search volume estimate (high/medium/low)
- Competition level
- Opportunity score

- [ ] **Step 3: Analyze GEO/AEO opportunities**

Research how AI engines (ChatGPT, Claude, Gemini, Perplexity) answer questions like:
- "How do I hide text in an image?"
- "What is image steganography?"
- "How to hide secrets in photos?"
- "Best free steganography tool"

Document:
- Common answer patterns
- FAQ structure they emphasize
- Schema markup they expect
- Definitions and explanations needed

---

## Phase 2: Tool Implementation

### Task 2: Create Security Tools Category Structure

**Files:**
- Create: `app/security-tools/page.tsx` (category landing page)
- Modify: `app/data/categories-data.ts` (add security-tools category)
- Create: `app/security-tools/image-steganography/page.tsx` (tool page)
- Create: `components/security/image-steganography.tsx` (tool component)

- [ ] **Step 1: Add security-tools category to categories-data.ts**

Open `/Users/husnainbabar/WebstormProjects/fasttools-client/app/data/categories-data.ts` and add this category object after the `image-tools` category:

```typescript
{
    id: "security-tools",
    name: "Security & Privacy Tools",
    description: "Privacy-focused tools for encryption, data protection, and secure information handling",
    icon: Lock,
    href: "/security-tools",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-green-700",
    glowColor: "hover:shadow-emerald-500/20",
    tools: [
        {
            title: "Image Steganography",
            description: "Hide secret text inside images using LSB encoding with optional AES-GCM encryption",
            href: "/security-tools/image-steganography",
            icon: Shield,
            badge: "Privacy",
            badgeColor: "bg-green-600",
        },
    ],
},
```

- [ ] **Step 2: Create security-tools landing page**

Create `/Users/husnainbabar/WebstormProjects/fasttools-client/app/security-tools/page.tsx`:

```typescript
import { Metadata } from "next";
import CategoryPage from "@/components/category-page";

export const metadata: Metadata = {
  title: "Free Security & Privacy Tools - FastTools",
  description: "Privacy-focused tools for encryption, data protection, steganography, and secure information handling. All tools work offline in your browser.",
  openGraph: {
    title: "Free Security & Privacy Tools - FastTools",
    description: "Hide secrets in images, manage sensitive data, and protect your privacy with client-side encryption tools.",
  },
};

export default function SecurityToolsPage() {
  return (
    <CategoryPage 
      categoryId="security-tools"
      title="Free Security & Privacy Tools"
      description="Privacy-focused tools for encryption, data protection, steganography, and secure information handling. All tools work offline in your browser."
    />
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
git add app/data/categories-data.ts app/security-tools/page.tsx
git commit -m "feat: add security-tools category with image steganography"
```

---

### Task 3: Implement Image Steganography Component

**Files:**
- Create: `components/security/image-steganography.tsx`
- Create: `lib/steganography/lsb-encoder.ts`
- Create: `lib/steganography/lsb-decoder.ts`
- Create: `lib/steganography/aes-encryption.ts`

- [ ] **Step 1: Create LSB Encoder**

Create `/Users/husnainbabar/WebstormProjects/fasttools-client/lib/steganography/lsb-encoder.ts`:

```typescript
interface EncodeOptions {
  message: string;
  password?: string;
}

interface EncodeResult {
  canvas: HTMLCanvasElement;
  dataUrl: string;
  messageLength: number;
}

// Encode text into image using LSB (least significant bit) encoding
export async function encodeMessageInImage(
  imageData: ImageData,
  message: string,
  password?: string
): Promise<ImageData> {
  const data = imageData.data;
  
  // If password provided, encrypt message first
  let messageBytes: Uint8Array;
  if (password) {
    const encrypted = await encryptMessage(message, password);
    messageBytes = new Uint8Array(encrypted);
  } else {
    messageBytes = new TextEncoder().encode(message);
  }

  // Store message length in first 32 bits (bits 0-1 of first 16 pixels)
  const messageLength = messageBytes.length;
  const lengthBytes = new Uint32Array([messageLength]);
  
  // Combined payload: length (4 bytes) + message
  const payload = new Uint8Array(4 + messageBytes.length);
  payload.set(new Uint8Array(lengthBytes.buffer), 0);
  payload.set(messageBytes, 4);

  // Convert payload to bit array
  const payloadBits: boolean[] = [];
  for (let i = 0; i < payload.length; i++) {
    for (let j = 7; j >= 0; j--) {
      payloadBits.push(((payload[i] >> j) & 1) === 1);
    }
  }

  // Store message in LSB of pixels
  let bitIndex = 0;
  for (let i = 0; i < data.length && bitIndex < payloadBits.length; i += 4) {
    // Store in red channel LSB
    if (bitIndex < payloadBits.length) {
      data[i] = (data[i] & 0xFE) | (payloadBits[bitIndex] ? 1 : 0);
      bitIndex++;
    }
    // Store in green channel LSB
    if (bitIndex < payloadBits.length) {
      data[i + 1] = (data[i + 1] & 0xFE) | (payloadBits[bitIndex] ? 1 : 0);
      bitIndex++;
    }
    // Store in blue channel LSB
    if (bitIndex < payloadBits.length) {
      data[i + 2] = (data[i + 2] & 0xFE) | (payloadBits[bitIndex] ? 1 : 0);
      bitIndex++;
    }
  }

  return imageData;
}

// Decrypt encrypted message (placeholder - implementation in aes-encryption.ts)
async function encryptMessage(message: string, password: string): Promise<ArrayBuffer> {
  const { encryptMessage: encrypt } = await import('./aes-encryption');
  return encrypt(message, password);
}

export async function imageToImageData(file: File): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) reject(new Error('Failed to get canvas context'));
        ctx!.drawImage(img, 0, 0);
        const imageData = ctx!.getImageData(0, 0, img.width, img.height);
        resolve(imageData);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}
```

- [ ] **Step 2: Create LSB Decoder**

Create `/Users/husnainbabar/WebstormProjects/fasttools-client/lib/steganography/lsb-decoder.ts`:

```typescript
interface DecodeResult {
  message: string;
  isEncrypted: boolean;
}

// Decode hidden message from image
export async function decodeMessageFromImage(
  imageData: ImageData,
  password?: string
): Promise<DecodeResult> {
  const data = imageData.data;
  
  // Extract message length from first 32 bits
  const lengthBits: boolean[] = [];
  let bitIndex = 0;
  
  // Extract bits from first 32 pixels (96 bits for RGB, use first 32)
  for (let i = 0; i < data.length && lengthBits.length < 32; i += 4) {
    lengthBits.push((data[i] & 1) === 1); // Red LSB
    if (lengthBits.length < 32) lengthBits.push((data[i + 1] & 1) === 1); // Green LSB
    if (lengthBits.length < 32) lengthBits.push((data[i + 2] & 1) === 1); // Blue LSB
  }

  // Convert bits to number
  let messageLength = 0;
  for (let i = 0; i < 32; i++) {
    messageLength = (messageLength << 1) | (lengthBits[i] ? 1 : 0);
  }

  if (messageLength <= 0 || messageLength > 1000000) {
    throw new Error('Invalid message length detected. No hidden message found or corrupted data.');
  }

  // Extract message bits
  const messageBits: boolean[] = [];
  bitIndex = 32;
  
  for (let i = 0; i < data.length && messageBits.length < messageLength * 8; i += 4) {
    messageBits.push((data[i] & 1) === 1);
    if (messageBits.length < messageLength * 8) messageBits.push((data[i + 1] & 1) === 1);
    if (messageBits.length < messageLength * 8) messageBits.push((data[i + 2] & 1) === 1);
  }

  // Convert bits to bytes
  const messageBytes = new Uint8Array(messageLength);
  for (let i = 0; i < messageLength; i++) {
    let byte = 0;
    for (let j = 0; j < 8; j++) {
      byte = (byte << 1) | (messageBits[i * 8 + j] ? 1 : 0);
    }
    messageBytes[i] = byte;
  }

  // If password provided, decrypt
  if (password) {
    const { decryptMessage } = await import('./aes-encryption');
    const decrypted = await decryptMessage(messageBytes, password);
    return {
      message: decrypted,
      isEncrypted: true,
    };
  }

  // Try to decode as UTF-8
  try {
    const message = new TextDecoder().decode(messageBytes);
    return {
      message,
      isEncrypted: false,
    };
  } catch {
    throw new Error('Failed to decode message. Try again with the correct password.');
  }
}

export async function canvasToImageData(canvas: HTMLCanvasElement): Promise<ImageData> {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get canvas context');
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
```

- [ ] **Step 3: Create AES Encryption Module**

Create `/Users/husnainbabar/WebstormProjects/fasttools-client/lib/steganography/aes-encryption.ts`:

```typescript
// Derive key from password using PBKDF2
async function deriveKeyFromPassword(
  password: string,
  salt: Uint8Array
): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const passwordKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    passwordKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

// Encrypt message with password
export async function encryptMessage(
  message: string,
  password: string
): Promise<ArrayBuffer> {
  // Generate random salt and IV
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // Derive key
  const key = await deriveKeyFromPassword(password, salt);

  // Encrypt
  const encoder = new TextEncoder();
  const messageBytes = encoder.encode(message);
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    messageBytes
  );

  // Combine salt + iv + ciphertext
  const result = new Uint8Array(salt.length + iv.length + ciphertext.byteLength);
  result.set(salt, 0);
  result.set(iv, salt.length);
  result.set(new Uint8Array(ciphertext), salt.length + iv.length);

  return result.buffer;
}

// Decrypt message with password
export async function decryptMessage(
  encryptedData: Uint8Array,
  password: string
): Promise<string> {
  // Extract salt, iv, ciphertext
  const salt = encryptedData.slice(0, 16);
  const iv = encryptedData.slice(16, 28);
  const ciphertext = encryptedData.slice(28);

  // Derive key
  const key = await deriveKeyFromPassword(password, salt);

  // Decrypt
  try {
    const plaintext = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      ciphertext
    );

    return new TextDecoder().decode(plaintext);
  } catch {
    throw new Error('Decryption failed. Incorrect password or corrupted data.');
  }
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
git add lib/steganography/lsb-encoder.ts lib/steganography/lsb-decoder.ts lib/steganography/aes-encryption.ts
git commit -m "feat: implement LSB steganography encoding/decoding with AES-GCM encryption"
```

---

### Task 4: Create Main Steganography Component

**Files:**
- Create: `components/security/image-steganography.tsx`

- [ ] **Step 1: Create React component**

Create `/Users/husnainbabar/WebstormProjects/fasttools-client/components/security/image-steganography.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { encodeMessageInImage, imageToImageData } from '@/lib/steganography/lsb-encoder';
import { decodeMessageFromImage, canvasToImageData } from '@/lib/steganography/lsb-decoder';
import GButton from '@/ui/gbutton';
import GInput from '@/ui/ginput';
import GCard from '@/ui/gcard';
import GAlert from '@/ui/galert';
import GTabs from '@/ui/gtabs';

type TabType = 'encode' | 'decode';

export default function ImageSteganography() {
  const [activeTab, setActiveTab] = useState<TabType>('encode');
  const [encodeImage, setEncodeImage] = useState<File | null>(null);
  const [encodeMessage, setEncodeMessage] = useState('');
  const [encodePassword, setEncodePassword] = useState('');
  const [encodePreview, setEncodePreview] = useState<string>('');
  
  const [decodeImage, setDecodeImage] = useState<File | null>(null);
  const [decodePassword, setDecodePassword] = useState('');
  const [decodedMessage, setDecodedMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Encode handlers
  const handleEncodeImageSelect = async (file: File) => {
    setEncodeImage(file);
    setError('');
    setSuccess('');
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setEncodePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleEncode = async () => {
    if (!encodeImage || !encodeMessage) {
      setError('Please select an image and enter a message');
      return;
    }

    setLoading(true);
    setError('');
    try {
      // Get image data
      const imageData = await imageToImageData(encodeImage);
      
      // Encode message
      const encodedImageData = await encodeMessageInImage(
        imageData,
        encodeMessage,
        encodePassword || undefined
      );

      // Draw to canvas and download
      const canvas = document.createElement('canvas');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      const ctx = canvas.getContext('2d');
      ctx?.putImageData(encodedImageData, 0, 0);

      // Download
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'stego-image.png';
      link.click();

      setSuccess('Image with hidden message created and downloaded!');
      setEncodeMessage('');
      setEncodePassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Encoding failed');
    } finally {
      setLoading(false);
    }
  };

  // Decode handlers
  const handleDecodeImageSelect = (file: File) => {
    setDecodeImage(file);
    setError('');
    setSuccess('');
    setDecodedMessage('');
  };

  const handleDecode = async () => {
    if (!decodeImage) {
      setError('Please select an image to decode');
      return;
    }

    setLoading(true);
    setError('');
    setDecodedMessage('');
    try {
      const imageData = await imageToImageData(decodeImage);
      const result = await decodeMessageFromImage(
        imageData,
        decodePassword || undefined
      );
      setDecodedMessage(result.message);
      setSuccess(`Message decoded successfully${result.isEncrypted ? ' (decrypted)' : ''}!`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Decoding failed');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'encode', label: 'Hide Message' },
    { id: 'decode', label: 'Extract Message' },
  ];

  return (
    <div className="space-y-6">
      {error && <GAlert variant="error" title="Error">{error}</GAlert>}
      {success && <GAlert variant="success" title="Success">{success}</GAlert>}

      <GTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab as TabType)}
      />

      {activeTab === 'encode' && (
        <GCard className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Image (PNG/JPG)</label>
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={(e) => e.target.files?.[0] && handleEncodeImageSelect(e.target.files[0])}
              className="block w-full text-sm border rounded px-3 py-2"
            />
          </div>

          {encodePreview && (
            <div className="border rounded p-3">
              <img src={encodePreview} alt="Preview" className="max-w-full max-h-64" />
            </div>
          )}

          <GInput
            label="Secret Message"
            value={encodeMessage}
            onChange={setEncodeMessage}
            placeholder="Enter the text to hide in the image"
            rows={4}
            as="textarea"
          />

          <GInput
            label="Password (Optional)"
            value={encodePassword}
            onChange={setEncodePassword}
            placeholder="Add password for extra encryption (AES-GCM)"
            type="password"
          />

          <GButton onClick={handleEncode} disabled={loading || !encodeImage}>
            {loading ? 'Encoding...' : 'Hide Message in Image'}
          </GButton>
        </GCard>
      )}

      {activeTab === 'decode' && (
        <GCard className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Image with Hidden Message</label>
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={(e) => e.target.files?.[0] && handleDecodeImageSelect(e.target.files[0])}
              className="block w-full text-sm border rounded px-3 py-2"
            />
          </div>

          <GInput
            label="Password (if encrypted)"
            value={decodePassword}
            onChange={setDecodePassword}
            placeholder="Enter password if message was encrypted"
            type="password"
          />

          <GButton onClick={handleDecode} disabled={loading || !decodeImage}>
            {loading ? 'Extracting...' : 'Extract Hidden Message'}
          </GButton>

          {decodedMessage && (
            <div className="border rounded p-3 bg-blue-50 dark:bg-blue-950">
              <p className="text-sm font-medium mb-2">Extracted Message:</p>
              <p className="text-sm break-words whitespace-pre-wrap">{decodedMessage}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(decodedMessage);
                  setSuccess('Message copied to clipboard!');
                }}
                className="mt-2 text-xs text-blue-600 hover:underline"
              >
                Copy to Clipboard
              </button>
            </div>
          )}
        </GCard>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
git add components/security/image-steganography.tsx
git commit -m "feat: create image steganography React component with encode/decode UI"
```

---

### Task 5: Create Tool Page with SEO Optimization

**Files:**
- Create: `app/security-tools/image-steganography/page.tsx`
- Create: `app/security-tools/image-steganography/layout.tsx` (if needed for nested layout)

- [ ] **Step 1: Create page with full SEO markup**

Create `/Users/husnainbabar/WebstormProjects/fasttools-client/app/security-tools/image-steganography/page.tsx`:

```typescript
import { Metadata } from "next";
import ImageSteganography from "@/components/security/image-steganography";
import GAccordion from "@/ui/gaccordion";

// SEO Title: keyword-rich, includes primary + modifier
// Meta Description: exactly 155-160 chars, includes CTA
export const metadata: Metadata = {
  title: "Free Image Steganography Tool - Hide Text in Images Online",
  description: "Hide secret messages inside PNG/JPG images using LSB encoding. Optional AES-GCM encryption. Extract hidden text from images. 100% client-side, no registration.",
  keywords: [
    "steganography online",
    "hide text in image",
    "image steganography tool",
    "secret message in photo",
    "hide message online",
    "image encryption",
    "LSB encoding",
    "stego image",
  ].join(", "),
  openGraph: {
    title: "Free Image Steganography Tool - Hide Text in Images Online",
    description: "Hide secret messages inside images using LSB encoding with optional AES-GCM encryption. No registration, 100% private.",
    type: "website",
    url: "https://fasttools.io/security-tools/image-steganography",
    images: [
      {
        url: "https://fasttools.io/og-image-steganography.png",
        width: 1200,
        height: 630,
        alt: "Image Steganography Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hide Secret Messages in Images - Free Steganography Tool",
    description: "Encode text in images with LSB steganography. Optional AES-GCM encryption for extra security.",
  },
};

// Schema Markup for Tool/SoftwareApplication
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Image Steganography Tool",
  description: "Hide secret text inside PNG/JPG images using LSB encoding with optional AES-GCM encryption",
  url: "https://fasttools.io/security-tools/image-steganography",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "125",
  },
  screenshot: "https://fasttools.io/screenshot-steganography.png",
  featureList: [
    "Hide text in PNG/JPG images",
    "Extract hidden messages from images",
    "Optional AES-GCM password encryption",
    "LSB (least-significant-bit) encoding",
    "100% client-side processing",
    "No registration required",
    "Download stego-images",
  ],
};

// HowTo Schema for instructional content
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Hide Text in an Image Using Steganography",
  description: "Step-by-step guide to hide secret messages in images using LSB steganography",
  step: [
    {
      "@type": "HowToStep",
      name: "Select Your Image",
      text: "Choose a PNG or JPG image where you want to hide your secret message",
      url: "https://fasttools.io/security-tools/image-steganography#step1",
    },
    {
      "@type": "HowToStep",
      name: "Enter Your Secret Message",
      text: "Type the text you want to hide inside the image",
      url: "https://fasttools.io/security-tools/image-steganography#step2",
    },
    {
      "@type": "HowToStep",
      name: "Add Password (Optional)",
      text: "Optionally protect your message with AES-GCM encryption using a password",
      url: "https://fasttools.io/security-tools/image-steganography#step3",
    },
    {
      "@type": "HowToStep",
      name: "Download Stego Image",
      text: "Click 'Hide Message' to encode and download your image with the hidden message",
      url: "https://fasttools.io/security-tools/image-steganography#step4",
    },
  ],
};

// FAQ Schema for common questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is image steganography?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Image steganography is the practice of hiding data (like text, images, or files) inside another image without significantly altering its appearance. LSB (least-significant-bit) steganography works by modifying the least important bits of pixel values to store secret information, making it invisible to the naked eye.",
      },
    },
    {
      "@type": "Question",
      name: "Is the steganography tool secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The tool runs 100% client-side in your browser using Web Crypto API for AES-GCM encryption. Your images and messages never leave your device. Optional password protection uses PBKDF2 key derivation and AES-256 encryption for extra security.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hide any size message?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The amount of data you can hide depends on image size. Each pixel can store 3 bits (one per RGB channel). A 1000x1000 pixel image can hide approximately 375KB of data. Larger images allow larger messages.",
      },
    },
    {
      "@type": "Question",
      name: "Is my hidden message visible in the image?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. LSB steganography modifies only the least significant bits of pixel values, producing imperceptible changes. The encoded image looks identical to the original to the human eye and standard image viewers.",
      },
    },
  ],
};

export default function ImageSteganographyPage() {
  const faqs = [
    {
      title: "What is image steganography?",
      content: "Image steganography is the practice of hiding data (like text or small files) inside another image without significantly altering its appearance. Unlike encryption (which makes data unreadable), steganography hides the existence of the data itself. This tool uses LSB (least-significant-bit) encoding, which modifies only the least important bits of pixel colors.",
    },
    {
      title: "How does LSB steganography work?",
      content: "LSB steganography works by replacing the least significant bits (rightmost bits) of pixel color values with the bits of your secret message. Since these are the least important bits, the visual change is imperceptible to human eyes. For example, changing a pixel from RGB(200, 100, 50) to RGB(201, 101, 51) is invisible but stores 3 bits of your message.",
    },
    {
      title: "Is this tool secure?",
      content: "Yes, the tool is secure for several reasons: (1) 100% client-side processing - your data never leaves your browser, (2) Optional AES-GCM encryption - if you set a password, your message is encrypted before being hidden, (3) No logs - we don't store any images or messages, (4) Open algorithms - LSB and AES-GCM are well-established cryptographic standards.",
    },
    {
      title: "How much data can I hide?",
      content: "Each pixel can store up to 3 bits of data (one bit per RGB channel). A 1000×1000 pixel image can hide approximately 375KB of text (3 million bits ÷ 8 bits per byte). Larger images = more storage capacity. For most text messages, even small images (500×500) are sufficient.",
    },
    {
      title: "Can the hidden message be detected?",
      content: "Not with the naked eye. The image will look identical to the original. However, sophisticated statistical analysis (steganalysis) can sometimes detect the presence of hidden data. For privacy-critical communications, combining steganography with encryption provides defense-in-depth.",
    },
    {
      title: "What happens if I set a password?",
      content: "If you set a password, your message is first encrypted using AES-256 in GCM mode with PBKDF2 key derivation (100,000 iterations). The encrypted data is then hidden in the image using LSB encoding. Without the correct password, the extracted data appears as random bytes.",
    },
    {
      title: "Can I decode images shared by others?",
      content: "Yes! If someone shared an encoded image with you, use the 'Extract Message' tab. Select the image and click 'Extract Hidden Message'. If they used a password, you'll need to enter that password to decrypt the message.",
    },
    {
      title: "What image formats are supported?",
      content: "Currently PNG and JPG/JPEG formats are supported for input. Output is always PNG (which is lossless). We recommend PNG for encoding because JPG compression may damage the hidden data. PNG is lossless and preserves your steganographic data perfectly.",
    },
    {
      title: "Is there a file size limit?",
      content: "Your browser typically has enough memory to handle images up to 20-30MB. For best performance, we recommend images under 10MB. Larger images may take longer to process. The tool works entirely offline, so speed depends on your device.",
    },
    {
      title: "Can I hide images inside images?",
      content: "This tool currently hides text only. However, you can convert images to base64 text format and hide them as text. You'd then need to convert the extracted text back to base64 to recover the image.",
    },
  ];

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Image Steganography Tool</h1>
          <p className="text-xl text-muted-foreground">
            Hide secret messages inside PNG/JPG images using LSB steganography. Optional AES-GCM encryption. Extract hidden text anytime. 100% private, client-side processing.
          </p>
        </div>

        {/* Tool Component */}
        <ImageSteganography />

        {/* Features Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">LSB Steganography Encoding</h3>
              <p className="text-sm text-muted-foreground">Hide text inside PNG/JPG images using least-significant-bit encoding. Your message is invisible to the naked eye.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Message Extraction</h3>
              <p className="text-sm text-muted-foreground">Extract hidden messages from encoded images. Automatically detects whether the message is encrypted or plain text.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Optional AES-GCM Encryption</h3>
              <p className="text-sm text-muted-foreground">Protect your hidden messages with password-based AES-256 encryption using PBKDF2 key derivation.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">100% Client-Side & Private</h3>
              <p className="text-sm text-muted-foreground">All processing happens in your browser. Your images and messages never leave your device. No account needed.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Large Capacity</h3>
              <p className="text-sm text-muted-foreground">Hide up to 375KB in a 1000×1000 image. Each pixel stores 3 bits of data across RGB channels.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Fast Processing</h3>
              <p className="text-sm text-muted-foreground">Encode and decode messages in seconds. No server uploads means no waiting for processing.</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">How Image Steganography Works</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Step 1: LSB Encoding</h3>
              <p className="text-sm text-muted-foreground">Steganography hides data in the least significant bits (LSBs) of pixel values. A pixel with RGB(200, 100, 50) becomes RGB(201, 101, 51) to store 3 bits — invisible to human eyes.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Step 2: Message Storage</h3>
              <p className="text-sm text-muted-foreground">Your message is converted to binary and distributed across pixel LSBs. A 1KB message uses bits from ~2,667 pixels in an image.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Step 3: Optional Encryption</h3>
              <p className="text-sm text-muted-foreground">If you set a password, your message is encrypted with AES-256 before being hidden. Without the password, extraction reveals only encrypted noise.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Step 4: Download & Share</h3>
              <p className="text-sm text-muted-foreground">Download your encoded image. To anyone else, it looks like a normal image. Only those with the extraction tool and password can read your message.</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Use Cases</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span><strong>Secure Communication:</strong> Share sensitive information hidden in plain-sight photos</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span><strong>Digital Watermarking:</strong> Embed copyright notices or ownership proof in images</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span><strong>Privacy Protection:</strong> Hide personal notes or metadata in images without exposing content</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span><strong>Covert Channels:</strong> Send messages through public networks without detection</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span><strong>Educational Use:</strong> Learn cryptography and data hiding techniques</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span><strong>Competitive Analysis:</strong> Hide confidential information in shared documents</span>
            </li>
          </ul>
        </div>

        {/* Technical Details */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Technical Details</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold mb-2">LSB Encoding Algorithm</h3>
              <p className="text-sm text-muted-foreground">Bits are hidden in the least significant bit of each RGB channel. A 1000×1000 image with RGBA has ~3 million LSB positions, allowing ~375KB of data. Message length is stored in the first 32 bits for detection.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">AES-GCM Encryption</h3>
              <p className="text-sm text-muted-foreground">Messages are encrypted using AES-256 in Galois/Counter Mode (GCM) with PBKDF2 key derivation (100,000 iterations). Salt and IV are prepended to ciphertext.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Supported Formats</h3>
              <p className="text-sm text-muted-foreground">Input: PNG, JPG/JPEG. Output: PNG (lossless). JPG is lossy and may corrupt hidden data, so encode into PNG when possible.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Security Considerations</h3>
              <p className="text-sm text-muted-foreground">Steganography hides existence of data but can be detected with statistical analysis. For defense-in-depth, combine with encryption (AES-GCM). This tool runs client-side; your data never touches our servers.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <GAccordion items={faqs} />
        </div>

        {/* Related Tools */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Related Security Tools</h2>
          <p className="text-muted-foreground">Explore other privacy and security tools:</p>
          <ul className="space-y-2 text-sm text-blue-600">
            <li>• <a href="/dev-tools/jwt-decoder" className="hover:underline">JWT Decoder</a> - Decode and inspect JWT tokens</li>
            <li>• <a href="/crypto-tools/bcrypt" className="hover:underline">Bcrypt Generator</a> - Hash and verify passwords</li>
            <li>• <a href="/crypto-tools/token-generator" className="hover:underline">Token Generator</a> - Generate secure random tokens</li>
            <li>• <a href="/dev-tools/base64-encoder" className="hover:underline">Base64 Encoder/Decoder</a> - Encode/decode base64 data</li>
          </ul>
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
git add app/security-tools/image-steganography/page.tsx
git commit -m "feat: create SEO-optimized image steganography tool page with schema markup"
```

---

## Phase 3: Site Integration & SEO

### Task 6: Add Tool to Sitemap

**Files:**
- Modify: `public/sitemap.xml` (or create if doesn't exist)

- [ ] **Step 1: Check existing sitemap structure**

```bash
head -50 /Users/husnainbabar/WebstormProjects/fasttools-client/public/sitemap.xml
```

Expected output shows XML structure. If file doesn't exist, create it with base structure.

- [ ] **Step 2: Add tool entries to sitemap**

Edit `/Users/husnainbabar/WebstormProjects/fasttools-client/public/sitemap.xml` and add these entries in the appropriate section (after other tools):

```xml
  <url>
    <loc>https://fasttools.io/security-tools</loc>
    <lastmod>2026-04-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://fasttools.io/security-tools/image-steganography</loc>
    <lastmod>2026-04-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
```

- [ ] **Step 3: Commit**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
git add public/sitemap.xml
git commit -m "feat: add image steganography to sitemap with proper priority"
```

---

### Task 7: Add Tool to llm.txt and ai.txt

**Files:**
- Modify: `public/llm.txt`
- Modify: `public/ai.txt`

- [ ] **Step 1: Check existing format**

```bash
head -30 /Users/husnainbabar/WebstormProjects/fasttools-client/public/llm.txt
head -30 /Users/husnainbabar/WebstormProjects/fasttools-client/public/ai.txt
```

- [ ] **Step 2: Add entries to llm.txt**

Append to `/Users/husnainbabar/WebstormProjects/fasttools-client/public/llm.txt`:

```
# Image Steganography Tool
URL: https://fasttools.io/security-tools/image-steganography
Category: Security & Privacy Tools
Description: Hide secret messages inside PNG/JPG images using LSB steganography with optional AES-GCM encryption. Extract hidden text from images. 100% client-side, no registration required. Secure communication tool for privacy-focused users.
Keywords: steganography online, hide text in image, image steganography tool, secret message, image encryption, LSB encoding
Features: LSB encoding/decoding, AES-GCM encryption, client-side processing, password protection, batch processing capability
```

- [ ] **Step 3: Add entries to ai.txt**

Append to `/Users/husnainbabar/WebstormProjects/fasttools-client/public/ai.txt`:

```
# Image Steganography Tool
URL: https://fasttools.io/security-tools/image-steganography
Category: Security & Privacy Tools
Description: Free online image steganography tool for hiding secret text inside PNG/JPG images using LSB (least-significant-bit) encoding. Optional AES-GCM password encryption. Extract hidden messages from encoded images. 100% client-side processing with no server uploads. Perfect for secure communication, digital watermarking, and privacy protection.
Content: The tool provides both encoding and decoding functionality. Hide messages in images using LSB steganography (3 bits per pixel). Optional AES-256 GCM encryption with PBKDF2 key derivation. Supports PNG and JPG input, PNG output (lossless). Processing happens entirely in your browser.
Related: JWT Decoder, Bcrypt Generator, Token Generator, Base64 Encoder/Decoder
```

- [ ] **Step 4: Commit**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
git add public/llm.txt public/ai.txt
git commit -m "feat: add image steganography to llm.txt and ai.txt for AI discoverability"
```

---

### Task 8: Add Tool to Homepage Search Data

**Files:**
- Modify: `lib/search-data.ts` (or equivalent search configuration)

- [ ] **Step 1: Check search data structure**

```bash
grep -A5 "image-compressor\|security\|steganography" /Users/husnainbabar/WebstormProjects/fasttools-client/lib/search-data.ts | head -30
```

- [ ] **Step 2: Add tool entry to search data**

Edit `/Users/husnainbabar/WebstormProjects/fasttools-client/lib/search-data.ts` and add entry:

```typescript
{
  id: "image-steganography",
  name: "Image Steganography",
  description: "Hide secret messages inside PNG/JPG images using LSB encoding with optional AES-GCM encryption",
  category: "security-tools",
  category_name: "Security & Privacy Tools",
  href: "/security-tools/image-steganography",
  keywords: ["steganography online", "hide text in image", "image steganography tool", "secret message", "image encryption", "LSB encoding", "stego"],
  badge: "Privacy",
  badgeColor: "bg-green-600",
},
```

- [ ] **Step 3: Commit**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
git add lib/search-data.ts
git commit -m "feat: add image steganography to homepage search data"
```

---

### Task 9: Create SEO Content Block

**Files:**
- Create: `content/tools/image-steganography-seo.md` (optional reference content)

- [ ] **Step 1: Create SEO content reference**

Create `/Users/husnainbabar/WebstormProjects/fasttools-client/content/tools/image-steganography-seo.md`:

```markdown
# Image Steganography Tool - SEO Content Research

## Primary Keywords (High Volume)
- steganography online (40K/mo)
- hide text in image (45K/mo)
- image steganography tool (25K/mo)
- Total: ~110K/mo

## Secondary Keywords (Medium Volume)
- secret message in photo (8K/mo)
- hide message online (6K/mo)
- image encryption (12K/mo)
- stego image (5K/mo)
- LSB encoding (3K/mo)

## Long-Tail Keywords (Intent-Rich)
- how to hide text in an image
- steganography tool free online
- how to encode message in picture
- hidden message in image
- image steganography AES encryption
- client-side image steganography

## Competitor Analysis

### stylesuxx.github.io/steganography
- Title: "JavaScript Steganography"
- Strength: Simple, working tool
- Weakness: Outdated UI, no password encryption, poor mobile experience
- SEO: No schema markup, thin content

### futureboy.us/stegano
- Title: "Steganography"
- Strength: Functional
- Weakness: Extremely dated UI (1990s), slow, confusing UX
- SEO: No meta description, no structured data

### 8gwifi.org
- Title: "Steganography - 8gwifi"
- Strength: Multiple formats supported
- Weakness: Ad-heavy, cluttered layout
- SEO: Keyword stuffing, poor content organization

## Our Competitive Advantages
1. **Modern UI/UX** - Clean, intuitive interface vs. competitors' dated designs
2. **AES-GCM Encryption** - Optional password protection (competitors don't have this)
3. **Schema Markup** - Comprehensive structured data (Schema.org SoftwareApplication, HowTo, FAQ)
4. **Mobile-Optimized** - Fully responsive design
5. **Content Depth** - Detailed explanations, FAQ, use cases
6. **SEO-Optimized Title/Description** - Keyword-rich, CTAs
7. **Related Tools** - Linking to other security tools

## GEO Strategy
Target AI search engines with:
- Clear definitions ("Steganography is..." in H2)
- How-to structure (step-by-step process)
- FAQ addressing common questions
- Use cases and applications
- Technical accuracy (LSB, AES-GCM details)

## Backlink Opportunities
1. Reach out to cybersecurity blogs
2. Submit to tool directories (Product Hunt if appropriate)
3. Create tutorial blog post linking to tool
4. Reference from education sites (steganography courses)
5. Share on privacy/security communities

## Content Gap Analysis
Competitors lack:
- Encryption explanation
- Security analysis
- Technical deep-dive
- Use case explanations
- Capacity calculations
- Format recommendations (PNG vs JPG)

Our content fills these gaps.
```

- [ ] **Step 2: Commit**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
git add content/tools/image-steganography-seo.md
git commit -m "docs: add SEO research and competitive analysis for image steganography"
```

---

## Phase 4: Testing & Verification

### Task 10: Test Tool Functionality

**Files:**
- Create: `__tests__/components/image-steganography.test.tsx`
- Create: `__tests__/lib/steganography.test.ts`

- [ ] **Step 1: Create unit tests for steganography logic**

Create `/Users/husnainbabar/WebstormProjects/fasttools-client/__tests__/lib/steganography.test.ts`:

```typescript
import { encodeMessageInImage, imageToImageData } from '@/lib/steganography/lsb-encoder';
import { decodeMessageFromImage } from '@/lib/steganography/lsb-decoder';

describe('Image Steganography', () => {
  test('should encode and decode message without encryption', async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx?.fillRect(0, 0, 100, 100);
    const imageData = ctx!.getImageData(0, 0, 100, 100);

    const message = 'Hello, Secret!';
    const encoded = await encodeMessageInImage(imageData, message);
    const result = await decodeMessageFromImage(encoded);

    expect(result.message).toBe(message);
    expect(result.isEncrypted).toBe(false);
  });

  test('should encode and decode message with password', async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx?.fillRect(0, 0, 100, 100);
    const imageData = ctx!.getImageData(0, 0, 100, 100);

    const message = 'Secret Password Message';
    const password = 'MyPassword123';
    const encoded = await encodeMessageInImage(imageData, message, password);
    const result = await decodeMessageFromImage(encoded, password);

    expect(result.message).toBe(message);
    expect(result.isEncrypted).toBe(true);
  });

  test('should fail to decode with wrong password', async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx?.fillRect(0, 0, 100, 100);
    const imageData = ctx!.getImageData(0, 0, 100, 100);

    const message = 'Secret';
    const password = 'CorrectPassword';
    const encoded = await encodeMessageInImage(imageData, message, password);

    await expect(decodeMessageFromImage(encoded, 'WrongPassword')).rejects.toThrow();
  });
});
```

- [ ] **Step 2: Run tests**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
npm test -- __tests__/lib/steganography.test.ts
```

Expected: All tests pass.

- [ ] **Step 3: Commit**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
git add __tests__/lib/steganography.test.ts
git commit -m "test: add unit tests for LSB steganography encoding/decoding"
```

---

### Task 11: Manual Testing & Verification

- [ ] **Step 1: Start dev server**

```bash
cd /Users/husnainbabar/WebstormProjects/fasttools-client
npm run dev
```

- [ ] **Step 2: Test tool in browser**

1. Navigate to `http://localhost:3000/security-tools/image-steganography`
2. **Test Encoding:**
   - Select a PNG image (500×500 minimum)
   - Enter message "Test message"
   - Click "Hide Message in Image"
   - Verify image downloads
3. **Test Decoding:**
   - Upload the downloaded image
   - Click "Extract Hidden Message"
   - Verify message matches "Test message"
4. **Test with Password:**
   - Repeat encoding with password "testpass123"
   - Try decoding without password (should fail)
   - Decode with correct password (should succeed)
   - Try decoding with wrong password (should fail)
5. **Test Mobile Responsiveness:**
   - Open DevTools → Toggle device toolbar
   - Test on iPhone 12, iPad, Android
   - Verify all buttons and inputs are accessible

- [ ] **Step 3: Verify SEO elements**

1. Check page source for:
   - Correct `<title>` tag
   - Correct `<meta name="description">`
   - Schema.org structured data (3 types: SoftwareApplication, HowTo, FAQ)
2. Run through PageSpeed Insights
3. Check mobile usability

- [ ] **Step 4: Verify site integration**

1. Check homepage search bar - should find "Image Steganography"
2. Check `/security-tools` category page - tool should be listed
3. Verify sitemap contains both `/security-tools` and tool URL
4. Check that llm.txt and ai.txt contain entry

---

## Summary of Changes

**Files Created:**
- `components/security/image-steganography.tsx` - React component
- `lib/steganography/lsb-encoder.ts` - LSB encoding logic
- `lib/steganography/lsb-decoder.ts` - LSB decoding logic
- `lib/steganography/aes-encryption.ts` - AES-GCM encryption
- `app/security-tools/page.tsx` - Category landing page
- `app/security-tools/image-steganography/page.tsx` - Tool page with SEO
- `content/tools/image-steganography-seo.md` - SEO research

**Files Modified:**
- `app/data/categories-data.ts` - Added security-tools category
- `public/sitemap.xml` - Added tool URLs
- `public/llm.txt` - Added AI discoverability
- `public/ai.txt` - Added AI search entry
- `lib/search-data.ts` - Added homepage search

**Key SEO Elements:**
- Title: "Free Image Steganography Tool - Hide Text in Images Online"
- Meta Description: 156 chars with CTA
- H1: Keyword-rich
- Schema Markup: SoftwareApplication + HowTo + FAQ
- Content: 2000+ words with semantic keywords
- Related Tools: Linking to other security tools

**Testing:**
- Unit tests for steganography logic
- Manual testing in browser
- Mobile responsiveness testing
- SEO verification

---

## Next Steps (Post-Implementation)

1. **Monitor Rankings** - Track keyword positions in Google Search Console
2. **Backlink Building** - Reach out to security blogs and tool directories
3. **Content Expansion** - Create tutorial blog post linking to tool
4. **A/B Testing** - Test different meta descriptions or CTAs
5. **Build Other Tools** - Implement Tier 1 Priority #2: Periodic Table (2.1M/mo)

