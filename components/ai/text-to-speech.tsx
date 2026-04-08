"use client"

import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GTextarea } from "@/ui/gtextarea"
import { GSlider } from "@/ui/gslider"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from "@/ui/gtabs"
import {
  Play,
  Pause,
  Square,
  Volume2,
  Clock,
  Gauge,
  Music,
  RotateCcw,
  Copy,
  Check,
  Loader2,
  Download,
  Sparkles,
  Monitor,
} from "lucide-react"

// 28 verified Kokoro voices supported by onnx-community/Kokoro-82M-v1.0-ONNX
const KOKORO_VOICES = [
  // American Female (11)
  { id: "af_heart", name: "Heart", gender: "Female", accent: "American" },
  { id: "af_alloy", name: "Alloy", gender: "Female", accent: "American" },
  { id: "af_aoede", name: "Aoede", gender: "Female", accent: "American" },
  { id: "af_bella", name: "Bella", gender: "Female", accent: "American" },
  { id: "af_jessica", name: "Jessica", gender: "Female", accent: "American" },
  { id: "af_kore", name: "Kore", gender: "Female", accent: "American" },
  { id: "af_nicole", name: "Nicole", gender: "Female", accent: "American" },
  { id: "af_nova", name: "Nova", gender: "Female", accent: "American" },
  { id: "af_river", name: "River", gender: "Female", accent: "American" },
  { id: "af_sarah", name: "Sarah", gender: "Female", accent: "American" },
  { id: "af_sky", name: "Sky", gender: "Female", accent: "American" },
  // American Male (9)
  { id: "am_adam", name: "Adam", gender: "Male", accent: "American" },
  { id: "am_echo", name: "Echo", gender: "Male", accent: "American" },
  { id: "am_eric", name: "Eric", gender: "Male", accent: "American" },
  { id: "am_fenrir", name: "Fenrir", gender: "Male", accent: "American" },
  { id: "am_liam", name: "Liam", gender: "Male", accent: "American" },
  { id: "am_michael", name: "Michael", gender: "Male", accent: "American" },
  { id: "am_onyx", name: "Onyx", gender: "Male", accent: "American" },
  { id: "am_puck", name: "Puck", gender: "Male", accent: "American" },
  { id: "am_santa", name: "Santa", gender: "Male", accent: "American" },
  // British Female (4)
  { id: "bf_alice", name: "Alice", gender: "Female", accent: "British" },
  { id: "bf_emma", name: "Emma", gender: "Female", accent: "British" },
  { id: "bf_isabella", name: "Isabella", gender: "Female", accent: "British" },
  { id: "bf_lily", name: "Lily", gender: "Female", accent: "British" },
  // British Male (4)
  { id: "bm_daniel", name: "Daniel", gender: "Male", accent: "British" },
  { id: "bm_fable", name: "Fable", gender: "Male", accent: "British" },
  { id: "bm_george", name: "George", gender: "Male", accent: "British" },
  { id: "bm_lewis", name: "Lewis", gender: "Male", accent: "British" },
]

const KOKORO_ACCENTS = [
  { code: "American", name: "American English", count: 20 },
  { code: "British", name: "British English", count: 8 },
]

type EngineMode = "ai" | "browser"

const MAX_CHARS = 5000

