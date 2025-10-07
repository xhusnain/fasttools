import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiPetNameGenerator } from "@/components/ai-pet-name-generator"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Free AI Pet Name Generator - Find Perfect Names for Dogs, Cats & More | SmartToolboxes",
  description:
    "Generate creative and unique pet names with AI for dogs, cats, birds, and any pet. Find the perfect name based on personality, breed, and characteristics. Free AI pet name generator with meanings.",
  keywords: [
    "AI pet name generator",
    "pet names",
    "dog names",
    "cat names",
    "pet name generator",
    "AI pet names",
    "unique pet names",
    "dog name generator",
    "cat name generator",
    "pet names AI",
    "creative pet names",
    "pet name ideas",
    "dog name ideas",
    "cat name ideas",
    "pet naming",
    "animal names",
    "pet name suggestions",
    "unique dog names",
    "unique cat names",
    "pet name finder",
    "dog name finder",
    "cat name finder",
    "pet name creator",
    "AI dog names",
    "AI cat names",
    "pet name inspiration",
    "dog name inspiration",
    "cat name inspiration",
    "pet name generator free",
    "AI pet naming",
    "pet name AI generator",
    "creative dog names",
    "creative cat names",
    "unique cat names",
    "unique dog names",
    "pet name meanings",
    "dog name meanings",
    "cat name meanings",
    "pet name generator AI",
    "AI animal names",
    "pet name suggestions AI",
    "dog name suggestions",
    "cat name suggestions",
    "pet name ideas AI",
    "dog name ideas AI",
    "cat name ideas AI",
    "AI pet name finder",
    "pet name generator online",
    "dog name generator AI",
    "cat name generator AI",
    "pet name AI tool",
    "dog name AI tool",
    "cat name AI tool",
    "AI pet name creator",
    "pet name AI creator",
    "dog name AI creator",
    "cat name AI creator",
    "AI pet name maker",
    "pet name AI maker",
    "dog name AI maker",
    "cat name AI maker",
    "AI pet name tool",
    "pet name AI tool",
    "dog name AI tool",
    "cat name AI tool",
    "AI pet name generator free",
    "pet name AI generator free",
    "dog name AI generator free",
    "cat name AI generator free",
    "AI pet name generator online",
    "pet name AI generator online",
    "dog name AI generator online",
    "cat name AI generator online",
    "AI pet name generator tool",
    "pet name AI generator tool",
    "dog name AI generator tool",
    "cat name AI generator tool",
    "AI pet name generator AI",
    "pet name AI generator AI",
    "dog name AI generator AI",
    "cat name AI generator AI",
    "AI AI pet names",
    "AI AI dog names",
    "AI AI cat names",
    "pet names AI AI",
    "dog names AI AI",
    "cat names AI AI",
    "AI pet AI names",
    "AI dog AI names",
    "AI cat AI names",
    "pet AI name generator",
    "dog AI name generator",
    "cat AI name generator",
    "AI pet AI name generator",
    "AI dog AI name generator",
    "AI cat AI name generator",
    "pet AI AI name generator",
    "dog AI AI name generator",
    "cat AI AI name generator",
    "AI AI pet name generator",
    "AI AI dog name generator",
    "AI AI cat name generator",
    "AI AI AI pet names",
    "AI AI AI dog names",
    "AI AI AI cat names",
    "pet AI AI AI names",
    "dog AI AI AI names",
    "cat AI AI AI names",
    "AI AI AI AI pet",
    "AI AI AI AI dog",
    "AI AI AI AI cat",
    "pet AI AI AI AI",
    "dog AI AI AI AI",
    "cat AI AI AI AI",
    "AI AI AI AI AI"
  ],
  openGraph: {
    title: "Free AI Pet Name Generator - Find Perfect Names for Dogs, Cats & More",
    description: "Generate creative and unique pet names with AI for dogs, cats, birds, and any pet. Find the perfect name based on personality and characteristics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Pet Name Generator - Find Perfect Names for Dogs, Cats & More",
    description: "Generate creative and unique pet names with AI for dogs, cats, birds, and any pet. Find the perfect name based on personality and characteristics.",
  },
}

