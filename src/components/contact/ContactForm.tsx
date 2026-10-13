import React, { useState } from 'react';
import type { Locale } from '../../locales/sv';
import ArrowIcon from '../icons/ArrowIcon';
import ContactBg from './ContactBg';
import { validateContactForm } from './contactValidation';
import ContactSuccess from './ContactSuccess';
import ContactError from './ContactError';
import CloseIcon from '../icons/CloseIcon';

type ContactFormProps = {
  contact: Locale['contact'];
  onClose: () => void;
};

function ContactForm({ contact, onClose }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateContactForm(form, contact.errors);
    setErrors(validationErrors);

    const hasError = Object.values(validationErrors).some(
      (error) => error !== '',
    );

    if (hasError) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mnpjbeer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return <ContactSuccess contact={contact} onClose={onClose} />;
  }

  if (submitStatus === 'error') {
    return (
      <ContactError
        contact={contact}
        onClose={onClose}
        onRetry={() => setSubmitStatus('idle')}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative max-w-lg flex flex-col gap-4 text-foreground p-6 rounded-2xl border-3 border-foreground bg-background"
    >
      <ContactBg className="absolute bottom-0 rounded-2xl left-0 w-full h-auto z-0 pointer-events-none text-contact-bg" />
      <button
        type="button"
        onClick={onClose}
        aria-label={contact.close}
        className="absolute top-8 right-8 z-50"
      >
        <CloseIcon />
      </button>
      <div className="relative z-10 max-w-xl">
        <h2 className="leading-tight uppercase mt-8">{contact.title}</h2>
        <p className="md:text-2xl max-w-96">{contact.text}</p>
      </div>

      <div className="relative z-10 flex flex-col gap-4 items-end">
        {/* NAME */}
        <div className="flex gap-1 flex-col w-72">
          <label htmlFor="name" className="font-bold">
            {contact.name}:
          </label>

          <input
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder={contact.placeholders.name}
            type="text"
            className="border-foreground bg-background border-2 px-2 py-2"
          />

          {errors.name && (
            <span className="text-sm text-red-600 font-bold">
              {errors.name}
            </span>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex gap-1 flex-col w-72">
          <label htmlFor="email" className="font-bold">
            {contact.email}:
          </label>

          <input
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder={contact.placeholders.email}
            type="email"
            className="border-foreground bg-background border-2 px-2 py-2"
          />

          {errors.email && (
            <span className="text-sm text-red-600 font-bold">
              {errors.email}
            </span>
          )}
        </div>

        {/* PHONE */}
        <div className="flex gap-1 flex-col w-72">
          <label htmlFor="phone" className="font-bold">
            {contact.phone}:
          </label>

          <input
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={contact.placeholders.phone}
            type="tel"
            className="border-foreground bg-background border-2 px-2 py-2"
          />

          {errors.phone && (
            <span className="text-sm text-red-600 font-bold">
              {errors.phone}
            </span>
          )}
        </div>

        {/* SUBJECT */}
        <fieldset className="flex gap-2 flex-col w-72">
          <legend className="font-bold">{contact.subject}</legend>

          <div className="flex gap-6 flex-wrap">
            <label className="flex items-center gap-1 font-bold">
              <input
                type="radio"
                name="subject"
                value="business"
                checked={form.subject === 'business'}
                onChange={handleChange}
              />
              {contact.subjects.business}
            </label>

            <label className="flex items-center gap-1 font-bold">
              <input
                type="radio"
                name="subject"
                value="plotTwist"
                checked={form.subject === 'plotTwist'}
                onChange={handleChange}
              />
              {contact.subjects.plotTwist}
            </label>
          </div>

          {errors.subject && (
            <span className="text-sm text-red-600 font-bold">
              {errors.subject}
            </span>
          )}
        </fieldset>

        {/* MESSAGE */}
        <div className="flex gap-1 flex-col w-72">
          <label htmlFor="message" className="font-bold">
            {contact.message}:
          </label>

          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder={contact.placeholders.message}
            className="border-foreground bg-background border-2 px-2 py-2"
          />

          {errors.message && (
            <span className="text-sm text-red-600 font-bold">
              {errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="shrink-0 whitespace-nowrap uppercase text-background font-bold bg-foreground py-2 px-4 rounded-3xl flex gap-6 items-center"
        >
          {isSubmitting ? contact.sending : contact.send}
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
