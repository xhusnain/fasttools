"use client"

import { useCallback, useState, useRef } from "react"
import { useDropzone } from "react-dropzone"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"
import { GProgress } from "@/ui/gprogress"
import {
    Upload,
    Shield,
    ShieldAlert,
    ShieldCheck,
    ShieldQuestion,
    Camera,
    Binary,
    Waves,
    BarChart3,
    Fingerprint,
    RefreshCw,
    Info,
    ChevronDown,
    ChevronUp,
    X,
    AlertTriangle,
} from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────

interface AnalysisSignal {
    name: string
    icon: React.ReactNode
    score: number // 0-100 (0 = likely real, 100 = likely AI)
    weight: number
    verdict: "real" | "suspicious" | "ai" | "inconclusive"
    details: string[]
    description: string
}

interface ContextFlag {
    type: "warning" | "info" | "adjustment"
    label: string
    description: string
    scoreAdjustment: number // negative = shift toward real, positive = shift toward AI
}

interface AnalysisResult {
    signals: AnalysisSignal[]
    overallScore: number
    verdict: "likely_real" | "likely_ai" | "uncertain" | "screenshot"
    verdictLabel: string
    verdictDescription: string
    screenshotDetected?: boolean
    screenshotInfo?: ScreenshotInfo
    contextFlags: ContextFlag[]
}

// ─── Analysis Engine ─────────────────────────────────────────────────

async function loadImageToCanvas(file: File): Promise<{ canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; width: number; height: number }> {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
            // Limit to 1024px max dimension for performance
            const maxDim = 1024
            let w = img.width
            let h = img.height
            if (w > maxDim || h > maxDim) {
                const ratio = Math.min(maxDim / w, maxDim / h)
                w = Math.round(w * ratio)
                h = Math.round(h * ratio)
            }
            const canvas = document.createElement("canvas")
            canvas.width = w
            canvas.height = h
            const ctx = canvas.getContext("2d")!
            ctx.drawImage(img, 0, 0, w, h)
            resolve({ canvas, ctx, width: w, height: h })
        }
        img.onerror = reject
        img.src = URL.createObjectURL(file)
    })
}

function getPixelData(ctx: CanvasRenderingContext2D, w: number, h: number): ImageData {
    return ctx.getImageData(0, 0, w, h)
}

// ─── Screenshot Detection ────────────────────────────────────────────

interface ScreenshotInfo {
    isScreenshot: boolean
    confidence: number // 0-100
    reasons: string[]
}

function detectScreenshot(
    file: File,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    exifTags?: Record<string, any>
): ScreenshotInfo {
    const reasons: string[] = []
    let score = 0

    // 1. Check file name patterns
    const name = file.name.toLowerCase()
    const screenshotNames = [
        "screenshot", "screen shot", "screen_shot", "captura",
        "bildschirmfoto", "schermafbeelding", "capture d'écran",
        "снимок экрана", "スクリーンショット",
    ]
    const screenRecordPatterns = [
        /^img_\d{4}/, /^image_\d+/, /^screen/, /^shot_/,
        /^simulator screen/, /^clipboard/,
        // macOS: "Screenshot 2026-03-09 at 14.30.00"
        /^screenshot\s?\d{4}[-_]\d{2}[-_]\d{2}/,
        // Windows: "Screenshot (123)" or "Snip_20260309"
        /^screenshot\s?\(\d+\)/, /^snip_?\d*/,
        // Samsung/Android: "Screenshot_20260309-143000"
        /^screenshot_\d{8}[-_]\d{6}/,
        // Chrome: often saves as webpage title
    ]

    if (screenshotNames.some(s => name.includes(s))) {
        score += 40
        reasons.push("Filename contains 'screenshot'")
    } else if (screenRecordPatterns.some(p => p.test(name))) {
        score += 30
        reasons.push("Filename matches screenshot naming pattern")
    }

    // 2. Check common screen dimensions
    const commonScreenDims = [
        // iPhones
        [1170, 2532], [1179, 2556], [1290, 2796], [1284, 2778],
        [1125, 2436], [1080, 2340], [1242, 2688], [750, 1334],
        [1080, 1920], [828, 1792],
        // iPads
        [2048, 2732], [2360, 1640], [2388, 1668], [2732, 2048],
        [1620, 2160], [2160, 1620],
        // Android common
        [1080, 2400], [1080, 2340], [1440, 3200], [1440, 3120],
        [1080, 2160], [1440, 2960], [1080, 2280],
        // Desktop common
        [1920, 1080], [2560, 1440], [3840, 2160], [1366, 768],
        [1536, 864], [1440, 900], [1280, 720], [1280, 800],
        // Mac Retina
        [2880, 1800], [3024, 1964], [3456, 2234], [2560, 1600],
        [5120, 2880], [3840, 2400],
    ]

    const dimMatch = commonScreenDims.some(([w, h]) =>
        (width === w && height === h) || (width === h && height === w)
    )
    if (dimMatch) {
        score += 25
        reasons.push(`Dimensions (${width}x${height}) match a common screen resolution`)
    }

    // 3. Check for flat UI-like color regions (status bars, nav bars)
    // Sample top 40px and bottom 40px for solid/near-solid color rows
    const imageData = ctx.getImageData(0, 0, width, height)
    const data = imageData.data

    function isRowNearSolid(y: number, tolerance: number = 8): boolean {
        const startIdx = y * width * 4
        const r0 = data[startIdx], g0 = data[startIdx + 1], b0 = data[startIdx + 2]
        let matchCount = 0
        const sampleStep = Math.max(1, Math.floor(width / 50))
        let totalSampled = 0

        for (let x = 0; x < width; x += sampleStep) {
            const idx = (y * width + x) * 4
            if (Math.abs(data[idx] - r0) <= tolerance &&
                Math.abs(data[idx + 1] - g0) <= tolerance &&
                Math.abs(data[idx + 2] - b0) <= tolerance) {
                matchCount++
            }
            totalSampled++
        }
        return totalSampled > 0 && (matchCount / totalSampled) > 0.85
    }

    // Check top rows (status bar area)
    let solidTopRows = 0
    const checkRows = Math.min(60, Math.floor(height * 0.05))
    for (let y = 0; y < checkRows; y++) {
        if (isRowNearSolid(y)) solidTopRows++
    }

    // Check bottom rows (navigation bar area)
    let solidBottomRows = 0
    for (let y = height - checkRows; y < height; y++) {
        if (isRowNearSolid(y)) solidBottomRows++
    }

    const topBarRatio = solidTopRows / checkRows
    const bottomBarRatio = solidBottomRows / checkRows

    if (topBarRatio > 0.7 && bottomBarRatio > 0.5) {
        score += 25
        reasons.push("Solid-color bands detected at top and bottom (UI bars)")
    } else if (topBarRatio > 0.7 || bottomBarRatio > 0.7) {
        score += 15
        reasons.push("Solid-color band detected (possible status/nav bar)")
    }

    // 4. Check for perfect pixel boundaries (sharp UI edges)
    // Screenshots have many perfectly horizontal/vertical sharp edges
    let sharpEdgeCount = 0
    let totalChecked = 0
    const edgeSampleStep = Math.max(2, Math.floor(height / 100))

    for (let y = 1; y < height - 1; y += edgeSampleStep) {
        for (let x = 1; x < width - 1; x += Math.max(2, Math.floor(width / 100))) {
            const idx = (y * width + x) * 4
            const idxAbove = ((y - 1) * width + x) * 4
            const idxLeft = (y * width + (x - 1)) * 4

            const diffV = Math.abs(data[idx] - data[idxAbove]) +
                Math.abs(data[idx + 1] - data[idxAbove + 1]) +
                Math.abs(data[idx + 2] - data[idxAbove + 2])
            const diffH = Math.abs(data[idx] - data[idxLeft]) +
                Math.abs(data[idx + 1] - data[idxLeft + 1]) +
                Math.abs(data[idx + 2] - data[idxLeft + 2])

            // Sharp edge: big diff vertically but small horizontally, or vice versa
            if ((diffV > 100 && diffH < 10) || (diffH > 100 && diffV < 10)) {
                sharpEdgeCount++
            }
            totalChecked++
        }
    }

    const sharpEdgeRatio = totalChecked > 0 ? sharpEdgeCount / totalChecked : 0
    if (sharpEdgeRatio > 0.05) {
        score += 15
        reasons.push("High density of sharp pixel-perfect edges (UI rendering)")
    }

    // 5. PNG format with no EXIF is very common for screenshots
    if (file.type === "image/png" && (!exifTags || Object.keys(exifTags).length === 0)) {
        score += 10
        reasons.push("PNG with no EXIF data (common screenshot format)")
    }

    const isScreenshot = score >= 40
    return {
        isScreenshot,
        confidence: Math.min(score, 100),
        reasons,
    }
}

