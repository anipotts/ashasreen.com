import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { socialLinks } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for job opportunities, catering inquiries, or general questions.',
};

function ContactFormWrapper() {
  return (
    <Suspense fallback={<div className="animate-pulse bg-[var(--color-neutral-medium)] h-96 rounded-xl" />}>
      <ContactForm />
    </Suspense>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[var(--color-neutral-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-primary)] font-medium mb-2 tracking-wide uppercase text-sm">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-neutral-dark)] mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-[var(--color-neutral-dark)]/70 max-w-2xl mx-auto leading-relaxed">
            Whether you have a job opportunity, want to inquire about catering,
            or just want to say hello - I&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--color-neutral-medium)]">
                <ContactFormWrapper />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="bg-white rounded-2xl p-6 border border-[var(--color-neutral-medium)]">
                <h3 className="font-serif text-lg font-semibold text-[var(--color-neutral-dark)] mb-4">
                  Direct Contact
                </h3>

                <div className="space-y-4">
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="flex items-center gap-3 text-[var(--color-neutral-dark)]/80 hover:text-[var(--color-primary)] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-neutral-dark)]/50">Email</p>
                      <p className="text-sm font-medium">{socialLinks.email}</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-neutral-dark)]/80 hover:text-[var(--color-primary)] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-neutral-dark)]/50">LinkedIn</p>
                      <p className="text-sm font-medium">View Profile</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 border border-[var(--color-neutral-medium)]">
                <h3 className="font-serif text-lg font-semibold text-[var(--color-neutral-dark)] mb-4">
                  Social Media
                </h3>

                <div className="space-y-4">
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-neutral-dark)]/80 hover:text-red-500 transition-colors"
                  >
                    <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-neutral-dark)]/50">YouTube</p>
                      <p className="text-sm font-medium">Asha&apos;s Culinary World</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-neutral-dark)]/80 hover:text-pink-500 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-400/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-neutral-dark)]/50">Instagram</p>
                      <p className="text-sm font-medium">@ashasculinaryworld</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-[var(--color-primary)]/5 rounded-2xl p-6 border border-[var(--color-primary)]/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-neutral-dark)] mb-1">
                      Response Time
                    </h4>
                    <p className="text-sm text-[var(--color-neutral-dark)]/70">
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
