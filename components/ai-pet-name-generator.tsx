"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Heart, Sparkles, Download } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface PetName {
  name: string
  meaning: string
  origin: string
}

interface CategorizedNames {
  traditional: PetName[]
  modern: PetName[]
  unique: PetName[]
  nature: PetName[]
  cultural: PetName[]
  celebrity: PetName[]
  food: PetName[]
  mythological: PetName[]
}

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
      const response = await fetch("/api/ai/generate-pet-names", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          petType, 
          gender, 
          color, 
          age, 
          personality, 
          breed,
          size,
          additionalInfo 
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
    navigator.clipboard.writeText(name)
    setCopiedName(name)
    setTimeout(() => setCopiedName(""), 2000)
  }

  const downloadNames = () => {
    if (!categorizedNames) return
    
    let content = "🐾 AI-Generated Pet Names\n"
    content += "=" .repeat(50) + "\n\n"
    
    Object.entries(categorizedNames).forEach(([category, names]) => {
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
          <Label htmlFor="petType" className="text-sm font-medium">
            Pet Type <span className="text-foreground">*</span>
          </Label>
          <Select value={petType} onValueChange={setPetType}>
            <SelectTrigger className="border-2 border-primary/50 focus:border-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dog">Dog</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="bird">Bird</SelectItem>
              <SelectItem value="rabbit">Rabbit</SelectItem>
              <SelectItem value="hamster">Hamster</SelectItem>
              <SelectItem value="guinea pig">Guinea Pig</SelectItem>
              <SelectItem value="fish">Fish</SelectItem>
              <SelectItem value="turtle">Turtle</SelectItem>
              <SelectItem value="snake">Snake</SelectItem>
              <SelectItem value="lizard">Lizard</SelectItem>
              <SelectItem value="ferret">Ferret</SelectItem>
              <SelectItem value="chinchilla">Chinchilla</SelectItem>
              <SelectItem value="parrot">Parrot</SelectItem>
              <SelectItem value="horse">Horse</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label htmlFor="gender" className="text-sm font-medium">Gender</Label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="border-2 border-primary/50 focus:border-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any / Unisex</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Color */}
        <div className="space-y-2">
          <Label htmlFor="color" className="text-sm font-medium">Color / Appearance</Label>
          <Input
            id="color"
            placeholder="e.g., black, white, brown, golden, spotted"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border-2 border-primary/50 focus:border-primary"
          />
        </div>

        {/* Age */}
        <div className="space-y-2">
          <Label htmlFor="age" className="text-sm font-medium">Age</Label>
          <Select value={age} onValueChange={setAge}>
            <SelectTrigger className="border-2 border-primary/50 focus:border-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Age</SelectItem>
              <SelectItem value="baby">Baby / Puppy / Kitten</SelectItem>
              <SelectItem value="young">Young (1-3 years)</SelectItem>
              <SelectItem value="adult">Adult (3-7 years)</SelectItem>
              <SelectItem value="senior">Senior (7+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Size */}
        <div className="space-y-2">
          <Label htmlFor="size" className="text-sm font-medium">Size</Label>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger className="border-2 border-primary/50 focus:border-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Size</SelectItem>
              <SelectItem value="tiny">Tiny (under 10 lbs)</SelectItem>
              <SelectItem value="small">Small (10-25 lbs)</SelectItem>
              <SelectItem value="medium">Medium (25-50 lbs)</SelectItem>
              <SelectItem value="large">Large (50-100 lbs)</SelectItem>
              <SelectItem value="giant">Giant (100+ lbs)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Breed */}
        <div className="space-y-2">
          <Label htmlFor="breed" className="text-sm font-medium">Breed (Optional)</Label>
          <Input
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
        <Label htmlFor="personality" className="text-sm font-medium">
          Personality Traits
        </Label>
        <Textarea
          id="personality"
          placeholder="Describe your pet's personality: playful, calm, energetic, shy, friendly, independent, cuddly, adventurous, smart, lazy, protective, gentle..."
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
          className="border-2 border-primary/50 focus:border-primary min-h-20"
        />
      </div>

      {/* Additional Info */}
      <div className="space-y-2">
        <Label htmlFor="additionalInfo" className="text-sm font-medium">
          Additional Preferences (Optional)
        </Label>
        <Textarea
          id="additionalInfo"
          placeholder="Any specific preferences? Short names, long names, specific cultural origins, name styles you prefer, special meanings you want, etc."
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          className="border-2 border-primary/50 focus:border-primary min-h-20"
        />
      </div>

      <Button 
        onClick={generateNames} 
        disabled={loading} 
        className="w-full h-12 text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
      >
        {loading ? (
          <>
            <LoadingSpinner className="mr-2" />
            Generating 100+ Perfect Names...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Pet Names with AI
          </>
        )}
      </Button>

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
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              Analyzing preferences
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse animation-delay-200" />
              Searching cultural names
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse animation-delay-400" />
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
            <Button 
              variant="outline" 
              onClick={downloadNames}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download All
            </Button>
          </div>

          {Object.entries(categorizedNames).map(([category, names]) => {
            if (names.length === 0) return null
            
            const categoryStyles: Record<string, { border: string; bg: string; text: string }> = {
              traditional: { 
                border: "border-blue-500/30", 
                bg: "bg-blue-500/20", 
                text: "text-foreground" 
              },
              modern: { 
                border: "border-green-500/30", 
                bg: "bg-green-500/20", 
                text: "text-heading-accent" 
              },
              unique: { 
                border: "border-purple-500/30", 
                bg: "bg-purple-500/20", 
                text: "text-foreground" 
              },
              nature: { 
                border: "border-emerald-500/30", 
                bg: "bg-emerald-500/20", 
                text: "text-emerald-600 dark:text-emerald-400" 
              },
              cultural: { 
                border: "border-primary/30", 
                bg: "bg-primary/20", 
                text: "text-foreground" 
              },
              celebrity: { 
                border: "border-pink-500/30", 
                bg: "bg-pink-500/20", 
                text: "text-foreground" 
              },
              food: { 
                border: "border-yellow-500/30", 
                bg: "bg-yellow-500/20", 
                text: "text-foreground" 
              },
              mythological: { 
                border: "border-indigo-500/30", 
                bg: "bg-indigo-500/20", 
                text: "text-indigo-600 dark:text-indigo-400" 
              }
            }
            
            const styles = categoryStyles[category] || { 
              border: "border-gray-500/30", 
              bg: "bg-gray-500/20", 
              text: "text-gray-600 dark:text-gray-400" 
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
                    <Card 
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
                        <Button 
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
                        </Button>
                      </div>
                    </Card>
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
      <path d="M12 18c-1.5 0-2.5-1-2.5-2s1-2 2.5-2 2.5 1 2.5 2-1 2-2.5 2zm-5-5c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm10 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zM8 9c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm8 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/>
    </svg>
  )
}