// ─── Signal 1: EXIF Metadata Analysis ────────────────────────────────

async function analyzeExif(file: File): Promise<AnalysisSignal> {
    const details: string[] = []
    let score = 50 // neutral start

    try {
        const ExifReader = await import("exifreader")
        const buffer = await file.arrayBuffer()
        const tags = ExifReader.load(buffer, { expanded: true })

        const exif = tags.exif || {}
        const iptc = tags.iptc || {}
        const xmp = tags.xmp || {}

        // Check camera info
        const hasMake = exif.Make?.description
        const hasModel = exif.Model?.description
        const hasLens = exif.LensModel?.description || exif.LensMake?.description
        const hasExposure = exif.ExposureTime?.description
        const hasISO = exif.ISOSpeedRatings?.description
        const hasFNumber = exif.FNumber?.description
        const hasGPS = exif.GPSLatitude || exif.GPSLongitude
        const hasFocalLength = exif.FocalLength?.description
        const hasSoftware = exif.Software?.description

        // Count camera signals
        const cameraSignals = [hasMake, hasModel, hasLens, hasExposure, hasISO, hasFNumber, hasGPS, hasFocalLength].filter(Boolean).length

        if (cameraSignals >= 4) {
            score = 10
            details.push(`Camera: ${hasMake || "Unknown"} ${hasModel || ""}`.trim())
            if (hasLens) details.push(`Lens: ${hasLens}`)
            if (hasExposure) details.push(`Exposure: ${hasExposure}s`)
            if (hasFNumber) details.push(`Aperture: f/${hasFNumber}`)
            if (hasISO) details.push(`ISO: ${hasISO}`)
            if (hasGPS) details.push("GPS coordinates found")
            details.push(`Strong camera fingerprint (${cameraSignals}/8 signals)`)
        } else if (cameraSignals >= 2) {
            score = 30
            details.push(`Partial camera data (${cameraSignals}/8 signals)`)
            if (hasMake) details.push(`Camera: ${hasMake} ${hasModel || ""}`.trim())
        } else if (cameraSignals === 0) {
            score = 70
            details.push("No camera EXIF data found")
            details.push("AI tools typically produce images without camera metadata")
            details.push("Note: screenshots, social media re-uploads, and edited photos may also lack EXIF")
        } else {
            score = 55
            details.push(`Minimal camera data (${cameraSignals}/8 signals)`)
        }

        // Check for AI tool indicators
        if (hasSoftware) {
            const sw = hasSoftware.toLowerCase()
            const aiKeywords = ["stable diffusion", "dall-e", "midjourney", "comfyui", "automatic1111", "invoke", "fooocus", "flux"]
            const editorKeywords = ["photoshop", "lightroom", "gimp", "affinity", "capture one", "snapseed"]

            if (aiKeywords.some(k => sw.includes(k))) {
                score = 95
                details.push(`AI software detected: ${hasSoftware}`)
            } else if (editorKeywords.some(k => sw.includes(k))) {
                score = Math.max(score - 10, 5)
                details.push(`Photo editor: ${hasSoftware}`)
            } else {
                details.push(`Software: ${hasSoftware}`)
            }
        }

        // Check IPTC DigitalSourceType
        const digitalSource = (iptc as Record<string, any>).DigitalSourceType?.description ||
            (xmp as Record<string, any>).DigitalSourceType?.description
        if (digitalSource) {
            if (digitalSource.includes("trainedAlgorithmicMedia") || digitalSource.includes("algorithmicMedia")) {
                score = 95
                details.push(`IPTC marks this as AI-generated: ${digitalSource}`)
            }
        }

        // Check for C2PA assertions in XMP
        const xmpStr = JSON.stringify(xmp).toLowerCase()
        if (xmpStr.includes("c2pa") || xmpStr.includes("content credentials")) {
            details.push("C2PA content credentials detected")
        }

        // If file is PNG with no EXIF at all
        if (Object.keys(exif).length === 0 && file.type === "image/png") {
            score = Math.min(score + 10, 85)
            details.push("PNG format with no EXIF — common for AI outputs and screenshots")
        }

    } catch {
        score = 50
        details.push("Could not extract metadata — file may be stripped or unsupported format")
    }

    if (details.length === 0) {
        details.push("No metadata available for analysis")
    }

    return {
        name: "Metadata Analysis",
        icon: <Camera className="w-5 h-5" />,
        score,
        weight: 0.20,
        verdict: score <= 30 ? "real" : score >= 70 ? "ai" : "inconclusive",
        details,
        description: "Checks EXIF camera data, IPTC AI tags, and software signatures",
    }
}

// ─── Signal 2: Error Level Analysis (ELA) ────────────────────────────

