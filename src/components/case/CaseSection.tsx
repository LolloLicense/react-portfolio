import CaseSlider from './CaseSlider';
import cases from '../../data/case.json';

function CaseSection() {
  return (
    <section className="flex gap-4 ml-8 mt-8  md:ml-16 md:mt-22  lg:ml-28 lg:mt-28">
      <div className="flex flex-col items-end gap-3">
        <h2 className="uppercase text-h2 md:[writing-mode:vertical-rl] leading-none whitespace-nowrap">
          Case
        </h2>
        <span className="mt-3 text-sm font-bold md:[writing-mode:vertical-rl]">
          {String(cases.length).padStart(2, '0')}
        </span>
      </div>
      <CaseSlider />
    </section>
  );
}

export default CaseSection;
