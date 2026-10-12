import type { Locale } from '../../locales/sv';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactErrors = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export const validateContactForm = (
  form: ContactFormData,
  errorMessages: Locale['contact']['errors'],
) => {
  const errors: ContactErrors = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  if (form.name.trim().length < 2) {
    errors.name = errorMessages.name;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(form.email.trim())) {
    errors.email = errorMessages.email;
  }

  if (!form.phone.trim()) {
    errors.phone = errorMessages.phone;
  }

  if (!form.subject) {
    errors.subject = errorMessages.subject;
  }

  if (!form.message.trim()) {
    errors.message = errorMessages.message;
  }

  return errors;
};