async function analyzeELA(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
): Promise<{ signal: AnalysisSignal; heatmapUrl: string }> {
    const details: string[] = []

    // Re-compress at 95% quality
    const jpegDataUrl = canvas.toDataURL("image/jpeg", 0.95)

    // Load recompressed image
    const recompImg = await new Promise<HTMLImageElement>((resolve) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.src = jpegDataUrl
    })

    const elaCanvas = document.createElement("canvas")
    elaCanvas.width = width
    elaCanvas.height = height
    const elaCtx = elaCanvas.getContext("2d")!
    elaCtx.drawImage(recompImg, 0, 0, width, height)

    const originalData = ctx.getImageData(0, 0, width, height)
    const recompData = elaCtx.getImageData(0, 0, width, height)

    // Compute ELA difference
    const diffData = elaCtx.createImageData(width, height)
    const scale = 15 // amplification factor
    let totalDiff = 0
    let maxDiff = 0
    const regionDiffs: number[] = []

    // Divide into 8x8 blocks for uniformity analysis
    const blockSize = 8
    const blocksX = Math.floor(width / blockSize)
    const blocksY = Math.floor(height / blockSize)
    const blockDiffs: number[] = []

    for (let by = 0; by < blocksY; by++) {
        for (let bx = 0; bx < blocksX; bx++) {
            let blockSum = 0
            let blockCount = 0

            for (let dy = 0; dy < blockSize; dy++) {
                for (let dx = 0; dx < blockSize; dx++) {
                    const x = bx * blockSize + dx
                    const y = by * blockSize + dy
                    const i = (y * width + x) * 4

                    const dr = Math.abs(originalData.data[i] - recompData.data[i])
                    const dg = Math.abs(originalData.data[i + 1] - recompData.data[i + 1])
                    const db = Math.abs(originalData.data[i + 2] - recompData.data[i + 2])
                    const avg = (dr + dg + db) / 3

                    diffData.data[i] = Math.min(255, dr * scale)
                    diffData.data[i + 1] = Math.min(255, dg * scale)
                    diffData.data[i + 2] = Math.min(255, db * scale)
                    diffData.data[i + 3] = 255

                    totalDiff += avg
                    maxDiff = Math.max(maxDiff, avg)
                    blockSum += avg
                    blockCount++
                }
            }
            blockDiffs.push(blockSum / blockCount)
        }
    }

    // Also compute for remaining pixels
    const totalPixels = width * height
    for (let i = 0; i < totalPixels * 4; i += 4) {
        if (diffData.data[i + 3] === 0) {
            const dr = Math.abs(originalData.data[i] - recompData.data[i])
            const dg = Math.abs(originalData.data[i + 1] - recompData.data[i + 1])
            const db = Math.abs(originalData.data[i + 2] - recompData.data[i + 2])
            diffData.data[i] = Math.min(255, dr * scale)
            diffData.data[i + 1] = Math.min(255, dg * scale)
            diffData.data[i + 2] = Math.min(255, db * scale)
            diffData.data[i + 3] = 255
        }
    }

    elaCtx.putImageData(diffData, 0, 0)
    const heatmapUrl = elaCanvas.toDataURL("image/png")

    const avgDiff = totalDiff / totalPixels

    // Compute variance of block differences (uniformity)
    const blockMean = blockDiffs.reduce((a, b) => a + b, 0) / blockDiffs.length
    const blockVariance = blockDiffs.reduce((a, b) => a + Math.pow(b - blockMean, 2), 0) / blockDiffs.length
    const blockStdDev = Math.sqrt(blockVariance)
    const coeffOfVariation = blockMean > 0 ? (blockStdDev / blockMean) : 0

    let score: number

    // AI images tend to have very uniform ELA (low variance across blocks)
    // Real photos tend to have varied ELA (high variance)
    // Also consider the absolute error level — AI PNGs have very low avg error
    if (coeffOfVariation < 0.35 && avgDiff < 5) {
        score = 80
        details.push("Very uniform ELA pattern — typical of AI-generated images")
        details.push("AI tools generate all pixels simultaneously, creating uniform compression")
    } else if (coeffOfVariation < 0.5 && avgDiff < 5) {
        score = 70
        details.push("Uniform ELA with low error — consistent with AI-generated or heavily processed image")
    } else if (coeffOfVariation < 0.6 && avgDiff < 10) {
        score = 55
        details.push("Moderately uniform ELA — could indicate AI generation or heavy editing")
    } else if (coeffOfVariation > 1.0) {
        score = 15
        details.push("Highly varied ELA pattern — strong real camera indicator")
        details.push("Different regions show very different error levels (natural for photos)")
    } else if (coeffOfVariation > 0.7) {
        score = 25
        details.push("Varied ELA pattern — consistent with real camera photos")
        details.push("Different regions show different error levels (natural for photos)")
    } else {
        score = 45
        details.push("Mixed ELA pattern — inconclusive")
    }

    // Additional: very low average error on PNG = likely AI or digital-born
    if (avgDiff < 2 && coeffOfVariation < 0.5) {
        score = Math.max(score, 75)
        details.push("Extremely low recompression error — image was never JPEG-compressed (common for AI PNG output)")
    }

    details.push(`Average error: ${avgDiff.toFixed(2)} | Block variation: ${coeffOfVariation.toFixed(2)}`)

    return {
        signal: {
            name: "Error Level Analysis",
            icon: <Binary className="w-5 h-5" />,
            score,
            weight: 0.15,
            verdict: score <= 30 ? "real" : score >= 65 ? "ai" : "inconclusive",
            details,
            description: "Detects compression inconsistencies by re-saving the image and measuring pixel differences",
        },
        heatmapUrl,
    }
}

// ─── Signal 3: Noise Pattern Analysis ────────────────────────────────

function analyzeNoise(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
): AnalysisSignal {
    const details: string[] = []
    const imageData = getPixelData(ctx, width, height)
    const data = imageData.data

    // Convert to grayscale and extract noise via simple high-pass filter
    const gray: number[] = []
    for (let i = 0; i < data.length; i += 4) {
        gray.push(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2])
    }

    // Apply 3x3 Laplacian filter to extract noise
    const noiseResidual: number[] = []
    const laplacian = [0, -1, 0, -1, 4, -1, 0, -1, 0]

    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let sum = 0
            for (let ky = -1; ky <= 1; ky++) {
                for (let kx = -1; kx <= 1; kx++) {
                    const idx = (y + ky) * width + (x + kx)
                    sum += gray[idx] * laplacian[(ky + 1) * 3 + (kx + 1)]
                }
            }
            noiseResidual.push(sum)
        }
    }

    // Compute statistics of noise residual
    const noiseMean = noiseResidual.reduce((a, b) => a + b, 0) / noiseResidual.length
    const noiseVariance = noiseResidual.reduce((a, b) => a + Math.pow(b - noiseMean, 2), 0) / noiseResidual.length
    const noiseStdDev = Math.sqrt(noiseVariance)

    // Compute kurtosis (real noise is Gaussian with kurtosis ~3, AI noise differs)
    const fourthMoment = noiseResidual.reduce((a, b) => a + Math.pow(b - noiseMean, 4), 0) / noiseResidual.length
    const kurtosis = noiseVariance > 0 ? fourthMoment / Math.pow(noiseVariance, 2) : 0

    // Analyze noise in different regions (quadrants)
    const quadrantNoise: number[] = []
    const qw = Math.floor((width - 2) / 2)
    const qh = Math.floor((height - 2) / 2)
    const rw = width - 2 // residual width

    for (let qy = 0; qy < 2; qy++) {
        for (let qx = 0; qx < 2; qx++) {
            let qSum = 0
            let qCount = 0
            for (let y = qy * qh; y < (qy + 1) * qh; y++) {
                for (let x = qx * qw; x < (qx + 1) * qw; x++) {
                    const val = noiseResidual[y * rw + x]
                    qSum += val * val
                    qCount++
                }
            }
            quadrantNoise.push(Math.sqrt(qSum / qCount))
        }
    }

    const quadMean = quadrantNoise.reduce((a, b) => a + b, 0) / 4
    const quadVariation = quadMean > 0
        ? Math.sqrt(quadrantNoise.reduce((a, b) => a + Math.pow(b - quadMean, 2), 0) / 4) / quadMean
        : 0

    let score: number

    // ── Step 1: Kurtosis is the strongest single indicator ──
    // Real camera sensor noise is Gaussian-like (kurtosis ≈ 3)
    // AI-generated images have highly non-Gaussian noise (kurtosis >> 5)
    // This is because AI models produce structured artifacts, not random sensor noise

    let kurtosisScore: number
    if (kurtosis >= 2.0 && kurtosis <= 4.5) {
        kurtosisScore = 10 // Gaussian-like — strong real indicator
        details.push(`Gaussian noise distribution (kurtosis: ${kurtosis.toFixed(1)} ≈ 3.0) — strong real camera signature`)
    } else if (kurtosis > 4.5 && kurtosis <= 8) {
        kurtosisScore = 40 // Slightly non-Gaussian
        details.push(`Slightly non-Gaussian noise (kurtosis: ${kurtosis.toFixed(1)}) — may indicate editing or light processing`)
    } else if (kurtosis > 8 && kurtosis <= 20) {
        kurtosisScore = 70 // Very non-Gaussian — suspicious
        details.push(`Non-Gaussian noise distribution (kurtosis: ${kurtosis.toFixed(1)}) — inconsistent with natural sensor noise`)
    } else if (kurtosis > 20) {
        kurtosisScore = 90 // Extreme — very likely AI
        details.push(`Extremely non-Gaussian noise (kurtosis: ${kurtosis.toFixed(1)}, natural ≈ 3.0) — strong AI generation indicator`)
    } else {
        kurtosisScore = 50 // Sub-Gaussian (kurtosis < 2), unusual
        details.push(`Sub-Gaussian noise (kurtosis: ${kurtosis.toFixed(1)}) — unusual pattern`)
    }

    // ── Step 2: Noise level and uniformity ──
    let levelScore: number
    if (noiseStdDev < 3 && quadVariation < 0.1) {
        levelScore = 85
        details.push("Very low and uniform noise — strong AI indicator")
        details.push("Real cameras produce stochastic sensor noise; this image lacks it")
    } else if (noiseStdDev < 6 && quadVariation < 0.2) {
        levelScore = 70
        details.push("Low noise with moderate uniformity — suspicious")
    } else if (noiseStdDev > 15 && quadVariation > 0.25) {
        levelScore = 10
        details.push("Natural noise pattern with strong regional variation — consistent with real camera sensor")
    } else if (noiseStdDev > 15 && quadVariation > 0.15) {
        levelScore = 25
        details.push("Moderate noise with some regional variation")
    } else if (noiseStdDev > 10) {
        levelScore = 35
        details.push("Moderate noise present")
    } else {
        levelScore = 50
        details.push("Noise level is ambiguous")
    }

    // ── Step 3: Combined score — kurtosis is weighted heavily (60%) ──
    // Kurtosis is the most reliable noise-based AI indicator because:
    // - AI models (diffusion/GAN) can produce moderate noise amplitude
    // - But they CANNOT produce truly Gaussian random sensor noise
    score = Math.round(kurtosisScore * 0.6 + levelScore * 0.4)

    details.push(`Noise σ: ${noiseStdDev.toFixed(2)} | Region variation: ${(quadVariation * 100).toFixed(1)}% | Kurtosis: ${kurtosis.toFixed(1)}`)

    return {
        name: "Noise Pattern Analysis",
        icon: <Fingerprint className="w-5 h-5" />,
        score,
        weight: 0.20,
        verdict: score <= 30 ? "real" : score >= 65 ? "ai" : "inconclusive",
        details,
        description: "Extracts sensor noise residual and checks for natural camera noise patterns",
    }
}

