import { YoutubeLogo, InstagramLogo } from '@phosphor-icons/react/dist/ssr';
import { socialLinks } from '@/lib/data';

interface SocialCard {
  platform: 'youtube' | 'instagram';
  name: string;
  handle: string;
  stats: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  buttonIcon: React.ReactNode;
  buttonText: string;
  buttonClass: string;
  iconBgClass: string;
}

const SOCIAL_CARDS: SocialCard[] = [
  {
    platform: 'youtube',
    name: "Asha's Culinary World",
    handle: '',
    stats: '4,500+ subscribers',
    description: 'Cooking videos, traditional recipes, and behind-the-scenes moments from my kitchen!',
    href: socialLinks.youtube,
    icon: <YoutubeLogo size={24} weight="duotone" className="text-white" />,
    buttonIcon: <YoutubeLogo size={20} weight="duotone" className="mr-2" />,
    buttonText: 'Subscribe on YouTube',
    buttonClass: 'bg-red-500 text-white hover:bg-red-600',
    iconBgClass: 'bg-red-500',
  },
  {
    platform: 'instagram',
    name: '@ashasculinaryworld',
    handle: '',
    stats: '1,000+ followers',
    description: 'Photos and short videos of daily cooking and special dishes.',
    href: socialLinks.instagram,
    icon: <InstagramLogo size={24} weight="duotone" className="text-white" />,
    buttonIcon: <InstagramLogo size={20} weight="duotone" className="mr-2" />,
    buttonText: 'Follow on Instagram',
    buttonClass: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white hover:opacity-90',
    iconBgClass: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
  },
];

export default function SocialEmbed() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-neutral-dark)] mb-4">
            Follow Along
          </h2>
          <p className="text-[var(--color-neutral-dark)]/70 max-w-xl mx-auto">
            I occasionally share cooking videos and updates on social media, where I&apos;ve received over 1 million views across all platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SOCIAL_CARDS.map((card) => (
            <div
              key={card.platform}
              className="bg-[var(--color-neutral-light)] rounded-2xl p-8 border border-[var(--color-neutral-medium)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${card.iconBgClass} rounded-xl flex items-center justify-center`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[var(--color-neutral-dark)]">
                    {card.name}
                  </h3>
                  <p className="text-[var(--color-neutral-dark)]/60 text-sm">
                    {card.stats}
                  </p>
                </div>
              </div>

              <p className="text-[var(--color-neutral-dark)]/70 mb-6">
                {card.description}
              </p>

              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full px-6 py-3 font-medium rounded-lg transition-all ${card.buttonClass}`}
              >
                {card.buttonIcon}
                {card.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
