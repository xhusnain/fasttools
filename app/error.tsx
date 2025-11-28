'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function Error({
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
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-full mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
                We apologize for the inconvenience. An unexpected error has occurred.
            </p>
            <div className="flex gap-4">
                <Button
                    onClick={() => window.location.reload()}
                    variant="outline"
                >
                    Refresh Page
                </Button>
                <Button
                    onClick={() => reset()}
                >
                    Try Again
                </Button>
            </div>
        </div>
    )
}
