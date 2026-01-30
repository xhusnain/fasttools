import { getAuthHeaders } from "@/lib/m2m-auth";

/**
 * Downloads a file from a URL by first fetching it as a blob to handle cross-origin issues,
 * then creating a temporary object URL to trigger the download.
 * Falls back to a direct link download if the fetch fails.
 *
 * @param fileUrl The URL of the file to download
 * @param filename The name to save the file as
 * @param requireAuth Whether to include authentication headers (default: true for API endpoints)
 */
export async function downloadBlob(fileUrl: string, filename: string, requireAuth: boolean = true): Promise<void> {
    try {
        // Check if this is an API endpoint that requires authentication
        const isApiEndpoint = fileUrl.includes('api-removebg.fasttools.store') || 
                             fileUrl.includes('api.fasttools')
        // Prepare headers
        const headers: Record<string, string> = {};
        
        // Add authentication if needed
        if (requireAuth && isApiEndpoint) {
            try {
                const authHeaders = await getAuthHeaders();
                headers['Authorization'] = authHeaders['Authorization'];
            } catch (error) {
                console.warn("Failed to generate auth token, proceeding without auth:", error);
            }
        }

        // Fetch the file as a blob to handle cross-origin downloads
        const response = await fetch(fileUrl, {
            headers,
        });
        
        if (!response.ok) {
            const errorText = await response.text().catch(() => '');
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}${errorText ? ` - ${errorText}` : ''}`);
        }
        
        const blob = await response.blob();

        // Create a blob URL
        const blobUrl = URL.createObjectURL(blob);

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
