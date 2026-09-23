import CvIcon from './icons/CvIcon';

function Hero() {
  return (
    <section className="font-heading ml-8 mt-8 gap-2 flex items-start justify-between md:ml-16 md:mt-10  lg:ml-28 lg:mt-12">
      <div>
        <h1 className="text-h1 leading-none">Louise</h1>
        <p className="text-h2">Sverktsröm</p>
      </div>
      <div className="flex gap-1">
        <a
          href=""
          className="text-foreground flex items-center hover:text-orange"
        >
          <CvIcon className="w-6 md:w-16 lg:w-24 h-auto" />
        </a>
        <h2 className="text-h2 md:[writing-mode:vertical-rl] leading-none whitespace-nowrap">
          CV
        </h2>
      </div>
    </section>
  );
}

export default Hero;
