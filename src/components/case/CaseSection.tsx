import CaseSlider from './CaseSlider';
import CaseFilter from './CaseFilter';
import { useState } from 'react';
import cases from './case.json';

function CaseSection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const filteredCases =
    selectedTags.length === 0
      ? cases
      : cases.filter((item) =>
          selectedTags.some((tag) => item.tags.includes(tag)),
        );
  return (
    <section className="ml-8 mt-16 md:ml-16 md:mt-22 lg:ml-28 lg:mt-28 text-foreground">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex md:flex-col items-baseline md:items-end gap-3 md:mt-11">
          <h2 className="uppercase text-h2 md:[writing-mode:vertical-rl] leading-none whitespace-nowrap text-foreground">
            Case
          </h2>

          <span className="text-sm font-bold md:mt-3 md:mx-1">
            {String(filteredCases.length).padStart(2, '0')}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <CaseFilter
            cases={cases}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
          <CaseSlider cases={filteredCases} />
        </div>
      </div>
    </section>
  );
}

export default CaseSection;
