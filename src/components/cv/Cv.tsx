import type { Locale } from '../../locales/sv';
import CloseIcon from '../icons/CloseIcon';

type CvPorps = {
  cv: Locale['cv'];
  onContactClick: () => void;
  onClose: () => void;
};

function Cv({ cv, onContactClick, onClose }: CvPorps) {
  return (
    <section className="relative w-full min-h-screen py-6 mx-auto bg-background">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 z-60 text-foreground"
      >
        <CloseIcon />
      </button>
      <div className="w-full max-w-5xl mx-auto px-6">
        <header className="flex flex-wrap-reverse gap-2 items-start">
          <img
            src="/images/imageCV.webp"
            alt=""
            className="w-[50%] max-w-82 min-w-72 h-auto object-cover aspect-square"
          />
          <div className="flex-1 min-w-72 flex flex-col justify-end">
            <h1 className="text-foreground leading-tight">Louise</h1>
            <span className="text-grey text-h2 font-heading leading-tight">
              Sverkström
            </span>
          </div>
        </header>
        <div className="mainContent grid lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="order-2 lg:order-1 flex flex-col mt-8 lg:mt-36 max-w-sm">
            {/* WORK */}
            <section>
              <h3 className="font-heading text-title-cv text-grey">
                {cv.experience.title}
              </h3>
              {cv.experience.items.map((job) => (
                <article
                  className="mt-6 lg:mt-8 text-foreground"
                  key={`${job.role}-${job.dates}`}
                >
                  <h4 className="leading-snug">{job.role}</h4>
                  <p className="text-md">{job.workplace}</p>
                  <p className="text-xs font-bold text-grey mt-4">
                    {job.dates}
                  </p>
                </article>
              ))}
            </section>
            {/* ABOUT*/}
            <section className="mt-8">
              <h3 className="font-heading text-title-cv text-grey">
                {cv.about.title}
              </h3>
              <p className="mt-6 text-foreground">{cv.about.text}</p>
            </section>
            {/* INFO */}
            <section className="mt-8">
              <h3 className="font-heading text-title-cv text-grey">
                {cv.info.title}
              </h3>
              <ul className="flex flex-col gap-4 mt-6 text-foreground">
                <li>{cv.info.drivingLicense}</li>
                <li>{cv.info.languages}</li>
                <li>{cv.info.references}</li>
              </ul>
              <div className="flex gap-6 mt-6 lg:mt-9">
                <button
                  type="button"
                  onClick={onContactClick}
                  className="shrink-0 whitespace-nowrap text-foreground font-bold bg-background border-3 p-2 rounded-3xl"
                >
                  {cv.info.contact}
                </button>
                <a
                  href="https://github.com/LolloLicense"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 whitespace-nowrap text-background leading-7 font-bold bg-foreground p-2 rounded-3xl"
                >
                  {cv.info.github}
                </a>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="order-1 lg:order-2 flex flex-col mt-8 lg:mt-36 max-w-lg">
            {/* EDUCATION */}
            <section>
              <h3 className="font-heading text-title-cv text-grey">
                {cv.education.title}
              </h3>
              {cv.education.items.map((education) => (
                <article
                  className="mt-6 lg:mt-8 text-foreground"
                  key={`${education.school}-${education.dates}`}
                >
                  <p className="font-bold mt-4 text-grey">{education.dates}</p>
                  <h4>
                    <span className="block">{education.school}</span>
                    <span className="block">{education.education}</span>
                  </h4>
                  <ul className="list-disc list-inside marker:text-xs marker:text-grey">
                    {education.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cv;
