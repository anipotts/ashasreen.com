import type { Metadata } from 'next';
import { Suspense } from 'react';
import {
  EnvelopeSimple,
  LinkedinLogo,
  YoutubeLogo,
  InstagramLogo,
  Clock,
} from '@phosphor-icons/react/dist/ssr';
import ContactForm from '@/components/contact/ContactForm';
import { socialLinks } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for job opportunities, catering inquiries, or general questions.',
};

function ContactFormWrapper() {
  return (
    <Suspense fallback={<div className="animate-pulse bg-[var(--color-neutral-medium)] dark:bg-[#2D2D2D] h-96 rounded-xl" />}>
      <ContactForm />
    </Suspense>
  );
}

interface ContactLink {
  href: string;
  icon: React.ReactNode;
  iconBgClass: string;
  label: string;
  value: string;
  hoverClass: string;
  isExternal?: boolean;
}

const DIRECT_CONTACT_LINKS: ContactLink[] = [
  {
    href: `mailto:${socialLinks.email}`,
    icon: <EnvelopeSimple size={20} weight="duotone" className="text-[var(--color-primary)]" />,
    iconBgClass: 'bg-[var(--color-primary)]/10',
    label: 'Email',
    value: socialLinks.email,
    hoverClass: 'hover:text-[var(--color-primary)]',
  },
  {
    href: socialLinks.linkedin,
    icon: <LinkedinLogo size={20} weight="duotone" className="text-[var(--color-primary)]" />,
    iconBgClass: 'bg-[var(--color-primary)]/10',
    label: 'LinkedIn',
    value: 'View Profile',
    hoverClass: 'hover:text-[var(--color-primary)]',
    isExternal: true,
  },
];

const SOCIAL_MEDIA_LINKS: ContactLink[] = [
  {
    href: socialLinks.youtube,
    icon: <YoutubeLogo size={20} weight="duotone" className="text-red-500" />,
    iconBgClass: 'bg-red-500/10',
    label: 'YouTube',
    value: "Asha's Culinary World",
    hoverClass: 'hover:text-red-500',
    isExternal: true,
  },
  {
    href: socialLinks.instagram,
    icon: <InstagramLogo size={20} weight="duotone" className="text-pink-500" />,
    iconBgClass: 'bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-400/10',
    label: 'Instagram',
    value: '@ashasculinaryworld',
    hoverClass: 'hover:text-pink-500',
    isExternal: true,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)] dark:bg-[#0D0D0D]">
      <section className="py-16 md:py-24 bg-gradient-to-b from-white dark:from-[#0D0D0D] to-[var(--color-neutral-light)] dark:to-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-primary)] font-medium mb-2 tracking-wide uppercase text-sm">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-neutral-dark)] dark:text-white mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-[var(--color-neutral-dark)]/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re interested in discussing HR opportunities, planning a catering event,
            or simply want to connect, I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--color-neutral-medium)] dark:border-[#2D2D2D]">
                <ContactFormWrapper />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[var(--color-neutral-medium)] dark:border-[#2D2D2D]">
                <h3 className="font-serif text-lg font-semibold text-[var(--color-neutral-dark)] dark:text-white mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  {DIRECT_CONTACT_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-3 text-[var(--color-neutral-dark)]/80 dark:text-white/80 ${link.hoverClass} transition-colors`}
                    >
                      <div className={`w-10 h-10 ${link.iconBgClass} rounded-lg flex items-center justify-center`}>
                        {link.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-neutral-dark)]/50 dark:text-white/50">{link.label}</p>
                        <p className="text-sm font-medium">{link.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[var(--color-neutral-medium)] dark:border-[#2D2D2D]">
                <h3 className="font-serif text-lg font-semibold text-[var(--color-neutral-dark)] dark:text-white mb-4">
                  Social Media
                </h3>
                <div className="space-y-4">
                  {SOCIAL_MEDIA_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-[var(--color-neutral-dark)]/80 dark:text-white/80 ${link.hoverClass} transition-colors`}
                    >
                      <div className={`w-10 h-10 ${link.iconBgClass} rounded-lg flex items-center justify-center`}>
                        {link.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-neutral-dark)]/50 dark:text-white/50">{link.label}</p>
                        <p className="text-sm font-medium">{link.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--color-primary)]/5 dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[var(--color-primary)]/20 dark:border-[var(--color-primary)]/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} weight="duotone" className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-neutral-dark)] dark:text-white mb-1">
                      Response Time
                    </h4>
                    <p className="text-sm text-[var(--color-neutral-dark)]/70 dark:text-white/70">
                      I typically respond to inquiries within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
