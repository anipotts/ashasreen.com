'use client';

import { useSyncExternalStore, useCallback } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

type Theme = 'light' | 'dark';

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getServerSnapshot(): Theme {
  return 'light';
}

function subscribe(callback: () => void): () => void {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', callback);
  window.addEventListener('storage', callback);
  return () => {
    mediaQuery.removeEventListener('change', callback);
    window.removeEventListener('storage', callback);
  };
}

function applyThemeToDOM(newTheme: Theme): void {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot);

  // Apply theme to DOM when it changes
  if (typeof window !== 'undefined') {
    applyThemeToDOM(theme);
  }

  const toggleTheme = useCallback((): void => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyThemeToDOM(newTheme);
    // Trigger storage event to update the store
    window.dispatchEvent(new StorageEvent('storage'));
  }, [theme]);

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
