import type { Metadata } from 'next';
import Link from 'next/link';
import FoodGallery from '@/components/culinary/FoodGallery';
import SocialEmbed from '@/components/culinary/SocialEmbed';
import { foodItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Culinary',
  description: 'Authentic South Indian cuisine and large-scale catering services. Specializing in biryani for events of 50-100+ guests.',
};

export default function CulinaryPage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[var(--color-secondary)]/10 to-[var(--color-neutral-light)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-secondary)] font-medium mb-2 tracking-wide uppercase text-sm">
            Personal Work
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-neutral-dark)] mb-6">
            Culinary Work
          </h1>
          <p className="text-lg text-[var(--color-neutral-dark)]/70 max-w-2xl mx-auto leading-relaxed">
            Cooking has always been a meaningful part of my life. I specialize in traditional South Indian dishes
            prepared with intention and attention to detail — the same values that guide my professional work.
          </p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-12 bg-white dark:bg-[#1F1F1F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Specialty Card 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🍚</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-[var(--color-neutral-dark)] mb-2">
                Signature Biryani
              </h3>
              <p className="text-sm text-[var(--color-neutral-dark)]/70">
                Traditional malabar biryani (chicken/mutton/shrimp) prepared with aromatic spices and high-quality ingredients.
              </p>
            </div>

            {/* Specialty Card 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-[var(--color-neutral-dark)] mb-2">
                Home Catering for Hundreds
              </h3>
              <p className="text-sm text-[var(--color-neutral-dark)]/70">
                Experience preparing food for gatherings of 50–100+ guests while maintaining consistency and extremely high quality.
              </p>
            </div>

            {/* Specialty Card 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-[var(--color-neutral-dark)] mb-2">
                Efficient Preparation
              </h3>
              <p className="text-sm text-[var(--color-neutral-dark)]/70">
                Careful planning and preparation to deliver large quantities without compromising taste or freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-neutral-dark)] mb-4">
              From My Kitchen
            </h2>
            <p className="text-[var(--color-neutral-dark)]/70 max-w-xl mx-auto">
              A small selection of dishes prepared for family gatherings, community events, and special occasions.
            </p>
          </div>

          <FoodGallery items={foodItems} />

          {/* Placeholder notice */}
          <div className="mt-8 p-6 bg-[var(--color-secondary)]/5 rounded-xl border border-[var(--color-secondary)]/20 text-center">
            <p className="text-sm text-[var(--color-neutral-dark)]/70">
              <span className="font-medium text-[var(--color-secondary)]">Note:</span> Photos coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <SocialEmbed />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--color-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Planning an Event?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            If you&apos;re planning a family celebration or community gathering,
            I&apos;d be happy to discuss how I can help.
          </p>
          <Link
            href="/contact?type=catering"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-secondary)] font-medium rounded-lg hover:bg-[var(--color-neutral-light)] transition-colors"
          >
            Inquire About Catering
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
