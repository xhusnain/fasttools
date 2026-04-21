"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GBadge } from "@/ui/gbadge"
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from "@/ui/gtabs"
import {
  Play,
  Plus,
  Trash2,
  Shuffle,
  RotateCcw,
  Copy,
  Check,
  ChevronRight,
} from "lucide-react"

// ── Constants ──────────────────────────────────────────────────────────────────

const SLICE_COLORS = [
  "#6366f1", "#f59e0b", "#10b981", "#ef4444", "#3b82f6",
  "#ec4899", "#14b8a6", "#f97316", "#8b5cf6", "#22c55e",
  "#06b6d4", "#e11d48", "#84cc16", "#a855f7", "#0ea5e9",
  "#fb923c",
]

const DEFAULT_ITEMS = [
  "Option 1", "Option 2", "Option 3", "Option 4",
  "Option 5", "Option 6",
]

const PRESETS: Record<string, string[]> = {
  "Yes / No": ["Yes", "No"],
  "Yes / No / Maybe": ["Yes", "No", "Maybe"],
  "True / False": ["True", "False"],
  "Rock / Paper / Scissors": ["Rock", "Paper", "Scissors"],
  "Heads / Tails": ["Heads", "Tails"],
  "Days of Week": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  "Months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "Numbers 1-10": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

// ── Component ──────────────────────────────────────────────────────────────────

export function WheelSpinner() {
  const [items, setItems] = useState<string[]>(DEFAULT_ITEMS)
  const [newItem, setNewItem] = useState("")
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [resultHistory, setResultHistory] = useState<string[]>([])
  const [angle, setAngle] = useState(0)
  const [removeWinner, setRemoveWinner] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("wheel")
  const [showResult, setShowResult] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const spinStartRef = useRef(0)
  const spinDurationRef = useRef(0)
  const spinFromRef = useRef(0)
  const spinTotalRef = useRef(0)
  const currentAngleRef = useRef(0)

  // ── Draw wheel ──────────────────────────────────────────────────────────────

  const drawWheel = useCallback((rotationAngle: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    const W = canvas.width
    const cx = W / 2
    const cy = W / 2
    const r = W / 2 - 8

    ctx.clearRect(0, 0, W, W)

    const count = items.length
    if (count === 0) return

    const sliceAngle = (2 * Math.PI) / count

    // Draw slices
    items.forEach((item, i) => {
      const start = rotationAngle + i * sliceAngle - Math.PI / 2
      const end = start + sliceAngle

      // Slice fill
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.arc(cx, cy, r, start, end)
      ctx.closePath()
      ctx.fillStyle = SLICE_COLORS[i % SLICE_COLORS.length]
      ctx.fill()
      ctx.strokeStyle = "rgba(255,255,255,0.15)"
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Label
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(start + sliceAngle / 2)
      const labelR = count <= 6 ? r * 0.62 : r * 0.68
      ctx.translate(labelR, 0)
      ctx.rotate(Math.PI / 2)

      const fontSize = count <= 6 ? 15 : count <= 10 ? 12 : 10
      ctx.font = `600 ${fontSize}px system-ui, sans-serif`
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.shadowColor = "rgba(0,0,0,0.4)"
      ctx.shadowBlur = 3

      // Truncate long labels
      const maxChars = count <= 6 ? 14 : 10
      const label = item.length > maxChars ? item.slice(0, maxChars - 1) + "…" : item
      ctx.fillText(label, 0, 0)
      ctx.restore()
    })

    // Center circle
    ctx.beginPath()
    ctx.arc(cx, cy, 18, 0, 2 * Math.PI)
    ctx.fillStyle = "#1e293b"
    ctx.fill()
    ctx.strokeStyle = "rgba(255,255,255,0.3)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Center dot
    ctx.beginPath()
    ctx.arc(cx, cy, 6, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()
  }, [items])

  useEffect(() => {
    drawWheel(currentAngleRef.current)
  }, [drawWheel])

  // ── Spin logic ──────────────────────────────────────────────────────────────

  const spin = useCallback(() => {
    if (spinning || items.length < 2) return

    setResult(null)
    setShowResult(false)
    setSpinning(true)

    const extraSpins = 6 + Math.floor(Math.random() * 6) // 6–11 full rotations
    const randomOffset = Math.random() * 2 * Math.PI
    const totalRotation = extraSpins * 2 * Math.PI + randomOffset
    const duration = 3000 + Math.random() * 1500 // 3–4.5s

    spinFromRef.current = currentAngleRef.current
    spinTotalRef.current = totalRotation
    spinDurationRef.current = duration
    spinStartRef.current = performance.now()

    const animate = (now: number) => {
      const elapsed = now - spinStartRef.current
      const t = Math.min(elapsed / spinDurationRef.current, 1)
      const eased = easeOut(t)
      const currentRotation = spinFromRef.current + spinTotalRef.current * eased
      currentAngleRef.current = currentRotation
      drawWheel(currentRotation)

      if (t < 1) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        // Determine winner: the pointer is at top (12 o'clock = -π/2 from 0)
        const finalAngle = currentRotation % (2 * Math.PI)
        const sliceAngle = (2 * Math.PI) / items.length
        // Pointer points up (−π/2), find which slice is under the pointer
        const normalized = (((-finalAngle) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
        const winnerIdx = Math.floor(normalized / sliceAngle) % items.length
        const winner = items[winnerIdx]

        setResult(winner)
        setResultHistory(prev => [winner, ...prev.slice(0, 19)])
        setShowResult(true)
        setSpinning(false)

        if (removeWinner) {
          setItems(prev => prev.filter((_, i) => i !== winnerIdx))
        }
      }
    }

    animRef.current = requestAnimationFrame(animate)
  }, [spinning, items, drawWheel, removeWinner])

  // Cleanup on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  // ── Item management ─────────────────────────────────────────────────────────

  const addItem = useCallback(() => {
    const v = newItem.trim()
    if (!v || items.includes(v)) return
    setItems(prev => [...prev, v])
    setNewItem("")
  }, [newItem, items])

  const removeItem = useCallback((idx: number) => {
    setItems(prev => prev.filter((_, i) => i !== idx))
  }, [])

  const shuffleItems = useCallback(() => {
    setItems(prev => [...prev].sort(() => Math.random() - 0.5))
  }, [])

  const reset = useCallback(() => {
    setItems(DEFAULT_ITEMS)
    setResult(null)
    setResultHistory([])
    setShowResult(false)
  }, [])

  const loadPreset = useCallback((key: string) => {
    setItems(PRESETS[key])
    setResult(null)
    setShowResult(false)
  }, [])

  const copyResult = useCallback(() => {
    if (!result) return
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result])

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Wheel canvas */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-10">
              <div
                className="w-0 h-0"
                style={{
                  borderLeft: "12px solid transparent",
                  borderRight: "12px solid transparent",
                  borderTop: "28px solid #f59e0b",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
                }}
              />
            </div>
            <canvas
              ref={canvasRef}
              width={340}
              height={340}
              className="rounded-full shadow-2xl cursor-pointer"
              onClick={spin}
              title="Click to spin"
            />
          </div>

          <GButton
            size="lg"
            onClick={spin}
            disabled={spinning || items.length < 2}
            isLoading={spinning}
            leftIcon={!spinning ? <Play className="h-5 w-5" /> : undefined}
            className="w-48"
          >
            {spinning ? "Spinning…" : "Spin the Wheel"}
          </GButton>

          {/* Result banner */}
          {showResult && result && (
            <div className="w-full max-w-sm rounded-xl border-2 border-primary bg-primary/5 p-4 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Result</p>
              <p className="text-2xl font-bold text-foreground break-words">{result}</p>
              <div className="flex justify-center gap-2 mt-3">
                <GButton size="sm" variant="outline" onClick={copyResult} leftIcon={copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}>
                  {copied ? "Copied!" : "Copy"}
                </GButton>
                <GButton size="sm" variant="outline" onClick={spin} leftIcon={<RotateCcw className="h-3.5 w-3.5" />}>
                  Spin Again
                </GButton>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <GTabs value={activeTab} onValueChange={setActiveTab}>
            <GTabsList className="w-full">
              <GTabsTrigger value="wheel" className="flex-1">Items</GTabsTrigger>
              <GTabsTrigger value="presets" className="flex-1">Presets</GTabsTrigger>
              <GTabsTrigger value="history" className="flex-1">History</GTabsTrigger>
            </GTabsList>

            {/* Items tab */}
            <GTabsContent value="wheel">
              <div className="space-y-3 pt-2">
                {/* Add item */}
                <div className="flex gap-2">
                  <GInput
                    placeholder="Add an item…"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && addItem()}
                    className="flex-1"
                  />
                  <GButton size="default" onClick={addItem} disabled={!newItem.trim()} leftIcon={<Plus className="h-4 w-4" />}>
                    Add
                  </GButton>
                </div>

                {/* Items list */}
                <GCard>
                  <GCardHeader className="border-b pb-3">
                    <div className="flex items-center justify-between">
                      <GCardTitle className="text-sm">Wheel Items</GCardTitle>
                      <div className="flex items-center gap-2">
                        <GBadge variant="secondary">{items.length}</GBadge>
                        <GButton size="xs" variant="ghost" onClick={shuffleItems} title="Shuffle order">
                          <Shuffle className="h-3.5 w-3.5" />
                        </GButton>
                        <GButton size="xs" variant="ghost" onClick={reset} title="Reset to defaults">
                          <RotateCcw className="h-3.5 w-3.5" />
                        </GButton>
                      </div>
                    </div>
                  </GCardHeader>
                  <GCardContent className="p-0">
                    <div className="max-h-64 overflow-y-auto divide-y">
                      {items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-2 hover:bg-muted/30 group">
                          <div
                            className="h-3 w-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: SLICE_COLORS[i % SLICE_COLORS.length] }}
                          />
                          <span className="flex-1 text-sm truncate">{item}</span>
                          <button
                            onClick={() => removeItem(i)}
                            className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all"
                            disabled={items.length <= 2}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </GCardContent>
                </GCard>

                {/* Remove winner toggle */}
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <div
                    className={`relative w-9 h-5 rounded-full transition-colors ${removeWinner ? "bg-primary" : "bg-muted"}`}
                    onClick={() => setRemoveWinner(v => !v)}
                  >
                    <div className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${removeWinner ? "translate-x-4" : ""}`} />
                  </div>
                  <span className="text-sm text-muted-foreground">Remove winner after spin</span>
                </label>
              </div>
            </GTabsContent>

            {/* Presets tab */}
            <GTabsContent value="presets">
              <div className="pt-2 grid grid-cols-1 gap-2">
                {Object.keys(PRESETS).map(key => (
                  <button
                    key={key}
                    onClick={() => { loadPreset(key); setActiveTab("wheel") }}
                    className="flex items-center justify-between px-4 py-3 rounded-lg border hover:bg-muted/40 hover:border-primary/50 transition-colors text-left group"
                  >
                    <div>
                      <p className="text-sm font-medium">{key}</p>
                      <p className="text-xs text-muted-foreground">{PRESETS[key].join(", ")}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </GTabsContent>

            {/* History tab */}
            <GTabsContent value="history">
              <div className="pt-2 space-y-2">
                {resultHistory.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">No spins yet. Spin the wheel to see results here.</p>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-muted-foreground">{resultHistory.length} spin{resultHistory.length !== 1 ? "s" : ""}</p>
                      <GButton size="xs" variant="ghost" onClick={() => setResultHistory([])}>Clear</GButton>
                    </div>
                    {resultHistory.map((r, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/30 border">
                        <span className="text-xs text-muted-foreground w-5 text-right">{i + 1}</span>
                        <ChevronRight className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm font-medium">{r}</span>
                        {i === 0 && <GBadge variant="secondary" className="ml-auto text-xs">Latest</GBadge>}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </GTabsContent>
          </GTabs>
        </div>
      </div>
    </div>
  )
}
