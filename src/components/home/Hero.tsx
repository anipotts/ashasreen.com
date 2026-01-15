import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neutral-light)] via-[var(--color-neutral-light)] to-[var(--color-primary)]/10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <p className="text-[var(--color-primary)] font-medium mb-2 tracking-wide uppercase text-sm">
              Welcome
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-neutral-dark)] leading-tight mb-6">
              Hi, I&apos;m{' '}
              <span className="text-[var(--color-primary)]">Asha</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-neutral-dark)]/80 leading-relaxed mb-8">
              HR & People Science professional with a passion for creating exceptional candidate experiences.
              When I&apos;m not connecting talent with opportunity, I&apos;m crafting authentic South Indian cuisine
              for gatherings of all sizes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/experience"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors shadow-lg shadow-[var(--color-primary)]/25"
              >
                View My Experience
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/culinary"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-medium rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition-colors"
              >
                Explore My Cuisine
              </Link>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--color-primary)] rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[var(--color-secondary)]/20 rounded-2xl" />

              {/* Photo container */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden image-placeholder border-4 border-white shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-neutral-dark)]/50 p-4">
                  <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm text-center font-medium">Professional Photo</p>
                  <p className="text-xs text-center mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
