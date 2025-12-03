"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GTextarea } from "@/ui/gtextarea"
import { GCard } from "@/ui/gcard"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"

import { Copy, Heart, Sparkles, Download } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

import type { PetName, CategorizedNames } from "@/types/image-tool-types/ai-pet-name-generator.types"

export function AiPetNameGenerator() {
  const [petType, setPetType] = useState("dog")
  const [gender, setGender] = useState("any")
  const [color, setColor] = useState("")
  const [age, setAge] = useState("any")
  const [personality, setPersonality] = useState("")
  const [breed, setBreed] = useState("")
  const [size, setSize] = useState("any")
  const [additionalInfo, setAdditionalInfo] = useState("")

  const [categorizedNames, setCategorizedNames] = useState<CategorizedNames | null>(null)
  const [loading, setLoading] = useState(false)
  const [copiedName, setCopiedName] = useState("")
  const [loadingProgress, setLoadingProgress] = useState(0)

  const generateNames = async () => {
    setLoading(true)
    setCategorizedNames(null)
    setLoadingProgress(0)

    // Simulate progress for better UX
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) return prev
        return prev + Math.random() * 15
      })
    }, 500)

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate-pet-names",
          data: {
            petType,
            gender,
            color,
            age,
            personality,
            breed,
            size,
            additionalInfo
          }
        }),
      })

      const data = await response.json()

      clearInterval(progressInterval)
      setLoadingProgress(100)

      if (data.success) {
        setCategorizedNames(data.names)
      } else {
        console.error("Error:", data.error)
        alert(data.error || "Failed to generate names. Please try again.")
      }
    } catch (error) {
      clearInterval(progressInterval)
      console.error("Error generating names:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setTimeout(() => {
        setLoading(false)
        setLoadingProgress(0)
      }, 500)
    }
  }

  const copyName = (name: string) => {
    void navigator.clipboard.writeText(name)
    setCopiedName(name)
    setTimeout(() => setCopiedName(""), 2000)
  }

  const downloadNames = () => {
    if (!categorizedNames) return

    let content = "🐾 AI-Generated Pet Names\n"
    content += "=".repeat(50) + "\n\n"

      ; (Object.entries(categorizedNames) as [string, PetName[]][]).forEach(([category, names]) => {
        if (names.length > 0) {
          content += `\n${category.toUpperCase()} NAMES:\n`
          content += "-".repeat(50) + "\n"
          names.forEach((item) => {
            content += `• ${item.name}\n`
            content += `  Meaning: ${item.meaning}\n`
            content += `  Origin: ${item.origin}\n\n`
          })
        }
      })

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `pet-names-${petType}-${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const getTotalNamesCount = () => {
    if (!categorizedNames) return 0
    return Object.values(categorizedNames).reduce((sum, names) => sum + names.length, 0)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Pet Type */}
        <div className="space-y-2">
          <GLabel htmlFor="petType" className="text-sm font-medium">
            Pet Type <span className="text-foreground">*</span>
          </GLabel>
          <GSelect value={petType} onValueChange={setPetType}>
            <GSelectTrigger className="border-2 border-primary/50 focus:border-primary">
              <GSelectValue />
            </GSelectTrigger>
            <GSelectContent>
              <GSelectItem value="dog">Dog</GSelectItem>
              <GSelectItem value="cat">Cat</GSelectItem>
              <GSelectItem value="bird">Bird</GSelectItem>
              <GSelectItem value="rabbit">Rabbit</GSelectItem>
              <GSelectItem value="hamster">Hamster</GSelectItem>
              <GSelectItem value="guinea pig">Guinea Pig</GSelectItem>
              <GSelectItem value="fish">Fish</GSelectItem>
              <GSelectItem value="turtle">Turtle</GSelectItem>
              <GSelectItem value="snake">Snake</GSelectItem>
              <GSelectItem value="lizard">Lizard</GSelectItem>
              <GSelectItem value="ferret">Ferret</GSelectItem>
              <GSelectItem value="chinchilla">Chinchilla</GSelectItem>
              <GSelectItem value="parrot">Parrot</GSelectItem>
              <GSelectItem value="horse">Horse</GSelectItem>
              <GSelectItem value="other">Other</GSelectItem>
            </GSelectContent>
          </GSelect>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <GLabel htmlFor="gender" className="text-sm font-medium">Gender</GLabel>
          <GSelect value={gender} onValueChange={setGender}>
            <GSelectTrigger className="border-2 border-primary/50 focus:border-primary">
              <GSelectValue />
            </GSelectTrigger>
            <GSelectContent>
              <GSelectItem value="any">Any / Unisex</GSelectItem>
              <GSelectItem value="male">Male</GSelectItem>
              <GSelectItem value="female">Female</GSelectItem>
            </GSelectContent>
          </GSelect>
        </div>

        {/* Color */}
        <div className="space-y-2">
          <GLabel htmlFor="color" className="text-sm font-medium">Color / Appearance</GLabel>
          <GInput
            id="color"
            placeholder="e.g., black, white, brown, golden, spotted"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border-2 border-primary/50 focus:border-primary"
          />
        </div>

        {/* Age */}
        <div className="space-y-2">
          <GLabel htmlFor="age" className="text-sm font-medium">Age</GLabel>
          <GSelect value={age} onValueChange={setAge}>
            <GSelectTrigger className="border-2 border-primary/50 focus:border-primary">
              <GSelectValue />
            </GSelectTrigger>
            <GSelectContent>
              <GSelectItem value="any">Any Age</GSelectItem>
              <GSelectItem value="baby">Baby / Puppy / Kitten</GSelectItem>
              <GSelectItem value="young">Young (1-3 years)</GSelectItem>
              <GSelectItem value="adult">Adult (3-7 years)</GSelectItem>
              <GSelectItem value="senior">Senior (7+ years)</GSelectItem>
            </GSelectContent>
          </GSelect>
        </div>

        {/* Size */}
        <div className="space-y-2">
          <GLabel htmlFor="size" className="text-sm font-medium">Size</GLabel>
          <GSelect value={size} onValueChange={setSize}>
            <GSelectTrigger className="border-2 border-primary/50 focus:border-primary">
              <GSelectValue />
            </GSelectTrigger>
            <GSelectContent>
              <GSelectItem value="any">Any Size</GSelectItem>
              <GSelectItem value="tiny">Tiny (under 10 lbs)</GSelectItem>
              <GSelectItem value="small">Small (10-25 lbs)</GSelectItem>
              <GSelectItem value="medium">Medium (25-50 lbs)</GSelectItem>
              <GSelectItem value="large">Large (50-100 lbs)</GSelectItem>
              <GSelectItem value="giant">Giant (100+ lbs)</GSelectItem>
            </GSelectContent>
          </GSelect>
        </div>

        {/* Breed */}
        <div className="space-y-2">
          <GLabel htmlFor="breed" className="text-sm font-medium">Breed (Optional)</GLabel>
          <GInput
            id="breed"
            placeholder="e.g., Golden Retriever, Persian, Cockatiel"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="border-2 border-primary/50 focus:border-primary"
          />
        </div>
      </div>

      {/* Personality */}
      <div className="space-y-2">
        <GLabel htmlFor="personality" className="text-sm font-medium">
          Personality Traits
        </GLabel>
        <GTextarea
          id="personality"
          placeholder="Describe your pet's personality: playful, calm, energetic, shy, friendly, independent, cuddly, adventurous, smart, lazy, protective, gentle..."
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
          className="border-2 border-primary/50 focus:border-primary min-h-20"
        />
      </div>

      {/* Additional Info */}
      <div className="space-y-2">
        <GLabel htmlFor="additionalInfo" className="text-sm font-medium">
          Additional Preferences (Optional)
        </GLabel>
        <GTextarea
          id="additionalInfo"
          placeholder="Any specific preferences? Short names, long names, specific cultural origins, name styles you prefer, special meanings you want, etc."
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          className="border-2 border-primary/50 focus:border-primary min-h-20"
        />
      </div>

      <GButton
        onClick={generateNames}
        disabled={loading}
        isLoading={loading}
        className="w-full h-12 text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
      >
        {loading ? "Generating 100+ Perfect Names..." : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Pet Names with AI
          </>
        )}
      </GButton>

      {/* Loading Progress Indicator */}
      {loading && (
        <div className="space-y-4 animate-fade-in bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border-2 border-primary/30">
          <div className="flex items-center justify-center gap-3">
            <LoadingSpinner className="h-6 w-6 text-primary" />
            <p className="text-lg font-semibold text-primary">
              AI is crafting perfect names for your {petType}...
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(loadingProgress)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out rounded-full"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-2 w-2 bg-secondary-accent rounded-full animate-pulse" />
              Analyzing preferences
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse animation-delay-200" />
              Searching cultural names
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-2 w-2 bg-accent rounded-full animate-pulse animation-delay-400" />
              Finding meanings
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse animation-delay-600" />
              Organizing categories
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground italic">
            This may take 20-30 seconds. Please wait while we generate 100 unique names...
          </p>
        </div>
      )}

      {categorizedNames && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-xl text-primary flex items-center gap-2">
                <Heart className="h-5 w-5 text-foreground" />
                {getTotalNamesCount()} Perfect Names for Your {petType.charAt(0).toUpperCase() + petType.slice(1)}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Organized by category for easy browsing
              </p>
            </div>
            <GButton
              variant="outline"
              onClick={downloadNames}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download All
            </GButton>
          </div>

          {(Object.entries(categorizedNames) as [string, PetName[]][]).map(([category, names]) => {
            if (names.length === 0) return null

            const categoryStyles: Record<string, { border: string; bg: string; text: string }> = {
              traditional: {
                border: "border-primary/30",
                bg: "bg-primary/20",
                text: "text-foreground"
              },
              modern: {
                border: "border-secondary-accent/30",
                bg: "bg-secondary-accent/20",
                text: "text-heading-accent"
              },
              unique: {
                border: "border-accent/30",
                bg: "bg-accent/20",
                text: "text-foreground"
              },
              nature: {
                border: "border-secondary-accent/30",
                bg: "bg-secondary-accent/20",
                text: "text-secondary-accent"
              },
              cultural: {
                border: "border-primary/30",
                bg: "bg-primary/20",
                text: "text-foreground"
              },
              celebrity: {
                border: "border-destructive/30",
                bg: "bg-destructive/20",
                text: "text-foreground"
              },
              food: {
                border: "border-tertiary-accent/30",
                bg: "bg-tertiary-accent/20",
                text: "text-foreground"
              },
              mythological: {
                border: "border-primary/30",
                bg: "bg-primary/20",
                text: "text-primary"
              }
            }

            const styles = categoryStyles[category] || {
              border: "border-muted-foreground/30",
              bg: "bg-muted-foreground/20",
              text: "text-muted-foreground"
            }

            return (
              <div key={category} className="space-y-3">
                <div className={`flex items-center gap-2 pb-2 border-b-2 ${styles.border}`}>
                  <div className={`px-3 py-1 rounded-full ${styles.bg} ${styles.text} text-sm font-semibold`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)} Names
                  </div>
                  <span className="text-xs text-muted-foreground">({names.length} names)</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {names.map((item, index) => (
                    <GCard
                      key={index}
                      className="p-4 hover:shadow-lg transition-shadow border-2 border-border hover:border-primary/50"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-base mb-1 text-primary truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-1">
                            <span className="font-medium">Meaning:</span> {item.meaning}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-medium">Origin:</span> {item.origin}
                          </p>
                        </div>
                        <GButton
                          variant={copiedName === item.name ? "default" : "outline"}
                          size="sm"
                          onClick={() => copyName(item.name)}
                          className="shrink-0"
                        >
                          {copiedName === item.name ? (
                            <span className="text-xs">✓</span>
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </GButton>
                      </div>
                    </GCard>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {!loading && !categorizedNames && (
        <div className="text-center py-12 text-muted-foreground">
          <PawPrint className="h-16 w-16 mx-auto mb-4 opacity-20" />
          <p className="text-lg">Fill in the details above and click generate to discover perfect names for your pet!</p>
        </div>
      )}
    </div>
  )
}

function PawPrint({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18c-1.5 0-2.5-1-2.5-2s1-2 2.5-2 2.5 1 2.5 2-1 2-2.5 2zm-5-5c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm10 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zM8 9c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm8 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" />
    </svg>
  )
}
