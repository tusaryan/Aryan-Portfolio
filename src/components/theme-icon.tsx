"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * ThemeIcon displays the current theme as an icon.
 * It shows a Sun icon for light mode and a Moon icon for dark mode.
 * Uses mounted state to prevent hydration mismatch.
 */
export function ThemeIcon() {
    const { theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Prevent hydration mismatch by only rendering after mount
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a placeholder with same dimensions
        return <Sun className="h-5 w-5" aria-label="Loading theme" />;
    }

    const isDark = theme === "dark";
    return isDark ? (
        <Moon className="h-5 w-5 text-blue-500 dark:text-cyan-400" aria-label="Dark mode" />
    ) : (
        <Sun className="h-5 w-5 text-yellow-500" aria-label="Light mode" />
    );
}
