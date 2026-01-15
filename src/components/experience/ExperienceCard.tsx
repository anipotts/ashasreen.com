'use client';

import { useState } from 'react';
import type { Experience } from '@/lib/data';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-[var(--color-neutral-medium)] hover:border-[var(--color-primary)] transition-all duration-300 overflow-hidden">
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-inset"
        aria-expanded={isExpanded}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              {/* Work type badge */}
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                experience.type === 'remote'
                  ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                  : experience.type === 'hybrid'
                  ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                  : 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
              }`}>
                {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
              </span>
            </div>

            <h3 className="font-serif text-xl font-semibold text-[var(--color-neutral-dark)]">
              {experience.role}
            </h3>
            <p className="text-[var(--color-primary)] font-medium mt-1">
              {experience.company}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-[var(--color-neutral-dark)]/60">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="text-sm text-[var(--color-neutral-dark)]/60">
                {experience.location}
              </p>
            </div>

            {/* Expand/Collapse icon */}
            <div className={`p-2 rounded-full bg-[var(--color-neutral-light)] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5 text-[var(--color-neutral-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 border-t border-[var(--color-neutral-medium)]">
          <div className="pt-6">
            {/* Description */}
            <p className="text-[var(--color-neutral-dark)]/80 leading-relaxed mb-6">
              {experience.description}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="font-semibold text-[var(--color-neutral-dark)] mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[var(--color-neutral-dark)]/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold text-[var(--color-neutral-dark)] mb-3">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--color-neutral-light)] text-[var(--color-neutral-dark)]/80 text-sm rounded-full border border-[var(--color-neutral-medium)]"
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