// ─── Signal 4: Color Histogram Analysis ──────────────────────────────

function analyzeHistogram(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
): AnalysisSignal {
    const details: string[] = []
    const imageData = getPixelData(ctx, width, height)
    const data = imageData.data
    const totalPixels = width * height

    // Build per-channel histograms
    const histR = new Array(256).fill(0)
    const histG = new Array(256).fill(0)
    const histB = new Array(256).fill(0)

    for (let i = 0; i < data.length; i += 4) {
        histR[data[i]]++
        histG[data[i + 1]]++
        histB[data[i + 2]]++
    }

    // Normalize
    const normR = histR.map(v => v / totalPixels)
    const normG = histG.map(v => v / totalPixels)
    const normB = histB.map(v => v / totalPixels)

    // Compute smoothness of histogram (adjacent bin differences)
    function histSmoothness(hist: number[]): number {
        let diffSum = 0
        for (let i = 1; i < hist.length; i++) {
            diffSum += Math.abs(hist[i] - hist[i - 1])
        }
        return diffSum / (hist.length - 1)
    }

    const smoothR = histSmoothness(normR)
    const smoothG = histSmoothness(normG)
    const smoothB = histSmoothness(normB)
    const avgSmoothness = (smoothR + smoothG + smoothB) / 3

    // Check for empty bins (gaps in histogram)
    function countEmptyBins(hist: number[]): number {
        return hist.filter(v => v === 0).length
    }

    const emptyR = countEmptyBins(histR)
    const emptyG = countEmptyBins(histG)
    const emptyB = countEmptyBins(histB)
    const avgEmpty = (emptyR + emptyG + emptyB) / 3

    // Check for unusual concentration (entropy)
    function entropy(hist: number[]): number {
        let h = 0
        for (const p of hist) {
            if (p > 0) h -= p * Math.log2(p)
        }
        return h
    }

    const entropyR = entropy(normR)
    const entropyG = entropy(normG)
    const entropyB = entropy(normB)
    const avgEntropy = (entropyR + entropyG + entropyB) / 3

    let score: number

    // AI images: smoother histograms, fewer empty bins, higher entropy (more uniform)
    // Real photos: noisier histograms, more empty bins in shadows/highlights
    if (avgSmoothness < 0.0003 && avgEmpty < 10) {
        score = 70
        details.push("Unusually smooth color distribution — common in AI-generated images")
        details.push("Real photos typically have noisier, more irregular histograms")
    } else if (avgSmoothness < 0.0005 && avgEmpty < 20) {
        score = 55
        details.push("Moderately smooth color distribution")
    } else if (avgEmpty > 40 && avgSmoothness > 0.001) {
        score = 20
        details.push("Natural color distribution with gaps — typical of real photography")
    } else {
        score = 45
        details.push("Color distribution appears normal")
    }

    // Entropy check
    if (avgEntropy > 7.5) {
        score = Math.min(score + 10, 90)
        details.push(`High color entropy (${avgEntropy.toFixed(2)}) — overly uniform distribution`)
    } else if (avgEntropy < 6) {
        score = Math.max(score - 10, 5)
        details.push(`Low color entropy (${avgEntropy.toFixed(2)}) — natural concentration in color ranges`)
    }

    details.push(`Smoothness: ${(avgSmoothness * 10000).toFixed(2)} | Empty bins: ${avgEmpty.toFixed(0)} | Entropy: ${avgEntropy.toFixed(2)}`)

    return {
        name: "Color Histogram",
        icon: <BarChart3 className="w-5 h-5" />,
        score,
        weight: 0.10,
        verdict: score <= 30 ? "real" : score >= 65 ? "ai" : "inconclusive",
        details,
        description: "Analyzes RGB color distribution for unnatural smoothness or uniformity",
    }
}

// ─── Signal 5: Frequency Domain (FFT) Analysis ──────────────────────

