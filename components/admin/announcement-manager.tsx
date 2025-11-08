"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Download, Sparkles, Music, Code, Image, Calculator, Heart, Hash } from "lucide-react"

const iconMap = {
  Download,
  Sparkles,
  Music,
  Code,
  Image,
  Calculator,
  Heart,
  Hash
}

interface Announcement {
  id: string
  title: string
  description: string
  href: string
  icon: keyof typeof iconMap
  badge?: string
  isNew?: boolean
  isLive?: boolean
  isActive?: boolean
}

const defaultAnnouncements: Announcement[] = [
  {
    id: "tiktok-downloader",
    title: "TikTok Downloader is Live!",
    description: "Download TikTok videos without watermark - HD quality, fast & secure",
    href: "/social-media-tools/tiktok-downloader",
    icon: "Download",
    badge: "New",
    isNew: true,
    isLive: true,
    isActive: true
  },
  {
    id: "ai-tools",
    title: "AI Tools Collection",
    description: "Generate captions, hashtags, lyrics, and memes with AI",
    href: "/ai-tools",
    icon: "Sparkles",
    badge: "Popular",
    isActive: false
  }
]

export function AnnouncementManager() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(defaultAnnouncements)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newAnnouncement, setNewAnnouncement] = useState<Partial<Announcement>>({
    title: "",
    description: "",
    href: "",
    icon: "Sparkles",
    badge: "",
    isNew: false,
    isLive: false,
    isActive: false
  })

  const addAnnouncement = () => {
    if (!newAnnouncement.title || !newAnnouncement.description || !newAnnouncement.href) return

    const announcement: Announcement = {
      id: Date.now().toString(),
      title: newAnnouncement.title,
      description: newAnnouncement.description,
      href: newAnnouncement.href,
      icon: newAnnouncement.icon || "Sparkles",
      badge: newAnnouncement.badge,
      isNew: newAnnouncement.isNew,
      isLive: newAnnouncement.isLive,
      isActive: newAnnouncement.isActive
    }

    setAnnouncements([announcement, ...announcements])
    setNewAnnouncement({
      title: "",
      description: "",
      href: "",
      icon: "Sparkles",
      badge: "",
      isNew: false,
      isLive: false,
      isActive: false
    })
  }

  const toggleActive = (id: string) => {
    setAnnouncements(prev =>
      prev.map(ann =>
        ann.id === id ? { ...ann, isActive: !ann.isActive } : ann
      )
    )
  }

  const deleteAnnouncement = (id: string) => {
    setAnnouncements(prev => prev.filter(ann => ann.id !== id))
  }

  const activeAnnouncement = announcements.find(ann => ann.isActive)

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Announcement Manager</h1>
        <p className="text-muted-foreground">Manage your homepage announcements and featured tools</p>
      </div>

      {}
      {activeAnnouncement && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Currently Active
              <Badge variant="secondary">Live</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                {React.createElement(iconMap[activeAnnouncement.icon], { className: "h-4 w-4" })}
              </div>
              <div>
                <h3 className="font-semibold">{activeAnnouncement.title}</h3>
                <p className="text-sm text-muted-foreground">{activeAnnouncement.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {}
      <Card>
        <CardHeader>
          <CardTitle>Add New Announcement</CardTitle>
          <CardDescription>Create a new announcement for your homepage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newAnnouncement.title || ""}
                onChange={(e) => setNewAnnouncement(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., New Tool is Live!"
              />
            </div>
            <div>
              <Label htmlFor="href">Link URL</Label>
              <Input
                id="href"
                value={newAnnouncement.href || ""}
                onChange={(e) => setNewAnnouncement(prev => ({ ...prev, href: e.target.value }))}
                placeholder="/calculator/new-tool"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={newAnnouncement.description || ""}
              onChange={(e) => setNewAnnouncement(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Brief description of the announcement"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="icon">Icon</Label>
              <select
                id="icon"
                value={newAnnouncement.icon || "Sparkles"}
                onChange={(e) => setNewAnnouncement(prev => ({ ...prev, icon: e.target.value as keyof typeof iconMap }))}
                className="w-full p-2 border rounded"
              >
                {Object.keys(iconMap).map(icon => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="badge">Badge Text</Label>
              <Input
                id="badge"
                value={newAnnouncement.badge || ""}
                onChange={(e) => setNewAnnouncement(prev => ({ ...prev, badge: e.target.value }))}
                placeholder="New, Popular, etc."
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Switch
                  id="isNew"
                  checked={newAnnouncement.isNew || false}
                  onCheckedChange={(checked) => setNewAnnouncement(prev => ({ ...prev, isNew: checked }))}
                />
                <Label htmlFor="isNew">New</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isLive"
                  checked={newAnnouncement.isLive || false}
                  onCheckedChange={(checked) => setNewAnnouncement(prev => ({ ...prev, isLive: checked }))}
                />
                <Label htmlFor="isLive">Live</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={newAnnouncement.isActive || false}
                  onCheckedChange={(checked) => setNewAnnouncement(prev => ({ ...prev, isActive: checked }))}
                />
                <Label htmlFor="isActive">Active</Label>
              </div>
            </div>
          </div>

          <Button onClick={addAnnouncement} className="w-full">
            Add Announcement
          </Button>
        </CardContent>
      </Card>

      {}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">All Announcements</h2>
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    {React.createElement(iconMap[announcement.icon], { className: "h-4 w-4" })}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{announcement.title}</h3>
                      {announcement.badge && (
                        <Badge variant="secondary">{announcement.badge}</Badge>
                      )}
                      {announcement.isNew && <Badge variant="default">New</Badge>}
                      {announcement.isLive && <Badge variant="destructive">Live</Badge>}
                      {announcement.isActive && <Badge variant="outline">Active</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{announcement.description}</p>
                    <p className="text-xs text-muted-foreground">{announcement.href}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={announcement.isActive}
                    onCheckedChange={() => toggleActive(announcement.id)}
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteAnnouncement(announcement.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
