import SmileyIcon from '../icons/SmileyIcon';
import type { Locale } from '../../locales/sv';

type ContactProps = {
  contact: Locale['contact'];
  onContactClick: () => void;
};
function Contact({ contact, onContactClick }: ContactProps) {
  return (
    <section
      id='contact'
      className='scroll-mt-12 ml-8 my-16 md:ml-16 md:mt-22 lg:ml-28 lg:mt-28 text-foreground'
    >
      <div className='flex flex-col gap-4 md:flex-row'>
        <h2 className='uppercase text-h2 md:[writing-mode:vertical-rl] leading-none whitespace-nowrap'>
          {contact.section.title}
        </h2>
        <div className='flex flex-1 md:justify-between gap-4'>
          <div className='flex flex-col md:justify-between gap-6'>
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>{contact.section.intro}</p>
              <p className='max-w-56 font-light'>{contact.section.text}</p>
            </div>
            <button
              type='button'
              onClick={() => {
                onContactClick();
              }}
              className='w-full max-w-sm whitespace-nowrap text-light font-bold bg-blue p-2 rounded-3xl uppercase hover:bg-orange'
            >
              {contact.section.button}
            </button>
          </div>
          <div className='flex flex-1 justify-end items-center overflow-hidden'>
            <SmileyIcon className='min-w-30  h-auto' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
