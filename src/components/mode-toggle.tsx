"use client"

import * as React from "react"
import { ThemeIcon } from "@/components/theme-icon"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Prevent hydration mismatch by only rendering after mount
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // Return a disabled button as placeholder
        return (
            <Button
                variant="ghost"
                type="button"
                size="icon"
                className="px-2"
                disabled
            >
                <div className="h-5 w-5" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            type="button"
            size="icon"
            className="px-2 hover:bg-yellow-100 dark:hover:bg-slate-800 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <ThemeIcon />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
