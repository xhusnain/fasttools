export async function downloadBlob(fileUrl: string, filename: string, httpHeaders?: Record<string, string>): Promise<void> {
    try {
        let proxyUrl = `/api/download-proxy?url=${encodeURIComponent(fileUrl)}&filename=${encodeURIComponent(filename)}`;
        
        if (httpHeaders && Object.keys(httpHeaders).length > 0) {
            const headersParam = encodeURIComponent(JSON.stringify(httpHeaders));
            proxyUrl += `&headers=${headersParam}`;
        }
        
        const link = document.createElement("a");
        link.href = proxyUrl;
        link.download = filename;
        link.style.display = 'none';
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        
        setTimeout(() => {
            if (document.body.contains(link)) {
                document.body.removeChild(link);
            }
        }, 100);
        
    } catch (error) {
        console.error("Download failed:", error);
        throw new Error(`Failed to download file: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
