import type { Locale } from '../../locales/sv';
import ContactForm from './ContactForm';
import { motion, AnimatePresence } from 'motion/react';

type ContactModalProps = {
  isOpen: boolean;
  contact: Locale['contact'];
  onClose: () => void;
};

function ContactModal({ isOpen, contact, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto bg-background/80"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex min-h-full items-center justify-center px-4 py-6">
            <motion.div
              className="relative w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ContactForm contact={contact} onClose={onClose} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
