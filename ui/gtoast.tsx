"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface GToastProps {
  type: "success" | "warning" | "error" | "info"
  message: string
  duration?: number
  onClose?: () => void
}

export function GToast({ type, message, duration = 3000, onClose }: GToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onClose?.()
      }, 300) // Wait for animation to complete
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const getThemeClasses = () => {
    switch (type) {
      case "success":
        return {
          container: "bg-[var(--secondary-accent)] border-[var(--secondary-accent)]",
          text: "text-[var(--secondary-accent-foreground)]",
          subtext: "text-[var(--secondary-accent-foreground)]",
          dot: "bg-[var(--secondary-accent-foreground)]",
          icon: "✅"
        }
      case "warning":
        return {
          container: "bg-[var(--tertiary-accent)] border-[var(--tertiary-accent)]",
          text: "text-[var(--tertiary-accent-foreground)]",
          subtext: "text-[var(--tertiary-accent-foreground)]",
          dot: "bg-[var(--tertiary-accent-foreground)]",
          icon: "⚠️"
        }
      case "error":
        return {
          container: "bg-destructive border-destructive",
          text: "text-destructive-foreground",
          subtext: "text-destructive-foreground",
          dot: "bg-destructive-foreground",
          icon: "❌"
        }
      case "info":
        return {
          container: "bg-primary border-primary",
          text: "text-primary-foreground",
          subtext: "text-primary-foreground",
          dot: "bg-primary-foreground",
          icon: "ℹ️"
        }
      default:
        return {
          container: "bg-primary border-primary",
          text: "text-primary-foreground",
          subtext: "text-primary-foreground",
          dot: "bg-primary-foreground",
          icon: "ℹ️"
        }
    }
  }

  const theme = getThemeClasses()

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-[9999] animate-in slide-in-from-top-2 duration-300">
      <div className={`${theme.container} border rounded-lg px-4 py-2.5 shadow-lg max-w-sm relative`}>
        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(() => onClose?.(), 300)
          }}
          className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-2 pr-6">
          <p className={`text-sm font-medium ${theme.text}`}>
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}

// Hook for easy usage
export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: string; type: "success" | "warning" | "error" | "info"; message: string; duration?: number }>>([])

  const showToast = (type: "success" | "warning" | "error" | "info", message: string, duration?: number) => {
    const id = Date.now().toString()
    // Auto-dismiss previous toast and show new one
    setToasts([{ id, type, message, duration }])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const GToastContainer = () => (
    <div className="fixed top-4 right-4 z-[9999] space-y-2">
      {toasts.map((toast) => (
        <div key={toast.id}>
          <GToast
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  )

  return { showToast, ToastContainer: GToastContainer, GToastContainer }
}
