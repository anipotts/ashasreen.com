'use client';

import { useEffect, useState, useCallback } from 'react';
import { CaretLeft, CaretRight, InstagramLogo, FacebookLogo, YoutubeLogo } from '@phosphor-icons/react';
import { testimonials, type Testimonial } from '@/lib/data';

const ROTATION_INTERVAL_MS = 5000;

function getPlatformIcon(platform: Testimonial['platform']) {
  switch (platform) {
    case 'instagram':
      return <InstagramLogo size={20} weight="duotone" />;
    case 'facebook':
      return <FacebookLogo size={20} weight="duotone" />;
    case 'youtube':
      return <YoutubeLogo size={20} weight="duotone" />;
  }
}

function getPlatformColor(platform: Testimonial['platform']): string {
  switch (platform) {
    case 'instagram':
      return 'text-pink-500';
    case 'facebook':
      return 'text-blue-600';
    case 'youtube':
      return 'text-red-600';
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNextSlide = useCallback((): void => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrevSlide = useCallback((): void => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) {
      return;
    }

    const interval = setInterval(goToNextSlide, ROTATION_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNextSlide]);

  function handleSlideNavigation(index: number): void {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }

  function handlePrevClick(): void {
    goToPrevSlide();
    setIsAutoPlaying(false);
  }

  function handleNextClick(): void {
    goToNextSlide();
    setIsAutoPlaying(false);
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 bg-[var(--color-neutral-light)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-neutral-dark)] mb-4">
            What People Say
          </h2>
          <p className="text-[var(--color-neutral-dark)]/70 max-w-2xl mx-auto">
            Kind words from those who&apos;ve enjoyed my cooking
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-lg p-8 md:p-12 min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={getPlatformColor(currentTestimonial.platform)}>
                  {getPlatformIcon(currentTestimonial.platform)}
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-neutral-dark)]">
                    {currentTestimonial.name}
                  </p>
                  {currentTestimonial.date && (
                    <p className="text-sm text-[var(--color-neutral-dark)]/50">
                      {formatDate(currentTestimonial.date)}
                    </p>
                  )}
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-[var(--color-neutral-dark)]/80 leading-relaxed italic">
                &ldquo;{currentTestimonial.comment}&rdquo;
              </blockquote>
            </div>

            {testimonials.length > 1 && (
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={handlePrevClick}
                  className="p-3 rounded-full bg-[var(--color-neutral-light)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
                  aria-label="Previous testimonial"
                  type="button"
                >
                  <CaretLeft size={20} weight="bold" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideNavigation(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-[var(--color-primary)] w-8'
                          : 'bg-[var(--color-neutral-medium)] w-2 hover:bg-[var(--color-primary)]/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      type="button"
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextClick}
                  className="p-3 rounded-full bg-[var(--color-neutral-light)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
                  aria-label="Next testimonial"
                  type="button"
                >
                  <CaretRight size={20} weight="bold" />
                </button>
              </div>
            )}
          </div>
        </div>

        {testimonials.length > 1 && (
          <p className="text-center mt-6 text-sm text-[var(--color-neutral-dark)]/50 md:hidden">
            Swipe or use arrows to see more
          </p>
        )}
      </div>
    </section>
  );
}
