'use client';

import { useState } from 'react';
import type { FoodItem } from '@/lib/data';

interface FoodGalleryProps {
  items: FoodItem[];
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'biryani', label: 'Biryani' },
  { id: 'curry', label: 'Curries' },
  { id: 'appetizer', label: 'Appetizers' },
  { id: 'dessert', label: 'Desserts' },
] as const;

export default function FoodGallery({ items }: FoodGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-[var(--color-secondary)] text-white'
                : 'bg-[var(--color-neutral-light)] text-[var(--color-neutral-dark)] hover:bg-[var(--color-neutral-medium)]'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative aspect-square rounded-xl overflow-hidden bg-[var(--color-neutral-medium)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]"
          >
            {/* Placeholder Image */}
            <div className="absolute inset-0 image-placeholder">
              <div className="flex flex-col items-center justify-center text-[var(--color-neutral-dark)]/40">
                <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">Photo coming soon</span>
              </div>
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-neutral-dark)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="font-serif text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-2 py-1 bg-[var(--color-secondary)] text-white text-xs font-medium rounded-full capitalize">
                {item.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal for selected item */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[var(--color-neutral-light)] hover:bg-[var(--color-neutral-medium)] transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image placeholder */}
            <div className="aspect-video image-placeholder">
              <div className="flex flex-col items-center justify-center text-[var(--color-neutral-dark)]/40">
                <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Photo coming soon</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium rounded-full capitalize mb-3">
                {selectedItem.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--color-neutral-dark)] mb-3">
                {selectedItem.title}
              </h3>
              <p className="text-[var(--color-neutral-dark)]/70 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
