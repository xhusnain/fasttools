"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check, Code } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

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
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            Meta Tag Generator
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Generate SEO-friendly meta tags for your website
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium text-foreground">
              Page Title
            </Label>
            <Input
              id="title"
              placeholder="Enter your page title (50-60 characters)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-10 text-sm"
              maxLength={60}
            />
            <p className="text-xs text-muted-foreground">{title.length}/60 characters</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-foreground">
              Meta Description
            </Label>
            <Textarea
              id="description"
              placeholder="Enter your meta description (150-160 characters)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-20 text-sm resize-none"
              maxLength={160}
            />
            <p className="text-xs text-muted-foreground">{description.length}/160 characters</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords" className="text-sm font-medium text-foreground">
              Keywords (Optional)
            </Label>
            <Input
              id="keywords"
              placeholder="keyword1, keyword2, keyword3"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="h-10 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author" className="text-sm font-medium text-foreground">
              Author (Optional)
            </Label>
            <Input
              id="author"
              placeholder="Your name or company name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="h-10 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ogImage" className="text-sm font-medium text-foreground">
              OG Image URL (Optional)
            </Label>
            <Input
              id="ogImage"
              placeholder="https://example.com/image.jpg"
              value={ogImage}
              onChange={(e) => setOgImage(e.target.value)}
              className="h-10 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitter" className="text-sm font-medium text-foreground">
              Twitter Handle (Optional)
            </Label>
            <Input
              id="twitter"
              placeholder="@yourusername"
              value={twitterHandle}
              onChange={(e) => setTwitterHandle(e.target.value)}
              className="h-10 text-sm"
            />
          </div>

          <Button
            onClick={generateMetaTags}
            disabled={!title || !description || isGenerating}
            className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isGenerating ? (
              <>
                <LoadingSpinner className="mr-2" />
                Generating...
              </>
            ) : (
              "Generate Meta Tags"
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border border-border shadow-sm animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">Generated Meta Tags</CardTitle>
              <Button
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
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs leading-relaxed">
              <code>{result}</code>
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
