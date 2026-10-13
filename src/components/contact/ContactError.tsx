import type { Locale } from '../../locales/sv';
import CloseIcon from '../icons/CloseIcon';
import ContactBg from './ContactBg';

type ContactErrorProps = {
  contact: Locale['contact'];
  onClose: () => void;
  onRetry: () => void;
};

function ContactError({ contact, onClose, onRetry }: ContactErrorProps) {
  return (
    <div className="relative my-24 w-full max-w-lg flex flex-col gap-4 text-foreground p-6 rounded-2xl border-3 border-foreground bg-background min-h-112.5 lg:min-h-162.5">
      <ContactBg className="absolute bottom-0 left-0 w-full h-auto z-0 rounded-lg pointer-events-none text-pink-600/20" />
      <button
        type="button"
        onClick={() => {
          onClose();
        }}
        aria-label={contact.close}
        className="absolute top-8 right-8 z-50"
      >
        <CloseIcon />
      </button>
      <div className="relative max-w-xl z-10">
        <h2 className="leading-tight uppercase mt-4 lg:mt-8 text-pink-600">
          {contact.submitError.title}
        </h2>
        <p className="md:text-2xl max-w-96">{contact.submitError.text}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="relative z-10 mt-20 self-center whitespace-nowrap text-background font-bold bg-foreground p-2 rounded-3xl hover:bg-orange"
      >
        {contact.submitError.retry}
      </button>
    </div>
  );
}

export default ContactError;
