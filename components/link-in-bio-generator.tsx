"use client"

import React, { useState } from "react"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plus, Trash2, Eye, Copy, Check, Code, Palette, Download, Settings, Monitor, Smartphone, Tablet, ExternalLink } from "lucide-react"
import { ColorPicker } from "@/components/color-picker"

interface Link {
  id: string
  title: string
  url: string
  type: "custom" | "social" | "email"
  platform?: string
  logo?: string
  displayMode?: "both" | "icon" | "text"
}

interface Theme {
  id: string
  name: string
  background: string
  cardBg: string
  textColor: string
  linkBg: string
  linkHover: string
  gradient: string
}

export function LinkInBioGenerator() {
  const [profileName, setProfileName] = useState("")
  const [bio, setBio] = useState("")
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [footer, setFooter] = useState("")
  const [links, setLinks] = useState<Link[]>([])
  const [textSizes, setTextSizes] = useState({
    heading: 20,
    bio: 12,
    footer: 10,
    linkButton: 12
  })
  const [selectedPlatform, setSelectedPlatform] = useState<string>("social")
  const [showAddDropdown, setShowAddDropdown] = useState(false)

  const socialMediaPlatforms = [
    { id: "instagram", name: "Instagram", logo: "https://img.icons8.com/color/48/instagram-new.png", url: "https://instagram.com/" },
    { id: "facebook", name: "Facebook", logo: "https://img.icons8.com/color/48/facebook.png", url: "https://facebook.com/" },
    { id: "twitter", name: "Twitter", logo: "https://img.icons8.com/color/48/twitter.png", url: "https://twitter.com/" },
    { id: "tiktok", name: "TikTok", logo: "https://img.icons8.com/color/48/tiktok.png", url: "https://tiktok.com/@" },
    { id: "youtube", name: "YouTube", logo: "https://img.icons8.com/color/48/youtube.png", url: "https://youtube.com/@" },
    { id: "linkedin", name: "LinkedIn", logo: "https://img.icons8.com/color/48/linkedin.png", url: "https://linkedin.com/in/" },
    { id: "snapchat", name: "Snapchat", logo: "https://img.icons8.com/color/48/snapchat.png", url: "https://snapchat.com/add/" },
    { id: "pinterest", name: "Pinterest", logo: "https://img.icons8.com/color/48/pinterest.png", url: "https://pinterest.com/" },
    { id: "discord", name: "Discord", logo: "https://img.icons8.com/color/48/discord.png", url: "https://discord.gg/" },
    { id: "telegram", name: "Telegram", logo: "https://img.icons8.com/color/48/telegram-app.png", url: "https://t.me/" },
    { id: "custom", name: "Custom", logo: "https://img.icons8.com/color/48/link.png", url: "" }
  ]

  const emailProviders = [
    { id: "gmail", name: "Gmail", logo: "https://img.icons8.com/color/48/gmail.png", domain: "@gmail.com" },
    { id: "yahoo", name: "Yahoo Mail", logo: "https://img.icons8.com/color/48/yahoo.png", domain: "@yahoo.com" },
    { id: "outlook", name: "Outlook", logo: "https://img.icons8.com/color/48/microsoft-outlook-2019.png", domain: "@outlook.com" },
    { id: "hotmail", name: "Hotmail", logo: "https://img.icons8.com/color/48/microsoft-outlook-2019.png", domain: "@hotmail.com" },
    { id: "icloud", name: "iCloud", logo: "https://img.icons8.com/color/48/icloud.png", domain: "@icloud.com" },
    { id: "protonmail", name: "ProtonMail", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/protonmail.svg", domain: "@protonmail.com" },
    { id: "aol", name: "AOL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/aol.svg", domain: "@aol.com" },
    { id: "zoho", name: "Zoho Mail", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoho.svg", domain: "@zoho.com" }
  ]
  const [preview, setPreview] = useState(false)
  const [showHtml, setShowHtml] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState("default")
  const [customColors, setCustomColors] = useState({
    background: "#667eea",
    cardBg: "#ffffff",
    textColor: "#333333",
    linkBg: "#f8f9fa",
    linkHover: "#667eea"
  })
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop")

  const themes: Theme[] = [
    {
      id: "default",
      name: "Default",
      background: "#667eea",
      cardBg: "#ffffff",
      textColor: "#333333",
      linkBg: "#f8f9fa",
      linkHover: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: "dark",
      name: "Dark Mode",
      background: "#1a1a1a",
      cardBg: "#2d2d2d",
      textColor: "#ffffff",
      linkBg: "#3a3a3a",
      linkHover: "#4f46e5",
      gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
    },
    {
      id: "sunset",
      name: "Sunset",
      background: "#ff6b6b",
      cardBg: "#ffffff",
      textColor: "#333333",
      linkBg: "#ffe0e0",
      linkHover: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)"
    },
    {
      id: "ocean",
      name: "Ocean",
      background: "#2196f3",
      cardBg: "#ffffff",
      textColor: "#333333",
      linkBg: "#e3f2fd",
      linkHover: "#2196f3",
      gradient: "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
    },
    {
      id: "forest",
      name: "Forest",
      background: "#4caf50",
      cardBg: "#ffffff",
      textColor: "#333333",
      linkBg: "#e8f5e8",
      linkHover: "#4caf50",
      gradient: "linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)"
    }
  ]

  const addLink = () => {
    if (selectedPlatform === "social") {
      addSocialMediaLink()
    } else if (selectedPlatform === "email") {
      addEmailLink()
    }
  }

  const addSocialMediaLink = (platform?: any) => {
    const newLink: Link = {
      id: Date.now().toString(),
      title: platform ? platform.name : "",
      url: platform ? platform.url : "",
      type: "social",
      platform: platform ? platform.id : "custom",
      logo: platform ? platform.logo : "https://img.icons8.com/color/48/link.png",
      displayMode: "both"
    }
    setLinks([...links, newLink])
    setShowAddDropdown(false)
  }

  const addEmailLink = (provider: any, email: string) => {
    const newLink: Link = {
      id: Date.now().toString(),
      title: `${provider.name} - ${email}`,
      url: `mailto:${email}`,
      type: "email",
      platform: provider.id,
      logo: provider.logo,
      displayMode: "both"
    }
    setLinks([...links, newLink])
    setShowAddDropdown(false)
  }


  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id))
  }

  const updateLink = (id: string, field: "title" | "url", value: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, [field]: value } : link)))
  }


  const getCurrentTheme = () => {
    if (selectedTheme === "custom") {
      return {
        background: customColors.background,
        cardBg: customColors.cardBg,
        textColor: customColors.textColor,
        linkBg: customColors.linkBg,
        linkHover: customColors.linkHover,
        gradient: `linear-gradient(135deg, ${customColors.background} 0%, ${customColors.linkHover} 100%)`
      }
    }
    return themes.find(theme => theme.id === selectedTheme) || themes[0]
  }

  const generateHtml = () => {
    const theme = getCurrentTheme()
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5">
  <title>${profileName || "My Links"}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
      background: ${theme.gradient}; 
      min-height: 100vh; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      padding: 20px; 
    }
    .container { 
      max-width: 500px; 
      width: 100%; 
      background: ${theme.cardBg}; 
      border-radius: 16px; 
      padding: 32px; 
      box-shadow: 0 16px 48px rgba(0,0,0,0.2); 
    }
    h1 { 
      font-size: ${textSizes.heading}px; 
      margin-bottom: 10px; 
      color: ${theme.textColor}; 
      text-align: center; 
    }
    .bio { 
      color: ${theme.textColor === "#ffffff" ? "#cccccc" : "#666"}; 
      font-size: ${textSizes.bio}px;
      text-align: center; 
      margin-bottom: 30px; 
      line-height: 1.6; 
    }
    .link { 
      display: block; 
      padding: 12px; 
      margin-bottom: 10px; 
      background: ${theme.linkBg}; 
      border: 2px solid ${theme.linkBg === "#ffffff" ? "#e9ecef" : theme.linkBg}; 
      border-radius: 10px; 
      text-decoration: none; 
      color: ${theme.textColor}; 
      font-weight: 500; 
      font-size: ${textSizes.linkButton}px;
      text-align: center; 
      transition: all 0.3s; 
    }
    .link:hover { 
      background: ${theme.linkHover}; 
      color: ${theme.linkBg === "#ffffff" ? "white" : theme.textColor}; 
      border-color: ${theme.linkHover}; 
      transform: translateY(-2px); 
      box-shadow: 0 4px 12px rgba(0,0,0,0.2); 
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${profileName || "My Links"}</h1>
    <p class="bio">${bio || "Welcome to my link page!"}</p>
    ${websiteUrl ? `
    <div class="website-link" style="margin-bottom: 20px;">
      <a href="${websiteUrl}" target="_blank" class="link" style="display: inline-flex; align-items: center; gap: 8px;">
        <span style="font-size: 16px;">🔗</span>
        Visit Website
      </a>
    </div>
    ` : ''}
    ${links.filter(link => link.type === "social" && link.logo && (link.displayMode === "icon" || link.displayMode === "both" || !link.displayMode)).length > 0 ? `
    <div class="social-icons" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 20px;">
    ${links
          .filter(link => link.type === "social" && link.logo && (link.displayMode === "icon" || link.displayMode === "both" || !link.displayMode))
          .map(link => `
        <div class="social-icon" style="width: 40px; height: 40px; border-radius: 50%; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s;" title="${link.title}">
          <img src="${link.logo}" alt="${link.title}" style="width: 24px; height: 24px; object-fit: contain;" />
        </div>
      `).join('')}
    </div>
    ` : ''}
    ${links
        .filter((link) => link.title && link.url && (link.displayMode === "text" || link.displayMode === "both" || !link.displayMode))
        .map((link) => {
          let logoHtml = ""
          let textHtml = link.title

          if (link.displayMode === "both" || link.displayMode === "text" || !link.displayMode) {
            logoHtml = link.logo
              ? `<img src="${link.logo}" alt="Platform logo" style="width: 20px; height: 20px; object-fit: contain; margin-right: 8px; vertical-align: middle;" />`
              : `<span style="font-size: 16px; margin-right: 8px; vertical-align: middle;">🔗</span>`
          }

          return `<a href="${link.url}" class="link" target="_blank" style="display: flex; align-items: center;">${logoHtml}${textHtml}</a>`
        })
        .join("\n    ")}
    ${footer ? `
    <div class="footer" style="margin-top: 24px; text-align: center;">
      <p style="font-size: ${textSizes.footer}px; opacity: 0.7; color: ${theme.textColor}; margin: 0;">${footer}</p>
    </div>
    ` : ''}
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
      {/* Main Editor Card */}
      <Card className="p-4 sm:p-6 bg-card border-border shadow-sm">
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="mt-2 h-11 text-base border-2 border-primary focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
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
                  className="mt-2 h-11 text-base border-2 border-primary focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div>
                <Label htmlFor="website-url" className="text-sm font-medium text-foreground">
                  Website URL (Optional)
                </Label>
                <Input
                  id="website-url"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="mt-2 h-11 text-base border-2 border-primary focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div>
                <Label htmlFor="footer" className="text-sm font-medium text-foreground">
                  Footer Text (Optional)
                </Label>
                <Input
                  id="footer"
                  type="text"
                  placeholder="Footer text (e.g., © 2024 Your Name)"
                  value={footer}
                  onChange={(e) => setFooter(e.target.value)}
                  className="mt-2 h-11 text-base border-2 border-primary focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>
          </div>

          {/* Theme Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Choose Theme
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`p-3 rounded-lg border-2 transition-all ${selectedTheme === theme.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                    }`}
                >
                  <div className="space-y-2">
                    <div
                      className="w-full h-8 rounded"
                      style={{ background: theme.gradient }}
                    />
                    <p className="text-xs font-medium text-foreground">{theme.name}</p>
                    {/* Color Section Bar */}
                    <div className="space-y-1">
                      <div className="flex gap-1">
                        <div className="flex-1 h-2 rounded" style={{ backgroundColor: theme.background }} />
                        <div className="flex-1 h-2 rounded" style={{ backgroundColor: theme.cardBg }} />
                        <div className="flex-1 h-2 rounded" style={{ backgroundColor: theme.textColor }} />
                      </div>
                      <div className="flex gap-1">
                        <div className="flex-1 h-2 rounded" style={{ backgroundColor: theme.linkBg }} />
                        <div className="flex-1 h-2 rounded" style={{ backgroundColor: theme.linkHover }} />
                        <div className="flex-1 h-2 rounded" style={{ backgroundColor: theme.background }} />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
              <button
                onClick={() => setSelectedTheme("custom")}
                className={`p-3 rounded-lg border-2 transition-all ${selectedTheme === "custom"
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                  }`}
              >
                <div className="space-y-2">
                  <div className="w-full h-8 rounded bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500" />
                  <p className="text-xs font-medium text-foreground">Custom</p>
                  {/* Custom Color Section Bar */}
                  <div className="space-y-1">
                    <div className="flex gap-1">
                      <div className="flex-1 h-2 rounded" style={{ backgroundColor: customColors.background }} />
                      <div className="flex-1 h-2 rounded" style={{ backgroundColor: customColors.cardBg }} />
                      <div className="flex-1 h-2 rounded" style={{ backgroundColor: customColors.textColor }} />
                    </div>
                    <div className="flex gap-1">
                      <div className="flex-1 h-2 rounded" style={{ backgroundColor: customColors.linkBg }} />
                      <div className="flex-1 h-2 rounded" style={{ backgroundColor: customColors.linkHover }} />
                      <div className="flex-1 h-2 rounded" style={{ backgroundColor: customColors.background }} />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Custom Colors (only show when custom theme is selected) */}
          {selectedTheme === "custom" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Custom Colors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ColorPicker
                  value={customColors.background}
                  onChange={(color) => setCustomColors({ ...customColors, background: color })}
                  label="Background Color"
                  id="custom-background"
                />
                <ColorPicker
                  value={customColors.cardBg}
                  onChange={(color) => setCustomColors({ ...customColors, cardBg: color })}
                  label="Card Background"
                  id="custom-card-bg"
                />
                <ColorPicker
                  value={customColors.textColor}
                  onChange={(color) => setCustomColors({ ...customColors, textColor: color })}
                  label="Text Color"
                  id="custom-text-color"
                />
                <ColorPicker
                  value={customColors.linkBg}
                  onChange={(color) => setCustomColors({ ...customColors, linkBg: color })}
                  label="Link Background"
                  id="custom-link-bg"
                />
                <ColorPicker
                  value={customColors.linkHover}
                  onChange={(color) => setCustomColors({ ...customColors, linkHover: color })}
                  label="Link Hover Color"
                  id="custom-link-hover"
                />
              </div>
            </div>
          )}

          {/* Text Size Customization */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Text Size Customization
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="heading-size" className="text-sm font-medium text-foreground">
                  Heading Size: {textSizes.heading}px
                </Label>
                <input
                  id="heading-size"
                  type="range"
                  min="14"
                  max="32"
                  value={textSizes.heading}
                  onChange={(e) => setTextSizes({ ...textSizes, heading: parseInt(e.target.value) })}
                  className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div>
                <Label htmlFor="bio-size" className="text-sm font-medium text-foreground">
                  Bio Text Size: {textSizes.bio}px
                </Label>
                <input
                  id="bio-size"
                  type="range"
                  min="8"
                  max="18"
                  value={textSizes.bio}
                  onChange={(e) => setTextSizes({ ...textSizes, bio: parseInt(e.target.value) })}
                  className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div>
                <Label htmlFor="footer-size" className="text-sm font-medium text-foreground">
                  Footer Size: {textSizes.footer}px
                </Label>
                <input
                  id="footer-size"
                  type="range"
                  min="6"
                  max="16"
                  value={textSizes.footer}
                  onChange={(e) => setTextSizes({ ...textSizes, footer: parseInt(e.target.value) })}
                  className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div>
                <Label htmlFor="link-size" className="text-sm font-medium text-foreground">
                  Link Button Size: {textSizes.linkButton}px
                </Label>
                <input
                  id="link-size"
                  type="range"
                  min="8"
                  max="18"
                  value={textSizes.linkButton}
                  onChange={(e) => setTextSizes({ ...textSizes, linkButton: parseInt(e.target.value) })}
                  className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Links
            </h3>
            <div className="space-y-4">
              {/* Platform Selection */}
              <div className="flex gap-2">
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="flex-1 h-11 px-3 rounded-lg border-2 border-primary focus:border-orange-600 focus:ring-2 focus:ring-orange-200 bg-background text-foreground"
                >
                  <option value="social">Social Media</option>
                  <option value="email">Email</option>
                </select>

                <GButton
                  variant="outline"
                  onClick={() => setShowAddDropdown(!showAddDropdown)}
                  className="h-11 px-4 border-2 border-primary hover:border-orange-600"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add {selectedPlatform === "custom" ? "Link" : selectedPlatform === "social" ? "Social" : "Email"}
                </GButton>
              </div>

              {/* Dropdown for Social Media and Email */}
              {showAddDropdown && (
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  {selectedPlatform === "social" && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">Select Social Media Platform</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {socialMediaPlatforms.map((platform) => (
                          <button
                            key={platform.id}
                            onClick={() => platform.id === "custom" ? addSocialMediaLink() : addSocialMediaLink(platform)}
                            className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-colors"
                          >
                            <img src={platform.logo} alt={platform.name} className="w-5 h-5 object-contain" />
                            <span className="text-sm font-medium text-foreground">{platform.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedPlatform === "email" && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">Select Email Provider</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {emailProviders.map((provider) => (
                          <button
                            key={provider.id}
                            onClick={() => {
                              const email = prompt(`Enter your ${provider.name} email:`)
                              if (email) {
                                addEmailLink(provider, email)
                              }
                            }}
                            className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-colors"
                          >
                            <img src={provider.logo} alt={provider.name} className="w-6 h-6 object-contain" />
                            <span className="text-xs font-medium text-foreground text-center">{provider.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Links List */}
              <div className="space-y-3">
                {links.map((link, index) => (
                  <div key={link.id} className="p-4 rounded-lg bg-muted/30 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      {/* Logo Display */}
                      <div className="flex items-center gap-2">
                        {link.customLogo ? (
                          <img src={link.customLogo} alt="Custom logo" className="w-6 h-6 rounded object-cover" />
                        ) : link.logo ? (
                          <span className="text-lg">{link.logo}</span>
                        ) : (
                          <div className="w-6 h-6 rounded bg-muted flex items-center justify-center">
                            <span className="text-xs">🔗</span>
                          </div>
                        )}
                      </div>

                      {/* Link Type Badge */}
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${link.type === "social" ? "bg-blue-100 text-foreground" :
                            link.type === "email" ? "bg-green-100 text-heading-accent" :
                              "bg-gray-100 text-gray-800"
                          }`}>
                          {link.type === "social" ? "Social" : link.type === "email" ? "Email" : "Custom"}
                        </span>
                      </div>

                      {/* Remove Button */}
                      <GButton
                        variant="ghost"
                        size="sm"
                        onClick={() => removeLink(link.id)}
                        className="ml-auto h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </GButton>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <Label className="text-sm font-medium text-foreground">Title</Label>
                        <Input
                          value={link.title}
                          onChange={(e) => updateLink(link.id, "title", e.target.value)}
                          placeholder="Link title"
                          className="mt-1 h-10 text-sm border-2 border-primary focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-foreground">URL</Label>
                        <Input
                          value={link.url}
                          onChange={(e) => updateLink(link.id, "url", e.target.value)}
                          placeholder="https://example.com"
                          className="mt-1 h-10 text-sm border-2 border-primary focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                    </div>

                    {/* Display Mode Selector */}
                    <div className="mt-3">
                      <Label className="text-sm font-medium text-foreground">Display Mode</Label>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => updateLink(link.id, "displayMode", "both")}
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${(link.displayMode || "both") === "both"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                        >
                          Both
                        </button>
                        <button
                          onClick={() => updateLink(link.id, "displayMode", "icon")}
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${link.displayMode === "icon"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                        >
                          Icon Only
                        </button>
                        <button
                          onClick={() => updateLink(link.id, "displayMode", "text")}
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${link.displayMode === "text"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                        >
                          Text Only
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <GButton
              onClick={() => {
                setPreview(!preview)
                if (!preview) {
                  setShowHtml(false) // Close HTML when opening preview
                }
              }}
              variant="outline"
              className="flex-1 sm:flex-none h-11 text-base font-medium"
            >
              <Eye className="mr-2 h-5 w-5" />
              {preview ? "Hide Preview" : "Show Preview"}
            </GButton>
            <GButton
              onClick={() => {
                setShowHtml(!showHtml)
                if (!showHtml) {
                  setPreview(false) // Close preview when opening HTML
                }
              }}
              variant="outline"
              className="flex-1 sm:flex-none h-11 text-base font-medium"
            >
              <Code className="mr-2 h-5 w-5" />
              {showHtml ? "Hide HTML" : "Show HTML"}
            </GButton>
            <GButton onClick={copyHtml} className="flex-1 h-11 text-base font-medium">
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
            </GButton>
            <GButton
              onClick={() => {
                const blob = new Blob([generateHtml()], { type: 'text/html' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `${profileName || 'bio-page'}.html`
                a.click()
                URL.revokeObjectURL(url)
              }}
              variant="outline"
              className="flex-1 sm:flex-none h-11 text-base font-medium"
            >
              <Download className="mr-2 h-5 w-5" />
              Download
            </GButton>
          </div>
        </div>
      </Card>

      {/* HTML Code View */}
      {showHtml && (
        <Card className="p-4 sm:p-6 bg-card border-border shadow-sm animate-fade-in max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Code className="h-5 w-5" />
              Generated HTML Code
            </h3>
            <Button
              onClick={copyHtml}
              size="sm"
              variant="outline"
              className="h-9 text-sm"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Code
                </>
              )}
            </Button>
          </div>
          <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground border border-border">
            <code>{generateHtml()}</code>
          </pre>
        </Card>
      )}

      {/* Live Preview */}
      {preview && (
        <Card className="p-4 sm:p-6 bg-card border-border shadow-sm animate-fade-in max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Live Preview
            </h3>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
              <Button
                onClick={() => setViewMode("desktop")}
                size="sm"
                variant={viewMode === "desktop" ? "default" : "outline"}
                className="h-8 text-xs"
              >
                <Monitor className="mr-1 h-3 w-3" />
                Desktop
              </Button>
              <Button
                onClick={() => setViewMode("tablet")}
                size="sm"
                variant={viewMode === "tablet" ? "default" : "outline"}
                className="h-8 text-xs"
              >
                <Tablet className="mr-1 h-3 w-3" />
                Tablet
              </Button>
              <Button
                onClick={() => setViewMode("mobile")}
                size="sm"
                variant={viewMode === "mobile" ? "default" : "outline"}
                className="h-8 text-xs"
              >
                <Smartphone className="mr-1 h-3 w-3" />
                Mobile
              </Button>
            </div>
          </div>
          <div className="flex justify-center overflow-hidden">
            {/* Mobile Preview */}
            {viewMode === "mobile" && (
              <div className="relative max-w-xs w-full">
                {/* Mobile Device Frame */}
                <div className="w-72 h-[500px] bg-muted rounded-[2rem] p-1.5 shadow-xl">
                  <div className="w-full h-full bg-card rounded-[1.5rem] overflow-hidden relative">
                    {/* Mobile Screen */}
                    <div className="w-full h-full bg-white">
                      <div
                        className="w-full h-full p-3 text-center overflow-y-auto"
                        style={{
                          background: getCurrentTheme().background
                        }}
                      >
                        {/* Mobile Profile Info */}
                        <h1
                          className="font-bold mb-2"
                          style={{
                            color: getCurrentTheme().textColor,
                            fontSize: `${textSizes.heading}px`
                          }}
                        >
                          {profileName || "Your Name"}
                        </h1>
                        <p
                          className="mb-4 leading-relaxed"
                          style={{
                            color: getCurrentTheme().textColor,
                            fontSize: `${textSizes.bio}px`
                          }}
                        >
                          {bio || "Your bio description"}
                        </p>

                        {/* Website URL */}
                        {websiteUrl && (
                          <div className="mb-4">
                            <a
                              href={websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors"
                              style={{
                                backgroundColor: getCurrentTheme().linkBg,
                                color: getCurrentTheme().textColor,
                                fontSize: `${textSizes.linkButton}px`
                              }}
                            >
                              <ExternalLink className="h-3 w-3" />
                              Visit Website
                            </a>
                          </div>
                        )}

                        {/* Social Media Icons - Only show if any link has icon-only or both mode */}
                        {links.filter(link => link.type === "social" && link.logo && (link.displayMode === "icon" || link.displayMode === "both" || !link.displayMode)).length > 0 && (
                          <div className="flex flex-wrap justify-center gap-2 mb-4 px-4">
                            {links
                              .filter(link => link.type === "social" && link.logo && (link.displayMode === "icon" || link.displayMode === "both" || !link.displayMode))
                              .map((link) => (
                                <div
                                  key={link.id}
                                  className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                                  title={link.title}
                                >
                                  <img src={link.logo} alt={link.title} className="w-4 h-4 object-contain" />
                                </div>
                              ))}
                          </div>
                        )}

                        {/* Mobile Links - Only show if any link has text-only or both mode */}
                        {links.filter(link => link.title && link.url && (link.displayMode === "text" || link.displayMode === "both" || !link.displayMode)).length > 0 && (
                          <div className="space-y-2">
                            {links
                              .filter((link) => link.title && link.url && (link.displayMode === "text" || link.displayMode === "both" || !link.displayMode))
                              .map((link) => (
                                <div
                                  key={link.id}
                                  className="p-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-2"
                                  style={{
                                    backgroundColor: getCurrentTheme().linkBg,
                                    color: getCurrentTheme().textColor,
                                    fontSize: `${textSizes.linkButton}px`
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = getCurrentTheme().linkHover
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = getCurrentTheme().linkBg
                                  }}
                                >
                                  {/* Logo Display */}
                                  {(link.displayMode === "both" || link.displayMode === "text" || !link.displayMode) && (
                                    link.customLogo ? (
                                      <img src={link.customLogo} alt="Custom logo" className="w-4 h-4 rounded object-cover" />
                                    ) : link.logo ? (
                                      <img src={link.logo} alt="Platform logo" className="w-4 h-4 object-contain" />
                                    ) : (
                                      <span className="text-xs">🔗</span>
                                    )
                                  )}
                                  {/* Text Display */}
                                  <span className="flex-1">{link.title}</span>
                                </div>
                              ))}
                          </div>
                        )}

                        {/* Footer */}
                        {footer && (
                          <div className="mt-6 px-4">
                            <p
                              className="text-center opacity-70"
                              style={{
                                color: getCurrentTheme().textColor,
                                fontSize: `${textSizes.footer}px`
                              }}
                            >
                              {footer}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tablet Preview */}
            {viewMode === "tablet" && (
              <div className="relative max-w-md w-full">
                {/* Tablet Device Frame */}
                <div className="w-[450px] h-[600px] bg-gray-600 rounded-[1.5rem] p-2.5 shadow-xl">
                  <div className="w-full h-full bg-card rounded-[1rem] overflow-hidden relative">
                    {/* Tablet Screen */}
                    <div className="w-full h-full bg-white">
                      <div
                        className="w-full h-full p-4 text-center overflow-y-auto"
                        style={{
                          background: getCurrentTheme().background
                        }}
                      >
                        {/* Tablet Profile Info */}
                        <h1
                          className="font-bold mb-3"
                          style={{
                            color: getCurrentTheme().textColor,
                            fontSize: `${textSizes.heading}px`
                          }}
                        >
                          {profileName || "Your Name"}
                        </h1>
                        <p
                          className="mb-6 leading-relaxed"
                          style={{
                            color: getCurrentTheme().textColor,
                            fontSize: `${textSizes.bio}px`
                          }}
                        >
                          {bio || "Your bio description"}
                        </p>

                        {/* Website URL */}
                        {websiteUrl && (
                          <div className="mb-6">
                            <a
                              href={websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                              style={{
                                backgroundColor: getCurrentTheme().linkBg,
                                color: getCurrentTheme().textColor,
                                fontSize: `${textSizes.linkButton}px`
                              }}
                            >
                              <ExternalLink className="h-4 w-4" />
                              Visit Website
                            </a>
                          </div>
                        )}

                        {/* Social Media Icons - Only show if any link has icon-only or both mode */}
                        {links.filter(link => link.type === "social" && link.logo && (link.displayMode === "icon" || link.displayMode === "both" || !link.displayMode)).length > 0 && (
                          <div className="flex flex-wrap justify-center gap-3 mb-6 px-4">
                            {links
                              .filter(link => link.type === "social" && link.logo && (link.displayMode === "icon" || link.displayMode === "both" || !link.displayMode))
                              .map((link) => (
                                <div
                                  key={link.id}
                                  className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                                  title={link.title}
                                >
                                  <img src={link.logo} alt={link.title} className="w-5 h-5 object-contain" />
                                </div>
                              ))}
                          </div>
                        )}

                        {/* Tablet Links - Only show if any link has text-only or both mode */}
                        {links.filter(link => link.title && link.url && (link.displayMode === "text" || link.displayMode === "both" || !link.displayMode)).length > 0 && (
                          <div className="space-y-3">
                            {links
                              .filter((link) => link.title && link.url && (link.displayMode === "text" || link.displayMode === "both" || !link.displayMode))
                              .map((link) => (
                                <div
                                  key={link.id}
                                  className="p-2.5 rounded-lg transition-colors cursor-pointer flex items-center gap-3"
                                  style={{
                                    backgroundColor: getCurrentTheme().linkBg,
                                    color: getCurrentTheme().textColor,
                                    fontSize: `${textSizes.linkButton}px`
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = getCurrentTheme().linkHover
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = getCurrentTheme().linkBg
                                  }}
                                >
                                  {/* Logo Display */}
                                  {(link.displayMode === "both" || link.displayMode === "text" || !link.displayMode) && (
                                    link.customLogo ? (
                                      <img src={link.customLogo} alt="Custom logo" className="w-5 h-5 rounded object-cover" />
                                    ) : link.logo ? (
                                      <img src={link.logo} alt="Platform logo" className="w-5 h-5 object-contain" />
                                    ) : (
                                      <span className="text-sm">🔗</span>
                                    )
                                  )}
                                  {/* Text Display */}
                                  <span className="flex-1">{link.title}</span>
                                </div>
                              ))}
                          </div>
                        )}

                        {/* Footer */}
                        {footer && (
                          <div className="mt-6 px-4">
                            <p
                              className="text-center opacity-70"
                              style={{
                                color: getCurrentTheme().textColor,
                                fontSize: `${textSizes.footer}px`
                              }}
                            >
                              {footer}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Desktop Preview */}
            {viewMode === "desktop" && (
              <div className="relative max-w-xl w-full">
                {/* Desktop Preview */}
                <div
                  className="border border-border rounded-lg overflow-hidden shadow-lg"
                  style={{
                    width: "350px",
                    maxWidth: "100%"
                  }}
                >
                  <div
                    className="p-4 text-center"
                    style={{
                      background: getCurrentTheme().background,
                      minHeight: "400px",
                      fontSize: "16px" // Desktop font size
                    }}
                  >
                    {/* Desktop Profile Info */}
                    <h1
                      className="font-bold mb-3"
                      style={{
                        color: getCurrentTheme().textColor,
                        fontSize: `${textSizes.heading}px`
                      }}
                    >
                      {profileName || "Your Name"}
                    </h1>
                    <p
                      className="mb-6 leading-relaxed"
                      style={{
                        color: getCurrentTheme().textColor,
                        fontSize: `${textSizes.bio}px`
                      }}
                    >
                      {bio || "Your bio description"}
                    </p>

                    {/* Website URL */}
                    {websiteUrl && (
                      <div className="mb-6">
                        <a
                          href={websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                          style={{
                            backgroundColor: getCurrentTheme().linkBg,
                            color: getCurrentTheme().textColor,
                            fontSize: `${textSizes.linkButton}px`
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Visit Website
                        </a>
                      </div>
                    )}

                    {/* Social Media Icons - Only show if any link has icon-only or both mode */}
                    {links.filter(link => link.type === "social" && link.logo && (link.displayMode === "icon" || link.displayMode === "both" || !link.displayMode)).length > 0 && (
                      <div className="flex flex-wrap justify-center gap-4 mb-6">
                        {links
                          .filter(link => link.type === "social" && link.logo && (link.displayMode === "icon" || link.displayMode === "both" || !link.displayMode))
                          .map((link) => (
                            <div
                              key={link.id}
                              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                              title={link.title}
                            >
                              <img src={link.logo} alt={link.title} className="w-6 h-6 object-contain" />
                            </div>
                          ))}
                      </div>
                    )}

                    {/* Desktop Links - Only show if any link has text-only or both mode */}
                    {links.filter(link => link.title && link.url && (link.displayMode === "text" || link.displayMode === "both" || !link.displayMode)).length > 0 && (
                      <div className="space-y-3">
                        {links
                          .filter((link) => link.title && link.url && (link.displayMode === "text" || link.displayMode === "both" || !link.displayMode))
                          .map((link) => (
                            <div
                              key={link.id}
                              className="p-3 rounded-lg transition-colors cursor-pointer flex items-center gap-3"
                              style={{
                                backgroundColor: getCurrentTheme().linkBg,
                                color: getCurrentTheme().textColor,
                                fontSize: `${textSizes.linkButton}px`
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = getCurrentTheme().linkHover
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = getCurrentTheme().linkBg
                              }}
                            >
                              {/* Logo Display */}
                              {(link.displayMode === "both" || link.displayMode === "text" || !link.displayMode) && (
                                link.customLogo ? (
                                  <img src={link.customLogo} alt="Custom logo" className="w-6 h-6 rounded object-cover" />
                                ) : link.logo ? (
                                  <img src={link.logo} alt="Platform logo" className="w-6 h-6 object-contain" />
                                ) : (
                                  <span className="text-base">🔗</span>
                                )
                              )}
                              {/* Text Display */}
                              <span className="flex-1">{link.title}</span>
                            </div>
                          ))}
                      </div>
                    )}

                    {/* Footer */}
                    {footer && (
                      <div className="mt-6">
                        <p
                          className="text-center opacity-70"
                          style={{
                            color: getCurrentTheme().textColor,
                            fontSize: `${textSizes.footer}px`
                          }}
                        >
                          {footer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* How to Use */}
      <Card className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">How to Use</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• Enter your profile name and bio description</li>
          <li>• Choose from pre-designed themes or create custom colors</li>
          <li>• Add your social media and website links</li>
          <li>• Preview your link page in different device sizes</li>
          <li>• Copy the HTML code or download as a file</li>
          <li>• Host the HTML file on any web hosting service</li>
        </ul>
      </Card>
    </div>
  )
}
