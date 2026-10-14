import CvIcon from './icons/CvIcon';

type HeroProps = {
  onCvClick: () => void;
};

function Hero({ onCvClick }: HeroProps) {
  return (
    <section className='text-foreground font-heading ml-8 mt-8 gap-2 flex items-start justify-between md:ml-14 md:mt-22  lg:ml-28 lg:mt-16'>
      <div>
        <h1 className='text-h1 leading-none'>Louise</h1>
        <p className='text-h2 text-grey leading-none'>Sverkström</p>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <h2 className='text-h2 [writing-mode:vertical-rl] leading-none whitespace-nowrap'>
          CV
        </h2>
        <button
          type='button'
          onClick={onCvClick}
          aria-label='Öppna CV'
          className='w-8 h-8 md:w-14 md:h-14 shrink-0 bg-blue rounded-full flex items-center justify-center text-light hover:bg-orange'
        >
          <CvIcon className='w-3 h-3 md:w-4 md:h-4 rotate-45' />
        </button>
      </div>
    </section>
  );
}

export default Hero;
