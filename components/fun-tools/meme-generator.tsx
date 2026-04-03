"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GSlider } from "@/ui/gslider"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from "@/ui/gtabs"
import {
  Upload,
  Download,
  Type,
  Plus,
  Trash2,
  Image as ImageIcon,
  RotateCcw,
  Search,
  Loader2,
  Move,
  GripVertical,
} from "lucide-react"

interface MemeTemplate {
  id: string
  name: string
  url: string
  width: number
  height: number
}

interface TextBox {
  id: string
  text: string
  x: number
  y: number
  fontSize: number
  fontFamily: string
  color: string
  outlineColor: string
  outlineWidth: number
  bold: boolean
  italic: boolean
  align: "left" | "center" | "right"
  maxWidth: number
}

const FONTS = [
  "Impact",
  "Arial",
  "Arial Black",
  "Comic Sans MS",
  "Courier New",
  "Georgia",
  "Helvetica",
  "Times New Roman",
  "Verdana",
]

const DEFAULT_TEXT_BOX: Omit<TextBox, "id" | "x" | "y" | "text"> = {
  fontSize: 40,
  fontFamily: "Impact",
  color: "#FFFFFF",
  outlineColor: "#000000",
  outlineWidth: 3,
  bold: false,
  italic: false,
  align: "center",
  maxWidth: 0.9,
}

function generateId() {
  return Math.random().toString(36).slice(2, 9)
}

