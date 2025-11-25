import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        // Check for saved theme preference or default to 'dark'
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const initialTheme = savedTheme || 'dark';
        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    const applyTheme = (newTheme: 'light' | 'dark') => {
        const root = document.documentElement;
        if (newTheme === 'light') {
            root.classList.add('light');
            document.body.classList.add('light');
        } else {
            root.classList.remove('light');
            document.body.classList.remove('light');
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-glow)] group min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300 group-hover:rotate-180 transition-transform" />
            ) : (
                <Moon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300 group-hover:-rotate-12 transition-transform" />
            )}
        </button>
    );
};
