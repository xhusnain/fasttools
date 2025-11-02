"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface EmbedConfig {
  apiUrl?: string
  theme?: "light" | "dark" | "auto"
  width?: string
  height?: string
}

export function BgRemoverEmbed({ config = {} }: { config?: EmbedConfig }) {
  const {
    apiUrl = typeof window !== 'undefined' ? `${window.location.origin}/api/bg-remover` : '/api/bg-remover',
    theme = "auto",
    width,
    height
  } = config

  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [status, setStatus] = useState<{ stage: "idle" | "processing" | "completed" | "error"; progress: number; message: string }>({ 
    stage: "idle", 
    progress: 0, 
    message: "Ready to process images" 
  })
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Detect theme with manual toggle support
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light")
  const [manualTheme, setManualTheme] = useState<"light" | "dark" | null>(null)
  
  useEffect(() => {
    if (manualTheme !== null) {
      setCurrentTheme(manualTheme)
    } else if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handler = (e: MediaQueryListEvent) => {
        if (manualTheme === null) {
          setCurrentTheme(e.matches ? "dark" : "light")
        }
      }
      setCurrentTheme(mediaQuery.matches ? "dark" : "light")
      mediaQuery.addEventListener("change", handler)
      return () => mediaQuery.removeEventListener("change", handler)
    } else {
      setCurrentTheme(theme)
    }
  }, [theme, manualTheme])

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light"
    setManualTheme(newTheme)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = async (event) => {
      const url = event.target?.result as string
      
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        setImageUrl(url)
        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight })
        setResultUrl(null)
        setTimeout(() => processImage(img), 50)
      }
      img.onerror = () => {
        alert("⚠️ Failed to load image. Please try uploading a different image.")
      }
      img.src = url
    }
    reader.readAsDataURL(file)
  }

  const processImage = async (image: HTMLImageElement) => {
    try {
      setIsProcessing(true)
      setStatus({ stage: "processing", progress: 50, message: "Processing..." })

      // Convert image to Blob
      const canvas = document.createElement("canvas")
      canvas.width = image.naturalWidth || image.width
      canvas.height = image.naturalHeight || image.height
      const ctx = canvas.getContext("2d")
      if (!ctx) throw new Error("Canvas context not available")
      ctx.drawImage(image, 0, 0)
      const blob: Blob = await new Promise((resolve, reject) =>
        canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Failed to get image blob"))), "image/png")
      )

      // Send to API
      const form = new FormData()
      form.append("image", blob, "input.png")
      const resp = await fetch(`${apiUrl}?refine=depth&strength=strong`, { method: "POST", body: form })
      
      if (!resp.ok) {
        const errText = await resp.text().catch(() => "")
        throw new Error(errText || `Server error ${resp.status}`)
      }
      
      const resultBlob = await resp.blob()
      const url = URL.createObjectURL(resultBlob)
      setResultUrl(url)
      setStatus({ stage: "completed", progress: 100, message: "Processing complete" })
    } catch (error) {
      console.error("Background removal error:", error)
      setStatus({ stage: "error", progress: 0, message: "Something went wrong. Please try again." })
    } finally {
      setIsProcessing(false)
    }
  }

  const downloadImage = () => {
    if (!resultUrl) return
    const link = document.createElement('a')
    link.href = resultUrl
    link.download = 'background-removed.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resetAll = () => {
    if (imageUrl) URL.revokeObjectURL(imageUrl)
    if (resultUrl) URL.revokeObjectURL(resultUrl)
    setImageUrl(null)
    setResultUrl(null)
    setImageDimensions(null)
    setStatus({ stage: "idle", progress: 0, message: "Ready to process images" })
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  // Inline styles for portability
  const styles = {
    container: {
      width: width || "100%",
      height: height || "auto",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      background: currentTheme === "dark" ? "#000000" : "#f9fafb",
      padding: "12px",
      "--embed-bg": currentTheme === "dark" ? "#1a1a1a" : "#ffffff",
      "--embed-border": currentTheme === "dark" ? "#333333" : "#e5e7eb",
      "--embed-text": currentTheme === "dark" ? "#ffffff" : "#1f2937",
      "--embed-muted": currentTheme === "dark" ? "#9ca3af" : "#6b7280",
      "--embed-primary": currentTheme === "dark" ? "#a855f7" : "#FF7F00",
      "--embed-primary-hover": currentTheme === "dark" ? "#9333ea" : "#E67300",
      "--embed-secondary": currentTheme === "dark" ? "#f3f4f6" : "#f9fafb",
    } as React.CSSProperties,
    card: {
      background: "var(--embed-bg)",
      border: "1px solid var(--embed-border)",
      borderRadius: "12px",
      padding: "16px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    uploadArea: {
      width: "100%",
      border: "2px dashed var(--embed-border)",
      borderRadius: "8px",
      cursor: "pointer",
      background: currentTheme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s",
    },
    uploadAreaHover: {
      borderColor: "var(--embed-primary)",
    },
    button: {
      background: "linear-gradient(to right, #FF7F00, #E67300)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      padding: "12px 24px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      transition: "all 0.2s",
    },
    buttonHover: {
      opacity: 0.9,
      transform: "translateY(-1px)",
    },
    buttonSecondary: {
      background: "transparent",
      border: "1px solid var(--embed-border)",
      color: "var(--embed-text)",
      borderRadius: "8px",
      padding: "8px 16px",
      fontSize: "14px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
    },
  }

  return (
    <div style={styles.container}>
      {/* Top Navbar with Logo and Theme Toggle */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        background: "var(--embed-bg)",
        borderBottom: `1px solid ${currentTheme === "dark" ? "#333333" : "#e5e7eb"}`,
        marginBottom: "16px"
      }}>
        {/* Logo on Left */}
        <a 
          href="https://www.fasttools.store" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "10px", 
            textDecoration: "none"
          }}
        >
          <div style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "#FF7F00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img src="/logo.svg" alt="FastTools" style={{ width: "20px", height: "20px" }} />
          </div>
          <span style={{ 
            fontSize: "20px", 
            fontWeight: "bold", 
            color: "var(--embed-text)" 
          }}>
            FastTools
          </span>
        </a>

        {/* Theme Toggle on Right */}
        <button
          onClick={toggleTheme}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            border: `1px solid ${currentTheme === "dark" ? "#333333" : "#e5e7eb"}`,
            background: "transparent",
            cursor: "pointer",
            color: "var(--embed-text)"
          }}
          title={currentTheme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {currentTheme === "light" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2" />
              <path d="M12 21v2" />
              <path d="M4.22 4.22l1.42 1.42" />
              <path d="M18.36 18.36l1.42 1.42" />
              <path d="M1 12h2" />
              <path d="M21 12h2" />
              <path d="M4.22 19.78l1.42-1.42" />
              <path d="M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </button>
      </div>

      <div style={styles.card}>
        <div className="embed-grid">
          {/* Left Side - Original */}
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "var(--embed-text)" }}>
              Original Image
              {imageDimensions && (
                <span style={{ fontSize: "12px", color: "var(--embed-muted)", marginLeft: "12px" }}>
                  {imageDimensions.width} × {imageDimensions.height}
                </span>
              )}
            </h3>
            <label style={{
              ...styles.uploadArea,
              height: imageUrl ? "auto" : "min(600px, 73.25vh)",
              minHeight: "min(550px, 58.25vh)",
              maxHeight: "min(650px, 78.25vh)",
            }} onMouseEnter={e => e.currentTarget.style.borderColor = "var(--embed-primary)"} onMouseLeave={e => e.currentTarget.style.borderColor = "var(--embed-border)"}>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              {imageUrl ? (
                <img src={imageUrl} alt="Original" style={{ maxWidth: "100%", maxHeight: "min(600px, 73.25vh)", objectFit: "contain" }} />
              ) : (
                <div style={{ textAlign: "center", padding: "24px" }}>
                  <div style={{ 
                    width: "64px", 
                    height: "64px", 
                    margin: "0 auto 16px", 
                    borderRadius: "50%", 
                    background: "linear-gradient(135deg, #FF7F00, #E67300)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <p style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "var(--embed-text)" }}>
                    Click to upload
                  </p>
                  <p style={{ fontSize: "14px", color: "var(--embed-muted)" }}>
                    PNG, JPG, JPEG, WebP
                  </p>
                </div>
              )}
            </label>
          </div>

          {/* Right Side - Result */}
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "var(--embed-text)" }}>
              Result
            </h3>
            <div style={{
              width: "100%",
              minHeight: "min(550px, 58.25vh)",
              height: "min(600px, 73.25vh)",
              maxHeight: "min(650px, 78.25vh)",
              border: "1px solid var(--embed-border)",
              borderRadius: "8px",
              background: "white",
              backgroundImage: "repeating-conic-gradient(#d1d5db 0% 25%, #ffffff 0% 50%)",
              backgroundSize: "20px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "auto",
            }}>
              {!imageUrl && !isProcessing && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    margin: "0 auto 16px", 
                    borderRadius: "50%", 
                    background: "linear-gradient(135deg, #FF7F00, #E67300)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--embed-text)" }}>
                    Upload an image to see the result
                  </p>
                </div>
              )}
              {isProcessing && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: "48px", height: "48px", margin: "0 auto 16px", animation: "spin 1s linear infinite" }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--embed-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  </div>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "var(--embed-text)" }}>{status.message}</p>
                </div>
              )}
              {resultUrl && !isProcessing && (
                <img src={resultUrl} alt="Background removed" style={{ maxWidth: "100%", maxHeight: "min(600px, 73.25vh)", objectFit: "contain" }} />
              )}
            </div>

            {resultUrl && !isProcessing && (
              <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
                <button onClick={downloadImage} style={styles.button} onMouseEnter={e => e.currentTarget.style.opacity = "0.9"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PNG
                </button>
                <button onClick={resetAll} style={styles.buttonSecondary}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                  New Image
                </button>
              </div>
            )}

            {status.stage === "error" && (
              <div style={{ marginTop: "16px", padding: "16px", background: currentTheme === "dark" ? "rgba(239,68,68,0.1)" : "#fee2e2", borderRadius: "8px", border: "1px solid #fca5a5" }}>
                <p style={{ fontSize: "14px", color: "#dc2626" }}>
                  ⚠️ {status.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .embed-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .embed-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />
    </div>
  )
}