function analyzeFrequency(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
): { signal: AnalysisSignal; spectrumUrl: string } {
    const details: string[] = []
    const imageData = getPixelData(ctx, width, height)
    const data = imageData.data

    // Convert to grayscale
    const gray: number[] = []
    for (let i = 0; i < data.length; i += 4) {
        gray.push(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2])
    }

    // Simplified frequency analysis using row/column-wise DFT sampling
    // Full 2D FFT is expensive, so we sample rows and columns
    const sampleSize = 256
    const stepX = Math.max(1, Math.floor(width / sampleSize))
    const stepY = Math.max(1, Math.floor(height / sampleSize))

    // Compute power spectrum along sampled rows
    const rowSpectra: number[] = new Array(Math.floor(width / 2)).fill(0)
    let rowCount = 0

    for (let y = 0; y < height; y += stepY) {
        const row: number[] = []
        for (let x = 0; x < width; x++) {
            row.push(gray[y * width + x])
        }

        // DFT magnitude for this row
        const N = row.length
        for (let k = 1; k < Math.floor(N / 2); k++) {
            let realPart = 0
            let imagPart = 0
            for (let n = 0; n < N; n++) {
                const angle = (2 * Math.PI * k * n) / N
                realPart += row[n] * Math.cos(angle)
                imagPart -= row[n] * Math.sin(angle)
            }
            const mag = Math.sqrt(realPart * realPart + imagPart * imagPart) / N
            if (k < rowSpectra.length) rowSpectra[k] += mag
        }
        rowCount++
    }

    // Average
    for (let k = 0; k < rowSpectra.length; k++) {
        rowSpectra[k] /= rowCount
    }

    // Analyze power spectrum characteristics
    // Natural images: power follows 1/f (power decreases with frequency)
    // AI images: deviations from 1/f, periodic peaks from upsampling

    // Compute spectral slope (log-log regression)
    const logFreqs: number[] = []
    const logPower: number[] = []
    const startK = 2 // skip DC and first bin
    const endK = Math.min(rowSpectra.length, Math.floor(width / 2))

    for (let k = startK; k < endK; k++) {
        if (rowSpectra[k] > 0) {
            logFreqs.push(Math.log(k))
            logPower.push(Math.log(rowSpectra[k]))
        }
    }

    // Linear regression on log-log
    let slope = -1 // default natural
    let peakCount = 0
    if (logFreqs.length > 10) {
        const n = logFreqs.length
        const sumX = logFreqs.reduce((a, b) => a + b, 0)
        const sumY = logPower.reduce((a, b) => a + b, 0)
        const sumXY = logFreqs.reduce((a, x, i) => a + x * logPower[i], 0)
        const sumX2 = logFreqs.reduce((a, x) => a + x * x, 0)
        slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX)

        // Compute R² (goodness of fit)
        const meanY = sumY / n
        const intercept = (sumY - slope * sumX) / n
        const ssRes = logPower.reduce((a, y, i) => a + Math.pow(y - (slope * logFreqs[i] + intercept), 2), 0)
        const ssTot = logPower.reduce((a, y) => a + Math.pow(y - meanY, 2), 0)
        const r2 = ssTot > 0 ? 1 - ssRes / ssTot : 0

        // Detect periodic peaks (GAN artifacts)
        // Look for local maxima that deviate significantly from the trend
        const trendLine = logFreqs.map((x, i) => slope * x + intercept)
        const residuals = logPower.map((y, i) => y - trendLine[i])
        const resStdDev = Math.sqrt(residuals.reduce((a, r) => a + r * r, 0) / residuals.length)

        for (let i = 2; i < residuals.length - 2; i++) {
            if (residuals[i] > 2 * resStdDev &&
                residuals[i] > residuals[i - 1] &&
                residuals[i] > residuals[i + 1]) {
                peakCount++
            }
        }

        details.push(`Spectral slope: ${slope.toFixed(3)} (natural ≈ -1.0) | R²: ${r2.toFixed(3)}`)

        if (peakCount >= 3) {
            details.push(`${peakCount} periodic peaks detected — possible GAN upsampling artifacts`)
        }
    }

    // Compute high-frequency energy ratio
    const totalEnergy = rowSpectra.reduce((a, b) => a + b * b, 0)
    const midPoint = Math.floor(rowSpectra.length / 2)
    const highFreqEnergy = rowSpectra.slice(midPoint).reduce((a, b) => a + b * b, 0)
    const hfRatio = totalEnergy > 0 ? highFreqEnergy / totalEnergy : 0

    let score: number

    // ── Step A: Spectral slope scoring ──
    // Natural images: slope around -1.0
    // AI images: slope deviates from -1.0, may have periodic peaks
    let slopeScore: number
    if (slope > -0.5) {
        slopeScore = 80
        details.push("Flat spectral slope — unnatural frequency distribution")
    } else if (slope > -0.7) {
        slopeScore = 65
        details.push("Shallow spectral slope — somewhat unnatural")
    } else if (slope < -1.5) {
        slopeScore = 40
        details.push("Steep spectral slope — may indicate AI smoothing or heavy filtering")
    } else if (slope >= -1.15 && slope <= -0.85) {
        slopeScore = 15
        details.push("Natural 1/f spectral slope — consistent with real photography")
    } else if (slope >= -1.3 && slope <= -0.7) {
        slopeScore = 30
        details.push("Near-natural spectral slope")
    } else {
        slopeScore = 45
        details.push("Spectral slope is in an ambiguous range")
    }

    // ── Step B: High-frequency energy ratio scoring ──
    // This is a very strong AI indicator — AI images consistently lack fine detail
    // Real photos from cameras always have significant high-frequency content from:
    // sensor noise, texture detail, sharp edges, grain, etc.
    let hfScore: number
    if (hfRatio < 0.02) {
        hfScore = 90
        details.push("Extremely low high-frequency energy — very strong AI indicator")
        details.push("Real camera sensors always capture high-frequency noise and texture detail")
    } else if (hfRatio < 0.05) {
        hfScore = 75
        details.push("Very low high-frequency energy — AI images tend to lack fine detail")
    } else if (hfRatio < 0.10) {
        hfScore = 55
        details.push("Low high-frequency energy — somewhat suspicious")
    } else if (hfRatio > 0.25) {
        hfScore = 10
        details.push("Strong high-frequency content — typical of real sensor capture")
    } else if (hfRatio > 0.15) {
        hfScore = 20
        details.push("Good high-frequency content present")
    } else {
        hfScore = 40
        details.push("Moderate high-frequency energy")
    }

    // ── Step C: Periodic peaks bonus ──
    let peakBonus = 0
    if (peakCount >= 5) {
        peakBonus = 15
        details.push(`${peakCount} periodic peaks — strong GAN upsampling artifact signature`)
    } else if (peakCount >= 3) {
        peakBonus = 8
    }

    // ── Combine: HF ratio is weighted heavily (50%) since it's the strongest frequency signal ──
    score = Math.min(100, Math.round(slopeScore * 0.35 + hfScore * 0.50 + peakBonus + (hfScore > 70 ? 10 : 0)))

    // If slope looks natural but HF energy is very low, that's a classic diffusion model pattern
    // (they learn the overall spectral slope but can't reproduce fine detail)
    if (slopeScore <= 30 && hfScore >= 70) {
        score = Math.max(score, 70)
        details.push("Natural slope but missing fine detail — classic diffusion model signature")
    }

    details.push(`HF energy ratio: ${(hfRatio * 100).toFixed(1)}%`)

    // Generate spectrum visualization
    const specCanvas = document.createElement("canvas")
    const specW = 512
    const specH = 200
    specCanvas.width = specW
    specCanvas.height = specH
    const specCtx = specCanvas.getContext("2d")!

    specCtx.fillStyle = "#0a0a0a"
    specCtx.fillRect(0, 0, specW, specH)

    // Draw spectrum bars
    const maxVal = Math.max(...rowSpectra.slice(1))
    const barWidth = specW / Math.min(rowSpectra.length, 256)

    for (let i = 1; i < Math.min(rowSpectra.length, 256); i++) {
        const normalized = maxVal > 0 ? rowSpectra[i] / maxVal : 0
        const barH = normalized * (specH - 20)
        const x = (i - 1) * barWidth

        // Color gradient from blue (low freq) to red (high freq)
        const hue = 240 - (i / 256) * 240
        specCtx.fillStyle = `hsl(${hue}, 80%, 60%)`
        specCtx.fillRect(x, specH - barH - 10, Math.max(barWidth - 0.5, 1), barH)
    }

    // Labels
    specCtx.fillStyle = "#666"
    specCtx.font = "11px monospace"
    specCtx.fillText("Low Freq", 5, specH - 2)
    specCtx.fillText("High Freq", specW - 65, specH - 2)

    const spectrumUrl = specCanvas.toDataURL("image/png")

    return {
        signal: {
            name: "Frequency Analysis",
            icon: <Waves className="w-5 h-5" />,
            score,
            weight: 0.35,
            verdict: score <= 30 ? "real" : score >= 65 ? "ai" : "inconclusive",
            details,
            description: "Analyzes frequency spectrum for GAN artifacts and unnatural patterns",
        },
        spectrumUrl,
    }
}

// ─── Main Analysis Orchestrator ──────────────────────────────────────

