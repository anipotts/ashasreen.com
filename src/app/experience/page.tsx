import type { Metadata } from 'next';
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import ExperienceCard from '@/components/experience/ExperienceCard';
import CoreCompetencies from '@/components/experience/CoreCompetencies';
import { experiences, socialLinks } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience in HR, People Science, and candidate experience management.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)] dark:bg-[#1A1A1A]">
      <section className="py-16 md:py-24 bg-gradient-to-b from-white dark:from-[#1F1F1F] to-[var(--color-neutral-light)] dark:to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-primary)] font-medium mb-2 tracking-wide uppercase text-sm">
            Career Journey
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-neutral-dark)] dark:text-white mb-6">
            Professional Experience
          </h1>
          <p className="text-lg text-[var(--color-neutral-dark)]/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            My experience centers on supporting hiring teams, coordinating candidates, and maintaining reliable HR processes.
            I value clear communication, consistency, and creating calm, positive experiences for everyone involved.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>

          <div className="mt-8 p-6 bg-[var(--color-primary)]/5 dark:bg-[#242424] rounded-xl border border-[var(--color-primary)]/20 dark:border-[var(--color-primary)]/30">
            <p className="text-sm text-[var(--color-neutral-dark)]/70 dark:text-white/70 text-center">
              <span className="font-medium text-[var(--color-primary)]">Note:</span> These are placeholder entries.
              Full details will be added soon with specific achievements and metrics.
            </p>
          </div>
        </div>
      </section>

      <CoreCompetencies />

      <section className="py-16 md:py-24 bg-[var(--color-neutral-dark)] dark:bg-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-neutral-light)] dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-[var(--color-neutral-medium)] dark:text-gray-400 mb-8 max-w-xl mx-auto">
            For a complete overview of my professional background and experience,
            please visit my LinkedIn profile.
          </p>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            <LinkedinLogo size={20} weight="duotone" className="mr-2" />
            View LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  );
}
