'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

type Theme = 'light' | 'dark';

function applyThemeToDOM(newTheme: Theme): void {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export default function ThemeToggle() {
  // Start with 'light' - will sync with actual state on mount
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Sync with actual DOM state and localStorage on mount
  useEffect(() => {
    // Check what the DOM actually has (set by inline script)
    const isDarkClass = document.documentElement.classList.contains('dark');
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    // Use saved theme if exists, otherwise use DOM state, otherwise default to light
    const actualTheme = savedTheme || (isDarkClass ? 'dark' : 'light');
    setTheme(actualTheme);
    // Ensure DOM matches the resolved theme
    applyThemeToDOM(actualTheme);
    setMounted(true);
  }, []);

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
