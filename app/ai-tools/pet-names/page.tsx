import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiPetNameGenerator } from "@/components/ai-pet-name-generator"

export const metadata: Metadata = {
  title: "AI Pet Name Generator - Find Perfect Pet Names | FastTools",
  description:
    "Generate creative and unique pet names with AI. Find the perfect name for your dog, cat, or any pet based on personality.",
  keywords: "pet names, dog names, cat names, pet name generator, AI pet names, unique pet names",
}

export default function PetNamesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Tools", href: "/ai-tools" },
          { label: "Pet Name Generator", href: "/ai-tools/pet-names" },
        ]}
      />

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">AI Pet Name Generator</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Find the perfect name for your new pet with AI-powered suggestions. Get creative names with meanings.
          </p>
        </div>

        <AiPetNameGenerator />
      </div>
    </div>
  )
}