export function TextToSpeech() {
  const [text, setText] = useState("")
  const [engineMode, setEngineMode] = useState<EngineMode>("ai")

  // Kokoro state
  const [kokoroReady, setKokoroReady] = useState(false)
  const [kokoroLoading, setKokoroLoading] = useState(false)
  const [kokoroError, setKokoroError] = useState("")
  const [loadProgress, setLoadProgress] = useState(0)
  const [selectedKokoroVoice, setSelectedKokoroVoice] = useState("af_heart")
  const [kokoroAccentFilter, setKokoroAccentFilter] = useState("all")

  // Browser TTS state
  const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([])
  const [selectedBrowserVoice, setSelectedBrowserVoice] = useState("")
  const [browserLangFilter, setBrowserLangFilter] = useState("all")

  // Shared controls
  const [speed, setSpeed] = useState(1)
  const [volume, setVolume] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const kokoroRef = useRef<any>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0

  // Load browser voices
  useEffect(() => {
    function loadVoices() {
      const available = window.speechSynthesis.getVoices()
      if (available.length > 0) {
        setBrowserVoices(available)
        if (!selectedBrowserVoice) {
          const def = available.find((v) => v.default) || available[0]
          setSelectedBrowserVoice(def.voiceURI)
        }
      }
    }
    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
    return () => { window.speechSynthesis.onvoiceschanged = null }
  }, [selectedBrowserVoice])

  // Load Kokoro model
  const loadKokoro = useCallback(async () => {
    if (kokoroReady || kokoroLoading) return
    setKokoroLoading(true)
    setKokoroError("")
    setLoadProgress(0)

    try {
      const { KokoroTTS } = await import("kokoro-js")
      const tts = await KokoroTTS.from_pretrained(
        "onnx-community/Kokoro-82M-v1.0-ONNX",
        {
          dtype: "q8" as const,
          device: "wasm" as const,
          progress_callback: (p: Record<string, unknown>) => {
            if (typeof p.progress === "number") setLoadProgress(Math.round(p.progress))
          },
        }
      )
      kokoroRef.current = tts
      setKokoroReady(true)
    } catch (err) {
      console.error("Kokoro load error:", err)
      setKokoroError("Failed to load AI voice model. Try the Browser engine instead.")
    } finally {
      setKokoroLoading(false)
    }
  }, [kokoroReady, kokoroLoading])

  // Auto-load Kokoro when AI tab is selected
  useEffect(() => {
    if (engineMode === "ai" && !kokoroReady && !kokoroLoading && !kokoroError) {
      loadKokoro()
    }
  }, [engineMode, kokoroReady, kokoroLoading, kokoroError, loadKokoro])

  // Kokoro filtered voices
  const filteredKokoroVoices = useMemo(() => {
    if (kokoroAccentFilter === "all") return KOKORO_VOICES
    return KOKORO_VOICES.filter((v) => v.accent === kokoroAccentFilter)
  }, [kokoroAccentFilter])

  // Auto-select first voice when accent filter changes
  useEffect(() => {
    const isCurrentInFiltered = filteredKokoroVoices.some((v) => v.id === selectedKokoroVoice)
    if (!isCurrentInFiltered && filteredKokoroVoices.length > 0) {
      setSelectedKokoroVoice(filteredKokoroVoices[0].id)
    }
  }, [filteredKokoroVoices, selectedKokoroVoice])

  // Browser filtered voices
  const browserLanguages = useMemo(() => {
    const langSet = new Map<string, string>()
    browserVoices.forEach((v) => {
      const code = v.lang.split("-")[0]
      if (!langSet.has(code)) {
        try {
          langSet.set(code, new Intl.DisplayNames(["en"], { type: "language" }).of(code) || code)
        } catch { langSet.set(code, code) }
      }
    })
    return Array.from(langSet.entries()).sort((a, b) => a[1].localeCompare(b[1]))
  }, [browserVoices])

  const filteredBrowserVoices = useMemo(() => {
    if (browserLangFilter === "all") return browserVoices
    return browserVoices.filter((v) => v.lang.startsWith(browserLangFilter))
  }, [browserVoices, browserLangFilter])

  // === SPEAK HANDLERS ===

  const handleSpeakKokoro = useCallback(async () => {
    if (!text.trim() || !kokoroRef.current) return
    setIsGenerating(true)
    setKokoroError("")

    try {
      const audio = await kokoroRef.current.generate(text.trim(), { voice: selectedKokoroVoice, speed })
      const blob = audio.toBlob()
      const url = URL.createObjectURL(blob)

      // Cleanup old URL
      if (audioUrl) URL.revokeObjectURL(audioUrl)
      setAudioUrl(url)

      const player = new Audio(url)
      player.volume = volume
      audioRef.current = player

      player.onended = () => {
        setIsPlaying(false)
        setIsPaused(false)
      }
      player.onerror = () => {
        setIsPlaying(false)
        setIsPaused(false)
      }

      await player.play()
      setIsPlaying(true)
    } catch (err: unknown) {
      console.error("Kokoro generate error:", err)
      const msg = err instanceof Error ? err.message : "Unknown error"
      setKokoroError(`Failed to generate speech: ${msg}. Try a shorter text or different voice.`)
    } finally {
      setIsGenerating(false)
    }
  }, [text, selectedKokoroVoice, volume, speed, audioUrl])

  const handleSpeakBrowser = useCallback(() => {
    if (!text.trim()) return
    const synth = window.speechSynthesis

    if (isPaused) {
      synth.resume()
      setIsPaused(false)
      setIsPlaying(true)
      return
    }

    synth.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    const voice = browserVoices.find((v) => v.voiceURI === selectedBrowserVoice)
    if (voice) utterance.voice = voice
    utterance.rate = speed
    utterance.volume = volume

    utterance.onend = () => { setIsPlaying(false); setIsPaused(false) }
    utterance.onerror = () => { setIsPlaying(false); setIsPaused(false) }

    synth.speak(utterance)
    setIsPlaying(true)
  }, [text, browserVoices, selectedBrowserVoice, speed, volume, isPaused])

  const handleSpeak = useCallback(() => {
    if (engineMode === "ai") handleSpeakKokoro()
    else handleSpeakBrowser()
  }, [engineMode, handleSpeakKokoro, handleSpeakBrowser])

  const handlePause = useCallback(() => {
    if (engineMode === "ai" && audioRef.current) {
      audioRef.current.pause()
    } else {
      window.speechSynthesis.pause()
    }
    setIsPaused(true)
    setIsPlaying(false)
  }, [engineMode])

  const handleResume = useCallback(() => {
    if (engineMode === "ai" && audioRef.current) {
      audioRef.current.play()
    } else {
      window.speechSynthesis.resume()
    }
    setIsPaused(false)
    setIsPlaying(true)
  }, [engineMode])

  const handleStop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setIsPaused(false)
  }, [])

  const handleDownload = useCallback(() => {
    if (!audioUrl) return
    const a = document.createElement("a")
    a.href = audioUrl
    a.download = `speech-${Date.now()}.wav`
    a.click()
  }, [audioUrl])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  const handleClear = useCallback(() => {
    handleStop()
    setText("")
    if (audioUrl) { URL.revokeObjectURL(audioUrl); setAudioUrl(null) }
  }, [handleStop, audioUrl])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel()
      if (audioRef.current) audioRef.current.pause()
    }
  }, [])

  const selectedKokoroVoiceInfo = KOKORO_VOICES.find((v) => v.id === selectedKokoroVoice)

  return (
    <div className="space-y-6">
      {/* Engine Selector */}
      <GTabs value={engineMode} onValueChange={(v) => { handleStop(); setEngineMode(v as EngineMode) }}>
        <GTabsList className="w-full">
          <GTabsTrigger value="ai" className="flex-1">
            <Sparkles className="h-4 w-4 mr-2" />
            AI Voices (Kokoro)
          </GTabsTrigger>
          <GTabsTrigger value="browser" className="flex-1">
            <Monitor className="h-4 w-4 mr-2" />
            Browser Voices
          </GTabsTrigger>
        </GTabsList>
      </GTabs>

      {/* Model Loading Status */}
      {engineMode === "ai" && kokoroLoading && (
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading AI voice model (~92 MB)...
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            First load downloads the model. It&apos;s cached for future visits.
          </p>
        </div>
      )}

      {engineMode === "ai" && kokoroError && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-500">
          {kokoroError}
          <GButton variant="outline" size="xs" className="ml-2" onClick={() => { setKokoroError(""); loadKokoro() }}>
            Retry
          </GButton>
        </div>
      )}

      {/* Text Input */}
      <GCard>
        <GCardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <GCardTitle className="text-base flex items-center gap-2">
              <Volume2 className="h-4 w-4" /> Enter Text to Speak
            </GCardTitle>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{wordCount} words</span>
              <span>&middot;</span>
              <span>{text.length.toLocaleString()}/{MAX_CHARS.toLocaleString()}</span>
            </div>
          </div>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <GTextarea
            value={text}
            onChange={(e) => {
              if (isPlaying || isPaused) handleStop()
              setText(e.target.value.slice(0, MAX_CHARS))
            }}
            placeholder="Type or paste the text you want to convert to speech. AI voices sound natural and human-like..."
            rows={8}
            className="resize-y"
          />

          {/* Playback Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {!isPlaying && !isPaused ? (
              <GButton
                onClick={handleSpeak}
                disabled={!text.trim() || isGenerating || (engineMode === "ai" && !kokoroReady)}
              >
                {isGenerating ? (
                  <><Loader2 className="h-4 w-4 mr-1.5 animate-spin" /> Generating...</>
                ) : (
                  <><Play className="h-4 w-4 mr-1.5" /> Speak</>
                )}
              </GButton>
            ) : isPaused ? (
              <GButton onClick={handleResume}>
                <Play className="h-4 w-4 mr-1.5" /> Resume
              </GButton>
            ) : (
              <GButton onClick={handlePause} variant="secondary">
                <Pause className="h-4 w-4 mr-1.5" /> Pause
              </GButton>
            )}

            <GButton variant="outline" onClick={handleStop} disabled={!isPlaying && !isPaused}>
              <Square className="h-4 w-4 mr-1.5" /> Stop
            </GButton>

            {engineMode === "ai" && audioUrl && (
              <GButton variant="outline" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-1.5" /> Download
              </GButton>
            )}

            <div className="flex-1" />

            <GButton variant="outline" size="sm" onClick={handleCopy} disabled={!text.trim()}>
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? "Copied" : "Copy"}
            </GButton>
            <GButton variant="outline" size="sm" onClick={handleClear} disabled={!text}>
              <RotateCcw className="h-4 w-4 mr-1" /> Clear
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Voice & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Voice Selection */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <Music className="h-4 w-4" /> Voice Selection
              {engineMode === "ai" && <GBadge variant="default" className="text-[10px]">AI</GBadge>}
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="space-y-4">
            {engineMode === "ai" ? (
              <>
                {/* Kokoro Accent Filter */}
                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">Accent</label>
                  <GSelect value={kokoroAccentFilter} onValueChange={setKokoroAccentFilter}>
                    <GSelectTrigger className="w-full">
                      <GSelectValue />
                    </GSelectTrigger>
                    <GSelectContent>
                      <GSelectItem value="all">All Voices ({KOKORO_VOICES.length})</GSelectItem>
                      {KOKORO_ACCENTS.map((a) => (
                        <GSelectItem key={a.code} value={a.code}>
                          {a.name} ({a.count})
                        </GSelectItem>
                      ))}
                    </GSelectContent>
                  </GSelect>
                </div>

                {/* Kokoro Voice */}
                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">Voice</label>
                  <GSelect value={selectedKokoroVoice} onValueChange={setSelectedKokoroVoice}>
                    <GSelectTrigger className="w-full">
                      <GSelectValue />
                    </GSelectTrigger>
                    <GSelectContent>
                      {filteredKokoroVoices.map((v) => (
                        <GSelectItem key={v.id} value={v.id}>
                          {v.name} ({v.gender}, {v.accent})
                        </GSelectItem>
                      ))}
                    </GSelectContent>
                  </GSelect>
                </div>

                {selectedKokoroVoiceInfo && (
                  <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-2.5 space-y-0.5">
                    <div><strong>Voice:</strong> {selectedKokoroVoiceInfo.name}</div>
                    <div><strong>Gender:</strong> {selectedKokoroVoiceInfo.gender}</div>
                    <div><strong>Accent:</strong> {selectedKokoroVoiceInfo.accent}</div>
                    <div><strong>Engine:</strong> Kokoro 82M (AI neural TTS)</div>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Browser Language Filter */}
                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">Language</label>
                  <GSelect value={browserLangFilter} onValueChange={setBrowserLangFilter}>
                    <GSelectTrigger className="w-full">
                      <GSelectValue />
                    </GSelectTrigger>
                    <GSelectContent>
                      <GSelectItem value="all">All ({browserVoices.length} voices)</GSelectItem>
                      {browserLanguages.map(([code, name]) => (
                        <GSelectItem key={code} value={code}>{name}</GSelectItem>
                      ))}
                    </GSelectContent>
                  </GSelect>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">Voice</label>
                  <GSelect value={selectedBrowserVoice} onValueChange={setSelectedBrowserVoice}>
                    <GSelectTrigger className="w-full">
                      <GSelectValue placeholder="Select voice..." />
                    </GSelectTrigger>
                    <GSelectContent>
                      {filteredBrowserVoices.map((v) => (
                        <GSelectItem key={v.voiceURI} value={v.voiceURI}>
                          {v.name} ({v.lang})
                        </GSelectItem>
                      ))}
                    </GSelectContent>
                  </GSelect>
                </div>
              </>
            )}
          </GCardContent>
        </GCard>

        {/* Audio Controls */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <Gauge className="h-4 w-4" /> Audio Controls
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">Speed</label>
                <span className="text-sm font-medium">{speed.toFixed(1)}x</span>
              </div>
              <GSlider
                value={[speed]}
                onValueChange={([v]) => setSpeed(v)}
                min={0.5}
                max={2}
                step={0.1}
              />
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>0.5x Slow</span>
                <span>1x Normal</span>
                <span>2x Fast</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground flex items-center gap-1">
                  <Volume2 className="h-3.5 w-3.5" /> Volume
                </label>
                <span className="text-sm font-medium">{Math.round(volume * 100)}%</span>
              </div>
              <GSlider
                value={[volume]}
                onValueChange={([v]) => setVolume(v)}
                min={0}
                max={1}
                step={0.05}
              />
            </div>

            <GButton
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => { setSpeed(1); setVolume(1) }}
            >
              <RotateCcw className="h-3.5 w-3.5 mr-1.5" /> Reset to Defaults
            </GButton>
          </GCardContent>
        </GCard>
      </div>

      {/* Tips */}
      <div className="rounded-lg border border-border bg-muted/30 p-3">
        <p className="text-xs text-muted-foreground">
          {engineMode === "ai" ? (
            <>
              <strong>AI Voices (Kokoro):</strong> Uses an 82M parameter neural network running directly in your browser via WebAssembly.
              The ~92MB model downloads once and is cached for future visits. Produces natural, human-like English speech
              with 28 voices across American and British accents.
              You can download the generated audio as a WAV file.
            </>
          ) : (
            <>
              <strong>Browser Voices:</strong> Uses your browser&apos;s built-in speech synthesis (Web Speech API).
              Voice quality depends on your browser and OS. Chrome offers the most voices including cloud-based ones.
              No download required — works instantly. Best for quick previews or languages not covered by AI voices.
            </>
          )}
        </p>
      </div>
    </div>
  )
}
