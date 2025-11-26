import type { Metadata } from "next"
import { AiPetNameGenerator } from "@/components/ai-pet-name-generator"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"

// Auto-update year
const currentYear = new Date().getFullYear()

const baseMetadata = createMetadata({
  title: `AI Pet Name Generator ${currentYear} | Free 100 Names for Dogs, Cats & All Pets`,
  description:
    `Generate 100 unique pet names instantly with AI in ${currentYear}! Free pet name generator for dogs, cats, puppies, kittens & all animals. Get names by personality, breed, color & meaning.`,
  path: "/ai-tools/pet-names",
})

export const metadata: Metadata = {
  ...baseMetadata,
  category: "Pets & Animals",
  applicationName: "FastTools - AI Pet Name Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Pet Names - 100 Free",
    "application-name": "AI Pet Name Generator - 100 Free Names",
    "msapplication-TileColor": "#ff6b35",
    "theme-color": "#ff6b35",
    "msapplication-navbutton-color": "#ff6b35",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "Pet Owners, Dog Owners, Cat Owners, Animal Lovers, New Pet Parents",
    "subject": "AI Pet Name Generator for Dogs, Cats & All Pets",
    "abstract": `Generate 100 unique pet names instantly with AI in ${currentYear}! Free pet name generator for dogs, cats, puppies, kittens, and all animals. Get popular, unique, cute, and cool names based on personality, breed, color, and characteristics.`,
  },
}

export default function PetNamesPage() {
  const toolContent = {
    toolName: "AI Pet Name Generator",
    overview: `Generate 100 unique pet names instantly with AI in ${currentYear}! Perfect for dogs, cats, puppies, kittens & all animals. Get popular, unique, cute & cool names based on personality, breed, color & characteristics. Free with meanings & origins. No sign up required!`,
    howToSteps: [
      "Select your pet type (dog, cat, bird, rabbit, etc.) from the dropdown menu.",
      "Choose the gender (male, female, or unisex) to get appropriate suggestions.",
      "Enter personality traits, breed, or physical characteristics for personalized names.",
      "Click 'Generate Names' to instantly get 10+ AI-generated names with meanings.",
      "Review the list, read the meanings, and pick your favorite name for your new companion."
    ],
    features: [
      "AI-Powered Generation: Advanced AI analyzes pet characteristics to suggest perfect names with meanings.",
      "All Pet Types: Support for dogs, cats, birds, rabbits, fish, reptiles, and all animals.",
      "Personality Matching: Names tailored to your pet's unique personality, breed, and characteristics.",
      "Instant Results: Get 10+ unique name suggestions instantly with no waiting time.",
      "Name Meanings: Includes name origins, meanings, and cultural significance for informed choices.",
      "Free Forever: Completely free with no registration, usage limits, or hidden costs."
    ],
    aboutTool: `
      ### How to Choose the Perfect Pet Name
      Choosing the perfect name for your new puppy or kitten is an exciting but important decision that will last your pet's lifetime. Start by observing your pet's personality, physical characteristics, and behavior patterns during the first few days. Consider names that are easy to pronounce and have one or two syllables, as these work best for training and quick recognition.

      ### Popular vs. Unique Names
      In ${currentYear}, popular names like Max, Bella, and Luna remain favorites for their ease of use and pleasant sound. However, unique names are gaining traction for pet owners who want their companion to stand out. Our generator provides both trending popular names and creative, unique options to suit every preference.

      ### Breed-Specific Naming
      Choosing a name based on your pet's breed can honor their heritage. German Shepherds might suit strong German names, while French Bulldogs could carry elegant French names. Our AI considers breed characteristics to suggest names that fit your pet's specific background and look.

      ### Color & Appearance
      Names based on color or physical appearance are timeless. "Shadow" for black pets, "Snow" for white ones, or "Ginger" for orange cats are classic choices. Our generator can suggest creative variations like "Onyx," "Pearl," or "Apricot" to give a fresh twist to appearance-based naming.
    `,
    faqs: [
      {
        question: "Is the AI pet name generator free to use?",
        answer: "Yes, our AI pet name generator is completely free to use with no registration required. You can generate unlimited name suggestions for your pets across all animal types."
      },
      {
        question: "What types of pets does the AI name generator support?",
        answer: "Our AI supports all types of pets including dogs, cats, birds, rabbits, fish, reptiles, hamsters, guinea pigs, and more. The AI adapts suggestions based on the pet type you select."
      },
      {
        question: "How does the AI choose pet names?",
        answer: "Our AI analyzes your pet's characteristics, personality traits, breed, gender, and your preferences to suggest names that are meaningful and fitting. It considers factors like name length, pronunciation, and cultural significance."
      },
      {
        question: "Can I generate names for multiple pets?",
        answer: "Yes! You can use the generator multiple times to find matching or themed names for pairs or groups of pets. Try generating names with similar themes or origins for a cohesive set."
      },
      {
        question: "Do the names come with meanings?",
        answer: "Yes, our generator provides meanings and origins for the suggested names, helping you choose a name that has personal significance or fits your pet's story."
      },
      {
        question: "Can I use this for fictional pets or characters?",
        answer: "Absolutely! Writers and creators often use our tool to name animals in their stories, games, or creative projects. The personality-based generation is particularly useful for character development."
      }
    ],
    relatedTools: [
      { name: "Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "QR Code Generator", href: "/ai-tools/qr-generator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Love Calculator", href: "/calculator/love-calculator" }
    ],
    useCases: [
      "New pet parents finding the perfect name",
      "Breeders naming litters of puppies or kittens",
      "Rescue organizations naming animals for adoption",
      "Writers naming animal characters in stories",
      "Kids looking for names for virtual pets or toys",
      "Pet owners looking for nicknames or middle names"
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free AI Pet Name Generator - Get 100 Free Names Instantly",
        description: "Generate 100 unique pet names with AI in 2025! Perfect for dogs, cats, puppies, kittens & all animals. Get popular, unique, cute & cool names based on personality, breed, color & characteristics. Free with meanings & origins. No sign up required!",
        titleSize: "medium",
        descriptionSize: "small",
        centered: true,
        color: "blue"
      }}
      breadcrumbs={[
        { label: "AI Tools", href: "/ai-tools" },
        { label: "Pet Name Generator", href: "/ai-tools/pet-names" },
      ]}
      toolComponent={
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiPetNameGenerator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: `AI Pet Name Generator ${currentYear} | Free 100 Names for Dogs, Cats & All Pets`,
        description: `Generate 100 unique pet names instantly with AI in ${currentYear}! Free pet name generator for dogs, cats, puppies, kittens & all animals. Get names by personality, breed, color & meaning.`,
        path: "/ai-tools/pet-names"
      }}
    />
  )
}
