'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  // Default to light mode - only use saved theme if it exists
  return savedTheme || 'light';
}

function applyThemeToDOM(newTheme: Theme): void {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  // Apply theme on mount and whenever it changes
  useEffect(() => {
    setMounted(true);
    applyThemeToDOM(theme);
  }, [theme]);

  const toggleTheme = (): void => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyThemeToDOM(newTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg hover:bg-[var(--color-neutral-medium)] transition-colors"
        aria-label="Toggle theme"
        type="button"
        disabled
      >
        <Moon size={20} weight="duotone" className="text-[var(--color-primary)]" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-[var(--color-neutral-medium)] transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      type="button"
    >
      {theme === 'dark' ? (
        <Sun size={20} weight="duotone" className="text-[var(--color-primary)]" />
      ) : (
        <Moon size={20} weight="duotone" className="text-[var(--color-primary)]" />
      )}
    </button>
  );
}
