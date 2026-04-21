"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from "@/ui/gtabs"
import { GInput } from "@/ui/ginput"
import { GBadge } from "@/ui/gbadge"
import {
  Play,
  Pause,
  RotateCcw,
  Flag,
  Bell,
  BellOff,
  Maximize2,
  Minimize2,
  Timer,
  Watch,
} from "lucide-react"

// ── Helpers ────────────────────────────────────────────────────────────────────

function pad(n: number, digits = 2): string {
  return String(n).padStart(digits, "0")
}

function formatCountdown(totalMs: number): { h: string; m: string; s: string } {
  const total = Math.max(0, Math.floor(totalMs / 1000))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return { h: pad(h), m: pad(m), s: pad(s) }
}

function formatStopwatch(totalMs: number): string {
  const ms = totalMs % 1000
  const total = Math.floor(totalMs / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}.${pad(Math.floor(ms / 10))}`
  return `${pad(m)}:${pad(s)}.${pad(Math.floor(ms / 10))}`
}

function playBeep(ctx: AudioContext) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.type = "sine"
  osc.frequency.setValueAtTime(880, ctx.currentTime)
  gain.gain.setValueAtTime(0.4, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8)
  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + 0.8)
}

function playDone(ctx: AudioContext) {
  const times = [0, 0.25, 0.5]
  times.forEach((t) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = "sine"
    osc.frequency.setValueAtTime(660, ctx.currentTime + t)
    osc.frequency.setValueAtTime(880, ctx.currentTime + t + 0.1)
    gain.gain.setValueAtTime(0.35, ctx.currentTime + t)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.4)
    osc.start(ctx.currentTime + t)
    osc.stop(ctx.currentTime + t + 0.4)
  })
}

const PRESETS = [
  { label: "1 min", seconds: 60 },
  { label: "3 min", seconds: 180 },
  { label: "5 min", seconds: 300 },
  { label: "10 min", seconds: 600 },
  { label: "15 min", seconds: 900 },
  { label: "25 min", seconds: 1500 },
  { label: "30 min", seconds: 1800 },
  { label: "45 min", seconds: 2700 },
  { label: "1 hr", seconds: 3600 },
]

// ── Countdown ──────────────────────────────────────────────────────────────────

function CountdownTab() {
  const [targetMs, setTargetMs] = useState(300_000) // 5 min default
  const [remainingMs, setRemainingMs] = useState(300_000)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const [soundOn, setSoundOn] = useState(true)
  const [fullscreen, setFullscreen] = useState(false)

  // Input fields (separate from running state)
  const [inputH, setInputH] = useState("0")
  const [inputM, setInputM] = useState("5")
  const [inputS, setInputS] = useState("0")

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const endTimeRef = useRef<number>(0)
  const audioCtxRef = useRef<AudioContext | null>(null)

  const getAudioCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return audioCtxRef.current
  }, [])

  const applyInput = useCallback(() => {
    const total =
      (parseInt(inputH) || 0) * 3600_000 +
      (parseInt(inputM) || 0) * 60_000 +
      (parseInt(inputS) || 0) * 1_000
    if (total > 0) {
      setTargetMs(total)
      setRemainingMs(total)
      setRunning(false)
      setFinished(false)
    }
  }, [inputH, inputM, inputS])

  const loadPreset = useCallback((seconds: number) => {
    const ms = seconds * 1000
    setTargetMs(ms)
    setRemainingMs(ms)
    setRunning(false)
    setFinished(false)
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    setInputH(String(h))
    setInputM(String(m))
    setInputS(String(s))
  }, [])

  const start = useCallback(() => {
    if (remainingMs <= 0) return
    endTimeRef.current = Date.now() + remainingMs
    setRunning(true)
    setFinished(false)
    if (soundOn) playBeep(getAudioCtx())
  }, [remainingMs, soundOn, getAudioCtx])

  const pause = useCallback(() => {
    setRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  const reset = useCallback(() => {
    setRunning(false)
    setFinished(false)
    setRemainingMs(targetMs)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [targetMs])

  const adjustTime = useCallback((deltaSeconds: number) => {
    setRemainingMs(prev => {
      const next = Math.max(0, prev + deltaSeconds * 1000)
      if (running) endTimeRef.current = Date.now() + next
      return next
    })
  }, [running])

  useEffect(() => {
    if (!running) return
    intervalRef.current = setInterval(() => {
      const left = endTimeRef.current - Date.now()
      if (left <= 0) {
        setRemainingMs(0)
        setRunning(false)
        setFinished(true)
        clearInterval(intervalRef.current!)
        if (soundOn) playDone(getAudioCtx())
      } else {
        setRemainingMs(left)
      }
    }, 100)
    return () => clearInterval(intervalRef.current!)
  }, [running, soundOn, getAudioCtx])

  const { h, m, s } = formatCountdown(remainingMs)
  const progress = targetMs > 0 ? (remainingMs / targetMs) * 100 : 0
  const circumference = 2 * Math.PI * 88

  const wrapperCls = fullscreen
    ? "fixed inset-0 z-50 bg-background flex flex-col items-center justify-center p-8 gap-8"
    : "space-y-6"

  return (
    <div className={wrapperCls}>
      {/* Progress ring + display */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <svg width="220" height="220" className="-rotate-90">
            <circle cx="110" cy="110" r="88" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
            <circle
              cx="110" cy="110" r="88" fill="none"
              stroke={finished ? "hsl(var(--destructive))" : "hsl(var(--primary))"}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress / 100)}
              className="transition-all duration-200"
            />
          </svg>
          <div className="absolute flex flex-col items-center select-none">
            <span className={`font-mono font-bold tracking-tight ${fullscreen ? "text-7xl" : "text-5xl"} ${finished ? "text-destructive animate-pulse" : "text-foreground"}`}>
              {h !== "00" ? `${h}:${m}:${s}` : `${m}:${s}`}
            </span>
            {finished && <span className="text-sm text-destructive font-medium mt-1">Time&apos;s up!</span>}
          </div>
        </div>

        {/* +/- quick adjust */}
        {!running && !finished && (
          <div className="flex items-center gap-2">
            {[-60, -30, -10].map(d => (
              <GButton key={d} size="xs" variant="outline" onClick={() => adjustTime(d)}>{d}s</GButton>
            ))}
            <span className="text-xs text-muted-foreground px-1">adjust</span>
            {[10, 30, 60].map(d => (
              <GButton key={d} size="xs" variant="outline" onClick={() => adjustTime(d)}>+{d}s</GButton>
            ))}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {!running ? (
          <GButton size="lg" onClick={start} disabled={remainingMs <= 0} leftIcon={<Play className="h-5 w-5" />}>
            {remainingMs < targetMs && remainingMs > 0 ? "Resume" : "Start"}
          </GButton>
        ) : (
          <GButton size="lg" variant="outline" onClick={pause} leftIcon={<Pause className="h-5 w-5" />}>
            Pause
          </GButton>
        )}
        <GButton size="lg" variant="outline" onClick={reset} leftIcon={<RotateCcw className="h-4 w-4" />}>
          Reset
        </GButton>
        <GButton size="icon" variant="ghost" onClick={() => setSoundOn(v => !v)} title={soundOn ? "Mute alarm" : "Unmute alarm"}>
          {soundOn ? <Bell className="h-5 w-5" /> : <BellOff className="h-5 w-5 text-muted-foreground" />}
        </GButton>
        <GButton size="icon" variant="ghost" onClick={() => setFullscreen(v => !v)} title="Toggle fullscreen">
          {fullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
        </GButton>
      </div>

      {!fullscreen && (
        <>
          {/* Custom time input */}
          <GCard>
            <GCardHeader className="border-b pb-3">
              <GCardTitle className="text-sm">Set Custom Time</GCardTitle>
            </GCardHeader>
            <GCardContent className="pt-4">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex flex-col items-center gap-1">
                  <label className="text-xs text-muted-foreground">Hours</label>
                  <GInput
                    type="number" min="0" max="99"
                    value={inputH}
                    onChange={e => setInputH(e.target.value)}
                    className="w-16 text-center font-mono"
                  />
                </div>
                <span className="text-xl font-bold text-muted-foreground mt-4">:</span>
                <div className="flex flex-col items-center gap-1">
                  <label className="text-xs text-muted-foreground">Minutes</label>
                  <GInput
                    type="number" min="0" max="59"
                    value={inputM}
                    onChange={e => setInputM(e.target.value)}
                    className="w-16 text-center font-mono"
                  />
                </div>
                <span className="text-xl font-bold text-muted-foreground mt-4">:</span>
                <div className="flex flex-col items-center gap-1">
                  <label className="text-xs text-muted-foreground">Seconds</label>
                  <GInput
                    type="number" min="0" max="59"
                    value={inputS}
                    onChange={e => setInputS(e.target.value)}
                    className="w-16 text-center font-mono"
                  />
                </div>
                <GButton className="mt-4" onClick={applyInput}>Set Timer</GButton>
              </div>
            </GCardContent>
          </GCard>

          {/* Presets */}
          <GCard>
            <GCardHeader className="border-b pb-3">
              <GCardTitle className="text-sm">Quick Presets</GCardTitle>
            </GCardHeader>
            <GCardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {PRESETS.map(p => (
                  <GButton
                    key={p.seconds}
                    size="sm"
                    variant={targetMs === p.seconds * 1000 ? "default" : "outline"}
                    onClick={() => loadPreset(p.seconds)}
                  >
                    {p.label}
                  </GButton>
                ))}
              </div>
            </GCardContent>
          </GCard>
        </>
      )}
    </div>
  )
}

// ── Stopwatch ──────────────────────────────────────────────────────────────────

interface Lap {
  index: number
  split: number
  total: number
}

function StopwatchTab() {
  const [elapsedMs, setElapsedMs] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState<Lap[]>([])
  const [fullscreen, setFullscreen] = useState(false)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef(0)
  const accumulatedRef = useRef(0)

  const start = useCallback(() => {
    startTimeRef.current = Date.now()
    setRunning(true)
  }, [])

  const pause = useCallback(() => {
    accumulatedRef.current += Date.now() - startTimeRef.current
    setRunning(false)
  }, [])

  const reset = useCallback(() => {
    setRunning(false)
    setElapsedMs(0)
    setLaps([])
    accumulatedRef.current = 0
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  const lap = useCallback(() => {
    const total = accumulatedRef.current + (Date.now() - startTimeRef.current)
    const prev = laps.length > 0 ? laps[laps.length - 1].total : 0
    setLaps(prev => [...prev, { index: prev.length + 1, split: total - prev[prev.length - 1]?.total || total, total }])
  }, [laps])

  useEffect(() => {
    if (!running) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setElapsedMs(accumulatedRef.current + (Date.now() - startTimeRef.current))
    }, 30)
    return () => clearInterval(intervalRef.current!)
  }, [running])

  // Fastest/slowest lap indices
  const fastestIdx = laps.length > 1
    ? laps.reduce((best, l) => l.split < laps[best].split ? l.index - 1 : best, 0)
    : -1
  const slowestIdx = laps.length > 1
    ? laps.reduce((worst, l) => l.split > laps[worst].split ? l.index - 1 : worst, 0)
    : -1

  const wrapperCls = fullscreen
    ? "fixed inset-0 z-50 bg-background flex flex-col items-center justify-center p-8 gap-8"
    : "space-y-6"

  return (
    <div className={wrapperCls}>
      {/* Display */}
      <div className="flex flex-col items-center gap-2">
        <span className={`font-mono font-bold tracking-tight tabular-nums ${fullscreen ? "text-8xl" : "text-6xl"} text-foreground select-none`}>
          {formatStopwatch(elapsedMs)}
        </span>
        {laps.length > 0 && (
          <span className="text-sm text-muted-foreground font-mono">
            Lap {laps.length + 1}: {formatStopwatch(elapsedMs - laps[laps.length - 1].total)}
          </span>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {!running ? (
          <GButton size="lg" onClick={start} leftIcon={<Play className="h-5 w-5" />}>
            {elapsedMs > 0 ? "Resume" : "Start"}
          </GButton>
        ) : (
          <GButton size="lg" variant="outline" onClick={pause} leftIcon={<Pause className="h-5 w-5" />}>
            Pause
          </GButton>
        )}
        {running && (
          <GButton size="lg" variant="outline" onClick={lap} leftIcon={<Flag className="h-4 w-4" />}>
            Lap
          </GButton>
        )}
        <GButton size="lg" variant="outline" onClick={reset} leftIcon={<RotateCcw className="h-4 w-4" />}>
          Reset
        </GButton>
        <GButton size="icon" variant="ghost" onClick={() => setFullscreen(v => !v)} title="Toggle fullscreen">
          {fullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
        </GButton>
      </div>

      {/* Lap table */}
      {!fullscreen && laps.length > 0 && (
        <GCard>
          <GCardHeader className="border-b pb-3">
            <div className="flex items-center justify-between">
              <GCardTitle className="text-sm">Lap Times</GCardTitle>
              <GBadge variant="secondary">{laps.length} laps</GBadge>
            </div>
          </GCardHeader>
          <GCardContent className="pt-3 p-0">
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground text-xs">
                    <th className="py-2 px-4 text-left font-medium">Lap</th>
                    <th className="py-2 px-4 text-right font-medium">Split</th>
                    <th className="py-2 px-4 text-right font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[...laps].reverse().map((l, ri) => {
                    const origIdx = laps.length - 1 - ri
                    const isFastest = origIdx === fastestIdx
                    const isSlowest = origIdx === slowestIdx
                    return (
                      <tr key={l.index} className={`border-b last:border-0 ${isFastest ? "text-emerald-500" : isSlowest ? "text-red-500" : ""}`}>
                        <td className="py-2 px-4">
                          Lap {l.index}
                          {isFastest && <span className="ml-2 text-xs text-emerald-500">fastest</span>}
                          {isSlowest && <span className="ml-2 text-xs text-red-500">slowest</span>}
                        </td>
                        <td className="py-2 px-4 text-right font-mono">{formatStopwatch(l.split)}</td>
                        <td className="py-2 px-4 text-right font-mono text-muted-foreground">{formatStopwatch(l.total)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}

// ── Root Component ─────────────────────────────────────────────────────────────

export function CountdownTimer() {
  const [activeTab, setActiveTab] = useState("countdown")

  return (
    <div className="space-y-4">
      <GTabs value={activeTab} onValueChange={setActiveTab}>
        <GTabsList className="w-full max-w-sm mx-auto">
          <GTabsTrigger value="countdown" className="flex-1 gap-2">
            <Timer className="h-4 w-4" /> Countdown
          </GTabsTrigger>
          <GTabsTrigger value="stopwatch" className="flex-1 gap-2">
            <Watch className="h-4 w-4" /> Stopwatch
          </GTabsTrigger>
        </GTabsList>

        <GTabsContent value="countdown">
          <CountdownTab />
        </GTabsContent>

        <GTabsContent value="stopwatch">
          <StopwatchTab />
        </GTabsContent>
      </GTabs>
    </div>
  )
}
