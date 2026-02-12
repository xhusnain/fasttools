"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { Copy, Check, Code, ExternalLink, Image, Share2 } from "lucide-react"
import { generateMetaTags } from "@/lib/meta-tags-generator"

const OG_IMAGE_RECOMMENDED = "1200×630px"
const OG_IMAGE_TWITTER = "1200×675px"

export function MetaTagGenerator() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [image, setImage] = useState("")
  const [imageWidth, setImageWidth] = useState("1200")
  const [imageHeight, setImageHeight] = useState("630")
  const [imageAlt, setImageAlt] = useState("")
  const [siteName, setSiteName] = useState("")
  const [locale, setLocale] = useState("en_US")
  const [ogType, setOgType] = useState<"website" | "article">("website")
  const [keywords, setKeywords] = useState("")
  const [author, setAuthor] = useState("")
  const [twitterHandle, setTwitterHandle] = useState("")
  const [robots, setRobots] = useState<"index,follow" | "noindex,nofollow">("index,follow")
  const [result, setResult] = useState("")
  const [copied, setCopied] = useState(false)

  const generate = () => {
    const html = generateMetaTags({
      title: title || "Your Page Title",
      description: description || "Your page description",
      url: url || "https://example.com/",
      image: image || "",
      imageWidth: imageWidth ? parseInt(imageWidth, 10) : undefined,
      imageHeight: imageHeight ? parseInt(imageHeight, 10) : undefined,
      imageAlt: imageAlt || undefined,
      siteName: siteName || undefined,
      locale: locale || "en_US",
      type: ogType,
      keywords: keywords || undefined,
      author: author || undefined,
      twitterHandle: twitterHandle || undefined,
      robots,
      canonical: url || undefined,
    })
    setResult(html)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fillSample = () => {
    setTitle("My Awesome Page - Open Graph Meta Generator")
    setDescription("Generate open graph meta tags, Twitter Cards, and SEO meta tags. Free open graph meta generator online.")
    setUrl("https://example.com/page")
    setImage("https://example.com/og-image.jpg")
    setImageWidth("1200")
    setImageHeight("630")
    setImageAlt("Page preview image")
    setSiteName("My Website")
    setLocale("en_US")
  }

  return (
    <div className="space-y-6">
      <GCard className="border border-border shadow-sm">
        <GCardHeader>
          <GCardTitle className="text-xl text-foreground flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            Open Graph Meta Generator
          </GCardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Generate open graph meta tags, Twitter Cards, and SEO tags. open graph tag generator following Open Graph protocol.
          </p>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <GButton variant="outline" size="sm" onClick={fillSample}>
              Sample data
            </GButton>
          </div>

          {/* Required */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="title" className="text-sm font-medium text-foreground">
                Page Title *
              </GLabel>
              <GInput
                id="title"
                placeholder="50-60 characters optimal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-10 text-sm"
                maxLength={70}
              />
              <p className="text-xs text-muted-foreground">{title.length}/60 optimal</p>
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="url" className="text-sm font-medium text-foreground">
                Page URL * (og:url)
              </GLabel>
              <GInput
                id="url"
                placeholder="https://example.com/page"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-10 text-sm font-mono"
              />
            </div>
          </div>

          <div className="space-y-2">
            <GLabel htmlFor="description" className="text-sm font-medium text-foreground">
              Meta Description *
            </GLabel>
            <GTextarea
              id="description"
              placeholder="155-160 characters for full display"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-20 text-sm resize-none"
              maxLength={200}
            />
            <p className="text-xs text-muted-foreground">{description.length}/160 optimal</p>
          </div>

          {/* Open Graph Image */}
          <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/20">
            <div className="flex items-center gap-2">
              <Image className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Open Graph image (open graph image size)</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Recommended: {OG_IMAGE_RECOMMENDED} (1.91:1) for Facebook/LinkedIn. Twitter: {OG_IMAGE_TWITTER}.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 md:col-span-2">
                <GLabel>Image URL *</GLabel>
                <GInput
                  placeholder="https://example.com/og-image.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <GLabel>Width (px)</GLabel>
                <GInput
                  placeholder="1200"
                  value={imageWidth}
                  onChange={(e) => setImageWidth(e.target.value)}
                  type="number"
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <GLabel>Height (px)</GLabel>
                <GInput
                  placeholder="630"
                  value={imageHeight}
                  onChange={(e) => setImageHeight(e.target.value)}
                  type="number"
                  className="text-sm"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <GLabel>Image alt (og:image:alt)</GLabel>
                <GInput
                  placeholder="Description of the image"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
          </div>

          {/* Optional OG */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel>Site Name (og:site_name)</GLabel>
              <GInput
                placeholder="Your site name"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <GLabel>Locale (og:locale)</GLabel>
              <GInput
                placeholder="en_US"
                value={locale}
                onChange={(e) => setLocale(e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <GLabel>OG Type</GLabel>
              <select
                value={ogType}
                onChange={(e) => setOgType(e.target.value as "website" | "article")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="website">website</option>
                <option value="article">article</option>
              </select>
            </div>
            <div className="space-y-2">
              <GLabel>Robots</GLabel>
              <select
                value={robots}
                onChange={(e) => setRobots(e.target.value as typeof robots)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="index,follow">index, follow</option>
                <option value="noindex,nofollow">noindex, nofollow</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel>Keywords (optional)</GLabel>
              <GInput
                placeholder="keyword1, keyword2"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <GLabel>Author</GLabel>
              <GInput
                placeholder="Author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <GLabel>Twitter @handle</GLabel>
              <GInput
                placeholder="@username"
                value={twitterHandle}
                onChange={(e) => setTwitterHandle(e.target.value)}
                className="text-sm"
              />
            </div>
          </div>

          <GButton
            onClick={generate}
            disabled={!title || !description}
            className="w-full h-10 text-sm font-medium"
          >
            Generate Open Graph Meta Tags
          </GButton>
        </GCardContent>
      </GCard>

      {result && (
        <GCard className="border border-border shadow-sm animate-fade-in">
          <GCardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <GCardTitle className="text-lg text-foreground">Generated open graph meta tags</GCardTitle>
              <GButton onClick={copyToClipboard} variant="outline" size="sm">
                {copied ? <Check className="mr-2 h-4 w-4 text-green-600" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </GButton>
            </div>
          </GCardHeader>
          <GCardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs leading-relaxed font-mono">
              <code>{result}</code>
            </pre>
          </GCardContent>
        </GCard>
      )}

      {/* OG meta checker links */}
      <GCard className="border border-border shadow-sm">
        <GCardHeader>
          <GCardTitle className="text-base text-foreground flex items-center gap-2">
            <Share2 className="h-4 w-4 text-primary" />
            og meta checker — Test your tags
          </GCardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Use these tools to preview and validate your open graph meta tags.
          </p>
        </GCardHeader>
        <GCardContent>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://developers.facebook.com/tools/debug/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-md border border-border hover:bg-muted/50 transition-colors"
            >
              Facebook Open Graph debugger
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://cards-dev.twitter.com/validator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-md border border-border hover:bg-muted/50 transition-colors"
            >
              Twitter Card Validator
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/post-inspector/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-md border border-border hover:bg-muted/50 transition-colors"
            >
              LinkedIn Post Inspector
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.opengraph.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-md border border-border hover:bg-muted/50 transition-colors"
            >
              OpenGraph.xyz preview
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
