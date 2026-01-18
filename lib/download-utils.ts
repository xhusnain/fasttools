/**
 * Downloads a file from a URL by first fetching it as a blob to handle cross-origin issues,
 * then creating a temporary object URL to trigger the download.
 * Falls back to a direct link download if the fetch fails.
 *
 * @param fileUrl The URL of the file to download
 * @param filename The name to save the file as
 */
export async function downloadBlob(fileUrl: string, filename: string): Promise<void> {
    try {
        // Fetch the file as a blob to handle cross-origin downloads
        const response = await fetch(fileUrl)
        if (!response.ok) throw new Error("Network response was not ok")
        const blob = await response.blob()

        // Create a blob URL
        const blobUrl = URL.createObjectURL(blob)

        // Create and trigger download
        const link = document.createElement("a")
        link.href = blobUrl
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Clean up the blob URL
        setTimeout(() => URL.revokeObjectURL(blobUrl), 100)
    } catch (error) {
        console.warn("Blob download failed, falling back to direct link:", error)
        // Fallback to direct link if fetch fails
        const link = document.createElement("a")
        link.href = fileUrl
        link.download = filename
        link.target = "_blank"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
}
