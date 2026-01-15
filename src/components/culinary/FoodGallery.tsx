'use client';

import { useState } from 'react';
import { X, Image as ImageIcon } from '@phosphor-icons/react';
import type { FoodItem } from '@/lib/data';

interface FoodGalleryProps {
  items: FoodItem[];
}

interface CategoryFilter {
  id: string;
  label: string;
}

const CATEGORIES: CategoryFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'biryani', label: 'Biryani' },
  { id: 'curry', label: 'Curries' },
  { id: 'appetizer', label: 'Appetizers' },
  { id: 'dessert', label: 'Desserts' },
];

function getCategoryFilterClass(isActive: boolean): string {
  const baseClass = 'px-4 py-2 rounded-full text-sm font-medium transition-colors';
  if (isActive) {
    return `${baseClass} bg-[var(--color-secondary)] text-white`;
  }
  return `${baseClass} bg-[var(--color-neutral-light)] dark:bg-[#3D3D3D] text-[var(--color-neutral-dark)] dark:text-white hover:bg-[var(--color-neutral-medium)] dark:hover:bg-[#4D4D4D]`;
}

export default function FoodGallery({ items }: FoodGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  function handleCategoryChange(categoryId: string): void {
    setActiveCategory(categoryId);
  }

  function handleItemSelect(item: FoodItem): void {
    setSelectedItem(item);
  }

  function handleCloseModal(): void {
    setSelectedItem(null);
  }

  function handleBackdropClick(): void {
    setSelectedItem(null);
  }

  function handleModalContentClick(e: React.MouseEvent): void {
    e.stopPropagation();
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={getCategoryFilterClass(activeCategory === category.id)}
            type="button"
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemSelect(item)}
            className="group relative aspect-square rounded-xl overflow-hidden bg-[var(--color-neutral-medium)] dark:bg-[#3D3D3D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]"
            type="button"
          >
            <div className="absolute inset-0 image-placeholder">
              <div className="flex flex-col items-center justify-center text-[var(--color-neutral-dark)]/40 dark:text-white/40">
                <ImageIcon size={48} weight="duotone" className="mb-2" />
                <span className="text-xs">Photo coming soon</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="font-serif text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>

            <div className="absolute top-4 left-4">
              <span className="px-2 py-1 bg-[var(--color-secondary)] text-white text-xs font-medium rounded-full capitalize">
                {item.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative bg-white dark:bg-[#242424] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={handleModalContentClick}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-[var(--color-neutral-light)] dark:bg-[#3D3D3D] text-[var(--color-neutral-dark)] dark:text-white hover:bg-[var(--color-neutral-medium)] dark:hover:bg-[#4D4D4D] transition-colors z-10"
              aria-label="Close"
              type="button"
            >
              <X size={20} weight="bold" />
            </button>

            <div className="aspect-video image-placeholder">
              <div className="flex flex-col items-center justify-center text-[var(--color-neutral-dark)]/40 dark:text-white/40">
                <ImageIcon size={64} weight="duotone" className="mb-2" />
                <span className="text-sm">Photo coming soon</span>
              </div>
            </div>

            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium rounded-full capitalize mb-3">
                {selectedItem.category}
              </span>
              <h3 id="modal-title" className="font-serif text-2xl font-bold text-[var(--color-neutral-dark)] dark:text-white mb-3">
                {selectedItem.title}
              </h3>
              <p className="text-[var(--color-neutral-dark)]/70 dark:text-white/70 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
