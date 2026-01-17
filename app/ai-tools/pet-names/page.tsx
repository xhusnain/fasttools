import type { Metadata } from "next"
import { AiPetNameGenerator } from "@/components/ai/ai-pet-name-generator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Heart, Sparkles, Target, BookOpen, Users, Globe, Star, TrendingUp } from "lucide-react"

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
    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            AI-Powered Pet Name Generation: Finding the Perfect Name for Your Companion
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Choosing the perfect name for your new puppy, kitten, or any pet is one of the most exciting decisions you'll make as a pet parent. A name becomes part of your pet's identity, used thousands of times throughout their lifetime. Our <strong>AI pet name generator</strong> uses advanced artificial intelligence to analyze your pet's characteristics, personality traits, breed, gender, and your preferences to suggest names that are meaningful, memorable, and perfectly suited to your companion.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether you're welcoming a new puppy, adopting a rescue cat, or naming a bird, rabbit, or exotic pet, our <strong>free pet name generator</strong> provides instant access to hundreds of creative name suggestions with meanings and origins. Unlike basic name lists, our AI considers multiple factors simultaneously—from your pet's physical appearance and breed heritage to personality traits and cultural significance—to deliver personalized recommendations that go beyond generic suggestions.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Popular Pet Names in {currentYear}: Trends and Statistics
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Pet naming trends evolve each year, reflecting cultural influences, popular media, and generational preferences. Understanding current trends helps you choose a name that feels contemporary while remaining timeless:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Pet Type</th>
                  <th className="p-3 text-left">Top Male Names {currentYear}</th>
                  <th className="p-3 text-left">Top Female Names {currentYear}</th>
                  <th className="p-3 text-left">Trending Style</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">Dogs</td>
                  <td className="p-3">Max, Charlie, Cooper, Milo, Rocky</td>
                  <td className="p-3">Bella, Luna, Daisy, Lucy, Sadie</td>
                  <td className="p-3">Short, classic, easy to call</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Cats</td>
                  <td className="p-3">Oliver, Leo, Milo, Charlie, Max</td>
                  <td className="p-3">Luna, Bella, Chloe, Lily, Nala</td>
                  <td className="p-3">Elegant, soft-sounding names</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Birds</td>
                  <td className="p-3">Rio, Kiwi, Sunny, Blue, Echo</td>
                  <td className="p-3">Sunny, Kiwi, Sky, Pearl, Ruby</td>
                  <td className="p-3">Nature-inspired, vibrant</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Rabbits</td>
                  <td className="p-3">Bunny, Thumper, Oreo, Coco, Peanut</td>
                  <td className="p-3">Bella, Luna, Daisy, Coco, Willow</td>
                  <td className="p-3">Cute, playful, food-inspired</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Fish</td>
                  <td className="p-3">Bubbles, Nemo, Finley, Splash, Blue</td>
                  <td className="p-3">Coral, Pearl, Aqua, Marina, Splash</td>
                  <td className="p-3">Water/ocean-themed names</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            While popular names like Max, Bella, and Luna remain favorites for their ease of pronunciation and pleasant sound, unique names are gaining significant traction among pet owners who want their companion to stand out. Our generator provides both trending popular names and creative, unique options to suit every preference.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            How to Choose the Perfect Pet Name: A Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Selecting the right name requires careful consideration of multiple factors. Follow this comprehensive guide to find a name that perfectly matches your pet:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Observe Your Pet's Personality</h4>
                <p className="text-sm text-muted-foreground">Spend the first few days observing your pet's behavior, energy level, and unique quirks. Is your dog energetic and playful? Consider names like "Ziggy" or "Bolt." Is your cat calm and regal? Names like "Athena" or "Duke" might fit. Personality-based names create a deeper connection and often feel more meaningful over time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Consider Name Length and Pronunciation</h4>
                <p className="text-sm text-muted-foreground">Opt for names with one or two syllables for easier training and quick recognition. Names like "Max," "Luna," "Charlie," or "Bella" are easy to call out and respond to. Avoid names that sound too similar to common commands (e.g., "Kit" sounds like "sit"). Test the name by saying it aloud multiple times—if it feels natural, it's a good choice.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Match Physical Characteristics</h4>
                <p className="text-sm text-muted-foreground">Names based on color or appearance are timeless and descriptive. "Shadow" for black pets, "Snow" for white ones, "Ginger" for orange cats, or "Onyx" for dark-coated animals create immediate visual associations. Our generator suggests creative variations like "Pearl," "Apricot," "Midnight," or "Cocoa" to give a fresh twist to appearance-based naming.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Honor Breed Heritage</h4>
                <p className="text-sm text-muted-foreground">Choosing a name based on your pet's breed can honor their heritage and create cultural connections. German Shepherds might suit strong German names like "Kaiser" or "Greta," while French Bulldogs could carry elegant French names like "Pierre" or "Sophie." Our AI considers breed characteristics to suggest names that fit your pet's specific background and look.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
              <div>
                <h4 className="font-semibold text-foreground">Consider Name Meaning and Origin</h4>
                <p className="text-sm text-muted-foreground">Names with meaningful origins add depth and significance. "Luna" means moon in Latin, perfect for a pet with a calm, mysterious personality. "Kai" means sea in Hawaiian, ideal for water-loving pets. Our generator provides meanings and origins for all suggestions, helping you choose a name that has personal significance or fits your pet's story.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">6</div>
              <div>
                <h4 className="font-semibold text-foreground">Test the Name with Family</h4>
                <p className="text-sm text-muted-foreground">Involve family members in the naming process, especially if multiple people will interact with your pet. Ensure everyone can pronounce the name easily and feels comfortable using it. Names that work well for both children and adults create better consistency in training and daily interaction.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Pet Name Categories: Finding Your Style
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Pet names fall into various categories, each with its own appeal and characteristics. Understanding these categories helps you identify your naming style:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Star className="h-4 w-4 text-blue-500" />
                Classic & Traditional Names
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Timeless names that never go out of style:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Dogs: Max, Buddy, Charlie, Daisy, Lucy</li>
                <li>Cats: Oliver, Leo, Bella, Chloe, Lily</li>
                <li>Characteristics: Easy to pronounce, familiar, universally recognized</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                Unique & Creative Names
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Distinctive names that stand out:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Dogs: Zephyr, Koda, Nova, Sage, Phoenix</li>
                <li>Cats: Nala, Kiko, Zara, Indigo, Juno</li>
                <li>Characteristics: Modern, memorable, conversation-starters</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-green-500" />
                Nature-Inspired Names
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Names from the natural world:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Dogs: River, Willow, Aspen, Sage, Storm</li>
                <li>Cats: Luna, Sunny, Sky, Pearl, Coral</li>
                <li>Characteristics: Peaceful, organic, connected to environment</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-500" />
                Human Names for Pets
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Traditional human names adapted for pets:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Dogs: Jack, Emma, Henry, Olivia, James</li>
                <li>Cats: Sophie, Oliver, Charlotte, Benjamin, Amelia</li>
                <li>Characteristics: Sophisticated, personable, easy to remember</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            Breed-Specific Naming: Honoring Heritage
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Many pet owners choose names that reflect their pet's breed heritage, creating a connection to their origins and characteristics:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Breed</th>
                  <th className="p-3 text-left">Origin</th>
                  <th className="p-3 text-left">Suggested Name Style</th>
                  <th className="p-3 text-left">Example Names</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">German Shepherd</td>
                  <td className="p-3">Germany</td>
                  <td className="p-3">Strong, German names</td>
                  <td className="p-3">Kaiser, Greta, Hans, Heidi, Otto</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">French Bulldog</td>
                  <td className="p-3">France</td>
                  <td className="p-3">Elegant, French names</td>
                  <td className="p-3">Pierre, Sophie, Louis, Amélie, Marcel</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Siberian Husky</td>
                  <td className="p-3">Siberia/Russia</td>
                  <td className="p-3">Russian/Nordic names</td>
                  <td className="p-3">Nikita, Sasha, Koda, Anya, Yuri</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Japanese Akita</td>
                  <td className="p-3">Japan</td>
                  <td className="p-3">Japanese names</td>
                  <td className="p-3">Hiro, Yuki, Kiko, Akira, Sakura</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Scottish Terrier</td>
                  <td className="p-3">Scotland</td>
                  <td className="p-3">Scottish/Celtic names</td>
                  <td className="p-3">Angus, Fiona, Mac, Isla, Brodie</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Persian Cat</td>
                  <td className="p-3">Persia/Iran</td>
                  <td className="p-3">Persian/Middle Eastern names</td>
                  <td className="p-3">Cyrus, Layla, Darius, Zara, Amir</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Color and Appearance-Based Names: Visual Inspiration
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Names based on color or physical appearance create immediate visual associations and are timeless choices:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Black/Dark Coats</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Shadow, Midnight, Onyx, Coal, Ebony, Raven, Jet, Noir</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">White/Light Coats</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Snow, Pearl, Ivory, Cloud, Blizzard, Casper, Luna, Ghost</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Orange/Ginger</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Ginger, Rusty, Apricot, Copper, Phoenix, Ember, Cinnamon, Amber</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Brown/Tan</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Cocoa, Mocha, Brownie, Caramel, Hazel, Toffee, Chestnut, Bear</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Spotted/Multi-Color</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Patches, Spot, Freckles, Marble, Mosaic, Pixel, Dot, Checkers</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Gray/Silver</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Silver, Storm, Misty, Ash, Slate, Smokey, Sterling, Fog</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Naming Multiple Pets: Creating Cohesive Sets
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            If you have multiple pets or are planning to add more, consider names that work well together while maintaining individual identity:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Themed Pairs</h4>
              <p className="text-sm text-muted-foreground mb-2">Choose names from the same theme:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Food: Cookie & Cream, Peanut & Butter, Mocha & Latte</li>
                <li>Nature: River & Ocean, Sunny & Storm, Willow & Aspen</li>
                <li>Mythology: Zeus & Hera, Apollo & Artemis, Odin & Freya</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Rhyming or Similar Sounds</h4>
              <p className="text-sm text-muted-foreground mb-2">Names that sound harmonious together:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Max & Jack, Bella & Ella, Charlie & Harley</li>
                <li>Luna & Stella, Milo & Leo, Daisy & Maisy</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Same Origin/Culture</h4>
              <p className="text-sm text-muted-foreground mb-2">Names from the same cultural background:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Japanese: Hiro & Yuki, Kiko & Akira</li>
                <li>French: Pierre & Sophie, Louis & Amélie</li>
                <li>German: Hans & Greta, Otto & Heidi</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Real-World Examples: Successful Pet Names
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Here are examples of how different naming approaches work in practice:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Personality-Based: "Ziggy"</h4>
              <p className="text-sm text-muted-foreground">A high-energy Border Collie puppy who never stops moving. The name "Ziggy" reflects his zigzagging movements and playful personality. Easy to call, one syllable, and perfectly matches his energetic nature.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Appearance-Based: "Pearl"</h4>
              <p className="text-sm text-muted-foreground">A white Persian cat with a calm, elegant demeanor. "Pearl" reflects both her beautiful white coat and her refined personality. The name is easy to pronounce, memorable, and creates a sophisticated image.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Breed Heritage: "Kaiser"</h4>
              <p className="text-sm text-muted-foreground">A German Shepherd with a strong, protective nature. "Kaiser" (meaning emperor in German) honors his German heritage while reflecting his commanding presence. The name is powerful, easy to say, and culturally appropriate.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Meaning-Based: "Luna"</h4>
              <p className="text-sm text-muted-foreground">A rescue cat with a mysterious, calm personality. "Luna" (meaning moon) reflects her quiet, nocturnal nature and creates a beautiful, meaningful connection. The name is popular but timeless, easy for all family members to use.</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Common Naming Mistakes to Avoid
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Avoid these common pitfalls when choosing a pet name:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Names Too Similar to Commands</h4>
                <p className="text-sm text-muted-foreground">Avoid names like "Kit" (sounds like "sit"), "Bo" (sounds like "no"), or "Ray" (sounds like "stay"). These can confuse your pet during training.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Too Long or Complex</h4>
                <p className="text-sm text-muted-foreground">Names with more than three syllables or difficult pronunciations (e.g., "Archimedes," "Persephone") are hard to call quickly and may be shortened anyway.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Embarrassing or Inappropriate</h4>
                <p className="text-sm text-muted-foreground">Consider how the name will sound when called at the vet, dog park, or in public. Avoid names that might cause embarrassment or confusion.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Too Similar to Family Members</h4>
                <p className="text-sm text-muted-foreground">Avoid names that sound like family members' names to prevent confusion and awkward situations during conversations.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),
    faqs: [
      {
        question: "Is the AI pet name generator free to use?",
        answer: "Yes, our AI pet name generator is completely free to use with no registration required. You can generate unlimited name suggestions for your pets across all animal types without any hidden costs or usage limits."
      },
      {
        question: "What types of pets does the AI name generator support?",
        answer: "Our AI supports all types of pets including dogs, cats, birds, rabbits, fish, reptiles, hamsters, guinea pigs, ferrets, chinchillas, and more. The AI adapts suggestions based on the pet type you select, considering species-specific naming conventions and characteristics."
      },
      {
        question: "How does the AI choose pet names?",
        answer: "Our AI analyzes your pet's characteristics, personality traits, breed, gender, color, size, and your preferences to suggest names that are meaningful and fitting. It considers factors like name length (preferring 1-2 syllables), pronunciation ease, cultural significance, and current naming trends to provide personalized recommendations."
      },
      {
        question: "Can I generate names for multiple pets?",
        answer: "Yes! You can use the generator multiple times to find matching or themed names for pairs or groups of pets. Try generating names with similar themes (nature, food, mythology), origins (same culture), or sounds (rhyming) for a cohesive set that maintains individual identity."
      },
      {
        question: "Do the names come with meanings?",
        answer: "Yes, our generator provides meanings and origins for the suggested names, helping you choose a name that has personal significance or fits your pet's story. Understanding name meanings adds depth to your choice and creates a stronger emotional connection."
      },
      {
        question: "Can I use this for fictional pets or characters?",
        answer: "Absolutely! Writers, game developers, and creators often use our tool to name animals in their stories, games, animations, or creative projects. The personality-based generation is particularly useful for character development, ensuring names match fictional pet personalities and story contexts."
      },
      {
        question: "What makes a good pet name?",
        answer: "A good pet name is easy to pronounce (1-2 syllables work best), distinct from common commands, memorable, and fits your pet's personality or appearance. It should be something you're comfortable saying repeatedly and calling in public. Names that are too long or complex often get shortened anyway."
      },
      {
        question: "Should I choose a popular or unique name?",
        answer: "Both have advantages. Popular names like Max, Bella, and Luna are easy to recognize and pronounce, making training easier. Unique names help your pet stand out and reflect individuality. Our generator provides both options, allowing you to choose based on your preferences and your pet's personality."
      },
      {
        question: "How do I know if a name fits my pet?",
        answer: "Test the name for a few days by using it frequently. Observe your pet's response—do they react positively? Does it feel natural when you say it? Consider how it sounds when calling your pet at the park or vet. If it feels awkward or your pet doesn't respond, try generating more suggestions until you find the perfect fit."
      },
      {
        question: "Can I change my pet's name later?",
        answer: "Yes, pets can learn new names, though it requires consistent repetition and positive reinforcement. However, choosing the right name from the start is easier for both you and your pet. Use our generator to explore multiple options before making a final decision to avoid the need for changes later."
      },
      {
        question: "Are there names I should avoid?",
        answer: "Avoid names that sound like commands (Kit/sit, Bo/no, Ray/stay), are too long or complex, are embarrassing to say in public, or sound too similar to family members' names. Also avoid names with negative connotations or that might cause confusion during training."
      },
      {
        question: "How many name suggestions does the generator provide?",
        answer: "Our generator provides 10+ unique name suggestions per generation, each with meanings and origins. You can generate multiple sets to explore different styles, themes, or approaches until you find the perfect name that resonates with you and fits your pet perfectly."
      },
      {
        question: "Does the generator consider breed-specific naming?",
        answer: "Yes! Our AI considers breed heritage and characteristics when suggesting names. For example, German Shepherds might receive German names, French Bulldogs might get French names, and Japanese breeds might receive Japanese names. This honors your pet's heritage while ensuring culturally appropriate suggestions."
      },
      {
        question: "Can I get names based on my pet's color?",
        answer: "Absolutely! Our generator suggests names based on physical appearance, including coat color. For black pets, you might see names like Shadow, Midnight, or Onyx. For white pets, names like Snow, Pearl, or Luna. The AI considers all physical characteristics when generating suggestions."
      },
      {
        question: "What if I want names for a specific theme?",
        answer: "Our generator can suggest names based on various themes including nature, food, mythology, literature, movies, and more. When generating, you can specify preferences or personality traits that align with your desired theme, and the AI will incorporate those elements into the suggestions."
      },
      {
        question: "Are the generated names unique and original?",
        answer: "Our AI generates names that are unique combinations and variations, drawing from extensive databases of names, meanings, and cultural references. While some names may be popular choices, the AI creates personalized suggestions based on your specific inputs, ensuring relevance to your pet."
      },
      {
        question: "Can I use this tool for rescue pets?",
        answer: "Yes! Our generator is perfect for rescue pets. You can generate names that reflect their new life, personality, or the fresh start they're getting. Many rescue organizations and adopters use our tool to find names that honor the pet's journey and new beginning."
      },
      {
        question: "Does the generator work for exotic pets?",
        answer: "Yes, our generator supports exotic pets including reptiles, birds, small mammals, and more. The AI adapts suggestions based on the pet type, considering species-specific characteristics, natural habitats, and appropriate naming conventions for each animal category."
      },
      {
        question: "How do I choose between multiple great names?",
        answer: "Test each name by saying it aloud multiple times, imagining calling your pet at the park or vet. Consider which name feels most natural, matches your pet's personality best, and resonates emotionally with you. You can also try each name for a day and see which one your pet responds to most positively."
      },
      {
        question: "Can I get gender-specific name suggestions?",
        answer: "Yes! Our generator allows you to specify gender (male, female, or unisex) to get appropriate suggestions. Gender-specific names help create a better fit, though many modern pet owners also choose unisex names that work for any pet regardless of gender."
      },
      {
        question: "What if my pet already has a name I want to change?",
        answer: "Our generator can help you find a new name that's similar in sound or meaning to ease the transition, or completely different if you want a fresh start. When changing names, use positive reinforcement and consistency—say the new name frequently with treats and praise to help your pet learn it quickly."
      },
      {
        question: "Are there cultural considerations in name suggestions?",
        answer: "Yes, our AI considers cultural appropriateness and significance when generating names. It suggests names that honor breed heritage, respect cultural meanings, and avoid names that might be inappropriate or offensive. The generator provides cultural context and origins for all suggestions."
      },
      {
        question: "Can I save or favorite name suggestions?",
        answer: "While our free generator doesn't have a built-in save feature, you can easily copy your favorite suggestions or generate multiple times to compare options. Many users generate several sets, note their favorites, and then test them with their pets before making a final decision."
      },
      {
        question: "Does the generator suggest names for puppies vs. adult dogs?",
        answer: "Our generator adapts suggestions based on your pet's age and life stage. Puppy names might be more playful and cute, while names for adult dogs might be more mature and sophisticated. You can specify your pet's age or stage to get age-appropriate suggestions."
      },
      {
        question: "What's the difference between dog names and cat names?",
        answer: "While many names work for both, there are subtle differences. Dog names often emphasize easy calling and training (short, clear sounds), while cat names might be more elegant or sophisticated. Our generator considers these differences and provides species-appropriate suggestions while maintaining flexibility."
      },
      {
        question: "Can I get names that work well for training?",
        answer: "Yes! Our generator prioritizes names that are easy to pronounce, distinct from commands, and have clear sounds that pets can easily recognize. Names with 1-2 syllables, ending in vowels, or with sharp consonants work particularly well for training and quick recognition."
      },
      {
        question: "Are there seasonal or holiday-themed names?",
        answer: "Our generator can suggest names based on seasons, holidays, or special occasions. For example, winter-themed names like Snow or Frost, holiday names like Noel or Holly, or seasonal names that reflect when you got your pet. Specify your preferences to get themed suggestions."
      },
      {
        question: "Can the generator help with naming litters?",
        answer: "Absolutely! Our generator is perfect for breeders naming litters. You can generate multiple names with cohesive themes, similar sounds, or matching origins to create a unified set while maintaining individual identity. Many breeders use our tool to name entire litters with coordinated names."
      },
      {
        question: "What if I want a name that honors someone special?",
        answer: "You can use our generator to find names with similar meanings, sounds, or origins to honor someone special. For example, if you want to honor a loved one named 'Michael,' you might find names with similar meanings (like 'gift from God') or names that start with the same letter or sound."
      },
      {
        question: "Does the generator work offline?",
        answer: "No, our AI pet name generator requires an internet connection to access the AI models and generate personalized suggestions. However, once you've generated names, you can save them locally and reference them offline when making your final decision."
      },
      {
        question: "How accurate are the name meanings provided?",
        answer: "Our generator provides accurate meanings and origins based on extensive linguistic and cultural databases. Meanings are verified from multiple sources including etymology dictionaries, cultural references, and historical name databases to ensure accuracy and cultural appropriateness."
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
        description: "Generate 100 unique pet names with AI in! Perfect for dogs, cats, puppies, kittens & all animals. Get popular, unique, cute & cool names based on personality, breed, color & characteristics. Free with meanings & origins. No sign up required!",
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
