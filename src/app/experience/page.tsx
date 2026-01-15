import type { Metadata } from 'next';
import ExperienceCard from '@/components/experience/ExperienceCard';
import { experiences, socialLinks } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience in HR, People Science, and candidate experience management.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white dark:from-[#1F1F1F] to-[var(--color-neutral-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-primary)] font-medium mb-2 tracking-wide uppercase text-sm">
            Career Journey
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-neutral-dark)] mb-6">
            Professional Experience
          </h1>
          <p className="text-lg text-[var(--color-neutral-dark)]/70 max-w-2xl mx-auto leading-relaxed">
            My career has been focused on creating exceptional experiences for candidates and
            supporting HR operations. Here&apos;s a look at my professional journey.
          </p>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>

          {/* Placeholder notice */}
          <div className="mt-8 p-6 bg-[var(--color-primary)]/5 rounded-xl border border-[var(--color-primary)]/20">
            <p className="text-sm text-[var(--color-neutral-dark)]/70 text-center">
              <span className="font-medium text-[var(--color-primary)]">Note:</span> These are placeholder entries.
              Full details will be added soon with specific achievements and metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-neutral-dark)] mb-8 text-center">
            Core Competencies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { skill: 'Candidate Experience', icon: '👥' },
              { skill: 'ATS Management', icon: '💻' },
              { skill: 'Interview Coordination', icon: '📅' },
              { skill: 'HR Operations', icon: '📋' },
              { skill: 'Communication', icon: '💬' },
              { skill: 'Remote Work', icon: '🏠' },
              { skill: 'Organization', icon: '📁' },
              { skill: 'Problem Solving', icon: '🧩' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-[var(--color-neutral-light)] rounded-xl text-center border border-[var(--color-neutral-medium)] hover:border-[var(--color-primary)] transition-colors"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <span className="text-sm font-medium text-[var(--color-neutral-dark)]">
                  {item.skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-neutral-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-neutral-light)] mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-[var(--color-neutral-medium)] mb-8 max-w-xl mx-auto">
            For a complete view of my professional background and to connect,
            visit my LinkedIn profile.
          </p>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  );
}
