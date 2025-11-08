"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface ToastProps {
  type: "success" | "warning" | "error" | "info"
  message: string
  duration?: number
  onClose?: () => void
}

export function Toast({ type, message, duration = 3000, onClose }: ToastProps) {
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
          container: "bg-primary border-orange-600",
          text: "text-white",
          subtext: "text-white",
          dot: "bg-white",
          icon: "✅"
        }
      case "warning":
        return {
          container: "bg-blue-500 border-blue-600",
          text: "text-white",
          subtext: "text-white",
          dot: "bg-white",
          icon: "⚠️"
        }
      case "error":
        return {
          container: "bg-red-500 border-red-600",
          text: "text-white",
          subtext: "text-white",
          dot: "bg-white",
          icon: "❌"
        }
      case "info":
        return {
          container: "bg-gray-500 border-gray-600",
          text: "text-white",
          subtext: "text-white",
          dot: "bg-white",
          icon: "ℹ️"
        }
      default:
        return {
          container: "bg-gray-500 border-gray-600",
          text: "text-white",
          subtext: "text-white",
          dot: "bg-white",
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

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-[9999] space-y-2">
      {toasts.map((toast) => (
        <div key={toast.id}>
          <Toast
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  )

  return { showToast, ToastContainer }
}
