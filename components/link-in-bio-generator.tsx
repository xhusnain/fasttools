"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plus, Trash2, Eye, Copy, Check } from "lucide-react"

interface Link {
  id: string
  title: string
  url: string
}

export function LinkInBioGenerator() {
  const [profileName, setProfileName] = useState("")
  const [bio, setBio] = useState("")
  const [links, setLinks] = useState<Link[]>([{ id: "1", title: "", url: "" }])
  const [preview, setPreview] = useState(false)
  const [copied, setCopied] = useState(false)

  const addLink = () => {
    setLinks([...links, { id: Date.now().toString(), title: "", url: "" }])
  }

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id))
  }

  const updateLink = (id: string, field: "title" | "url", value: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, [field]: value } : link)))
  }

  const generateHtml = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profileName || "My Links"}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
    .container { max-width: 600px; width: 100%; background: white; border-radius: 20px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    h1 { font-size: 28px; margin-bottom: 10px; color: #333; text-align: center; }
    .bio { color: #666; text-align: center; margin-bottom: 30px; line-height: 1.6; }
    .link { display: block; padding: 16px; margin-bottom: 12px; background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; text-decoration: none; color: #333; font-weight: 500; text-align: center; transition: all 0.3s; }
    .link:hover { background: #667eea; color: white; border-color: #667eea; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4); }
  </style>
</head>
<body>
  <div class="container">
    <h1>${profileName || "My Links"}</h1>
    <p class="bio">${bio || "Welcome to my link page!"}</p>
    ${links
      .filter((link) => link.title && link.url)
      .map((link) => `<a href="${link.url}" class="link" target="_blank">${link.title}</a>`)
      .join("\n    ")}
  </div>
</body>
</html>`
    return html
  }

  const copyHtml = () => {
    navigator.clipboard.writeText(generateHtml())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border shadow-sm">
        <div className="space-y-4">
          <div>
            <Label htmlFor="profile-name" className="text-sm font-medium text-foreground">
              Profile Name
            </Label>
            <Input
              id="profile-name"
              type="text"
              placeholder="Your Name or Brand"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              className="mt-2 h-11 text-base"
            />
          </div>

          <div>
            <Label htmlFor="bio" className="text-sm font-medium text-foreground">
              Bio / Description
            </Label>
            <Input
              id="bio"
              type="text"
              placeholder="A short description about you"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-2 h-11 text-base"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-foreground">Links</Label>
            {links.map((link, index) => (
              <div key={link.id} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Link Title"
                  value={link.title}
                  onChange={(e) => updateLink(link.id, "title", e.target.value)}
                  className="h-11 text-base"
                />
                <Input
                  type="text"
                  placeholder="https://..."
                  value={link.url}
                  onChange={(e) => updateLink(link.id, "url", e.target.value)}
                  className="h-11 text-base"
                />
                {links.length > 1 && (
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => removeLink(link.id)}
                    className="h-11 w-11 flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button variant="outline" onClick={addLink} className="w-full h-10 text-sm bg-transparent">
              <Plus className="mr-2 h-4 w-4" />
              Add Link
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setPreview(!preview)}
              variant="outline"
              className="flex-1 h-11 text-base font-medium"
            >
              <Eye className="mr-2 h-5 w-5" />
              {preview ? "Hide Preview" : "Show Preview"}
            </Button>
            <Button onClick={copyHtml} className="flex-1 h-11 text-base font-medium">
              {copied ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-5 w-5" />
                  Copy HTML
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {preview && (
        <Card className="p-6 bg-card border-border shadow-sm animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-4">Preview</h3>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">{profileName || "My Links"}</h2>
              <p className="text-center text-gray-600 mb-6">{bio || "Welcome to my link page!"}</p>
              <div className="space-y-3">
                {links
                  .filter((link) => link.title && link.url)
                  .map((link) => (
                    <div
                      key={link.id}
                      className="p-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-center font-medium text-gray-900 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all cursor-pointer"
                    >
                      {link.title}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Card>
      )}

      <Card className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">How to Use</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• Enter your profile name and bio</li>
          <li>• Add your social media and website links</li>
          <li>• Preview your link page design</li>
          <li>• Copy the HTML code and host it on your website</li>
        </ul>
      </Card>
    </div>
  )
}
