"use client"

import React, { useState } from 'react'
import {
    Info,
    CheckCircle,
    AlertTriangle,
    XCircle,
    X,
    ArrowRight
} from 'lucide-react'
import { cn } from "@/lib/utils"

export type GMessageType = 'info' | 'success' | 'warning' | 'error' | 'neutral'

interface GMessageProps {
    title?: string
    message: string
    type?: GMessageType
    icon?: React.ReactNode
    onDismiss?: () => void
    action?: {
        label: string
        onClick: () => void
    }
    className?: string
    isVisible?: boolean
}

export function GMessage({
    title,
    message,
    type = 'info',
    icon,
    onDismiss,
    action,
    className,
    isVisible = true
}: GMessageProps) {
    const [isDismissed, setIsDismissed] = useState(false)

    if (!isVisible || isDismissed) return null

    const handleDismiss = () => {
        setIsDismissed(true)
        if (onDismiss) onDismiss()
    }

    // Variant configurations
    const variants = {
        info: {
            container: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
            icon: <Info className="h-5 w-5 text-blue-500" />,
            title: "text-blue-700 dark:text-blue-300",
            button: "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/20"
        },
        success: {
            container: "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400",
            icon: <CheckCircle className="h-5 w-5 text-green-500" />,
            title: "text-green-700 dark:text-green-300",
            button: "bg-green-500 hover:bg-green-600 text-white shadow-green-500/20"
        },
        warning: {
            container: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
            icon: <AlertTriangle className="h-5 w-5 text-blue-500" />,
            title: "text-blue-700 dark:text-blue-300",
            button: "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/20"
        },
        error: {
            container: "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400",
            icon: <XCircle className="h-5 w-5 text-red-500" />,
            title: "text-red-700 dark:text-red-300",
            button: "bg-red-500 hover:bg-red-600 text-white shadow-red-500/20"
        },
        neutral: {
            container: "bg-secondary/50 border-border text-muted-foreground",
            icon: <Info className="h-5 w-5 text-foreground" />,
            title: "text-foreground",
            button: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-black/5"
        }
    }

    const variant = variants[type]

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-top-2",
                variant.container,
                className
            )}
            role="alert"
        >
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />

            <div className="relative p-4 flex gap-4">
                {/* Icon Section */}
                <div className="shrink-0 mt-0.5">
                    {icon || variant.icon}
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0">
                    {title && (
                        <h4 className={cn("font-semibold mb-1 leading-none tracking-tight", variant.title)}>
                            {title}
                        </h4>
                    )}
                    <p className="text-sm leading-relaxed opacity-90">
                        {message}
                    </p>

                    {/* Action Button */}
                    {action && (
                        <div className="mt-3">
                            <button
                                onClick={action.onClick}
                                className={cn(
                                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shadow-lg active:scale-95",
                                    variant.button
                                )}
                            >
                                {action.label}
                                <ArrowRight className="h-3 w-3" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Dismiss Button */}
                {(onDismiss || !action) && (
                    <div className="shrink-0 -mr-1 -mt-1">
                        <button
                            onClick={handleDismiss}
                            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-current opacity-60 hover:opacity-100"
                            aria-label="Dismiss message"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
