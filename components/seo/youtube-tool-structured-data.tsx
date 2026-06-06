'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface YouTubeToolStructuredDataProps {
  toolType: 'video' | 'playlist';
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  price?: string;
  ratingValue?: number;
  ratingCount?: number;
  features?: string[];
  softwareVersion?: string;
  datePublished?: string;
  dateModified?: string;
}

export const YouTubeToolStructuredData = ({
  toolType,
  name,
  description,
  url,
  applicationCategory = "MultimediaApplication",
  operatingSystem = "Web Browser",
  price = "0",
  ratingValue = 4.8,
  ratingCount = 10000,
  features = [],
  softwareVersion = "2026.0",
  datePublished = "2024-01-01",
  dateModified = new Date().toISOString().split('T')[0],
}: YouTubeToolStructuredDataProps) => {
  const pathname = usePathname();
  
  // Determine if we're on a YouTube tool page
  const isYouTubeToolPage = pathname.includes('/social-media-tools/youtube');
  
  if (!isYouTubeToolPage) return null;

  // Prepare the structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": ratingCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "featureList": features,
    "softwareVersion": softwareVersion,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "softwareRequirements": "Modern Web Browser (Chrome, Safari, Firefox, Edge)",
    "browserRequirements": "Chrome 90+, Safari 14+, Firefox 88+, Edge 90+",
    ...(toolType === 'playlist' && {
      "additionalType": ["VideoGallery", "ItemList"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Video Content Consumers, Content Creators, Students, Educators"
      }
    }),
    "creator": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://fasttools.store"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://fasttools.store"
    },
    "potentialAction": [
      {
        "@type": "ConsumeAction",
        "actionStatus": "CompletedActionStatus",
        "instrument": {
          "@type": "MediaSubscription",
          "name": "Free Service"
        },
        "object": {
          "@type": "VideoObject",
          "contentUrl": "https://fasttools.store" + pathname
        }
      }
    ]
  };

  useEffect(() => {
    // Add structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything visible
};