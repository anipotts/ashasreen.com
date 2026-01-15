'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

type InquiryType = 'job' | 'catering' | 'general';

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: InquiryType;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'general',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Set inquiry type from URL params
  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'catering' || type === 'job' || type === 'general') {
      setFormData(prev => ({ ...prev, inquiryType: type }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For now, we'll simulate form submission
      // In production, this would connect to a server action or API route
      await new Promise(resolve => setTimeout(resolve, 1500));

      // TODO: Replace with actual form submission
      // Options:
      // 1. Vercel serverless function to send email
      // 2. Formspree integration
      // 3. SendGrid/Resend API

      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryTypeLabels = {
    job: 'Job Opportunity',
    catering: 'Catering Request',
    general: 'General Inquiry',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Inquiry Type Selection */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-3">
          What can I help you with?
        </label>
        <div className="grid grid-cols-3 gap-3">
          {(['job', 'catering', 'general'] as InquiryType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, inquiryType: type }))}
              className={`p-3 rounded-lg text-sm font-medium transition-all ${
                formData.inquiryType === type
                  ? type === 'job'
                    ? 'bg-[var(--color-primary)] text-white'
                    : type === 'catering'
                    ? 'bg-[var(--color-secondary)] text-white'
                    : 'bg-[var(--color-accent)] text-white'
                  : 'bg-[var(--color-neutral-light)] text-[var(--color-neutral-dark)] hover:bg-[var(--color-neutral-medium)]'
              }`}
            >
              {inquiryTypeLabels[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-medium)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-medium)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          Phone Number <span className="text-[var(--color-neutral-dark)]/50">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-medium)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-medium)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
          placeholder={
            formData.inquiryType === 'catering'
              ? 'e.g., Catering for Wedding Reception'
              : formData.inquiryType === 'job'
              ? 'e.g., HR Coordinator Position at ABC Company'
              : 'How can I help?'
          }
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-medium)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors resize-none"
          placeholder={
            formData.inquiryType === 'catering'
              ? 'Please include event date, estimated guest count, and any dietary requirements...'
              : formData.inquiryType === 'job'
              ? 'Please tell me about the position and company...'
              : 'Your message...'
          }
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-lg font-medium transition-all ${
          isSubmitting
            ? 'bg-[var(--color-neutral-medium)] text-[var(--color-neutral-dark)]/50 cursor-not-allowed'
            : formData.inquiryType === 'catering'
            ? 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)]'
            : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]'
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm font-medium">
            Thank you for your message! I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm font-medium">
            Something went wrong. Please try again or email me directly at asreeniv3@gmail.com
          </p>
        </div>
      )}

      {/* Note about form */}
      <p className="text-xs text-[var(--color-neutral-dark)]/50 text-center">
        * Form submission will be connected to email delivery shortly.
        For immediate inquiries, please email{' '}
        <a href="mailto:asreeniv3@gmail.com" className="text-[var(--color-primary)] hover:underline">
          asreeniv3@gmail.com
        </a>
      </p>
    </form>
  );
}
