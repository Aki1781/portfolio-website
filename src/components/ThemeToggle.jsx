import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme= localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, [])
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }
    return (
        <button
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
            className={cn(
                // show on md and up so it aligns with the navbar; remove fixed positioning
                "hidden md:inline-flex p-2 rounded-full transition-colors duration-300 theme-toggle relative",
                "focus:outline-none"
        )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 theme-toggle-sun" />
            ) : (
                <Moon className="h-6 w-6 theme-toggle-moon" />
            )}
        </button>
    )
}

export default ThemeToggle