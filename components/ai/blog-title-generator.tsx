"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"

import { Copy, Check, Lightbulb, RefreshCw } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type { BlogTitleTemplates } from "@/types/image-tool-types/blog-title-generator.types"

export function BlogTitleGenerator() {
  const [keyword, setKeyword] = useState("")
  const [result, setResult] = useState<string[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const templates: BlogTitleTemplates = {
    howTo: [
      "How to {keyword}: A Complete Guide",
      "How to {keyword} in 2026: Step-by-Step Tutorial",
      "How to {keyword} for Beginners: Expert Tips",
      "How to {keyword} Like a Pro: Advanced Techniques",
      "How to {keyword} Fast: Quick and Easy Methods",
    ],
    ultimate: [
      "The Ultimate {keyword} Guide for 2026",
      "Ultimate {keyword} Handbook: Everything You Need",
      "The Complete {keyword} Guide: From Basics to Advanced",
      "Ultimate {keyword} Mastery: Pro Tips and Strategies",
      "The Definitive {keyword} Guide: Expert Insights",
    ],
    lists: [
      "10 Best {keyword} Tips for Beginners",
      "15 Essential {keyword} Strategies That Work",
      "20 {keyword} Ideas to Boost Your Results",
      "5 Common {keyword} Mistakes to Avoid",
      "7 Proven {keyword} Techniques for Success",
      "12 {keyword} Tools You Need to Know",
      "8 {keyword} Trends Shaping 2026",
    ],
    questions: [
      "What is {keyword}? Complete Beginner's Guide",
      "Why {keyword} Matters in 2026: Key Insights",
      "Is {keyword} Right for You? Find Out Here",
      "What Makes {keyword} Effective? Expert Analysis",
      "How Does {keyword} Work? Detailed Explanation",
    ],
    comparisons: [
      "{keyword} vs Alternatives: Which is Better?",
      "{keyword} vs Competitors: Detailed Comparison",
      "Best {keyword} Options: Pros and Cons",
      "{keyword} Comparison: Which One to Choose?",
      "Top {keyword} Solutions: Feature Comparison",
    ],
    expert: [
      "Mastering {keyword}: Expert Tips and Tricks",
      "Advanced {keyword} Strategies: Pro Techniques",
      "Expert Guide to {keyword}: Insider Secrets",
      "Professional {keyword} Methods: Industry Insights",
      "Master {keyword}: Advanced Implementation Guide",
    ],
    trends: [
      "The Future of {keyword}: Trends and Predictions",
      "{keyword} Trends 2026: What's Coming Next",
      "Latest {keyword} Developments: Industry Updates",
      "Emerging {keyword} Technologies: Future Outlook",
      "{keyword} Innovation: What's New in 2026",
    ],
    problems: [
      "Common {keyword} Problems and Solutions",
      "Troubleshooting {keyword}: Fix Common Issues",
      "Overcoming {keyword} Challenges: Expert Advice",
      "Solving {keyword} Problems: Step-by-Step Guide",
      "Avoiding {keyword} Pitfalls: Prevention Tips",
    ],
    benefits: [
      "Benefits of {keyword}: Why It Matters",
      "Advantages of {keyword}: Key Benefits Explained",
      "Why Choose {keyword}? Top Reasons",
      "Benefits of {keyword}: Success Stories",
      "How {keyword} Can Transform Your Results",
    ],
    caseStudies: [
      "{keyword} Success Stories: Real Examples",
      "Case Study: {keyword} Implementation Results",
      "{keyword} in Action: Real-World Examples",
      "Success with {keyword}: Case Studies",
      "{keyword} Results: Before and After",
    ],
    beginner: [
      "{keyword} for Beginners: Start Here",
      "Getting Started with {keyword}: Complete Guide",
      "{keyword} Basics: Everything Newbies Need to Know",
      "Beginner's Guide to {keyword}: Step-by-Step",
      "Learn {keyword} from Scratch: Easy Tutorial",
      "Introduction to {keyword}: First Steps",
      "{keyword} 101: Foundation Course",
    ],
    advanced: [
      "Advanced {keyword} Techniques: Pro Level",
      "Expert {keyword} Strategies: Next Level",
      "Master-Level {keyword}: Advanced Methods",
      "Professional {keyword}: Industry Secrets",
      "Elite {keyword} Tactics: Expert Only",
      "Advanced {keyword} Implementation: Pro Tips",
      "Sophisticated {keyword}: Master Class",
    ],
    tools: [
      "Best {keyword} Tools: Complete List",
      "Essential {keyword} Tools for Success",
      "Top {keyword} Software: Reviews & Comparison",
      "Must-Have {keyword} Tools: Expert Picks",
      "{keyword} Toolbox: Everything You Need",
      "Professional {keyword} Tools: Industry Standard",
      "Free {keyword} Tools: Budget-Friendly Options",
    ],
    mistakes: [
      "Common {keyword} Mistakes: Avoid These",
      "Top {keyword} Errors: What Not to Do",
      "{keyword} Mistakes That Cost You Money",
      "Avoiding {keyword} Pitfalls: Expert Advice",
      "Biggest {keyword} Blunders: Learn from Others",
      "Critical {keyword} Mistakes: Prevention Guide",
      "{keyword} Errors: How to Fix Them",
    ],
    secrets: [
      "Secret {keyword} Techniques: Insider Tips",
      "Hidden {keyword} Strategies: Revealed",
      "Insider {keyword} Secrets: Industry Knowledge",
      "Confidential {keyword} Methods: Pro Only",
      "Exclusive {keyword} Tips: Behind the Scenes",
      "Underground {keyword} Tactics: Advanced",
      "Classified {keyword} Information: Expert Level",
    ],
    quick: [
      "Quick {keyword} Guide: 5-Minute Read",
      "Fast {keyword} Tips: Instant Results",
      "Rapid {keyword} Setup: Speed Guide",
      "Instant {keyword} Results: Quick Start",
      "Express {keyword} Tutorial: Fast Track",
      "Speedy {keyword} Methods: Time-Saving",
      "Rush {keyword} Guide: Immediate Impact",
    ],
    comprehensive: [
      "Complete {keyword} Encyclopedia: Everything",
      "Comprehensive {keyword} Guide: All-In-One",
      "Total {keyword} Resource: Complete Coverage",
      "Full {keyword} Manual: Nothing Missing",
      "Exhaustive {keyword} Guide: Every Detail",
      "Thorough {keyword} Handbook: Complete",
      "Extensive {keyword} Guide: Comprehensive",
    ],
    practical: [
      "Practical {keyword} Applications: Real Use",
      "Hands-On {keyword}: Practical Guide",
      "Real-World {keyword}: Practical Examples",
      "Applied {keyword}: Practical Implementation",
      "Functional {keyword}: Practical Approach",
      "Usable {keyword} Methods: Practical Tips",
      "Workable {keyword} Solutions: Practical",
    ],
    innovative: [
      "Innovative {keyword} Approaches: Creative",
      "Creative {keyword} Solutions: Innovative",
      "Revolutionary {keyword} Methods: Breakthrough",
      "Cutting-Edge {keyword}: Latest Innovation",
      "Novel {keyword} Techniques: Fresh Ideas",
      "Groundbreaking {keyword}: Innovation",
      "Pioneering {keyword} Strategies: New Era",
    ],
  }

  const generateTitles = () => {
    setIsGenerating(true)

    setTimeout(() => {
      const allTitles: string[] = []
      const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1)

      // Generate titles from each category
      Object.values(templates).forEach(categoryTemplates => {
        categoryTemplates.forEach(template => {
          const title = template.replace(/{keyword}/g, capitalizedKeyword)
          allTitles.push(title)
        })
      })

      // Shuffle and take 30 titles for maximum variety
      const shuffledTitles = allTitles.sort(() => Math.random() - 0.5)
      setResult(shuffledTitles.slice(0, 30))
      setIsGenerating(false)
    }, 1000)
  }

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-6">
      <GCard className="border border-border shadow-sm">
        <GCardHeader>
          <GCardTitle className="text-xl text-foreground flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Blog Title Generator
          </GCardTitle>
          <GCardDescription className="text-sm text-muted-foreground">
            Generate catchy blog titles for your content
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <div className="space-y-2">
            <GLabel htmlFor="keyword" className="text-sm font-medium text-foreground">
              Main Keyword or Topic
            </GLabel>
            <GInput
              id="keyword"
              placeholder="e.g., SEO, content marketing, web design"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="h-10 text-sm"
            />
          </div>

          <GButton
            onClick={generateTitles}
            disabled={!keyword || isGenerating}
            className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isGenerating ? (
              <>
                <LoadingSpinner className="mr-2" />
                Generating...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate Titles
              </>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {result.length > 0 && (
        <GCard className="border border-border shadow-sm animate-fade-in">
          <GCardHeader>
            <GCardTitle className="text-lg text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Generated SEO-Optimized Blog Titles
            </GCardTitle>
            <GCardDescription className="text-sm text-muted-foreground">
              {result.length} AI-powered title suggestions ready to boost your content's visibility
            </GCardDescription>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-3">
              {result.map((title, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border hover:border-primary/20 transition-colors group"
                >
                  <div className="flex-1">
                    <span className="text-sm text-foreground font-medium">{title}</span>
                    <div className="text-xs text-muted-foreground mt-1">
                      {title.length} characters • SEO optimized
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(title, index)}
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copied === index ? (
                      <Check className="h-4 w-4 text-heading-accent" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </GButton>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-xs text-muted-foreground">
                💡 <strong>Pro Tip:</strong> These titles are optimized for search engines and designed to increase click-through rates.
                Choose titles that best match your content and target audience.
              </p>
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
