import type { Metadata } from 'next';
import { LinkedinLogo, FilePdf } from '@phosphor-icons/react/dist/ssr';
import ExperienceCard from '@/components/experience/ExperienceCard';
import CoreCompetencies from '@/components/experience/CoreCompetencies';
import { experiences, socialLinks } from '@/lib/data';

const RESUME_PATH = '/resumes/asha-sreenivasan-resume-jan-2026.pdf';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience in HR, People Science, and candidate experience management.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)] dark:bg-[#0D0D0D]">
      <section className="py-16 md:py-24 bg-gradient-to-b from-white dark:from-[#0D0D0D] to-[var(--color-neutral-light)] dark:to-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-primary)] font-medium mb-2 tracking-wide uppercase text-sm">
            Career Journey
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-neutral-dark)] dark:text-white mb-6">
            Professional Experience
          </h1>
          <p className="text-lg text-[var(--color-neutral-dark)]/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            Skilled in managing end-to-end hiring coordination, ATS administration, and candidate communications.
            I bring structure and reliability to HR operations while maintaining the human touch that creates exceptional candidate experiences.
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

        </div>
      </section>

      <CoreCompetencies />

      <section className="py-16 md:py-24 bg-[var(--color-primary)] dark:bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-white/80 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Download my resume or connect with me on LinkedIn to learn more about my professional background.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-primary)] font-medium rounded-lg hover:bg-[var(--color-neutral-light)] transition-colors"
            >
              <FilePdf size={20} weight="duotone" className="mr-2" />
              Download Resume
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 dark:bg-[var(--color-primary)] text-white dark:text-white font-medium rounded-lg hover:bg-white/20 dark:hover:bg-[var(--color-primary-dark)] transition-colors border border-white/30 dark:border-transparent"
            >
              <LinkedinLogo size={20} weight="duotone" className="mr-2" />
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
