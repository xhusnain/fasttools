'use client'

import { useEffect } from 'react'
import { GButton } from "@/ui/gbutton"

import { AlertTriangle } from 'lucide-react'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html>
            <body>
                <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-background text-foreground">
                    <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-full mb-4">
                        <AlertTriangle className="h-8 w-8 text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                        A critical error occurred. Please try refreshing the page.
                    </p>
                    <GButton
                        onClick={() => reset()}
                    >
                        Try Again
                    </GButton>
                </div>
            </body>
        </html>
    )
}