async function runFullAnalysis(
    file: File,
    onProgress: (progress: number, step: string) => void
): Promise<{ result: AnalysisResult; elaHeatmapUrl: string; spectrumUrl: string }> {
    onProgress(5, "Loading image...")
    const { canvas, ctx, width, height } = await loadImageToCanvas(file)

    // Screenshot detection (runs first to adjust other signal weights)
    onProgress(10, "Checking for screenshot patterns...")
    const screenshotInfo = detectScreenshot(file, ctx, width, height)

    // Signal 1: EXIF
    onProgress(20, "Analyzing metadata...")
    const exifSignal = await analyzeExif(file)

    // If screenshot detected, reduce metadata weight and adjust its score
    // Screenshots naturally lack EXIF — that's not an AI indicator
    if (screenshotInfo.isScreenshot) {
        exifSignal.weight = 0.05 // reduce from 0.20 to 0.05
        if (exifSignal.score >= 65) {
            exifSignal.score = 40 // neutralize the "no EXIF = AI" signal
            exifSignal.verdict = "inconclusive"
            exifSignal.details.unshift("Screenshot detected — missing EXIF is expected, not an AI indicator")
        }
    }

    // Signal 2: ELA
    onProgress(35, "Running Error Level Analysis...")
    const { signal: elaSignal, heatmapUrl } = await analyzeELA(canvas, ctx, width, height)

    // Signal 3: Noise
    onProgress(50, "Analyzing noise patterns...")
    const noiseSignal = analyzeNoise(ctx, width, height)

    // Signal 4: Histogram
    onProgress(65, "Analyzing color distribution...")
    const histSignal = analyzeHistogram(ctx, width, height)

    // Signal 5: FFT
    onProgress(80, "Running frequency analysis...")
    const { signal: fftSignal, spectrumUrl } = analyzeFrequency(ctx, width, height)

    // If screenshot: frequency analysis may flag UI sharp edges as "unnatural"
    // Reduce its weight slightly for screenshots
    if (screenshotInfo.isScreenshot) {
        fftSignal.weight = 0.25 // reduce from 0.35 to 0.25
        if (fftSignal.details.some(d => d.includes("low high-frequency energy"))) {
            fftSignal.score = Math.max(fftSignal.score - 15, 10)
        }
    }

    onProgress(90, "Detecting context flags...")

    // ─── Context Flag Detection ────────────────────────────────────
    const contextFlags: ContextFlag[] = []
    const fileName = file.name.toLowerCase()

    // 1. Social media re-upload detection
    const socialMediaPatterns = [
        { pattern: /^fb_img_/i, name: "Facebook" },
        { pattern: /^insta/i, name: "Instagram" },
        { pattern: /^img_\d{8}_wa/i, name: "WhatsApp" },
        { pattern: /^signal-/i, name: "Signal" },
        { pattern: /^telegram/i, name: "Telegram" },
        { pattern: /^twitter/i, name: "Twitter/X" },
        { pattern: /^snapchat/i, name: "Snapchat" },
    ]
    const socialMatch = socialMediaPatterns.find(p => p.pattern.test(fileName))
    if (socialMatch) {
        contextFlags.push({
            type: "warning",
            label: `${socialMatch.name} Re-upload Detected`,
            description: `This image appears to be downloaded from ${socialMatch.name}. Social media platforms strip EXIF data and re-compress images heavily, which degrades forensic signals. Missing metadata is expected — not an AI indicator.`,
            scoreAdjustment: -10,
        })
        // Reduce metadata weight for social media re-uploads
        exifSignal.weight = Math.min(exifSignal.weight, 0.05)
        if (exifSignal.score >= 60) exifSignal.score = 40
    }

    // 2. WhatsApp/Telegram extreme compression detection
    const fileSizeKB = file.size / 1024
    const pixelCount = width * height
    const bitsPerPixel = (file.size * 8) / pixelCount
    if (bitsPerPixel < 1.0 && file.type === "image/jpeg") {
        contextFlags.push({
            type: "warning",
            label: "Heavy Compression Detected",
            description: `This image has very low quality (${bitsPerPixel.toFixed(2)} bits/pixel). Heavy compression from messaging apps or social media destroys forensic signals. Results may be unreliable.`,
            scoreAdjustment: 0,
        })
    }

    // 3. Very small image — not enough data for reliable analysis
    if (width < 256 || height < 256) {
        contextFlags.push({
            type: "warning",
            label: "Very Small Image",
            description: `Image is only ${width}x${height}px. Small images (thumbnails, icons, avatars) don't contain enough pixel data for reliable forensic analysis. Take results with caution.`,
            scoreAdjustment: 0,
        })
    }

    // 4. Computational photography indicators (from EXIF)
    const exifDetails = exifSignal.details.join(" ").toLowerCase()
    const compPhotoKeywords = ["apple", "iphone", "google pixel", "samsung galaxy", "huawei", "xiaomi"]
    const isPhonePhoto = compPhotoKeywords.some(k => exifDetails.includes(k))
    if (isPhonePhoto) {
        contextFlags.push({
            type: "info",
            label: "Smartphone Photo",
            description: "This image was taken by a smartphone. Modern phones use computational photography (multi-frame HDR, Night Mode, AI enhancement) which can produce smoother noise and slightly non-natural patterns. This is normal — not AI generation.",
            scoreAdjustment: -5,
        })
    }

    // 5. Digital art / illustration detection
    // Low noise + flat colors + no EXIF but NOT smooth histogram (illustrations have limited palette)
    const histEntropy = histSignal.details.find(d => d.includes("Entropy:"))
    const entropyMatch = histEntropy?.match(/Entropy:\s*([\d.]+)/)
    const entropy = entropyMatch ? parseFloat(entropyMatch[1]) : 6
    const emptyBinsMatch = histSignal.details.find(d => d.includes("Empty bins:"))?.match(/Empty bins:\s*([\d.]+)/)
    const emptyBins = emptyBinsMatch ? parseFloat(emptyBinsMatch[1]) : 0

    if (emptyBins > 50 && entropy < 5 && exifSignal.score >= 60) {
        contextFlags.push({
            type: "info",
            label: "Possible Digital Art / Illustration",
            description: "This image has a limited color palette and flat regions typical of digital illustrations, vector art, or graphic designs. These share some characteristics with AI images (no EXIF, smooth textures) but may be hand-created.",
            scoreAdjustment: -8,
        })
    }

    // 6. AI-upscaled photo detection
    // Natural noise + natural histogram BUT periodic frequency peaks = upscaling artifacts
    const hasPeaks = fftSignal.details.some(d => d.includes("periodic peaks"))
    const noiseIsNatural = noiseSignal.score <= 35
    if (hasPeaks && noiseIsNatural) {
        contextFlags.push({
            type: "info",
            label: "Possible AI Upscaling",
            description: "The noise pattern suggests a real photograph, but frequency analysis shows periodic artifacts typical of AI upscaling (Real-ESRGAN, Topaz, etc.). This may be a real photo enhanced with AI upscaling rather than fully AI-generated.",
            scoreAdjustment: -5,
        })
    }

    // 7. Scanned photo detection
    // Scanner-specific patterns: uniform noise, no EXIF camera data, but specific EXIF scanner tags
    const scannerKeywords = ["scan", "epson", "canon scan", "hp scan", "flatbed", "twain"]
    const isScan = scannerKeywords.some(k => exifDetails.includes(k)) ||
        scannerKeywords.some(k => fileName.includes(k))
    if (isScan) {
        contextFlags.push({
            type: "info",
            label: "Scanned Photo Detected",
            description: "This appears to be a scanned physical photograph. Scanned images lack camera EXIF data and have scanner-specific noise patterns. Missing metadata is expected and not an AI indicator.",
            scoreAdjustment: -12,
        })
        exifSignal.weight = Math.min(exifSignal.weight, 0.05)
        if (exifSignal.score >= 60) exifSignal.score = 35
    }

    // 8. Meme / text overlay detection
    // Check if image has large uniform text regions (from overlaid text)
    // We use the ELA — text overlays create sharp uniform-error regions
    const elaAvgMatch = elaSignal.details.find(d => d.includes("Average error:"))?.match(/Average error:\s*([\d.]+)/)
    const elaAvg = elaAvgMatch ? parseFloat(elaAvgMatch[1]) : 5
    const elaVarMatch = elaSignal.details.find(d => d.includes("Block variation:"))?.match(/Block variation:\s*([\d.]+)/)
    const elaVar = elaVarMatch ? parseFloat(elaVarMatch[1]) : 0.5
    // High variation + moderate error = possible composite/meme
    if (elaVar > 1.5 && elaAvg > 3) {
        contextFlags.push({
            type: "info",
            label: "Possible Composite / Edited Image",
            description: "ELA shows highly varied error levels across the image, which can indicate compositing, text overlays, or pasted elements on top of a base image. This is editing, not necessarily AI generation.",
            scoreAdjustment: -3,
        })
    }

    // 9. Stock photo / heavy retouching indicators
    // Natural frequency + very smooth noise + camera EXIF = retouched real photo
    if (exifSignal.score <= 30 && noiseSignal.score >= 50 && fftSignal.score <= 40) {
        contextFlags.push({
            type: "info",
            label: "Possibly Retouched Photo",
            description: "Camera metadata confirms a real camera, but noise analysis shows unusual smoothness. This may be a heavily retouched photo (skin smoothing, beauty filters, HDR processing) rather than an AI-generated image.",
            scoreAdjustment: -8,
        })
    }

    // 10. Panorama / HDR merge detection
    const panoramaKeywords = ["pano", "panorama", "hdr", "merge", "stitch"]
    if (panoramaKeywords.some(k => fileName.includes(k)) || (width / height > 2.5 || height / width > 2.5)) {
        contextFlags.push({
            type: "info",
            label: "Panorama / Ultra-Wide Image",
            description: "This appears to be a panoramic or ultra-wide image. Stitched panoramas and HDR merges can produce unusual ELA and noise patterns from blending multiple exposures. This is not an AI indicator.",
            scoreAdjustment: -5,
        })
    }

    // ─── Apply context flag adjustments ────────────────────────────
    const totalAdjustment = contextFlags.reduce((sum, f) => sum + f.scoreAdjustment, 0)

    onProgress(95, "Computing final verdict...")

    const signals = [exifSignal, elaSignal, noiseSignal, histSignal, fftSignal]

    // Normalize weights to sum to 1.0
    const totalWeight = signals.reduce((sum, s) => sum + s.weight, 0)
    const normalizedSignals = signals.map(s => ({ ...s, weight: s.weight / totalWeight }))

    // Weighted score + context adjustments
    const rawScore = normalizedSignals.reduce((sum, s) => sum + s.score * s.weight, 0)
    const overallScore = Math.max(0, Math.min(100, rawScore + totalAdjustment))

    let verdict: AnalysisResult["verdict"]
    let verdictLabel: string
    let verdictDescription: string

    if (screenshotInfo.isScreenshot && overallScore >= 35 && overallScore <= 70) {
        verdict = "screenshot"
        verdictLabel = "Screenshot Detected"
        verdictDescription = `This appears to be a screenshot (confidence: ${screenshotInfo.confidence}%). Screenshots lack camera metadata and have unique pixel characteristics that can mimic some AI signals. The content within the screenshot ${overallScore >= 55 ? "shows some AI-like patterns — the original source image may have been AI-generated" : "appears to contain authentic content"}.`
    } else if (screenshotInfo.isScreenshot && overallScore >= 70) {
        verdict = "likely_ai"
        verdictLabel = "Screenshot of Likely AI Content"
        verdictDescription = "This appears to be a screenshot, but the underlying image content shows strong AI-generation signals across multiple forensic tests."
    } else if (overallScore >= 65) {
        verdict = "likely_ai"
        verdictLabel = "Likely AI-Generated"
        verdictDescription = "Multiple forensic signals suggest this image was generated by AI. Review the individual signal breakdowns below for details."
    } else if (overallScore <= 35) {
        verdict = "likely_real"
        verdictLabel = "Likely Authentic"
        verdictDescription = "Forensic analysis suggests this image is likely an authentic photograph. Camera metadata and natural patterns are consistent with real capture."
    } else {
        verdict = "uncertain"
        verdictLabel = "Uncertain"
        verdictDescription = "The analysis produced mixed signals. This could be a heavily edited photo, a screenshot, or an AI image that has been post-processed. Review individual signals for more context."
    }

    onProgress(100, "Analysis complete")

    return {
        result: {
            signals: normalizedSignals,
            overallScore,
            verdict,
            verdictLabel,
            verdictDescription,
            screenshotDetected: screenshotInfo.isScreenshot,
            screenshotInfo,
            contextFlags,
        },
        elaHeatmapUrl: heatmapUrl,
        spectrumUrl,
    }
}