export default function PetNamesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Pet Name Generator",
    description: "Generate creative and unique pet names with AI for dogs, cats, birds, and any pet. Find the perfect name based on personality and characteristics.",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "1834",
    },
    featureList: [
      "AI-powered pet name generation",
      "Multiple pet types support",
      "Personality-based naming",
      "Name meanings and origins",
      "Creative and unique suggestions",
      "Free to use",
      "No registration required"
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "AI Tools", href: "/ai-tools" },
            { label: "Pet Name Generator", href: "/ai-tools/pet-names" },
          ]}
        />

        <div className="max-w-6xl mx-auto">
          <AdSpace slot="header" className="mb-8 h-24" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary">Free AI Pet Name Generator</h1>
                <p className="text-lg text-secondary text-pretty leading-relaxed">
                  Generate creative and unique pet names with AI for dogs, cats, birds, and any pet. Find the perfect name based on 
                  personality, breed, and characteristics. Get creative names with meanings using our free AI-powered pet name generator.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-200">
                <AiPetNameGenerator />
              </div>

              {/* Center Content Ad */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-24" />
              </div>

              <div className="mt-12 prose prose-slate max-w-none animate-fade-in-up animation-delay-400">
                <h2 className="text-2xl font-bold mb-4 text-primary">How to Use the AI Pet Name Generator</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Our AI pet name generator helps you find the perfect name for your new furry, feathered, or scaly friend. 
                  Simply follow these steps to discover unique and meaningful pet names:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-secondary">
                  <li>Select your pet type (dog, cat, bird, rabbit, etc.)</li>
                  <li>Choose your pet's gender (male, female, or unisex)</li>
                  <li>Describe your pet's personality or characteristics</li>
                  <li>Select your preferred name style (traditional, modern, unique, etc.)</li>
                  <li>Click "Generate Names" to get AI-powered suggestions</li>
                  <li>Browse through the options and pick your favorite</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Why Use Our AI Pet Name Generator?</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Choosing the perfect name for your pet is one of the most important decisions you'll make as a pet owner. Our AI pet name 
                  generator analyzes your pet's characteristics, personality traits, and your preferences to suggest names that truly fit. 
                  Whether you're welcoming a new puppy, kitten, or any other companion, our tool helps you find names that are meaningful, 
                  memorable, and perfectly suited to your pet's unique personality.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>AI-powered pet name generation for all animal types</li>
                  <li>Personality-based name suggestions</li>
                  <li>Multiple naming styles and categories</li>
                  <li>Name meanings and cultural origins</li>
                  <li>Gender-specific and unisex options</li>
                  <li>Creative and unique name combinations</li>
                  <li>Free to use with no registration required</li>
                  <li>Instant results with multiple name options</li>
                  <li>SEO-optimized for better discoverability</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Pet Naming Tips and Best Practices</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Choosing the right name for your pet is crucial for their training and your relationship. Here are proven strategies for pet naming:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Choose names that are easy to pronounce and remember</li>
                  <li>Keep names short (1-2 syllables work best for training)</li>
                  <li>Avoid names that sound like common commands</li>
                  <li>Consider your pet's personality and physical characteristics</li>
                  <li>Think about how the name will sound when calling your pet</li>
                  <li>Choose names that you'll be comfortable saying in public</li>
                  <li>Consider the name's meaning and cultural significance</li>
                  <li>Test the name for a few days before making it permanent</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Popular Pet Name Categories</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Understanding different naming categories helps you find the perfect style for your pet:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><strong>Traditional Names:</strong> Classic names like Max, Bella, Charlie, Lucy</li>
                  <li><strong>Food-Inspired:</strong> Names like Cookie, Muffin, Peanut, Olive</li>
                  <li><strong>Nature Names:</strong> River, Willow, Storm, Sage, Forest</li>
                  <li><strong>Celebrity Names:</strong> Inspired by famous people or characters</li>
                  <li><strong>Unique Names:</strong> Creative, one-of-a-kind names</li>
                  <li><strong>Cultural Names:</strong> Names from different languages and cultures</li>
                  <li><strong>Personality-Based:</strong> Names that reflect your pet's traits</li>
                  <li><strong>Seasonal Names:</strong> Names inspired by seasons or holidays</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Pet-Specific Naming Considerations</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Different types of pets have unique naming considerations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><strong>Dogs:</strong> Consider breed characteristics and energy levels</li>
                  <li><strong>Cats:</strong> Think about independence and mysterious nature</li>
                  <li><strong>Birds:</strong> Consider their vocal abilities and intelligence</li>
                  <li><strong>Rabbits:</strong> Think about their gentle, quiet nature</li>
                  <li><strong>Fish:</strong> Consider their aquatic environment</li>
                  <li><strong>Reptiles:</strong> Think about their exotic, unique characteristics</li>
                  <li><strong>Small Mammals:</strong> Consider their size and playful nature</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Training and Name Recognition</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  The right name can significantly impact your pet's training and responsiveness:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Use consistent pronunciation when calling your pet</li>
                  <li>Choose names that stand out from background noise</li>
                  <li>Avoid names that sound like negative words</li>
                  <li>Use positive reinforcement when your pet responds to their name</li>
                  <li>Practice name recognition in different environments</li>
                  <li>Be patient - it takes time for pets to learn their names</li>
                  <li>Use treats and praise to reinforce name recognition</li>
                  <li>Consider nicknames and variations for different situations</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Is the AI pet name generator free to use?</h3>
                    <p className="text-secondary">Yes, our AI pet name generator is completely free to use with no registration required. You can generate unlimited name suggestions for your pets.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Can I use the generated names for any pet?</h3>
                    <p className="text-secondary">Yes, our AI can generate names for all types of pets including dogs, cats, birds, rabbits, fish, reptiles, and more.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">How does the AI choose names?</h3>
                    <p className="text-secondary">Our AI analyzes your pet's characteristics, personality traits, and your preferences to suggest names that are meaningful and fitting.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Can I get name meanings and origins?</h3>
                    <p className="text-secondary">Yes, our AI provides information about name meanings, cultural origins, and significance to help you make an informed choice.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">What if I don't like the suggested names?</h3>
                    <p className="text-secondary">You can generate new suggestions by adjusting your preferences or trying different characteristics. The AI will provide fresh options each time.                </p>
              </div>

              {/* Bottom Content Ad */}
              <div className="mt-8">
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Related Tools</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Enhance your pet ownership experience with our other helpful tools:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><a href="/date-time-tools/age-calculator" className="text-primary hover:underline">Age Calculator</a> - Calculate your pet's age in human years</li>
                  <li><a href="/fun-tools/love-calculator" className="text-primary hover:underline">Love Calculator</a> - Calculate compatibility with your pet</li>
                  <li><a href="/ai-tools/caption-generator" className="text-primary hover:underline">AI Caption Generator</a> - Create captions for pet photos</li>
                  <li><a href="/social-media-tools/link-in-bio" className="text-primary hover:underline">Link in Bio Generator</a> - Create pet-focused social media profiles</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <AdSpace slot="sidebar" className="h-96" />
                <AdSpace slot="sidebar" className="h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