export function MemeGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeTab, setActiveTab] = useState("templates")
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [imageName, setImageName] = useState("")
  const [templates, setTemplates] = useState<MemeTemplate[]>([])
  const [templateSearch, setTemplateSearch] = useState("")
  const [loadingTemplates, setLoadingTemplates] = useState(true)
  const [textBoxes, setTextBoxes] = useState<TextBox[]>([
    { id: generateId(), text: "TOP TEXT", x: 0.5, y: 0.08, ...DEFAULT_TEXT_BOX },
    { id: generateId(), text: "BOTTOM TEXT", x: 0.5, y: 0.92, ...DEFAULT_TEXT_BOX },
  ])
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null)
  const [dragging, setDragging] = useState<string | null>(null)
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 600 })

  // Fetch meme templates from Imgflip API
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.memes) {
          setTemplates(
            data.data.memes.slice(0, 100).map((m: { id: string; name: string; url: string; width: number; height: number }) => ({
              id: m.id,
              name: m.name,
              url: m.url,
              width: m.width,
              height: m.height,
            }))
          )
        }
      })
      .catch(() => {})
      .finally(() => setLoadingTemplates(false))
  }, [])

  const filteredTemplates = templates.filter((t) =>
    t.name.toLowerCase().includes(templateSearch.toLowerCase())
  )

  const loadImage = useCallback((src: string, name: string) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setImage(img)
      setImageName(name)
      const maxW = 600
      const scale = maxW / img.width
      setCanvasSize({
        width: Math.min(img.width, maxW),
        height: Math.round(img.height * (img.width > maxW ? scale : 1)),
      })
    }
    img.src = src
  }, [])

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = (ev) => {
        loadImage(ev.target?.result as string, file.name)
      }
      reader.readAsDataURL(file)
    },
    [loadImage]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const file = e.dataTransfer.files?.[0]
      if (!file || !file.type.startsWith("image/")) return
      const reader = new FileReader()
      reader.onload = (ev) => {
        loadImage(ev.target?.result as string, file.name)
      }
      reader.readAsDataURL(file)
    },
    [loadImage]
  )

  // Draw canvas
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !image) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvasSize.width
    canvas.height = canvasSize.height

    // Draw image
    ctx.drawImage(image, 0, 0, canvasSize.width, canvasSize.height)

    // Draw text boxes
    textBoxes.forEach((tb) => {
      const x = tb.x * canvasSize.width
      const y = tb.y * canvasSize.height
      const maxW = tb.maxWidth * canvasSize.width

      ctx.textAlign = tb.align
      ctx.textBaseline = "middle"
      const style = `${tb.italic ? "italic " : ""}${tb.bold ? "bold " : ""}${tb.fontSize}px "${tb.fontFamily}"`
      ctx.font = style

      // Word wrap
      const lines = wrapText(ctx, tb.text, maxW)
      const lineHeight = tb.fontSize * 1.2

      lines.forEach((line, i) => {
        const ly = y + (i - (lines.length - 1) / 2) * lineHeight

        // Outline
        if (tb.outlineWidth > 0) {
          ctx.strokeStyle = tb.outlineColor
          ctx.lineWidth = tb.outlineWidth * 2
          ctx.lineJoin = "round"
          ctx.miterLimit = 2
          ctx.strokeText(line, x, ly)
        }

        // Fill
        ctx.fillStyle = tb.color
        ctx.fillText(line, x, ly)
      })

      // Selection indicator
      if (tb.id === selectedTextId) {
        const metrics = lines.map((l) => ctx.measureText(l))
        const maxLineW = Math.max(...metrics.map((m) => m.width))
        const totalH = lines.length * lineHeight
        const rectX = x - maxLineW / 2 - 4
        const rectY = y - totalH / 2 - 4
        ctx.strokeStyle = "rgba(59, 130, 246, 0.8)"
        ctx.lineWidth = 2
        ctx.setLineDash([5, 3])
        ctx.strokeRect(rectX, rectY, maxLineW + 8, totalH + 8)
        ctx.setLineDash([])
      }
    })
  }, [image, canvasSize, textBoxes, selectedTextId])

  useEffect(() => {
    drawCanvas()
  }, [drawCanvas])

  function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
    if (!text) return [""]
    const words = text.split(" ")
    const lines: string[] = []
    let currentLine = words[0] || ""

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + " " + words[i]
      if (ctx.measureText(testLine).width > maxWidth) {
        lines.push(currentLine)
        currentLine = words[i]
      } else {
        currentLine = testLine
      }
    }
    lines.push(currentLine)
    return lines
  }

  // Mouse/touch handlers for dragging text
  const getCanvasCoords = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return null
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvasSize.width / rect.width
      const scaleY = canvasSize.height / rect.height
      let clientX: number, clientY: number
      if ("touches" in e) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else {
        clientX = e.clientX
        clientY = e.clientY
      }
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      }
    },
    [canvasSize]
  )

  const handleCanvasMouseDown = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const coords = getCanvasCoords(e)
      if (!coords) return

      // Find which text box was clicked
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      for (let i = textBoxes.length - 1; i >= 0; i--) {
        const tb = textBoxes[i]
        const tx = tb.x * canvasSize.width
        const ty = tb.y * canvasSize.height
        const style = `${tb.italic ? "italic " : ""}${tb.bold ? "bold " : ""}${tb.fontSize}px "${tb.fontFamily}"`
        ctx.font = style
        const lines = wrapText(ctx, tb.text, tb.maxWidth * canvasSize.width)
        const lineHeight = tb.fontSize * 1.2
        const metrics = lines.map((l) => ctx.measureText(l))
        const maxLineW = Math.max(...metrics.map((m) => m.width))
        const totalH = lines.length * lineHeight

        if (
          coords.x >= tx - maxLineW / 2 - 10 &&
          coords.x <= tx + maxLineW / 2 + 10 &&
          coords.y >= ty - totalH / 2 - 10 &&
          coords.y <= ty + totalH / 2 + 10
        ) {
          setSelectedTextId(tb.id)
          setDragging(tb.id)
          return
        }
      }
      setSelectedTextId(null)
    },
    [textBoxes, canvasSize, getCanvasCoords]
  )

  const handleCanvasMouseMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!dragging) return
      const coords = getCanvasCoords(e)
      if (!coords) return
      setTextBoxes((prev) =>
        prev.map((tb) =>
          tb.id === dragging
            ? {
                ...tb,
                x: Math.max(0.05, Math.min(0.95, coords.x / canvasSize.width)),
                y: Math.max(0.05, Math.min(0.95, coords.y / canvasSize.height)),
              }
            : tb
        )
      )
    },
    [dragging, canvasSize, getCanvasCoords]
  )

  const handleCanvasMouseUp = useCallback(() => {
    setDragging(null)
  }, [])

  const addTextBox = useCallback(() => {
    const newBox: TextBox = {
      id: generateId(),
      text: "NEW TEXT",
      x: 0.5,
      y: 0.5,
      ...DEFAULT_TEXT_BOX,
    }
    setTextBoxes((prev) => [...prev, newBox])
    setSelectedTextId(newBox.id)
  }, [])

  const removeTextBox = useCallback(
    (id: string) => {
      setTextBoxes((prev) => prev.filter((tb) => tb.id !== id))
      if (selectedTextId === id) setSelectedTextId(null)
    },
    [selectedTextId]
  )

  const updateTextBox = useCallback((id: string, updates: Partial<TextBox>) => {
    setTextBoxes((prev) => prev.map((tb) => (tb.id === id ? { ...tb, ...updates } : tb)))
  }, [])

  const resetAll = useCallback(() => {
    setImage(null)
    setImageName("")
    setTextBoxes([
      { id: generateId(), text: "TOP TEXT", x: 0.5, y: 0.08, ...DEFAULT_TEXT_BOX },
      { id: generateId(), text: "BOTTOM TEXT", x: 0.5, y: 0.92, ...DEFAULT_TEXT_BOX },
    ])
    setSelectedTextId(null)
  }, [])

  const downloadMeme = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !image) return
    // Redraw without selection indicator
    const prevSelected = selectedTextId
    setSelectedTextId(null)

    // Use requestAnimationFrame to ensure canvas redraws without selection
    requestAnimationFrame(() => {
      const link = document.createElement("a")
      link.download = `meme-${Date.now()}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
      setSelectedTextId(prevSelected)
    })
  }, [image, selectedTextId])

  const selectedBox = textBoxes.find((tb) => tb.id === selectedTextId)

  return (
    <div className="space-y-6">
      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Canvas / Upload Area */}
        <div className="space-y-4">
          {!image ? (
            <div className="space-y-4">
              <GTabs value={activeTab} onValueChange={setActiveTab}>
                <GTabsList className="w-full">
                  <GTabsTrigger value="templates" className="flex-1">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Templates
                  </GTabsTrigger>
                  <GTabsTrigger value="upload" className="flex-1">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </GTabsTrigger>
                </GTabsList>

                <GTabsContent value="templates">
                  <div className="space-y-3">
                    <GInput
                      placeholder="Search meme templates..."
                      value={templateSearch}
                      onChange={(e) => setTemplateSearch(e.target.value)}
                      leftIcon={<Search className="h-4 w-4" />}
                    />
                    {loadingTemplates ? (
                      <div className="flex items-center justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">Loading templates...</span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[420px] overflow-y-auto p-1">
                        {filteredTemplates.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => loadImage(t.url, t.name)}
                            className="group relative rounded-lg overflow-hidden border border-border hover:border-primary transition-colors aspect-square"
                          >
                            <img
                              src={t.url}
                              alt={t.name}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5">
                              <span className="text-[10px] text-white leading-tight line-clamp-2">
                                {t.name}
                              </span>
                            </div>
                          </button>
                        ))}
                        {filteredTemplates.length === 0 && !loadingTemplates && (
                          <div className="col-span-full text-center py-8 text-muted-foreground">
                            No templates found for &quot;{templateSearch}&quot;
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </GTabsContent>

                <GTabsContent value="upload">
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-lg font-medium text-foreground mb-1">
                      Drop your image here or click to upload
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports JPG, PNG, GIF, WebP
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </GTabsContent>
              </GTabs>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                  {imageName}
                </p>
                <div className="flex gap-2">
                  <GButton variant="outline" size="sm" onClick={resetAll}>
                    <RotateCcw className="h-4 w-4 mr-1" />
                    New
                  </GButton>
                  <GButton size="sm" onClick={downloadMeme}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </GButton>
                </div>
              </div>

              <div className="relative bg-muted/30 rounded-lg overflow-hidden flex items-center justify-center p-2">
                <canvas
                  ref={canvasRef}
                  className="max-w-full h-auto rounded cursor-move touch-none"
                  style={{ imageRendering: "auto" }}
                  onMouseDown={handleCanvasMouseDown}
                  onMouseMove={handleCanvasMouseMove}
                  onMouseUp={handleCanvasMouseUp}
                  onMouseLeave={handleCanvasMouseUp}
                  onTouchStart={handleCanvasMouseDown}
                  onTouchMove={handleCanvasMouseMove}
                  onTouchEnd={handleCanvasMouseUp}
                />
                <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Move className="h-3 w-3" />
                  Drag text to reposition
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Controls Panel */}
        <div className="space-y-4">
          {/* Text Boxes List */}
          <div className="rounded-lg border border-border bg-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Type className="h-4 w-4" />
                Text Layers
              </h3>
              <GButton variant="outline" size="xs" onClick={addTextBox}>
                <Plus className="h-3 w-3 mr-1" />
                Add
              </GButton>
            </div>

            <div className="space-y-2 max-h-[200px] overflow-y-auto">
              {textBoxes.map((tb) => (
                <div
                  key={tb.id}
                  onClick={() => setSelectedTextId(tb.id)}
                  className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors ${
                    selectedTextId === tb.id
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-muted/50 hover:bg-muted border border-transparent"
                  }`}
                >
                  <GripVertical className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <input
                    type="text"
                    value={tb.text}
                    onChange={(e) => updateTextBox(tb.id, { text: e.target.value })}
                    className="flex-1 bg-transparent text-sm text-foreground outline-none min-w-0"
                    placeholder="Enter text..."
                    onClick={(e) => e.stopPropagation()}
                  />
                  {textBoxes.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removeTextBox(tb.id)
                      }}
                      className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Text Styling */}
          {selectedBox && (
            <div className="rounded-lg border border-border bg-card p-4 space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Text Style</h3>

              {/* Font Family */}
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground">Font</label>
                <GSelect
                  value={selectedBox.fontFamily}
                  onValueChange={(v) => updateTextBox(selectedBox.id, { fontFamily: v })}
                >
                  <GSelectTrigger className="w-full">
                    <GSelectValue />
                  </GSelectTrigger>
                  <GSelectContent>
                    {FONTS.map((f) => (
                      <GSelectItem key={f} value={f}>
                        <span style={{ fontFamily: f }}>{f}</span>
                      </GSelectItem>
                    ))}
                  </GSelectContent>
                </GSelect>
              </div>

              {/* Font Size */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-muted-foreground">Size</label>
                  <span className="text-xs text-muted-foreground">{selectedBox.fontSize}px</span>
                </div>
                <GSlider
                  value={[selectedBox.fontSize]}
                  onValueChange={([v]) => updateTextBox(selectedBox.id, { fontSize: v })}
                  min={12}
                  max={100}
                  step={1}
                />
              </div>

              {/* Colors */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">Text Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={selectedBox.color}
                      onChange={(e) => updateTextBox(selectedBox.id, { color: e.target.value })}
                      className="h-8 w-8 rounded border border-border cursor-pointer"
                    />
                    <span className="text-xs text-muted-foreground">{selectedBox.color}</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">Outline Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={selectedBox.outlineColor}
                      onChange={(e) => updateTextBox(selectedBox.id, { outlineColor: e.target.value })}
                      className="h-8 w-8 rounded border border-border cursor-pointer"
                    />
                    <span className="text-xs text-muted-foreground">{selectedBox.outlineColor}</span>
                  </div>
                </div>
              </div>

              {/* Outline Width */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-muted-foreground">Outline Width</label>
                  <span className="text-xs text-muted-foreground">{selectedBox.outlineWidth}px</span>
                </div>
                <GSlider
                  value={[selectedBox.outlineWidth]}
                  onValueChange={([v]) => updateTextBox(selectedBox.id, { outlineWidth: v })}
                  min={0}
                  max={10}
                  step={0.5}
                />
              </div>

              {/* Bold / Italic / Align */}
              <div className="flex items-center gap-2">
                <GButton
                  variant={selectedBox.bold ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateTextBox(selectedBox.id, { bold: !selectedBox.bold })}
                  className="font-bold"
                >
                  B
                </GButton>
                <GButton
                  variant={selectedBox.italic ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateTextBox(selectedBox.id, { italic: !selectedBox.italic })}
                  className="italic"
                >
                  I
                </GButton>
                <div className="flex-1" />
                <GButton
                  variant={selectedBox.align === "left" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateTextBox(selectedBox.id, { align: "left" })}
                >
                  L
                </GButton>
                <GButton
                  variant={selectedBox.align === "center" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateTextBox(selectedBox.id, { align: "center" })}
                >
                  C
                </GButton>
                <GButton
                  variant={selectedBox.align === "right" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateTextBox(selectedBox.id, { align: "right" })}
                >
                  R
                </GButton>
              </div>
            </div>
          )}

          {/* Quick Tips */}
          {image && (
            <div className="rounded-lg border border-border bg-muted/30 p-3">
              <p className="text-xs text-muted-foreground">
                <strong>Tips:</strong> Click a text layer to edit it. Drag text on the canvas to
                reposition. Use &quot;Add&quot; for more text boxes. Download saves as PNG with no watermark.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
