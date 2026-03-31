"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GBadge } from "@/ui/gbadge"
import { cn } from "@/lib/utils"
import {
  Check,
  CloudRain,
  Coffee,
  Flame,
  Maximize,
  Minimize,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Settings,
  SkipForward,
  Trash2,
  TreePine,
  Volume2,
  VolumeX,
  Waves,
  Wind,
  X,
} from "lucide-react"

// ── Types ─────────────────────────────────────────────────────────
type TimerMode = "pomodoro" | "shortBreak" | "longBreak"
type SoundType = "rain" | "cafe" | "brown" | "white" | "pink" | "fire" | "ocean" | "forest"

interface Task {
  id: string
  text: string
  estimatedPomodoros: number
  completedPomodoros: number
  done: boolean
}

interface TimerSettings {
  pomodoro: number
  shortBreak: number
  longBreak: number
  longBreakInterval: number
  autoStart: boolean
}

const DEFAULT_SETTINGS: TimerSettings = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
  autoStart: false,
}

const MODE_LABELS: Record<TimerMode, string> = {
  pomodoro: "Focus",
  shortBreak: "Short Break",
  longBreak: "Long Break",
}

const MODE_COLORS: Record<TimerMode, string> = {
  pomodoro: "bg-red-500/10 border-red-500/20",
  shortBreak: "bg-emerald-500/10 border-emerald-500/20",
  longBreak: "bg-blue-500/10 border-blue-500/20",
}

const MODE_TEXT_COLORS: Record<TimerMode, string> = {
  pomodoro: "text-red-500",
  shortBreak: "text-emerald-500",
  longBreak: "text-blue-500",
}

const MODE_BTN_COLORS: Record<TimerMode, string> = {
  pomodoro: "bg-red-500 hover:bg-red-600",
  shortBreak: "bg-emerald-500 hover:bg-emerald-600",
  longBreak: "bg-blue-500 hover:bg-blue-600",
}

const SOUND_OPTIONS: { id: SoundType; label: string; icon: typeof CloudRain }[] = [
  { id: "rain", label: "Rain", icon: CloudRain },
  { id: "cafe", label: "Cafe", icon: Coffee },
  { id: "brown", label: "Brown Noise", icon: Waves },
  { id: "white", label: "White Noise", icon: Wind },
  { id: "pink", label: "Pink Noise", icon: Waves },
  { id: "fire", label: "Fireplace", icon: Flame },
  { id: "ocean", label: "Ocean", icon: Waves },
  { id: "forest", label: "Forest", icon: TreePine },
]

// ── Noise generator (Web Audio API) ──────────────────────────────
function createNoiseGenerator(ctx: AudioContext, type: "white" | "brown" | "pink"): AudioBufferSourceNode {
  const bufferSize = ctx.sampleRate * 2
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = buffer.getChannelData(0)

  if (type === "white") {
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1
  } else if (type === "brown") {
    let last = 0
    for (let i = 0; i < bufferSize; i++) {
      const w = Math.random() * 2 - 1
      last = (last + 0.02 * w) / 1.02
      data[i] = last * 3.5
    }
  } else {
    // Pink noise (Voss-McCartney)
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
    for (let i = 0; i < bufferSize; i++) {
      const w = Math.random() * 2 - 1
      b0 = 0.99886 * b0 + w * 0.0555179
      b1 = 0.99332 * b1 + w * 0.0750759
      b2 = 0.969 * b2 + w * 0.153852
      b3 = 0.8665 * b3 + w * 0.3104856
      b4 = 0.55 * b4 + w * 0.5329522
      b5 = -0.7616 * b5 - w * 0.016898
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11
      b6 = w * 0.115926
    }
  }

  const source = ctx.createBufferSource()
  source.buffer = buffer
  source.loop = true
  return source
}

// ── Format time ──────────────────────────────────────────────────
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

