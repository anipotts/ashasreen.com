'use client';

import { CookingPot, UsersThree, Timer } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

interface Specialty {
  icon: Icon;
  title: string;
  description: string;
}

const SPECIALTIES: Specialty[] = [
  {
    icon: CookingPot,
    title: 'Signature Biryani',
    description:
      'Traditional malabar biryani (chicken/mutton/shrimp) prepared with aromatic spices and high-quality ingredients.',
  },
  {
    icon: UsersThree,
    title: 'Home Catering for Hundreds',
    description:
      'Experience preparing food for gatherings of 50-100+ guests while maintaining consistency and extremely high quality.',
  },
  {
    icon: Timer,
    title: 'Efficient Preparation',
    description:
      'Careful planning and preparation to deliver large quantities without compromising taste or freshness.',
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="py-12 bg-white dark:bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {SPECIALTIES.map((specialty) => {
            const IconComponent = specialty.icon;
            return (
              <div key={specialty.title} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center">
                  <IconComponent size={32} weight="duotone" className="text-[var(--color-secondary)]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[var(--color-neutral-dark)] dark:text-white mb-2">
                  {specialty.title}
                </h3>
                <p className="text-sm text-[var(--color-neutral-dark)]/70 dark:text-white/70">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
