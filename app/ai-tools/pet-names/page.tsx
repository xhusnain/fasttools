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
  metaTitle: "AI Pet Name Generator — Dog, Cat, Bird & Exotic Pet Names",
  metaDescription:
    "Free AI pet name generator for dogs, cats, birds, fish & reptiles. Filter by breed, personality, gender & style. Names with meanings.",
  path: "/ai-tools/pet-names",

  header: {
    title: "AI Pet Name Generator",
    description:
      "Find the perfect name for your dog, cat, bird, fish, reptile, or small pet with AI-powered name suggestions. Filter by breed, personality traits, size, color, gender, and naming style — classic, cute, funny, unique, human, or pop culture themed — and get categorized name lists with meanings instantly.",
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
    alternateName: [
      "Pet Naming Tool",
      "Dog Name Generator",
      "Cat Name Generator",
      "Puppy Name Generator",
      "Kitten Name Finder",
    ],
    featureList: [
      "Multi-species support: dogs, cats, birds, fish, reptiles, hamsters, rabbits, guinea pigs, ferrets",
      "Breed-aware naming: Golden Retriever vs Persian cat gets different style recommendations",
      "Personality input: playful, calm, mischievous, regal, energetic, shy",
      "Gender filter: male, female, gender-neutral",
      "Size / age awareness for puppy / kitten / senior pet appropriate names",
      "Naming styles: classic, cute, funny, unique, human-style, food-themed, nature-inspired, pop-culture",
      "Each name shown with origin / meaning context",
      "Multilingual: pull names from English, Spanish, Italian, Japanese, French traditions",
      "Save favorites / shortlist mode for comparing top picks",
      "Bulk-generate 20+ names per click",
      "Free, unlimited regeneration, no signup",
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
      "Popular trends: food names, nature names, and pop culture references",
    ],
    overview:
      "This AI pet name generator creates personalized name suggestions based on your pet's species, breed, personality, appearance, and your preferred naming style. Unlike generic pet name lists, it uses AI to match names to your specific animal — a playful Golden Retriever gets different suggestions than a dignified Persian cat or a colorful Betta fish. Choose from classic names (Max, Bella, Charlie), cute names (Mochi, Biscuit, Pudding), funny names (Sir Barks-a-Lot, Chonk, Taco), unique names (Zephyr, Solstice, Nebula), human names (Oliver, Sophie, Henry), or pop culture themed names. Each suggestion comes with meaning and context, making it easy to shortlist the perfect name for your new companion. Works for dogs, cats, birds, fish, reptiles, hamsters, rabbits, and guinea pigs.",

    howToSteps: [
      "Select your pet type (dog, cat, bird, fish, reptile, hamster, rabbit) and optional gender preference (male, female, unisex).",
      "Enter characteristics like breed (Labrador, Siamese, Cockatiel), color (golden, black, calico), size (small, medium, large), and personality traits (playful, calm, sassy, adventurous).",
      "Choose a naming style — classic, cute, funny, unique, human, nature-inspired, or pop culture themed — and generate AI-powered name suggestions.",
      "Review categorized name results with meanings, copy your favorites to clipboard, and test top picks out loud for call clarity and nickname potential.",
    ],

    features: [
      "AI-generated pet name suggestions for dogs, cats, birds, fish, reptiles, hamsters, rabbits, and guinea pigs",
      "Breed-aware naming — suggestions tailored to Golden Retrievers, German Shepherds, Maine Coons, Persians, and 100+ breeds",
      "Multiple naming styles: classic, cute, funny, unique, human names, nature-inspired, food-themed, and pop culture references",
      "Gender filtering for male, female, and unisex name suggestions",
      "Personality-matched names based on traits like playful, calm, energetic, sassy, loyal, and independent",
      "Categorized results with name meanings for easy comparison and shortlisting",
      "One-click copy for individual names or bulk export of full generated lists",
      "Unlimited regeneration for fresh batches until you find the perfect name",
    ],

    useCases: [
      "New puppy and kitten owners building a shortlist of name candidates before adoption day",
      "Animal shelters and rescue organizations naming multiple incoming animals efficiently with themed batches",
      "Dog and cat breeders generating coordinated litter names with consistent style (alphabetical, themed, or matching)",
      "Fiction writers and game developers naming animal characters with personality-appropriate names",
      "Pet Instagram and TikTok accounts finding catchy, memorable names that work as social media handles",
      "Families deciding on a pet name together by comparing AI-generated options with different styles",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Naming a pet is one of the first and most important decisions new pet
          owners make. Research shows that pets respond best to names with 1-2
          syllables that end in a vowel sound — names like &quot;Bella,&quot; &quot;Milo,&quot;
          and &quot;Luna&quot; are consistently among the most popular because they are
          easy for animals to distinguish from background noise. This tool
          factors in these phonetic principles along with your
          pet&apos;s specific characteristics to suggest names that are both
          meaningful and practical for daily use and training.
        </p>
        <p>
          Pet naming trends show a strong shift toward food-inspired
          names (Mochi, Biscuit, Waffles), nature names (Willow, River, Storm),
          human names (Oliver, Sophie, Henry), and pop culture references from
          trending shows and movies. This generator stays current with these
          trends while also offering timeless classic options. For dog owners
          specifically, animal behaviorists recommend avoiding names that sound
          too similar to common commands — &quot;Kit&quot; sounds like &quot;sit,&quot; and
          &quot;Bo&quot; can be confused with &quot;no&quot; — so testing your finalists out
          loud is always recommended before committing.
        </p>
      </div>
    ),

    proTip:
      "Generate 3-5 batches with different naming styles, shortlist your top 10, then say each name out loud 20 times to test call clarity. The best pet names are 1-2 syllables, end in a vowel sound, and don't rhyme with common commands like sit, stay, down, or no.",

    faqs: [
      {
        question: "What animals does the generator support?",
        answer:
          "The generator creates names for dogs, cats, birds (parakeets, cockatiels, parrots), fish (Betta, goldfish, tropical), reptiles (geckos, bearded dragons, snakes), hamsters, rabbits, guinea pigs, and other small pets. Each species category produces contextually appropriate suggestions — a Betta fish gets different name styles than a German Shepherd.",
      },
      {
        question: "How does breed and personality affect the name suggestions?",
        answer:
          "The AI uses your breed, personality traits, color, and size inputs to generate contextually relevant names. A playful Golden Retriever might get names like Sunny, Scout, or Bounce, while a dignified Persian cat might receive suggestions like Duchess, Velvet, or Cashmere. The more details you provide, the more personalized and fitting the results.",
      },
      {
        question: "What are the most popular pet names?",
        answer:
          "Top dog names include Luna, Milo, Bella, Charlie, Daisy, Cooper, and Teddy. Top cat names include Nala, Oliver, Mochi, Willow, Loki, and Cleo. Trending categories include food names (Biscuit, Waffles, Mango), nature names (Storm, River, Sage), and pop culture references from current movies and shows.",
      },
      {
        question: "Can I generate gender-neutral and unisex pet names?",
        answer:
          "Yes. Select the unisex/neutral gender option to receive names that work for any gender. Popular unisex pet names include Bailey, Riley, Scout, Pepper, Sage, Phoenix, and River. This is especially useful when adopting a pet before knowing their sex or for non-binary naming preferences.",
      },
      {
        question: "How many names should I shortlist before deciding?",
        answer:
          "Animal behaviorists recommend shortlisting 5-10 names, then testing each one out loud for 2-3 days. Say the name at different volumes and in different contexts (calling from another room, using a happy tone, pairing with commands). The name that feels most natural and gets the best response from your pet is the winner.",
      },
      {
        question: "What makes a good dog name vs a good cat name?",
        answer:
          "Dogs respond best to short names (1-2 syllables) with hard consonants like K, T, or D — names like Duke, Max, or Tucker. Cats tend to respond to names ending in an 'ee' sound — like Smokey, Daisy, or Ziggy. For both species, avoid names that sound similar to training commands (Kit/sit, Ray/stay, Bo/no).",
      },
      {
        question: "Can animal shelters use this tool for naming rescue pets?",
        answer:
          "Yes. Shelters frequently use themed naming batches for incoming animals — alphabetical themes, seasonal names, or litter-matched names. Generate multiple batches with different styles, then assign names systematically. The bulk copy feature makes it easy to export full name lists for shelter management software.",
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
      { name: "AI QR Code Generator", href: "/ai-tools/qr-generator" },
      { name: "YouTube Channel Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Love Calculator", href: "/calculator/love-calculator" },
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
