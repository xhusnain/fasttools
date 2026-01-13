"use client"

import { useState, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent } from "@/ui/gcard"
import { GSlider } from "@/ui/gslider"
import { GLabel } from "@/ui/glabel"
import { Download, Upload, RefreshCw } from "lucide-react"
import imageCompression from "browser-image-compression"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface CompressedFile {
    original: File
    compressed: Blob
    originalUrl: string
    compressedUrl: string
    compressionRate: number
}

interface CompressionOptions {
    maxSizeMB: number
    maxWidthOrHeight: number
    useWebWorker: boolean
    quality: number
    fileType: string
}

export function ImageCompressor() {
    const [file, setFile] = useState<CompressedFile | null>(null)
    const [isCompressing, setIsCompressing] = useState(false)
    const [options, setOptions] = useState<CompressionOptions>({
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        quality: 0.8,
        fileType: "initial" // initial, image/jpeg, image/png, image/webp
    })

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0]
        if (selectedFile) {
            handleCompression(selectedFile)
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/webp': []
        },
        maxFiles: 1
    })

    const handleCompression = async (originalFile: File, currentOptions: CompressionOptions = options) => {
        setIsCompressing(true)
        try {
            const compressionOptions = {
                ...currentOptions,
                maxSizeMB: currentOptions.maxSizeMB,
                maxWidthOrHeight: currentOptions.maxWidthOrHeight,
                useWebWorker: true,
                ...(currentOptions.fileType !== 'initial' && { fileType: currentOptions.fileType })
            }

            const compressedBlob = await imageCompression(originalFile, compressionOptions)

            const originalUrl = URL.createObjectURL(originalFile)
            const compressedUrl = URL.createObjectURL(compressedBlob)

            const compressionRate = ((originalFile.size - compressedBlob.size) / originalFile.size) * 100

            setFile({
                original: originalFile,
                compressed: compressedBlob,
                originalUrl,
                compressedUrl,
                compressionRate
            })
        } catch (error) {
            console.error(error)
            toast.error("Error compressing image")
        } finally {
            setIsCompressing(false)
        }
    }

    // Re-compress when options change if file exists
    useEffect(() => {
        if (file) {
            const timeoutId = setTimeout(() => {
                handleCompression(file.original, options)
            }, 500) // Debounce slider changes
            return () => clearTimeout(timeoutId)
        }
    }, [options.quality, options.maxSizeMB, options.fileType])

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    const downloadImage = () => {
        if (!file) return
        const link = document.createElement('a')
        link.href = file.compressedUrl
        link.download = `compressed-${file.original.name.split('.')[0]}.${file.compressed.type.split('/')[1]}`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            {!file ? (
                <div
                    {...getRootProps()}
                    className={cn(
                        "border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors hover:border-primary/50 hover:bg-muted/50",
                        isDragActive ? "border-primary bg-muted/50" : "border-border"
                    )}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-4 rounded-full bg-primary/10 text-primary">
                            <Upload className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Upload an image to compress</h3>
                            <p className="text-muted-foreground mt-2">
                                Drag and drop or click to select. Supports JPG, PNG, WebP up to 10MB.
                            </p>
                        </div>
                        <GButton>Select Image</GButton>
                    </div>
                </div>
            ) : (
                <div className="space-y-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Compression Settings</h2>
                        <GButton variant="outline" onClick={() => setFile(null)}>
                            Upload New Image
                        </GButton>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <GCard className="p-6 space-y-6 md:col-span-2">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <GLabel>Original</GLabel>
                                    <div className="aspect-video relative rounded-lg overflow-hidden border bg-muted/50 flex items-center justify-center">
                                        <img
                                            src={file.originalUrl}
                                            alt="Original"
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                    <div className="text-sm text-center">
                                        <p className="font-medium">{formatSize(file.original.size)}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <GLabel>Compressed</GLabel>
                                    <div className="aspect-video relative rounded-lg overflow-hidden border bg-muted/50 flex items-center justify-center">
                                        {isCompressing ? (
                                            <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground" />
                                        ) : (
                                            <img
                                                src={file.compressedUrl}
                                                alt="Compressed"
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        )}
                                    </div>
                                    <div className="text-sm text-center">
                                        <p className="font-medium text-green-600">
                                            {formatSize(file.compressed.size)}
                                            <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                                                -{file.compressionRate.toFixed(0)}%
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </GCard>

                        <GCard className="p-6 space-y-6">
                            <GCardContent className="space-y-6 p-0">
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <GLabel>Max Size (MB)</GLabel>
                                        <span className="text-sm text-muted-foreground">{options.maxSizeMB} MB</span>
                                    </div>
                                    <GSlider
                                        value={[options.maxSizeMB]}
                                        min={0.1}
                                        max={10}
                                        step={0.1}
                                        onValueChange={([val]: number[]) => setOptions({ ...options, maxSizeMB: val })}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <GLabel>Max Width/Height</GLabel>
                                        <span className="text-sm text-muted-foreground">{options.maxWidthOrHeight}px</span>
                                    </div>
                                    <GSlider
                                        value={[options.maxWidthOrHeight]}
                                        min={100}
                                        max={4096}
                                        step={100}
                                        onValueChange={([val]: number[]) => setOptions({ ...options, maxWidthOrHeight: val })}
                                    />
                                </div>

                                <div className="pt-4">
                                    <GButton
                                        className="w-full"
                                        size="lg"
                                        onClick={downloadImage}
                                        disabled={isCompressing}
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Compressed
                                    </GButton>
                                </div>
                            </GCardContent>
                        </GCard>
                    </div>
                </div>
            )}
        </div>
    )
}
