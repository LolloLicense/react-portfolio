import type { Locale } from '../../locales/sv';
import ContactForm from './ContactForm';

type ContactModalProps = {
  isOpen: boolean;
  contact: Locale['contact'];
  onClose: () => void;
};

function ContactModal({ isOpen, contact, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background/80">
      <div className="flex min-h-full justify-center px-4 py-6">
        <div className="relative w-full max-w-lg">
          <ContactForm contact={contact} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