// ─── UI Component ────────────────────────────────────────────────────

export function AIImageDetector() {
    const [file, setFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [analyzing, setAnalyzing] = useState(false)
    const [progress, setProgress] = useState(0)
    const [progressStep, setProgressStep] = useState("")
    const [result, setResult] = useState<AnalysisResult | null>(null)
    const [elaHeatmapUrl, setElaHeatmapUrl] = useState<string | null>(null)
    const [spectrumUrl, setSpectrumUrl] = useState<string | null>(null)
    const [expandedSignals, setExpandedSignals] = useState<Set<number>>(new Set())

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const f = acceptedFiles[0]
        if (!f) return
        reset()
        setFile(f)
        setPreviewUrl(URL.createObjectURL(f))
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [],
            "image/png": [],
            "image/webp": [],
            "image/bmp": [],
            "image/tiff": [],
        },
        maxFiles: 1,
        maxSize: 50 * 1024 * 1024, // 50MB
    })

    function reset() {
        setFile(null)
        setPreviewUrl(null)
        setResult(null)
        setElaHeatmapUrl(null)
        setSpectrumUrl(null)
        setProgress(0)
        setProgressStep("")
        setExpandedSignals(new Set())
    }

    async function startAnalysis() {
        if (!file) return
        setAnalyzing(true)
        setResult(null)

        try {
            const { result, elaHeatmapUrl, spectrumUrl } = await runFullAnalysis(
                file,
                (p, step) => {
                    setProgress(p)
                    setProgressStep(step)
                }
            )
            setResult(result)
            setElaHeatmapUrl(elaHeatmapUrl)
            setSpectrumUrl(spectrumUrl)
            // Expand all signals by default
            setExpandedSignals(new Set(result.signals.map((_, i) => i)))
        } catch (err) {
            console.error("Analysis failed:", err)
        } finally {
            setAnalyzing(false)
        }
    }

    function toggleSignal(index: number) {
        setExpandedSignals(prev => {
            const next = new Set(prev)
            if (next.has(index)) next.delete(index)
            else next.add(index)
            return next
        })
    }

    const verdictColors: Record<string, string> = {
        likely_real: "text-green-500",
        likely_ai: "text-red-500",
        uncertain: "text-yellow-500",
        screenshot: "text-blue-500",
    }

    const verdictIcons: Record<string, React.ReactNode> = {
        likely_real: <ShieldCheck className="w-8 h-8" />,
        likely_ai: <ShieldAlert className="w-8 h-8" />,
        uncertain: <ShieldQuestion className="w-8 h-8" />,
        screenshot: <Camera className="w-8 h-8" />,
    }

    const verdictBg: Record<string, string> = {
        likely_real: "bg-green-500/10 border-green-500/30",
        likely_ai: "bg-red-500/10 border-red-500/30",
        uncertain: "bg-yellow-500/10 border-yellow-500/30",
        screenshot: "bg-blue-500/10 border-blue-500/30",
    }

    const signalVerdictColor = {
        real: "text-green-500",
        ai: "text-red-500",
        suspicious: "text-orange-500",
        inconclusive: "text-yellow-500",
    }

    const signalVerdictBg = {
        real: "bg-green-500/10",
        ai: "bg-red-500/10",
        suspicious: "bg-orange-500/10",
        inconclusive: "bg-yellow-500/10",
    }

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            {/* Upload Area */}
            {!file && (
                <div
                    {...getRootProps()}
                    className={cn(
                        "border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors min-h-[400px] flex flex-col items-center justify-center",
                        isDragActive
                            ? "border-primary bg-muted/50"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                    )}
                >
                    <input {...getInputProps()} />
                    <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                        <Shield className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold">AI Image Detector</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                        Drop an image here or click to upload. We&apos;ll analyze it using 5 forensic signals to determine if it&apos;s AI-generated or a real photograph.
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                        Supports JPG, PNG, WebP, BMP, TIFF (max 50MB)
                    </p>
                </div>
            )}

            {/* Image Preview + Controls */}
            {file && !result && (
                <GCard className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-64 flex-shrink-0">
                            {previewUrl && (
                                <div className="relative rounded-lg overflow-hidden border bg-muted/50">
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        className="w-full h-auto max-h-64 object-contain"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex-1 space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg truncate">{file.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {(file.size / 1024).toFixed(1)} KB &middot; {file.type}
                                </p>
                            </div>

                            {analyzing ? (
                                <div className="space-y-3">
                                    <GProgress value={progress} className="h-2" />
                                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                                        <RefreshCw className="w-4 h-4 animate-spin" />
                                        {progressStep}
                                    </p>
                                </div>
                            ) : (
                                <div className="flex gap-3">
                                    <GButton onClick={startAnalysis} className="gap-2">
                                        <Shield className="w-4 h-4" />
                                        Analyze Image
                                    </GButton>
                                    <GButton variant="outline" onClick={reset} className="gap-2">
                                        <X className="w-4 h-4" />
                                        Remove
                                    </GButton>
                                </div>
                            )}
                        </div>
                    </div>
                </GCard>
            )}

            {/* Results */}
            {result && (
                <div className="space-y-6">
                    {/* Overall Verdict */}
                    <GCard className={cn("p-6 border-2", verdictBg[result.verdict])}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className={cn("p-3 rounded-full", verdictBg[result.verdict], verdictColors[result.verdict])}>
                                {verdictIcons[result.verdict]}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className={cn("text-2xl font-bold", verdictColors[result.verdict])}>
                                        {result.verdictLabel}
                                    </h2>
                                    <span className={cn(
                                        "text-sm font-mono px-3 py-1 rounded-full",
                                        verdictBg[result.verdict],
                                        verdictColors[result.verdict]
                                    )}>
                                        Score: {result.overallScore.toFixed(0)}/100
                                    </span>
                                </div>
                                <p className="text-muted-foreground mt-1">{result.verdictDescription}</p>
                            </div>
                        </div>

                        {/* Score Bar */}
                        <div className="mt-4 space-y-1">
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Authentic</span>
                                <span>AI-Generated</span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                                <div
                                    className={cn(
                                        "h-full rounded-full transition-all duration-1000",
                                        result.verdict === "screenshot" ? "bg-blue-500" :
                                            result.overallScore >= 65 ? "bg-red-500" :
                                                result.overallScore <= 35 ? "bg-green-500" : "bg-yellow-500"
                                    )}
                                    style={{ width: `${result.overallScore}%` }}
                                />
                            </div>
                        </div>
                    </GCard>

                    {/* Screenshot Detection Notice */}
                    {result.screenshotDetected && result.screenshotInfo && (
                        <GCard className="p-4 bg-blue-500/5 border-blue-500/20">
                            <div className="flex gap-3 items-start">
                                <Camera className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm space-y-1">
                                    <p className="font-medium text-blue-500">
                                        Screenshot Detected (confidence: {result.screenshotInfo.confidence}%)
                                    </p>
                                    <p className="text-muted-foreground">
                                        This image was identified as a screenshot. Screenshots naturally lack camera metadata and have unique pixel characteristics (solid UI bars, sharp edges, screen resolutions) that can mimic some AI signals. The analysis has been adjusted to account for this.
                                    </p>
                                    <div className="mt-2 space-y-0.5">
                                        {result.screenshotInfo.reasons.map((reason, i) => (
                                            <p key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                                <span className="text-blue-500/50 mt-0.5">&#8226;</span>
                                                {reason}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </GCard>
                    )}

                    {/* Context Flags */}
                    {result.contextFlags.length > 0 && (
                        <div className="space-y-2">
                            {result.contextFlags.map((flag, i) => (
                                <GCard
                                    key={i}
                                    className={cn("p-3 border", {
                                        "bg-yellow-500/5 border-yellow-500/20": flag.type === "warning",
                                        "bg-blue-500/5 border-blue-500/20": flag.type === "info",
                                        "bg-green-500/5 border-green-500/20": flag.type === "adjustment",
                                    })}
                                >
                                    <div className="flex gap-3 items-start">
                                        {flag.type === "warning" ? (
                                            <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                        )}
                                        <div className="text-sm">
                                            <span className={cn("font-medium", {
                                                "text-yellow-500": flag.type === "warning",
                                                "text-blue-500": flag.type === "info",
                                                "text-green-500": flag.type === "adjustment",
                                            })}>
                                                {flag.label}
                                            </span>
                                            {flag.scoreAdjustment !== 0 && (
                                                <span className="text-xs text-muted-foreground ml-2">
                                                    (score {flag.scoreAdjustment > 0 ? "+" : ""}{flag.scoreAdjustment})
                                                </span>
                                            )}
                                            <p className="text-muted-foreground mt-0.5">{flag.description}</p>
                                        </div>
                                    </div>
                                </GCard>
                            ))}
                        </div>
                    )}

                    {/* Image + Visualizations */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {previewUrl && (
                            <GCard className="p-3">
                                <p className="text-xs font-medium text-muted-foreground mb-2">Original Image</p>
                                <img src={previewUrl} alt="Original" className="w-full rounded-lg object-contain max-h-48" />
                            </GCard>
                        )}
                        {elaHeatmapUrl && (
                            <GCard className="p-3">
                                <p className="text-xs font-medium text-muted-foreground mb-2">ELA Heatmap</p>
                                <img src={elaHeatmapUrl} alt="ELA Heatmap" className="w-full rounded-lg object-contain max-h-48" />
                            </GCard>
                        )}
                        {spectrumUrl && (
                            <GCard className="p-3">
                                <p className="text-xs font-medium text-muted-foreground mb-2">Frequency Spectrum</p>
                                <img src={spectrumUrl} alt="Frequency Spectrum" className="w-full rounded-lg object-contain max-h-48" />
                            </GCard>
                        )}
                    </div>

                    {/* Signal Breakdown */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Info className="w-5 h-5 text-muted-foreground" />
                            Signal Breakdown
                        </h3>

                        {result.signals.map((signal, index) => (
                            <GCard key={signal.name} className="overflow-hidden">
                                <button
                                    onClick={() => toggleSignal(index)}
                                    className="w-full p-4 flex items-center gap-4 text-left hover:bg-muted/50 transition-colors"
                                >
                                    <div className={cn("p-2 rounded-lg", signalVerdictBg[signal.verdict])}>
                                        <span className={signalVerdictColor[signal.verdict]}>{signal.icon}</span>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-medium">{signal.name}</span>
                                            <span className={cn(
                                                "text-xs px-2 py-0.5 rounded-full font-medium",
                                                signalVerdictBg[signal.verdict],
                                                signalVerdictColor[signal.verdict]
                                            )}>
                                                {signal.verdict === "real" ? "Authentic" :
                                                    signal.verdict === "ai" ? "AI Detected" :
                                                        signal.verdict === "suspicious" ? "Suspicious" : "Inconclusive"}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                (weight: {(signal.weight * 100).toFixed(0)}%)
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-0.5">{signal.description}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="text-right hidden sm:block">
                                            <span className={cn("font-mono text-sm font-bold", signalVerdictColor[signal.verdict])}>
                                                {signal.score}/100
                                            </span>
                                        </div>
                                        {expandedSignals.has(index) ? (
                                            <ChevronUp className="w-4 h-4 text-muted-foreground" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                        )}
                                    </div>
                                </button>

                                {expandedSignals.has(index) && (
                                    <div className="px-4 pb-4 pt-0 border-t">
                                        <div className="mt-3 space-y-1.5">
                                            {signal.details.map((detail, di) => (
                                                <p key={di} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className="text-muted-foreground/50 mt-1">&#8226;</span>
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                        {/* Mini progress bar for signal score */}
                                        <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className={cn(
                                                    "h-full rounded-full",
                                                    signal.score >= 65 ? "bg-red-500" :
                                                        signal.score <= 30 ? "bg-green-500" : "bg-yellow-500"
                                                )}
                                                style={{ width: `${signal.score}%` }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </GCard>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <GCard className="p-4 bg-muted/30 border-muted">
                        <div className="flex gap-3 items-start">
                            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-muted-foreground space-y-1">
                                <p className="font-medium text-foreground">Disclaimer</p>
                                <p>
                                    No AI detection tool is 100% accurate. This analysis uses 5 forensic signals (metadata, ELA, noise patterns, color distribution, and frequency analysis) to provide an educated assessment. Results may be affected by image compression, screenshots, filters, or editing. Always use critical judgment alongside automated analysis.
                                </p>
                            </div>
                        </div>
                    </GCard>

                    {/* Analyze Another */}
                    <div className="flex justify-center">
                        <GButton variant="outline" onClick={reset} className="gap-2">
                            <Upload className="w-4 h-4" />
                            Analyze Another Image
                        </GButton>
                    </div>
                </div>
            )}
        </div>
    )
}
