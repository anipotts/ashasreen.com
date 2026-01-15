'use client';

import { useState } from 'react';
import { CaretDown, Check } from '@phosphor-icons/react';
import type { Experience } from '@/lib/data';

interface ExperienceCardProps {
  experience: Experience;
}

function getWorkTypeBadgeClass(type: Experience['type']): string {
  const baseClass = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  switch (type) {
    case 'remote':
      return `${baseClass} bg-[var(--color-accent)]/10 text-[var(--color-accent)]`;
    case 'hybrid':
      return `${baseClass} bg-[var(--color-primary)]/10 text-[var(--color-primary)]`;
    case 'onsite':
      return `${baseClass} bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]`;
  }
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded(): void {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div className="bg-white dark:bg-[#242424] rounded-xl border border-[var(--color-neutral-medium)] dark:border-[#3D3D3D] hover:border-[var(--color-primary)] transition-all duration-300 overflow-hidden">
      <button
        onClick={toggleExpanded}
        className="w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-inset"
        aria-expanded={isExpanded}
        type="button"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <span className={getWorkTypeBadgeClass(experience.type)}>
                {capitalizeFirst(experience.type)}
              </span>
            </div>

            <h3 className="font-serif text-xl font-semibold text-[var(--color-neutral-dark)] dark:text-white">
              {experience.role}
            </h3>
            <p className="text-[var(--color-primary)] font-medium mt-1">
              {experience.company}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-[var(--color-neutral-dark)]/60 dark:text-white/60">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="text-sm text-[var(--color-neutral-dark)]/60 dark:text-white/60">
                {experience.location}
              </p>
            </div>

            <div className={`p-2 rounded-full bg-[var(--color-neutral-light)] dark:bg-[#3D3D3D] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <CaretDown size={20} weight="bold" className="text-[var(--color-neutral-dark)] dark:text-white" />
            </div>
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 border-t border-[var(--color-neutral-medium)] dark:border-[#3D3D3D]">
          <div className="pt-6">
            <p className="text-[var(--color-neutral-dark)]/80 dark:text-white/80 leading-relaxed mb-6">
              {experience.description}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-[var(--color-neutral-dark)] dark:text-white mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} weight="bold" className="mr-2 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-dark)]/80 dark:text-white/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-neutral-dark)] dark:text-white mb-3">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--color-neutral-light)] dark:bg-[#3D3D3D] text-[var(--color-neutral-dark)]/80 dark:text-white/80 text-sm rounded-full border border-[var(--color-neutral-medium)] dark:border-[#4D4D4D]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
