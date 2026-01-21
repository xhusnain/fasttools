"use client"

import { useState, useRef } from "react"
import { Search, Loader2, Play, Pause } from "lucide-react"
import { GCard, GCardContent } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { useTranslations } from 'next-intl'

interface Phonetic {
    text?: string
    audio?: string
}

interface Definition {
    definition: string
    example?: string
    synonyms: string[]
    antonyms: string[]
}

interface Meaning {
    partOfSpeech: string
    definitions: Definition[]
    synonyms: string[]
    antonyms: string[]
}

interface DictionaryEntry {
    word: string
    phonetic?: string
    phonetics: Phonetic[]
    meanings: Meaning[]
    origin?: string
    sourceUrls: string[]
}

export function DictionarySearch() {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState<DictionaryEntry | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const t = useTranslations('dictionary')

    const searchDictionary = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        if (!query.trim()) return

        setLoading(true)
        setError(null)
        setResult(null)

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(t('wordNotFound'))
                }
                throw new Error(t('failedToSearch'))
            }

            const data = await response.json()
            if (Array.isArray(data) && data.length > 0) {
                setResult(data[0])
            } else {
                setError(t('noDefinitionFound'))
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : t('errorOccurred'))
        } finally {
            setLoading(false)
        }
    }

    const playAudio = (audioUrl: string) => {
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
            setIsPlaying(false)
        }

        const audio = new Audio(audioUrl)
        audioRef.current = audio

        audio.onended = () => setIsPlaying(false)
        audio.onpause = () => setIsPlaying(false)
        audio.onplay = () => setIsPlaying(true)

        audio.play().catch(e => {
            console.error("Audio play failed", e)
            setIsPlaying(false)
        })
    }

    const getAudioUrl = (phonetics: Phonetic[]) => {
        const withAudio = phonetics.find(p => p.audio && p.audio.length > 0)
        return withAudio?.audio || null
    }

    const getPhoneticText = (entry: DictionaryEntry) => {
        return entry.phonetic || entry.phonetics.find(p => p.text)?.text
    }

    return (
        <div className="w-full max-w-xl mx-auto my-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <GCard className="border-0 bg-black/40 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 overflow-hidden rounded-2xl">
                <GCardContent className="p-6 sm:p-8">
                    {/* Search Bar */}
                    <form onSubmit={searchDictionary} className="relative mb-8 group">
                        <div className="relative flex items-center">
                            <Search className="absolute left-4 w-5 h-5 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={t('searchPlaceholder')}
                                className="w-full h-12 pl-12 pr-28 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground/50"
                            />
                            <div className="absolute right-1">
                                <GButton
                                    type="submit"
                                    disabled={loading || !query.trim()}
                                    size="sm"
                                    className="h-10 px-4 bg-blue-600 hover:bg-blue-500 text-white border-0 rounded-lg font-medium transition-all"
                                >
                                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : t('searchButton')}
                                </GButton>
                            </div>
                        </div>
                    </form>

                    {error && (
                        <div className="text-center py-8 animate-in zoom-in-95 duration-300">
                            <p className="text-xl font-semibold text-white mb-2">😕</p>
                            <p className="text-muted-foreground">{error}</p>
                        </div>
                    )}

                    {!result && !loading && !error && (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                                {t('title')}
                            </h2>
                            <p className="text-muted-foreground text-sm">
                                {t('enterWord')}
                            </p>
                        </div>
                    )}

                    {result && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                            {/* Header: Word + Phonetic + Audio */}
                            <div className="flex items-end justify-between select-text">
                                <div>
                                    <h1 className="text-4xl sm:text-5xl font-bold text-blue-500 tracking-tight mb-2">
                                        {result.word}
                                    </h1>
                                    <p className="text-xl text-muted-foreground font-serif italic tracking-wide opacity-80">
                                        {getPhoneticText(result)}
                                    </p>
                                </div>

                                {getAudioUrl(result.phonetics) && (
                                    <button
                                        onClick={() => playAudio(getAudioUrl(result.phonetics)!)}
                                        className="relative group w-14 h-14 rounded-full bg-blue-500/10 hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                                        aria-label={t('playPronunciation')}
                                    >
                                        <div className={`absolute inset-0 rounded-full border border-blue-500/30 group-hover:border-blue-500/50 transition-colors ${isPlaying ? 'animate-ping opacity-20' : ''}`} />
                                        {isPlaying ? (
                                            <Pause className="w-6 h-6 text-blue-500 fill-current" />
                                        ) : (
                                            <Play className="w-6 h-6 text-blue-500 fill-current ml-1" />
                                        )}
                                    </button>
                                )}
                            </div>

                            {/* Divider with Particles (Simulated visual break) */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                            {/* Meanings */}
                            <div className="space-y-8 select-text">
                                {result.meanings.map((meaning, idx) => (
                                    <div key={idx} className="relative pl-6">
                                        {/* Blue vertical visual accent */}
                                        <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-blue-500/50" />

                                        <div className="flex items-center mb-3">
                                            <span className="text-lg font-bold text-white italic font-serif">
                                                {meaning.partOfSpeech}
                                            </span>
                                        </div>

                                        <ul className="space-y-4">
                                            {meaning.definitions.slice(0, 3).map((def, defIdx) => (
                                                <li key={defIdx} className="text-base text-gray-300 leading-relaxed">
                                                    {def.definition}
                                                    {def.example && (
                                                        <p className="mt-1.5 text-sm text-muted-foreground/80 italic">
                                                            "{def.example}"
                                                        </p>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>

                                        {meaning.synonyms.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2 items-center">
                                                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mr-1">{t('synonyms')}</span>
                                                {meaning.synonyms.slice(0, 4).map(syn => (
                                                    <button
                                                        key={syn}
                                                        onClick={() => {
                                                            setQuery(syn)
                                                            searchDictionary()
                                                        }}
                                                        className="px-2.5 py-1 text-xs rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 hover:border-white/20 transition-all font-medium"
                                                    >
                                                        {syn}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </GCardContent>
            </GCard>
        </div>
    )
}
