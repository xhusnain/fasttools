"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"

import { Copy, Check, Code } from "lucide-react"


export function MetaTagGenerator() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [keywords, setKeywords] = useState("")
  const [author, setAuthor] = useState("")
  const [ogImage, setOgImage] = useState("")
  const [twitterHandle, setTwitterHandle] = useState("")
  const [result, setResult] = useState("")
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateMetaTags = () => {
    setIsGenerating(true)

    setTimeout(() => {
      const metaTags = ` Primary Meta Tags 
<title>${title || "Your Page Title"}</title>
<meta name="title" content="${title || "Your Page Title"}" />
<meta name="description" content="${description || "Your page description"}" />
${keywords ? `<meta name="keywords" content="${keywords}" />` : ""}
${author ? `<meta name="author" content="${author}" />` : ""}
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />

 Open Graph / Facebook 
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourwebsite.com/" />
<meta property="og:title" content="${title || "Your Page Title"}" />
<meta property="og:description" content="${description || "Your page description"}" />
${ogImage ? `<meta property="og:image" content="${ogImage}" />` : ""}

 Twitter 
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://yourwebsite.com/" />
<meta property="twitter:title" content="${title || "Your Page Title"}" />
<meta property="twitter:description" content="${description || "Your page description"}" />
${ogImage ? `<meta property="twitter:image" content="${ogImage}" />` : ""}
${twitterHandle ? `<meta name="twitter:creator" content="${twitterHandle}" />` : ""}`

      setResult(metaTags)
      setIsGenerating(false)
    }, 500)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <GCard className="border border-border shadow-sm">
        <GCardHeader>
          <GCardTitle className="text-xl text-foreground flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            Meta Tag Generator
          </GCardTitle>
          <GCardDescription className="text-sm text-muted-foreground">
            Generate SEO-friendly meta tags for your website
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <div className="space-y-2">
            <GLabel htmlFor="title" className="text-sm font-medium text-foreground">
              Page Title
            </GLabel>
            <GInput
              id="title"
              placeholder="Enter your page title (50-60 characters)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-10 text-sm border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
              maxLength={60}
            />
            <p className="text-xs text-muted-foreground">{title.length}/60 characters</p>
          </div>

          <div className="space-y-2">
            <GLabel htmlFor="description" className="text-sm font-medium text-foreground">
              Meta Description
            </GLabel>
            <GTextarea
              id="description"
              placeholder="Enter your meta description (150-160 characters)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-20 text-sm resize-none border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
              maxLength={160}
            />
            <p className="text-xs text-muted-foreground">{description.length}/160 characters</p>
          </div>

          <div className="space-y-2">
            <GLabel htmlFor="keywords" className="text-sm font-medium text-foreground">
              Keywords (Optional)
            </GLabel>
            <GInput
              id="keywords"
              placeholder="keyword1, keyword2, keyword3"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="h-10 text-sm border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <GLabel htmlFor="author" className="text-sm font-medium text-foreground">
              Author (Optional)
            </GLabel>
            <GInput
              id="author"
              placeholder="Your name or company name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="h-10 text-sm border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <GLabel htmlFor="ogImage" className="text-sm font-medium text-foreground">
              OG Image URL (Optional)
            </GLabel>
            <GInput
              id="ogImage"
              placeholder="https://example.com/image.jpg"
              value={ogImage}
              onChange={(e) => setOgImage(e.target.value)}
              className="h-10 text-sm border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <GLabel htmlFor="twitter" className="text-sm font-medium text-foreground">
              Twitter Handle (Optional)
            </GLabel>
            <GInput
              id="twitter"
              placeholder="@yourusername"
              value={twitterHandle}
              onChange={(e) => setTwitterHandle(e.target.value)}
              className="h-10 text-sm border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <GButton
            onClick={generateMetaTags}
            disabled={!title || !description || isGenerating}
            isLoading={isGenerating}
            className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isGenerating ? "Generating..." : "Generate Meta Tags"}
          </GButton>
        </GCardContent>
      </GCard>

      {result && (
        <GCard className="border border-border shadow-sm animate-fade-in">
          <GCardHeader>
            <div className="flex items-center justify-between">
              <GCardTitle className="text-lg text-foreground">Generated Meta Tags</GCardTitle>
              <GButton
                onClick={copyToClipboard}
                variant="outline"
                size="sm"
                className="h-9 text-sm font-medium bg-transparent"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </>
                )}
              </GButton>
            </div>
          </GCardHeader>
          <GCardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs leading-relaxed">
              <code>{result}</code>
            </pre>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
