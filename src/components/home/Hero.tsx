import Link from "next/link";
import Image from "next/image";

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
              Hi, I&apos;m{" "}
              <span className="text-[var(--color-primary)]">Asha</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-neutral-dark)]/80 leading-relaxed mb-8">
              I&apos;m an HR professional with a strong focus on candidate
              experience, coordination, and people operations. I bring care,
              organization, and follow-through to every role I support.
            </p>
            <p className="text-lg md:text-xl text-[var(--color-neutral-dark)]/80 leading-relaxed mb-8">
              I&apos;m currently seeking a remote, part-time or full-time
              opportunity where I can help teams run smoothly and ensure
              candidates and employees feel supported throughout every step of
              the process.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/experience"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors shadow-lg shadow-[var(--color-primary)]/25"
              >
                View My Experience
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/culinary"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-medium rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition-colors"
              >
                Explore My Culinary Work
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--color-primary)] dark:border-[var(--color-primary)]/60 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[var(--color-secondary)]/20 dark:bg-[var(--color-secondary)]/10 rounded-2xl" />

              {/* Photo container */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/images/headshot-coral.jpeg"
                  alt="Asha Sreenivasan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
