import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import FoodGallery from '@/components/culinary/FoodGallery';
import SocialEmbed from '@/components/culinary/SocialEmbed';
import Testimonials from '@/components/culinary/Testimonials';
import SpecialtiesSection from '@/components/culinary/SpecialtiesSection';
import { foodItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Culinary',
  description:
    'Authentic South Indian cuisine and large-scale catering services. Specializing in biryani for events of 50-100+ guests.',
};

export default function CulinaryPage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)] dark:bg-[#0D0D0D]">
      <section className="py-16 md:py-24 bg-gradient-to-b from-[var(--color-secondary)]/10 dark:from-[var(--color-secondary)]/5 to-[var(--color-neutral-light)] dark:to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-secondary)] font-medium mb-2 tracking-wide uppercase text-sm">
            Personal Work
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-neutral-dark)] dark:text-white mb-6">
            Culinary Work
          </h1>
          <p className="text-lg text-[var(--color-neutral-dark)]/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            Cooking has always been a meaningful part of my life. I specialize in traditional South Indian dishes
            prepared with intention and attention to detail — the same values that guide my professional work.
          </p>
        </div>
      </section>

      <SpecialtiesSection />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-neutral-dark)] dark:text-white mb-4">
              From My Kitchen
            </h2>
            <p className="text-[var(--color-neutral-dark)]/70 dark:text-white/70 max-w-xl mx-auto">
              A small selection of dishes prepared for family gatherings, community events, and special occasions.
            </p>
          </div>

          <FoodGallery items={foodItems} />

          <div className="mt-8 p-6 bg-[var(--color-secondary)]/5 dark:bg-[#1A1A1A] rounded-xl border border-[var(--color-secondary)]/20 dark:border-[var(--color-secondary)]/30 text-center">
            <p className="text-sm text-[var(--color-neutral-dark)]/70 dark:text-white/70">
              <span className="font-medium text-[var(--color-secondary)]">Note:</span> Photos coming soon
            </p>
          </div>
        </div>
      </section>

      <SocialEmbed />

      <Testimonials />

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
            <ArrowRight size={20} weight="bold" className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
