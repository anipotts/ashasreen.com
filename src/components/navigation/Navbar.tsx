'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { List, X } from '@phosphor-icons/react';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/culinary', label: 'Culinary' },
  { href: '/contact', label: 'Contact' },
];

function getDesktopLinkClass(isActive: boolean): string {
  const baseClass = 'text-sm font-medium transition-colors';
  if (isActive) {
    return `${baseClass} text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]`;
  }
  return `${baseClass} text-[var(--color-neutral-dark)] hover:text-[var(--color-primary)]`;
}

function getMobileLinkClass(isActive: boolean): string {
  const baseClass = 'px-3 py-2 rounded-md text-base font-medium transition-colors';
  if (isActive) {
    return `${baseClass} bg-[var(--color-primary)]/10 text-[var(--color-primary)]`;
  }
  return `${baseClass} text-[var(--color-neutral-dark)] hover:bg-[var(--color-neutral-medium)]`;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  function toggleMenu(): void {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu(): void {
    setIsMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-neutral-light)]/95 backdrop-blur-sm border-b border-[var(--color-neutral-medium)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-serif text-xl font-semibold text-[var(--color-neutral-dark)] hover:text-[var(--color-primary)] transition-colors"
          >
            Asha Sreenivasan
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getDesktopLinkClass(pathname === link.href)}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-[var(--color-neutral-dark)] hover:bg-[var(--color-neutral-medium)] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            {isMenuOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-neutral-medium)]">
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={getMobileLinkClass(pathname === link.href)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center justify-between">
                <span className="text-sm font-medium text-[var(--color-neutral-dark)]">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
