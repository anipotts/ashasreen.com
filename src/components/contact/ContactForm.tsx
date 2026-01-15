'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CircleNotch } from '@phosphor-icons/react';

type InquiryType = 'job' | 'catering' | 'general';

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: InquiryType;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'general',
  subject: '',
  message: '',
};

const INQUIRY_TYPE_LABELS: Record<InquiryType, string> = {
  job: 'Job Opportunity',
  catering: 'Catering Request',
  general: 'General Inquiry',
};

const INQUIRY_TYPES: InquiryType[] = ['job', 'catering', 'general'];

function getButtonColorClass(type: InquiryType, isSelected: boolean): string {
  if (!isSelected) {
    return 'bg-[var(--color-neutral-light)] text-[var(--color-neutral-dark)] hover:bg-[var(--color-neutral-medium)]';
  }

  switch (type) {
    case 'job':
      return 'bg-[var(--color-primary)] text-white';
    case 'catering':
      return 'bg-[var(--color-secondary)] text-white';
    case 'general':
      return 'bg-[var(--color-accent)] text-white';
  }
}

function getSubjectPlaceholder(inquiryType: InquiryType): string {
  switch (inquiryType) {
    case 'catering':
      return 'e.g., Catering for Wedding Reception';
    case 'job':
      return 'Remote HR or People Operations Opportunity';
    case 'general':
      return 'How can I help?';
  }
}

function getMessagePlaceholder(inquiryType: InquiryType): string {
  switch (inquiryType) {
    case 'catering':
      return 'Please include event date, estimated guest count, and any dietary requirements...';
    case 'job':
      return 'Please share details about the role and team.';
    case 'general':
      return 'Your message...';
  }
}

function getSubmitButtonClass(inquiryType: InquiryType, isSubmitting: boolean): string {
  if (isSubmitting) {
    return 'bg-[var(--color-neutral-medium)] text-[var(--color-neutral-dark)]/50 cursor-not-allowed';
  }

  if (inquiryType === 'catering') {
    return 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)]';
  }

  return 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]';
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'catering' || type === 'job' || type === 'general') {
      setFormData((prev) => ({ ...prev, inquiryType: type }));
    }
  }, [searchParams]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleInquiryTypeChange(type: InquiryType): void {
    setFormData((prev) => ({ ...prev, inquiryType: type }));
  }

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData(INITIAL_FORM_DATA);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    'w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-medium)] bg-white dark:bg-[#1A1A1A] dark:text-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-3">
          What can I help you with?
        </label>
        <div className="grid grid-cols-3 gap-3">
          {INQUIRY_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleInquiryTypeChange(type)}
              className={`p-3 rounded-lg text-sm font-medium transition-all ${getButtonColorClass(type, formData.inquiryType === type)}`}
            >
              {INQUIRY_TYPE_LABELS[type]}
            </button>
          ))}
        </div>
      </div>

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
          className={inputClassName}
          placeholder="John Doe"
        />
      </div>

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
          className={inputClassName}
          placeholder="john@example.com"
        />
      </div>

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
          className={inputClassName}
          placeholder="(555) 123-4567"
        />
      </div>

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
          className={inputClassName}
          placeholder={getSubjectPlaceholder(formData.inquiryType)}
        />
      </div>

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
          className={`${inputClassName} resize-none`}
          placeholder={getMessagePlaceholder(formData.inquiryType)}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-lg font-medium transition-all ${getSubmitButtonClass(formData.inquiryType, isSubmitting)}`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <CircleNotch size={20} className="animate-spin mr-3" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-800 dark:text-green-300 text-sm font-medium">
            Thank you for your message! I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-300 text-sm font-medium">
            Something went wrong. Please try again or email me directly at asreeniv3@gmail.com
          </p>
        </div>
      )}

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
