/**
 * Renders a PDF page to a JPEG image represented as a Uint8Array.
 * Useful for compressing or flattening PDF pages.
 */
export async function renderPageToJpeg(
    page: any, // pdfjsLib.PDFPageProxy
    options: { scale: number; quality: number }
): Promise<Uint8Array> {
    const viewport = page.getViewport({ scale: options.scale })

    // Create canvas
    const canvas = document.createElement('canvas')
    canvas.width = viewport.width
    canvas.height = viewport.height
    const context = canvas.getContext('2d', { alpha: false })

    if (!context) throw new Error("Failed to get canvas context")

    // White background
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)

    // Render PDF page to canvas
    await page.render({
        canvasContext: context,
        viewport: viewport,
        intent: 'print'
    }).promise

    // Convert canvas to JPEG
    return new Promise<Uint8Array>((resolve, reject) => {
        canvas.toBlob(
            async (blob) => {
                if (!blob) {
                    reject(new Error("Failed to convert canvas to blob"))
                    return
                }
                resolve(new Uint8Array(await blob.arrayBuffer()))
            },
            'image/jpeg',
            options.quality
        )
    })
}

/**
 * Downloads a PDF file from bytes.
 */
export function downloadPdf(
    pdfBytes: Uint8Array,
    filename: string
) {
    const blob = new Blob([pdfBytes as any], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}
