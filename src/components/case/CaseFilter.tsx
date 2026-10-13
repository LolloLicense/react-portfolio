import type { Case } from '../../types/case';

type CaseFilterProps = {
  cases: Case[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
};

function CaseFilter({ cases, selectedTags, setSelectedTags }: CaseFilterProps) {
  const allTags = [...new Set(cases.flatMap((item) => item.tags))];
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return (
    <div className="flex gap-2 flex-wrap mb-4 text-light font-bold leading-1">
      <button
        onClick={() => setSelectedTags([])}
        className={`${
          selectedTags.length === 0 ? 'bg-blue' : 'bg-dark'
        } p-3 rounded-2xl`}
      >
        All
      </button>
      {allTags.map((tag) => (
        <button
          onClick={() => handleTagClick(tag)}
          key={tag}
          className={`${selectedTags.includes(tag) ? 'bg-blue' : 'bg-dark'} p-3 rounded-2xl`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default CaseFilter;
