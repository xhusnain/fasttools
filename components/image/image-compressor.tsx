"use client"

import {useCallback, useEffect, useState} from "react"
import {useDropzone} from "react-dropzone"
import {GButton} from "@/ui/gbutton"
import {GCard} from "@/ui/gcard"
import {GSlider} from "@/ui/gslider"
import {GLabel} from "@/ui/glabel"
import {Archive, Download, RefreshCw, Trash2, Upload} from "lucide-react"
import imageCompression from "browser-image-compression"
import {cn} from "@/lib/utils"
// @ts-ignore
import JSZip from "jszip"

interface CompressedFile {
    id: string
    original: File
    compressed: Blob | null
    originalUrl: string
    compressedUrl: string | null
    compressionRate: number
    status: 'pending' | 'compressing' | 'completed' | 'error'
}

interface CompressionOptions {
    maxSizeMB: number
    maxWidthOrHeight: number
    useWebWorker: boolean
    initialQuality: number
    fileType: string
}

export function ImageCompressor() {
    const [files, setFiles] = useState<CompressedFile[]>([])
    const [isGlobalCompressing, setIsGlobalCompressing] = useState(false)
    const [options, setOptions] = useState<CompressionOptions>({
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: 0.8,
        fileType: "initial"
    })

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newFiles: CompressedFile[] = acceptedFiles.map(file => ({
            id: Math.random().toString(36).substring(7),
            original: file,
            compressed: null,
            originalUrl: URL.createObjectURL(file),
            compressedUrl: null,
            compressionRate: 0,
            status: 'pending'
        }))

        setFiles(prev => {
            // Smart defaults logic based on the *first* file added if list was empty
            const referenceFile = prev.length === 0 ? newFiles[0] : null

            if (referenceFile) {
                const fileSizeMB = referenceFile.original.size / 1024 / 1024
                const suggestedMaxMB = parseFloat((fileSizeMB * 0.9).toFixed(3))

                // Update options only on first upload to set a reasonable baseline
                // We use setTimeout to avoid setOptions conflicting during render cycle if necessary, but standard sync is fine here
                // However, we can't easily update options AND return state in one go without causing issues if we depend on 'options' in handleCompression immediately
                // So we will trigger compression in a useEffect or immediately with calculated options
            }

            return [...prev, ...newFiles]
        })
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/webp': []
        },
        maxFiles: 100
    })

    // Process pending files
    useEffect(() => {
        const pendingFiles = files.filter(f => f.status === 'pending')
        if (pendingFiles.length > 0) {
            compressFiles(pendingFiles)
        }
    }, [files])

    // Re-compress all when options change (debounced)
    useEffect(() => {
        const timer = setTimeout(() => {
            const completedFiles = files.filter(f => f.status === 'completed' || f.status === 'error')
            if (completedFiles.length > 0) {
                reCompressAll()
            }
        }, 600)
        return () => clearTimeout(timer)
    }, [options.initialQuality, options.maxSizeMB, options.maxWidthOrHeight])

    const compressFiles = async (filesToCompress: CompressedFile[], currentOptions = options) => {
        setIsGlobalCompressing(true)

        // We update the local state to show 'compressing'
        setFiles(prev => prev.map(f =>
            filesToCompress.find(ftc => ftc.id === f.id)
                ? { ...f, status: 'compressing' }
                : f
        ))

        for (const fileItem of filesToCompress) {
            try {
                // Apply smart logic per file if needed, but here we use global slider options
                // If user wants smart logic per file, they'd leave sliders alone.
                // But generally batch tools impose global settings.
                // We do implement a "cap" logic: ensure maxSize is at least respectful of file size if the global setting is ridiculous?
                // No, respect user slider.

                // Exception: If the global slider hasn't been touched (Still defaults), maybe apply per-file logic?
                // For complexity, let's stick to: Slider values rule them all.

                const compressionOptions = {
                    maxSizeMB: currentOptions.maxSizeMB,
                    maxWidthOrHeight: currentOptions.maxWidthOrHeight,
                    useWebWorker: true,
                    initialQuality: currentOptions.initialQuality,
                }

                const compressedBlob = await imageCompression(fileItem.original, compressionOptions)
                const compressedUrl = URL.createObjectURL(compressedBlob)
                const compressionRate = ((fileItem.original.size - compressedBlob.size) / fileItem.original.size) * 100

                setFiles(prev => prev.map(f => {
                    if (f.id === fileItem.id) {
                        return {
                            ...f,
                            compressed: compressedBlob,
                            compressedUrl,
                            compressionRate,
                            status: 'completed'
                        }
                    }
                    return f
                }))

            } catch (error) {
                console.error(error)
                setFiles(prev => prev.map(f =>
                    f.id === fileItem.id ? { ...f, status: 'error' } : f
                ))
            }
        }
        setIsGlobalCompressing(false)
    }

    const reCompressAll = () => {
        // Mark all as pending to re-trigger? Or just call compress manually
        // Calling manually is safer to avoid loops
        compressFiles(files)
    }

    const removeFile = (id: string, e: React.MouseEvent) => {
        e.stopPropagation()
        setFiles(prev => {
            return prev.filter(f => f.id !== id)
        })
    }

    const downloadSingle = (fileItem: CompressedFile) => {
        if (!fileItem.compressed || !fileItem.compressedUrl) return
        const link = document.createElement('a')
        link.href = fileItem.compressedUrl
        link.download = `min-${fileItem.original.name}`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const downloadAllZip = async () => {
        const zip = new JSZip()
        let count = 0

        files.forEach(fileItem => {
            if (fileItem.compressed) {
                zip.file(`min-${fileItem.original.name}`, fileItem.compressed)
                count++
            }
        })

        if (count === 0) return

        const content = await zip.generateAsync({ type: "blob" })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(content)
        link.download = "compressed-images.zip"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 B'
        const k = 1024
        const sizes = ['B', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    return (
        <div className="w-full max-w-6xl mx-auto space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">

                {/* Control Panel - Sticky on Desktop */}
                <div className="lg:col-span-1 space-y-6">
                    <GCard className="p-6 sticky top-4">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">Settings</h2>
                                {files.length > 0 && <span className="text-sm text-muted-foreground">{files.length} images</span>}
                            </div>

                            <div className="space-y-4">
                                <GLabel>Quality ({Math.round(options.initialQuality * 100)}%)</GLabel>
                                <GSlider
                                    value={[options.initialQuality]}
                                    min={0.1}
                                    max={1}
                                    step={0.05}
                                    onValueChange={([val]: number[]) => setOptions({ ...options, initialQuality: val })}
                                />
                            </div>

                            <div className="space-y-4">
                                <GLabel>Max File Size ({options.maxSizeMB} MB)</GLabel>
                                <GSlider
                                    value={[options.maxSizeMB]}
                                    min={0.01}
                                    max={5}
                                    step={0.01}
                                    onValueChange={([val]: number[]) => setOptions({ ...options, maxSizeMB: val })}
                                />
                            </div>

                            <div className="space-y-4">
                                <GLabel>Max Resolution ({options.maxWidthOrHeight}px)</GLabel>
                                <GSlider
                                    value={[options.maxWidthOrHeight]}
                                    min={100}
                                    max={4096}
                                    step={100}
                                    onValueChange={([val]: number[]) => setOptions({ ...options, maxWidthOrHeight: val })}
                                />
                            </div>

                            <div className="pt-4 space-y-3">
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <GButton variant="outline" className="w-full">
                                        <Upload className="w-4 h-4 mr-2" />
                                        Add Images
                                    </GButton>
                                </div>
                                {files.length > 0 && (
                                    <GButton
                                        className="w-full"
                                        onClick={downloadAllZip}
                                        disabled={isGlobalCompressing || files.some(f => f.status === 'compressing')}
                                    >
                                        <Archive className="w-4 h-4 mr-2" />
                                        Download All (ZIP)
                                    </GButton>
                                )}
                            </div>
                        </div>
                    </GCard>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    {files.length === 0 ? (
                        <div
                            {...getRootProps()}
                            className={cn(
                                "border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors h-[400px] flex flex-col items-center justify-center",
                                isDragActive ? "border-primary bg-muted/50" : "border-border hover:border-primary/50 hover:bg-muted/50"
                            )}
                        >
                            <input {...getInputProps()} />
                            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                                <Upload className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-semibold">Batch Image Compressor</h3>
                            <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                                Drag & drop up to 100 images here. Supports JPG, PNG, WebP.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {/* File List */}
                            {files.map((file) => (
                                <GCard key={file.id} className="p-4 overflow-hidden">
                                    <div className="flex items-center gap-4">
                                        {/* Thumbnail */}
                                        <div className="w-20 h-20 bg-muted/50 rounded-lg flex-shrink-0 overflow-hidden relative border">
                                            <img
                                                src={file.originalUrl}
                                                alt="thumb"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="font-medium truncate" title={file.original.name}>{file.original.name}</p>
                                                <p className="text-sm text-muted-foreground">{formatSize(file.original.size)}</p>
                                            </div>

                                            <div className="flex items-center justify-between md:justify-end gap-4">
                                                {file.status === 'compressing' && (
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <RefreshCw className="w-4 h-4 animate-spin" />
                                                        <span className="text-sm">Compressing...</span>
                                                    </div>
                                                )}

                                                {file.status === 'error' && (
                                                    <span className="text-sm text-red-500">Error</span>
                                                )}

                                                {file.status === 'completed' && file.compressed && (
                                                    <div className="text-right">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <p className={cn(
                                                                "font-bold",
                                                                file.compressed.size > file.original.size ? "text-red-500" : "text-green-600"
                                                            )}>
                                                                {formatSize(file.compressed.size)}
                                                            </p>
                                                            <span className={cn(
                                                                "text-xs px-1.5 py-0.5 rounded-full font-medium",
                                                                file.compressed.size > file.original.size
                                                                    ? "bg-red-100 text-red-600"
                                                                    : "bg-green-100 text-green-600"
                                                            )}>
                                                                {file.compressionRate < 0 ? '+' : '-'}
                                                                {Math.abs(file.compressionRate).toFixed(0)}%
                                                            </span>
                                                        </div>
                                                        {file.compressed.size > file.original.size && (
                                                            <p className="text-[10px] text-red-500 mt-1">Size Increased</p>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2">
                                            <GButton
                                                size="icon"
                                                variant="ghost"
                                                onClick={() => downloadSingle(file)}
                                                disabled={!file.compressed}
                                            >
                                                <Download className="w-4 h-4 text-primary" />
                                            </GButton>
                                            <GButton
                                                size="icon"
                                                variant="ghost"
                                                className="text-muted-foreground hover:text-red-500"
                                                onClick={(e) => removeFile(file.id, e)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </GButton>
                                        </div>
                                    </div>
                                </GCard>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
