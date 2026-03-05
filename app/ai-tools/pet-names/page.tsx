import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const AiPetNameGenerator = dynamic(
  () =>
    import("@/components/ai/ai-pet-name-generator").then(
      (mod) => mod.AiPetNameGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Pet Name Generator",
  description:
    "Generate personalized pet name ideas based on species, traits, personality, and naming style.",
  metaTitle: "AI Pet Name Generator for Dogs, Cats, and More",
  metaDescription:
    "Find pet names with AI for dogs, cats, birds, fish, and more. Filter by personality, traits, size, and style to generate curated name lists.",
  path: "/ai-tools/pet-names",
  keywords: [
    "pet name generator",
    "ai pet name generator",
    "dog name generator",
    "cat name generator",
    "unique pet names",
  ],

  header: {
    title: "AI Pet Name Generator",
    description:
      "Build pet name shortlists based on personality, appearance, and style preferences.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Pet Name Generator", href: "/ai-tools/pet-names" },
  ],

  schemaOptions: {
    applicationCategory: "LifestyleApplication",
    description:
      "Generate pet names for different species and personality profiles with categorized suggestions.",
    alternateName: ["Pet Naming Tool", "Dog Name Finder", "Cat Name Finder"],
    featureList: [
      "Species-aware naming",
      "Gender and age filters",
      "Trait and personality input",
      "Categorized name results",
      "Copy and export workflow",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Pet Name Generator is a free AI-powered tool that suggests creative, unique names for dogs, cats, and other pets based on breed, personality, and style preferences.",
    quickAnswer:
      "Select your pet type, enter optional details like breed or personality traits, choose a naming style (classic, funny, unique, etc.), and get instant name suggestions. Regenerate for more options until you find the perfect name.",
    keyTakeaways: [
      "AI-generated name suggestions based on pet type and personality",
      "Multiple naming styles: classic, funny, unique, human names, and themed",
      "Works for dogs, cats, birds, fish, reptiles, and other pets",
      "Regenerate unlimited times for fresh suggestions",
      "Popular 2026 trends: food names, nature names, and pop culture references",
    ],
    overview:
      "This generator helps you move from generic name lists to personalized suggestions. Enter species and traits, then generate grouped name ideas with meanings and styles so you can shortlist faster.",

    howToSteps: [
      "Choose your pet type and optional gender preference.",
      "Add characteristics such as color, breed, size, and personality.",
      "Generate names and review grouped suggestions.",
      "Copy or export your shortlist, then test your favorites out loud.",
    ],

    features: [
      "Supports dogs, cats, birds, fish, reptiles, and small pets",
      "Filter-friendly input fields for better suggestions",
      "Categorized result groups for easier comparison",
      "Copy individual names or download complete lists",
      "Useful for owners, shelters, and breeders",
    ],

    useCases: [
      "New pet owners creating a name shortlist",
      "Shelters naming multiple animals efficiently",
      "Breeders generating themed litter names",
      "Writers naming animal characters",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          The highest-performing pet naming pages usually combine instant
          generation with practical naming guidance. This page follows that
          pattern by keeping the tool first and supplementing with concise
          FAQs and decision guidance.
        </p>
        <p>
          Instead of generic keyword text, the content targets real naming
          behavior: compare styles, evaluate pronunciation, and choose options
          that remain a fit as your pet grows.
        </p>
      </div>
    ),

    proTip:
      "Generate several batches, then test your finalists for call clarity and nickname flexibility before deciding.",

    faqs: [
      {
        question: "Can I use this for both dogs and cats?",
        answer:
          "Yes. The generator supports multiple species and adapts suggestions based on your input.",
      },
      {
        question: "Do inputs like personality and breed matter?",
        answer:
          "Yes. More specific details generally produce better-tailored naming suggestions.",
      },
      {
        question: "Can I generate unisex name ideas?",
        answer:
          "Yes. You can choose neutral preferences and receive broader naming options.",
      },
      {
        question: "How many names should I shortlist?",
        answer:
          "A practical approach is to keep 5-10 finalists, then narrow by pronunciation and response fit.",
      },
      {
        question: "Can I export generated names?",
        answer:
          "Yes. You can copy names directly and download full generated sets for offline review.",
      },
    ],

    additionalContent: [
      {
        heading: "Choosing Names That Age Well",
        content:
          "A name that sounds right for a puppy or kitten may feel less suitable later. Favor names you can comfortably use for years.",
      },
      {
        heading: "Practical Naming Criteria",
        content:
          "Short, distinct phonetics are often easier for recall and training. Avoid names that sound too similar to core commands.",
      },
    ],

    relatedTools: [
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "AI Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "Token to Word Converter", href: "/ai-tools/token-to-word-converter" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PetNamesPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiPetNameGenerator />
        </div>
      )}
    />
  )
}
