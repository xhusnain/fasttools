import { Metadata } from 'next';

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
