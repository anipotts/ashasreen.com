import Link from 'next/link';

export default function Overview() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-neutral-dark)] mb-4">
            Professional Work, Guided by Care
          </h2>
          <p className="text-[var(--color-neutral-dark)]/70 max-w-2xl mx-auto">
            Whether I&apos;m supporting hiring teams or preparing meals for a gathering, I approach my work with patience,
            intention, and responsibility. I believe good systems — and good people — make all the difference.
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* HR/Career Card */}
          <div className="group relative bg-[var(--color-neutral-light)] rounded-2xl p-8 border border-[var(--color-neutral-medium)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl">
            {/* Icon */}
            <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)]/20 transition-colors">
              <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-[var(--color-neutral-dark)] mb-4">
              HR & People Operations
            </h3>

            <p className="text-[var(--color-neutral-dark)]/70 mb-6 leading-relaxed">
              I support recruiters and managers by handling the details that keep hiring and onboarding running smoothly.
              From scheduling interviews to maintaining accurate records, I take pride in being dependable, organized,
              and thoughtful in every interaction.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-sm text-[var(--color-neutral-dark)]/80">
                <svg className="w-4 h-4 mr-2 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Candidate & Employee Support
              </li>
              <li className="flex items-center text-sm text-[var(--color-neutral-dark)]/80">
                <svg className="w-4 h-4 mr-2 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Interview Scheduling & Coordination
              </li>
              <li className="flex items-center text-sm text-[var(--color-neutral-dark)]/80">
                <svg className="w-4 h-4 mr-2 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ATS & HR Documentation
              </li>
            </ul>

            <Link
              href="/experience"
              className="inline-flex items-center text-[var(--color-primary)] font-medium hover:text-[var(--color-primary-dark)] transition-colors"
            >
              View Full Experience
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Culinary Card */}
          <div className="group relative bg-[var(--color-neutral-light)] rounded-2xl p-8 border border-[var(--color-neutral-medium)] hover:border-[var(--color-secondary)] transition-all duration-300 hover:shadow-xl">
            {/* Icon */}
            <div className="w-14 h-14 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
              <svg className="w-7 h-7 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-[var(--color-neutral-dark)] mb-4">
              Culinary Work
            </h3>

            <p className="text-[var(--color-neutral-dark)]/70 mb-6 leading-relaxed">
              Outside of my professional work, I run a home-based culinary project focused on traditional South Indian cuisine.
              Cooking has always been my way of bringing people together, and it reflects the same care and patience I bring
              to my professional life.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-sm text-[var(--color-neutral-dark)]/80">
                <svg className="w-4 h-4 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Large-Scale Home Catering
              </li>
              <li className="flex items-center text-sm text-[var(--color-neutral-dark)]/80">
                <svg className="w-4 h-4 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Traditional South Indian Recipes
              </li>
              <li className="flex items-center text-sm text-[var(--color-neutral-dark)]/80">
                <svg className="w-4 h-4 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Signature Biryani
              </li>
            </ul>

            <Link
              href="/culinary"
              className="inline-flex items-center text-[var(--color-secondary)] font-medium hover:text-[var(--color-secondary-dark)] transition-colors"
            >
              Explore My Culinary Work
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-neutral-dark)]/70 mb-6">
            Interested in working together or learning more?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-neutral-dark)] text-white dark:bg-[var(--color-primary)] dark:text-[#1A1A1A] font-medium rounded-lg hover:bg-[var(--color-neutral-dark)]/90 dark:hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
