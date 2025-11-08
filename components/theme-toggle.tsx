"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)

    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    if (!storedTheme && theme !== "dark") {
      setTheme("dark")
    }
  }, [theme, setTheme])

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme)
    }
  }

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
      >
        <div className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
      className="p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}

