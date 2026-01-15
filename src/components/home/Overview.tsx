import Link from 'next/link';
import { Briefcase, BookOpen, Check, ArrowRight, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr';

interface OverviewCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgClass: string;
  iconHoverClass: string;
  borderHoverClass: string;
  features: string[];
  featureIconClass: string;
  linkHref: string;
  linkText: string;
  linkColorClass: string;
}

const OVERVIEW_CARDS: OverviewCard[] = [
  {
    title: 'HR & People Operations',
    description:
      'I support recruiters and managers by handling the details that keep hiring and onboarding running smoothly. From scheduling interviews to maintaining accurate records, I take pride in being dependable, organized, and thoughtful in every interaction.',
    icon: <Briefcase size={28} weight="duotone" className="text-[var(--color-primary)]" />,
    iconBgClass: 'bg-[var(--color-primary)]/10',
    iconHoverClass: 'group-hover:bg-[var(--color-primary)]/20',
    borderHoverClass: 'hover:border-[var(--color-primary)]',
    features: [
      'Candidate & Employee Support',
      'Interview Scheduling & Coordination',
      'ATS & HR Documentation',
    ],
    featureIconClass: 'text-[var(--color-primary)]',
    linkHref: '/experience',
    linkText: 'View Full Experience',
    linkColorClass: 'text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]',
  },
  {
    title: 'Culinary Work',
    description:
      'Outside of my professional work, I run a home-based culinary project focused on traditional South Indian cuisine. Cooking has always been my way of bringing people together, and it reflects the same care and patience I bring to my professional life.',
    icon: <BookOpen size={28} weight="duotone" className="text-[var(--color-secondary)]" />,
    iconBgClass: 'bg-[var(--color-secondary)]/10',
    iconHoverClass: 'group-hover:bg-[var(--color-secondary)]/20',
    borderHoverClass: 'hover:border-[var(--color-secondary)]',
    features: [
      'Large-Scale Home Catering',
      'Traditional South Indian Recipes',
      'Signature Biryani',
    ],
    featureIconClass: 'text-[var(--color-secondary)]',
    linkHref: '/culinary',
    linkText: 'Explore My Culinary Work',
    linkColorClass: 'text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)]',
  },
];

export default function Overview() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-neutral-dark)] dark:text-white mb-4">
            Professional Work, Guided by Care
          </h2>
          <p className="text-[var(--color-neutral-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
            Whether I&apos;m supporting hiring teams or preparing meals for a gathering, I approach my work with patience,
            intention, and responsibility. I believe good systems — and good people — make all the difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {OVERVIEW_CARDS.map((card) => (
            <div
              key={card.title}
              className={`group relative bg-[var(--color-neutral-light)] dark:bg-[#242424] rounded-2xl p-8 border border-[var(--color-neutral-medium)] dark:border-[#3D3D3D] ${card.borderHoverClass} transition-all duration-300 hover:shadow-xl`}
            >
              <div className={`w-14 h-14 ${card.iconBgClass} rounded-xl flex items-center justify-center mb-6 ${card.iconHoverClass} transition-colors`}>
                {card.icon}
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[var(--color-neutral-dark)] dark:text-white mb-4">
                {card.title}
              </h3>

              <p className="text-[var(--color-neutral-dark)]/70 dark:text-white/70 mb-6 leading-relaxed">
                {card.description}
              </p>

              <ul className="space-y-2 mb-8">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-[var(--color-neutral-dark)]/80 dark:text-white/80">
                    <Check size={16} weight="bold" className={`mr-2 ${card.featureIconClass}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={card.linkHref}
                className={`inline-flex items-center font-medium ${card.linkColorClass} transition-colors`}
              >
                {card.linkText}
                <ArrowRight size={16} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[var(--color-neutral-dark)]/70 dark:text-white/70 mb-6">
            Interested in working together or learning more?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-neutral-dark)] text-white dark:bg-[var(--color-primary)] dark:text-[#1A1A1A] font-medium rounded-lg hover:bg-[var(--color-neutral-dark)]/90 dark:hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Get In Touch
            <EnvelopeSimple size={20} weight="duotone" className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