// ── Component ─────────────────────────────────────────────────────
export function PomodoroTimer() {
  // Timer state
  const [mode, setMode] = useState<TimerMode>("pomodoro")
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [completedPomodoros, setCompletedPomodoros] = useState(0)
  const [settings, setSettings] = useState<TimerSettings>(DEFAULT_SETTINGS)
  const [showSettings, setShowSettings] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Sound state
  const [activeSound, setActiveSound] = useState<SoundType | null>(null)
  const [soundVolume, setSoundVolume] = useState(0.3)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const sourceRef = useRef<AudioBufferSourceNode | null>(null)
  const gainRef = useRef<GainNode | null>(null)

  // Task state
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskText, setNewTaskText] = useState("")
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null)

  // Worker ref for background timing
  const workerRef = useRef<number | null>(null)

  // ── Load from localStorage ────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pomo-settings")
      if (saved) {
        const parsed = JSON.parse(saved)
        setSettings(parsed)
        setTimeLeft(parsed.pomodoro * 60)
      }
      const savedTasks = localStorage.getItem("pomo-tasks")
      if (savedTasks) setTasks(JSON.parse(savedTasks))
      const savedCount = localStorage.getItem("pomo-count")
      if (savedCount) {
        const { count, date } = JSON.parse(savedCount)
        if (date === new Date().toDateString()) setCompletedPomodoros(count)
      }
    } catch {}
  }, [])

  // ── Persist ───────────────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem("pomo-settings", JSON.stringify(settings))
  }, [settings])

  useEffect(() => {
    localStorage.setItem("pomo-tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem("pomo-count", JSON.stringify({ count: completedPomodoros, date: new Date().toDateString() }))
  }, [completedPomodoros])

  // ── Timer logic ───────────────────────────────────────────────
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      workerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    }

    return () => {
      if (workerRef.current) clearInterval(workerRef.current)
    }
  }, [isRunning, timeLeft])

  // Handle timer completion
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false)

      // Send notification
      if (Notification.permission === "granted") {
        new Notification(mode === "pomodoro" ? "Focus session complete! Time for a break." : "Break is over! Ready to focus?")
      }

      if (mode === "pomodoro") {
        const newCount = completedPomodoros + 1
        setCompletedPomodoros(newCount)

        // Update active task
        if (activeTaskId) {
          setTasks((prev) => prev.map((t) => t.id === activeTaskId ? { ...t, completedPomodoros: t.completedPomodoros + 1 } : t))
        }

        // Determine next break
        if (newCount % settings.longBreakInterval === 0) {
          switchMode("longBreak")
        } else {
          switchMode("shortBreak")
        }
      } else {
        switchMode("pomodoro")
      }
    }
  }, [timeLeft, isRunning])

  // ── Update document title ─────────────────────────────────────
  useEffect(() => {
    if (isRunning) {
      document.title = `${formatTime(timeLeft)} — ${MODE_LABELS[mode]} | FastTools`
    } else {
      document.title = "Pomodoro Timer — Free Focus Timer | FastTools"
    }
    return () => { document.title = "Pomodoro Timer — Free Focus Timer | FastTools" }
  }, [timeLeft, isRunning, mode])

  // ── Keyboard shortcuts ────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return
      if (e.code === "Space") { e.preventDefault(); toggleTimer() }
      if (e.code === "KeyR") resetTimer()
      if (e.code === "KeyS") skip()
      if (e.code === "KeyF") toggleFullscreen()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isRunning, mode, settings])

  // ── Mode switching ────────────────────────────────────────────
  const switchMode = useCallback((newMode: TimerMode) => {
    setMode(newMode)
    setIsRunning(false)
    const durations: Record<TimerMode, number> = {
      pomodoro: settings.pomodoro,
      shortBreak: settings.shortBreak,
      longBreak: settings.longBreak,
    }
    setTimeLeft(durations[newMode] * 60)
    if (settings.autoStart) {
      setTimeout(() => setIsRunning(true), 500)
    }
  }, [settings])

  const toggleTimer = () => {
    if (!isRunning && Notification.permission === "default") {
      Notification.requestPermission()
    }
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    const durations: Record<TimerMode, number> = {
      pomodoro: settings.pomodoro,
      shortBreak: settings.shortBreak,
      longBreak: settings.longBreak,
    }
    setTimeLeft(durations[mode] * 60)
  }

  const skip = () => {
    setIsRunning(false)
    if (mode === "pomodoro") {
      switchMode(completedPomodoros % settings.longBreakInterval === settings.longBreakInterval - 1 ? "longBreak" : "shortBreak")
    } else {
      switchMode("pomodoro")
    }
  }

  // ── Fullscreen ────────────────────────────────────────────────
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen?.()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener("fullscreenchange", handler)
    return () => document.removeEventListener("fullscreenchange", handler)
  }, [])

  // ── Sound controls ────────────────────────────────────────────
  const toggleSound = (soundId: SoundType) => {
    // Stop current sound
    if (sourceRef.current) {
      try { sourceRef.current.stop() } catch {}
      sourceRef.current = null
    }

    if (activeSound === soundId) {
      setActiveSound(null)
      return
    }

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext()
    }
    const ctx = audioCtxRef.current

    // Only procedural noise for now (white, brown, pink)
    if (soundId === "white" || soundId === "brown" || soundId === "pink") {
      const source = createNoiseGenerator(ctx, soundId)
      const gain = ctx.createGain()
      gain.gain.value = soundVolume
      source.connect(gain)
      gain.connect(ctx.destination)
      source.start()
      sourceRef.current = source
      gainRef.current = gain
      setActiveSound(soundId)
    } else {
      // For non-procedural sounds, use simple oscillator-based approximation
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      if (soundId === "rain" || soundId === "ocean") {
        // Low-pass filtered noise approximation
        const source = createNoiseGenerator(ctx, "pink")
        filter.type = "lowpass"
        filter.frequency.value = soundId === "rain" ? 800 : 400
        gain.gain.value = soundVolume * 0.8
        source.connect(filter)
        filter.connect(gain)
        gain.connect(ctx.destination)
        source.start()
        sourceRef.current = source
        gainRef.current = gain
      } else if (soundId === "cafe") {
        // Brown noise with midrange filter
        const source = createNoiseGenerator(ctx, "brown")
        filter.type = "bandpass"
        filter.frequency.value = 1000
        filter.Q.value = 0.5
        gain.gain.value = soundVolume * 0.6
        source.connect(filter)
        filter.connect(gain)
        gain.connect(ctx.destination)
        source.start()
        sourceRef.current = source
        gainRef.current = gain
      } else {
        // fire, forest — use pink noise with different filters
        const source = createNoiseGenerator(ctx, "brown")
        filter.type = "lowpass"
        filter.frequency.value = soundId === "fire" ? 300 : 2000
        gain.gain.value = soundVolume * 0.5
        source.connect(filter)
        filter.connect(gain)
        gain.connect(ctx.destination)
        source.start()
        sourceRef.current = source
        gainRef.current = gain
      }
      setActiveSound(soundId)
    }
  }

  // Update volume
  useEffect(() => {
    if (gainRef.current) gainRef.current.gain.value = soundVolume
  }, [soundVolume])

  // Cleanup sounds
  useEffect(() => {
    return () => {
      if (sourceRef.current) try { sourceRef.current.stop() } catch {}
    }
  }, [])

  // ── Task management ───────────────────────────────────────────
  const addTask = () => {
    if (!newTaskText.trim()) return
    const task: Task = {
      id: Date.now().toString(),
      text: newTaskText.trim(),
      estimatedPomodoros: 1,
      completedPomodoros: 0,
      done: false,
    }
    setTasks((prev) => [...prev, task])
    setNewTaskText("")
    if (!activeTaskId) setActiveTaskId(task.id)
  }

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
    if (activeTaskId === id) setActiveTaskId(null)
  }

  const toggleTaskDone = (id: string) => {
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t))
  }

  // ── Progress ──────────────────────────────────────────────────
  const totalSeconds = (mode === "pomodoro" ? settings.pomodoro : mode === "shortBreak" ? settings.shortBreak : settings.longBreak) * 60
  const progress = ((totalSeconds - timeLeft) / totalSeconds) * 100

  // ── Estimated finish time ─────────────────────────────────────
  const remainingPomodoros = tasks.filter((t) => !t.done).reduce((sum, t) => sum + Math.max(t.estimatedPomodoros - t.completedPomodoros, 0), 0)
  const estimatedMinutes = remainingPomodoros * (settings.pomodoro + settings.shortBreak)
  const finishTime = new Date(Date.now() + estimatedMinutes * 60 * 1000)

  return (
    <div className="space-y-6">
      {/* Timer Card */}
      <GCard className={cn("border-2 transition-colors", MODE_COLORS[mode])}>
        <GCardContent className="p-6 sm:p-8">
          {/* Mode Tabs */}
          <div className="flex justify-center gap-2 mb-6">
            {(["pomodoro", "shortBreak", "longBreak"] as TimerMode[]).map((m) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  mode === m ? `${MODE_BTN_COLORS[m]} text-white` : "bg-muted hover:bg-muted/80"
                )}
              >
                {MODE_LABELS[m]}
              </button>
            ))}
          </div>

          {/* Timer Display */}
          <div className="text-center">
            <div className={cn("text-8xl sm:text-9xl font-light tabular-nums tracking-tight", MODE_TEXT_COLORS[mode])}>
              {formatTime(timeLeft)}
            </div>

            {/* Progress bar */}
            <div className="mt-4 mx-auto max-w-md h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className={cn("h-full rounded-full transition-all duration-1000", mode === "pomodoro" ? "bg-red-500" : mode === "shortBreak" ? "bg-emerald-500" : "bg-blue-500")}
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <GButton variant="outline" size="sm" onClick={resetTimer} title="Reset (R)">
                <RotateCcw className="h-4 w-4" />
              </GButton>
              <button
                onClick={toggleTimer}
                className={cn(
                  "h-16 w-16 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105",
                  MODE_BTN_COLORS[mode]
                )}
                title={isRunning ? "Pause (Space)" : "Start (Space)"}
              >
                {isRunning ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 ml-1" />}
              </button>
              <GButton variant="outline" size="sm" onClick={skip} title="Skip (S)">
                <SkipForward className="h-4 w-4" />
              </GButton>
            </div>

            {/* Session counter */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {Array.from({ length: settings.longBreakInterval }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    i < completedPomodoros % settings.longBreakInterval ? "bg-red-500" : "bg-muted"
                  )}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">
                #{completedPomodoros} today
              </span>
            </div>
          </div>
        </GCardContent>
      </GCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Tasks */}
        <div className="lg:col-span-2 space-y-4">
          <GCard>
            <GCardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <GCardTitle className="text-base">Tasks</GCardTitle>
                {remainingPomodoros > 0 && (
                  <span className="text-xs text-muted-foreground">
                    ~{remainingPomodoros} pomodoros left &middot; Done by {finishTime.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
                  </span>
                )}
              </div>
            </GCardHeader>
            <GCardContent className="space-y-2">
              {/* Add task */}
              <div className="flex gap-2">
                <GInput
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTask()}
                  placeholder="What are you working on?"
                  className="flex-1"
                />
                <GButton variant="outline" size="sm" onClick={addTask}>
                  <Plus className="h-4 w-4" />
                </GButton>
              </div>

              {/* Task list */}
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => setActiveTaskId(task.id)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors",
                    activeTaskId === task.id ? "bg-primary/5 border border-primary/20" : "hover:bg-muted",
                    task.done && "opacity-50"
                  )}
                >
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleTaskDone(task.id) }}
                    className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                      task.done ? "bg-green-500 border-green-500" : "border-muted-foreground/30"
                    )}
                  >
                    {task.done && <Check className="h-3 w-3 text-white" />}
                  </button>
                  <span className={cn("flex-1 text-sm", task.done && "line-through")}>{task.text}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {task.completedPomodoros}/{task.estimatedPomodoros}
                  </span>
                  <button onClick={(e) => { e.stopPropagation(); removeTask(task.id) }} className="text-muted-foreground hover:text-red-500">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}

              {tasks.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">Add a task to get started</p>
              )}
            </GCardContent>
          </GCard>
        </div>

        {/* Right: Sounds + Settings */}
        <div className="space-y-4">
          {/* Ambient Sounds */}
          <GCard>
            <GCardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <GCardTitle className="text-base flex items-center gap-2">
                  <Volume2 className="h-4 w-4" /> Ambient Sounds
                </GCardTitle>
                {activeSound && (
                  <button onClick={() => toggleSound(activeSound)} className="text-muted-foreground hover:text-foreground">
                    <VolumeX className="h-4 w-4" />
                  </button>
                )}
              </div>
            </GCardHeader>
            <GCardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {SOUND_OPTIONS.map((sound) => {
                  const Icon = sound.icon
                  return (
                    <button
                      key={sound.id}
                      onClick={() => toggleSound(sound.id)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors",
                        activeSound === sound.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {sound.label}
                    </button>
                  )
                })}
              </div>
              {activeSound && (
                <div className="flex items-center gap-2">
                  <VolumeX className="h-3 w-3 text-muted-foreground" />
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={soundVolume}
                    onChange={(e) => setSoundVolume(parseFloat(e.target.value))}
                    className="flex-1 accent-primary h-1"
                  />
                  <Volume2 className="h-3 w-3 text-muted-foreground" />
                </div>
              )}
            </GCardContent>
          </GCard>

          {/* Settings */}
          <GCard>
            <GCardHeader className="pb-3">
              <button onClick={() => setShowSettings(!showSettings)} className="flex items-center gap-2 w-full">
                <Settings className="h-4 w-4" />
                <GCardTitle className="text-base">Settings</GCardTitle>
              </button>
            </GCardHeader>
            {showSettings && (
              <GCardContent className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <GLabel className="text-xs">Focus (min)</GLabel>
                    <GInput
                      type="number"
                      min={1}
                      max={120}
                      value={settings.pomodoro}
                      onChange={(e) => {
                        const v = parseInt(e.target.value) || 25
                        setSettings((s) => ({ ...s, pomodoro: v }))
                        if (mode === "pomodoro" && !isRunning) setTimeLeft(v * 60)
                      }}
                    />
                  </div>
                  <div>
                    <GLabel className="text-xs">Short (min)</GLabel>
                    <GInput
                      type="number"
                      min={1}
                      max={30}
                      value={settings.shortBreak}
                      onChange={(e) => {
                        const v = parseInt(e.target.value) || 5
                        setSettings((s) => ({ ...s, shortBreak: v }))
                        if (mode === "shortBreak" && !isRunning) setTimeLeft(v * 60)
                      }}
                    />
                  </div>
                  <div>
                    <GLabel className="text-xs">Long (min)</GLabel>
                    <GInput
                      type="number"
                      min={1}
                      max={60}
                      value={settings.longBreak}
                      onChange={(e) => {
                        const v = parseInt(e.target.value) || 15
                        setSettings((s) => ({ ...s, longBreak: v }))
                        if (mode === "longBreak" && !isRunning) setTimeLeft(v * 60)
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <GLabel className="text-xs">Long break after</GLabel>
                  <GInput
                    type="number"
                    min={2}
                    max={10}
                    value={settings.longBreakInterval}
                    onChange={(e) => setSettings((s) => ({ ...s, longBreakInterval: parseInt(e.target.value) || 4 }))}
                    className="w-16"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <GLabel className="text-xs">Auto-start next timer</GLabel>
                  <input
                    type="checkbox"
                    checked={settings.autoStart}
                    onChange={(e) => setSettings((s) => ({ ...s, autoStart: e.target.checked }))}
                    className="accent-primary"
                  />
                </div>
              </GCardContent>
            )}
          </GCard>

          {/* Keyboard Shortcuts */}
          <GCard>
            <GCardContent className="p-4">
              <p className="text-xs text-muted-foreground space-y-1">
                <span className="font-medium text-foreground block mb-1">Keyboard Shortcuts</span>
                <span className="block"><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono">Space</kbd> Start / Pause</span>
                <span className="block"><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono">R</kbd> Reset</span>
                <span className="block"><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono">S</kbd> Skip</span>
                <span className="block"><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono">F</kbd> Fullscreen</span>
              </p>
            </GCardContent>
          </GCard>
        </div>
      </div>
    </div>
  )
}
