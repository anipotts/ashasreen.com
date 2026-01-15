import Link from 'next/link';
import { LinkedinLogo, YoutubeLogo, InstagramLogo, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr';
import { socialLinks } from '@/lib/data';

interface FooterLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const FOOTER_LINKS: FooterLink[] = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/culinary', label: 'Culinary' },
  { href: '/contact', label: 'Contact' },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: socialLinks.linkedin,
    label: 'LinkedIn',
    icon: <LinkedinLogo size={20} weight="duotone" />,
    hoverColor: 'hover:bg-[var(--color-primary)]',
  },
  {
    href: socialLinks.youtube,
    label: 'YouTube',
    icon: <YoutubeLogo size={20} weight="duotone" />,
    hoverColor: 'hover:bg-[var(--color-secondary)]',
  },
  {
    href: socialLinks.instagram,
    label: 'Instagram',
    icon: <InstagramLogo size={20} weight="duotone" />,
    hoverColor: 'hover:bg-[var(--color-secondary)]',
  },
  {
    href: `mailto:${socialLinks.email}`,
    label: 'Email',
    icon: <EnvelopeSimple size={20} weight="duotone" />,
    hoverColor: 'hover:bg-[var(--color-accent)]',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-neutral-dark)] dark:bg-[#0D0D0D] text-[var(--color-neutral-light)] dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold text-[var(--color-primary)] mb-4">
              Asha Sreenivasan
            </h3>
            <p className="text-sm text-[var(--color-neutral-medium)] dark:text-gray-400 leading-relaxed">
              HR professional with experience supporting recruiters, candidates, and people operations.
              Also a home-based South Indian cook specializing in traditional cuisine and community gatherings.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--color-primary)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-neutral-medium)] dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--color-primary)] mb-4">Connect</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`p-2 rounded-full bg-[var(--color-neutral-light)]/10 dark:bg-white/10 ${social.hoverColor} transition-colors`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--color-neutral-light)]/10 dark:border-white/10 text-center">
          <p className="text-sm text-[var(--color-neutral-medium)] dark:text-gray-400">
            &copy; {currentYear} Asha Sreenivasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
